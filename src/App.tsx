import Hero from "./components/hero/Hero";
import Trust from "./components/trust/Trust";
import Help from "./components/help/Help";
import Sla from "./components/sla/Sla";
import CodeSection from "./components/code/CodeSection";
import Sdk from "./components/sdk/Sdk";
import Features from "./components/features/Features";
import Testimonials from "./components/testimonials/Testimonials";
import Enterprise from "./components/enterprise/Enterprise";
import Awards from "./components/awards/Awards";
import Cases from "./components/cases/Cases";

function App() {
  return (
    <main>
      <Hero />
      <Trust />
      <Help />
      <Sla />
      <CodeSection />
      <div className="bg-ink py-6">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="h-px w-full bg-white/10" />
        </div>
      </div>
      <Sdk />
      <Features />
      <Testimonials />
      <Enterprise />
      <Awards />
      <Cases />
    </main>
  );
}

export default App;
