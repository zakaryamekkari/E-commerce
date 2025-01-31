import { FaFacebook , FaGithub } from "react-icons/fa";


const SocialLinks = () => {
  return (
    <div className="flex items-center text-[20px] gap-2">
      <a href="Facebook"
      rel="https://m.me/zakarya.mekkari"
      target="_blank">
      <FaFacebook/>  
      </a>
      <a href="Facebook"
      rel="https://github.com/zakaryamekkari"
      target="_blank">
      <FaGithub/>  
      </a>
      
    </div>
  );
}

export default SocialLinks;
