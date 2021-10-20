import { ErrorMessage, Field, FieldProps, Form, Formik } from "formik";
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
const TextInputWithLabel: FunctionComponent<{label: string, placeholder: string } & FieldProps> = ({ label, placeholder, field }) => {
  return (
    <Fragment>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={field?.name}>
        {label}
      </label>
      <input {...field} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder={placeholder} />
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
  // This specifies the validation structure required for the form
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
    phoneNumber: Yup.string().min(10).max(12).matches(phoneRegExp, "Phone number is invalid").required("Phone number is required"),
    rcsId: Yup.string().notRequired(),
    rin: Yup.string().min(9).max(9).notRequired()
  });
  const handleSubmit = (values: MemberFormEntries, setSubmitting: (isSumbitting: boolean) => void) => {
    console.log(JSON.stringify(values));
    // We've finished handling the form so we can set the submitting to false
    setSubmitting(false);
  }
  return (
    <div className="w-full lg:w-1/4 sm:w-1/2 rounded-lg shadow-xl bg-gray-300 p-10">
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
                  <ErrorMessage name="firstName" component="span" className="text-red-500 font-extrabold" />
                  <Field name="firstName" component={TextInputWithLabel} placeholder="Dan" label="First Name" required />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <ErrorMessage name="lastName" component="span" className="text-red-500 font-extrabold" />
                  <Field name="lastName" component={TextInputWithLabel} placeholder="Bruce" label="Last Name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <p className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2">
                    Enter Date of Birth
                  </p>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <ErrorMessage name="month" component="span" className="text-red-500 font-extrabold" />
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="month">
                    Month
                  </label>
                  <Field name="month" component={FormDropDown} options={getMonthsForDropdown()} required />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <ErrorMessage name="day" component="span" className="text-red-500 font-extrabold" />
                  <Field name="day" component={TextInputWithLabel} placeholder="15" label="Day" required />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <ErrorMessage name="year" component="span" className="text-red-500 font-extrabold" />
                  <Field name="year" component={TextInputWithLabel} placeholder="1919" label="Year" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <ErrorMessage name="email" component="span" className="text-red-500 font-extrabold" />
                  <Field name="email" component={TextInputWithLabel} placeholder="dbruce@rpiambulance.com" label="Email Address" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <ErrorMessage name="homeStreet" component="span" className="text-red-500 font-extrabold" />
                  <Field name="homeStreet" component={TextInputWithLabel} placeholder="30 Jillson Circle" label="Home Address" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <ErrorMessage name="homeCity" component="span" className="text-red-500 font-extrabold" />
                  <Field name="homeCity" component={TextInputWithLabel} placeholder="Milford" label="Home City" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <ErrorMessage name="homeZip" component="span" className="text-red-500 font-extrabold" />
                  <Field name="homeZip" component={TextInputWithLabel} placeholder="01757" label="Home Zipcode" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <ErrorMessage name="localStreet" component="span" className="text-red-500 font-extrabold" />
                  <Field name="localStreet" component={TextInputWithLabel} placeholder="1999 Burdett Ave. Cary 215" label="Local Address" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <ErrorMessage name="localCity" component="span" className="text-red-500 font-extrabold" />
                  <Field name="localCity" component={TextInputWithLabel} placeholder="Troy" label="Local City" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <ErrorMessage name="localZip" component="span" className="text-red-500 font-extrabold" />
                  <Field name="localZip" component={TextInputWithLabel} placeholder="12180" label="Local Zipcode" />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6 md:mb-0">
                  <ErrorMessage name="phoneNumber" component="span" className="text-red-500 font-extrabold" />
                  <Field name="phoneNumber" component={TextInputWithLabel} placeholder="508-688-5830" label="Phone Number" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <ErrorMessage name="rcsId" component="span" className="text-red-500 font-extrabold" />
                  <Field name="rcsId" component={TextInputWithLabel} placeholder="bruced" label="RCS ID" required />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <ErrorMessage name="rin" component="span" className="text-red-500 font-extrabold" />
                  <Field name="rin" component={TextInputWithLabel} placeholder="661474634" label="RIN" required />
                </div>
              </div>
            </div>
            <div className="text-center py-3 px-8 text-gray-500">
              <button
                className="py-2 px-4 mt-5 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default MemberForm;