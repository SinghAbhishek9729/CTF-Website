import { eventConfig } from '../data';

export default function BrandLockup({ compact = false }) {
  return (
    <div className={`brand-lockup ${compact ? 'brand-lockup--compact' : ''}`}>
      <img className="brand-lockup__college" src="/assets/College-Logo.jpg" alt="NIET Greater Noida" />
      <span className="brand-lockup__divider" aria-hidden="true" />
      <img className="brand-lockup__club" src="/assets/Club-Logo.png" alt="Cyber Invaders" />
      <div className="brand-lockup__name">
        <span>{compact ? 'CYBER' : 'CYBER INVADERS'}</span>
        {!compact && <small>{eventConfig.collegeName}</small>}
      </div>
    </div>
  );
}