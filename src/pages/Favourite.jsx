import { useEffect } from "react";
import { Container } from "react-bootstrap";
import LinkButton from "../components/Buttons/LinkButton";

const Favourite = () => {
  useEffect(() => {
    document.title = "Favourite";

    return () => {
      document.title = "Ecomm Store";
    };
  }, []);
  return (
    <Container className="w-100 text-center d-flex flex-column align-items-center ">
      <h2>You seem to be signed out! Login to save favourite</h2>

      <div className="w-25  ">
        <LinkButton to="/" title="Login" />
        <LinkButton to="/" title="Start Shopping" />
      </div>
    </Container>
  );
};

export default Favourite;
