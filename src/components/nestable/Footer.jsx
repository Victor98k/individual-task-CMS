import React from "react";

const Footer = ({ config }) => {
  const footerItems = config?.content?.footer || [];
  const logotype = config?.content?.footer_image || { filename: "" };

  return (
    <footer className="footer bg-gray-600 m-3 p-6 rounded-lg shadow-md flex items-center">
      <div className="container mx-auto flex flex-wrap">
        {footerItems &&
          footerItems.map((item) => (
            <div
              key={item._uid}
              className="w-full p-4 flex flex-col md:flex-row items-center"
            >
              <div className="w-full md:w-2/3 pr-4">
                <h4 className="footer-heading text-2xl font-bold mb-2">
                  {item.footer_heading}
                </h4>
                <p className="footer-text text-md mb-4">{item.footer_text}</p>
                {item.footer_link && item.footer_link.cached_url && (
                  <a
                    href={item.footer_link.cached_url}
                    className="footer-link text-blue-500 underline"
                  >
                    {item.footer_link_name}
                  </a>
                )}
              </div>
              {item.footer_image && (
                <div className="w-full md:w-1/3 mt-4 md:mt-0">
                  <img
                    src={item.footer_image.filename}
                    alt={item.footer_image.alt}
                    className="footer-image w-full h-auto object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          ))}
      </div>
    </footer>
  );
};

export default Footer;
