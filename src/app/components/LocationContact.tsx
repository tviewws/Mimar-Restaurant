import { motion } from 'motion/react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export function LocationContact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#F4EDE4',
        padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1300, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 60 }}
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
            FIND US
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: '#111',
          }}>
            Location & Contact
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(32px, 5vw, 60px)',
          alignItems: 'start',
        }}>
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Address */}
            <div style={{ marginBottom: 32 }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 20 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: 'rgba(192,86,43,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <MapPin size={20} color="#C0562B" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#111', fontSize: 16, marginBottom: 4 }}>Address</div>
                  <div style={{ color: '#555', fontSize: 15, lineHeight: 1.6 }}>
                    Ngong Road Professional Center<br />
                    Nairobi, Kenya
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 20 }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: 'rgba(192,86,43,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Phone size={20} color="#C0562B" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#111', fontSize: 16, marginBottom: 4 }}>Phone</div>
                  <a
                    href="tel:+254722836021"
                    style={{
                      color: '#C0562B',
                      fontSize: 18,
                      fontWeight: 600,
                      textDecoration: 'none',
                      letterSpacing: '0.02em',
                    }}
                  >
                    +254 722 836 021
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  backgroundColor: 'rgba(192,86,43,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Clock size={20} color="#C0562B" />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: '#111', fontSize: 16, marginBottom: 4 }}>Hours</div>
                  <div style={{ color: '#555', fontSize: 15, lineHeight: 1.8 }}>
                    Monday – Friday: 7:00 AM – 8:00 PM<br />
                    Saturday – Sunday: 8:00 AM – 7:00 PM
                  </div>
                </div>
              </div>
            </div>

            <motion.a
              href="https://maps.google.com/?q=Ngong+Road+Professional+Center+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(192,86,43,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: '#C0562B',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: 8,
                padding: '14px 32px',
                fontSize: 14,
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.03em',
              }}
            >
              Get Directions
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div style={{
              borderRadius: 20,
              overflow: 'hidden',
              height: 380,
              border: '2px solid rgba(192,86,43,0.15)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.1)',
            }}>
              <iframe
                title="Mimar Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.813!2d36.7820!3d-1.2987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664a6df6f%3A0x4f9d93c01c74b3a9!2sNgong%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
