import LandingPage from "@/components/LandingPage";

// Option D: Outcome Focus
export default function VariantD() {
  return (
    <LandingPage
      variant="d"
      headline={
        <>
          Build Products People
          <br />
          <span className="text-accent">Actually Pay For</span>
        </>
      }
      subheadline="Validate ideas through structured customer interviews, test your landing page, then build with context your AI assistant can read."
    />
  );
}
