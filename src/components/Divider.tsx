type dividerProps = {
  borderText: string;
  borderWidth?: string;
  borderColor?: string;
  textColor?: string;
};

const Divider: React.FunctionComponent<dividerProps> = ({
  borderText,
  borderWidth,
  borderColor,
  textColor,
}) => {
  return (
    <div className={`relative flex py-5 items-center w-[50%] -mt-[10%]`}>
      <div
        className={`flex-grow border-t border-white ${borderColor} border-[.1rem] ${borderWidth}`}
      ></div>
      <span
        className={`flex-shrink mx-4 text-[#f9c80e] ${textColor}  font-bold text-[1.8rem]`}
      >
        {borderText}
      </span>
      <div
        className={`flex-grow border-t border-white ${borderColor} border-[.1rem] ${borderWidth}`}
      ></div>
    </div>
  );
};

export default Divider;
