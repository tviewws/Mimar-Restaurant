import { Link } from 'react-router';
import { Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Meet The Founder', href: '/#founder' },
  { label: 'Contact', href: '/#contact' },
];

export function Footer() {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const id = href.replace('/#', '');
      if (window.location.pathname !== '/') {
        window.location.href = href;
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer style={{
      backgroundColor: '#0d0d0d',
      borderTop: '1px solid rgba(192,86,43,0.15)',
      padding: 'clamp(48px, 6vw, 80px) clamp(24px, 6vw, 80px) 0',
    }}>
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'clamp(32px, 4vw, 60px)',
          marginBottom: 60,
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 40,
                height: 40,
                backgroundColor: '#C0562B',
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: 'Playfair Display, serif',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 20,
                }}>M</span>
              </div>
              <div>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 20,
                }}>Mimar</div>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, letterSpacing: '0.05em' }}>
                  RESTAURANT & CATERERS
                </div>
              </div>
            </div>
            <p style={{
              color: 'rgba(255,255,255,0.45)',
              fontSize: 14,
              lineHeight: 1.7,
              maxWidth: 260,
            }}>
              Authentic African flavours. Warm hospitality. Right in the heart of Ngong Road.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: '0.1em',
              marginBottom: 20,
              textTransform: 'uppercase',
            }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      fontSize: 14,
                      transition: 'color 0.2s',
                      display: 'inline-block',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#C0562B')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: '0.1em',
              marginBottom: 20,
              textTransform: 'uppercase',
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <MapPin size={16} color="#C0562B" style={{ flexShrink: 0, marginTop: 2 }} />
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>
                  Ngong Road Professional Center,<br />Nairobi, Kenya
                </span>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <Phone size={16} color="#C0562B" style={{ flexShrink: 0 }} />
                <a
                  href="tel:+254722836021"
                  style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C0562B')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  +254 722 836 021
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: 13 }}>
            © {new Date().getFullYear()} Mimar Restaurant & Caterers. All rights reserved.
          </div>
          <div style={{
            color: 'rgba(255,255,255,0.3)',
            fontSize: 13,
            fontStyle: 'italic',
          }}>
            Built with pride in Nairobi. 🇰🇪
          </div>
        </div>
      </div>
    </footer>
  );
}
