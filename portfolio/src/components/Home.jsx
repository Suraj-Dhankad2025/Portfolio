import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/2.png";
const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const animationClientsCount = () => {
    animate(0, 50, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const projectCount = useRef(null);
  const animationProjectCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <>
    
    <div id="home">
  
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Suraj
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "An Entrepreneur"],
              autoStart: true,
              loop: true,
              cursor: null,
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:suraj.dhanked@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +
              {ratio < 2 && (
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +
                {ratio < 2 && (
                  <motion.span
                    whileInView={animationProjectCount}
                    ref={projectCount}
                  ></motion.span>
                )}
              </p>
              <span>Projects Made</span>
            </article>
            <article data-special>
              <p>Contacts</p>
              <span>suraj.dhanked@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Suraj" />
      </section>
      <BsChevronDown />
    </div>
    </>
  );
};

export default Home;