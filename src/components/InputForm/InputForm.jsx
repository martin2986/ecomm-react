import React from "react";
import classes from "./InputForm.module.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const inittails = {
  firstName: "",
  lastName: "",
  email: "",
  city: "",
  postal: "",
  province: "",
  address: "",
};
const formSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "Too Short!").required("Required"),
  lastName: Yup.string().min(2, "Too Short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  city: Yup.string().min(2, "Too Short!").required("Required"),
  postal: Yup.string().max(5, "Invalid Postal!").required("Required"),
  province: Yup.string().min(2, "Too Short!").required("Required"),
  address: Yup.string().min(2, "Too Short!").required("Required"),
});
const InputForm = () => {
  return (
    <Formik
      initialValues={inittails}
      validationSchema={formSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <Form className={classes.form}>
          <div className={classes.formData}>
            <div>
              <Field name="firstName" id="firstName" placeholder="Frist name" />
              {errors.firstName && touched.firstName ? (
                <div className={classes.error}>{errors.firstName}</div>
              ) : null}
            </div>
            <div>
              <Field name="lastName" id="lastName" placeholder="Last name" />
              {errors.lastName && touched.lastName ? (
                <div className={classes.error}>{errors.lastName}</div>
              ) : null}
            </div>
          </div>
          <div className={classes.formData}>
            <div>
              <Field name="email" type="email" id="email" placeholder="Email" />
              {errors.email && touched.email ? (
                <div className={classes.error}>{errors.email}</div>
              ) : null}
            </div>

            <div>
              <Field name="city" id="city" placeholder="City" />
              {errors.city && touched.city ? (
                <div className={classes.error}>{errors.city}</div>
              ) : null}
            </div>
          </div>
          {/* ---- */}
          <div className={classes.formData}>
            <div>
              <Field name="province" id="province" placeholder="Province" />
              {errors.province && touched.province ? (
                <div className={classes.error}>{errors.province}</div>
              ) : null}
            </div>
            <div>
              <Field name="postal" id="postal" placeholder="Postal" />
              {errors.postal && touched.postal ? (
                <div className={classes.error}>{errors.postal}</div>
              ) : null}
            </div>
          </div>
          <div className={classes.formData}>
            <div>
              <Field name="address" id="address" placeholder="Address" />
              {errors.address && touched.address ? (
                <div className={classes.error}>{errors.address}</div>
              ) : null}
            </div>
            <div>
              <Field
                name="address"
                id="address"
                placeholder="Address 2 (optional)"
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default InputForm;
