import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment, FunctionComponent } from "react";
import { getMonthsForDropdown } from "../utils/commonDropDown";
import FormDropDown from "./formDropDown";
import * as Yup from "yup";
import { SchemaOf } from "yup";


export interface MemberForm {
  title: string;
  shouldCreateNewMember: boolean;
  memberInfo?: any;
}

interface MemberFormEntries {
  firstName: string;
  lastName: string;
  month: string;
  day: string;
  year: string;
  email: string;
  homeStreet?: string;
  homeCity?: string;
  homeZip?: string;
  localStreet?: string;
  localCity?: string;
  localZip?: string;
  phoneNumber: string;
  rcsId?: string;
  rin?: string;
}

// Defined only in this class because this is styled for this specific form and may not scale easily elsewhere
const TextInputWithLabel: FunctionComponent<{ name: string, label: string, placeholder: string }> = ({ name, label, placeholder }) => {
  return (
    <Fragment>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name={name} type="text" placeholder={placeholder} />
    </Fragment>
  )
}

const MemberForm: FunctionComponent<MemberForm> = ({ title, shouldCreateNewMember, memberInfo }) => {
  // Intialize all values to blank strings
  const initialValues: MemberFormEntries = {
    firstName: "",
    lastName: "",
    month: "",
    day: "",
    year: "",
    email: "",
    homeStreet: "",
    homeCity: "",
    homeZip: "",
    localStreet: "",
    localCity: "",
    localZip: "",
    phoneNumber: "",
    rcsId: "",
    rin: ""
  };
  // Phone number regex
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  // This specifies the validation structured required for the form
  const memberFormValidation: SchemaOf<MemberFormEntries> = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    month: Yup.string().required("Month is required"),
    day: Yup.string().required("Day is required"),
    year: Yup.string().required("Year is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    homeStreet: Yup.string().notRequired(),
    homeCity: Yup.string().notRequired(),
    homeZip: Yup.string().notRequired(),
    localStreet: Yup.string().notRequired(),
    localCity: Yup.string().notRequired(),
    localZip: Yup.string().notRequired(),
    phoneNumber: Yup.string().min(10).max(11).matches(phoneRegExp, "Phone number is invalid").required("Phone number is required"),
    rcsId: Yup.string().notRequired(),
    rin: Yup.string().min(9).max(9).notRequired()
  });
  const handleSubmit = (values: MemberFormEntries, setSubmitting: (isSumbitting: boolean) => void) => {
    console.log(JSON.stringify(values));
    // We've finished handling the form so we can set the submitting to false
    setSubmitting(false);
  }
  return (
    <div className="w-1/4 rounded-lg shadow-xl bg-gray-300 p-10">
      <header className=" text-2xl font-extrabold py-4 px-4 text-center">
        {title}
      </header>
      <div>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => handleSubmit(values, setSubmitting)}
          validationSchema={memberFormValidation}
        >
          <Form>
            <div className="py-4 px-4">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <ErrorMessage name="firstName" />
                  <Field name="firstName" as={TextInputWithLabel} placeholder="Dan" label="First Name" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <ErrorMessage name="lastName" />
                  <Field name="lastName" as={TextInputWithLabel} placeholder="Bruce" label="Last Name" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <p className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2">
                    Enter Date of Birth
                  </p>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="month">
                    Month
                  </label>
                  <Field name="month" as={FormDropDown} options={getMonthsForDropdown()} />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <ErrorMessage name="day" />
                  <Field name="day" as={TextInputWithLabel} placeholder="15" label="Day" />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <ErrorMessage name="year" />
                  <Field name="year" as={TextInputWithLabel} placeholder="1919" label="Year" />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <footer className="text-center py-3 px-8 text-gray-500">
        <button
          className="py-2 px-4 mt-5 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600"
        >
          Submit
        </button>
      </footer>
    </div>
  );
};

export default MemberForm;