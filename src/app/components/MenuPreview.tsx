import juicePhoto from '../../assets/Juices.jpeg';
import tilapiaPhoto from '../../assets/Fish.jpeg';
import pilauPhoto from '../../assets/Pilau.jpeg';
import filletPhoto from '../../assets/Fillet.jpeg';
import chickenPhoto from '../../assets/Chicken.jpeg';
import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const menuItems = [
  {
    id: 1,
    name: "Fresh Juice",
    description: "Pure, ice-cold refreshment made from locally sourced tropical fruits, squeezed daily for a vibrant burst of natural flavor.",
    price: "From KSh 350",
    image: juicePhoto, 
    tag: "House Special",
  },
  {
    id: 2,
    name: "Grilled Tilapia", 
    description: "Whole Nile tilapia fried to crispy perfection, served with fresh kachumbari and nutritious greens.",
    price: "From KSh 400",
    image: tilapiaPhoto,
    tag: "Popular",
  },
  {
    id: 3, 
    name: "Beef Pilau",
    description: "Fragrant basmati rice cooked in a rich blend of traditional Swahili spices and tender beef, served with fresh kachumbari salad.",
    price: "From KSh 450", 
    image: pilauPhoto, 
    tag: "Chef's Choice",
  },
  {
    id: 4, 
    name: "Crispy Fish Fillet",
    description: "Succulent fish fillet breaded and deep-fried to golden perfection, served with a side of crispy chips and a zesty garden salad.",
    price: "From KSh 550", 
    image: filletPhoto,
    tag: "Lunch Favorite",
  },
  {
    id: 5, 
    name: "Flame-Grilled Chicken",
    description: "Tender chicken quarter marinated in our signature herb blend and grilled to perfection, served with a fresh garden salad and your choice of side.",
    price: "From KSh 500", 
    image: chickenPhoto,
    tag: "House Special",
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