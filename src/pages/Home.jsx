import { eventConfig, challengeCategories, benefits, workflowSteps, rules } from '../data';
import BrandLockup from '../components/BrandLockup';
import Footer from '../components/Footer';
import Icon from '../components/Icon';
import Navbar from '../components/Navbar';
import ThreeCanvas from '../components/ThreeCanvas';

function Hero() {
  return <section className="hero" id="event">
    <Navbar /><ThreeCanvas />
    <div className="hero__content page-shell">
      <div className="hero__copy">
        <span className="eyebrow reveal reveal--one">[ CYBER INVADERS // PRESENTS ]</span>
        <h1 className="reveal reveal--two">Enter the<br /><em>cyber arena.</em></h1>
        <p className="hero__lede reveal reveal--three">An intense cybersecurity Capture The Flag experience designed to challenge your skills, sharpen your thinking, and push you beyond the obvious.</p>
        <div className="hero__actions reveal reveal--three"><a className="button" href="/register">Register now <Icon icon="solar:arrow-right-linear" /></a><a className="text-link" href="#challenges">Explore event <Icon icon="solar:arrow-down-linear" /></a></div>
        <div className="meta-row reveal reveal--three"><span>CTF // {eventConfig.year}</span><span>Registration // <b>Open</b></span><span>Format // {eventConfig.format}</span><span>Team size // {eventConfig.teamSize}</span></div>
      </div>
    </div>
    <div className="hero__status tech-glass"><div className="status__title">CTF // System status <span>01:42:07</span></div><div className="status__line"><span>Event status</span><b className="live">● Registration open</b></div><div className="status__line"><span>Challenges</span><b>{eventConfig.challengeCount}</b></div><div className="status__line"><span>Server</span><b className="live">● Operational</b></div><div className="status__line"><span>Operators</span><b className="live">● Online</b></div><div className="status__line"><span>Difficulty</span><b className="bars">████████░░</b></div></div>
    <div className="hero__corner"><span>NODE_01</span><svg viewBox="0 0 40 8" aria-hidden="true"><path d="M0,4 C20,4 20,4 40,4" stroke="currentColor" strokeDasharray="2 2" fill="none" /></svg><span>READY</span></div>
  </section>;
}

function Challenges() {
  return <section className="section page-shell" id="challenges"><div className="section-heading"><div><span className="eyebrow">[ 01 / THE CHALLENGE ]</span><h2>Every flag<br /><em>teaches something.</em></h2></div><p>Enter a controlled cybersecurity arena where every challenge is a puzzle, every vulnerability is a lesson, and every captured flag moves your team closer to the top.</p></div><div className="challenge-grid">{challengeCategories.map(([number, title, icon]) => <article className="challenge-card" key={number}><span className="card-number">{number}</span><Icon icon={icon} /><h3>{title}</h3><span className="card-arrow">↗</span></article>)}</div></section>;
}

function Benefits() {
  return <section className="benefit-band"><div className="page-shell"><div className="section-heading section-heading--wide"><div><span className="eyebrow">[ 02 / WHY PARTICIPATE ]</span><h2>More than<br /><em>a competition.</em></h2></div><p>Build instincts that stay with you beyond the scoreboard. Think rigorously, move ethically and leave with a sharper view of how systems really work.</p></div><div className="benefit-grid">{benefits.map(([number, first, second]) => <div className="benefit" key={number}><span>{number}</span><strong>{first}<br />{second}</strong><i>↗</i></div>)}</div></div></section>;
}

function Workflow() {
  return <section className="section page-shell" id="workflow"><div className="section-heading"><div><span className="eyebrow">[ 03 / EVENT WORKFLOW ]</span><h2>How it<br /><em>works.</em></h2></div><p>One clean sequence from first registration to the final flag. Bring your curiosity, your teammates and a willingness to look closer.</p></div><div className="workflow">{workflowSteps.map((step, index) => <div className="workflow__step" key={step}><span>0{index + 1}</span><strong>{step}</strong>{index < workflowSteps.length - 1 && <i>→</i>}</div>)}</div></section>;
}

function Rules() {
  return <section className="section rules-section" id="rules"><div className="page-shell"><div className="section-heading"><div><span className="eyebrow">[ 04 / RULES OF ENGAGEMENT ]</span><h2>Play sharp.<br /><em>Play fair.</em></h2></div><p>Good competition depends on a shared operating standard. Review the editable baseline below before entering the arena.</p></div><div className="rules-grid">{rules.map((rule, index) => <div className="rule" key={rule}><span>0{index + 1}</span><p>{rule}</p><Icon icon="solar:check-circle-linear" /></div>)}</div></div></section>;
}

export default function Home() {
  return <><Hero /><Challenges /><Benefits /><Workflow /><Rules /><section className="cta"><span className="cta__ghost">CAPTURE<br />THE<br />FLAG</span><div className="page-shell"><span className="eyebrow">[ 05 / YOUR MOVE ]</span><h2>Ready to<br /><em>enter?</em></h2><p>Your next flag is waiting.</p><a className="button" href="/register">Register now <Icon icon="solar:arrow-up-right-linear" /></a></div></section><Footer /></>;
}