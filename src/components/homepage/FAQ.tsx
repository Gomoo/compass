import React from "react";

function FAQ() {
  const faqs = [
    {
      q: "How fast can you recover a suspended account?",
      a: "Recovery times vary by platform, but our guided system increases success rates and speeds up the process.",
    },
    {
      q: "Do you need my passwords?",
      a: "No — we use official APIs and secure authentication. For recovery, we guide you or your authorized admins step by step",
    },
    {
      q: "What platforms do you support?",
      a: "We currently support X (Twitter), Instagram, Facebook, LinkedIn, YouTube, TikTok, and more coming soon",
    },
    {
      q: "Can you prevent suspensions entirely?",
      a: "We can’t control the platforms, but our compliance scanner and security checks drastically reduce the risk.",
    },
    {
      q: "Is my data safe?",
      a: "Yes. We use bank-grade encryption, secure token storage, and never share your information",
    },
  ];
  return (
    <section className="section">
      <div className="w-layout-blockcontainer main-container small w-container">
        <div
          data-w-id="0739a684-9b21-0116-0dbc-01da547e95fd"
          className="headline-faq"
        >
          <h2 className="no-margins">Frequently Asked Questions</h2>
          <div className="text-medium text-gray-11">
            Find quick answers about our services. Reach out to us directly for
            more information!
          </div>
        </div>
        <div className="faq-block">
          {faqs.map((f, i) => (
            <div key={i} className="expandable-single">
              <div className="expandable-top">
                <div className="text-medium text-body-bold">{f.q}</div>
                <div className="faq-animated-box">
                  <div className="faq-horizontal"></div>
                  <div className="faq-vertical"></div>
                </div>
              </div>
              <div className="expandable-bottom">
                <p className="faq-paragraph">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
