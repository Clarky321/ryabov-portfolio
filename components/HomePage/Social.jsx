import Link from "next/link";
import { FaGithub, FaTelegram, FaYoutube } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, path: "https://github.com/Clarky321" },
  { icon: <FaTelegram />, path: "" },
  { icon: <FaYoutube />, path: "" },
];

export default function Social({ containerStyles, iconStyles }) {
  return (
    <div className={`flex space-x-4 ${containerStyles}`}>
      {social.map(({ icon, path }, index) => (
        <Link
          key={index}
          href={path}
          className={`${iconStyles} text-xl`}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
}