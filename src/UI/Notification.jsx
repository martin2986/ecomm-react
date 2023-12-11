import classes from "./Notification.module.scss";
import { IoIosClose } from "react-icons/io";

const ErrorNotification = ({
  onHandleClick,
  message = "Can't fetch cart items",
}) => {
  return (
    <div className={classes.notification}>
      <div className={classes.status}></div>
      <p>{message}</p>
      <div>
        <IoIosClose className={classes.icon} onClick={onHandleClick} />
      </div>
    </div>
  );
};

export default ErrorNotification;
