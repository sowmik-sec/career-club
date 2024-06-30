/* eslint-disable react/prop-types */
function ButtonPrimary({ btnText }) {
  return (
    <button className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-7 py-5 rounded-lg">
      {btnText}
    </button>
  );
}

export default ButtonPrimary;
