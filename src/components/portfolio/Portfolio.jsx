import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Elivaas Villa Booking Platform",
    img: "/Elivaasbooking.png",
    desc: "Developed a high-performance B2C villa booking website using Next.js 15, React 19, and GraphQL. Integrated seamless payments (Razorpay, Cashfree), filters, and personalized coupon systems. Load time optimized to 0.62ms, contributing to 20%+ MoM revenue growth.",
    link:"https://www.elivaas.com/",
  },
  {
    id: 2,
    title: "CRS: Internal Reservation Platform",
    img: "/CRS.png",
    desc: "Designed and launched an internal reservation system for agents and sales teams to manage booking workflows, inventory, and availability. Improved booking efficiency by 25% and streamlined day-to-day operations for internal teams.",
  },
  {
    id: 3,
    title: "AI Agent Assistant with LangChain",
    img: "/langchainAgent.png",
    desc: "Led the development of a GPT-powered AI assistant using OpenAI and LangChain. Built to virtually assist agents by recommending high-revenue properties, answering queries, and automating manual research—boosting sales productivity by 50%+.",
  },
  {
    id: 4,
    title: "Jobizo Healthcare Recruitment Platform",
    img: "/healthcareSector.png",
    desc: "Built a scalable Admin Panel to manage healthcare content and job listings. Collaborated with backend engineers to optimize performance, reducing load time by 15%. Supported both web and mobile platforms.",
    link:"https://jobizo.com/"
  
  },
];


const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" style={{objectFit:item.id==4 ? "contain":"cover"}} />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2 style={{marginTop:item.id==2 ?"80px":"10px"}}>{item.title}</h2>
            <p>{item.desc}</p>
           {item?.link && <button onClick={()=>{window.open(item.link,"_blank")}}>See Demo</button>}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
