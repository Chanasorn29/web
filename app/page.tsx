import Navbar from "./Components/navbar";

export default function App() {
  return (
    
    <div className="min-h-screen bg-black text-white">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navbar />

      <section id="home" className="h-[120vh] flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row lg:gap-50 items-center justify-center mt-40 p-6 sm:mt-0">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-bold mb-4 text-meteorite">Hello I’m Tonliw</h1>
            <div className="text-lg">
              <p className="text-meteorite-500">
                A passionate developer crafting seamless web experiences
              </p>
              <p className="mt-4">Fun-loving, hard-working,</p>
              <p>determined and enjoys challenges.</p>
              <p>and always eager to learn more!</p>
            </div>
            <div>
              <button className="mt-4 px-10 py-4 w-full lg:w-auto bg-danger-600 text-white font-bold rounded hover:bg-meteorite-600 transition">
                learn more!
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-5 lg:mt-0 flex justify-center">
            <img src="/www.png" alt="logo" className="animate-tilt max-w-full h-auto" />
          </div>
        </div>

      </section>

      <section id="about" className="h-auto bg-neutral-0  p-6 md:pl-20 md:pr-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className=" bg-primary-500 p-10 rounded-2xl h-auto shadow-lg">
            <h1 className=" font-bold mb-2">So who am I?</h1>
            <p></p>
          </div>
          <div className=" bg-primary-500 p-10 rounded-2xl h-auto shadow-lg">
            <h1 className=" font-bold mb-2">And what can I offer?</h1>
              <p>I can offer you</p>
                <div>
                  <p></p>
                </div>
          
          </div>
        </div>
        
      </section>
      <section className="h-[120vh] bg-primary-1000">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-6 md:pl-20 md:pr-20 mb-10">
          <div className="lg:border-r  border-gray-600 p-15">
            <h1 className="text-4xl mb-4">So who am I?</h1>
            <p>Hi, I’m Chanasorn — just a curious little developer from Thailand who loves tinkering with code and gadgets. I’m not the smartest person in the room, but I’m the one who keeps poking at bugs until they finally give up. I enjoy making websites that look nice, work smoothly, and maybe even make people smile. This portfolio is my playground, built with React.js, to show the world what I’ve been messing around with.</p>
          </div>
          <div className="p-15 pl-20">
            <h1 className="text-4xl mb-4">And what can I offer?</h1>
            <p>My knack for turning messy ideas into clean, user‑friendly pages,
                      My habit of designing databases that don’t collapse under pressure (hopefully!),
                      My ability to build websites, apps, and little software experiments that actually run
                      And a sprinkle of cybersecurity know‑how, because keeping things safe matters too</p>
          </div>
          </div>
            <div className="lg:col-span-2 mt-6">
            <div className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-primary-500">1+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-primary-500">7+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
        </div>
        </div>
        
        <div className="flex flex-col items-center justify-center h-full text-white">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg">Check out some of my work below!</p>
        </div>
      </section>
      <section id="projects" className="bg-[#0c0520] h-screen w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[url(/public.avif)]  bg-cover bg-bottom bg-no-repeat flex">
           
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
