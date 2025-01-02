import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { InputNumber, Button, Select, DatePicker } from "antd";

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
            className={s.select}
            placeholder="Destination"
            value={values.destination}
            onChange={(value) => setFieldValue("destination", value)}
            options={destinations.map((d) => ({
              label: d.label,
              value: d.label,
              key: d.id
            }))}
          ></Select>

          <DatePicker
            className={s.datePicker}
            placeholder="Check in"
            value={values.checkIn}
            onChange={(date) => setFieldValue("checkIn", date)}
          />

          <DatePicker
            className={s.datePicker}
            placeholder="Check out"
            value={values.checkOut}
            onChange={(date) => setFieldValue("checkOut", date)}
          />

          <InputNumber
            className={s.inputNumber}
            placeholder="Adults"
            min={1}
            value={values.adults}
            onChange={(value) => setFieldValue("adults", value)}
          />

          <InputNumber
            className={s.inputNumber}
            placeholder="Children"
            min={0}
            value={values.children}
            onChange={(value) => setFieldValue("children", value)}
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
