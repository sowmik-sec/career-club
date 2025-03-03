import user1 from "../../assets/images/user.png";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

function Banner() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center">
      <div className="space-y-5">
        <h1 className="text-7xl font-extralight">
          One Step <br /> Closer To Your <br />{" "}
          <span className="text-[#7E90FE]">Dream Job</span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the <br /> information
          you need. Its your future. Come find it. <br /> Manage all your job
          application from start to finish.
        </p>
        <ButtonPrimary padding={"px-7 py-5"}>Get Started</ButtonPrimary>
      </div>
      <div>
        <img src={user1} alt="" />
      </div>
    </div>
  );
}

export default Banner;
