import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Atom, BatteryCharging, BookOpen, BrainCircuit, Building2, ChevronDown, CircuitBoard, Compass, Cpu, Database, ExternalLink, Factory, Globe2, Layers3, Linkedin, Mail, Menu, Radar, Shield, Sun, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/profile-headshot.webp";
import energyImage from "@/assets/cloud-energy.webp";
import defenceImage from "@/assets/celestial-navigation.webp";
import industryImage from "@/assets/industrial-ai.webp";
import conclaveImage from "@/assets/rising-sun-conclave.webp";

const linkedin = "https://www.linkedin.com/in/shreyansh-singh-259773216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
const nav = [
  ["Home", "#home"], ["Ventures", "#ventures"], ["Technology", "#technology"],
  ["Defence", "#defence"], ["Energy", "#energy"], ["AI", "#ai"],
  ["Leadership", "#leadership"], ["About", "#about"], ["Contact", "#contact"],
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.65, ease: "easeOut" }}>{children}</motion.div>;
}

function SectionTitle({ index, label, title, intro }: { index: string; label: string; title: string; intro?: string }) {
  return <div className="section-heading"><div className="eyebrow"><span>{index}</span><span className="eyebrow-rule" /><span>{label}</span></div><h2>{title}</h2>{intro && <p>{intro}</p>}</div>;
}

function Tags({ items }: { items: string[] }) { return <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>; }

