import { serviceHighlights } from "../data/data";

function Hero() {
  return (
    <section className="hero-section px-4 py-2">
      <div className="d-flex justify-content-between mb-5 mt-5">
        <div className="heroo-section-info">
          <h1 className="text-violet">Fill your cart with freshness</h1>
          <p>Discover great deals, fresh products, and a seamless shopping experience.</p>
          <a
          href="#product-section"
            className="btn btn-violet"
          >
            Shop Now
          </a>
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

      <div className="service-highlights mt-4 ">
        <div className="row g-4">
          {serviceHighlights.map((item, index) => (
            <div key={index} className="col-12 col-md-4 ">
              <div className="service-card d-flex align-items-start gap-3 p-3 h-100 bg-light rounded">
                <i className={`fa-solid ${item.icon} fs-3 text-violet`}></i>
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