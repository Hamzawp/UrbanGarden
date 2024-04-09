import React from 'react';
import Header from '../../Components/Header/Header'
import ProductSlider from '../../Components/Carousel/ProductSlider';
import TrendingSlider from '../../Components/Carousel/trendingSlider';
import GardeningSlider from '../../Components/Carousel/gardeningSlider';
import PlantSlider from '../../Components/Carousel/plantSlider';
import OfferSlider from '../../Components/Carousel/OfferSlider';
import BulbSlider from '../../Components/Carousel/bulbSlider';
import PebbleSlider from '../../Components/Carousel/pebbleSlider';
import PotSlider from '../../Components/Carousel/potSlider';
import SeedSlider from '../../Components/Carousel/seedSlider';
import AccessorySlider from '../../Components/Carousel/accessorySlider';
import SoilAndFertilizerSlider from '../../Components/Carousel/soilfertSlider';
import CategoryBox from '../../Components/Category/CategoryBox';
import CityBasedSlider from '../../Components/Carousel/ciybasedSlider';
import Footer from '../../Components/Footer/Footer';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { categoryData } from '../../Components/data';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const user = useSelector((state) => state.user.currentUser);
  const mystyle = {
    alignItems: "center",
    justifyContent: "center",
    padding: "0px 0 0 40px",
    fontSize: "1.8rem"
  };
  const category = categoryData.map((item) =>
    <CategoryBox title={item.title} key={item.id} content={item.content} />
  )

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* NAVBAR  */}
      <Header />
      {/* NAVBAR  */}

      {/* OFFERSLIDER  */}
      <OfferSlider />
      {/* OFFERSLIDER  */}

      {/* TRENDING  */}

      <div className="Bestsellers" style={{ textAlign: "left", padding: "5px 0 0 0" }}>
        <h2 style={mystyle}>TRENDING <FaAngleDoubleRight style={{ paddingTop: "8px" }} /> </h2>
        <TrendingSlider />
      </div>
      {/* TRENDING  */}

      {/* NEW_ARRIVALS  */}
      {/* <div className="Bestsellers" style={{ textAlign: "left", padding: "5px 0 0 0" }}>
        <h2 style={{ padding: "0px 0 0 40px", fontSize: "1.8rem" }}>NEW ARRIVALS <FaAngleDoubleRight style={{ paddingTop: "8px" }} /></h2>
        <ProductSlider />
      </div> */}
      {user && <div className="Bestsellers" style={{ textAlign: "left", padding: "5px 0 0 0" }}>
        <h2 style={{ padding: "0px 0 0 40px", fontSize: "1.8rem" }}>Discover Products Near You <FaAngleDoubleRight style={{ paddingTop: "8px" }} /></h2>
        <CityBasedSlider city={"Badlapur"} />
      </div>}
      {/* NEW_ARRIVALS  */}

      {/* Map-Category  */}
      <div className="category_section" >
        <h1>CATEGORIES TO BAG</h1>
        <main className="page-content">
          {category}
        </main>
      </div>
      {/* Map-Category  */}

      {/* GARDENING  */}
      <div className="Bestsellers" style={{ textAlign: "left", padding: "5px 0 0 0" }}>
        <h2 style={{ padding: "0px 0 0 40px", fontSize: "1.8rem" }}>GARDENING <FaAngleDoubleRight style={{ paddingTop: "8px" }} /></h2>
        <GardeningSlider />
      </div>
      {/* GARDENING  */}

      {/* PLANTS  */}
      <div className="Bestsellers" style={{ textAlign: "left", padding: "5px 0 0 0" }}>
        <h2 style={{ padding: "0px 0 0 40px", fontSize: "1.8rem" }}>PLANTS <FaAngleDoubleRight style={{ paddingTop: "8px" }} /></h2>
        <PlantSlider />
      </div>
      {/* PLANTS  */}

      {/* SEEDS  */}
      <div className="Bestsellers" style={{ textAlign: "left", padding: "5px 0 0 0" }}>
        <h2 style={{ padding: "0px 0 0 40px", fontSize: "1.8rem" }}>SEEDS <FaAngleDoubleRight style={{ paddingTop: "8px" }} /></h2>
        <SeedSlider />
      </div>
      {/* SEEDS  */}

      {/* BULBS  */}
      <div className="Bestsellers" style={{ textAlign: "left", padding: "5px 0 0 0" }}>
        <h2 style={{ padding: "0px 0 0 40px", fontSize: "1.8rem" }}>BULBS <FaAngleDoubleRight style={{ paddingTop: "8px" }} /></h2>
        <BulbSlider />
      </div>
      {/* BULBS  */}

      {/* POTS  */}
      <div className="Bestsellers" style={{ textAlign: "left", padding: "5px 0 0 0" }}>
        <h2 style={{ padding: "0px 0 0 40px", fontSize: "1.8rem" }}>POTS <FaAngleDoubleRight style={{ paddingTop: "8px" }} /></h2>
        <PotSlider />
      </div>
      {/* POTS  */}

      {/* SOIL & FERTILIZERS  */}
      <div className="Bestsellers" style={{ textAlign: "left", padding: "5px 0 0 0" }}>
        <h2 style={{ padding: "0px 0 0 40px", fontSize: "1.8rem" }}>SOIL & FERTILIZER <FaAngleDoubleRight style={{ paddingTop: "8px" }} /></h2>
        <SoilAndFertilizerSlider />
      </div>
      {/* SOIL & FERTILIZER  */}

      {/* PEBBLES  */}
      <div className="Bestsellers" style={{ textAlign: "left", padding: "5px 0 0 0" }}>
        <h2 style={{ padding: "0px 0 0 40px", fontSize: "1.8rem" }}>PEBBLES <FaAngleDoubleRight style={{ paddingTop: "8px" }} /></h2>
        <PebbleSlider />
      </div>
      {/* PEBBLES  */}

      {/* ACCESSORIES  */}
      <div className="Bestsellers" style={{ textAlign: "left", padding: "5px 0 0 0" }}>
        <h2 style={{ padding: "0px 0 0 40px", fontSize: "1.8rem" }}>ACCESSORIES <FaAngleDoubleRight style={{ paddingTop: "8px" }} /></h2>
        <AccessorySlider />
      </div>
      {/* ACCESSORIES  */}

      {/* Footer  */}
      <Footer />
      {/* Footer  */}
    </div>

  );
}

export default HomePage