import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from '../../assets/logo.png';
const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Founder', href: '/#founder' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
    }
  };

  const navBg = scrolled
    ? 'rgba(17, 17, 17, 0.97)'
    : 'transparent';

  return (
    <>
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: navBg,
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(192,86,43,0.15)' : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease',
          // No left padding — logo circle will touch the left edge of the nav
          paddingLeft: 0,
          paddingRight: 40,
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}>
          {/* ── Logo lockup ── */}
          <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>

              {/*
                Image layout: [spoon | MG circle | fork] — 3 equal horizontal sections.
                Render the img at height: 100% of the 72px container.
                left: 50% + translateX(-50%) horizontally centres the full-width image
                inside the 72px-wide window, which reveals exactly the middle third = MG circle.
                No background-image, no upscaling — native browser img rendering for crispness.
              */}
              <div style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                flexShrink: 0,
                boxShadow: '0 0 0 2.5px #C0562B',
              }}>
                <img
                  src={logoImage}
                  alt="Mimar Restaurant MG logo"
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: 'auto',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'block',
                  }}
                />
              </div>

              {/* Brand text — unchanged typography */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{
                  fontFamily: 'Playfair Display, serif',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: 26,
                  letterSpacing: '0.01em',
                  lineHeight: 1,
                  display: 'block',
                }}>
                  Mimar
                </span>
                <span style={{
                  fontFamily: 'Inter, sans-serif',
                  color: '#C0562B',
                  fontWeight: 600,
                  fontSize: 10.5,
                  letterSpacing: '0.28em',
                  lineHeight: 1,
                  display: 'block',
                  textTransform: 'uppercase',
                }}>
                  Restaurant
                </span>
              </div>

            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex" style={{ alignItems: 'center', gap: 32 }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: '0.03em',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C0562B')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
              >
                {link.label}
              </a>
            ))}
            <Link to="/menu" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  backgroundColor: '#C0562B',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '10px 22px',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background-color 0.25s, box-shadow 0.25s',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#d46535';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 20px rgba(192,86,43,0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C0562B';
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                }}
              >
                View Menu
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              padding: 4,
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 72,
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: 'rgba(17,17,17,0.98)',
              backdropFilter: 'blur(12px)',
              padding: '24px 40px 32px',
              borderBottom: '1px solid rgba(192,86,43,0.2)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    textDecoration: 'none',
                    fontSize: 18,
                    fontWeight: 500,
                    letterSpacing: '0.02em',
                  }}
                >
                  {link.label}
                </a>
              ))}
              <Link to="/menu" onClick={() => setMobileOpen(false)} style={{ textDecoration: 'none' }}>
                <button
                  style={{
                    backgroundColor: '#C0562B',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '14px 28px',
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: 'pointer',
                    width: '100%',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  View Menu
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}