import React from "react";
import Link from "next/link";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Footer from "@/components/nestable/Footer";

const Header = ({ config = {} }) => {
  const logotype = config?.content?.logotype || { filename: "" };
  console.log(logotype);
  const navItems = config?.content?.header_navigation || [];
  console.log(config);
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {logotype.filename && (
          <img src={logotype.filename} alt="Logo" className="h-16 w-20" />
        )}

        <nav>
          <ul className="flex space-x-20 m-5">
            {navItems.map((item) => (
              <li key={item._uid} {...storyblokEditable(item)}>
                {item.url?.linktype === "story" ? (
                  <Link
                    href={item.url.cached_url ?? ""}
                    passHref
                    legacyBehavior
                  >
                    <a>{item.name}</a>
                  </Link>
                ) : (
                  <a
                    href={item.url?.cached_url ?? "#"}
                    className="text-gray-800 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name || "Unnamed Link"}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
