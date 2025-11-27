import { createClient } from '@/utils/supabase/client';

// Create a single supabase client for the browser side
export const supabase = createClient();
