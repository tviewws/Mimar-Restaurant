import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: 'Sumptuous African meals at pocket friendly prices. Mimar never disappoints — every visit feels like a treat.',
    author: 'James M.',
    role: 'Regular Customer',
    stars: 5,
  },
  {
    id: 2,
    quote: 'The best and most organized restaurant along Ngong Road. Clean environment, fast service, and incredible food.',
    author: 'Grace W.',
    role: 'Loyal Customer',
    stars: 5,
  },
  {
    id: 3,
    quote: 'Great hospitality and delicious food. You can taste the care that goes into every dish. Highly recommended!',
    author: 'Samuel K.',
    role: 'Nairobi Foodie',
    stars: 5,
  },
  {
    id: 4,
    quote: 'I love the warm welcome at Mimar. The pilau here is something else — perfectly spiced and generous portions.',
    author: 'Amina O.',
    role: 'Office Regular',
    stars: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const goNext = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section
      style={{
        backgroundColor: '#111111',
        padding: 'clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(192,86,43,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            backgroundColor: 'rgba(192,86,43,0.15)',
            color: '#C0562B',
            borderRadius: 100,
            padding: '5px 14px',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.1em',
            marginBottom: 20,
          }}>
            WHAT PEOPLE SAY
          </div>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            color: '#fff',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
          }}>
            Voices from Our Table
          </h2>
        </motion.div>

        {/* Carousel Card */}
        <div style={{ position: 'relative', minHeight: 280 }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{
                backgroundColor: '#1a1a1a',
                borderRadius: 20,
                padding: 'clamp(32px, 5vw, 56px)',
                border: '1px solid rgba(255,255,255,0.06)',
                textAlign: 'center',
                position: 'relative',
              }}
              whileHover={{ boxShadow: '0 0 60px rgba(192,86,43,0.15)' }}
            >
              {/* Quote mark */}
              <div style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 80,
                color: 'rgba(192,86,43,0.2)',
                lineHeight: 0.5,
                marginBottom: 24,
                userSelect: 'none',
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 20 }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} fill="#C0562B" color="#C0562B" />
                ))}
              </div>

              <p style={{
                fontFamily: 'Playfair Display, serif',
                color: '#F4EDE4',
                fontSize: 'clamp(17px, 2.5vw, 22px)',
                lineHeight: 1.7,
                fontStyle: 'italic',
                marginBottom: 32,
                maxWidth: 680,
                margin: '0 auto 32px',
              }}>
                {t.quote}
              </p>

              <div style={{
                display: 'inline-block',
                width: 40,
                height: 2,
                backgroundColor: '#C0562B',
                marginBottom: 16,
              }} />

              <div style={{
                fontWeight: 600,
                color: '#fff',
                fontSize: 16,
              }}>
                {t.author}
              </div>
              <div style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: 13,
                marginTop: 4,
                letterSpacing: '0.04em',
              }}>
                {t.role}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, marginTop: 40 }}>
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#C0562B' }}
            whileTap={{ scale: 0.95 }}
            onClick={goPrev}
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              backgroundColor: 'transparent',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.25s',
            }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: 8 }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: i === current ? '#C0562B' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: '#C0562B' }}
            whileTap={{ scale: 0.95 }}
            onClick={goNext}
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.15)',
              backgroundColor: 'transparent',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.25s',
            }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
