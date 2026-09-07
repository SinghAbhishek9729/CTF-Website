import { useState } from 'react';
import { navigationItems } from '../data';
import BrandLockup from './BrandLockup';
import Icon from './Icon';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <a className="navbar__brand" href="/"><BrandLockup compact /></a>
      <nav className={`navbar__nav ${open ? 'is-open' : ''}`}>
        {navigationItems.map((item) => <a key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
        <a className="button button--small" href="/register" onClick={() => setOpen(false)}>Register now <Icon icon="solar:arrow-up-right-linear" /></a>
      </nav>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation"><Icon icon={open ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear'} /></button>
    </header>
  );
}