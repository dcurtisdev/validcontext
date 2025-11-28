import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <LandingPage
      variant="a"
      headline={
        <>
          You Can Build Anything.
          <br />
          <span className="text-accent">Now Know What to Build.</span>
        </>
      }
      subheadline="Professional customer discovery, accessible to every builder. Context flows to your AI tools automatically."
    />
  );
}
