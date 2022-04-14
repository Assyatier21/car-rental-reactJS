import Car from "../assets/img/img_car.png";
import FilterCard from "../components/FilterCard";

const Home = () => {
  return (
    <div>
      <div className="top d-flex flex-row">
        <div className="col-lg-6 left">
          <h2 className="fw-bold title">
            Sewa & Rental Mobil Terbaik di kawasan Jakarta
          </h2>
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
        </div>
        <div className="col-lg-6 right">
          <div className="image">
            <img src={Car} alt="" />
          </div>
        </div>
      </div>
      <div className="mid d-flex justify-content-center">
        <FilterCard />
      </div>
    </div>
  );
};

export default Home;
