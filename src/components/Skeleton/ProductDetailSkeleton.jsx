import classes from "./ProductDetailSkeleton.module.scss";
import Skeleton from "react-loading-skeleton";
import { Container } from "react-bootstrap";
const ProductDetailSkeleton = () => {
  return (
    <Container className={classes.detail}>
      <div className="d-flex flex-row gap-1">
        <Skeleton count={4} className={` d-none d-md-block ${classes.left}`} />
        <Skeleton className={classes.leftSkeleton} />
      </div>
      <div className="m-1 ">
        <Skeleton width={140} height={20} />
        <Skeleton width={80} height={20} />
        <Skeleton width={120} height={20} />
        <div className={classes.rightWrapper}>
          <Skeleton count={4} className={classes.right} />

          <Skeleton count={4} className={classes.right} />
        </div>

        <div className=" mt-3">
          <Skeleton count={2} className={classes.btn} />
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailSkeleton;
