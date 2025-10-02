import Features from "@/components/homepage/Features";
import Footer from "@/components/homepage/Footer";
import Hero from "@/components/homepage/Hero";
import Metric from "@/components/homepage/Metric";
import Navbar from "@/components/homepage/Navbar";
import Testimonial from "@/components/homepage/Testimonial";
import Trusted from "@/components/homepage/Trusted";
import Why from "@/components/homepage/Why";
import Pricing from "@/components/homepage/Pricing";
import FAQ from "@/components/homepage/FAQ";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Trusted /> */}
      <Why />
      <Features />
      <Metric />
      <Testimonial />
      <Pricing />
      {/* faq */}
      <FAQ />
      {/* ready to join */}
      {/* <section className="section">
        <div className="w-layout-blockcontainer main-container w-container">
          <div
            data-poster-url="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd%2F68c5209381e827ca40852647_4779866-hd_1920_1080_30fps-poster-00001.jpg"
            data-video-urls="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd%2F68c5209381e827ca40852647_4779866-hd_1920_1080_30fps-transcode.mp4,https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd%2F68c5209381e827ca40852647_4779866-hd_1920_1080_30fps-transcode.webm"
            data-autoplay="true"
            data-loop="true"
            data-wf-ignore="true"
            className="master-cta w-background-video w-background-video-atom"
          >
            <video
              id="c8e8c89a-6378-32bc-1644-de10032d0b90-video"
              autoPlay={true}
              loop
              style={{
                backgroundImage:
                  'url("https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd%2F68c5209381e827ca40852647_4779866-hd_1920_1080_30fps-poster-00001.jpg")',
              }}
              muted
              playsInline={true}
              data-wf-ignore="true"
              data-object-fit="cover"
            >
              <source
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd%2F68c5209381e827ca40852647_4779866-hd_1920_1080_30fps-transcode.mp4"
                data-wf-ignore="true"
              />
              <source
                src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd%2F68c5209381e827ca40852647_4779866-hd_1920_1080_30fps-transcode.webm"
                data-wf-ignore="true"
              />
            </video>
            <div className="content-cta">
              <h2 className="no-margins">Ready to join?</h2>
              <div className="subtitle-cta">
                <div className="text-large">
                  Become part of our growing community and enjoy exclusive
                  benefits and opportunities!
                </div>
              </div>
              <div className="button-wrap-cta">
                <a
                  href="/contact"
                  data-wf--cta-main--variant="accent"
                  className="cta-main w-inline-block"
                >
                  <div className="button-text-mask">
                    <div button-text="" className="button-text">
                      Get started
                    </div>
                  </div>
                  <div
                    button-bg=""
                    className="button-bg w-variant-4b50efdb-b543-25d4-d63b-bddb878db9ad"
                  ></div>
                </a>
                <a
                  href="/about"
                  data-wf--cta-main--variant="light"
                  className="cta-main w-variant-6d766bdd-6002-c93a-5f94-a77d2e41a591 w-inline-block"
                >
                  <div className="button-text-mask">
                    <div
                      button-text=""
                      className="button-text w-variant-6d766bdd-6002-c93a-5f94-a77d2e41a591"
                    >
                      Book a demo
                    </div>
                  </div>
                  <div
                    button-bg=""
                    className="button-bg w-variant-6d766bdd-6002-c93a-5f94-a77d2e41a591"
                  ></div>
                </a>
              </div>
            </div>
            <div className="overlay-cta"></div>
          </div>
        </div>
      </section> */}
      <div className="sales-cta-master"></div>
      {/* footer */}
      <Footer />
    </div>
  );
}
