import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { Link } from "react-router-dom";

function FeaturedJobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data.splice(0, 4)));
  }, []);
  return (
    <div className="mb-32">
      <div className="text-center mb-10">
        <h2 className="text-5xl">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <FeaturedJob key={job.id} job={job} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to={"applied-jobs"}>
          <ButtonPrimary padding={"px-7 py-4"}>See All Jobs</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedJobs;
