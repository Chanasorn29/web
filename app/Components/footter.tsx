export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Left */}
        <div>
          <h2 className="text-xl font-bold mb-3">MyWebsite</h2>
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Tonliw. Designed & developed by me.
          </p>
        </div>

        {/* Center */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a className="hover:text-white" href="#home">Home</a></li>
            <li><a className="hover:text-white" href="#about">About</a></li>
            <li><a className="hover:text-white" href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Right */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/chanasorn.thongnumwon/" className="hover:text-white">Facebook</a>
            <a href="https://www.instagram.com/wil_low.io/" className="hover:text-white">Instagram</a>
            <a href="https://github.com/Chanasorn29" className="hover:text-white">GitHub</a>
            <a href="https://mail.google.com/mail/?view=cm&to=66200051@kmitl.ac.th" className="hover:text-white">Gmail</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
