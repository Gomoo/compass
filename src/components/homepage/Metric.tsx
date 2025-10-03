import React from "react";
import {
  BadgeCheck,
  Bitcoin,
  BriefcaseBusiness,
  Building2,
} from "lucide-react";
import Image from "next/image";

function Metric() {
  return (
    <section id="metrics" className="section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div
          data-w-id="7daa6369-89a0-2852-9d42-e26bfd000179"
          className="headline-metrics"
        >
          <h2 className="no-margins">Metrics Insights</h2>
          <div>
            <div className="text-medium text-gray-11">
              Protect Assets: Here are some of the social and digital assets you
              can protect
            </div>
          </div>
        </div>
        <div
          data-w-id="dae588c1-666b-621b-6b82-5101359e74be"
          className="w-layout-grid metric-halves"
        >
          <div className="content-metrics">
            <div className="metrics-top-tile">
              <div className="subheading-metrics">
                <h3 className="no-margins">
                  <span className="text-gradient">Assets</span> You Can Protect
                </h3>
                <div className="text-medium text-gray-11">
                  Protect your digital assets with our comprehensive suite of
                  tools.
                </div>
              </div>
              <div className="metrics-list">
                <div className="metric-list-item">
                  <div className="icon-metric w-embed">
                    <Bitcoin color="#8D8D8D" size={24} strokeWidth={1.5} />
                  </div>
                  <div>Wallet Addresses</div>
                </div>
                <div className="metric-list-item">
                  <div className="icon-metric w-embed">
                    <BadgeCheck color="#8D8D8D" size={24} strokeWidth={1.5} />
                  </div>
                  <div>Social Media Accounts</div>
                </div>
                <div className="metric-list-item">
                  <div className="icon-metric w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.25 6.375C20.25 8.65317 16.5563 10.5 12 10.5C7.44365 10.5 3.75 8.65317 3.75 6.375M20.25 6.375C20.25 4.09683 16.5563 2.25 12 2.25C7.44365 2.25 3.75 4.09683 3.75 6.375M20.25 6.375V17.625C20.25 19.9032 16.5563 21.75 12 21.75C7.44365 21.75 3.75 19.9032 3.75 17.625V6.375M20.25 6.375V10.125M3.75 6.375V10.125M20.25 10.125V13.875C20.25 16.1532 16.5563 18 12 18C7.44365 18 3.75 16.1532 3.75 13.875V10.125M20.25 10.125C20.25 12.4032 16.5563 14.25 12 14.25C7.44365 14.25 3.75 12.4032 3.75 10.125"
                        stroke="currentColor"
                        strokeWidth="var(--_❇️-icon---icon-stroke)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>Digital Collectibles (NFTs, artwork)</div>
                </div>
                <div className="metric-list-item">
                  <div className="icon-metric w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9999 18.7191C18.2474 18.7396 18.4978 18.75 18.7506 18.75C19.7989 18.75 20.8054 18.5708 21.741 18.2413C21.7473 18.1617 21.7506 18.0812 21.7506 18C21.7506 16.3431 20.4074 15 18.7506 15C18.123 15 17.5403 15.1927 17.0587 15.5222M17.9999 18.7191C18 18.7294 18 18.7397 18 18.75C18 18.975 17.9876 19.1971 17.9635 19.4156C16.2067 20.4237 14.1707 21 12 21C9.82933 21 7.79327 20.4237 6.03651 19.4156C6.01238 19.1971 6 18.975 6 18.75C6 18.7397 6.00003 18.7295 6.00008 18.7192M17.9999 18.7191C17.994 17.5426 17.6494 16.4461 17.0587 15.5222M17.0587 15.5222C15.9928 13.8552 14.1255 12.75 12 12.75C9.87479 12.75 8.00765 13.8549 6.94169 15.5216M6.94169 15.5216C6.46023 15.1925 5.87796 15 5.25073 15C3.59388 15 2.25073 16.3431 2.25073 18C2.25073 18.0812 2.25396 18.1617 2.26029 18.2413C3.19593 18.5708 4.2024 18.75 5.25073 18.75C5.50307 18.75 5.75299 18.7396 6.00008 18.7192M6.94169 15.5216C6.35071 16.4457 6.00598 17.5424 6.00008 18.7192M15 6.75C15 8.40685 13.6569 9.75 12 9.75C10.3431 9.75 9 8.40685 9 6.75C9 5.09315 10.3431 3.75 12 3.75C13.6569 3.75 15 5.09315 15 6.75ZM21 9.75C21 10.9926 19.9926 12 18.75 12C17.5074 12 16.5 10.9926 16.5 9.75C16.5 8.50736 17.5074 7.5 18.75 7.5C19.9926 7.5 21 8.50736 21 9.75ZM7.5 9.75C7.5 10.9926 6.49264 12 5.25 12C4.00736 12 3 10.9926 3 9.75C3 8.50736 4.00736 7.5 5.25 7.5C6.49264 7.5 7.5 8.50736 7.5 9.75Z"
                        stroke="currentColor"
                        strokeWidth="var(--_❇️-icon---icon-stroke)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>Ad Accounts (Meta, TikTok, LinkedIn, Google)</div>
                </div>
                <div className="metric-list-item">
                  <div className="icon-metric w-embed">
                    <Building2 color="#8D8D8D" size={24} strokeWidth={1.5} />
                  </div>
                  <div>Company Pages & Creator Profiles</div>
                </div>
                <div className="metric-list-item">
                  <div className="icon-metric w-embed">
                    <BriefcaseBusiness
                      color="#8D8D8D"
                      size={24}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>Business Credentials & Admin Roles</div>
                </div>
                <div className="metric-list-item">
                  <div className="icon-metric w-embed">
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.64285 1.96436V5.17864M9.64285 14.8215V18.0358M4.82143 10.0001H1.60714M17.6786 10.0001H14.4643M15.3309 15.6881L13.058 13.4152M15.3309 4.37503L13.058 6.64787M3.95483 15.6881L6.22768 13.4152M3.95483 4.37503L6.22768 6.64787"
                        stroke="currentColor"
                        strokeWidth="var(--_❇️-icon---icon-stroke)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>..And more</div>
                </div>
              </div>
            </div>
            {/* <div className="metrics-bottom-tile">
              <div className="matric-number">
                <div className="text-h3">500k+</div>
                <div className="text-small text-gray-11">Downloads</div>
              </div>
              <div className="divider-numbers"></div>
              <div className="matric-number">
                <div className="text-h3">400+</div>
                <div className="text-small text-gray-11">App store reviews</div>
              </div>
              <div className="divider-numbers"></div>
              <div className="matric-number">
                <div className="text-h3">4.9</div>
                <div className="text-small text-gray-11">Ratings</div>
              </div>
            </div> */}
          </div>
          <Image
            src="/images/Group 427319016.png"
            alt="Metrics"
            className="image-metrics"
            height={375}
            width={356}
          />
        </div>
      </div>
    </section>
  );
}

export default Metric;
