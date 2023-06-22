const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1">{label}</label>
      <input
        className="border border-gray-300 px-3 py-2 rounded-md"
        {...props}
      />
    </div>
  );
};

export default Input;
