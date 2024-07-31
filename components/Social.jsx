import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/gemelendezpr", label: "GitHub profile of Gerardo Melendez" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/gerardomelendezpr/", label: "LinkedIn profile of Gerardo Melendez" },
  { icon: <FaYoutube />, path: "https://www.youtube.com", label: "YouTube channel of Gerardo Melendez" },
  { icon: <FaTwitter />, path: "https://x.com/GeMelendezPR", label: "Twitter profile of Gerardo Melendez" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
