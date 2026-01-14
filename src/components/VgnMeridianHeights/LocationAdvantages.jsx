import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function LocationAdvantages() {
  return (
    <div className="pd-board1 pd-widget" id="advantages">
      <div className="section-title">
        <h4>Location Advantages</h4>
      </div>

      <div className="tab-board1">
        <ul className="nav nav-tabs" role="tablist">
          <Tab title="Schools" id="schools" active />
          <Tab title="Colleges" id="colleges" />
          <Tab title="IT Parks" id="itparks" />
          <Tab title="Hospitals" id="hospitals" />
          <Tab title="Religious" id="religious" />
          <Tab title="Connectivity" id="connectivity" />
          <Tab title="Shopping & Entertainment" id="shopping" />
        </ul>

        <div className="tab-content">

          {renderTabPane("schools", true, [
            ["Omega International School", "1.3 Km", "3 Mins"],
            ["Orchids International School", "3 Km", "8 Mins"],
            ["PSBB Millennium School", "3.3 Km", "9 Mins"],
            ["Marya Nivas Matriculation School", "1.9 Km", "6 Mins"],
            ["Minerva Hitech International School", "4.6 Km", "12 Mins"],
            ["GMA International School", "2.4 Km", "8 Mins"],
            ["Defence Academy Kendra Vidyalaya School", "-", "-"]
          ])}

          {renderTabPane("colleges", false, [
            ["St. Joseph’s Arts & Science College", "6.3 Km", "16 Mins"],
            ["Sri Ramachandra Medical College", "8.1 Km", "21 Mins"],
            ["SRM Easwari Engineering College", "8.4 Km", "26 Mins"],
            ["Madras Christian College", "8.7 Km", "24 Mins"],
            ["Guru Nanak College", "15.1 Km", "37 Mins"],
            ["Tagore College of Arts & Science", "7.5 Km", "24 Mins"],
            ["Madha Engineering College", "11.1 Km", "26 Mins"]
          ])}

          {renderTabPane("itparks", false, [
            ["International Tech Park (Radial Road)", "7.5 Km", "23 Mins"],
            ["DLF IT Park", "7.5 Km", "21 Mins"],
            ["Jayant Tech Park", "7.2 Km", "19 Mins"],
            ["India Land Tech Park", "14.2 Km", "32 Mins"],
            ["Ambit IT Park", "14.2 Km", "35 Mins"],
            ["Tamarai Tech Park", "9.6 Km", "25 Mins"],
            ["Olympia Tech Park", "9.9 Km", "26 Mins"]
          ])}

          {renderTabPane("hospitals", false, [
            ["Sri Ramachandra Hospital", "8.3 Km", "25 Mins"],
            ["Dr. Gupta’s Hospital", "5.2 Km", "14 Mins"],
            ["Bestow Hospital", "4.2 Km", "11 Mins"],
            ["Sugam Hospital", "5.1 Km", "17 Mins"],
            ["MIOT Hospital", "7.5 Km", "20 Mins"]
          ])}

          {renderTabPane("religious", false, [
            ["Bhairavar Temple", "1.9 Km", "6 Mins"],
            ["Arulmigu Sri Subramaniya Swamy Temple", "850 m", "2 Mins"],
            ["CSI St. John’s Church", "750 m", "3 Mins"],
            ["Masjid E Darussalam", "1.2 Km", "4 Mins"]
          ])}

          {renderTabPane("connectivity", false, [
            ["GST Road Junction", "4 Km", "16 Mins"],
            ["Gerugambakkam Bus Stop", "4.5 Km", "13 Mins"],
            ["Chennai International Airport", "6.2 Km", "22 Mins"],
            ["Anakaputhur", "5.5 Km", "19 Mins"],
            ["Kolapakkam", "2.7 Km", "7 Mins"],
            ["St. Thomas Mount", "8.6 Km", "25 Mins"]
          ])}

          {renderTabPane("shopping", false, [
            ["Grand Galada Centre Mall", "5.6 Km", "18 Mins"],
            ["AEROHUB East", "6.2 Km", "21 Mins"],
            ["Chandra Metro Mall", "10.2 Km", "31 Mins"],
            ["Phoenix Marketcity", "15 Km", "38 Mins"],
            ["Super Saravana Store", "7.3 Km", "22 Mins"]
          ])}

        </div>
      </div>
    </div>
  );
}

function Tab({ title, id, active }) {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${active ? "active" : ""}`}
        data-bs-toggle="tab"
        href={`#${id}`}
        role="tab"
      >
        {title}
      </a>
    </li>
  );
}

function renderTabPane(id, isActive, rows) {
  return (
    <div className={`tab-pane fade ${isActive ? "show active" : ""}`} id={id} role="tabpanel">
      <div className="tab-desc">
        <div style={{ overflowX: "auto" }}>
          <table className="location-table">
            <tbody>
              {rows.map(([title, distance, time], idx) => (
                <tr key={idx}>
                  <td>
                    <p><FaAngleDoubleRight /> {title}</p>
                  </td>
                  <td>{distance}</td>
                  <td>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
