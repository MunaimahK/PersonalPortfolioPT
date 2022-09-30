import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faJava, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 2000)
        }, [])
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                   <AnimatedLetters
                   letterClass={letterClass}
                   strArray={['A','b','o','u','t',' ','m','e']}
                   idx={15}
                   />
                </h1>
                <p>I am an ambitious computer science undergraduate looking for a role
                    demanding critical thinking and solution developement. I look forward
                    to working on challenging, diverse projects in both team-intensive
                    environments and solo-performance roles.
                </p>
                <p>With an educational background focused on algorithms, data structures, 
                    and runtime efficient solutions, I am constantly acquiring new skills,
                    starting new projects, and expanding my skill set. With all the new information,
                    I am constantly thinking baout how things can become further efficient.
                </p>
                <p>
                    I am an artist, literature enthusiast, cook, and an ameteur interior decorator
                    who finds myself applying these skills to logical problem solving, and in
                    turn applying logical algorithmic solutions to real-world problems.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJs} color="darkslategray"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faAws} color="darkslategray"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faJava} color="darkslategray"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faCloud} color="darkslategray"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPython} color="darkslategray"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faReact} color="darkslategray"/>
                    </div>

                        
                    </div>

                </div>
                
            </div>
            <Loader type='line-scale-pulse-out'/>
            </>
    )
}

export default About;