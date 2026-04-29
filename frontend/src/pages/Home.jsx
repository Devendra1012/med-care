import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.page}>
      {/* ================= NAVBAR ================= */}
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>🏥</span> MediCare
        </div>

        <div style={styles.links}>
          <Link to="/" style={styles.navLink}>
            Home
          </Link>
          <Link to="/login" style={styles.navLink}>
            Login
          </Link>
          <Link to="/register" style={styles.btnNav}>
            Register
          </Link>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>Next-Gen Healthcare Management</div>
          <h1 style={styles.title}>
            The Future of{" "}
            <span style={styles.highlight}>Hospital Efficiency</span>
          </h1>
          <p style={styles.subtitle}>
            A unified platform to streamline clinical workflows, patient
            engagement, and data-driven healthcare administration.
          </p>

          <div style={styles.heroButtons}>
            <Link to="/login" style={styles.btnPrimary}>
              Login
            </Link>
            <Link to="/register" style={styles.btnSecondary}>
              Register
            </Link>
          </div>

          <div style={styles.statsRow}>
            <div style={styles.statItem}>
              <strong>10k+</strong>
              <br />
              Patients
            </div>
            <div style={styles.statItem}>
              <strong>500+</strong>
              <br />
              Doctors
            </div>
            <div style={styles.statItem}>
              <strong>99.9%</strong>
              <br />
              Uptime
            </div>
          </div>
        </div>

        <div style={styles.imageContainer}>
          <div style={styles.imageBackdrop}></div>
          <img
            src="https://wallpaperaccess.com/full/4113244.jpg"
            alt="Modern Hospital"
            style={styles.heroImage}
          />
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>
          Everything you need in <span style={styles.highlight}>one place</span>
        </h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <div style={styles.iconBox}>👨‍⚕️</div>
            <h3>Doctor Management</h3>
            <p>Schedule rotations and track performance effortlessly.</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.iconBox}>🧑‍🤝‍🧑</div>
            <h3>Patient Records</h3>
            <p>Secure, encrypted electronic health records accessible 24/7.</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.iconBox}>📅</div>
            <h3>Smart Appointments</h3>
            <p>Automated booking and reminders to reduce no-shows.</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.iconBox}>💊</div>
            <h3>Pharmacy Control</h3>
            <p>Real-time inventory tracking and digital prescriptions.</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.iconBox}>💳</div>
            <h3>Billing & Lab</h3>
            <p>Integrated payment gateways and instant lab reports.</p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.iconBox}>📊</div>
            <h3>Advanced Analytics</h3>
            <p>Visual reports on hospital occupancy and revenue.</p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer style={styles.footer}>
        {/* The Decorative Wave Element */}
        <div style={styles.footerWave}>
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L1440 120L1440 0C1160 80 720 0 480 40C240 80 0 0 0 0L0 120Z"
              fill="#0f172a"
            />
          </svg>
        </div>

        <div style={styles.footerContainer}>
          {/* Column 1: Brand & Bio */}
          <div style={styles.footerBrand}>
            <div style={styles.footerLogo}>🏥 MediCare</div>
            <p style={styles.footerDesc}>
              Empowering Healthcare Excellence. Our platform connects doctors,
              patients, and administrators in a seamless digital ecosystem.
            </p>
            <div style={styles.socialLinks}>
              <span style={styles.socialIcon}>fb</span>
              <span style={styles.socialIcon}>tw</span>
              <span style={styles.socialIcon}>ig</span>
              <span style={styles.socialIcon}>li</span>
            </div>
          </div>

          {/* Column 2: About Us */}
          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>About Us</h4>
            <Link to="/" style={styles.footerLink}>
              Our Mission
            </Link>
            <Link to="/" style={styles.footerLink}>
              Team
            </Link>
            <Link to="/" style={styles.footerLink}>
              Career
            </Link>
            <Link to="/" style={styles.footerLink}>
              Privacy Policy
            </Link>
          </div>

          {/* Column 3: Resources */}
          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Resources</h4>
            <Link to="/" style={styles.footerLink}>
              Documentation
            </Link>
            <Link to="/" style={styles.footerLink}>
              Support FAQ
            </Link>
            <Link to="/" style={styles.footerLink}>
              API Status
            </Link>
            <Link to="/" style={styles.footerLink}>
              Safety
            </Link>
          </div>

          {/* Column 4: Contact Info */}
          <div style={styles.footerColumn}>
            <h4 style={styles.footerHeading}>Contact Info</h4>
            <p style={styles.contactItem}>📍 Ahmedabad, Gujarat, India</p>
            <p style={styles.contactItem}>📞 (834) 233-2334</p>
            <p style={styles.contactItem}>✉️ email@medicare.com</p>
            <div style={styles.contactMap}>View on Map →</div>
          </div>
        </div>

        <div style={styles.footerBottom}>
          <p>© 2026 MediCare Inc. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    color: "#1e293b",
    backgroundColor: "#ffffff",
    overflowX: "hidden",
  },

  /* NAVBAR */
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 8%",
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(12px)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "1px solid #e2e8f0",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#1e3a8a",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  links: { display: "flex", gap: "30px", alignItems: "center" },
  navLink: {
    textDecoration: "none",
    color: "#475569",
    fontWeight: "500",
    transition: "0.3s",
  },
  btnNav: {
    background: "#1e3a8a",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 4px 12px rgba(30, 58, 138, 0.2)",
  },

  /* HERO */
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "80px 8%",
    gap: "50px",
    background: "radial-gradient(circle at top right, #f0f9ff, #ffffff)",
    minHeight: "80vh",
  },
  heroContent: { flex: 1 },
  badge: {
    background: "#dbeafe",
    color: "#1e40af",
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "600",
    display: "inline-block",
    marginBottom: "20px",
  },
  title: {
    fontSize: "56px",
    fontWeight: "800",
    lineHeight: "1.1",
    color: "#0f172a",
  },
  highlight: { color: "#3b82f6" },
  subtitle: {
    fontSize: "19px",
    color: "#64748b",
    margin: "25px 0",
    lineHeight: "1.6",
  },
  heroButtons: { display: "flex", gap: "15px" },
  btnPrimary: {
    padding: "16px 32px",
    background: "#1e3a8a",
    color: "#fff",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
  btnSecondary: {
    padding: "16px 32px",
    border: "2px solid #e2e8f0",
    color: "#1e293b",
    borderRadius: "12px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  statsRow: { display: "flex", gap: "40px", marginTop: "50px" },
  statItem: { fontSize: "14px", color: "#64748b" },

  imageContainer: { flex: 1, position: "relative" },
  heroImage: {
    width: "100%",
    borderRadius: "24px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
    position: "relative",
    zIndex: 2,
  },
  imageBackdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "#3b82f6",
    borderRadius: "24px",
    top: "20px",
    right: "-20px",
    zIndex: 1,
    opacity: 0.1,
  },

  /* FEATURES */
  featuresSection: { padding: "100px 8%", backgroundColor: "#f8fafc" },
  sectionTitle: {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "800",
    marginBottom: "60px",
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
  },
  featureCard: {
    background: "#fff",
    padding: "40px",
    borderRadius: "20px",
    border: "1px solid #e2e8f0",
    transition: "transform 0.3s ease",
    cursor: "default",
  },
  iconBox: {
    fontSize: "30px",
    background: "#eff6ff",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "14px",
    marginBottom: "20px",
  },

  /* FOOTER */

  footer: {
    backgroundColor: "#0a0f1d", // Deep midnight navy
    color: "#ffffff",
    position: "relative",
    paddingTop: "40px",
    marginTop: "100px",
  },

  footerWave: {
    position: "absolute",
    top: "-119px", // Adjust based on SVG height
    left: 0,
    width: "100%",
    lineHeight: 0,
  },

  footerContainer: {
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr",
    gap: "40px",
    padding: "60px 8% 40px",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  footerBrand: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  footerLogo: {
    fontSize: "28px",
    fontWeight: "bold",
    letterSpacing: "-0.5px",
  },

  footerDesc: {
    color: "#94a3b8",
    fontSize: "15px",
    lineHeight: "1.6",
    maxWidth: "300px",
  },

  socialLinks: {
    display: "flex",
    gap: "12px",
    marginTop: "10px",
  },

  socialIcon: {
    width: "36px",
    height: "36px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    cursor: "pointer",
    transition: "0.3s",
  },

  footerColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  footerHeading: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#3b82f6", // Accented blue
  },

  footerLink: {
    color: "#cbd5e1",
    textDecoration: "none",
    fontSize: "15px",
    transition: "0.2s",
  },

  contactItem: {
    color: "#cbd5e1",
    fontSize: "14px",
    margin: "0",
  },

  contactMap: {
    color: "#3b82f6",
    fontSize: "14px",
    fontWeight: "600",
    marginTop: "10px",
    cursor: "pointer",
  },

  footerBottom: {
    borderTop: "1px solid rgba(255,255,255,0.05)",
    padding: "30px 20px",
    textAlign: "center",
    fontSize: "13px",
    color: "#64748b",
  },
};
