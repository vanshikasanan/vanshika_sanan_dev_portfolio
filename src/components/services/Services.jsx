import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I build modern web platforms and AI-powered solutions
          <br /> that drive real business results.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Scalable</motion.b>{" "}
            Platforms
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Built with</motion.b>{" "}
            Code & Intelligence
          </h1>
          <button>MY EXPERTISE</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Development</h2>
          <p>
            High-performance, responsive UI development using <em>React.js</em>,{" "}
            <em>Next.js</em>, and <em>Tailwind CSS</em>. Focused on delivering
            smooth user experiences across web and mobile platforms.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full-Stack Solutions</h2>
          <p>
            End-to-end development of scalable B2B/B2C platforms with <em>GraphQL</em>,
            <em>Node.js</em>, <em>PostgreSQL</em>, and <em>cloud-first</em> architecture. Strong experience
            in CMS, admin panels, and booking systems.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>AI Agent Development</h2>
          <p>
            Building smart assistant agents using <em>OpenAI</em>,{" "}
            <em>LangChain</em>, and custom pipelines to automate workflows and
            boost team productivity by over 50%.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Performance Optimization</h2>
          <p>
            Experience optimizing complex platforms, reducing load times to
            sub-millisecond levels, and implementing best practices with SSR,
            SEO, caching, and efficient state management.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
