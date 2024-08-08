import styles from './Hero.module.css';
import hero from '../../assets/Dr-martens-hero.jpg';

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={hero}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Top Quality Custom Made Shoes
          </h1>
          <p className="lead">
            Fashionable, comfortable, and affordable shoes designed to help
            people navigate the world with confidence. This online experience
            will bring ease in purchasing and cutting away transportation, by
            introducing delivery.
          </p>
          <div className="d-flex gap-2 d-md-flex justify-content-md-start">
            <button type="button" className={styles.heroButton}>
              Get Started
            </button>
            <button type="button" className={styles.heroButton}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
