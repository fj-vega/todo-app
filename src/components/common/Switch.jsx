import { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

const Switch = ({ checked, disabled, onChange, ...props }) => {
  const inputId = useMemo(() => uuidv4(), []);

  const containerClasses = classNames(
    "relative flex-shrink-0 inline-block w-10 align-middle transition duration-200 ease-in select-none",
    props.className
  );

  const inputClasses = classNames(
    "absolute block w-6 h-6 bg-white border-4 rounded-full appearance-none cursor-pointer toggle-checkbox left-0",
    checked ? "left-4 border-green-500" : "border-gray-300"
  );

  const labelClasses = classNames(
    "block overflow-hidden h-6 rounded-full cursor-pointer",
    checked ? "bg-green-500" : "bg-gray-300"
  );

  return (
    <div className={containerClasses}>
      <input
        type="checkbox"
        id={inputId}
        className={inputClasses}
        style={{ transition: "left 0.2s ease-out" }}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <label htmlFor={inputId} className={labelClasses}></label>
    </div>
  );
};

export default Switch;
