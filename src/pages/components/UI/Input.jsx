const Input = ({
  label,
  id,
  additionalClasses,
  icon,
  inpClasses = "",
  labelClasses = "",
  ...props
}) => {
  const inpCssClasses = `w-full p-1 font-medium border-2 border-slate-200 outline-none rounded-md focus:border-slate-900 transition-all ${inpClasses}`;
  const labelCssClasses = `block font-medium text-slate-900 mb-2 ${labelClasses} ${
    icon && "flex flex-col items-center"
  }`;

  return (
    <div className={`${additionalClasses ? additionalClasses : ""} mb-4`}>
      <label htmlFor={id} className={labelCssClasses}>
        {icon ? (
          <>
            <span className="inline-block text-center text-4xl">{icon}</span>
            <br />
          </>
        ) : (
          ""
        )}
        {label}
      </label>
      <input
        placeholder={label}
        name={id}
        id={id}
        {...props}
        className={inpCssClasses}
      />
    </div>
  );
};

export default Input;
