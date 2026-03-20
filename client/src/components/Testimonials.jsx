import { motion } from "framer-motion";

function Testimonials({ testimonials }) {
  return (
    <section className="py-5 ">
      <div className="container-fluid px-0">

        <h2 className="fw-bold mb-4 text-center">
          What Our Customers Say
        </h2>

        <div className="overflow-hidden position-relative">

          {/* Gradient fade */}
          <div className="position-absolute top-0 start-0 h-100" style={{
            width: "100px",
            background: "linear-gradient(to right, #f8f9fa, transparent)",
            zIndex: 2
          }} />

          <div className="position-absolute top-0 end-0 h-100" style={{
            width: "100px",
            background: "linear-gradient(to left, #f8f9fa, transparent)",
            zIndex: 2
          }} />

          {/* Testimonials */}
          <motion.div
            className="d-flex"
            style={{ gap: "20px" }}
            animate={{ x: [0, -testimonials.length * 320] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="card shadow-sm"
                style={{
                  minWidth: "300px",
                  maxWidth: "300px",
                  flex: "0 0 auto",
                }}
              >
                <div className="card-body d-flex flex-column justify-content-between h-100">
                  <p className="card-text mb-4">
                    “{item?.quote}”
                  </p>

                  <div className="pt-3 mt-auto border-top border-success">
                    <h6 className="mb-0 fw-bold">{item?.name}</h6>
                    <small className="text-muted">{item?.title}</small>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;