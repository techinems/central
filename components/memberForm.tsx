import React, { Fragment, FunctionComponent } from "react";
import { getMonthsForDropdown } from "../utils/commonDropDown";
import FormDropDown from "./formDropDown";


export interface MemberForm {
  title: string;
  shouldCreateNewMember: boolean;
  memberInfo?: any;
}

// Defined only in this class because this is styled for this specific form and may not scale easily elsewhere
const TextInputWithLabel: FunctionComponent<{ id: string, label: string, placeholder: string }> = ({ id, label, placeholder }) => {
  return (
    <Fragment>
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id={id} name={id} type="text" placeholder={placeholder} />
    </Fragment>
  )
}

const MemberForm: FunctionComponent<MemberForm> = ({ title, shouldCreateNewMember, memberInfo }) => {
  return (
    <div className="w-1/4 rounded-lg shadow-xl bg-gray-300 p-10">
      <header className=" text-2xl font-extrabold py-4 px-4 text-center">
        {title}
      </header>
      <div>
        <form>
          <div className="py-4 px-4">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <TextInputWithLabel id="grid-first-name" label="First Name" placeholder="Dan" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <TextInputWithLabel id="grid-last-name" label="Last Name" placeholder="Bruce" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <p className="block uppercase tracking-wide text-gray-700 text-base font-bold mb-2">
                  Enter Date of Birth
                </p>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-dob-month">
                  Month
                </label>
                <FormDropDown id="grid-dob-month" options={getMonthsForDropdown()} />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <TextInputWithLabel id="grid-dob-day" label="Day" placeholder="15" />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <TextInputWithLabel id="grid-dob-year" label="Year" placeholder="1999" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                  City
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                  State
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                  Zip
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
              </div>
            </div>
          </div>
        </form>
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