import { Col, Row } from "react-bootstrap";
import Card from "../../Card/Card";
const ProductsItems = ({ data }) => {
  return (
    <Row>
      {data?.map((item) => (
        <Col md={4} key={item.id}>
          <Card {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsItems;
