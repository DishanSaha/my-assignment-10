import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

function Footer() {
  return (
    <footer className="h-full w-full text-black">
      <div className="bg-[#d5faec] text-gray-800 border-b border-[#0aab6d] py-10 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* VISIT Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">VISIT</h2>
            <ul className="space-y-2 text-sm ">
              <li>Projects</li>
              <li>Sponsors</li>
              <li>Media</li>
              <li>Gallery</li>
              <li>Video</li>
              <li>One Taka Meal</li>
              <li>Donation Clarification</li>
            </ul>
          </div>

          {/* HELP Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">HELP</h2>
            <ul className="space-y-2 text-sm">
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Campaign</li>
              <li>Volunteers</li>
              <li>Audit Report</li>
              <li>Banks</li>
            </ul>
          </div>

          {/* CONTACT Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">CONTACT</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <HiOutlineLocationMarker size={20} />
                House: 10 (1st floor), Road: 2/C, Pallabi R/A, Mirpur, Dhaka-1219
              </li>
              <li className="flex items-center gap-2">
                <HiOutlinePhone size={20} />
                +880 1878006234
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineLocationMarker size={20} />
                Other Branches
              </li>
            </ul>
          </div>

          {/* FOLLOW US Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">FOLLOW US ON</h2>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
              >
                <SiX size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
            <div className="mt-4 text-xs text-gray-700">
              DMCA.com Protection Status
            </div>
          </div>
        </div>

      </div>
      <div className=" bg-white  pt-4 text-center text-sm text-gray-700 py-6 px-4 sm:px-6 lg:px-16">
        2025 &copy; Sebajatra Foundation | Developed By <span className="text-[#0fa47d]">Sebajatra Limited</span>
      </div>
    </footer>
  );
}

export default Footer;
