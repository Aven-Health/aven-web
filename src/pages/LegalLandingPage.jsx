// src/pages/LegalLandingPage.jsx
import React from "react";
import LegalCard from "../components/LegalCard";
import { legalCategories } from "../config/legalConfig";

const LegalLandingPage = () => {
  return (
    <main className="min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        Legal Center
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {legalCategories.map((category) => (
          <LegalCard
            key={category.id}
            title={category.title}
            description={category.description}
            icon={category.icon}
            links={category.links}
          />
        ))}
      </div>
    </main>
  );
};

export default LegalLandingPage;
