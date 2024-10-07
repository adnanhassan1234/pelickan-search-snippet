import { useLocation, useNavigate } from "react-router-dom";

function Modal({ status, msg, color }) {
  const navigate = useNavigate();
  let { pathname } = useLocation();
  const statusFromUrl = pathname.split("=")[1];

  const handleNavigation = () => {
    if (status === "Success !") {
      localStorage.clear();
      navigate("/");
    } else {
      if (statusFromUrl === "failed") {
        navigate("/payment");
      } else {
        window.location.reload();
      }
    }
  };

  return (
    <div className="booking__container">
      <div className="booking__container--down">
        <h2 style={{ color: color }}>{status}</h2>
        <p>{msg}</p>
        <p onClick={handleNavigation}>Ok</p>
      </div>
    </div>
  );
}

export default Modal;
