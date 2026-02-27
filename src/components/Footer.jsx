import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white pt-12">
      <div className="container mx-auto px-6 md:px-20">
        <div className="footer-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <div className="footer-section">
            <h3 className="text-2xl font-black italic text-yellow-500">⚡SportStore</h3>
            <p className="text-sm text-gray-300">
              Your ultimate destination for premium sports equipment and apparel.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link to="/store" className="hover:text-yellow-400 transition">Store</Link></li>
              <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-400 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Returns</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-2 text-xl">
              <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition"><FaFacebookF /></a>
              <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition"><FaInstagram /></a>
              <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="#" aria-label="YouTube" className="hover:text-red-600 transition"><FaYoutube /></a>
            </div>
          </div>

        </div>

        <div className="footer-bottom mt-12 border-t border-gray-700 p-4 text-center text-sm text-gray-400">
          <p>© 2026 SportZone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer