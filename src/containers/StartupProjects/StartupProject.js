import React, {useContext, useRef, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  const projects = bigProjects.projects;
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  if (!bigProjects.display || !projects || projects.length === 0) {
    return null;
  }

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const total = projects.length;
  const goTo = index => setActiveIndex(((index % total) + total) % total);
  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const handleKeyDown = e => {
    if (e.key === "ArrowLeft") {
      goPrev();
    } else if (e.key === "ArrowRight") {
      goNext();
    }
  };

  const handleTouchStart = e => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = e => {
    if (touchStartX.current === null) {
      return;
    }
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      deltaX < 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div
            className={
              isDark ? "dark-mode project-carousel" : "project-carousel"
            }
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label={bigProjects.title}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              className="carousel-arrow carousel-arrow-left"
              onClick={goPrev}
              aria-label="Previous project"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="carousel-viewport">
              <div
                className="carousel-track"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`
                }}
              >
                {projects.map((project, i) => (
                  <div
                    className="carousel-slide"
                    key={project.projectName}
                    aria-hidden={i !== activeIndex}
                  >
                    <div
                      className={
                        isDark
                          ? "dark-mode project-card project-card-dark"
                          : "project-card project-card-light"
                      }
                    >
                      <div className="project-card-header">
                        <div>
                          <h5
                            className={
                              isDark ? "dark-mode card-title" : "card-title"
                            }
                          >
                            {project.projectName}
                          </h5>
                          {project.tagline && (
                            <p className="card-tagline">{project.tagline}</p>
                          )}
                        </div>
                        {project.status && (
                          <span className="project-status-badge">
                            {project.status}
                          </span>
                        )}
                      </div>

                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc}
                      </p>

                      <div className="project-detail-grid">
                        {project.problem && (
                          <div className="project-detail-block">
                            <h6>Problem</h6>
                            <p>{project.problem}</p>
                          </div>
                        )}
                        {project.solution && (
                          <div className="project-detail-block">
                            <h6>Solution</h6>
                            <p>{project.solution}</p>
                          </div>
                        )}
                      </div>

                      {project.features && project.features.length > 0 && (
                        <div className="project-detail-block">
                          <h6>Key Features</h6>
                          <ul className="project-feature-list">
                            {project.features.map((feature, fi) => (
                              <li key={fi}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.techStack && project.techStack.length > 0 && (
                        <div className="project-tech-row">
                          {project.techStack.map((tech, ti) => (
                            <span className="project-tech-chip" key={ti}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {project.footerLink && project.footerLink.length > 0 && (
                        <div className="project-card-footer">
                          {project.footerLink.map((link, li) => (
                            <span
                              key={li}
                              className={
                                isDark
                                  ? "dark-mode project-tag"
                                  : "project-tag"
                              }
                              onClick={() => openUrlInNewTab(link.url)}
                            >
                              {link.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="carousel-arrow carousel-arrow-right"
              onClick={goNext}
              aria-label="Next project"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="carousel-dots">
            {projects.map((project, i) => (
              <button
                type="button"
                key={project.projectName}
                className={
                  i === activeIndex
                    ? "carousel-dot carousel-dot-active"
                    : "carousel-dot"
                }
                onClick={() => goTo(i)}
                aria-label={`Go to ${project.projectName}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
