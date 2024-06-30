/* eslint-disable react/prop-types */
function JobCategory({ job }) {
  const { logo, category_name, availability } = job;
  return (
    <div className="p-10 rounded-lg mx-auto">
      <img className="mb-5 w-16 h-16" src={logo} alt="" />
      <h5 className="text-xl">{category_name}</h5>
      <p>{availability}</p>
    </div>
  );
}

export default JobCategory;
