import NavBar from "./NavBar/NavBar";
import { MdCancel } from "react-icons/md";
const Error = ({
  message = "Ops an error occured",
  text = "could not fetch product data, please try again !!",
  title = "Could not find this page",
}) => {
  return (
    <div className="vw-100 vh-100 text-center ">
      {title && <NavBar />}
      <div className="mt-5">
        <MdCancel
          style={{
            fontSize: "5rem",
            color: "#D2042D",
            marginBottom: "1rem",
          }}
        />
        <h3>{message || title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Error;
