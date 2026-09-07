import { eventConfig, socialLinks } from '../data';
import BrandLockup from './BrandLockup';
import Icon from './Icon';

export default function Footer() {
  return <>
    <section className="prefooter bg-mesh">
      <span className="eyebrow">[ 05 / SIGNAL ]</span>
      <h2>Stay in the loop.</h2>
      <p>Get updates about the CTF, announcements and challenge information.</p>
      <form className="subscribe-form" onSubmit={(event) => event.preventDefault()}>
        <input type="email" placeholder="ENTER YOUR EMAIL" aria-label="Email for updates" required />
        <button className="button" type="submit">Subscribe <Icon icon="solar:arrow-right-linear" /></button>
      </form>
    </section>
    <footer className="footer">
      <div className="footer__brand"><BrandLockup /><p>An applied cybersecurity arena for curious minds, decisive teams and the next generation of defenders.</p></div>
      <div><span className="footer__label">Event</span><a href="/#event">About</a><a href="/#challenges">Challenges</a><a href="/#rules">Rules</a><a href="/#workflow">Timeline</a></div>
      <div><span className="footer__label">Participate</span><a href="/register">Register</a><a href="#">Leaderboard</a><a href="#">FAQ</a></div>
      <div><span className="footer__label">Connect</span>{socialLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>
      <div className="footer__status"><span className="footer__label">System status</span><span className="status-dot">●</span> All systems operational</div>
      <div className="footer__bottom"><span>© {eventConfig.year} Cyber Invaders</span><span>All rights reserved.</span></div>
    </footer>
  </>;
}