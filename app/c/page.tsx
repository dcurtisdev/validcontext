import LandingPage from "@/components/LandingPage";

// Option C: Integration Hook
export default function VariantC() {
  return (
    <LandingPage
      variant="c"
      headline={
        <>
          Your AI Coding Assistant
          <br />
          <span className="text-accent">Knows Your Customers. Finally.</span>
        </>
      }
      subheadline="The validation platform that connects customer interviews to your coding workflow via MCP."
    />
  );
}
