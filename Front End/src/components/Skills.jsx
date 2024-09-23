import React, { useState } from 'react';
import data from '../data/details.json';

const Competences = () => {
    return (
        <section className='competences'>
            <h2>Mes Compétences</h2>

            <div className='section-container'>
                <div className='front-back-container'>
                    <div className='section'>
                        <h3>Front-End</h3>
                        <div className='card-container'>
                            {data.skills.frontEnd.map((skill, index) => (
                                <Card key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    <div className='section'>
                        <h3>Back-End</h3>
                        <div className='card-container'>
                            {data.skills.backEnd.map((skill, index) => (
                                <Card key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className='tools-container'>
                    <div className='section'>
                        <h3>Outils</h3>
                        <div className='card-container'>
                            {data.skills.tools.map((tool, index) => (
                                <Card key={index} skill={tool} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Card = ({ skill }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className='card' onClick={handleClick}>
            <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className='card-front'>
                    <div className='card-icon'>
                        <i className={skill.icon}></i>
                    </div>
                    <div className='card-content'>
                        <h4>{skill.title}</h4>
                    </div>
                </div>
                <div className='card-back'>
                    <p>{skill.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Competences;
