import DetailsCard from "../components/DetailsCard";
import FilterCard from "../components/FilterCard";

const Result = () => {
  return (
    <div>
      <div className="bg-blue">
        <h2>fffff</h2>
      </div>
      <div className="mid-res d-flex justify-content-center">
        <FilterCard />
      </div>

      <div className="res">
        <div className="col">
          <DetailsCard />
        </div>
        <div className="col">
          <DetailsCard />
        </div>
        <div className="col">
          <DetailsCard />
        </div>
      </div>
    </div>
  );
};

export default Result;
