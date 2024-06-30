/* eslint-disable react/prop-types */
function ButtonPrimary({ padding, children }) {
  return (
    <button
      className={`bg-gradient-to-r from-indigo-400 to-indigo-600 text-white ${padding} rounded-lg`}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
