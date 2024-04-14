import ReactPlayer from "react-player";
type PlayerProps = {
  url: string;
  height?: number;
  width?: number;
  controls: boolean;
  autoplay: boolean;
};
const Player: React.FC<PlayerProps> = ({
  url,
  height,
  width,
  controls,
  autoplay,
}) => {
  return (
    <div className=" flex justify-center ">
      <ReactPlayer
        url={url}
        height={height}
        width={width}
        controls={controls}
        volume={0.8}
        muted={false}
        pip={true}
        playing={autoplay}
        
      />
    </div>
  );
};

export default Player;
