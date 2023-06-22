import classNames from "classnames";

const Button = ({
  children,
  icon: Icon,
  hideTextOnMobile = false,
  ...props
}) => {
  const buttonClasses = classNames(
    "w-max text-white rounded",
    props.size === "sm" ? "py-1 px-2" : "py-2 px-4",
    !props.color && "bg-white border border-gray-300 text-black",
    {
      "bg-blue-500 hover:bg-blue-700":
        !props.disabled && props.color === "blue",
    },
    { "bg-red-500 hover:bg-red-700": !props.disabled && props.color === "red" },
    {
      "bg-green-500 hover:bg-green-700":
        !props.disabled && props.color === "green",
    },
    {
      "bg-gray-500 hover:bg-gray-700":
        !props.disabled && props.color === "gray",
    },
    {
      "bg-gray-600 hover:bg-gray-800 text-white":
        !props.disabled && props.color === "black",
    },
    { "bg-gray-300 hover:bg-gray-300 text-gray-400": props.disabled },
    Icon && children && "flex items-center space-x-2",
    props.className
  );

  const iconSize = props.size === "sm" ? 18 : 24;

  const textClasses = classNames(
    props.size === "sm" ? "text-sm" : "text-base",
    !props.color && "text-black",
    hideTextOnMobile && "hidden md:block"
  );

  const iconColor = props.disabled ? "gray" : props.color ? "white" : "black";

  return (
    <button
      {...props}
      className={buttonClasses}
      style={{ height: props.size === "sm" ? 34 : 40 }}
    >
      {Icon && <Icon size={iconSize} color={iconColor} data-testid="icon" />}
      <span className={textClasses}>{children}</span>
    </button>
  );
};

export default Button;
