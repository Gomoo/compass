"use client";
import React, { useEffect, useRef, useState } from "react";

function Trusted() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted on client before starting animation
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const marqueeElement = marqueeRef.current;
    if (!marqueeElement) return;

    // Small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(() => {
      // Get the width of a single marquee logos container
      const singleMarqueeWidth =
        marqueeElement.querySelector(".single-marquee-logos")?.clientWidth || 0;

      let animationId: number;
      let currentTranslateX = 0;
      const speed = 1; // pixels per frame

      const animate = () => {
        currentTranslateX -= speed;

        // Reset position when we've scrolled past one full set of logos
        if (Math.abs(currentTranslateX) >= singleMarqueeWidth) {
          currentTranslateX = 0;
        }

        marqueeElement.style.transform = `translateX(${currentTranslateX}px)`;
        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);

      // Store animation ID for cleanup
      marqueeElement.dataset.animationId = animationId.toString();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      const animationId = marqueeElement?.dataset.animationId;
      if (animationId) {
        cancelAnimationFrame(parseInt(animationId));
      }
    };
  }, [isMounted]);
  return (
    <section className="section logo-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-logos">
          <div className="text-gray-11">
            Trusted by the world &#x27;s leading innovative teams
          </div>
        </div>
        <div
          className="marquee"
          style={{ overflow: "hidden", position: "relative" }}
        >
          <div
            ref={marqueeRef}
            data-w-id="271e2ab2-a7aa-9053-db3f-60e27bbac776"
            className="marquee-logos"
            style={{
              display: "flex",
              width: "fit-content",
              willChange: "transform",
            }}
          >
            <div
              className="single-marquee-logos"
              style={{ display: "flex", flexShrink: 0, gap: "2rem" }}
            >
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab09ed2d0b88c8ebc6_Logo%20Company-3.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab90b6938c6666d86b_Logo%20Company-4.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab9bf1956f97e4dec4_Logo%20Company.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceabe209007f475c1dc0_Logo%20Company-2.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab29092392071a9507_Logo%20Company-1.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
            </div>
            <div
              className="single-marquee-logos"
              style={{ display: "flex", flexShrink: 0, gap: "2rem" }}
            >
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab09ed2d0b88c8ebc6_Logo%20Company-3.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab90b6938c6666d86b_Logo%20Company-4.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab9bf1956f97e4dec4_Logo%20Company.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceabe209007f475c1dc0_Logo%20Company-2.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab29092392071a9507_Logo%20Company-1.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
            </div>
            <div
              className="single-marquee-logos"
              style={{ display: "flex", flexShrink: 0, gap: "2rem" }}
            >
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab09ed2d0b88c8ebc6_Logo%20Company-3.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab90b6938c6666d86b_Logo%20Company-4.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab9bf1956f97e4dec4_Logo%20Company.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceabe209007f475c1dc0_Logo%20Company-2.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab29092392071a9507_Logo%20Company-1.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
            </div>
            <div
              className="single-marquee-logos"
              style={{ display: "flex", flexShrink: 0, gap: "2rem" }}
            >
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab09ed2d0b88c8ebc6_Logo%20Company-3.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab90b6938c6666d86b_Logo%20Company-4.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab9bf1956f97e4dec4_Logo%20Company.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceabe209007f475c1dc0_Logo%20Company-2.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
              <img
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab29092392071a9507_Logo%20Company-1.svg"
                loading="lazy"
                alt="Company Logo"
                className="logo-company"
              />
            </div>
          </div>
          <div className="marquee-shadow"></div>
          <div className="marquee-shadow right"></div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;
