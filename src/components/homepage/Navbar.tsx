"use client";

import Image from "next/image";
import React, { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="master-navigation2  bg-transparent!">
      <div className="navbarr w-nav bg-[#f1f7fb]!">
        <div className="nav-container ">
          <div className="left-nav">
            <a
              href="/"
              aria-current="page"
              className="brand w-nav-brand w--current"
            >
              <Image
                src="/images/logoB.png"
                loading="lazy"
                alt="Logo"
                className="logo-nav"
                width={116}
                height={30}
              />
            </a>
            {/* <nav role="navigation" className="nav-menu w-nav-menu">
              <div className="nav-menu-inner">
                <a href="/about" className="nav-link w-inline-block">
                  <div>About</div>
                </a>
                <a href="/pricing" className="nav-link w-inline-block">
                  <div>Pricing</div>
                </a>
                <a href="/blog" className="nav-link w-inline-block">
                  <div>Blog</div>
                </a>
                <a href="/contact" className="nav-link w-inline-block">
                  <div>Contact</div>
                </a>
              </div>
            </nav> */}
          </div>
          <div className="right-nav">
            <div className="nav-button-desktop">
              <a
                href="#"
                data-wf--cta-main--variant="base"
                className="cta-main w-inline-block"
              >
                <div className="button-text-mask">
                  <div button-text="" className="button-text">
                    Get started
                  </div>
                </div>
                <div button-bg="" className="button-bg"></div>
              </a>
            </div>
            <div
              className="menu-button w-nav-button"
              onClick={toggleMobileMenu}
            >
              <div className={`menu-open ${isMobileMenuOpen ? "hidden" : ""}`}>
                <div className="icon-menu w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 157 100"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g mask="url(#mask0_16041_5949)">
                      <path
                        d="M156.765 85.6094H0.0703125V99.8543H156.765V85.6094Z"
                        fill="currentColor"
                      />
                      <path
                        d="M156.765 0.140625H0.0703125V14.3856H156.765V0.140625Z"
                        fill="currentColor"
                      />
                      <path
                        d="M156.765 42.875H0.0703125V57.1199H156.765V42.875Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div
                className={`menu-close ${!isMobileMenuOpen ? "hidden" : ""}`}
              >
                <div className="icon-close w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M98.5347 91.4605C98.9994 91.9251 99.368 92.4764 99.6194 93.0837C99.8707 93.6904 100 94.341 100 94.9976C100 95.6549 99.8707 96.3056 99.6194 96.9122C99.368 97.5188 98.9994 98.0708 98.5347 98.5354C98.0708 98.9994 97.5188 99.3681 96.9122 99.6194C96.3049 99.8707 95.6549 100 94.9976 100C94.341 100 93.6903 99.8707 93.083 99.6194C92.4764 99.3681 91.9251 98.9994 91.4605 98.5354L50.0001 57.0686L8.53981 98.5354C7.60166 99.4734 6.32926 100 5.00253 100C3.67574 100 2.40336 99.4734 1.4652 98.5354C0.527052 97.5968 0 96.3249 0 94.9976C0 93.671 0.527052 92.3984 1.4652 91.4605L42.9317 50.0001L1.4652 8.53981C0.527052 7.60166 0 6.32926 0 5.00252C0 3.67579 0.527052 2.40335 1.4652 1.4652C2.40336 0.527045 3.67574 0 5.00253 0C6.32926 0 7.60166 0.527045 8.53981 1.4652L50.0001 42.9318L91.4605 1.4652C92.3984 0.527045 93.671 0 94.9976 0C96.3242 0 97.5968 0.527045 98.5347 1.4652C99.4734 2.40335 100 3.67579 100 5.00252C100 6.32926 99.4734 7.60166 98.5347 8.53981L57.0685 50.0001L98.5347 91.4605Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-menu fixed top-0 left-0 w-full h-full bg-[#f1f7fb] z-50 pt-20">
          <div className="flex flex-col items-center space-y-8 p-8">
            <a
              href="#"
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              About
            </a>
            <a
              href="#"
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              Blog
            </a>
            <a
              href="#"
              className="text-xl font-medium text-gray-800 hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
            >
              Contact
            </a>
            <a
              href="#"
              className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              onClick={toggleMobileMenu}
            >
              Get started
            </a>
          </div>
        </div>
      )}

      <div className="nav-bg"></div>
    </div>
  );
}

export default Navbar;
