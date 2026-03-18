import founderPhoto from '../../assets/JANE.jpeg';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const FOUNDER_IMAGE = founderPhoto;
const qualities = [
  { label: 'Discipline', desc: 'Every dish, every service — held to an unwavering standard.' },
  { label: 'Attention to Detail', desc: 'From the plating to the seasoning, nothing is overlooked.' },
  { label: 'Leadership Through Service', desc: 'Leading from the kitchen floor, not just behind the counter.' },
];

export function Founder() {
  return (
    <section
      id="founder"
      style={{
        backgroundColor: '#F4EDE4',
        padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          {/* Left: Founder Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ position: 'relative', order: 0 }}
          >
            <div style={{
              borderRadius: 20,
              overflow: 'hidden',
              aspectRatio: '3/4',
            }}>
              <ImageWithFallback
                src={FOUNDER_IMAGE}
                alt="Mimar Founder"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
              />
            </div>
            {/* Green accent bar */}
            <div style={{
              position: 'absolute',
              bottom: 30,
              left: -16,
              width: 6,
              height: 100,
              backgroundColor: '#5B6D4C',
              borderRadius: 4,
            }} />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'inline-block',
              backgroundColor: 'rgba(91,109,76,0.12)',
              color: '#5B6D4C',
              borderRadius: 100,
              padding: '5px 14px',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.1em',
              marginBottom: 20,
            }}>
              MEET THE FOUNDER
            </div>

            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: '#111111',
              lineHeight: 1.2,
              marginBottom: 20,
            }}>
              The Vision Behind<br />
              <span style={{ color: '#C0562B' }}>Every Meal</span>
            </h2>

            <p style={{
              color: '#555',
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 32,
            }}>
              Behind Mimar is a quiet force — someone who built this restaurant not on ambition alone, 
              but on a deep understanding that great food is an act of service. Every corner of Mimar 
              reflects a commitment to quality that goes beyond the plate.
            </p>

            {/* Qualities */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
              {qualities.map((q) => (
                <div key={q.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: '#C0562B',
                    marginTop: 8,
                    flexShrink: 0,
                  }} />
                  <div>
                    <div style={{
                      fontWeight: 600,
                      color: '#111',
                      fontSize: 15,
                      marginBottom: 3,
                    }}>{q.label}</div>
                    <div style={{ color: '#666', fontSize: 14, lineHeight: 1.6 }}>{q.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div style={{
              borderTop: '1px solid rgba(0,0,0,0.1)',
              paddingTop: 24,
            }}>
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 32,
                fontStyle: 'italic',
                color: '#C0562B',
                fontWeight: 500,
                lineHeight: 1,
                marginBottom: 6,
              }}>
                The Founder
              </div>
              <div style={{
                fontSize: 13,
                color: '#888',
                fontWeight: 500,
                letterSpacing: '0.05em',
              }}>
                MIMAR RESTAURANT & CATERERS
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
