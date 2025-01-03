import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputNumber, Button, Select, DatePicker } from "antd";
import PropTypes from "prop-types";

import s from "./SearchForm.module.css";

const validationSchema = Yup.object({
  destination: Yup.string().required("Destination is required"),
  checkIn: Yup.date().required("Check-in date is required"),
  checkOut: Yup.date().required("Check-out date is required"),
  adults: Yup.number()
    .required("Number of adults is required")
    .min(1, "At least 1 adult"),
  children: Yup.number().min(0, "Children must be 0 or more"),
});

const initialValues = {
  destination: "",
  checkIn: null,
  checkOut: null,
  adults: 1,
  children: 0,
};

const SearchForm = ({ onSubmit, destinations }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className={s.form}>
          <div className={s.formField}>
            <Select
              className={`${s.select} ${
                touched.destination && errors.destination ? "error" : ""
              }`}
              placeholder="Destination"
              value={values.destination}
              onChange={(value) => setFieldValue("destination", value)}
              options={destinations.map((d) => ({
                label: d.label,
                value: d.label,
                key: d.id,
              }))}
            />
            {touched.destination && errors.destination && (
              <div className={s.errorMessage}>{errors.destination}</div>
            )}
          </div>

          <div className={s.formField}>
            <DatePicker
              className={`${s.datePicker} ${
                touched.checkIn && errors.checkIn ? "error" : ""
              }`}
              placeholder="Check in"
              value={values.checkIn}
              onChange={(date) => setFieldValue("checkIn", date)}
            />
            {touched.checkIn && errors.checkIn && (
              <div className={s.errorMessage}>{errors.checkIn}</div>
            )}
          </div>

          <div className={s.formField}>
            <DatePicker
              className={`${s.datePicker} ${
                touched.checkOut && errors.checkOut ? "error" : ""
              }`}
              placeholder="Check out"
              value={values.checkOut}
              onChange={(date) => setFieldValue("checkOut", date)}
            />
            {touched.checkOut && errors.checkOut && (
              <div className={s.errorMessage}>{errors.checkOut}</div>
            )}
          </div>

          <div className={s.formField}>
            <InputNumber
              className={`${s.inputNumber} ${
                touched.adults && errors.adults ? "error" : ""
              }`}
              placeholder="Adults"
              min={1}
              value={values.adults}
              onChange={(value) => setFieldValue("adults", value)}
            />
            {touched.adults && errors.adults && (
              <div className={s.errorMessage}>{errors.adults}</div>
            )}
          </div>

          <div className={s.formField}>
            <InputNumber
              className={`${s.inputNumber} ${
                touched.children && errors.children ? "error" : ""
              }`}
              placeholder="Children"
              min={0}
              value={values.children}
              onChange={(value) => setFieldValue("children", value)}
            />
            {touched.children && errors.children && (
              <div className={s.errorMessage}>{errors.children}</div>
            )}
          </div>

          <Button type="primary" htmlType="submit" className={s.submitButton}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchForm;
