import { Link } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

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
  return (
    <div className="mx-auto space-y-6 border border-indigo-400 p-10 w-full rounded-md">
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
        <p className="mr-8">{location}</p>
        <p>{salary}</p>
      </div>
      <Link>
        <ButtonPrimary padding={"px-4 py-2"}>View Details</ButtonPrimary>
      </Link>
    </div>
  );
}

export default FeaturedJob;
