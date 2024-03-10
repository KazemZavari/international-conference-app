type dividerProps = {
  borderText: string;
  borderWidth?: string;
  borderColor?: string;
  textColor?: string;
};

const Divider: React.FC<dividerProps> = ({
  borderText,
  borderWidth,
  borderColor,
  textColor,
}) => {
  return (
    <div
      className={`relative inline-flex mt-[2rem] py-[1.2rem] items-center w-[60%] ${borderWidth} `}
    >
      <div
        className={`flex-grow border-t ${borderColor} border-[.1rem] `}
      ></div>
      <span
        className={`flex-shrink mx-4 text-[#f9c80e] ${textColor} font-bold text-[2.3rem]`}
      >
        {borderText}
      </span>
      <div
        className={`flex-grow border-t ${borderColor} border-[.1rem]`}
      ></div>
    </div>
  );
};

export default Divider;
