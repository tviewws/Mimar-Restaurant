import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Phone, Clock, MapPin } from 'lucide-react';

// ─── Data ────────────────────────────────────────────────────────────────────

interface MenuEntry {
  id: number;
  name: string;
  sides?: string;
  price: string;          // primary / starting price shown prominently
  altPrice?: string;      // optional alternative (e.g. with chips/pilau)
  altSides?: string;
  popular?: boolean;
}

type SectionKey =
  | 'Breakfast & Snacks'
  | 'Poultry & Fish'
  | 'Beef, Goat & Traditional'
  | 'Vegetarian & Special Combos'
  | 'Beverages';

const menuSections: { key: SectionKey; emoji: string; items: MenuEntry[] }[] = [
  {
    key: 'Breakfast & Snacks',
    emoji: '🌅',
    items: [
      { id: 1,  name: 'Sausage',            price: '60/=' },
      { id: 2,  name: 'Samosa',             price: '40/=' },
      { id: 3,  name: 'Andazi',             price: '30/=' },
      { id: 4,  name: 'Burger',             price: '200/=' },
      { id: 5,  name: 'Hotdog',             price: '150/=' },
      { id: 6,  name: 'Chips',              price: '150/=' },
      { id: 7,  name: 'Chapati — White',    price: '30/=' },
      { id: 8,  name: 'Chapati — Brown',    price: '40/=' },
      { id: 9,  name: 'Smokie',             price: '40/=' },
      { id: 10, name: 'Kebab',              price: '50/=' },
      { id: 11, name: 'French Toast',       price: '150/=', popular: true },
      { id: 12, name: '2 Fried Eggs',       price: '100/=' },
      { id: 13, name: '2 Kienyeji Eggs',    price: '150/=' },
      { id: 14, name: 'Spanish Omelet',     price: '150/=' },
      { id: 15, name: 'Kienyeji Egg Omelet',price: '150/=' },
      { id: 16, name: 'Toast (Buttered)',   price: '50/=' },
      { id: 17, name: 'Vegetable Sandwich', price: '100/=' },
      { id: 18, name: 'Sweet Potatoes',     price: '50/=' },
      { id: 19, name: 'Arrow Roots',        price: '70/=' },
      { id: 20, name: 'Cakes',              price: '80/=' },
    ],
  },
  {
    key: 'Poultry & Fish',
    emoji: '🍗',
    items: [
      {
        id: 21, name: 'Stir-fried Chicken',
        sides: 'With Rice / Chapo / Mokimo / Ugali',   price: '350/=',
        altSides: 'With Chips / Pilau',                altPrice: '380/=',
        popular: true,
      },
      {
        id: 22, name: 'Dry Fried Chicken',
        sides: 'With Rice / Chapo / Mokimo / Ugali',   price: '350/=',
        altSides: 'With Chips / Pilau',                altPrice: '380/=',
      },
      {
        id: 23, name: 'Bread Crumbed Chicken',
        sides: 'With Rice / Ugali / Chapo / Mokimo',   price: '400/=',
        altSides: 'With Chips / Pilau',                altPrice: '430/=',
      },
      {
        id: 24, name: '¼ Chicken Stew',
        sides: 'With Rice / Ugali / Kienyeji',         price: '350/=',
        altSides: 'With Chips / Pilau',                altPrice: '380/=',
      },
      {
        id: 25, name: '¼ Chicken Deep Fried',
        sides: 'With Rice / Ugali',                    price: '350/=',
        altSides: 'With Chips',                        altPrice: '380/=',
      },
      {
        id: 26, name: 'Whole Tilapia',
        sides: 'With Rice / Ugali / Chapati / Kienyeji', price: '550/=',
        altSides: 'With Chips / Pilau',                altPrice: '580/=',
        popular: true,
      },
      {
        id: 27, name: 'Fish Fillet',
        sides: 'With Pilau / Chips',                   price: '580/=',
      },
    ],
  },
  {
    key: 'Beef, Goat & Traditional',
    emoji: '🥩',
    items: [
      {
        id: 28, name: 'Beef Stew',
        sides: 'With Rice / Ugali / Chapati / Kienyeji', price: '250/=',
        altSides: 'With Pilau / Chips',                altPrice: '280/=',
        popular: true,
      },
      {
        id: 29, name: 'Stir Fried Beef',
        sides: 'With Ugali / Rice / Kienyeji',         price: '300/=',
        altSides: 'With Chips / Pilau',                altPrice: '320/=',
      },
      {
        id: 30, name: 'Fried Beef',
        sides: 'With Ugali / Mokimo / Chapati',        price: '350/=',
        altSides: 'With Chips / Pilau',                altPrice: '380/=',
      },
      {
        id: 31, name: 'Fried Mbuzi (Goat)',
        sides: 'With Rice / Chapo / Ugali',            price: '400/=',
        altSides: 'With Chips / Pilau',                altPrice: '430/=',
        popular: true,
      },
      {
        id: 32, name: 'Matumbo',
        sides: 'With Rice / Chapo / Ugali / Kienyeji', price: '180/=',
      },
      {
        id: 33, name: 'Pilau (Full)',
        sides: 'With Salad and Sauce',                 price: '160/=',
      },
      {
        id: 34, name: 'Pilau / Chips Mix',
        sides: 'With Kachumbari & Sauce',              price: '180/=',
      },
    ],
  },
  {
    key: 'Vegetarian & Special Combos',
    emoji: '🌿',
    items: [
      {
        id: 35, name: 'Beans',
        sides: 'With Rice / Chapo',                    price: '150/=',
        altSides: 'With Pilau / Mokimo / Ugali',       altPrice: '200/=',
      },
      {
        id: 36, name: 'Stewed Njahi (Black Beans)',
        sides: 'With Rice / Chapo',                    price: '180/=',
        altSides: 'With Chips / Kienyeji',             altPrice: '200/=',
      },
      {
        id: 37, name: 'Ndengu (Green Grams)',
        sides: 'With Rice / Chapo / Kienyeji / Ugali', price: '150/=',
        altSides: 'With Pilau / Chips',                altPrice: '200/=',
      },
      {
        id: 38, name: 'Mimar Special',
        sides: 'Ndengu/Njahi & Beef — Rice / Chapo / Kienyeji', price: '250/=',
        popular: true,
      },
      {
        id: 39, name: 'Githeri with Vegetables',
        price: '160/=',
      },
      {
        id: 40, name: 'Githeri Special (with Beef)',
        price: '250/=',
      },
      {
        id: 41, name: 'Rice / Chapati / Kienyeji',
        sides: 'Vegetables & Sauce',                   price: '150/= each',
      },
    ],
  },
  {
    key: 'Beverages',
    emoji: '☕',
    items: [
      { id: 42, name: 'Tea Mug / Lemon Tea',                         price: '50/=' },
      { id: 43, name: 'Milo / Chocolate / Coffee',                   price: '60/=' },
      { id: 44, name: 'Glass of Milk',                               price: '100/=' },
      { id: 45, name: 'Tea Masala / Special Tea / Special Chocolate', price: '100/=' },
      { id: 46, name: 'Fresh Juice — Mango / Passion / Cocktail',    price: '150/=', popular: true },
      { id: 47, name: 'Soda (500ml)',                                 price: '120/=' },
      { id: 48, name: 'Soda (300ml)',                                 price: '60/=' },
      { id: 49, name: 'Alvaro',                                       price: '120/=' },
      { id: 50, name: 'Mineral Water',                                price: '80/=' },
    ],
  },
];

