import { useState } from "react";
import Input from "../Input/Input";
import Methods from "./Methods";
const Payment = () => {
  const [types, setTypes] = useState("");

  return (
    <div className="w-100 payment mt-4">
      <h5>Payment</h5>
      <div className="d-flex flex-row gap-1  justify-content-between">
        <Input
          type="radio"
          name="payment"
          title="Online Payment"
          handleChange={(e) => setTypes(e.target.value)}
          value="online"
        />
        <Input
          type="radio"
          name="payment"
          title="Cash on delivery"
          handleChange={(e) => setTypes(e.target.value)}
          value="cash"
        />
        <Input
          type="radio"
          name="payment"
          title="Pos on delivery"
          handleChange={(e) => setTypes(e.target.value)}
          value="pos"
        />
      </div>
      <div className="my-4">{types === "online" && <Methods />}</div>
    </div>
  );
};

export default Payment;
