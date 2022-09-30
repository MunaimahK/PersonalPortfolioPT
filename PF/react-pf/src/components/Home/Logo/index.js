import "./index.scss";
import logoImg from "../../../assets/images/single_P.png";
import { useEffect, useRef } from "react";
import gsap from "gsap-trial";
import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";


const Logo = () => {

  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();
  const LogoRefTop = useRef();
  const LogoRefMain = useRef();
const didAnimate = useRef(false);
  useEffect(() => {
    if (didAnimate.current) {return;}
    didAnimate.current = true;
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline()
    .to(bgRef.current, {
      duration: 1,
      opacity: 1
    })
    .from(outlineLogoRef.current, {
      drawSVG: 0,
      duration: 20,
    })

    gsap.fromTo(
      solidLogoRef.current, {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2,
        duration: 2,
      }
    )
    gsap.fromTo(
      LogoRefTop.current, {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 3,
        duration: 2,
      }
    )
      gsap.fromTo(
        LogoRefMain.current, {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 4,
          duration: 2,
        }
      )
    

  }, [])

 
  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={logoImg} alt="M" />
  

<svg
   width="210mm"
   height="297mm"
   viewBox="0 0 210 297"
   version="1.1"
   
   xmlns="http://www.w3.org/2000/svg"
>
</svg>
      <img ref={LogoRefTop} className="solid-logo2" src={logoImg} alt="P" />
      <img ref={LogoRefMain} className="solid-logo3" src={logoImg} alt="S" />
  </div>
)
}
export default Logo
