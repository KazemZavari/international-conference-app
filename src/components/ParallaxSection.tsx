type ParallaxSectionProps = {
  height: string;
  backgroundImage: string;
  opacity?: string;
  children: React.ReactNode;
};
const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  height,
  backgroundImage,
  opacity,
  children,
}) => {
  return (
    <div className={` relative ${height} overflow-hidden `}>
      <div
        className={`absolute w-[100%]  ${height} bg-fixed bg-center-top bg-no-repeat
                 text-white ${opacity} bg-cover text-center ${backgroundImage} `}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
