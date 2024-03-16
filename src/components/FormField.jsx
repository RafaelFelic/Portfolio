const FormField = ({ label, id, type = 'text', value, onChange, rows }) => {
  const props = {
    id,
    name: id,
    className: 'w-[500px] max-w-md p-2.5 my-1.25 rounded-3xl text-black',
    value,
    onChange,
    required: true,
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2">
        {label}:
      </label>
      {type === 'textarea' ? (
        <textarea {...props} placeholder="Your message here" rows={rows || 4} />
      ) : (
        <input {...props} type={type} />
      )}
    </div>
  );
};

export default FormField;
