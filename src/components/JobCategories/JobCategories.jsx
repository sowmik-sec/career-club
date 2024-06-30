import { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";

function JobCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="my-32">
      <div className="text-center">
        <h3 className="text-4xl ">Job Category List</h3>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((job) => (
          <JobCategory key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}

export default JobCategories;
