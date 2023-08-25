import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import artistsHeader from "../assets/images/keagan-henman-bG-DowcuLVM-unsplash.jpg";
import artistsImage1 from "../assets/images/aseema.jpg";
import artistsImage2 from "../assets/images/chinmay.jpg";
import artistsImage3 from "../assets/images/pratyasha.jpg";
import artistsImage4 from "../assets/images/Partha.jpg";
import artistsImage5 from "../assets/images/antara-chakrabarty.jpg";
import artistsImage6 from "../assets/images/Dipanwit Dashmohapatra 3.jpg";
import artistsImage7 from "../assets/images/anu_ch.jpg";
import artistsImage8 from "../assets/images/Somesh_Satpathy.jpg";
import featuredArtist1 from "../assets/images/manoj.jpg";
import featuredArtist2 from "../assets/images/prakruti.jpg";
import featuredArtist3 from "../assets/images/subasis.jpg";
import "./artists.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";

const Artists = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div className="artists">
      <Navbar />
      <Header
        headerImage={artistsHeader}
        headerText="#OurArtists"
        className="header"
      />
      <div className="artists-slider">
        <h1>Artists We Worked With</h1>
        <Slider {...settings}>
          <div className="artists-slider-image">
            <img src={artistsImage1} alt="artist1" />
          </div>
          <div className="artists-slider-image">
            <img src={artistsImage2} alt="artist2" />
          </div>
          <div className="artists-slider-image">
            <img src={artistsImage3} alt="artist3" />
          </div>
          <div className="artists-slider-image">
            <img src={artistsImage4} alt="artist4" />
          </div>
          <div className="artists-slider-image">
            <img src={artistsImage5} alt="artist5" />
          </div>
          <div className="artists-slider-image">
            <img src={artistsImage6} alt="artist6" />
          </div>
          <div className="artists-slider-image">
            <img src={artistsImage7} alt="artist7" />
          </div>
          <div className="artists-slider-image">
            <img src={artistsImage8} alt="artist8" />
          </div>
        </Slider>
      </div>
      <div className="artists-featured">
        <h1>Featured Artists</h1>
        <div className="artists-featured-container">
          <div className="featured-artist">
            <div className="featured-artist-image">
              <img src={featuredArtist1} alt="featured1" />
            </div>
            <div className="featured-artist-bio">
              <h2>Manoj Mishra</h2>
              <p>
                Manoj Mishra is an Indian actor, who is best known for his work
                in the Hindi, Odia and Tamil film industries. He primarily
                appears in Hindi films supporting roles, and notable acting
                credits include Mission Kashmir (2000),), and Odia films like
                tumakuparuni ta bhuli, , aa janha re lekhibanaa, Ashok Samrat
                (2013), Bhaunri (2015) and Abhay (2017), tum mo love story and
                many more.
              </p>
            </div>
          </div>
          <div className="featured-artist">
            <div className="featured-artist-image">
              <img src={featuredArtist2} alt="featured2" />
            </div>
            <div className="featured-artist-bio">
              <h2>Prakruti Mishra</h2>
              <p>
                Prakruti Mishra is an Indian actress known for her work in Odia
                films and Hindi television. She has received the National Film
                Award (Special Mention) for Hello Arsi. She was most recent seen
                as Devanyi In Jai Kanhaiya Lal Kion Star Bharat, as Bitti in
                Bitti Business Walion & TV and in the reality show of MTV Ace Of
                Space 2 in which she was 5th runner up.
              </p>
            </div>
          </div>
          <div className="featured-artist">
            <div className="featured-artist-image">
              <img src={featuredArtist3} alt="featured3" />
            </div>
            <div className="featured-artist-bio">
              <h2>Subasis sharma</h2>
              <p>
                Subhasis Sharma is a well-known actor, also known by the name of
                Mantu, who has worked extensively in the Odia Film Industry. He
                debuted in the Film industry with the movie “Prema Adhei
                Akhyara” associated with Odia entertainer Babushan Mohanty. His
                notable works include Dekha Hela Prema Hela (2019) and Maa Ki
                Har Wo Yaad Taaza Kar De (2016).
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Artists;
