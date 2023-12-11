import { Col, Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import classes from "./CardSkeleton.module.scss";
const CardSkeleton = ({ cards }) => {
  return (
    <Row>
      {Array(cards)
        .fill(0)
        .map((_, i) => (
          <Col md={4} className={classes.card} key={i}>
            <Skeleton className={classes.skeleton} />
            <div className="d-flex flex-row justify-content-between align-items-center">
              <Skeleton width={100} height={20} />
              <Skeleton width={40} height={20} />
            </div>
            <Skeleton width={80} height={30} />
          </Col>
        ))}
    </Row>
  );
};

export default CardSkeleton;
