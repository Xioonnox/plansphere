import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDot,
  Clock3,
  Menu,
  Orbit,
  Play,
  QrCode,
  ScanLine,
  Sparkles,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "How it works", href: "#how-it-works" },
  { label: "For colleges", href: "#colleges" },
];

const capabilities = [
  {
    number: "01",
    icon: Users,
    eyebrow: "For students",
    title: "Find your next big thing.",
    copy: "Browse campus events, register in seconds, and carry every pass in one beautiful wallet.",
    accent: "sky",
  },
  {
    number: "02",
    icon: BarChart3,
    eyebrow: "For organizers",
    title: "Run the whole show.",
    copy: "From dynamic registration forms to live brackets and analytics — all your moving parts, in sync.",
    accent: "amber",
  },
  {
    number: "03",
    icon: ScanLine,
    eyebrow: "For volunteers",
    title: "Make check-in feel easy.",
    copy: "One scan gets people through the gate, tracks attendance, and keeps the day moving.",
    accent: "violet",
  },
  {
    number: "04",
    icon: Trophy,
    eyebrow: "For audiences",
    title: "Feel every update.",
    copy: "Live scores, current match, next fixture, champion — all in one real-time public view.",
    accent: "mint",
  },
];

const events = [
  {
    name: "Aarohan '26",
    type: "Cultural fest",
    date: "14 — 16 MAR",
    color: "event-blue",
    tag: "12,000+ attending",
  },
  {
    name: "Techtonic",
    type: "Innovation summit",
    date: "02 APR",
    color: "event-orange",
    tag: "Registrations open",
  },
  {
    name: "Intercollege Cup",
    type: "Live sports",
    date: "18 — 20 APR",
    color: "event-lilac",
    tag: "Live now",
  },
];

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function Logo() {
  return (
    <a href="#top" className="logo-mark" aria-label="Plansphere home">
      <span className="logo-orb"><Orbit size={17} strokeWidth={2.3} /></span>
      <span>Plansphere</span>
    </a>
  );
}

