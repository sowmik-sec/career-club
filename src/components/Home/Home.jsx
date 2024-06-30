import Banner from "../Banner/Banner";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategories from "../JobCategories/JobCategories";

function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <JobCategories />
      <FeaturedJobs />
    </div>
  );
}

export default Home;
