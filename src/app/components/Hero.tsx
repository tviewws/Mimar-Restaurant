import { useRef } from 'react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Phone } from 'lucide-react';
import heroBg from '../../assets/newhero3.jpeg';

const HERO_IMAGE = heroBg;
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  // Track window scrollY directly — avoids the "non-static container" warning
  // that fires when useScroll({ target }) traverses static-positioned ancestors.
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], ['0%', '30%']);

  return (
    <div
      ref={ref}
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Parallax Background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-20%',
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: bgY,
        }}
      />
      {/* Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.55) 60%, rgba(17,17,17,0.9) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        textAlign: 'center',
        padding: '0 24px',
        maxWidth: 900,
        margin: '0 auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Tag line */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: 'rgba(192,86,43,0.2)',
            border: '1px solid rgba(192,86,43,0.4)',
            borderRadius: 100,
            padding: '6px 16px',
            marginBottom: 28,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#C0562B' }} />
            <span style={{ color: '#F4EDE4', fontSize: 13, fontWeight: 500, letterSpacing: '0.08em' }}>
              NGONG ROAD PROFESSIONAL CENTER, NAIROBI
            </span>
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            color: '#fff',
            fontSize: 'clamp(42px, 7vw, 80px)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: '-0.01em',
          }}>
            Taste That<br />
            <span style={{ color: '#C0562B', fontStyle: 'italic' }}>Brings You Back.</span>
          </h1>

          <p style={{
            color: 'rgba(244,237,228,0.85)',
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: 1.6,
            marginBottom: 40,
            fontWeight: 400,
            maxWidth: 560,
            margin: '0 auto 40px',
          }}>
            Sumptuous African meals at pocket-friendly prices along Ngong Road.
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/menu" style={{ textDecoration: 'none' }}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(192,86,43,0.6)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  backgroundColor: '#C0562B',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '15px 36px',
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.03em',
                }}
              >
                View Menu
              </motion.button>
            </Link>
            <motion.a
              href="tel:+254722836021"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: 8,
                padding: '15px 36px',
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.03em',
                textDecoration: 'none',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Phone size={16} />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          cursor: 'pointer',
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11, letterSpacing: '0.1em', fontWeight: 500 }}>
          SCROLL
        </span>
        <ChevronDown size={20} style={{ color: 'rgba(255,255,255,0.5)' }} />
      </motion.div>
    </div>
  );
}