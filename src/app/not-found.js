import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { StoryblokCMS } from "@/utils/cms";

const NotFound = async () => {
  //   console.log("Config:", config);
  const currentConfig = await StoryblokCMS.getConfig();

  const notFoundText = currentConfig?.content?.notFound_text;
  const notFoundInfo = currentConfig?.content?.notFound_info;
  const notFoundContent = currentConfig?.content?.notFoundContent || [];
  const notFoundLink = currentConfig?.content?.notFoundLink;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">{notFoundText}</h1>
        <p className="text-lg text-gray-600">{notFoundInfo}</p>
        <div className="mt-6">
          {notFoundContent.map((item) => (
            <div key={item._uid} className="mb-4">
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="text-md">{item.text}</p>
              {item.link && item.link.cached_url && (
                <a
                  href={item.link.cached_url}
                  className="text-blue-500 underline"
                >
                  {item.link.cached_url}
                </a>
              )}
            </div>
          ))}
        </div>
        {notFoundLink && notFoundLink.cached_url && (
          <div className="mt-6">
            <a
              href={notFoundLink.cached_url}
              className="text-blue-500 underline"
            >
              Go to Home
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotFound;
