import React from "react";

function Features() {
  const features = [
    {
      title: "Real-Time Monitoring",
      description:
        "Keep track of account health and suspicious activity across platforms.",
    },
    {
      title: "Suspension Detection",
      description:
        "Instantly know if an account is flagged, suspended, or under review",
    },
    {
      title: "Guided Recovery",
      description:
        "Automated appeal generation, escalation tracking, and support when you need it",
    },
    {
      title: "Compliance Scanner",
      description:
        "Detect risky behavior, policy violations, or content issues before they cost you your account",
    },
    {
      title: "Security Safeguards",
      description:
        "MFA checks, admin monitoring, and leak detection for maximum protection",
    },
    {
      title: "Alerts & Notifications",
      description:
        "Get notified via email, Slack, or SMS when action is needed.",
    },
  ];
  return (
    <section className="section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div
          data-w-id="f633414d-88c6-2788-faff-0098069f027e"
          className="master-scale-tabs"
        >
          <div className="wrap-scale-tabs">
            {/* wrap-scale-tabs */}
            <div
              data-w-id="9e672d87-21c3-5ac8-ae98-3459620b6e52"
              className="headline-services"
            >
              <h2 className="no-margins">
                <span className="text-gradient">Features</span>
              </h2>
              <div>
                <div className="text-medium text-gray-11">
                  Discover how our comprehensive suite of tools and capabilities
                  can transform your operations.
                </div>
              </div>
            </div>
            <div className="tabs-scale">
              <div className="tabs-menu-scale">
                <div className="tab-link-scale">
                  <div className="tab-inner-scale">
                    <div className="text-large text-body-bold">
                      Customizable Workflows
                    </div>
                    <div className="text-gray-11">
                      Tailor the platform to fit your unique processes and
                      workflows, ensuring it meets your specific business needs.
                    </div>
                  </div>
                </div>
                {features.map((feature, i) => (
                  <div key={i} className="tab-link-scale">
                    <div className="tab-inner-scale">
                      <div className="text-large text-body-bold">
                        {feature.title}
                      </div>
                      <div className="text-gray-11">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tabs-content-scale">
                <div className="tab-content-scale">
                  <div className="tab-scale-image">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68d546ae1e67203bff9baab5_Search%20Modal.svg"
                      alt="Search"
                      className="image-tab-scale"
                    />
                  </div>
                  <div className="tab-scale-image">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68d7df192051cb9faf0d735b_2c9546ba7eba2aaae9c79e0d45449dd0_Customizable%20Workflows.svg"
                      alt="Customizable Workflows"
                      className="image-tab-scale"
                    />
                  </div>
                  <div className="tab-scale-image">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/68c06f93ac6a25b975a866fd/68d7df199ee6ffb431be8e75_b6287339170d6e72ec03396d6c52437b_Modal.svg"
                      alt="modal"
                      className="image-tab-scale"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
