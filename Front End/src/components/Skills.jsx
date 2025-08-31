import React, { useState } from "react";
import data from "../data/details.json";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";


const Competences = () => {
const [activeTab, setActiveTab] = useState("frontEnd");
const [activePracticeTab, setActivePracticeTab] = useState("frontend");


  const renderSkills = (skills) => (
    
    <div className="card-container">
      {skills.map((skill, index) => (
         <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
        <Card key={index} skill={skill} />
        </motion.div>
      ))}
    </div>
  );

 return (
  <section className="competences">
    
    <h2>Mes Compétences</h2>

   <div className="skills-layout">
        {/* --- Colonne gauche : cartes --- */}
        <motion.div
          className="skills-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Compétences Techniques</h3>
          <div className="tab-buttons">
            <button
              className={activeTab === "frontEnd" ? "active" : ""}
              onClick={() => setActiveTab("frontEnd")}
            >
              Front-End
            </button>
            <button
              className={activeTab === "backEnd" ? "active" : ""}
              onClick={() => setActiveTab("backEnd")}
            >
              Back-End
            </button>
            <button
              className={activeTab === "tools" ? "active" : ""}
              onClick={() => setActiveTab("tools")}
            >
              Outils
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "frontEnd" && renderSkills(data.skills.frontEnd)}
            {activeTab === "backEnd" && renderSkills(data.skills.backEnd)}
            {activeTab === "tools" && renderSkills(data.skills.tools)}
          </div>
        </motion.div>

         {/* --- Colonne droite : Compétences Pratiques --- */}
  <motion.div
          className="skills-right"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="practical-skills">
            <h3>Compétences Pratiques</h3>
            <div className="tab-buttons">
              <button
                className={activePracticeTab === "frontend" ? "active" : ""}
                onClick={() => setActivePracticeTab("frontend")}
              >
                Front-End
              </button>
              <button
                className={activePracticeTab === "backend" ? "active" : ""}
                onClick={() => setActivePracticeTab("backend")}
              >
                Back-End
              </button>
              <button
                className={activePracticeTab === "optimisation" ? "active" : ""}
                onClick={() => setActivePracticeTab("optimisation")}
              >
                Optimisation
              </button>
              <button
                className={activePracticeTab === "gestion" ? "active" : ""}
                onClick={() => setActivePracticeTab("gestion")}
              >
                Gestion
              </button>
            </div>

            <div className="tab-content">
              <ul>
                {data.skills.skillsExtra[activePracticeTab].map((item, index) => (
                  <motion.li
                    key={index}
                    className="skill-item"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <FaCheckCircle className="faCheckCircle" />{" "}
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

    {/* --- Soft skills en dessous --- */}
    <motion.div
        className="soft-skills"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>Qualités Personnelles</h3>
        <div className="skills-badges">
          <span className="badge">Autonomie</span>
          <span className="badge">Créativité</span>
          <span className="badge">Organisation et gestion des priorités</span>
          <span className="badge">Rigueur</span>
          <span className="badge">Travail en équipe</span>
        </div>
      </motion.div>
    </section>
  );
};

const Card = ({ skill }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
        <div className="card-front">
          <div className="card-icon">
            <i className={skill.icon}></i>
          </div>
          <div className="card-content">
            <h4>{skill.title}</h4>
          </div>
        </div>
        <div className="card-back">
          <p>{skill.description}</p>
        </div>
      </div>
    </div>
    
  );
  
  
};

export default Competences;