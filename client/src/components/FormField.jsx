import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="">
      <div className="flex items-center gap-2 mb-2  ">
        <label htmlFor={name} className="block text-lg font-semibold">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#EcECF1] px-3 py-3 rounded-[5px] text-black hover:bg-[#736B60]">
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="border bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
