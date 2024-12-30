import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputNumber, Button, Select, DatePicker } from "antd";

import s from "./SearchForm.module.css";

const { Option } = Select;

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

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form values:", values);
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className={s.form}>
          <Select
            placeholder="Destination"
            value={values.destination}
            onChange={(value) => setFieldValue("destination", value)}
            className={s.select}
          ></Select>

          <DatePicker
            placeholder="Check in"
            value={values.checkIn}
            onChange={(date) => setFieldValue("checkIn", date)}
            className={s.datePicker}
          />

          <DatePicker
            placeholder="Check out"
            value={values.checkOut}
            onChange={(date) => setFieldValue("checkOut", date)}
            className={s.datePicker}
          />

          <InputNumber
            placeholder="Adults"
            min={1}
            value={values.adults}
            onChange={(value) => setFieldValue("adults", value)}
            className={s.inputNumber}
          />

          <InputNumber
            placeholder="Children"
            min={0}
            value={values.children}
            onChange={(value) => setFieldValue("children", value)}
            className={s.inputNumber}
          />

          <Button type="primary" htmlType="submit" className={s.submitButton}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
