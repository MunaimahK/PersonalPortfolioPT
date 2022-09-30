import Loader from "react-loaders";
import "./index.scss";
import {useRef, useState, useEffect} from 'react';
import AnimatedLetters from "../AnimatedLetters";
import Numeronym from "../../assets/images/Imgnumeronym.jpeg";
import Calc from "../../assets/images/calc.jpg";
const Works = () => {
    
    const refForm = useRef();
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000)
        }, [])
    return (
        <>
         <div className='container works-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['M','y',' ','W','o','r','k','s']}
                    idx={15}
                    />
                </h1>
                <a className="container clickable-img" href="https://github.com/MunaimahK/Numeronym" target="blank">
                    <img src={Numeronym} alt="numeronym-img"  />
                        <div className="container center-text">Numeronym</div>
                </a>
                <a className="container second-img" href="https://github.com/MunaimahK/Calculator" target="blank">
                    <img src={Calc} alt="calculator-img"  />
                        <div className="container below-text">KivyCalculator</div>
                </a>
            </div>
        </div>
        <Loader type="line-scale-pulse-out"/>
       </>
    )
}

export default Works;
