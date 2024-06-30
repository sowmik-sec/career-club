import moneyImg from "../../assets/icons/money.png";
import calenderImg from "../../assets/icons/calendar.png";
import phoneImg from "../../assets/icons/phone.png";
import emailImg from "../../assets/icons/email.png";
import locationImg from "../../assets/icons/location2.png";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { useLocation } from "react-router-dom";
/* eslint-disable react/prop-types */
function JobDetails() {
  const location = useLocation();
  const { job } = location.state || {};
  //   console.log("job = ", job);
  const {
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  return (
    <div>
      <div className="flex items-center justify-center h-64">
        <h2 className="text-5xl">Job Details</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between container mx-auto">
        <div className="space-y-8 w-full md:w-7/12">
          <p>
            <span className="font-semibold">Job Description</span>
            {job_description}
          </p>
          <p>
            <span className="font-semibold">Job Responsibility</span>
            {job_responsibility}
          </p>
          <p>
            <span className="font-semibold">Educational Requirements</span>
          </p>
          <p>{educational_requirements}</p>
          <p className="font-semibold">Experiences:</p>
          <p>{experiences}</p>
        </div>
        <div className="p-10 space-y-6">
          <h3 className="text-4xl">Job Details</h3>
          <hr />
          <div className="flex items-center">
            <img className="w-6 h-6 mr-3" src={moneyImg} alt="" />
            <span className="text-xl">Salary: {salary}</span>
          </div>
          <div className="flex items-center">
            <img className="w-6 h-6 mr-3" src={calenderImg} alt="" />
            <span className="text-xl">Job Title: {job_title}</span>
          </div>
          <h6 className="font-semibold text-xl">Contact Information</h6>
          <hr />
          <div className="flex items-center">
            <img className="w-6 h-6 mr-3" src={phoneImg} alt="" />
            <span>Phone: {contact_information.phone}</span>
          </div>
          <div className="flex items-center">
            <img className="w-6 h-6 mr-3" src={emailImg} alt="" />
            <span>Email: {contact_information.email}</span>
          </div>
          <div className="flex items-center">
            <img className="w-6 h-6 mr-3" src={locationImg} alt="" />
            <span>Phone: {contact_information.address}</span>
          </div>
          <ButtonPrimary padding={"w-full py-5"}>Apply Now</ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
