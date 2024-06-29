import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="text-center flex items-center justify-center h-screen">
      <div>
        <h2>Ops...</h2>
        <p>Invalid Url</p>
        <button className="btn-primary btn" onClick={handleGoBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
