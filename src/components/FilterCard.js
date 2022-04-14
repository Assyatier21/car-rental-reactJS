const FilterCard = () => {
  const date = new Date();
  date.setDate(date.getDate());
  const today = date.toLocaleDateString("en-CA");

  var today2 = new Date(),
    time = today2.getHours() + ":" + today2.getMinutes();
  return (
    <div className="card w-75 shadow-sm">
      <form action="">
        <div className="card-body justify-content-center">
          <div className="col-lg-3">
            <div className="form-group">
              <label className="mb-2">Tipe Driver</label>
              <select className="form-control w-75 type">
                <option>Dengan Sopir</option>
                <option>Tanpa Sopir</option>
              </select>
            </div>
          </div>
          <div className="col-lg-2 me-3">
            <div className="form-group">
              <label className="mb-2">Tanggal</label>
              <input
                type="date"
                defaultValue={today}
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-2 me-3">
            <div className="form-group">
              <label className="mb-2">Waktu</label>
              <input
                type="time"
                defaultValue={time}
                id="today"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-lg-2 me-3">
            <div className="form-group">
              <label className="mb-2">Penumpang</label>
              <input type="number" defaultValue={1} className="form-control" />
            </div>
          </div>
          <div className="col-lg-2 search-button">
            <button className="btn btn-success w-100">Cari Mobil</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterCard;
