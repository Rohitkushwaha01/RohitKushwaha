import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative z-10 text-[#A3F7BF] font-segoe w-full bg-gradient-to-t from-[#0c3a3f] to-[#002b2e] py-10 px-6 sm:px-10 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

        {/* Left side: Copyright */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
          &copy; 2025 Rohit Kushwaha &bull;
        </p>

        {/* Right side: Links */}
        <div className="flex flex-col sm:flex-row gap-10 w-full md:w-auto">

          {/* Elsewhere Links */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-white">Elsewhere</h3>
            <div className="flex flex-col gap-2 text-sm sm:text-base md:text-lg">
              <Link to="https://www.linkedin.com/in/rohit-kushwaha-88598420a/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</Link>
              <Link to="https://www.upwork.com/freelancers/~012cc0c2bbe5e81168?viewMode=1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Upwork</Link>
              <Link to="https://github.com/Rohitkushwaha01" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Github</Link>
              <Link to="https://www.fiverr.com/rohitkushwaha01?public_mode=true" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Fiverr</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-white">Contact</h3>
            <div className="flex flex-col gap-2 text-sm sm:text-base md:text-lg">
              <Link to="https://wa.me/919503588850" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Message</Link>
              <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=rohitkushwahac@gmail.com&su=Hello&body=Hey Rohit, I saw your work and wanted to connect." target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Mail</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
