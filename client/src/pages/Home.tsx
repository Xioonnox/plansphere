import { useEffect, useState, type CSSProperties } from "react";
import { toast } from "sonner";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Command,
  Eye,
  Grid3X3,
  Menu,
  Moon,
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
  { label: "The flow", href: "#flow" },
  { label: "For colleges", href: "#colleges" },
];

const personas = [
  ["01", "students", "Find your next\nbig thing.", "Browse, register, show up."],
  ["02", "organizers", "Run the whole\nshow.", "One calm view of every moving part."],
  ["03", "volunteers", "Make check-in\nfeel easy.", "Scan, track, keep the day moving."],
];

const events = [
  { name: "Aarohan '26", type: "Cultural / Delhi", date: "14—16 MAR", tone: "event-photo-one" },
  { name: "Techtonic", type: "Innovation / Pune", date: "02 APR", tone: "event-photo-two" },
  { name: "Intercollege Cup", type: "Live sports / Kochi", date: "18—20 APR", tone: "event-photo-three" },
];

const sphereFeatures = [
  { eyebrow: "01 / DISCOVER", title: "Explore", copy: "Find the moments worth showing up for.", icon: "✦" },
  { eyebrow: "02 / REGISTER", title: "Register", copy: "One clean flow from interest to entry.", icon: "◌" },
  { eyebrow: "03 / GO LIVE", title: "Go live", copy: "Scores, brackets, and energy in real time.", icon: "↗" },
  { eyebrow: "04 / CERTIFY", title: "Remember", copy: "Turn attendance into something that lasts.", icon: "✳" },
];

function go(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#top" className={`logo-mark ${inverted ? "logo-inverted" : ""}`} aria-label="Plansphere home">
      <span className="logo-orb"><Orbit size={15} strokeWidth={2.2} /></span>
      <span>Plansphere</span>
    </a>
  );
}

