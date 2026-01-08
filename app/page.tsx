import Navbar from "./Components/navbar";
import Footer from "./Components/footter";

export default function App() {
  return (
    
    <div className="min-h-screen bg-black text-white">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navbar />

      <section id="home" className="h-[120vh] flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row lg:gap-20 items-center justify-center p-6 lg:mt-0">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-meteorite">Hello I’m Tonliw</h1>
            <div className="text-md lg:text-lg">
              <p className="text-meteorite-500">
                A passionate developer crafting seamless web experiences
              </p>
              <p className="mt-4">Fun-loving, hard-working,</p>
              <p>determined and enjoys challenges.</p>
              <p>and always eager to learn more!</p>
            </div>
            <div>
              <div className="flex">
                <a href="#about" className="mt-6 px-15 py-4 w-full lg:w-auto bg-danger-600 text-white font-bold rounded hover:bg-meteorite-600 transition text-center">learn more!</a>
              </div>
              
                
              
            </div>
          </div>
          <div className="w-full p-8 lg:w-1/2 mt-5 lg:mt-0 flex justify-center">
            <img src="/Photoroom_25690107_013542.png" alt="logo" className="lg:h-100 lg:w-100 h-50 w-50" />
          </div>
        </div>

      </section>

      <section id="about" className="h-auto bg-neutral-0  p-6 md:pl-20 md:pr-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
        <div className=" lg:col-span-2 mt-6 p-5 lg:pr-20 lg:pl-20  text-black">
          <h1 className=" text-5xl md:text-6xl font-bold lg:text-7xl flex items-center justify-center">Software and Tools</h1>
          <div className="mt-4 text-lg flex flex-col items-center justify-center">
            <p className="">It’s a front-end with a little bit of back-end. These are the tools I use,</p>
            <p> but there are a lot of other tools I still need to learn. It’s pretty easy</p>
            <p>Just kidding 5555</p>
          </div>
        </div>
        
        </div>
        <div className="skills-container">
          <div className="scroll-row left-to-right">
            <div className="scroll-content">
              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/html.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/css.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/js.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/atom.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/tailwind.svg" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/html.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/css.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/js.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/atom.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/tailwind.svg" alt="" className="w-16 h-16 object-contain" />
              </li>
            </div>
          </div>

          <div className="scroll-row right-to-left">
            <div className="scroll-content">
              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/nodejs.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/mongodb.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/sql.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/python.png" alt="" className="w-16 h-16 object-contain" />
              </li>
              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/github.png" alt="" className="w-16 h-16 object-contain" />
              </li>
              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/docker.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/nodejs.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/mongodb.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/sql.png" alt="" className="w-16 h-16 object-contain" />
              </li>

              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/python.png" alt="" className="w-16 h-16 object-contain" />
              </li>
              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/github.png" alt="" className="w-16 h-16 object-contain" />
              </li>
              <li className="inline-flex justify-center items-center w-32 h-32 mx-2 bg-white rounded text-white text-xl font-bold">
                <img src="/docker.png" alt="" className="w-16 h-16 object-contain" />
              </li>
            </div>
          </div>
          
        </div>
        
      </section>
      <section className="bg-primary-1000">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-6 md:pl-20 md:pr-20">
          <div className="lg:border-r  border-gray-600 mb-5 lg:p-15">
            <h1 className="text-4xl  font-bold mb-4">So who am I?</h1>
            <p>Hi, I’m Chanasorn just a curious little developer from Thailand who loves tinkering with code and gadgets. I’m not the smartest person in the room, but I’m the one who keeps poking at bugs until they finally give up. I enjoy making websites that look nice, work smoothly, and maybe even make people smile. This portfolio is my playground, built with React.js, to show the world what I’ve been messing around with.</p>
          </div>
          <div className="lg:p-15 lg:pl-20">
            <h1 className="text-4xl font-bold mb-4">And what can I offer?</h1>
            <p>My knack for turning messy ideas into clean, user‑friendly pages,
                      My habit of designing databases that don’t collapse under pressure (hopefully!),
                      My ability to build websites, apps, and little software experiments that actually run
                      And a sprinkle of cybersecurity know‑how, because keeping things safe matters too</p>
          </div>
          </div>
      </section>

      <section id="projects" className="bg-primary-1000 min-h-screen w-full relative overflow-hidden">
        <div className="bg-[url(/public.avif)]  bg-cover bg-bottom bg-no-repeat">

          <div className="lg:col-span-2 mt-6 p-5 lg:pr-20 lg:pl-20">
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
        <div className="flex flex-col items-center h-full text-black">
          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-4 font-bold mt-50">My Projects</h2>
          <p className="text-lg">Check out some of my work below!</p>
          {/* Project Cards */}
          <div className="flex flex-col md:flex-row gap-12 mt-20 w-full justify-center p-6 lg:mb-10">
            {[
              {
                title: "Payment System Dashbord",
                desc: "Developed a payment and top-up system using RFID technology.",
                video: "/rfid.mp4",
                tech: ["FastAPI", "HTML", "Javascript"],
              },
              {
                title: "Web Anime Dairy",
                desc: "Created an anime review website with a social-media–style layout.",
                video: "/anime.mp4",
                tech: ["Django", "HTML", "Javascript"],
              },
              {
                title: "Guest messaging",
                desc: "The system lets users send messages easily and stores them securely in MongoDB.",
                video: "/mess.mp4",
                tech: ["React", "Node.js", "HTML"],
              },
            ].map((p, i) => (
              <div
                key={i}
                className="group relative rounded-2xl 
                          bg-white/5 backdrop-blur-xl 
                          border border-black/10 
                          hover:border-danger-500 
                          transition-all duration-500
                          overflow-hidden"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 
                            group-hover:opacity-100
                            bg-gradient-to-br 
                            from-danger-500/30 to-meteorite-500/30 
                            blur-xl transition"
                />

                {/* Number */}
                <span className="absolute top-4 right-6 
                                text-6xl font-bold 
                                text-white/5">
                  0{i + 1}
                </span>

                {/* Preview */}
                <video
                  muted
                  autoPlay
                  loop
                  className="w-full h-48 object-cover group-hover:scale-105 transition"
                >
                  <source src={p.video} type="video/mp4" />
                </video>

                {/* Content */}
                <div className="p-6 relative z-10 text-primary-500 bg-white">
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-sm text-black mb-4">
                    {p.desc}
                  </p>

                  <div className="flex gap-2 flex-wrap">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs text-white
                                  bg-black rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
        
      </section>
      
      
      <section id="footer"><Footer /></section>
    </div>
    
  );
}
