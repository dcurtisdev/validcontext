import LandingPage from "@/components/LandingPage";

// Option B: Time/Speed Focus
export default function VariantB() {
  return (
    <LandingPage
      variant="b"
      headline={
        <>
          Validate Your Idea in
          <br />
          <span className="text-accent">3 Days, Not 3 Weeks</span>
        </>
      }
      subheadline="Learn what customers need in days, not weeks—then let your AI coding assistant build with those insights already loaded."
    />
  );
}