function PillButton({
  children,
  onClick,
  variant = "primary",
  icon = true,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "light";
  icon?: boolean;
}) {
  return (
    <button className={`pill-button pill-${variant}`} onClick={onClick}>
      <span>{children}</span>
      {icon && <ArrowUpRight size={16} strokeWidth={2.3} />}
    </button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const comingSoon = (label: string) =>
    toast(`${label} is coming soon`, {
      description: "This preview focuses on the public Plansphere experience.",
    });

  return (
    <main id="top" className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`site-nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="nav-login" onClick={() => comingSoon("Sign in")}>Sign in</button>
            <PillButton onClick={() => comingSoon("Get started")}>Get started</PillButton>
          </div>
          <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <button onClick={() => comingSoon("Sign in")}>Sign in <ArrowUpRight size={15} /></button>
          </div>
        )}
      </header>

      <section className="hero-section">
        <div className="hero-grid" />
        <div className="hero-content page-width">
          <div className="hero-copy reveal-up">
            <div className="eyebrow"><span className="eyebrow-dot" /> THE EVENT OPERATING SYSTEM</div>
            <h1>Make the moment<br /><em>unforgettable.</em></h1>
            <p className="hero-subcopy">Plansphere brings every moving part of your event into one calm, connected place — from first registration to final applause.</p>
            <div className="hero-actions">
              <PillButton onClick={() => scrollToId("#platform")}>Explore the platform</PillButton>
              <button className="text-action" onClick={() => scrollToId("#how-it-works")}><span className="play-icon"><Play size={11} fill="currentColor" /></span> See how it works</button>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack"><span className="avatar avatar-a">A</span><span className="avatar avatar-b">R</span><span className="avatar avatar-c">M</span><span className="avatar avatar-d">+</span></div>
              <span>Built for the people<br /><strong>who make campus come alive.</strong></span>
            </div>
          </div>
          <div className="hero-visual reveal-scale">
            <div className="hero-visual-image" />
            <div className="hero-visual-glow" />
            <div className="floating-chip chip-live"><span className="live-pulse" /> LIVE NOW <strong>18 matches</strong></div>
            <div className="floating-chip chip-scan"><QrCode size={15} /> <span>PS-7R4M2Q8N1K</span></div>
            <div className="orbit-line orbit-line-one" />
            <div className="orbit-line orbit-line-two" />
            <div className="hero-caption"><span>01</span><span>everything in motion</span><span className="caption-rule" /></div>
          </div>
        </div>
        <button className="scroll-cue" onClick={() => scrollToId("#signal")} aria-label="Scroll to explore"><ArrowDown size={16} /><span>SCROLL TO EXPLORE</span></button>
      </section>

      <section id="signal" className="ticker-section">
        <div className="ticker-label">WHAT PLANSΦHERE<br />MAKES POSSIBLE</div>
        <div className="ticker-track">
          {["DISCOVER", "REGISTER", "SHOW UP", "GO LIVE", "CERTIFY", "DISCOVER", "REGISTER", "SHOW UP"].map((item, index) => (
            <span key={`${item}-${index}`} className={index % 3 === 0 ? "ticker-accent" : ""}>{item} <b>✳</b></span>
          ))}
        </div>
      </section>

      <section id="platform" className="platform-section section-pad page-width">
        <div className="section-intro reveal-up">
          <div className="eyebrow dark-eyebrow"><span className="eyebrow-dot" /> ONE SYSTEM. EVERY ANGLE.</div>
          <h2>One less thing<br /><span>to hold together.</span></h2>
          <p>Because the best events are felt, not managed. Plansphere quietly handles the complexity behind every memorable moment.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <article key={item.number} className={`capability-card card-${item.accent} reveal-up`} style={{ animationDelay: `${index * 80}ms` }}>
                <div className="card-topline"><span>{item.number}</span><Icon size={21} strokeWidth={1.8} /></div>
                <div className="card-copy"><span className="card-eyebrow">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.copy}</p></div>
                <div className="card-arrow"><ArrowUpRight size={19} /></div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="how-it-works" className="dashboard-section section-pad">
        <div className="page-width dashboard-layout">
          <div className="dashboard-copy reveal-up">
            <div className="eyebrow"><span className="eyebrow-dot" /> THE CALM BEHIND THE CHAOS</div>
            <h2>See the whole<br /><em>picture.</em></h2>
            <p>From your first confirmed registration to the final certificate, every signal is in one view. Real-time by default. Remarkably human.</p>
            <button className="line-action" onClick={() => comingSoon("Product tour")}>Take the product tour <ChevronRight size={17} /></button>
            <div className="micro-stat"><span className="stat-ping" /> <strong>12,804</strong> attendees checked in this week</div>
          </div>
          <div className="dashboard-window reveal-scale">
            <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>plansphere / overview</span><div className="window-live"><CircleDot size={12} fill="currentColor" /> live</div></div>
            <div className="window-content">
              <div className="window-header"><div><span className="window-kicker">SATURDAY, MARCH 14</span><h3>Good morning, Maya</h3></div><div className="mini-avatar">M</div></div>
              <div className="kpi-row">
                <div className="kpi-card"><span>Registrations</span><strong>2,847</strong><small><span className="positive">↑ 18.4%</span> vs last fest</small><div className="sparkline"><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
                <div className="kpi-card kpi-live-card"><span>Live right now</span><strong>18 <small>matches</small></strong><div className="match-mini"><span>⚡</span> Intercollege Cup <b>LIVE</b></div></div>
                <div className="kpi-card"><span>Attendance</span><strong>84<span className="percent">%</span></strong><small><span className="positive">↑ 6.2%</span> on last year</small><div className="progress-ring"><span>84%</span></div></div>
              </div>
              <div className="window-lower-grid">
                <div className="activity-card"><div className="activity-title"><span>Registrations over time</span><span className="tiny-select">Last 30 days⌄</span></div><div className="fake-chart"><div className="chart-y"><span>3k</span><span>2k</span><span>1k</span><span>0</span></div><div className="chart-plot"><div className="chart-gridline" /><div className="chart-gridline" /><div className="chart-gridline" /><svg viewBox="0 0 460 150" preserveAspectRatio="none"><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#5b8cff" stopOpacity=".32" /><stop offset="1" stopColor="#5b8cff" stopOpacity="0" /></linearGradient></defs><path d="M0,124 C28,118 33,112 57,115 S91,101 114,104 S143,76 171,88 S203,74 230,77 S260,60 283,62 S310,49 334,54 S367,32 389,39 S430,16 460,20 L460,150 L0,150Z" fill="url(#area)" /><path d="M0,124 C28,118 33,112 57,115 S91,101 114,104 S143,76 171,88 S203,74 230,77 S260,60 283,62 S310,49 334,54 S367,32 389,39 S430,16 460,20" fill="none" stroke="#5b8cff" strokeWidth="3" /></svg><div className="chart-x"><span>MAR 1</span><span>MAR 8</span><span>MAR 15</span><span>MAR 22</span><span>MAR 30</span></div></div></div></div>
                <div className="next-up-card"><div className="activity-title"><span>Up next</span><span className="live-tag"><span /> live</span></div><div className="match-time"><strong>14:30</strong><span>in 12 min</span></div><div className="team-row"><div className="team-badge team-red">A</div><span>Agni FC</span><b>—</b></div><div className="team-row"><div className="team-badge team-blue">N</div><span>Nexus United</span><b>—</b></div><div className="arena-row"><Clock3 size={13} /> Arena 03 <span>•</span> Semifinal</div><button onClick={() => comingSoon("Live match")}>Open live view <ArrowUpRight size={14} /></button></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="colleges" className="events-section section-pad page-width">
        <div className="events-header reveal-up"><div><div className="eyebrow dark-eyebrow"><span className="eyebrow-dot" /> MADE FOR THE MAIN EVENT</div><h2>Every campus<br /><span>has a pulse.</span></h2></div><button className="round-arrow" onClick={() => comingSoon("Event directory")} aria-label="Explore events"><ArrowUpRight size={22} /></button></div>
        <div className="event-grid">
          {events.map((event, index) => (
            <article key={event.name} className={`event-card ${event.color} reveal-up`} style={{ animationDelay: `${index * 100}ms` }} onClick={() => comingSoon(event.name)}>
              <div className="event-art"><div className="art-grid" /><div className="art-shape art-shape-one" /><div className="art-shape art-shape-two" /><span className="event-tag">{event.tag}</span><span className="event-index">0{index + 1}</span></div>
              <div className="event-info"><div><span className="event-type">{event.type}</span><h3>{event.name}</h3></div><div className="event-date"><CalendarDays size={14} /> {event.date}</div></div>
            </article>
          ))}
        </div>
      </section>

      <section className="quote-section section-pad">
        <div className="quote-shape shape-left" /><div className="quote-shape shape-right" />
        <div className="page-width quote-inner reveal-up"><Sparkles size={28} className="quote-icon" /><blockquote>“Plansphere gives every event<br />the <em>room to breathe.</em>”</blockquote><div className="quote-byline"><span className="quote-avatar">S</span><span><strong>Shreya Menon</strong><br />Student coordinator, Aarohan</span></div></div>
      </section>

      <section className="final-cta section-pad page-width reveal-up">
        <div className="final-cta-mark"><Zap size={23} fill="currentColor" /></div>
        <div><div className="eyebrow dark-eyebrow"><span className="eyebrow-dot" /> READY WHEN YOU ARE</div><h2>Make your next<br /><span>one count.</span></h2></div>
        <div className="final-actions"><p>Whether you’re joining the moment or making it happen, there’s a place for you here.</p><PillButton onClick={() => comingSoon("Get started")}>Start with Plansphere</PillButton></div>
      </section>

      <footer className="site-footer page-width"><div className="footer-top"><Logo /><div className="footer-links"><a href="#platform">Platform</a><a href="#how-it-works">How it works</a><a href="#colleges">For colleges</a><button onClick={() => comingSoon("Verify certificate")}>Verify a certificate</button></div><div className="footer-social"><span>INDIA / 2026</span><a href="#top">↗</a><a href="#top">in</a></div></div><div className="footer-bottom"><span>© Plansphere Technologies Pvt. Ltd.</span><span>Made for the moments that matter.</span><span>Privacy&nbsp;&nbsp; Terms</span></div></footer>
    </main>
  );
}
