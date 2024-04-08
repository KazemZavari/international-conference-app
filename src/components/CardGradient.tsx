
const CardGradient: React.FC = () => {
  return (
    <div className="flex flex-row">
      <div
        className="h-[2px] bg-gradient-to-r from-transparent via-pink-400 to-orange-400
       w-full"
      ></div>
      <div className="h-[2px] bg-gradient-to-r from-orange-400 to-transparent via-pink-400 w-full"></div>
    </div>
  );
};

export default CardGradient;
