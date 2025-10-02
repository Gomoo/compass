import React from "react";

function Pricing() {
  return (
    <section className="section pricing-home-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div
          data-w-id="f53bf41a-16d3-6383-e1fd-cad81a661398"
          className="headline-pricing"
        >
          <h2 className="no-margins">
            Our pricing <span className="text-gradient">plans</span>
          </h2>
          <div className="text-medium text-gray-11">
            Choose from our flexible plans tailored for businesses of all sizes.
            Find the right fit and get started today!
          </div>
        </div>
        <div
          data-tabs-id="pricing-tabs"
          data-w-id="1b95d594-21e0-b497-ab82-ae6b1e73ea29"
          data-current="Tab 1"
          data-easing="ease"
          data-duration-in="300"
          data-duration-out="100"
          className="tabs w-tabs"
        >
          {/* <div className="tabs-menu w-tab-menu">
            <a
              data-w-tab="Tab 1"
              className="tab-link w-inline-block w-tab-link w--current"
            >
              <div className="text-small">Monthly</div>
            </a>
          </div> */}
          <div className="tabs-content w-tab-content">
            <div
              data-w-tab="Tab 1"
              className="tab-pane w-tab-pane w--tab-active"
            >
              <div className="w-layout-grid pricing-thirds">
                <div
                  id="w-node-_1b95d594-21e0-b497-ab82-ae6b1e73ea34-75a866e3"
                  className="card-plan"
                >
                  <div className="plan-top-tile">
                    <div className="text-medium text-body-bold">Starter</div>
                  </div>
                  <div className="plan-price-tile">
                    <div className="text-h4">$600</div>
                    <div className="text-tiny text-gray-10">
                      Per user/month, billed annually
                    </div>
                  </div>
                  <div className="plan-bottom-tile">
                    <div className="text-tiny">For starter</div>
                    <ul role="list" className="plan-list w-list-unstyled">
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Monitor up to 3 accounts
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Security alerts
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Basic compliance checks
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Account recovery in a 1-2 months
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="plan-button-tile">
                    <a
                      href="/product-no-cms"
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
                </div>
                <div className="card-plan">
                  <div className="plan-top-tile">
                    <div className="text-medium text-body-bold">Pro</div>
                  </div>
                  <div className="plan-price-tile">
                    <div className="plan-price-popular">
                      <div className="text-h4">$1500</div>
                      <div className="tag-popular">
                        <div className="text-tiny text-body-bold">Popular</div>
                      </div>
                    </div>
                    <div className="text-tiny text-gray-10">
                      Per user/month, billed annually
                    </div>
                  </div>
                  <div className="plan-bottom-tile">
                    <div className="text-tiny">Established businesses</div>
                    <ul role="list" className="plan-list w-list-unstyled">
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick accent">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Monitor up to 10 accounts
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick accent">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Automated recovery support
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick accent">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Full compliance scanner
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick accent">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Priority alerts
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick accent">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Account recovery in a week
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="plan-button-tile">
                    <a
                      href="/product-no-cms"
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
                  </div>
                </div>
                <div className="card-plan">
                  <div className="plan-top-tile">
                    <div className="text-medium text-body-bold">Agency</div>
                  </div>
                  <div className="plan-price-tile">
                    <div className="text-h4">$3000</div>
                    <div className="text-tiny text-gray-10">
                      Per user/month, billed annually
                    </div>
                  </div>
                  <div className="plan-bottom-tile">
                    <div className="text-tiny">Large enterprises</div>
                    <ul role="list" className="plan-list w-list-unstyled">
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Unlimited accounts
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          White-label dashboard
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Multi-team access
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Dedicated support & recovery experts
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Account recovery in 24-48 hours
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="plan-button-tile">
                    <a
                      href="/product-no-cms"
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
                </div>
              </div>
            </div>
            {/* <div data-w-tab="Tab 2" className="tab-pane w-tab-pane">
              <div className="w-layout-grid pricing-thirds">
                <div
                  id="w-node-_1b95d594-21e0-b497-ab82-ae6b1e73eab5-75a866e3"
                  className="card-plan"
                >
                  <div className="plan-top-tile">
                    <div className="text-medium text-body-bold">Starter</div>
                  </div>
                  <div className="plan-price-tile">
                    <div className="text-h4">$600</div>
                    <div className="text-tiny text-gray-10">
                      Per user/month, billed annually
                    </div>
                  </div>
                  <div className="plan-bottom-tile">
                    <div className="text-tiny">For Started</div>
                    <ul role="list" className="plan-list w-list-unstyled">
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Monitor up to 3 accounts
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Security alerts
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Basic compliance checks
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Account recovery in a 1-2 months
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="plan-button-tile">
                    <a
                      href="/product-no-cms"
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
                </div>
                <div className="card-plan">
                  <div className="plan-top-tile">
                    <div className="text-medium text-body-bold">Pro</div>
                  </div>
                  <div className="plan-price-tile">
                    <div className="plan-price-popular">
                      <div className="text-h4">$1500</div>
                      <div className="tag-popular">
                        <div className="text-tiny text-body-bold">Popular</div>
                      </div>
                    </div>
                    <div className="text-tiny text-gray-10">
                      Per user/month, billed annually
                    </div>
                  </div>
                  <div className="plan-bottom-tile">
                    <div className="text-tiny">Established businesses</div>
                    <ul role="list" className="plan-list w-list-unstyled">
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick accent">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Monitor up to 10 accounts
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick accent">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Automated recovery support
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick accent">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Full compliance scanner
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick accent">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Priority alerts
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick accent">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Account recovery in a week
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="plan-button-tile">
                    <a
                      href="/product-no-cms"
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
                  </div>
                </div>
                <div className="card-plan">
                  <div className="plan-top-tile">
                    <div className="text-medium text-body-bold">Enterprise</div>
                  </div>
                  <div className="plan-price-tile">
                    <div className="text-h4">$3000</div>
                    <div className="text-tiny text-gray-10">
                      Per user/month, billed annually
                    </div>
                  </div>
                  <div className="plan-bottom-tile">
                    <div className="text-tiny">Large enterprises</div>
                    <ul role="list" className="plan-list w-list-unstyled">
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Unlimited accounts
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          White-label dashboard
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Multi-team access
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Dedicated support & recovery experts
                        </div>
                      </li>
                      <li className="plan-list-item">
                        <div className="icon-wrap-tick">
                          <div className="icon-tick w-embed">
                            <svg
                              width="100%"
                              height="100%"
                              viewBox="0 0 9 9"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 4.682L1.788 5.927C2.33 6.784 2.601 7.212 2.948 7.362C3.252 7.492 3.596 7.495 3.901 7.369C4.251 7.225 4.529 6.801 5.084 5.953L8 1.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="text-small text-gray-11">
                          Account recovery in 24-48 hours
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="plan-button-tile">
                    <a
                      href="/product-no-cms"
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
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
