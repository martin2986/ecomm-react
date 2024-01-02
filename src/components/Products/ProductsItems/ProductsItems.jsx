import { Col, Row } from "react-bootstrap";
import Card from "../../Card/Card";
const ProductsItems = ({ data }) => {
  return (
    <Row>
      {data?.map((item) => (
        <Col xs={6} sm={4} lg={3} key={item.id}>
          <Card {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsItems;
