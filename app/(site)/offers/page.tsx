// app/offers/page.tsx
"use client";

import { useEffect } from "react";

export default function OffersPage() {
  useEffect(() => {
    // Form submission handling
    const form = document.getElementById(
      "contactForm",
    ) as HTMLFormElement | null;
    const onSubmit = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLFormElement;
      const formData = new FormData(target);
      // const data = Object.fromEntries(formData); // kept identical behavior

      // Show loading state (fixed selector to match HTML button class)
      const submitBtn = target.querySelector(
        ".btn-callback",
      ) as HTMLButtonElement | null;
      const originalText = submitBtn ? submitBtn.textContent : null;
      if (submitBtn) {
        submitBtn.textContent = "Sending...";
        submitBtn.disabled = true;
      }

      // Simulate form submission (as in your HTML)
      setTimeout(() => {
        alert(
          "Thank you for your inquiry! We will contact you within 24 hours with your free consultation details.",
        );
        target.reset();
        if (submitBtn && originalText) {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
      }, 1500);
    };
    if (form) form.addEventListener("submit", onSubmit);

    // Smooth scrolling for anchor links
    const anchors = Array.from(
      document.querySelectorAll('a[href^="#"]'),
    ) as HTMLAnchorElement[];
    const onAnchor = (e: Event) => {
      e.preventDefault();
      const el = e.currentTarget as HTMLAnchorElement;
      const target = document.querySelector(el.getAttribute("href") || "");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    anchors.forEach((a) => a.addEventListener("click", onAnchor));

    // Intersection Observer for animations
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("fade-in");
      });
    }, observerOptions);

    const animTargets = document.querySelectorAll(
      ".pricing-card, .feature-card, .stat-item",
    );
    animTargets.forEach((el) => io.observe(el));

    // Counter animation for stats
    const animateCounter = (
      element: HTMLElement,
      target: number,
      duration = 2000,
    ) => {
      let start = 0;
      const increment = target / (duration / 16);
      const step = () => {
        start += increment;
        if (start < target) {
          element.textContent =
            Math.floor(start) + (element.dataset.suffix || "");
          requestAnimationFrame(step);
        } else {
          element.textContent = target + (element.dataset.suffix || "");
        }
      };
      step();
    };

    const animate247 = (element: HTMLElement, duration = 2000) => {
      let start = 0;
      const increment = 24 / (duration / 16);
      const step = () => {
        start += increment;
        if (start < 24) {
          element.textContent = Math.floor(start) + "/7";
          requestAnimationFrame(step);
        } else {
          element.textContent = "24/7";
        }
      };
      step();
    };

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const numberElement = entry.target.querySelector(
              ".stat-number",
            ) as HTMLElement | null;
            if (numberElement) {
              const text = numberElement.textContent || "";
              if (text === "24/7") {
                animate247(numberElement);
              } else {
                const number = parseInt(text.replace(/\D/g, ""), 10);
                const suffix = text.replace(/\d/g, "");
                if (!isNaN(number)) {
                  numberElement.dataset.suffix = suffix;
                  animateCounter(numberElement, number);
                }
              }
            }
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    document
      .querySelectorAll(".stat-item")
      .forEach((item) => statsObserver.observe(item));

    // Add floating animation to WhatsApp button
    const pulseInterval = setInterval(() => {
      const whatsappBtn = document.querySelector(
        ".whatsapp-float",
      ) as HTMLElement | null;
      if (whatsappBtn) {
        whatsappBtn.style.animation = "none";
        setTimeout(() => {
          whatsappBtn.style.animation = "pulse-ring 2s infinite";
        }, 100);
      }
    }, 5000);

    // Hover z-index tweak for pricing cards
    const cards = Array.from(
      document.querySelectorAll(".pricing-card"),
    ) as HTMLElement[];
    const onEnter = function (this: HTMLElement) {
      this.style.zIndex = "10";
    };
    const onLeave = function (this: HTMLElement) {
      this.style.zIndex = "1";
    };
    cards.forEach((c) => {
      c.addEventListener("mouseenter", onEnter);
      c.addEventListener("mouseleave", onLeave);
    });

    return () => {
      if (form) form.removeEventListener("submit", onSubmit);
      anchors.forEach((a) => a.removeEventListener("click", onAnchor));
      animTargets.forEach((el) => io.unobserve(el));
      document
        .querySelectorAll(".stat-item")
        .forEach((item) => statsObserver.unobserve(item));
      clearInterval(pulseInterval);
      cards.forEach((c) => {
        c.removeEventListener("mouseenter", onEnter as any);
        c.removeEventListener("mouseleave", onLeave as any);
      });
    };
  }, []);

  return (
    <>
      {/* --- Hero Section with Trust Signals --- */}
      <div className="offers-scope">
        <div className="offers-hero">
          <div className="container">
            <div className="header-contents">
              {/* Professional Trust Badges */}
              <div className="trust-badges">
                <div className="trust-badge-item">
                  <div className="badge-icon-wrapper">
                    <img
                      src="asset/home-office-logo-white.png"
                      alt="UK Government Authorized"
                      className="trust-badge"
                    />
                  </div>
                  <span className="trust-badge-label">
                    Government Authorized
                  </span>
                </div>
                <div className="trust-badge-item">
                  <div className="badge-icon-wrapper">
                    <img
                      src="asset/iaa_govt.png"
                      alt="OISC Regulated"
                      className="trust-badge"
                    />
                  </div>
                  <span className="trust-badge-label">
                    OISC Member F202100303
                  </span>
                </div>
                <div className="trust-badge-item">
                  <div className="badge-icon-wrapper">
                    <img
                      src="asset/i&a.jpg"
                      alt="Law Society Member"
                      className="trust-badge"
                    />
                  </div>
                  <span className="trust-badge-label">Law Society Member</span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="hero-heading">
                <h1>🎯 Aberdeen&apos;s Most Trusted Immigration Experts</h1>
              </div>

              {/* Professional Tagline */}
              <div className="hero-tagline">
                <p>
                  Save 50% on Professional Immigration Services | 200+ Success
                  Stories | Money-Back Guarantee
                </p>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="hero-stats">
                <div className="hero-stat">
                  <strong>98%</strong>
                  <span>Success Rate</span>
                </div>
                <div className="hero-stat">
                  <strong>200+</strong>
                  <span>Happy Clients</span>
                </div>
                <div className="hero-stat">
                  <strong>15+</strong>
                  <span>Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Urgency Banner --- */}
        <div className="container">
          <div className="highlight-banner">
            <div className="highlight-banner-content">
              <h2>⏰ Limited Time Offer - Ends Soon!</h2>
              <p>
                ✅ Save 50% on ALL Services | 🎯 FREE Consultation Worth £150 |
                ⚡ 24-Hour Response Guarantee
              </p>
              <div className="countdown-timer">
                <div className="timer-item">
                  <span className="timer-number" id="days">
                    29
                  </span>
                  <span className="timer-label">Days</span>
                </div>
                <div className="timer-item">
                  <span className="timer-number" id="hours">
                    23
                  </span>
                  <span className="timer-label">Hours</span>
                </div>
                <div className="timer-item">
                  <span className="timer-number" id="minutes">
                    59
                  </span>
                  <span className="timer-label">Minutes</span>
                </div>
              </div>

              {/* WhatsApp Action Button */}
              <div className="whatsapp-action">
                <a
                  href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi! I'm interested in the 50% discount offer. Can you help me?"
                  className="whatsapp-btn"
                  target="_blank"
                >
                  <div className="whatsapp-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                    </svg>
                  </div>
                  <span className="whatsapp-text">
                    Hurry up to get the amazing offer!
                  </span>
                  <div className="whatsapp-pulse"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Social Proof Section */}
          <section className="social-proof-section">
            <h2 className="section-title">👥 What Our Clients Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <img
                  src="/asset/client-photo-1.png"
                  alt="Sarah Ahmed"
                  className="client-photo"
                />
                <div className="testimonial-content">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <p>
                    "A huge thank you to Fiyadh and his team for expertly
                    guiding us through the process of maintaining our Sponsor
                    Licence."
                  </p>
                  <div className="client-info">
                    <strong>MD Ashiqur Rahman</strong>
                    <span>Sponsor Licence Approved</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <img
                  src="/asset/client-photo-2.png"
                  alt="Raj Patel"
                  className="client-photo"
                />
                <div className="testimonial-content">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <p>
                    "I had a super experience throughout the journey. Me and my
                    wife always got great help and cooperation from the team.
                    Everyone is very helpful."
                  </p>
                  <div className="client-info">
                    <strong>Mohammed Afzal</strong>
                    <span>Spouse Visa Approved</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <img
                  src="/asset/client-photo-3.png"
                  alt="Maria Garcia"
                  className="client-photo"
                />
                <div className="testimonial-content">
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                  <p>
                    "Had a great experience! Big thanks for all the support with
                    my visa. The team’s really helpful. Would definitely
                    recommend if you need help with visa stuff!"
                  </p>
                  <div className="client-info">
                    <strong>Tanafz</strong>
                    <span>Student Visa Approved</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="google-reviews">
              <img
                src="asset/google-reviews-badge.png"
                alt="Google Reviews 4.9 stars"
                className="reviews-badge"
              />
              <p>
                Rated 4.9/5 stars on Google Reviews from 200+ verified clients
              </p>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="pricing-section">
            <h2 className="section-title">💰 Our Special Offer Prices</h2>
            <div className="pricing-grid">
              {/* Sponsor Licence */}
              <div className="pricing-card fade-in">
                <div className="card-header">
                  <div className="card-icon">🏢</div>
                  <h3>Sponsor Licence Application</h3>
                  <div className="savings-badge">Save £1,000</div>
                  <div className="price">
                    £1,000<span className="original-price">£2,000</span>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="features">
                    <li>
                      <i className="fas fa-check-circle"></i> Complete
                      application preparation
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Document review
                      &amp; compilation
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Home Office
                      correspondence
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Compliance
                      guidance
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Post-approval
                      support
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="#contact" className="btn-primary">
                    Get Started Today
                  </a>
                </div>
              </div>

              {/* Skilled Worker Visa */}
              <div className="pricing-card fade-in">
                <div className="card-header">
                  <div className="card-icon">👨‍💼</div>
                  <h3>Skilled Worker Visa Application</h3>
                  <div className="savings-badge">Save £800</div>
                  <div className="price">
                    £800<span className="original-price">£1,600</span>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="features">
                    <li>
                      <i className="fas fa-check-circle"></i> Application form
                      completion
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Supporting
                      documents
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Appointment
                      booking
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Interview
                      preparation
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Follow-up support
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="#contact" className="btn-primary">
                    Apply Now
                  </a>
                </div>
              </div>

              {/* ILR Application */}
              <div className="pricing-card fade-in">
                <div className="card-header">
                  <div className="card-icon">🏠</div>
                  <h3>ILR (Indefinite Leave to Remain)</h3>
                  <div className="savings-badge">Save £650</div>
                  <div className="price">
                    £650<span className="original-price">£1,300</span>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="features">
                    <li>
                      <i className="fas fa-check-circle"></i> Eligibility
                      assessment
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Complete
                      application
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Evidence
                      preparation
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Biometric
                      appointment
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Decision tracking
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="#contact" className="btn-primary">
                    Start Application
                  </a>
                </div>
              </div>

              {/* Spouse Visa */}
              <div className="pricing-card fade-in">
                <div className="card-header">
                  <div className="card-icon">💑</div>
                  <h3>Spouse Visa/Extension</h3>
                  <div className="savings-badge">Save £650</div>
                  <div className="price">
                    £650<span className="original-price">£1,300</span>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="features">
                    <li>
                      <i className="fas fa-check-circle"></i> Relationship
                      evidence
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Financial
                      requirements
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Application
                      completion
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> English test
                      guidance
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Premium service
                      option
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="#contact" className="btn-primary">
                    Begin Process
                  </a>
                </div>
              </div>

              {/* Naturalisation */}
              <div className="pricing-card fade-in">
                <div className="card-header">
                  <div className="card-icon">🇬🇧</div>
                  <h3>Naturalisation + Passport</h3>
                  <div className="savings-badge">Save £500</div>
                  <div className="price">
                    £500<span className="original-price">£1,000</span>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="features">
                    <li>
                      <i className="fas fa-check-circle"></i> Citizenship
                      application
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Life in UK test
                      prep
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Passport
                      application
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Ceremony
                      arrangements
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Complete guidance
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="#contact" className="btn-primary">
                    Become British Citizen
                  </a>
                </div>
              </div>

              {/* Visit Visa */}
              <div className="pricing-card fade-in">
                <div className="card-header">
                  <div className="card-icon">✈️</div>
                  <h3>Visit Visa Application</h3>
                  <div className="special-badge">
                    🇧🇩 🇮🇳 Special Price for Bangladesh &amp; India
                  </div>
                  <div className="price">
                    £350<span className="original-price">£700</span>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="features">
                    <li>
                      <i className="fas fa-check-circle"></i> Tourism/business
                      visits
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Document checklist
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Interview
                      preparation
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Travel itinerary
                      help
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Quick processing
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="#contact" className="btn-primary">
                    Plan Your Visit
                  </a>
                </div>
              </div>

              {/* Student Visa */}
              <div className="pricing-card fade-in">
                <div className="card-header">
                  <div className="card-icon">🎓</div>
                  <h3>Student Visa Application</h3>
                  <div className="special-badge">
                    🇧🇩 🇮🇳 Special Price for Bangladesh &amp; India
                  </div>
                  <div className="price">
                    £500<span className="original-price">£1,000</span>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="features">
                    <li>
                      <i className="fas fa-check-circle"></i> University
                      applications
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> CAS letter
                      guidance
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Financial evidence
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> IELTS preparation
                      tips
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Pre-arrival
                      support
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <a href="#contact" className="btn-primary">
                    Start Your Journey
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="process-section">
            <h2 className="section-title">📋 Our Simple 4-Step Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <img
                  src="/asset/consultation-icon.jpg"
                  alt="Free Consultation"
                  className="step-image"
                />
                <h3>Free Consultation</h3>
                <p>
                  Book your FREE consultation call. We&apos;ll assess your case
                  and provide honest advice on your chances.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <img
                  src="asset/document-preparation.jpg"
                  alt="Document Preparation"
                  className="step-image"
                />
                <h3>Document Preparation</h3>
                <p>
                  Our experts prepare all required documents and forms with 100%
                  accuracy to maximize approval chances.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <img
                  src="asset/application-submission.jpg"
                  alt="Application Submission"
                  className="step-image"
                />
                <h3>Application Submission</h3>
                <p>
                  We submit your application and handle all communication with
                  the Home Office on your behalf.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <img
                  src="asset/approval-celebration.avif"
                  alt="Get Approval"
                  className="step-image"
                />
                <h3>Get Approval</h3>
                <p>
                  Celebrate your success! We&apos;ll guide you through next
                  steps and provide ongoing support if needed.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            <div className="stats-content">
              <div className="professional-badge">
                <i className="fas fa-award"></i>
                <span>Industry Leading Immigration Specialists</span>
              </div>
              <h2 className="section-title">Why Choose A2Z Immigrations?</h2>
              <p className="stats-subtitle">
                Trusted by thousands of clients worldwide for exceptional
                immigration services
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <div className="stat-number">200+</div>
                  <div className="stat-label">Successful Applications</div>
                  <div className="stat-description">
                    Across all visa categories
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50%</div>
                  <div className="stat-label">Cost Savings</div>
                  <div className="stat-description">
                    Compared to competitors
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Success Rate</div>
                  <div className="stat-description">
                    Industry leading approval rate
                  </div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Expert Support</div>
                  <div className="stat-description">
                    Round-the-clock assistance
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Guarantees Section */}
          <section className="guarantees-section">
            <div className="container">
              <div className="guarantees-header">
                <h2 className="section-title">🛡️ Our Iron-Clad Guarantees</h2>
                <p className="section-subtitle">
                  Your success is our commitment. We stand behind every promise
                  with concrete guarantees.
                </p>
              </div>
              <div className="guarantees-grid">
                <div className="guarantee-card">
                  <div className="guarantee-image-wrapper">
                    <img
                      src="asset/money-back-gurantee.webp"
                      alt="Money Back Guarantee"
                      className="guarantee-image"
                    />
                  </div>
                  <div className="guarantee-content">
                    <h3>100% Money-Back Guarantee</h3>
                    <p>
                      If we can&apos;t help you achieve your immigration goals,
                      we&apos;ll refund every penny. No questions asked.
                    </p>
                  </div>
                </div>
                <div className="guarantee-card">
                  <div className="guarantee-image-wrapper">
                    <img
                      src="asset/24-hour-response.avif"
                      alt="24 Hour Response"
                      className="guarantee-image"
                    />
                  </div>
                  <div className="guarantee-content">
                    <h3>24-Hour Response Promise</h3>
                    <p>
                      Get answers to your questions within 24 hours, guaranteed.
                      Emergency support available 24/7.
                    </p>
                  </div>
                </div>
                <div className="guarantee-card">
                  <div className="guarantee-image-wrapper">
                    <img
                      src="asset/no-hidden-fees.jpg"
                      alt="No Hidden Fees"
                      className="guarantee-image"
                    />
                  </div>
                  <div className="guarantee-content">
                    <h3>No Hidden Fees</h3>
                    <p>
                      What you see is what you pay. No surprise charges, no
                      additional costs. Complete transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="features-section">
            <h2 className="section-title">🌟 Why We&apos;re Different</h2>
            <div className="feature-cards">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-award"></i>
                </div>
                <div className="feature-content">
                  <h3>Expert Legal Team</h3>
                  <p>
                    Our qualified immigration lawyers have over 15 years of
                    combined experience handling complex cases. We stay updated
                    with the latest UK immigration laws and provide personalized
                    legal advice for every client situation.
                  </p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <div className="feature-content">
                  <h3>Lightning-Fast Processing</h3>
                  <p>
                    We understand time is crucial for immigration matters. Our
                    streamlined process and dedicated case managers ensure your
                    applications are prepared and submitted quickly without
                    compromising on quality or accuracy.
                  </p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="feature-content">
                  <h3>Guaranteed Success</h3>
                  <p>
                    With our 98% success rate and money-back guarantee, you can
                    trust us with your immigration journey. We thoroughly review
                    every case and only proceed when we&apos;re confident of a
                    positive outcome.
                  </p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <div className="feature-content">
                  <h3>24/7 Personal Support</h3>
                  <p>
                    Immigration doesn&apos;t wait for business hours. Our
                    dedicated support team is available round-the-clock to
                    answer your questions, provide updates, and guide you
                    through every step of the process.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Urgency Section Before Contact */}
          <section className="urgency-section">
            <div className="urgency-content">
              <img
                src="asset/urgent-immigration.png"
                alt="Time Sensitive Immigration"
                className="urgency-image"
              />
              <div className="urgency-text">
                <h2>
                  ⚠️ Don&apos;t Wait - Immigration Rules Change Frequently
                </h2>
                <p>
                  UK immigration policies can change with little notice.
                  What&apos;s possible today might not be tomorrow. Our current
                  50% discount ends in:
                </p>
                <div className="urgency-benefits">
                  <div className="urgency-benefit">
                    ✅ Prices locked in for 30 days after consultation
                  </div>
                  <div className="urgency-benefit">
                    ✅ FREE case assessment (normally £150)
                  </div>
                  <div className="urgency-benefit">
                    ✅ Priority booking available
                  </div>
                </div>
                <a href="#contact" className="cta-button-large">
                  Request a Callback Now!
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact-section">
            <div className="contact-container">
              <div className="contact-header">
                <h2>Get Your Free Consultation</h2>
                <p>
                  Our immigration experts are ready to help you achieve your UK
                  immigration goals
                </p>
              </div>

              <div className="contact-grid">
                {/* Contact Form Card */}
                <div className="contact-form-card">
                  <h3>
                    <i className="fas fa-edit"></i>Send us a Message
                  </h3>
                  <form className="contact-form" id="contactForm">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="fas fa-user"></i>Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="fas fa-envelope"></i>Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">
                          <i className="fas fa-phone"></i>Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="+44 123 456 7890"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">
                          <i className="fas fa-tag"></i>Subject *
                        </label>
                        <select id="subject" name="subject" required>
                          <option value="">Select a service</option>
                          <option value="sponsor-licence">
                            Sponsor Licence Application - £1,000
                          </option>
                          <option value="skilled-worker">
                            Skilled Worker Visa - £800
                          </option>
                          <option value="ilr">ILR Application - £650</option>
                          <option value="spouse-visa">
                            Spouse Visa/Extension - £650
                          </option>
                          <option value="naturalisation">
                            Naturalisation + Passport - £500
                          </option>
                          <option value="visit-visa">Visit Visa - £350</option>
                          <option value="student-visa">
                            Student Visa - £500
                          </option>
                          <option value="consultation">
                            General Consultation
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">
                        <i className="fas fa-comment-alt"></i>Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Please tell us about your immigration needs and any specific questions you have..."
                      />
                    </div>

                    <button type="submit" className="btn-callback">
                      <i className="fas fa-paper-plane"></i>
                      Request a Callback
                    </button>
                  </form>
                </div>

                {/* Contact Info Card */}
                <div className="contact-info-card">
                  <h3>
                    <i className="fas fa-address-book"></i>Contact Information
                  </h3>
                  <div className="contact-methods">
                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="contact-details">
                        <strong>Phone</strong>
                        <span>+44 20 1234 5678</span>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="contact-details">
                        <strong>Email</strong>
                        <span>info@a2zimmigrations.co.uk</span>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="contact-details">
                        <strong>Office Address</strong>
                        <span>London, United Kingdom</span>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <div className="contact-details">
                        <strong>Business Hours</strong>
                        <span>
                          Mon-Fri: 9AM-6PM
                          <br />
                          24/7 Emergency Support
                        </span>
                      </div>
                    </div>

                    <a
                      href="https://wa.me/442012345678"
                      className="whatsapp-btn"
                      target="_blank"
                    >
                      <i className="fab fa-whatsapp"></i>
                      WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/442012345678"
          className="whatsapp-float"
          target="_blank"
          title="Chat with us on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </>
  );
}
