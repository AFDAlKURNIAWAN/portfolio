import { useState } from "react"

const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 flex items-center justify-center w-full z-10">
      <div className="flex flex-col items-center px-5 py-3 rounded-3xl border-gray-800 border  bg-gray-200 m-4 md:w-90 w-full">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="text-center text-black text-3xl font-medium">
            <h1>AFDAL</h1>
          </div>

          <button
          onClick={() => setOpen(!open)}
          className="w-8 h-5 pr-3 flex flex-col items-center justify-between cursor-pointer"
          >
            <span className={`h-0.5 w-8 bg-black transform transition duration-300 ease-in-out ${open ? "translate-y-2.5 rotate-45" : ""}`}></span>
            <span className={`h-0.5 w-8 bg-black transform transition duration-300 ease-in-out ${open ? "opacity-0" : ""}`}></span>
            <span className={`h-0.5 w-8 bg-black transform transition duration-300 ease-in-out ${open ? "-translate-y-2 -rotate-45" : ""}`}></span>
          </button>
        </div>
        


        { open &&
          <div className="flex flex-col text-center mt-5 text-2xl transition duration-300 ease-in-out">
          <a href="#home" className="hover:underline hover:text-gray-700 transition duration-300 ease-in-out">Home</a>
          <a href="#about" className="hover:underline hover:text-gray-700 transition duration-300 ease-in-out">About</a>
          <a href="#project" className="hover:underline hover:text-gray-700 transition duration-300 ease-in-out">Project</a>
          <a href="#contact" className="hover:underline hover:text-gray-700 transition duration-300 ease-in-out">Contact</a>
        </div>
        }
      </div>
    </nav>
  )
}

export default Navbar
