import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const menuItems = [
  {
    id: 1,
    name: "Nyama Choma Special",
    description:
      "Tender flame-grilled meat seasoned with our signature blend of African spices.",
    price: "From KSh 350",
    image:
      "https://images.unsplash.com/photo-1702827482556-481adcd68f3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwZm9vZCUyMHBsYXR0ZXIlMjByZXN0YXVyYW50JTIwbWVhbHxlbnwxfHx8fDE3NzI1Njc1OTV8MA&ixlib=rb-4.1.0&q=80&w=800",
    tag: "House Special",
  },
  {
    id: 2,
    name: "Grilled Tilapia",
    description:
      "Whole Nile tilapia grilled to perfection, served with kachumbari and ugali.",
    price: "From KSh 400",
    image:
      "https://images.unsplash.com/photo-1612426357506-8b66a851fbe6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwdGlsYXBpYSUyMGZpc2glMjBBZnJpY2FuJTIwZm9vZHxlbnwxfHx8fDE3NzI1Njc1OTB8MA&ixlib=rb-4.1.0&q=80&w=800",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Pilau Rice",
    description:
      "Fragrant spiced rice slow-cooked with premium cuts and aromatic East African spices.",
    price: "From KSh 250",
    image:
      "https://images.unsplash.com/photo-1653981608672-aea09b857b20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdSUyMHJpY2UlMjBLZW55YW4lMjBzcGljZWQlMjBkaXNofGVufDF8fHx8MTc3MjU2NzU5MXww&ixlib=rb-4.1.0&q=80&w=800",
    tag: "Lunch",
  },
  {
    id: 4,
    name: "Beans & Rice Combo",
    description:
      "Hearty stewed beans paired with steamed rice — a wholesome daily staple done right.",
    price: "From KSh 150",
    image:
      "https://images.unsplash.com/photo-1770164678239-89706708a496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwYmVhbnMlMjBzdGV3JTIwaGVhcnR5JTIwbWVhbHxlbnwxfHx8fDE3NzI1Njc1OTh8MA&ixlib=rb-4.1.0&q=80&w=800",
    tag: "Budget Pick",
  },
  {
    id: 5,
    name: "Roasted Chicken",
    description:
      "Juicy whole chicken marinated overnight and slow-roasted with herbs and garlic.",
    price: "From KSh 500",
    image:
      "https://images.unsplash.com/photo-1627799370307-9b2a689bb94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FzdGVkJTIwY2hpY2tlbiUyMHdob2xlJTIwbWVhbCUyMHBsYXRlfGVufDF8fHx8MTc3MjU2NzU5OXww&ixlib=rb-4.1.0&q=80&w=800",
    tag: "Premium",
  },
];

function MenuCard({
  item,
  index,
}: {
  item: (typeof menuItems)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      style={{
        backgroundColor: "#1a1a1a",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "box-shadow 0.3s",
        cursor: "default",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 20px 50px rgba(192,86,43,0.2)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.boxShadow =
          "none")
      }
    >
      <div
        style={{
          position: "relative",
          height: 200,
          overflow: "hidden",
        }}
      >
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
          onMouseEnter={(e) =>
            ((
              e.currentTarget as HTMLImageElement
            ).style.transform = "scale(1.07)")
          }
          onMouseLeave={(e) =>
            ((
              e.currentTarget as HTMLImageElement
            ).style.transform = "scale(1)")
          }
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            backgroundColor: "#C0562B",
            color: "#fff",
            padding: "4px 12px",
            borderRadius: 100,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.05em",
          }}
        >
          {item.tag}
        </div>
      </div>
      <div style={{ padding: "20px 22px 24px" }}>
        <h3
          style={{
            fontFamily: "Playfair Display, serif",
            color: "#fff",
            fontSize: 20,
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          {item.name}
        </h3>
        <p
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 14,
            lineHeight: 1.6,
            marginBottom: 16,
          }}
        >
          {item.description}
        </p>
        <div
          style={{
            color: "#C0562B",
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "0.02em",
          }}
        >
          {item.price}
        </div>
      </div>
    </motion.div>
  );
}

export function MenuPreview() {
  return (
    <section
      id="menu-preview"
      style={{
        backgroundColor: "#111111",
        padding:
          "clamp(60px, 8vw, 100px) clamp(24px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "rgba(192,86,43,0.15)",
              color: "#C0562B",
              borderRadius: 100,
              padding: "5px 14px",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.1em",
              marginBottom: 20,
            }}
          >
            OUR MENU
          </div>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              color: "#fff",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Here's What We're Serving
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 16,
              marginTop: 12,
              maxWidth: 500,
              margin: "12px auto 0",
            }}
          >
            Fresh, made-to-order African meals every day —
            honest ingredients, real flavour.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 60,
          }}
        >
          {menuItems.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ textAlign: "center" }}
        >
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(192,86,43,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                backgroundColor: "#C0562B",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "16px 40px",
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              Explore Full Menu
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}