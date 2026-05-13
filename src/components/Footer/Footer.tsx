// components/Footer.tsx

import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
           <Link
                    href={'/'}
                    className="flex items-center gap-2 ">
                    <div className="relative w-8 lg:w-14 h-8 lg:h-14 ">
                        <Image
                            src="/images/headerLogo.jpg"
                            alt="logo"
                            fill
                            className="rounded-full object-cover "
                        />

                    </div>
                    <h1 className="text-2xl lg:text-4xl font-bold text-primary">Alpha</h1>
                </Link>

            <p className="text-sm leading-7 text-neutral-content/70 max-w-sm">
              Discover premium products with unbeatable prices,
              fast shipping, and a seamless shopping experience.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/shop"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">
              
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-base-content hover:border-base-300 transition-all duration-300"
              >
                <FaFacebookF
                  size={18}
                  className="group-hover:text-black transition-colors duration-300"
                />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-base-content hover:border-base-300 transition-all duration-300"
              >
                <BsInstagram
                  size={18}
                  className="group-hover:text-black transition-colors duration-300"
                />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-base-content hover:border-base-300 transition-all duration-300"
              >
                <BsTwitterX
                  size={18}
                  className="group-hover:text-black transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-content/60">
          
          <p>
            © {new Date().getFullYear()} MyStore. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-secondary transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-secondary transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}