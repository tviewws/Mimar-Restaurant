import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import eventPhoto from '../../assets/Warmer.png'; //

// Replaced the Unsplash URL with the imported local file
const ABOUT_IMAGE = eventPhoto; 

const stats = [
  { icon: '⭐', value: '4.3', label: 'Rating' },
  { icon: '🍛', value: '30+', label: 'African Dishes' },
  { icon: '💰', value: '100%', label: 'Pocket Friendly' },
  { icon: '🧼', value: 'Always', label: 'Clean & Organized' },
];

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.25 }}
      style={{
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: '24px 20px',
        textAlign: 'center',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        flex: 1,
        minWidth: 120,
      }}
    >
      <div style={{ fontSize: 28, marginBottom: 8 }}>{icon}</div>
      <div style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: 26,
        fontWeight: 700,
        color: '#C0562B',
        lineHeight: 1,
        marginBottom: 6,
      }}>{value}</div>
      <div style={{ fontSize: 13, color: '#666', fontWeight: 500, letterSpacing: '0.02em' }}>{label}</div>
    </motion.div>
  );
}

export function About() {
  return (
    <section
      id="about"
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
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              borderRadius: 20,
              overflow: 'hidden',
              aspectRatio: '4/5',
              position: 'relative',
            }}>
              <ImageWithFallback
                src={ABOUT_IMAGE}
                alt="Mimar Restaurant Event"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            {/* Decorative accent */}
            <div style={{
              position: 'absolute',
              bottom: -16,
              right: -16,
              width: 120,
              height: 120,
              backgroundColor: '#C0562B',
              borderRadius: 16,
              zIndex: -1,
              opacity: 0.3,
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
              backgroundColor: 'rgba(192,86,43,0.1)',
              color: '#C0562B',
              borderRadius: 100,
              padding: '5px 14px',
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.1em',
              marginBottom: 20,
            }}>
              ABOUT US
            </div>

            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: '#111111',
              lineHeight: 1.2,
              marginBottom: 20,
            }}>
              Serving Nairobi with<br />
              <span style={{ color: '#C0562B' }}>Heart and Consistency</span>
            </h2>

            <p style={{
              color: '#444',
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 16,
            }}>
              At Mimar Restaurant & Caterers, we believe great food should be accessible to everyone. 
              Located on Ngong Road, we've built our reputation on clean, organized spaces and 
              consistently warm service.
            </p>
            <p style={{
              color: '#444',
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 36,
            }}>
              Our kitchen runs on a strong work ethic and genuine passion for African cuisine. 
              Loyal customers keep returning — not just for the food, but for the feeling of 
              being welcomed every single time.
            </p>

            {/* Stat Cards */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}