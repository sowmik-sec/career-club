import { useLoaderData } from "react-router-dom";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

function AppliedJobs() {
  const jobs = useLoaderData() || [];
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-36">
        <h2>Applied Jobs</h2>
      </div>
      <div className="flex flex-col gap-6 mb-24">
        {jobs.map((job) => (
          <FeaturedJob key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default AppliedJobs;