type Tab = 'All' | 'Breakfast & Snacks' | 'Main Meals' | 'Vegetarian & Special Combos' | 'Beverages';

const tabs: Tab[] = ['All', 'Breakfast & Snacks', 'Main Meals', 'Vegetarian & Special Combos', 'Beverages'];

function visibleSections(tab: Tab) {
  if (tab === 'All') return menuSections;
  if (tab === 'Main Meals') return menuSections.filter(s => s.key === 'Poultry & Fish' || s.key === 'Beef, Goat & Traditional');
  return menuSections.filter(s => s.key === tab);
}

// ─── Menu Row ────────────────────────────────────────────────────────────────

function MenuRow({ item, index }: { item: MenuEntry; index: number }) {
  const hasAlt = !!item.altPrice;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 12) * 0.04 }}
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.055)',
        paddingTop: 14,
        paddingBottom: 14,
      }}
    >
      {/* Name row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
          {item.popular && (
            <span style={{
              backgroundColor: '#C0562B',
              color: '#fff',
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.08em',
              padding: '2px 7px',
              borderRadius: 100,
              flexShrink: 0,
              textTransform: 'uppercase',
            }}>
              Popular
            </span>
          )}
          <span style={{
            fontFamily: 'Playfair Display, serif',
            color: '#F4EDE4',
            fontWeight: 600,
            fontSize: 15.5,
            lineHeight: 1.3,
          }}>
            {item.name}
          </span>
        </div>

        {!hasAlt && (
          <span style={{
            fontFamily: 'Inter, sans-serif',
            color: '#C0562B',
            fontWeight: 700,
            fontSize: 14.5,
            flexShrink: 0,
            letterSpacing: '0.02em',
          }}>
            {item.price}
          </span>
        )}
      </div>

      {/* Single sides line (no alt) */}
      {item.sides && !hasAlt && (
        <p style={{
          fontFamily: 'Inter, sans-serif',
          color: 'rgba(255,255,255,0.38)',
          fontSize: 12,
          marginTop: 4,
          lineHeight: 1.5,
          paddingLeft: item.popular ? 0 : 0,
        }}>
          {item.sides}
        </p>
      )}

      {/* Dual pricing rows */}
      {hasAlt && (
        <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(255,255,255,0.4)',
              fontSize: 12,
              flex: 1,
            }}>
              {item.sides}
            </span>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              color: '#C0562B',
              fontWeight: 700,
              fontSize: 14,
              flexShrink: 0,
            }}>
              {item.price}
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(255,255,255,0.4)',
              fontSize: 12,
              flex: 1,
            }}>
              {item.altSides}
            </span>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              color: '#C0562B',
              fontWeight: 700,
              fontSize: 14,
              flexShrink: 0,
            }}>
              {item.altPrice}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

