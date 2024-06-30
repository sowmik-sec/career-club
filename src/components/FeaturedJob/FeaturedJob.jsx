/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import locationImg from "../../assets/icons/location2.png";
import moneyImg from "../../assets/icons/money.png";

function FeaturedJob({ job }) {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  const curLocation = useLocation();
  const navigate = useNavigate();
  // console.log("location", curLocation);
  const handleJobDetails = (job) => {
    console.log("inside navigate");
    navigate("/job-details", { state: { job } });
  };
  return (
    <div
      className={`mx-auto  border border-indigo-400 p-10 w-full rounded-md ${
        curLocation.pathname === "/" ? "" : "flex items-center justify-between"
      }`}
    >
      <div className="space-y-6">
        <img src={logo} alt="" />
        <h5 className="text-2xl">{job_title}</h5>
        <h6 className="text-xl">{company_name}</h6>
        <div>
          <span className="px-5 py-2 border border-violet-400 rounded-md mr-5">
            {remote_or_onsite}
          </span>
          <span className="px-5 py-2 border border-violet-400 rounded-md">
            {job_type}
          </span>
        </div>
        <div className="flex">
          <img src={locationImg} alt="" />
          <p className="mr-8">{location}</p>
          <img src={moneyImg} alt="" />
          <p>{salary}</p>
        </div>
      </div>
      <div>
        <ButtonPrimary
          onClick={() => handleJobDetails(job)}
          padding={"px-4 py-2 mt-3"}
        >
          View Details
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default FeaturedJob;
