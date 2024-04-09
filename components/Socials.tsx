import { socials } from "@/constants";
import { SocialIcon } from "react-social-icons";

function Socials() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
      {socials.map((social) => (
        <div
          key={social.id}
          className="flex flex-col items-center justify-center animate-fade-in-3 cursor-pointer group hover:shadow-outline-gray rounded-[9px] p-5 md:p-10 transition duration-200 ease-out"
        >
          <SocialIcon
            url={social.url}
            fgColor="#FFF"
            bgColor="transparent"
            className="h-16 w-16"
          />
          <div className="text-xs sm:text-sm text-center mt-2">
            <p className="text-[#ADB0B1] group-hover:text-white transition font-medium">
              {social.name}
            </p>
            <p className="text-[#4B4C52]">{social.handle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Socials;