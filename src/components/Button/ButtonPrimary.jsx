/* eslint-disable react/prop-types */
function ButtonPrimary({ children }) {
  return (
    <button className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-7 py-5 rounded-lg">
      {children}
    </button>
  );
}

export default ButtonPrimary;
