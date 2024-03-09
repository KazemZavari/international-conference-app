import { SocialIcon } from "react-social-icons";
import { SocialItems } from "../constants/social";
const Social = () => {
  return (
    <div className="mt-10 text-left">
    {SocialItems.map((item) => (
      <SocialIcon
        key={item.network}
        className="scale-[0.7] hover:scale-[0.5] mr-[3rem] duration-500 "
        url={item.href}
        network={item.network}
        target="_blank"
      />
    ))}
  </div>
  )
}

export default Social