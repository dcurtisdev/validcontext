import LandingPage from "@/components/LandingPage";

// Option E: Confidence Angle
export default function VariantE() {
  return (
    <LandingPage
      variant="e"
      headline={
        <>
          Ship With Confidence,
          <br />
          <span className="text-accent">Not Guesswork</span>
        </>
      }
      subheadline="Master customer interviews in days, test your landing page, then build with AI coding tools using validated insights."
    />
  );
}
