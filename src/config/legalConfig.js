// src/config/legalConfig.js
export const legalCategories = [
  {
    id: "users",
    title: "Users",
    description: "Privacy and agreement documents for platform users.",
    icon: "👤",
    links: [
      { name: "Privacy Policy", route: "/legal/users/privacy-policy" },
      { name: "User Agreement", route: "/legal/users/user-agreement" },
    ],
  },
  {
    id: "medical",
    title: "Medical",
    description: "Legal documents specific to medical services.",
    icon: "🩺",
    links: [
      { name: "Privacy Policy", route: "/legal/medical/privacy-policy" },
      { name: "User Agreement", route: "/legal/medical/user-agreement" },
    ],
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    description: "Legal documents for pharmacy partners and users.",
    icon: "💊",
    links: [
      { name: "Privacy Policy", route: "/legal/pharmacy/privacy-policy" },
      { name: "User Agreement", route: "/legal/pharmacy/user-agreement" },
    ],
  },
];
