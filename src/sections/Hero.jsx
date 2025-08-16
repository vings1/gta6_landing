const Hero = () => {
  return (
    <section className="hero-section">
        <div className="size-full mask-wrapper"> // css mask "grand theft auto" hero-text.svg
            <img src="/images/hero-bg.webp" alt="hero-bg" className="scale-out"/> // background image inside mask
            <img src="/images/hero-text.webp" alt="hero-logo" className="title-logo fade-out"/>
            <img src="/images/watch.trailer.png" alt="trailer" className="trailer-logo fade-out" />
            <div>
                <img src="/images/play.png" alt="play" className="w-7 ml-1"/>
            </div>
        </div>

        <div>
            <img src="/images/big-hero-text.svg" alt="logo" className="size-full object-cover mask-logo"/>
        </div>

        <div className="fake-logo-wrapper">
            <img src="/images/big-hero-text.svg" alt="" className="overlay-logo" />
        </div>
    </section>
  )
}

export default Hero