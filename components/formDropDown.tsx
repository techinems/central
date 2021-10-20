import { FieldProps } from "formik";
import { FunctionComponent } from "react";

export interface FormDropDownProps {
  id: string;
  options: {value: string, label: string}[];
}

const FormDropDown: FunctionComponent<FormDropDownProps & FieldProps> = ({id, options, field}) => {
  const optionElements = options.map(option => {
    return (
      <option key={option.value} value={option.value}> {option.label} </option>
    );
  });
  return (
    <div className="relative">
      <select {...field} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id={id}>
        {optionElements}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div>
    </div>
  );
}

export default FormDropDown;