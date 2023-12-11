import Accordion from "react-bootstrap/Accordion";
import "./Methods.scss";
import visa from "../../assets/pngwing.com.png";
import paypal from "../../assets/paypal.png";
function Methods() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className="item">
        <Accordion.Header>
          Credit Card{" "}
          <img
            src={visa}
            alt=""
            style={{ width: "2rem", marginLeft: "1rem" }}
          />
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="item">
        <Accordion.Header>
          Paypal
          <img
            src={paypal}
            alt=""
            style={{ width: "3rem", marginLeft: "1rem" }}
          />
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="item">
        <Accordion.Header>Cash on Delivery</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Methods;
