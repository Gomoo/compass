"use client";
import Image from "next/image";
import React from "react";
import { smoothScrollTo } from "@/lib/smoothScroll";

function Footer() {
  return (
    <section className="footer">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="w-layout-grid footer-halves">
          <div className="left-footer">
            <a
              href="/"
              aria-current="page"
              className="brand-footer w-inline-block w--current"
            >
              <Image
                src="/images/logo.png"
                loading="lazy"
                alt="Logo"
                className="logo-nav"
                width={116}
                height={30}
              />
            </a>
          </div>
          <div className="right-footer">
            <div className="w-layout-grid footer-column-thirds">
              <div className="column-footer">
                <div className="text-gray-8">Resources</div>
                <div className="link-list-footer">
                  <a
                    href="#pricing"
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo("pricing");
                    }}
                  >
                    Pricing
                  </a>
                  <a
                    href="#features"
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo("features");
                    }}
                  >
                    Features
                  </a>
                </div>
              </div>
              <div className="column-footer">
                <div className="text-gray-8">Company</div>
                <div className="link-list-footer">
                  <a
                    href="#about"
                    className="footer-link"
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScrollTo("about");
                    }}
                  >
                    About us
                  </a>
                  <a
                    href="https://calendly.com/emmanuelakubo2019/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-tile">
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="footer-bottom-inner">
            <div className="text-small text-gray-8">
              Compass. All right reserved. © 2025
            </div>
            {/* <div className="footer-socials">
              <a
                href="#"
                target="_blank"
                className="link-social w-inline-block"
              >
                <div className="icon-social w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_190_3701)">
                      <path
                        d="M14.8189 0H1.18111C0.867861 0 0.567441 0.124438 0.34594 0.34594C0.124438 0.567441 0 0.867861 0 1.18111V14.8189C0 15.1321 0.124438 15.4326 0.34594 15.6541C0.567441 15.8756 0.867861 16 1.18111 16H14.8189C15.1321 16 15.4326 15.8756 15.6541 15.6541C15.8756 15.4326 16 15.1321 16 14.8189V1.18111C16 0.867861 15.8756 0.567441 15.6541 0.34594C15.4326 0.124438 15.1321 0 14.8189 0ZM4.76889 13.63H2.36333V5.98889H4.76889V13.63ZM3.56445 4.93C3.29158 4.92846 3.02528 4.84613 2.79916 4.69339C2.57304 4.54065 2.39723 4.32435 2.29392 4.07179C2.19061 3.81923 2.16443 3.54173 2.21869 3.2743C2.27294 3.00688 2.4052 2.76152 2.59877 2.56919C2.79234 2.37686 3.03854 2.24618 3.30631 2.19364C3.57408 2.1411 3.85141 2.16906 4.1033 2.27399C4.35519 2.37892 4.57036 2.55611 4.72164 2.78321C4.87293 3.01031 4.95355 3.27713 4.95333 3.55C4.95591 3.73269 4.92167 3.91403 4.85267 4.0832C4.78368 4.25238 4.68132 4.40593 4.55171 4.53471C4.42211 4.66349 4.2679 4.76486 4.09828 4.83277C3.92867 4.90068 3.74711 4.93375 3.56445 4.93ZM13.6356 13.6367H11.2311V9.46222C11.2311 8.23111 10.7078 7.85111 10.0322 7.85111C9.31889 7.85111 8.61889 8.38889 8.61889 9.49333V13.6367H6.21333V5.99445H8.52667V7.05333H8.55778C8.79 6.58333 9.60333 5.78 10.8444 5.78C12.1867 5.78 13.6367 6.57667 13.6367 8.91L13.6356 13.6367Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_190_3701">
                        <rect width="100%" height="100%" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </a>
              <a
                href="#"
                target="_blank"
                className="link-social w-inline-block"
              >
                <div className="icon-social w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H13C14.0609 1 15.0783 1.42143 15.8284 2.17157C16.5786 2.92172 17 3.93913 17 5V13C17 14.0609 16.5786 15.0783 15.8284 15.8284C15.0783 16.5786 14.0609 17 13 17H5C3.93913 17 2.92172 16.5786 2.17157 15.8284C1.42143 15.0783 1 14.0609 1 13V5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9C6 9.79565 6.31607 10.5587 6.87868 11.1213C7.44129 11.6839 8.20435 12 9 12C9.79565 12 10.5587 11.6839 11.1213 11.1213C11.6839 10.5587 12 9.79565 12 9C12 8.20435 11.6839 7.44129 11.1213 6.87868C10.5587 6.31607 9.79565 6 9 6C8.20435 6 7.44129 6.31607 6.87868 6.87868C6.31607 7.44129 6 8.20435 6 9Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.5 4.5V4.51"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
              <a
                href="#"
                target="_blank"
                className="link-social w-inline-block"
              >
                <div className="icon-social w-embed">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L12.733 17H17L5.267 1H1Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 17L7.768 10.232M10.228 7.772L17 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
