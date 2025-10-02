import Image from "next/image";
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
                  explore some of our amazing features today
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
                    <Image
                      src="/images/Group 427319015.png"
                      width={480}
                      height={420}
                      alt="Customizable Workflows"
                      className="image-tab-scale object-contain md:object-cover"
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
