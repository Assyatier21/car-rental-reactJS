import car from "../assets/img/image-1.png";
import {
  GroupOutlined,
  SettingsOutlined,
  CalendarTodayOutlined,
} from "@material-ui/icons";

const DetailsCard = () => {
  return (
    <div className="details-card">
      <div className="card w-75">
        <div className="card-body mb-4 p-4">
          <div className="image d-flex justify-content-center mt-4">
            <img src={car} alt="Mobil" />
          </div>
          <div className="details-car">
            <label style={{ fontWeight: `400` }}>Nama/Tipe Mobil</label>
            <label className="price fw-bold mb-3" style={{ fontSize: `25px` }}>
              Rp 430.000 / hari
            </label>
            <p className="det-car" style={{ textAlign: `justify` }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="people">
              <label className="me-2">
                <GroupOutlined />
              </label>
              <label htmlFor="">4 orang</label>
            </div>
            <div className="type">
              <label className="me-2">
                <SettingsOutlined />
              </label>
              <label htmlFor="">Manual</label>
            </div>
            <div className="year">
              <label className="me-2">
                <CalendarTodayOutlined />
              </label>
              <label htmlFor="">Tahun 2020</label>
            </div>
            <button className="btn btn-success w-100 mt-3">Pilih Mobil</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
