import React, {useContext, useState} from "react";
import {Fade} from "react-reveal";
import "./Founding.scss";
import {foundingSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const TABS = ["Thesis", "NestGo", "Radius", "Decisions", "Naming", "Founder Note"];

export default function Founding() {
  const {isDark} = useContext(StyleContext);
  const [activeTab, setActiveTab] = useState(TABS[0]);

  if (!foundingSection.display) {
    return null;
  }

  const f = foundingSection;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        className={isDark ? "dark-mode main founding-main" : "main founding-main"}
        id="founding"
      >
        <div className="founding-header">
          <h1 className="skills-heading">{f.title}</h1>
          <p className={isDark ? "dark-mode subTitle" : "subTitle"}>{f.subtitle}</p>
          <div className="founding-disclaimer">
            <i className="fas fa-exclamation-triangle"></i>
            {f.workingNameNote}
          </div>
        </div>

        <div className="founding-tabs" role="tablist" aria-label="Praxa company brief">
          {TABS.map(tab => (
            <button
              type="button"
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={
                activeTab === tab ? "founding-tab founding-tab-active" : "founding-tab"
              }
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="founding-panel">
          {activeTab === "Thesis" && (
            <div className="founding-fade-in">
              <p className="founding-lead">{f.thesis.statement}</p>
              <div className="founding-thesis-grid">
                {f.thesis.points.map(point => (
                  <div className="founding-thesis-card" key={point.scale}>
                    <span className="founding-product-pill">{point.product}</span>
                    <h6>{point.scale}</h6>
                    <p>{point.desc}</p>
                  </div>
                ))}
              </div>
              <p className="founding-closing">{f.thesis.closing}</p>

              <h6 className="founding-subhead">House Style</h6>
              <p>{f.houseStyle}</p>
            </div>
          )}

          {activeTab === "NestGo" && (
            <div className="founding-fade-in">
              <div className="founding-status-row">
                <span className="founding-status-badge">{f.nestgo.status}</span>
              </div>
              <h6 className="founding-subhead">For</h6>
              <p>{f.nestgo.forWhom}</p>
              <h6 className="founding-subhead">Does</h6>
              <ul className="founding-list">
                {f.nestgo.does.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <h6 className="founding-subhead">Why it works</h6>
              <p>{f.nestgo.why}</p>
            </div>
          )}

          {activeTab === "Radius" && (
            <div className="founding-fade-in">
              <div className="founding-status-row">
                <span className="founding-status-badge">{f.radius.status}</span>
              </div>
              <h6 className="founding-subhead">Origin</h6>
              <p>{f.radius.origin}</p>
              <h6 className="founding-subhead">Framing</h6>
              <p>{f.radius.framing}</p>

              <h6 className="founding-subhead">Three Functions</h6>
              <div className="founding-functions">
                {f.radius.functions.map((fn, i) => (
                  <div className="founding-function-card" key={fn.name}>
                    <span className="founding-function-index">{i + 1}</span>
                    <div>
                      <h6>{fn.name}</h6>
                      <p>{fn.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h6 className="founding-subhead">The Moat — Own the Metric</h6>
              <p>{f.radius.moat}</p>

              <h6 className="founding-subhead">Dual-Market Wedge</h6>
              <div className="founding-table-wrap">
                <table className="founding-table">
                  <thead>
                    <tr>
                      <th>Market</th>
                      <th>Buyer</th>
                      <th>Pitch</th>
                      <th>Urgency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {f.radius.wedge.map(row => (
                      <tr key={row.market}>
                        <td>{row.market}</td>
                        <td>{row.buyer}</td>
                        <td>{row.pitch}</td>
                        <td>{row.urgency}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h6 className="founding-subhead">Competitive Gap</h6>
              <ul className="founding-list">
                {f.radius.competitiveGap.map((c, i) => (
                  <li key={i}>
                    <strong>{c.who}</strong> — {c.gap}
                  </li>
                ))}
              </ul>
              <p className="founding-closing">{f.radius.seam}</p>

              <h6 className="founding-subhead">Known Risks</h6>
              <ul className="founding-list">
                {f.radius.risks.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "Decisions" && (
            <div className="founding-fade-in">
              <div className="founding-table-wrap">
                <table className="founding-table">
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Decision</th>
                      <th>Consequence</th>
                    </tr>
                  </thead>
                  <tbody>
                    {f.decisions.map(row => (
                      <tr key={row.question}>
                        <td>{row.question}</td>
                        <td>{row.decision}</td>
                        <td>{row.consequence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h6 className="founding-subhead">Sequencing (Revised)</h6>
              <p>{f.sequencing}</p>
              <h6 className="founding-subhead">Data Collection Rationale</h6>
              <p>{f.dataRationale}</p>
            </div>
          )}

          {activeTab === "Naming" && (
            <div className="founding-fade-in">
              <h6 className="founding-subhead">Chosen</h6>
              <p>
                <strong>{f.naming.chosen}</strong> — {f.naming.meaning}
              </p>

              <h6 className="founding-subhead">Known Conflicts</h6>
              <div className="founding-table-wrap">
                <table className="founding-table">
                  <thead>
                    <tr>
                      <th>Entity</th>
                      <th>Why it matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {f.naming.conflicts.map(row => (
                      <tr key={row.entity}>
                        <td>{row.entity}</td>
                        <td>{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h6 className="founding-subhead">Assessment</h6>
              <p>{f.naming.assessment}</p>
              <h6 className="founding-subhead">Recommended Alternative</h6>
              <p>{f.naming.recommended}</p>
              <h6 className="founding-subhead">Rejected</h6>
              <p>{f.naming.rejected}</p>
              <h6 className="founding-subhead">Lesson</h6>
              <p>{f.naming.lesson}</p>
            </div>
          )}

          {activeTab === "Founder Note" && (
            <div className="founding-fade-in">
              <p className="founding-lead">{f.founderNote.constraint}</p>
              <p>{f.founderNote.reasoning}</p>
              <p className="founding-closing">{f.founderNote.therefore}</p>
              <h6 className="founding-subhead">Corollary</h6>
              <p>{f.founderNote.corollary}</p>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
}
