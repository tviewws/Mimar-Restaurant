import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export function MobileCallButton() {
  return (
    <motion.a
      href="tel:+254722836021"
      className="md:hidden"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        backgroundColor: '#C0562B',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: 100,
        padding: '14px 32px',
        fontSize: 15,
        fontWeight: 600,
        fontFamily: 'Inter, sans-serif',
        boxShadow: '0 8px 30px rgba(192,86,43,0.5)',
        whiteSpace: 'nowrap',
      }}
    >
      <Phone size={18} />
      Call Now
    </motion.a>
  );
}
