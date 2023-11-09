import classes from "./LoadingIndicator.module.scss";
export default function LoadingIndicator() {
  return (
    <div className={classes.loadingRing}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
