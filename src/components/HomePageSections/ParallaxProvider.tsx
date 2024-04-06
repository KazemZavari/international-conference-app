type ParallaxProviderProps = {
  height: string;
  backgroundImage: string;
  opacity?: string;
  children?: React.ReactNode;
};
const ParallaxProvider: React.FC<ParallaxProviderProps> = ({
  height,
  backgroundImage,
  opacity,
  children,
}) => {
  return (
    <div className={` relative ${height} overflow-hidden bg-white/70 `}>
      <div
        className={`absolute w-[100%]  ${height} bg-fixed bg-center bg-no-repeat
                 text-white ${opacity} bg-cover text-center ${backgroundImage} `}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxProvider;
