import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useMaskSettings } from "../../constants"; // extract the useMaskSetting
import ComingSoon from "./ComingSoon";


const Hero = () => {
    const {initialMaskPos, initialMaskSize, maskPos, maskSize} = useMaskSettings();

    // Start Animation gsap hook
    useGSAP(()=> {
        // set mask wrapper to starting position
        gsap.set('.mask-wrapper', { maskPosition: initialMaskPos, maskSize: initialMaskSize});

        // hide svg mask logo and make invisible
        gsap.set('.mask-logo', {marginTop: '-100vh', opacity: 0});

        gsap.set('.entrance-message', { marginTop: '0vh'});

        // timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top', //when to start, top of hero-section hit top of Viewport
                scrub: 2.5, //smooth delay
                end: '+=200%', //current 100% to next page
                pin: true,
            }
        });

        tl
            .to('.fade-out', {opacity: 0, ease: 'power1.inOut'})
            .to('.scale-out', {scale:1, ease: 'power1.inOut'}) // scale-out = 125% then bringing it back to 100%
            .to('.mask-wrapper', { maskSize, ease: 'power1.inOut'}, '<') // start same time as previous animation, maskSize define already from useMaskSetting() hook
            .to('.mask-wrapper', { opacity: 0})
            .to('.overlay-logo', { opacity: 1, onComplete: ()=>{
                gsap.to('.overlay-logo', {opacity: 0});
            }}, '<')
            .to('.entrance-message', {duration: 1, ease: 'power1.inOut', maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%'}, '<')
    });

  return (
    <section className="hero-section">
        
        <div className="size-full mask-wrapper"> {/* css mask "grand theft auto" hero-text.svg */}
            <img src="/images/hero-bg.webp" alt="background" className="scale-out"/> {/* background image inside mask */}            
            <img src="/images/hero-text.webp" alt="hero-logo" className="title-logo fade-out"/>
            <img src="/images/watch-trailer.png" alt="trailer" className="trailer-logo fade-out" />
            <div className="play-img fade-out">
                <img src="/images/play.png" alt="play" className="w-7 ml-1"/>
            </div>
        </div>

        <div>
            <img src="/images/big-hero-text.svg" alt="logo" className="size-full object-cover mask-logo"/>
        </div>

        <div className="fake-logo-wrapper">
            <img src="/images/big-hero-text.svg" className="overlay-logo" />
        </div>

        <ComingSoon />
    </section>
  )
};

export default Hero

