import React from "react";

const testimonials = [
  {
    quote:
      "We thought our Instagram account was gone for good. This platform helped us recover it in days — and now we sleep easier knowing all our accounts are being monitored.",
    author: "Sarah L.",
    title: "E-commerce Brand Owner",
    img: "https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab9efa122a6f59c64e_Testimonial%20Avatar-7.avif",
  },
  {
    quote:
      "As an agency, managing 20+ accounts is stressful. The alerts and compliance scanner save us hours and prevent costly suspensions.",
    author: "Emmanuel. A.",
    title: "Agency CEO",
    img: "https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceabf69533ef4e582470_Testimonial%20Avatar.avif",
  },
  {
    quote:
      "We had a hacked Facebook page with 50k followers. Their recovery system and support team walked us through everything step by step",
    author: "Maria A.",
    title: "Nonprofit Director",
    img: "https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68c2ceab837cf3554551db28_Testimonial%20Avatar-6.avif",
  },
];
function Testimonial() {
  return (
    <section id="testimonials" className="section testimonials-a-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div
          data-w-id="874e4542-d8a9-725e-d211-1e4f49b110b2"
          className="headline-testimonials"
        >
          <h2 className="no-margins">Testimonials</h2>
          <div className="subtitle-testimonials">
            <div className="text-medium text-gray-11">
              See how we &#x27;ve helped businesses like yours succeed through
              our clients &#x27;experiences.
            </div>
          </div>
        </div>
        <div className="w-layout-grid marquee-thirds">
          <div className="marquee testimonials">
            <div
              data-w-id="874e4542-d8a9-725e-d211-1e4f49b110ba"
              className="marquee-testimonials"
            >
              <div className="single-marquee-testimonials">
                {testimonials.map((test, i) => (
                  <div key={i} className="card-testimonial">
                    <div>{test.quote}</div>
                    <div className="testimonial-author-wrap">
                      {/* <div className="image-wrap-author-testimonial">
                            <img
                              src={test.img}
                              loading="lazy"
                              alt="Testimonial Avatar"
                              className="image-cover"
                            />
                          </div> */}
                      <div className="text-wrap-testimonial-tile">
                        <div className="text-small">{test.author}</div>
                        <div className="text-small text-gray-9">
                          {test?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="single-marquee-testimonials">
                {testimonials.map((test, i) => (
                  <div key={i} className="card-testimonial">
                    <div>{test.quote}</div>
                    <div className="testimonial-author-wrap">
                      {/* <div className="image-wrap-author-testimonial">
                            <img
                              src={test.img}
                              loading="lazy"
                              alt="Testimonial Avatar"
                              className="image-cover"
                            />
                          </div> */}
                      <div className="text-wrap-testimonial-tile">
                        <div className="text-small">{test.author}</div>
                        <div className="text-small text-gray-9">
                          {test?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="single-marquee-testimonials">
                {testimonials.map((test, i) => (
                  <div key={i} className="card-testimonial">
                    <div>{test.quote}</div>
                    <div className="testimonial-author-wrap">
                      {/* <div className="image-wrap-author-testimonial">
                            <img
                              src={test.img}
                              loading="lazy"
                              alt="Testimonial Avatar"
                              className="image-cover"
                            />
                          </div> */}
                      <div className="text-wrap-testimonial-tile">
                        <div className="text-small">{test.author}</div>
                        <div className="text-small text-gray-9">
                          {test?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="single-marquee-testimonials">
                {testimonials.map((test, i) => (
                  <div key={i} className="card-testimonial">
                    <div>{test.quote}</div>
                    <div className="testimonial-author-wrap">
                      {/* <div className="image-wrap-author-testimonial">
                            <img
                              src={test.img}
                              loading="lazy"
                              alt="Testimonial Avatar"
                              className="image-cover"
                            />
                          </div> */}
                      <div className="text-wrap-testimonial-tile">
                        <div className="text-small">{test.author}</div>
                        <div className="text-small text-gray-9">
                          {test?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="marquee testimonials _2nd">
            <div
              data-w-id="874e4542-d8a9-725e-d211-1e4f49b11144"
              className="marquee-testimonials"
            >
              <div className="single-marquee-testimonials">
                {testimonials.map((test, i) => (
                  <div key={i} className="card-testimonial">
                    <div>{test.quote}</div>
                    <div className="testimonial-author-wrap">
                      {/* <div className="image-wrap-author-testimonial">
                            <img
                              src={test.img}
                              loading="lazy"
                              alt="Testimonial Avatar"
                              className="image-cover"
                            />
                          </div> */}
                      <div className="text-wrap-testimonial-tile">
                        <div className="text-small">{test.author}</div>
                        <div className="text-small text-gray-9">
                          {test?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="single-marquee-testimonials">
                {testimonials.map((test, i) => (
                  <div key={i} className="card-testimonial">
                    <div>{test.quote}</div>
                    <div className="testimonial-author-wrap">
                      {/* <div className="image-wrap-author-testimonial">
                            <img
                              src={test.img}
                              loading="lazy"
                              alt="Testimonial Avatar"
                              className="image-cover"
                            />
                          </div> */}
                      <div className="text-wrap-testimonial-tile">
                        <div className="text-small">{test.author}</div>
                        <div className="text-small text-gray-9">
                          {test?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="single-marquee-testimonials">
                {testimonials.map((test, i) => (
                  <div key={i} className="card-testimonial">
                    <div>{test.quote}</div>
                    <div className="testimonial-author-wrap">
                      {/* <div className="image-wrap-author-testimonial">
                            <img
                              src={test.img}
                              loading="lazy"
                              alt="Testimonial Avatar"
                              className="image-cover"
                            />
                          </div> */}
                      <div className="text-wrap-testimonial-tile">
                        <div className="text-small">{test.author}</div>
                        <div className="text-small text-gray-9">
                          {test?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="single-marquee-testimonials">
                {testimonials.map((test, i) => (
                  <div key={i} className="card-testimonial">
                    <div>{test.quote}</div>
                    <div className="testimonial-author-wrap">
                      {/* <div className="image-wrap-author-testimonial">
                            <img
                              src={test.img}
                              loading="lazy"
                              alt="Testimonial Avatar"
                              className="image-cover"
                            />
                          </div> */}
                      <div className="text-wrap-testimonial-tile">
                        <div className="text-small">{test.author}</div>
                        <div className="text-small text-gray-9">
                          {test?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="marquee testimonials _3rd">
            <div
              data-w-id="874e4542-d8a9-725e-d211-1e4f49b111ce"
              className="marquee-testimonials"
            >
              <div className="single-marquee-testimonials">
                {testimonials.map((test, i) => (
                  <div key={i} className="card-testimonial">
                    <div>{test.quote}</div>
                    <div className="testimonial-author-wrap">
                      {/* <div className="image-wrap-author-testimonial">
                            <img
                              src={test.img}
                              loading="lazy"
                              alt="Testimonial Avatar"
                              className="image-cover"
                            />
                          </div> */}
                      <div className="text-wrap-testimonial-tile">
                        <div className="text-small">{test.author}</div>
                        <div className="text-small text-gray-9">
                          {test?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="single-marquee-testimonials">
                {testimonials.map((test, i) => (
                  <div key={i} className="card-testimonial">
                    <div>{test.quote}</div>
                    <div className="testimonial-author-wrap">
                      {/* <div className="image-wrap-author-testimonial">
                            <img
                              src={test.img}
                              loading="lazy"
                              alt="Testimonial Avatar"
                              className="image-cover"
                            />
                          </div> */}
                      <div className="text-wrap-testimonial-tile">
                        <div className="text-small">{test.author}</div>
                        <div className="text-small text-gray-9">
                          {test?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="single-marquee-testimonials">
                {testimonials.map((test, i) => (
                  <div key={i} className="card-testimonial">
                    <div>{test.quote}</div>
                    <div className="testimonial-author-wrap">
                      {/* <div className="image-wrap-author-testimonial">
                            <img
                              src={test.img}
                              loading="lazy"
                              alt="Testimonial Avatar"
                              className="image-cover"
                            />
                          </div> */}
                      <div className="text-wrap-testimonial-tile">
                        <div className="text-small">{test.author}</div>
                        <div className="text-small text-gray-9">
                          {test?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="single-marquee-testimonials">
                {testimonials.map((test, i) => (
                  <div key={i} className="card-testimonial">
                    <div>{test.quote}</div>
                    <div className="testimonial-author-wrap">
                      {/* <div className="image-wrap-author-testimonial">
                            <img
                              src={test.img}
                              loading="lazy"
                              alt="Testimonial Avatar"
                              className="image-cover"
                            />
                          </div> */}
                      <div className="text-wrap-testimonial-tile">
                        <div className="text-small">{test.author}</div>
                        <div className="text-small text-gray-9">
                          {test?.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="marquee-shadow-testimonials"></div>
          <div className="marquee-shadow-testimonials bottom"></div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