function Action({ children, onClick, dark = false }: { children: React.ReactNode; onClick?: () => void; dark?: boolean }) {
  return <button className={`action-button ${dark ? "action-dark" : ""}`} onClick={onClick}><span>{children}</span><ArrowUpRight size={15} /></button>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [quietMode, setQuietMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 65);
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
      if (event.key === "Escape") {
        setPaletteOpen(false);
        setMenuOpen(false);
      }
      if (event.altKey && event.key.toLowerCase() === "p") {
        event.preventDefault();
        setQuietMode((mode) => !mode);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveFeature((feature) => (feature + 1) % sphereFeatures.length), 4200);
    return () => window.clearInterval(timer);
  }, []);

  const comingSoon = (label: string) => toast(`${label} is coming soon`, { description: "This preview focuses on the public Plansphere experience." });
  const shellStyle = { "--cursor-x": `${cursor.x}px`, "--cursor-y": `${cursor.y}px` } as CSSProperties;

  return (
    <main id="top" className={`minimal-shell ${quietMode ? "quiet-mode" : ""}`} style={shellStyle} onMouseMove={(event) => setCursor({ x: event.clientX, y: event.clientY })}>
      <div className="cursor-spotlight" />
      <div className="starfield" aria-hidden="true" />
      <div className="cosmic-dust cosmic-dust-one" aria-hidden="true" />
      <div className="cosmic-dust cosmic-dust-two" aria-hidden="true" />
      <header className={`minimal-nav ${scrolled ? "nav-scrolled" : ""}`}>
        <div className="nav-inner minimal-nav-inner">
          <Logo inverted={scrolled} />
          <nav className="minimal-desktop-nav" aria-label="Main navigation">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
          <div className="minimal-nav-actions"><button className="command-hint" onClick={() => setPaletteOpen(true)}><Command size={12} /> <span>⌘ K</span></button><button className="minimal-login" onClick={() => comingSoon("Sign in")}>Sign in</button><Action onClick={() => comingSoon("Get started")}>Get started</Action></div>
          <button className="minimal-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
        {menuOpen && <div className="minimal-mobile-menu">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}<button onClick={() => setPaletteOpen(true)}><Command size={14} /> Open command palette</button></div>}
      </header>

      <section className="minimal-hero">
        <span className="shooting-star shooting-star-one" aria-hidden="true" />
        <span className="shooting-star shooting-star-two" aria-hidden="true" />
        <div className="hero-hairline" />
        <div className="page-width minimal-hero-grid">
          <div className="minimal-hero-copy">
            <div className="editorial-kicker"><span>PLATFORM / 001</span><span>EVENTS, WITHOUT THE NOISE</span></div>
            <h1>Make the<br /><span>moment</span><br /><em>matter.</em></h1>
            <p>Plansphere is the quiet system behind loud, unforgettable events.</p>
            <div className="minimal-hero-actions"><Action onClick={() => go("#platform")}>Explore Plansphere</Action><button className="play-link" onClick={() => go("#flow")}><span><Play size={10} fill="currentColor" /></span> See the flow</button></div>
            <div className="hero-footnote"><span className="footnote-line" /> Built for the people who make campus come alive.</div>
          </div>
          <div className="minimal-hero-art">
            <div className="hero-art-label label-top"><span>PS / 2026</span><span>01—03</span></div>
            <div className="hero-orbit-art" role="button" tabIndex={0} aria-label="Rotate through Plansphere features" style={{ "--active-feature": activeFeature } as CSSProperties} onClick={() => setActiveFeature((feature) => (feature + 1) % sphereFeatures.length)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setActiveFeature((feature) => (feature + 1) % sphereFeatures.length); }}><div className="art-circle art-circle-back" /><div className="art-circle art-circle-main" /><div className="art-ring ring-a" /><div className="art-ring ring-b" /><div className="art-ring ring-c" /><div className="art-crosshair" /><div className="art-dot dot-a" /><div className="art-dot dot-b" /><div className="art-star star-a" /><div className="art-star star-b" /><div className="art-number">0{activeFeature + 1}</div><img src="/manus-storage/plansphere-hero_85278bb0.jpg" alt="Abstract event energy" />{sphereFeatures.map((feature, index) => <div key={feature.eyebrow} className={`sphere-feature feature-${index} ${activeFeature === index ? "feature-active" : ""}`}><span className="feature-icon">{feature.icon}</span><span><b>{feature.eyebrow}</b><strong>{feature.title}</strong><small>{feature.copy}</small></span></div>)}<div className="sphere-rotate-hint"><span>click to rotate</span><ArrowRight size={13} /></div></div>
            <div className="hero-art-label label-bottom"><span>EVERYTHING<br />IN MOTION</span><span className="tiny-arrow">↗</span></div>
          </div>
        </div>
        <button className="minimal-scroll-cue" onClick={() => go("#signal")}><ArrowDown size={14} /><span>SCROLL TO BEGIN</span></button>
      </section>

      <section id="signal" className="statement-band"><div className="page-width statement-grid"><span className="section-index">[ signal / 001 ]</span><h2>Events are not<br /><em>admin.</em> They are energy.</h2><p>So we built one place to hold the logistics, leaving everyone free to feel the moment.</p></div></section>

      <section id="platform" className="black-section platform-minimal"><div className="page-width"><div className="section-heading-dark"><span className="section-index">[ platform / 002 ]</span><h2>Less dashboard.<br /><span>More direction.</span></h2><p>Every role sees exactly what they need. Nothing more. Nothing in the way.</p></div><div className="persona-grid">{personas.map(([number, label, title, copy], index) => <article className="persona-card" key={number} style={{ animationDelay: `${index * 80}ms` }}><div className="persona-top"><span>{number}</span><span>{label}</span></div><div className="persona-visual"><div className="persona-grid-lines" /><div className={`persona-glyph glyph-${index}`} />{index === 0 && <QrCode className="glyph-qr" size={48} strokeWidth={1} />}{index === 1 && <BarPulse />}{index === 2 && <ScanLine className="glyph-scan" size={70} strokeWidth={1} />}</div><div className="persona-bottom"><h3>{title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3><p>{copy}</p><ArrowUpRight size={18} /></div></article>)}</div></div></section>

      <section id="flow" className="white-section flow-section"><div className="page-width flow-layout"><div className="flow-copy"><span className="section-index">[ the flow / 003 ]</span><h2>From first click<br />to <em>final applause.</em></h2><p>A clean path through the chaos. Registration, entry, live scores, certificates — connected by design.</p><button className="text-arrow-button" onClick={() => comingSoon("Product tour")}>Take the product tour <ArrowRight size={16} /></button></div><div className="flow-list"><FlowItem num="01" icon={<Users size={17} />} title="Discover & register" detail="A beautiful public catalogue for every event." /><FlowItem num="02" icon={<ScanLine size={17} />} title="Show up & scan" detail="One QR pass. Zero friction at the gate." active /><FlowItem num="03" icon={<Trophy size={17} />} title="Go live & celebrate" detail="Live scores, results, certificates, done." /></div></div></section>

      <section className="black-section dashboard-minimal"><div className="page-width dashboard-minimal-layout"><div className="dashboard-minimal-copy"><span className="section-index">[ live / 004 ]</span><h2>The calm<br />behind the<br /><em>chaos.</em></h2><p>Real-time by default. Remarkably human.</p><div className="live-stat"><span /><strong>12,804</strong> attendees checked in this week</div></div><div className="minimal-dashboard"><div className="dash-top"><span><i /> plansphere / overview</span><span>live ↗</span></div><div className="dash-title"><span>Saturday, March 14</span><strong>Good morning, Maya</strong><b>M</b></div><div className="dash-kpis"><div><span>Registrations</span><strong>2,847</strong><small>↑ 18.4% vs last fest</small></div><div><span>Live right now</span><strong>18</strong><small>matches in play</small></div><div><span>Attendance</span><strong>84%</strong><small>↑ 6.2% on last year</small></div></div><div className="dash-graph"><div className="graph-heading"><span>Registrations over time</span><span>last 30 days⌄</span></div><div className="graph-lines" /><svg viewBox="0 0 620 150" preserveAspectRatio="none"><path d="M0,130 C55,122 72,115 112,120 S178,96 215,108 S266,84 305,91 S347,73 385,80 S430,59 465,63 S518,35 556,43 S595,20 620,22" fill="none" stroke="#f3f0e8" strokeWidth="2.5" /></svg></div><div className="dash-footer"><span><i className="green-dot" /> Intercollege Cup <b>LIVE</b></span><span>next match 14:30 ↗</span></div></div></div></section>

      <section id="colleges" className="white-section events-minimal"><div className="page-width"><div className="events-minimal-head"><div><span className="section-index">[ live on Plansphere / 005 ]</span><h2>Make every campus<br /><em>feel like a world.</em></h2></div><button className="circle-arrow" onClick={() => comingSoon("Event directory")}><ArrowUpRight size={20} /></button></div><div className="minimal-events-grid">{events.map((event, index) => <article key={event.name} className="minimal-event" onClick={() => comingSoon(event.name)}><div className={`minimal-event-image ${event.tone}`}><span>0{index + 1}</span><div className="event-image-lines" /></div><div className="minimal-event-meta"><div><span>{event.type}</span><h3>{event.name}</h3></div><div><span>{event.date}</span><ArrowUpRight size={14} /></div></div></article>)}</div></div></section>

      <section className="statement-band statement-band-light"><div className="page-width closing-statement"><Sparkles size={22} /><p>“The best events feel effortless.<br /><em>Plansphere makes the invisible visible.</em>”</p><span>— a better way to bring people together</span></div></section>

      <footer className="minimal-footer"><div className="page-width"><div className="footer-main"><Logo inverted /><div className="footer-tagline">Make the moment<br /><em>matter.</em></div><div className="footer-actions"><button onClick={() => setQuietMode(!quietMode)}><Moon size={13} /> {quietMode ? "Wake mode" : "Quiet mode"}</button><button onClick={() => setPaletteOpen(true)}><Command size={13} /> Command</button></div></div><div className="footer-rule" /><div className="footer-bottom"><span>© Plansphere Technologies Pvt. Ltd.</span><span>India / 2026</span><span>Privacy&nbsp;&nbsp; Terms</span></div></div></footer>

      {paletteOpen && <div className="palette-backdrop" onClick={() => setPaletteOpen(false)}><div className="command-palette" onClick={(event) => event.stopPropagation()}><div className="palette-input"><Command size={16} /><span>What would you like to explore?</span><kbd>esc</kbd></div><div className="palette-options"><button onClick={() => { setPaletteOpen(false); go("#platform"); }}><Grid3X3 size={16} /><span>Explore the platform</span><small>⌘ 1</small></button><button onClick={() => { setPaletteOpen(false); go("#flow"); }}><Eye size={16} /><span>See how it works</span><small>⌘ 2</small></button><button onClick={() => { setPaletteOpen(false); setQuietMode(!quietMode); }}><Moon size={16} /><span>Toggle quiet mode</span><small>⌘ Q</small></button></div><div className="palette-footer"><span>Plansphere command</span><span>↑↓ navigate&nbsp;&nbsp; ↵ select</span></div></div></div>}
    </main>
  );
}

function FlowItem({ num, icon, title, detail, active = false }: { num: string; icon: React.ReactNode; title: string; detail: string; active?: boolean }) {
  return <button className={`flow-item ${active ? "flow-active" : ""}`} onClick={() => toast(title, { description: detail })}><span className="flow-num">{num}</span><span className="flow-icon">{icon}</span><span className="flow-detail"><strong>{title}</strong><small>{detail}</small></span><ArrowRight size={15} /></button>;
}

function BarPulse() {
  return <div className="bar-pulse"><i /><i /><i /><i /><i /><i /><i /><i /></div>;
}
