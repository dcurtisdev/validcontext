import { openai } from '@/lib/openai';
import { NextResponse } from 'next/server';
import { Message } from '@/components/chat/types';

export const runtime = 'edge'; // Use Edge runtime for better streaming support

export async function POST(request: Request) {
  try {
    const { messages } = await request.json() as { messages: Message[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Messages are required and must be an array' },
        { status: 400 }
      );
    }

    if (!openai) {
      return NextResponse.json(
        { error: 'OpenAI client not initialized' },
        { status: 500 }
      );
    }

    // Create a streaming response with shorter timeout and retry options
    const stream = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
      max_tokens: 500,
      stream: true, // Enable streaming
    });

    // Create a text encoder
    const encoder = new TextEncoder();
    
    // Create a ReadableStream directly
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          // Handle stream events
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) {
              // Send each chunk as it arrives
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
            }
          }
          // End the stream
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        } catch (error) {
          console.error('Error in stream processing:', error);
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ error: 'Stream processing error' })}\n\n`));
        } finally {
          // Signal the end of the stream
          controller.close();
        }
      },
      cancel() {
        // Make sure to properly cancel the OpenAI stream if the client disconnects
        console.log('Client disconnected, stream cancelled');
      }
    });

    // Return the streaming response with appropriate headers for SSE
    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no'
      },
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
}
