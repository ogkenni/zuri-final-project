/* eslint-disable react/no-unescaped-entities */
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Qualities from '../../components/Qualities/Qualities';
import './About.module.css';

const About = () => {
  return (
    <>
      <Header />
      <div className="container px-4 pt-5" id="featured-3">
        <h2 className="pb-2 border-bottom">About Us</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <h3 className="fs-2 text-body-emphasis">Vision and Mission</h3>
            <ul>
              <li>
                Our Vision is to become the leading online store in the country
                by delivering excellent customer service through the internet
              </li>
              <li>
                Our Mission is to create convinence for our customers while
                buying from us.
              </li>
            </ul>
          </div>
          <div className="feature col">
            <h3 className="fs-2 text-body-emphasis">About the Owner</h3>
            <p>
              {' '}
              She is the CEO and founder of Barb Shoes Store since 2020. It has
              always been a walk in store before the introduction of this online
              service. We specialize in custom made shoes for people who cannot
              find a fit in the traditional stores.
            </p>
          </div>
          <div className="feature col">
            <h3 className="fs-2 text-body-emphasis">Company Background</h3>
            <p>
              {' '}
              The company was founded in 2020 as an innovation by the CEO. It
              started as a project for people to afford good fashion with a
              cheap budget. it has grown to be top class through the love of the
              customers
            </p>
          </div>
        </div>
      </div>
      <Qualities />
      <Footer />
    </>
  );
};

export default About;
