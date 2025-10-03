import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section
      id="hero"
      data-w-id="35a8e79c-e04c-7bc8-54ae-2f8189aecd24"
      className="section hero-home-section"
    >
      <div className="w-layout-blockcontainer main-container w-container">
        <div
          data-w-id="99ec7968-ed8b-c102-e032-0ce72f896a91"
          className="headline-home-hero"
        >
          {/* <div className="label-master">
            <div className="avatars-wrap-label">
              <div className="avatar-label">
                <img
                  src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68d660c23a34248e7145c1f1_Avatar%20Small.png"
                  loading="lazy"
                  alt="Avatar"
                  className="image-cover"
                />
              </div>
              <div className="avatar-label inward">
                <img
                  src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68d660c216c05333a50ca1ed_Avatar%20Small-1.png"
                  loading="lazy"
                  alt="Avatar"
                  className="image-cover"
                />
              </div>
              <div className="avatar-label inward">
                <img
                  src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68d660c2f2e008feaa4aec8d_Avatar%20Small-2.png"
                  loading="lazy"
                  alt="Avatar"
                  className="image-cover"
                />
              </div>
            </div>
            <div>More than 1,000 satisfied customers</div>
          </div> */}
          <div className="heading-hero-home">
            <h1>The AI powered security for your digital assets.</h1>
            <div className="text-medium text-gray-11">
              Your business runs on digital assets — we safeguard them. From
              social media accounts to wallet addresses, we keep your digital
              presence secure and help you recover fast when things go wrong.
            </div>
          </div>
          <div className="button-wrap-hero-home">
            <a
              href="https://calendly.com/emmanuelakubo2019/30min"
              target="_blank"
              rel="noopener noreferrer"
              data-wf--cta-main--variant="light"
              className="cta-main w-variant-6d766bdd-6002-c93a-5f94-a77d2e41a591 w-inline-block"
            >
              <div className="button-text-mask">
                <div
                  button-text=""
                  className="button-text w-variant-6d766bdd-6002-c93a-5f94-a77d2e41a591"
                >
                  Get Started
                </div>
              </div>
              <div
                button-bg=""
                className="button-bg w-variant-6d766bdd-6002-c93a-5f94-a77d2e41a591"
              ></div>
            </a>
            <a
              href="https://calendly.com/emmanuelakubo2019/30min"
              target="_blank"
              rel="noopener noreferrer"
              data-wf--cta-main--variant="base"
              className="cta-main w-inline-block"
            >
              <div className="button-text-mask">
                <div button-text="" className="button-text">
                  Book a demo
                </div>
              </div>
              <div button-bg="" className="button-bg"></div>
            </a>
          </div>
        </div>
      </div>
      <div
        data-w-id="d6d78246-88d9-5947-a305-057b0292cbf1"
        className="image-wrap-home"
      >
        <Image
          src="/images/Analytics.png"
          sizes="(max-width: 4560px) 100vw, 4560px"
          height={728}
          alt="compass"
          width={1376}
          className="home-hero-image"
        />
        {/* <div className="widget-home-hero first md:-mt-10! lg:mt-24!">
          <div className="text-h3 text-pink-gradient">250+</div>
          <div className="text-small text-gray-11">Satisfied Clients</div>
        </div>
        <div className="widget-home-hero second">
          <div className="text-h3 text-green-gradient">89%</div>
          <div className="text-small text-gray-11">Average ROI Increase</div>
        </div>
        <div className="widget-home-hero third">
          <div className="text-h3 text-gradient">400+</div>
          <div className="text-small text-gray-11">App Store Reviews</div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
