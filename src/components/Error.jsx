import NavBar from "./NavBar/NavBar";
const Error = ({ message }) => {
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: "center" }}>{message}</h1>
    </div>
  );
};

export default Error;
