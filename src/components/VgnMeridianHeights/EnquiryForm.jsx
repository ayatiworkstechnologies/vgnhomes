import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import LocationAdvantages from "./LocationAdvantages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faHome,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
const videoUrls = [
  "https://www.youtube.com/embed/ypQzafV3hUI?si=9FpctDU_EoOlTmKi",

];

import VgnMeridianHeightsLogo from "@/assets/VgnMeridianHeights/logo.webp";

import am1 from "@/assets/VgnMeridianHeights/icon-1.png";
import am2 from "@/assets/VgnMeridianHeights/icon-2.png";
import am3 from "@/assets/VgnMeridianHeights/icon-3.png";
import am4 from "@/assets/VgnMeridianHeights/icon-4.png";
import am5 from "@/assets/VgnMeridianHeights/icon-5.png";
import am6 from "@/assets/VgnMeridianHeights/icon-6.png";
import am7 from "@/assets/VgnMeridianHeights/icon-7.png";
import am8 from "@/assets/VgnMeridianHeights/icon-8.png";
import am9 from "@/assets/VgnMeridianHeights/icon-9.png";
import am10 from "@/assets/VgnMeridianHeights/icon-10.png";
import am11 from "@/assets/VgnMeridianHeights/icon-11.png";
import am12 from "@/assets/VgnMeridianHeights/icon-12.png";
import am13 from "@/assets/VgnMeridianHeights/icon-13.png";


import high1 from "@/assets/vgn-heritage/ph1.jpg";
import high2 from "@/assets/vgn-heritage/ph2.jpg";
import high3 from "@/assets/vgn-heritage/ph3.jpg";
import high4 from "@/assets/vgn-heritage/ph4.jpg";
import high5 from "@/assets/vgn-heritage/ph5.jpg";
import high6 from "@/assets/vgn-heritage/ph6.jpg";
import high7 from "@/assets/vgn-heritage/ph7.jpg";
import high8 from "@/assets/vgn-heritage/ph8.jpg";
import high9 from "@/assets/vgn-heritage/ph9.jpg";
import high10 from "@/assets/vgn-heritage/ph10.jpg";
import high11 from "@/assets/vgn-heritage/ph11.jpg";
import high12 from "@/assets/vgn-heritage/ph12.jpg";
import high13 from "@/assets/vgn-heritage/ph13.jpg";
import high14 from "@/assets/vgn-heritage/ph14.jpg";
import high15 from "@/assets/vgn-heritage/ph15.jpg";

import mapImage from "@/assets/vgn-heritage/map.jpg";

import advIcon1 from "@/assets/adv-icon1.png";
import advIcon2 from "@/assets/adv-icon2.png";
import advIcon3 from "@/assets/adv-icon3.png";
import advIcon4 from "@/assets/adv-icon4.png";
import advIcon5 from "@/assets/adv-icon5.png";
import EnquiryFormHome from "../EnquiryForm";
import SubNav from "./SubNav";

