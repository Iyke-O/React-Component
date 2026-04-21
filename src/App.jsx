import Name from "./Name.jsx";
import Price from "./Price.jsx";
import Description from "./Description.jsx";
import Image from "./Image.jsx";

const firstName = "Iyke";
const profileImage =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330e?w=300";

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(254,240,138,0.95),_rgba(251,146,60,0.85)_45%,_rgba(120,53,15,0.95))] px-4 py-10">
      <section className="w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/40 bg-white/95 shadow-[0_24px_80px_rgba(120,53,15,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-2">
        <Image />
        <div className="space-y-4 px-6 py-7 text-center">
          <Name />
          <Price />
          <Description />
        </div>
      </section>

      <div className="mt-8 text-center text-white">
        <h3 className="text-2xl font-semibold tracking-tight drop-shadow-sm">
          {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
        </h3>

        
      </div>
    </main>
  );
}

export default App;
