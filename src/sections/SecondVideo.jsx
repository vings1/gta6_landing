import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"

const SecondVideo = () => {

    const videoRef = useRef();

    useGSAP(()=> {
        gsap.set('.lucia', {marginTop: '-60vh', opacity: 0})

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: '.lucia',
                start: 'top top',
                scrub: 2,
                pin: true,
            }
        })

        // video fade in
        tl.to('.lucia', {opacity: 1, duration: 1, ease: 'power1.inOut'});
        //animate video by scrubbing
        videoRef.current.onloadedmetadata = ()=> {
            tl.to(videoRef.current, {currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut'}, '<')
        }
    })

  return (
    <section className="lucia">
        <div className="h-dvh">
            <video
                ref={videoRef}
                muted
                playsInline
                preload="auto"
                src="/videos/output2.mp4"
                className="size-full object-cover second-vd"
                style={{objectPosition: '30% 0%'}}
            />
        </div>
    </section>
  )
}

export default SecondVideo