function Flow({ items, green = false }: { items: string[]; green?: boolean }) {
  return <div className={`flow ${green ? "flow-green" : ""}`} aria-label={items.join(" to ")}>
    {items.map((item, i) => <div className="flow-unit" key={item}><span className="flow-number">0{i + 1}</span><span>{item}</span>{i !== items.length - 1 && <ArrowRight aria-hidden="true" size={15} />}</div>)}
  </div>;
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#home" className="wordmark" onClick={() => setMenuOpen(false)} aria-label="Shreyansh Singh, home">SS<span className="wordmark-dot">.</span><span className="wordmark-name">SHREYANSH SINGH</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}</nav>
        <Button className="mobile-toggle" variant="ghost" size="icon" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</Button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label, href], i) => <a key={label} href={href} onClick={() => setMenuOpen(false)}><span>0{i + 1}</span>{label}<ArrowUpRight size={16} /></a>)}</nav>}
    </header>

    <section id="home" className="hero">
      <img className="hero-portrait" src={portrait} alt="Shreyansh Singh" width="960" height="640" fetchPriority="high" />
      <div className="hero-shade" aria-hidden="true" /><div className="technical-grid" aria-hidden="true" />
      <div className="shell hero-content">
        <div className="hero-overline"><span className="live-indicator" /> FOUNDER PORTFOLIO <span className="hero-overline-line" /> INDIA · GLOBAL</div>
        <h1>Shreyansh<br />Singh<span className="hero-period">.</span></h1>
        <div className="hero-role">Founder <span>•</span> Inventor <span>•</span> Technologist</div>
        <h2>Building Intelligent Infrastructure<br className="desktop-break" /> for the Future</h2>
        <p>Building technologies and companies across artificial intelligence, defence navigation, renewable energy, enterprise systems and industrial automation.</p>
        <div className="hero-actions"><Button variant="hero" asChild><a href="#ventures">Explore My Work <ArrowRight size={16} /></a></Button><Button variant="heroOutline" asChild><a href="#contact">Connect With Me <ArrowUpRight size={16} /></a></Button></div>
        <div className="hero-domains"><span>AI</span><span>Defence Technology</span><span>Clean Energy</span><span>Industrial Systems</span></div>
      </div>
      <a className="scroll-cue" href="#ventures">SCROLL TO EXPLORE <ArrowDown size={14} /></a>
      <div className="hero-index">01 / 09</div>
    </section>

    <section id="ventures" className="section ventures-section">
      <div className="shell"><Reveal><SectionTitle index="01" label="THE PORTFOLIO" title="Building Across Critical Industries" intro="Three ventures. A common ambition: to build consequential technology where software meets the physical world." /></Reveal>
        <div className="venture-grid">
          <Reveal className="venture-card venture-card-energy"><div className="venture-image"><img src={energyImage} loading="lazy" width="1400" height="875" alt="Illustrative renewable generation and battery storage infrastructure" /></div><div className="venture-content"><div className="card-topline"><span><Sun size={16} /> ENERGY INFRASTRUCTURE</span><span>01 / FOUNDER</span></div><h3>Cloud Energy</h3><p>A digital energy capacity reservation platform connecting renewable generation, storage and long-term energy access for households, businesses, industries and data centres.</p><a href="#energy" className="text-link">Explore Cloud Energy <ArrowUpRight size={16} /></a></div></Reveal>
          <Reveal className="venture-card venture-card-defence"><div className="venture-image"><img src={defenceImage} loading="lazy" width="1400" height="875" alt="Illustrative celestial horizon and navigation references" /></div><div className="venture-content"><div className="card-topline"><span><Compass size={16} /> DEFENCE TECHNOLOGY</span><span>02 / PATENT FILED</span></div><h3>Navigation Beyond GPS</h3><p>Exploring celestially-referenced orientation and integrity-aware navigation for defence and autonomous platforms in GNSS-degraded environments.</p><a href="#defence" className="text-link">Explore the technology <ArrowUpRight size={16} /></a></div></Reveal>
          <Reveal className="venture-card venture-card-ai"><div className="venture-abstract" aria-hidden="true"><span className="abstract-ring ring-one" /><span className="abstract-ring ring-two" /><span className="abstract-core"><BrainCircuit size={45} strokeWidth={1} /></span></div><div className="venture-content"><div className="card-topline"><span><Atom size={16} /> INTELLIGENT SYSTEMS</span><span>03 / FOUNDER & CEO</span></div><h3>Sthapana Technologies</h3><p>Building Agentic AI, defence technology and intelligent enterprise systems across industrial and operational environments.</p><a href="#ai" className="text-link">Explore Sthapana <ArrowUpRight size={16} /></a></div></Reveal>
        </div>
        <Reveal className="metrics-strip"><div><strong>3</strong><span>Ventures founded</span></div><div><strong>1</strong><span>Defence patent filed</span></div><div><strong>4</strong><span>Core technology domains</span></div><div className="metric-domains">AI <span>·</span> DEFENCE <span>·</span> ENERGY <span>·</span> INDUSTRIAL TECH</div></Reveal>
      </div>
    </section>

    <section id="energy" className="section energy-section"><div className="shell">
      <Reveal><SectionTitle index="02" label="CLOUD ENERGY" title="Energy access, reimagined." intro="High Sun. Low Sun. No Rooftop. One Energy Platform." /></Reveal>
      <div className="editorial-grid"><Reveal><div className="feature-label"><BatteryCharging size={18} /> FOUNDER / CLIMATE & ENERGY INFRASTRUCTURE</div><h3>A Digital Energy Capacity Reservation Platform</h3><p>Cloud Energy is building a global platform that enables households, communities, businesses, industries and data centres to digitally reserve renewable-energy capacity without installing generation infrastructure on their own property.</p><p>The model brings together renewable generation, Battery Energy Storage Systems (BESS), Energy Management Systems (EMS), long-term energy access and infrastructure financing models. Initial market development spans multiple regions.</p><Button variant="outline" asChild><a href="mailto:hi@sthapanatechnologies.com?subject=Cloud%20Energy%20inquiry">Explore Cloud Energy <ArrowUpRight size={16} /></a></Button></Reveal><Reveal className="image-panel"><img src={energyImage} loading="lazy" width="1400" height="875" alt="Illustrative renewable energy and BESS infrastructure" /><div className="image-caption">ENERGY SYSTEM / CONCEPT VISUAL</div></Reveal></div>
      <Reveal><div className="flow-heading">THE PLATFORM MODEL <span>01 — 05</span></div><Flow green items={["Renewable Generation", "BESS", "EMS", "Digital Reservation", "Consumer / Business / Data Centre"]} /></Reveal>
      <Reveal><div className="pipeline-note"><span className="pipeline-value">100 MW+</span><span><strong>Energy Demand / LOI Pipeline</strong><small>Company-reported business-development pipeline. Not installed or operating capacity.</small></span></div></Reveal>
    </div></section>

    <section id="defence" className="section defence-section"><img className="defence-backdrop" src={defenceImage} loading="lazy" width="1400" height="875" alt="" aria-hidden="true" /><div className="shell defence-content">
      <Reveal><SectionTitle index="03" label="DEFENCE TECHNOLOGY" title="Navigation Beyond GPS" intro="Resilience when conventional signals cannot be relied upon." /></Reveal>
      <div className="defence-layout"><Reveal><p className="feature-lead">Developing indigenous navigation technology designed to improve orientation and integrity for defence and autonomous platforms operating in GNSS-degraded, unreliable or denied environments.</p><p>The system explores celestial references, sensor fusion and integrity-aware navigation architectures to strengthen navigation resilience for defence and autonomous platforms.</p><Tags items={["Celestial Navigation", "GNSS Resilience", "Autonomous Systems", "Defence Technology", "Sensor Fusion", "Integrity Monitoring", "Navigation Intelligence"]} /><div className="confidential-note"><Shield size={17} /> Sensitive implementation details remain private.</div></Reveal><Reveal><div className="patent-panel"><div className="patent-header"><Radar size={24} /><span>PATENT / IP STATUS</span></div><strong>Patent Filed</strong><p>Development of an Indigenous Celestially-Referenced Orientation and Integrity-Bounded Navigation System for Defence and Autonomous Platforms</p><div className="patent-footer">TECHNOLOGY DISCLOSURE <span>↗</span></div></div></Reveal></div>
    </div></section>

    <section id="ai" className="section ai-section"><div className="shell">
      <Reveal><SectionTitle index="04" label="STHAPANA TECHNOLOGIES PVT. LTD." title="Intelligence for complex systems." intro="Building Agentic AI, Defence Technology and Intelligent Enterprise Systems." /></Reveal>
      <div className="company-intro"><span>FOUNDER & CEO</span><a href="https://www.sthapanatechnologies.com" target="_blank" rel="noopener noreferrer">VISIT STHAPANA <ArrowUpRight size={15} /></a></div>
      <div className="capability-grid">{[
        { icon: BrainCircuit, title: "Agentic AI", text: "AI agents capable of analysing information, coordinating workflows and assisting with complex business operations." },
        { icon: Compass, title: "Defence Technology", text: "Research and development in resilient navigation and autonomous systems." },
        { icon: Factory, title: "Industrial AI", text: "AI for manufacturing, operations, production intelligence and predictive decision-making." },
        { icon: CircuitBoard, title: "AI-IoT", text: "Connecting intelligent software with sensors, machines, PLC systems and physical infrastructure." },
        { icon: Database, title: "Enterprise Intelligence", text: "Connecting operational systems, ERP platforms and organisational data." },
      ].map((item, i) => <Reveal className="capability-item" key={item.title}><span className="capability-number">0{i + 1}</span><item.icon size={26} strokeWidth={1.4} /><h3>{item.title}</h3><p>{item.text}</p></Reveal>)}</div>

      <Reveal><div className="finai-feature"><div className="finai-header"><span className="feature-label"><BrainCircuit size={18} /> PRODUCT / ENTERPRISE AI</span><span>BY STHAPANA TECHNOLOGIES</span></div><div className="finai-main"><div><h3>FinAI<span className="hero-period">.</span></h3><h4>Agentic Finance Operating System</h4><p>An intelligent finance platform designed to bring financial analysis, controllership, automation and AI agents into one operating layer. Intended to go beyond spend management by combining finance intelligence, accounting control, compliance context and autonomous workflows.</p></div><div className="finai-orbit" aria-hidden="true"><span>FINANCE</span><span>CONTROL</span><span>AGENTS</span><span>INSIGHT</span><BrainCircuit size={60} strokeWidth={1} /></div></div><details className="feature-details"><summary>Explore platform capabilities <ChevronDown size={18} /></summary><div className="details-body"><div><h5>FINANCE INTELLIGENCE</h5><Tags items={["AI CFO", "P&L intelligence", "Balance Sheet analysis", "Cash Flow analysis", "13-week cash forecasting", "Financial analysis", "Scenario modelling", "Fraud & anomaly detection"]} /></div><div><h5>OPERATIONS & CONTROL</h5><Tags items={["Accounts Payable", "Accounts Receivable", "Reconciliation", "Procurement intelligence", "Continuous close", "Audit trails", "Approval workflows"]} /></div><div><h5>AGENTS & CONNECTIVITY</h5><Tags items={["Knowledge graphs", "Multi-step Finance Agents", "ERP integration", "Tally integration", "Zoho Books integration", "Multi-country finance architecture"]} /></div><p>Country profiles currently being designed around: India · United States · United Kingdom · UAE.</p></div></details></div></Reveal>
    </div></section>

    <section className="section industry-section"><div className="shell"><Reveal><SectionTitle index="05" label="INDUSTRIAL AI & AI-IOT" title="Intelligence for Physical Industries" intro="From operational data to better decisions on the factory floor." /></Reveal><div className="editorial-grid industry-grid"><Reveal className="image-panel"><img src={industryImage} loading="lazy" width="1200" height="750" alt="Illustrative modern industrial automation equipment" /><div className="image-caption">INDUSTRIAL SYSTEMS / CONCEPT VISUAL</div></Reveal><Reveal><p className="feature-lead">AI transformation for large manufacturing and industrial operations.</p><p>Work spans production intelligence, manufacturing analytics, variance detection, predictive maintenance, machine monitoring, inventory intelligence and operational forecasting—connecting enterprise systems with physical infrastructure.</p><Tags items={["ERP & Tally integration", "AI dashboards & chatbots", "PLC integration", "QR-based automation", "RFID / IoT", "Computer vision", "Real-time decision support"]} /></Reveal></div><Reveal><div className="flow-heading">FROM MACHINE TO DECISION <span>01 — 05</span></div><Flow items={["Machine", "Sensors / PLC", "Data Layer", "AI", "Decision / Automation"]} /></Reveal></div></section>

    <section id="technology" className="section technology-section"><div className="shell"><Reveal><SectionTitle index="06" label="TECHNOLOGY & INTELLECTUAL PROPERTY" title="Platforms, not just companies." intro="A portfolio of technology concepts and systems spanning critical industries." /></Reveal><div className="technology-grid">{[
      { n: "01", icon: Compass, title: "Celestially-Referenced Navigation", category: "DEFENCE TECHNOLOGY", status: "Patent Filed", href: "#defence" },
      { n: "02", icon: BatteryCharging, title: "Digital Energy Capacity Reservation", category: "CLIMATE / ENERGY INFRASTRUCTURE", href: "#energy" },
      { n: "03", icon: BrainCircuit, title: "Agentic Finance OS", category: "ENTERPRISE AI", href: "#ai" },
      { n: "04", icon: Factory, title: "Industrial AI & IoT", category: "MANUFACTURING TECHNOLOGY", href: "#deployments" },
      { n: "05", icon: Layers3, title: "Enterprise Agentic Intelligence", category: "AI SYSTEMS", href: "#ai" },
    ].map(item => <Reveal key={item.n}><a className="technology-card" href={item.href}><div className="technology-card-top"><span>{item.n} / {item.category}</span><ArrowUpRight size={18} /></div><item.icon size={36} strokeWidth={1.25} /><h3>{item.title}</h3>{item.status && <span className="status-label">{item.status}</span>}</a></Reveal>)}</div></div></section>

    <section id="deployments" className="section deployments-section"><div className="shell"><Reveal><SectionTitle index="07" label="SELECTED WORK / DEPLOYMENTS" title="From Technology Concept to Deployment" intro="Representative capability areas, without disclosing confidential customer information." /></Reveal><div className="deployment-list">{[
      { icon: Factory, title: "Manufacturing Intelligence Platform", type: "INDUSTRIAL AI", items: ["Production analytics", "Raw-material variance", "Predictive maintenance", "AI chatbot", "ERP connectivity", "Machine data", "Inventory intelligence"] },
      { icon: Building2, title: "AI-Driven Enterprise Systems", type: "ENTERPRISE AI", items: ["AI dashboards", "Financial intelligence", "Workflow automation", "ERP integration", "Conversational business intelligence"] },
      { icon: Cpu, title: "Industrial Automation", type: "PHYSICAL SYSTEMS", items: ["PLC communication", "QR scanning", "Automated rejection systems", "IoT integration", "Real-time monitoring"] },
    ].map((item, i) => <Reveal key={item.title}><div className="deployment-row"><span className="deployment-index">0{i + 1}</span><item.icon size={28} strokeWidth={1.3} /><div><span className="tiny-label">{item.type}</span><h3>{item.title}</h3><Tags items={item.items} /></div></div></Reveal>)}</div></div></section>

    <section className="section companies-section"><div className="shell"><Reveal><SectionTitle index="08" label="COMPANIES & VENTURES" title="The ventures." /></Reveal><div className="company-grid"><a href="https://www.sthapanatechnologies.com" target="_blank" rel="noopener noreferrer"><span>01 / FOUNDER & CEO</span><h3>Sthapana Technologies Pvt. Ltd.</h3><p>Defence Technology · Agentic AI · Industrial AI · AI-IoT</p><ExternalLink size={18} /></a><a href="#energy"><span>02 / FOUNDER</span><h3>Cloud Energy</h3><p>Renewable Energy · BESS · EMS · Digital Energy Reservation</p><ArrowUpRight size={18} /></a><a href="https://www.wapventure.com" target="_blank" rel="noopener noreferrer"><span>03 / FOUNDER & CEO</span><h3>WapVenture Solutions</h3><p>AI · Software · Enterprise Technology</p><ExternalLink size={18} /></a></div><p className="venture-footnote">WapVenture Solutions develops scalable AI, enterprise software, digital products, data platforms and custom automation systems.</p></div></section>

    <section id="leadership" className="section leadership-section"><div className="shell"><Reveal><SectionTitle index="09" label="LEADERSHIP & GLOBAL EXPERIENCE" title="Building across borders." /></Reveal><div className="leadership-grid"><Reveal><div className="role-list">{[["CURRENT", "Founder & CEO", "Sthapana Technologies"], ["CURRENT", "Founder", "Cloud Energy"], ["CURRENT", "Founder & CEO", "WapVenture Solutions"], ["FORMER", "CEO", "Connect India Japan"]].map(([period, role, company]) => <div key={company}><span>{period}</span><strong>{role}</strong><p>{company}</p></div>)}</div><div className="achievement-note"><Globe2 size={22} /><p>Youngest appointed CEO between an India and Japan company · Youngest Speaker — Rising Sun Conclave</p></div></Reveal><Reveal><div className="leadership-photo"><img src={conclaveImage} loading="lazy" width="900" height="600" alt="Shreyansh at the Rising Sun Conclave" /><span>RISING SUN CONCLAVE / LEADERSHIP</span></div></Reveal></div><Reveal><div className="exposure-line"><span>AREAS OF EXPOSURE</span><Tags items={["India–Japan Business Ecosystem", "International partnerships", "Innovation ecosystems", "Enterprise technology", "Energy infrastructure", "Defence technology", "Global fundraising", "Cross-border collaboration"]} /></div></Reveal></div></section>

    <section id="about" className="section about-section"><div className="shell"><Reveal><SectionTitle index="10" label="ABOUT SHREYANSH" title="A builder at the intersection." /></Reveal><div className="about-grid"><Reveal><p className="about-lead">I am an entrepreneur, inventor and technologist focused on building systems that can operate at the intersection of software and real-world infrastructure.</p></Reveal><Reveal><p>My work spans artificial intelligence, defence navigation, renewable-energy infrastructure, industrial automation and enterprise technology.</p><p>I founded Sthapana Technologies, Cloud Energy and WapVenture Solutions, building technologies ranging from Agentic AI systems and industrial intelligence platforms to digital energy infrastructure and resilient navigation systems.</p><p>I previously served as CEO of Connect India Japan and have worked across international business, technology and innovation ecosystems.</p><p>My long-term focus is building technology companies around problems that will matter over the coming decades.</p></Reveal></div><Reveal><div className="creative-line"><BookOpen size={26} strokeWidth={1.3} /><div><span className="tiny-label">BEYOND TECHNOLOGY</span><h3>Author & creator</h3><p><em>World of Hidden Thoughts</em> · <em>The Store at the Edge of Everything</em></p><p>Long-form storytelling, world-building and creative development alongside technology entrepreneurship.</p></div></div></Reveal></div></section>

    <section id="contact" className="section contact-section"><div className="shell"><Reveal><div className="eyebrow"><span>11</span><span className="eyebrow-rule" /><span>LET'S CONNECT</span></div><h2>Building Something<br /><span>That Matters?</span></h2><p>I’m open to conversations with investors, technology partners, strategic collaborators, industry leaders and organisations working on ambitious problems across AI, energy, defence and industrial technology.</p><div className="contact-actions"><Button variant="hero" asChild><a href="mailto:hi@sthapanatechnologies.com?subject=Investor%20%2F%20Strategic%20Partnership">Investor / Strategic Partnership <ArrowUpRight size={17} /></a></Button><Button variant="outline" asChild><a href="mailto:hi@sthapanatechnologies.com?subject=Technology%20Collaboration">Technology Collaboration <ArrowUpRight size={17} /></a></Button><Button variant="outline" asChild><a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> Connect on LinkedIn</a></Button><Button variant="outline" asChild><a href="mailto:shreyansh.singh3011@gmail.com"><Mail size={17} /> Email Me</a></Button></div><div className="contact-addresses"><a href="mailto:shreyansh.singh3011@gmail.com">shreyansh.singh3011@gmail.com</a><span>·</span><a href="mailto:hi@sthapanatechnologies.com">hi@sthapanatechnologies.com</a></div></Reveal></div></section>
    <footer className="footer"><div className="shell"><span className="footer-monogram">SS<span>.</span></span><p>© {new Date().getFullYear()} Shreyansh Singh — Building intelligent systems with purpose, clarity, and global impact.</p><a href="#home">BACK TO TOP <ArrowUpRight size={14} /></a></div></footer>
  </main>;
}