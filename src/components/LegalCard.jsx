import React from "react";
import { Link } from "react-router-dom";

const renderContent = (content) => {
  return content.map((item, idx) => {
    if (typeof item === "string") {
      return (
        <p key={idx} className="text-gray-600 dark:text-gray-300">
          {item}
        </p>
      );
    } else if (Array.isArray(item)) {
      return (
        <ol
          key={idx}
          className="list-decimal list-inside text-gray-600 dark:text-gray-300 pl-4"
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
            <h5 className="text-base font-medium text-gray-600 dark:text-gray-400">
              {item.minorSubheading}
            </h5>
          )}

          {item.minorMinorSubheading && (
            <h6 className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-4">
              {item.minorMinorSubheading}
            </h6>
          )}

          {item.content && renderContent(item.content)}

          {item.example && (
            <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h6 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1 uppercase tracking-wide">
                Example
              </h6>

              {Array.isArray(item.example) ? (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                  {item.example.map((ex, exIdx) => (
                    <li key={exIdx}>{ex}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 dark:text-gray-300">
                  {item.example}
                </p>
              )}
            </div>
          )}

          {item.summary && (
            <div className="mt-2 p-3 bg-gray-100 dark:bg-gray-700/40 rounded-lg border-l-4 border-gray-500">
              <h6 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1 uppercase tracking-wide">
                Summary
              </h6>

              {Array.isArray(item.summary) ? (
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                  {item.summary.map((sum, sumIdx) => (
                    <li key={sumIdx}>{sum}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-700 dark:text-gray-300">
                  {item.summary}
                </p>
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
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center mb-4">
        {icon && <span className="text-3xl mr-4">{icon}</span>}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
      </div>

      <div className="space-y-6">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-2">
            {section.heading && (
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {section.heading}
              </h3>
            )}

            {section.subheading && (
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {section.subheading}
              </h4>
            )}

            {section.minorSubheading && (
              <h5 className="text-base font-medium text-gray-600 dark:text-gray-400 ml-4">
                {section.minorSubheading}
              </h5>
            )}

            {section.minorMinorSubheading && (
              <h6 className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-4">
                {section.minorMinorSubheading}
              </h6>
            )}

            {section.content && renderContent(section.content)}

            {section.example && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <h6 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2 uppercase tracking-wide">
                  Example
                </h6>

                {Array.isArray(section.example) ? (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                    {section.example.map((ex, exIdx) => (
                      <li key={exIdx}>{ex}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">
                    {section.example}
                  </p>
                )}
              </div>
            )}

            {section.summary && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700/40 rounded-lg border-l-4 border-gray-500">
                <h6 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2 uppercase tracking-wide">
                  Summary
                </h6>

                {Array.isArray(section.summary) ? (
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                    {section.summary.map((sum, sumIdx) => (
                      <li key={sumIdx}>{sum}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700 dark:text-gray-300">
                    {section.summary}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {links.length > 0 && (
        <div className="mt-6 flex flex-col space-y-2">
          {links.map((link) => (
            <Link
              key={link.route}
              to={link.route}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
});

export default LegalCard;  
;