// ─── Section Block ────────────────────────────────────────────────────────────

function SectionBlock({ section }: { section: typeof menuSections[0] }) {
  // Split items into two columns
  const mid = Math.ceil(section.items.length / 2);
  const colA = section.items.slice(0, mid);
  const colB = section.items.slice(mid);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: 72 }}
    >
      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
        <div style={{
          width: 4,
          height: 36,
          backgroundColor: '#C0562B',
          borderRadius: 2,
          flexShrink: 0,
        }} />
        <div>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            color: '#C0562B',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 2,
          }}>
            {section.emoji} Menu
          </p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            color: '#fff',
            fontSize: 'clamp(22px, 2.8vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.1,
          }}>
            {section.key}
          </h2>
        </div>
        <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.07)', marginLeft: 8 }} />
        <span style={{ color: 'rgba(255,255,255,0.22)', fontSize: 12, fontWeight: 500, flexShrink: 0 }}>
          {section.items.length} items
        </span>
      </div>

      {/* Two-column item grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '0 48px',
      }}>
        <div>
          {colA.map((item, i) => (
            <MenuRow key={item.id} item={item} index={i} />
          ))}
        </div>
        <div>
          {colB.map((item, i) => (
            <MenuRow key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export function MenuPage() {
  const [activeTab, setActiveTab] = useState<Tab>('All');
  const sections = visibleSections(activeTab);

  return (
    <div style={{ backgroundColor: '#111111', minHeight: '100vh', paddingTop: 72 }}>

      {/* ── Hero Banner ── */}
      <div style={{
        backgroundColor: '#0d0d0d',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        padding: 'clamp(48px, 6vw, 80px) clamp(24px, 6vw, 80px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600, height: 320,
          background: 'radial-gradient(ellipse, rgba(192,86,43,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <Link to="/" style={{ textDecoration: 'none' }}>
          <motion.div
            whileHover={{ x: -4 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: 'rgba(255,255,255,0.45)',
              fontSize: 13,
              fontWeight: 500,
              marginBottom: 28,
              cursor: 'pointer',
            }}
          >
            <ArrowLeft size={14} />
            Back to Home
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(192,86,43,0.15)',
            color: '#C0562B',
            borderRadius: 100,
            padding: '5px 16px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.14em',
            marginBottom: 18,
            textTransform: 'uppercase',
          }}>
            Full Menu
          </div>

          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            color: '#fff',
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: 6,
          }}>
            Mimar Restaurant
          </h1>

          <p style={{
            fontFamily: 'Inter, sans-serif',
            color: '#C0562B',
            fontSize: 'clamp(12px, 1.5vw, 15px)',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}>
            For Quick Lunches, Snacks &amp; Outside Catering
          </p>

          <p style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: 15,
            maxWidth: 420,
            margin: '0 auto 32px',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}>
            Made fresh daily. Honest ingredients. Real African taste at prices that make sense.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="tel:+254734799850"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(192,86,43,0.12)',
                border: '1px solid rgba(192,86,43,0.3)',
                color: '#C0562B',
                borderRadius: 100,
                padding: '10px 22px',
                fontSize: 13.5,
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <Phone size={13} />
              0734 799 850
            </a>
            <a
              href="tel:+254722836021"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                backgroundColor: 'rgba(192,86,43,0.12)',
                border: '1px solid rgba(192,86,43,0.3)',
                color: '#C0562B',
                borderRadius: 100,
                padding: '10px 22px',
                fontSize: 13.5,
                fontWeight: 600,
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <Phone size={13} />
              0722 836 021
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Sticky Category Tabs ── */}
      <div style={{
        position: 'sticky',
        top: 72,
        zIndex: 50,
        backgroundColor: 'rgba(17,17,17,0.97)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0 clamp(24px, 6vw, 80px)',
      }}>
        <div style={{
          maxWidth: 1300,
          margin: '0 auto',
          display: 'flex',
          gap: 0,
          overflowX: 'auto',
          scrollbarWidth: 'none',
        }}>
          {tabs.map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  backgroundColor: 'transparent',
                  color: active ? '#fff' : 'rgba(255,255,255,0.42)',
                  border: 'none',
                  borderBottom: active ? '2px solid #C0562B' : '2px solid transparent',
                  padding: '18px 22px',
                  fontSize: 12.5,
                  fontWeight: active ? 700 : 500,
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.22s',
                  flexShrink: 0,
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Menu Content ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          style={{
            maxWidth: 1300,
            margin: '0 auto',
            padding: 'clamp(48px, 5vw, 80px) clamp(24px, 6vw, 80px)',
          }}
        >
          {sections.map((section) => (
            <SectionBlock key={section.key} section={section} />
          ))}

          {/* ── Timing Note ── */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: 36,
            display: 'flex',
            justifyContent: 'center',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              backgroundColor: 'rgba(192,86,43,0.08)',
              border: '1px solid rgba(192,86,43,0.22)',
              borderRadius: 12,
              padding: '16px 28px',
            }}>
              <Clock size={18} color="#C0562B" style={{ flexShrink: 0 }} />
              <span style={{
                fontFamily: 'Inter, sans-serif',
                color: 'rgba(255,255,255,0.75)',
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}>
                <strong style={{ color: '#C0562B', fontWeight: 700 }}>Breakfast</strong> ready from{' '}
                <strong style={{ color: '#fff' }}>8:00 am</strong>
                &nbsp;&nbsp;·&nbsp;&nbsp;
                <strong style={{ color: '#C0562B', fontWeight: 700 }}>Lunch</strong> ready from{' '}
                <strong style={{ color: '#fff' }}>12:00 noon</strong>
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Location Strip ── */}
      <div style={{
        backgroundColor: '#0d0d0d',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '20px clamp(24px, 6vw, 80px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
      }}>
        <MapPin size={14} color="#C0562B" style={{ flexShrink: 0 }} />
        <span style={{
          fontFamily: 'Inter, sans-serif',
          color: 'rgba(255,255,255,0.38)',
          fontSize: 13,
        }}>
          Ngong Road Professional Centre, Off Ngong Rd
          &nbsp;·&nbsp;
          <a href="mailto:mimarrestaurant@gmail.com" style={{ color: 'rgba(192,86,43,0.7)', textDecoration: 'none' }}>
            mimarrestaurant@gmail.com
          </a>
        </span>
      </div>

      {/* ── Catering CTA Banner ── */}
      <div style={{
        backgroundColor: '#C0562B',
        padding: 'clamp(40px, 5vw, 64px) clamp(24px, 6vw, 80px)',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          color: '#fff',
          fontSize: 'clamp(22px, 3vw, 36px)',
          fontWeight: 700,
          marginBottom: 10,
        }}>
          Planning an Event or Catering?
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: 15,
          marginBottom: 28,
          maxWidth: 460,
          margin: '0 auto 28px',
          lineHeight: 1.7,
          fontFamily: 'Inter, sans-serif',
        }}>
          Mimar offers full outside catering for corporate events, family gatherings, and celebrations. Get in touch today.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <a
            href="tel:+254734799850"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              backgroundColor: '#fff', color: '#C0562B',
              textDecoration: 'none', borderRadius: 8,
              padding: '13px 28px', fontSize: 14, fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}
          >
            <Phone size={16} />
            0734 799 850
          </a>
          <a
            href="tel:+254722836021"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff',
              textDecoration: 'none', borderRadius: 8,
              padding: '13px 28px', fontSize: 14, fontWeight: 700,
              fontFamily: 'Inter, sans-serif',
              border: '1px solid rgba(255,255,255,0.4)',
            }}
          >
            <Phone size={16} />
            0722 836 021
          </a>
        </div>
      </div>

    </div>
  );
}
