import Navigation from "@/components/navigation/index";
import BackgroundAnimation from "@/components/PhysicsBackground/BackgroundAnimation"; // Adjust the path accordingly
import SplineAnimation from "@/components/PhysicsBackground/SplineAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      {/* Background Animation */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
      <SplineAnimation />
      </div>

      {/* Navigation component in front of the Physics Background */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Navigation />
      </div>
    </main>
  );
}

