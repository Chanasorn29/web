import Navbar from "./Components/navbar";
 
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="h-[120vh] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4 text-meteorite">Hello I am Chanasorn</h1>
        <p className="text-meteorite-500 text-lg">
          A passionate developer crafting seamless web experiences.
        </p>
      </section>

      <section id="home" className="h-[120vh] flex items-center justify-center bg-neutral-0">
        <p className="text-gray-400">More content below...</p>
      </section>
      <section id="about" className="h-[120vh] flex items-center justify-center bg-white">
        <p className="text-gray-400">About Section...</p>
      </section>
      <section className="h-[120vh] bg-primary-1000"></section>
      <section id="projects" className="bg-[#0c0520] h-screen w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[url(/public.avif)]  bg-cover bg-bottom bg-no-repeat txet-center flex flex-col items-center justify-center">
           <p className="text-gray-400">Projects Section...</p>
        </div>
      </section>
      <section id="about" className="h-[120vh] flex items-center justify-center bg-white">
        <p className="text-gray-400">About Section...</p>
      </section>
      {/* <section id="contact" className="h-[120vh] flex items-center justify-center">
        <p className="text-gray-400">Contact Section...</p> 
      </section> */}
    </div>
  );
}
