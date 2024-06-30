/* eslint-disable react/prop-types */
function ButtonPrimary({ onClick = undefined, padding, children }) {
  return (
    <button
      className={`bg-gradient-to-r from-indigo-400 to-indigo-600 text-white ${padding} rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
