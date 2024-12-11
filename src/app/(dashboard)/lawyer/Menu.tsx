import Link from "next/link";
import {
  Briefcase,
  Scale,
  User,
  LogOut,
  BookOpen,
  ClipboardList,
  FileText,
} from "lucide-react";

const menuItems = [
  {
    items: [
      {
        icon: <Briefcase size={20} />, 
        label: "Home",
        href: "/lawyer",
      },
      {
        icon: <Scale size={20} />, 
        label: "Doc AI",
        href: "/lawyer/docai",
      },
      {
        icon: <ClipboardList size={20} />, 
        label: "Legal Temps",
        href: "/lawyer/legaltemps",
      },
      {
        icon: <BookOpen size={20} />, 
        label: "Intelli Research",
        href: "/lawyer/intelliresearch",
      },
      {
        icon: <FileText size={20} />, 
        label: "Advocate Diary",
        href: "/lawyer/advocatediary",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: <User size={20} />, 
        label: "Profile",
        href: "/profile",
      },
      {
        icon: <LogOut size={20} />, 
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section, index) => (
        <div className="flex flex-col gap-2" key={index}>
          {section.title && (
            <span className="hidden lg:block text-gray-400 font-light my-4">
              {section.title}
            </span>
          )}
          {section.items.map((item, subIndex) => (
            <Link
              href={item.href}
              key={subIndex}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-[#D4AF37]"
            >
              {/* Render the icon */}
              <span className="text-gray-500">{item.icon}</span>
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
