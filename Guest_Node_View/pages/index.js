import Hero from "../components/Hero";
import NodeOverview from "../components/NodeOverview";
import Navbar from "../components/Navbar";
import Help from "../components/Help";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="gradient-bg-welcome pb-40">
        <Navbar />
        <Hero />
      </div>
      <NodeOverview />
      <Help />
      <Footer />
    </div>
  );
}
