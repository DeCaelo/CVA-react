import Hero from "./components/Hero";
import { Button } from "./components/Buttons";

function App() {
  return (
    <div className="bg-theme-base text-theme-900 text-center">
      <div className="grid min-h-screen place-content-center p-6 lg:p-8 relative z-0 overflow-hidden">
        <Hero />
        <div className="mx-auto">
          <div className="grid place-items-center gap-12 mt-16">
            <Button>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
