import React from "react";
import { Link } from "react-router-dom";

const renderContent = (content) => {
  return content.map((item, idx) => {
    if (typeof item === "string") {
      return (
        <p key={idx} className="text-gray-300 dark:text-gray-200">
          {item}
        </p>
      );
    } else if (Array.isArray(item)) {
      return (
        <ol
          key={idx}
          className="list-decimal list-inside text-gray-300 dark:text-gray-200 pl-5"
        >
          {item.map((li, liIdx) => (
            <li key={liIdx}>{li}</li>
          ))}
        </ol>
      );
    } else if (typeof item === "object" && item !== null) {
      return (
        <div key={idx} className="ml-4 space-y-2">
          {item.minorSubheading && (
            <h5 className="text-base font-bold text-white">
              {item.minorSubheading}
            </h5>
          )}

          {item.minorMinorSubheading && (
            <h6 className="text-sm font-bold text-white ml-4">
              {item.minorMinorSubheading}
            </h6>
          )}

          {item.content && renderContent(item.content)}
          {item.structuredContent && renderContent(item.structuredContent)}

          {item.example && (
            <div className="mt-2 p-3 bg-accent/20 dark:bg-accent/30 rounded-lg border-l-4 border-accent">
              <h6 className="text-sm font-semibold text-accent mb-1 uppercase tracking-wide">
                Example
              </h6>

              {Array.isArray(item.example) ? (
                <ul className="list-disc list-inside text-white ml-4">
                  {item.example.map((ex, exIdx) => (
                    <li key={exIdx}>{ex}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-white">{item.example}</p>
              )}
            </div>
          )}

          {item.summary && (
            <div className="mt-2 p-3 bg-accent/10 dark:bg-accent/20 rounded-lg border-l-4 border-accent/70">
              <h6 className="text-sm font-semibold text-accent mb-1 uppercase tracking-wide">
                Summary
              </h6>

              {Array.isArray(item.summary) ? (
                <ul className="list-disc list-inside text-accent/80 ml-4">
                  {item.summary.map((sum, sumIdx) => (
                    <li key={sumIdx}>{sum}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-white">{item.summary}</p>
              )}
            </div>
          )}
        </div>
      );
    }

    return null;
  });
};
const LegalCard = React.memo(({ title, sections = [], icon, links = [] }) => {
  return (
    <div className="flex flex-col lg:flex-row scroll-smooth">
      <nav className="hidden lg:block w-64 bg-cardDark border-r border-gray-700 p-6 sticky top-0 h-screen overflow-y-auto">
        <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
        <ul className="space-y-2">
          {sections.map((section, idx) => (
            <li key={idx}>
              {section.heading && (
                <a
                  href={`#section-${idx}`}
                  className="block cursor-pointer font-semibold text-white text-lg mb-1 px-2 py-1 rounded hover:bg-accent/20"
                >
                  {section.heading}
                </a>
              )}
              {section.subheading && (
                <a
                  href={`#section-${idx}`}
                  className="block cursor-pointer font-medium text-accent text-sm ml-4 mb-1 px-2 py-0.5 rounded hover:bg-accent/10"
                >
                  {section.subheading}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex-1 p-6 space-y-6">
        <div className="flex items-center mb-6">
          {icon && <span className="text-3xl mr-4">{icon}</span>}
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>

        {sections.map((section, idx) => (
          <div key={idx} id={`section-${idx}`} className="space-y-3">
            {section.heading && (
              <h3 className="text-xl font-semibold text-white">
                {section.heading}
              </h3>
            )}

            {section.subheading && (
              <h4 className="text-lg font-medium text-accent">
                {section.subheading}
              </h4>
            )}

            {section.minorSubheading && (
              <h5 className="text-base font-bold text-white ml-4">
                {section.minorSubheading}
              </h5>
            )}

            {section.minorMinorSubheading && (
              <h6 className="text-sm font-bold text-white ml-4">
                {section.minorMinorSubheading}
              </h6>
            )}

            {section.content && renderContent(section.content)}
            {section.structuredContent && renderContent(section.structuredContent)}

            {section.example && (
              <div className="mt-4 p-4 bg-accent/20 dark:bg-accent/30 rounded-lg border-l-4 border-accent">
                <h6 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
                  Example
                </h6>
                {Array.isArray(section.example) ? (
                  <ul className="list-disc list-inside text-white ml-4">
                    {section.example.map((ex, exIdx) => (
                      <li key={exIdx}>{ex}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white">{section.example}</p>
                )}
              </div>
            )}

            {section.summary && (
              <div className="mt-4 p-4 bg-accent/10 dark:bg-accent/20 rounded-lg border-l-4 border-accent/70">
                <h6 className="text-sm font-semibold text-accent mb-2 uppercase tracking-wide">
                  Summary
                </h6>
                {Array.isArray(section.summary) ? (
                  <ul className="list-disc list-inside text-accent/80 ml-4">
                    {section.summary.map((sum, sumIdx) => (
                      <li key={sumIdx}>{sum}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white">{section.summary}</p>
                )}
              </div>
            )}
          </div>
        ))}

        {links.length > 0 && (
          <div className="mt-6 flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.route}
                to={link.route}
                className="text-accent hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});

export default LegalCard