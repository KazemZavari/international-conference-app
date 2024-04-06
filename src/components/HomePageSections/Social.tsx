import { SocialIcon } from "react-social-icons";
import { SocialItems } from "../../constants/social";

const Social = () => {
  return (
    <div className="mt-10 md:mt-8 md:mb-5 xs:mb-1 text-left">
      {SocialItems.map((item) => (
        <SocialIcon
          key={item.network}
          className="scale-[0.7] hover:scale-[0.5] mr-[3rem] 2xl:mr-[2rem] md:mr-4 sm:mr-1 duration-500 "
          url={item.href}
          network={item.network}
          target="_blank"
        />
      ))}
    </div>
  );
};

export default Social;
