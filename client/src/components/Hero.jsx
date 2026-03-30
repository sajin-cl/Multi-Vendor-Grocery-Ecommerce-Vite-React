import { serviceHighlights } from "../data/data";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <section className="hero-section px-4 py-2">
      <div className="d-flex justify-content-between mb-5 mt-5">
        <div className="heroo-section-info">
          <h1 className="text-light-green fw-bold mb-3" style={{ fontFamily: "monospace" }}>FILL YOUR CART WITH FRESHNESS</h1>
          <p className="mb-4">Discover great deals, fresh products, and a seamless shopping experience.</p>
          <a
            href="#product-section"
            className="btn btn-light-green mb-4"
          >
            SHOP NOW
          </a>
          <span className="text-dark fw-semibold" style={{ fontFamily: "monospace" }}>
            <Typewriter
              options={{
                strings: [
                  "Fresh fruits delivered straight to your doorstep, daily and organic",
                  "Organic veggies, hand-picked and ready for your kitchen",
                  "Fill your cart with freshness, from farm to your table"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>

        </div>
        <div className="hero-section-image d-none d-lg-block">
          <img
            className="rounded "
            src="/hero-banner.webp"
            height={300}
            alt="hero-image-vegetable"
          />
        </div>
      </div>

      <div
        className="hero-content justify-content-between align-items-center d-none d-md-flex mt-4 py-4"
      >
        <h4>We provide Best Customer Experience</h4>
        <p>|| we ensure that our customer have the best shopping experience</p>
      </div>


      <div className="text-center mt-5 px-3">
        <h5 className="fw-bold text-light-green">Experience Freshness Like Never Before</h5>
        <p className="text-muted mb-0">
          From farm-fresh fruits to premium coffee powder, we bring quality products straight to your doorstep with care and convenience.
        </p>
      </div>

      {/*  Video Intro */}
      <div className="video-intro container-fluid mt-4">
        <div className="row">

          {/* LEFT: 1 BIG VIDEO */}
          <div className="col-md-6">
            <video
              className="w-100 "
              style={{ height: "500px", objectFit: "cover" }}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/thumbnails/intro1-thumb.webp"
            >
              <source src="https://res.cloudinary.com/dpc9p1npw/video/upload/f_auto,q_auto/intro1_mng0dj.mp4" type="video/mp4" />
            </video>

          </div>

          {/* RIGHT: 2 SMALL VIDEOS */}
          <div className="col-md-6 d-flex flex-column gap-3">

            <video
              className="w-100"
              style={{ height: "280px", objectFit: "cover" }}
              autoPlay
              loop
              muted
              playsInline
               preload="auto"
              poster="/thumbnails/intro2-thumb.webp"
            >
              <source src="https://res.cloudinary.com/dpc9p1npw/video/upload/f_auto,q_auto/intro2_eanfd4.mp4" type="video/mp4" />
            </video>

            <video
              className="w-100"
              style={{ height: "200px", objectFit: "cover" }}
              autoPlay
              loop
              muted
              playsInline
               preload="auto"
              poster="/thumbnails/intro3-thumb.webp"
            >
              <source src="https://res.cloudinary.com/dpc9p1npw/video/upload/f_auto,q_auto/intro3_q6fbwd.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>


      {/*  SErvice Highlights */}
      <div className="service-highlights mt-4 ">
        <div className="row g-4">
          {serviceHighlights.map((item, index) => (
            <div key={index} className="col-12 col-md-4 ">
              <div className="service-card d-flex align-items-start gap-3 p-3 h-100 bg-light rounded">
                <i className={`fa-solid ${item.icon} fs-3 text-light-green`}></i>
                <div>
                  <h6 className="mb-1 fw-bold">{item.title}</h6>
                  <p className="mb-0 small text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>

  );
};

export default Hero;