const FormField = ({ label, id, type = "text", value, onChange, rows }) => {
  const props = {
    id,
    name: id,
    className: "p-2.5 rounded-3xl text-black",
    value,
    onChange,
    required: true,
  };

  return (
    <div className="flex flex-col w-[90%] md:w-[500px]">
      <label htmlFor={id} className="mb-2">
        {label}:
      </label>
      {type === "textarea" ? (
        <textarea {...props} placeholder="Your message here" rows={rows || 4} />
      ) : (
        <input {...props} type={type} />
      )}
    </div>
  );
};

export default FormField;
