import LandingPage from "@/components/LandingPage";

// Option F: Waste Prevention
export default function VariantF() {
  return (
    <LandingPage
      variant="f"
      headline={
        <>
          Stop Wasting Months
          <br />
          <span className="text-accent">Building the Wrong Thing</span>
        </>
      }
      subheadline="Validate ideas through customer interviews, then build with AI coding tools using those insights."
    />
  );
}
