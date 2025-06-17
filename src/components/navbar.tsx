import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconAward,
  IconBrandGithub,
  IconBrandX,
  IconCertificate,
  IconCode,
  IconExchange,
  IconFileCv,
  IconFileDownload,
  IconHome,
  IconNewSection,
  IconSchool,
  IconTerminal2,
  IconTools,
} from "@tabler/icons-react";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Qualification",
      icon: (
        <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Achivments",
      icon: (
        <IconCertificate className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Skills",
      icon: (
        <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Resume",
      icon: (
        <IconFileDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Social Media",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 w-full h-[100px] z-20 flex items-center justify-center">
  <FloatingDock
    mobileClassName="translate-y-20" // only for demo, remove for production
    items={links}
  />
</div>

  );
}

export default Navbar;
