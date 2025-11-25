import React from "react";
import channelImage from "@/assets/channel.jpg"; // Adjust the path based on your project setup

export default function ChannelPartnerSection() {
  return (
    <section className="breadcrumb-section position-relative">
      <img src={channelImage} alt="Channel Partner" style={{ width: "100%" }} />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="breadcrumb-text position-absolute"
              style={{ zIndex: 99, bottom: 20 }}
            >
              <h4>Channel Partner</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
