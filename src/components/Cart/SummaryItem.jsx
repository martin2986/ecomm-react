import classes from "./SummaryItem.module.scss";

export const SummaryItem = ({ title, totalAmount, totalTitle }) => {
  return (
    <div className={classes.items}>
      {title && <p>{title}</p>}
      {totalTitle && <h4>{totalTitle}</h4>}
      <p>${totalAmount}</p>
    </div>
  );
};
