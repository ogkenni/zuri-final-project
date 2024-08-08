import styles from './Footer.module.css';
/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className="py-5 container">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Find Us</h5>
            <div className="nav flex-column">
              <p>Address: Obafemi Awolowo way, Ikeja Lagos</p>
              <p>Phone: +2345678966</p>
              <p>Email: solabarb@gmail.com</p>
            </div>
          </div>

          <div className="col-6 col-md-2 mb-3"></div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Mission</h5>
            <div className="nav flex-column">
              <p>"Bringing your footwears to your doorstep in a snap"</p>
              <p>
                Sola Barbs, <br></br>CEO.
              </p>
            </div>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className={styles.footButton} type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