export default function EnquiryForm() {
  const advantages = [
    {
      icon: advIcon1,
      text: (
        <>
          83 Years of
          <br />
          business expertise
        </>
      ),
    },
    {
      icon: advIcon2,
      text: (
        <>
          250+ <br />
          projects
        </>
      ),
    },
    {
      icon: advIcon3,
      text: (
        <>
          65,000+
          <br />
          customers
        </>
      ),
    },
    {
      icon: advIcon4,
      text: <>1000+ acres of plot property developed</>,
    },
    {
      icon: advIcon5,
      text: <>20 million sq.ft. of residential projects</>,
    },
  ];
  const amenityIcons = [am1, am2, am3, am4, am5, am6, am7, am8, am9,am10, am11, am12, am13  ];

  const highlightImages = [high1, high2, high3, high4, high5, high6, high7, high8, high9, high10, high11, high12, high13, high14, high15];

  const {

    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [message, setMessage] = React.useState("");

  const onSubmit = async (data) => {
    console.log("Form Data Submitted:", data);
    setMessage("Form submitted successfully!");
  };

  const phone = watch("phone");

  return (
    <section className="property-details-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="position-sticky"
              style={{ top: "100px", zIndex: 1 }}
            >
              <div className="property-sidebar" id="contact">
                <div className="single-sidebar">
                  <div className="contact-bx">
                    <div className="section-title">
                      <h4>Enquiry Form</h4>
                    </div>
                    <EnquiryFormHome projectname="VGN Meridian Heights" />

                    {/* <EnquiryFormHome /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="pd-text">
              {/* <SubNav /> */}
              {/* Top Section with Logo & Address */}
              <div className="row align-items-center py-3">
                {/* Logo & Location */}
                <div className="col-lg-6 col-12 mb-3 mb-lg-0">
                  <div className="pd-title  flex-column flex-lg-row align-items-start align-items-lg-center gap-2">
                    {/* Desktop Image */}
                    <img
                      src={VgnMeridianHeightsLogo}
                      alt="desktop-logo"
                      className="img-fluid d-none d-lg-block"
                      style={{ maxWidth: "100%" }}
                    />
                    {/* Mobile Image */}
                    <div className="d-lg-none text-center">
                      <img
                        src={VgnMeridianHeightsLogo}
                        alt="mobile-logo"
                        className="img-fluid"
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                    <p className="mb-0">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        style={{ color: "#d90005" }}
                      />{" "}
                      Gerugambakkam.
                    </p>
                  </div>
                </div>

                {/* Plot Info */}
                {/* <div className="col-lg-6 col-12">
                  <div className="pd-social d-flex flex-column gap-1">
                    <p className="mb-1">
                      <FontAwesomeIcon
                        icon={faHome}
                        style={{ color: "#d90005" }}
                      />{" "}
                      Plots ranging from 721 to 2525 sq ft
                    </p>
                    <p className="mb-0">
                      <FontAwesomeIcon
                        icon={faClipboard}
                        style={{ color: "#d90005" }}
                      />{" "}
                      RERA:TN/35/Layout/2358/2025
                    </p>
                  </div>
                </div> */}
              </div>
              <div className="border-bottom my-3"></div>

              {/* About Section */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title">
                  <h4
                    className="mobile-h4"
                    style={{ fontSize: "35px", fontWeight: "900" }}
                  >
                    About VGN MERIDIAN HEIGHTS
                  </h4>
                </div>
                <p className="text-justify">
                  Founded in 1942, VGN is a leader, visionary and a pioneer in the real estate business and stands out
                  distinctly among its competitors. Headquartered in Chennai, we are one of the oldest and most
                  trusted real estate companies. 83 Years of experience helped us create our own path by
                  understanding our customer’s desires and helped us improve their quality of life by providing
                  them with the best projects. And this has helped us become a brand that customers deeply trust.
                </p><p className="text-justify">
                  We always believed in going the extra mile for our customers. That’s why just ordinary plotted
                  developments weren’t enough. Every idea, every unique feature, and our passion reflected in our
                  projects, and our customer family grew rapidly, making us a trustworthy brand.
                </p><p className="text-justify">
                  Our projects are spread across the city with plenty of happy families and investors reaping from
                  their investments. Residential, commercial, retail and plots, we develop and transform land of
                  every kind. With our expertise in consumer behavior, we have offered plots with unmatched
                  quality, right from affordable to ultra-luxury.
                </p><p className="text-justify">
                  As much as we take pride in our range of offering, we are also proud of our industry-best practices,
                  transparency and customer service. And this inspires us to do more and venture into many more
                  challenges with confidence.
                </p>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Highlights Section */}
              <div className="pd-widget pd-widget1" id="highlights">
                <div className="section-title">
                  <h4>Project Highlights</h4>
                </div>
                <div className="row">
                  {highlightImages.map((img, i) => (
                    <div key={i} className="col-lg-4 col-md-4 col-sm-6 mb-3">
                      <div className="grid">
                        <figure className="effect-goliath">
                          <img
                            src={img}
                            alt={`highlight-${i + 1}`}
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-bottom my-3"></div>

              {/* Amenities Section */}
              <div className="pd-widget pd-widget1" id="amenities">
                <div className="section-title">
                  <h4>Amenities</h4>
                </div>

                <div className="row">
                  {[
                    {
                      group: "Social Club",
                      items: ["Multipurpose Hall", "Outdoor Café", "Double-Height Lobby"],
                    },
                    {
                      group: "Family Wellness",
                      items: ["Kid’s Play Zone", "Ball Pool", "Senior Lounge", "Yoga Room", "Library"],
                    },
                    {
                      group: "Work & Fitness",
                      items: ["Co-working Space", "Gym", "Activity Room"],
                    },
                    {
                      group: "Spa & Entertainment",
                      items: ["Luxury Spa", "Mini-Theatre"],
                    },
                  ].map((group, gIndex) => (
                    <div key={gIndex} className="col-lg-6 col-md-6 col-12 mb-4">
                      <div className="amenity-group-box">
                        <h5 className="amenity-group-title">{group.group}</h5>

                        <div className="row">
                          {group.items.map((title, i) => (
                            <div key={i} className="col-6 col-sm-6 col-md-6 col-lg-6 mb-3">
                              <div className="servicebox text-center">
                                <div className="service-icon mb-2">
                                  <img
                                    src={amenityIcons[i]}
                                    alt={title}
                                    style={{ height: "55px", objectFit: "contain" }}
                                  />
                                </div>
                                <div className="servicetitle">
                                  <h3>{title}</h3>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-bottom my-3"></div>
              {/* Location Advantages Section */}
              <LocationAdvantages />

              <div className="border-bottom my-3"></div>

              {/* Video Section */}
              {/* <div className="pd-widget" id="3dwalkthrough">
                <div className="section-title">
                  <h4>3D Walkthrough</h4>
                </div>
                <div className="row">
                  <div className="col-12 col2">
                    <div className="ratio ratio-16x9">
                      <iframe
                        width="100%"
                        height="415"
                        src="https://www.youtube.com/embed/ypQzafV3hUI?si=9FpctDU_EoOlTmKi"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="border-bottom my-3"></div>

              <div className="pd-widget" id="map">
                <div className="section-title">
                  <h4>Location Map</h4>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.063094233104!2d80.1213939937385!3d12.995316533699349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261bc9ec5be61%3A0x108fc5d8cd0efca7!2sVGN%20Meridian%20Heights!5e0!3m2!1sen!2sin!4v1768373617377!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vgn Meridian Heights"
                ></iframe>
              </div>
              <div className="border-bottom my-3"></div>
              {/* Route Map Section */}
              {/* <div className="pd-widget" id="map">
                <div className="section-title">
                  <h4>Route Map</h4>
                </div>
                <img src={mapImage} alt="map" className="img-fluid" />
              </div> */}

              <div className="border-btm"></div>
              {/* About VGN */}
              <div className="pd-widget" id="about-vgn">
                <div className="section-title">
                  <h4>About VGN</h4>
                  <br />
                </div>
                <p style={{ textAlign: "justify" }}>
                  With close to 8 decades of experience in the business, VGN
                  stands out distinctly. Their portfolio ranges from affordable
                  housing to ultra-luxury homes backed by some of the finest
                  professionals of the industry. The brand's keen emphasis on
                  quality, world class design sense, industry-best practices,
                  and on-time delivery makes it the most preferred choice among
                  customers.
                </p>
              </div>

              <div className="border-btm"></div>
              {/* VGN Advantages Section */}
              <div className="pd-widget" style={{ marginBottom: 0 }}>
                <div className="section-title">
                  <h4>VGN Advantages</h4>
                </div>

                <div className="row">
                  {advantages.map((adv, index) => (
                    <div
                      key={index}
                      className="col-4 col-sm-4 col-md-3 col-lg-2 mx-auto mb-4"
                    >
                      <div className="servicebox first text-center">
                        <div className="service-icon">
                          <div className="dm-icon-effect-1 effect-slide-bottom in">
                            <i className="hovicon effect-1 sub-a fa-2x">
                              <img
                                src={adv.icon}
                                alt={adv.text}
                                style={{ width: "70px", height: "70px", objectFit: "contain" }}
                              />
                            </i>
                          </div>
                        </div>

                        <div className="servicetitle">
                          <h3>{adv.text}</h3>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="col-left"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
