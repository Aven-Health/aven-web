import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import LegalCard from "../../components/LegalCard";

const PharmacyPrivacyPolicy = () => {
  const sections = [
    {
      heading: "1. Introduction / Scope",
      content: [
        "This Health Stores Privacy Policy (“Policy”) explains how Aven Health collects, processes, stores, shares, and protects information relating to licensed health stores that use the Aven Health Platform. It applies to all registered Health Stores and covers account management, security, data sharing, and compliance obligations.",
        "This Policy applies specifically to entities that register and operate on the Platform as vendors of healthcare products or pharmaceutical services, including the processing of personal data associated with orders, prescriptions, communications, and payments",
        "The purpose of this Policy is to:",
        [
          "Ensure transparency regarding how business and operational data is handled",
          "Clarify responsibilities concerning patient and prescription data processed through the Platform",
          "Define the legal relationship between Aven Health and participating health stores",
          "Ensure compliance with applicable data protection and healthcare regulations, including the Kenya Data Protection Act, 2019, pharmacy regulations, and related healthcare laws",
        ],
        "This Policy should be read together with the Health Stores Agreement & Terms and any applicable Data Processing Addendum",
      ],
    },

    {
      subheading: "1.2 Applicability",
      content: [
        "This Policy applies to all licensed health-related vendors registered on the Aven Health Platform, including but not limited to:",
        [
          "Licensed pharmacies",
          "Chemists",
          "Clinics",
          "Hospitals",
          "Medical Supply Vendors",
          "Medical Equipment Distributors",
          "Health Product Suppliers",
        ],
        "To be eligible to operate on the Platform, all health stores must:",
        [
          "Hold valid and current professional or commercial licenses issued by the appropriate regulatory authority",
          "Maintain compliance with pharmaceutical, medical, and commercial regulations applicable within their jurisdiction",
          "Provide accurate and verifiable documentation during onboarding and upon request",
        ],
        "Unlicensed entities or individuals are strictly prohibited from listing, dispensing, or supplying medical or pharmaceutical products through the Platform",
      ],
    },

    {
      subheading: "1.3 Scope of Data Processed",
      content: [
        "This Policy governs the processing of data in connection with health store use of the Platform, including but not limited to:",

        {
          minorSubheading: "Orders",
          content: [
            "Customer order details",
            "Product selections",
            "Delivery instructions and fulfillment data",
            "Order history and transaction logs",
          ],
        },
        {
          minorSubheading: "Prescription Uploads",
          content: [
            "Digital prescription images or documents",
            "Prescription validation status",
            "Prescriber details where applicable",
            "Associated medication dispensing records",
          ],
        },
        {
          minorSubheading: "Communications",
          content: [
            "Messages between health stores and customers",
            "Platform-based communication logs related to order clarification, prescription verification, or delivery coordination",
            "Customer support communications involving the store",
          ],
        },
        {
          minorSubheading: "Payments",
        content: [
          "Payment confirmations",
          "Payout details",
          "Transaction identifiers",
          "Refund and chargeback records",
            "Business-related data of the health store",
            'Personal data of customers processed by the store through the Platform.'
          ],
        },
      ],
    },
  {
  subheading: "1.4 Clarification of Roles",
  content: [
    {
      minorSubheading: "1.4.1 Aven Health as Platform Operator",
      content: [
        "Aven Health operates as a digital marketplace and technology platform that facilitates:",
        [
          "Order placement",
          "Prescription transmission",
          "Payment processing",
          "Communication between customers and licensed health stores",
        ],
        "Aven Health does not operate as a pharmacy, clinic, hospital, or medical supplier, and does not dispense medications or medical products.",
        "Aven Health provides the infrastructure that enables health stores to transact with customers securely and in compliance with regulatory standards."
      ]
    },
    {
      minorSubheading: "1.4.2 Health Store as Independent Vendor",
      content: [
        "Each health store operates as an independent vendor and is solely responsible for:",
        [
          "Validating prescriptions",
          "Dispensing medications",
          "Ensuring regulatory compliance",
          "Product quality and authenticity",
          "Safe packaging, storage, and fulfillment",
          "Compliance with pharmacy, medical, and consumer protection laws"
        ],
        "Nothing in this Policy creates a partnership, employment, agency, or joint venture relationship between Aven Health and any health store."
      ]
    },
    {
      minorSubheading: "1.4.3 Data Controller and Data Processor Relationships",
      content: [
        "Depending on the context of processing:",
        [
          "Aven Health may act as a Data Controller for platform-related data, including account management, analytics, fraud prevention, and compliance monitoring.",
          "Aven Health may act as a Data Processor where it processes customer or prescription data strictly on behalf of the health store for order facilitation.",
          "Health stores act as independent Data Controllers with respect to patient data they process for dispensing, prescription validation, recordkeeping, and regulatory compliance.",
          "Each party is responsible for complying with applicable data protection laws in relation to the data it controls."
        ],
        "Health stores are strictly prohibited from using customer or prescription data obtained through the Platform for:",
        [
          "Unauthorized marketing",
          "Off-platform solicitation",
          "Sale or transfer to third parties",
          "Any purpose not directly related to lawful order fulfillment"
        ]
      ]
    }
  ]
},


{
  heading: "2. Definitions",
  content: [
    "For purposes of this Health Stores Privacy Policy, the following terms shall have the meanings set out below:",

    {
      subheading: "2.1 Personal Data",
      content: [
        `"Personal Data" means any information relating to an identified or identifiable natural person ("Data Subject").`,
        "An identifiable person is one who can be identified, directly or indirectly, by reference to:",
        [
          "Name",
          "Identification number",
          "Contact information (email, phone number)",
          "Location data",
          "Online identifiers",
          "Order history",
          "Any other information specific to the physical, physiological, mental, economic, cultural, or social identity of that person"
        ],
        "In the context of health stores, Personal Data includes customer details associated with orders, communications, and transactions conducted through the Platform."
      ]
    },

    {
      subheading: "2.2 Sensitive Personal Data",
      content: [
        `"Sensitive Personal Data" refers to Personal Data that requires enhanced protection due to its nature and potential impact on the individual if disclosed.`,
        "This includes, but is not limited to:",
        [
          "Health-related information",
          "Medical conditions",
          "Prescription records",
          "Biometric data",
          "Government-issued identification numbers",
          "Financial account information",
          "Any other category designated as sensitive under applicable data protection laws, including the Kenya Data Protection Act, 2019"
        ],
        "Sensitive Personal Data is subject to stricter handling, storage, and security requirements."
      ]
    },
    {
  subheading: "2.3 Health Data",
  content: [
    `"Health Data" means any Personal Data relating to the physical or mental health condition of a customer, including:`,
    {
      minorSubheading: "Examples of Health Data",
      content: [
        "Diagnoses",
        "Symptoms",
        "Treatment plans",
        "Medications",
        "Clinical notes (where applicable)",
        "Health-related communications",
        "Prescription information"
      ]
    },
    "Health Data is considered a form of Sensitive Personal Data and must be processed strictly for lawful and legitimate healthcare purposes."
  ]
},

{
  subheading: "2.4 Prescription Data",
  content: [
    `"Prescription Data" refers to any digital or physical prescription information transmitted, uploaded, stored, or processed through the Platform.`,
    {
      minorSubheading: "Categories of Prescriptions",
      content: [
        {
          minorMinorSubheading: "User-Created Prescription (Invalid for Dispensing)",
          content: [
            `A “User-Created Prescription” is any prescription document, note, or medication request uploaded or created directly by a customer without issuance by a licensed medical professional.`,
            "User-Created Prescriptions:",
            [
              "Are not valid for dispensing regulated medications",
              "May serve only as informational input for the ordering process",
              "Must not be relied upon by health stores for the lawful dispensing of prescription-only medications",
              "Do not constitute legally recognized prescriptions under applicable pharmaceutical regulations"
            ],
            "Health stores are strictly prohibited from dispensing prescription-only medication based solely on a User-Created Prescription."
          ]
        },
        {
          minorMinorSubheading: "Medical Professional-Created Prescription (Valid for Dispensing)",
          content: [
            `A “Medical Professional-Created Prescription” is a prescription issued by a duly licensed and authorized healthcare professional through:`,
            [
              "The Aven Health Platform",
              "A verifiable external medical provider, where documentation is provided"
            ],
            "Only Medical Professional-Created Prescriptions:",
            [
              "May be relied upon for lawful dispensing of prescription-only medications",
              "Must be validated by the health store in accordance with regulatory requirements",
              "Must comply with applicable pharmaceutical and medical laws"
            ],
            "Health stores are solely responsible for verifying the authenticity, completeness, and legal validity of prescriptions prior to dispensing."
          ]
        }
      ]
    }
  ]
},

{
  subheading: "2.5 Order Data",
  content: [
    `"Order Data" refers to all information associated with a customer’s purchase transaction through the Platform, including:`,
    {
      minorSubheading: "Examples of Order Data",
      content: [
        "Product selection",
        "Quantity",
        "Pricing",
        "Delivery address",
        "Order timestamp",
        "Fulfillment status",
        "Payment confirmation",
        "Refund or cancellation records"
      ]
    },
    "Order Data may include both Personal Data and Sensitive Personal Data depending on the nature of the product ordered."
  ]
},
{
  subheading: "2.6 Data Controller",
  content: [
    `"Data Controller" means the entity that determines the purposes and means of processing Personal Data.`,
    {
      minorSubheading: "Roles within the Platform",
      content: [
        "Aven Health acts as a Data Controller for account management, platform operations, analytics, fraud prevention, and compliance monitoring.",
        "Health stores act as independent Data Controllers for patient and prescription data processed for dispensing, regulatory compliance, and recordkeeping obligations.",
        "Each Data Controller is independently responsible for compliance with applicable data protection laws."
      ]
    }
  ]
},

{
  subheading: "2.7 Data Processor",
  content: [
    `"Data Processor" means an entity that processes Personal Data on behalf of a Data Controller and under its instructions.`,
    {
      minorSubheading: "Operational Contexts",
      content: [
        "Aven Health may act as a Data Processor when facilitating order transmission, prescription forwarding, or communication strictly on behalf of a health store.",
        "Third-party infrastructure providers may act as Data Processors under contractual safeguards.",
        "Data Processors may not use Personal Data for independent purposes outside authorized instructions."
      ]
    }
  ]
},

{
  subheading: "2.8 Third-Party Service Providers",
  content: [
    `"Third-Party Service Providers" refers to external entities engaged by Aven Health or a health store to support operational functions, including but not limited to:`,
    {
      minorSubheading: "Examples of Third-Party Service Providers",
      content: [
        "Payment processors (e.g., Paystack)",
        "Cloud hosting providers",
        "Delivery or logistics partners",
        "Analytics and security monitoring providers",
        "Identity verification services"
      ]
    },
    "All Third-Party Service Providers are required to implement appropriate technical and organizational safeguards to protect Personal Data and must process such data in accordance with applicable data protection laws and contractual agreements."
  ]
}
  ]
},
{
  subheading: "3. Information We Collect from Health Stores",
  content: [
    "This section explains in detail the categories of information that Aven Health collects, verifies, generates, and processes in relation to licensed health stores operating on the platform.",
    "For purposes of this policy, “Health Stores” include, but are not limited to:",
    [
      "Licensed pharmacies",
      "Chemists",
      "Hospitals",
      "Clinics",
      "Medical supply vendors",
      "Health product distributors"
    ],
    "All stores must be lawfully registered and authorized under applicable laws to dispense medication or distribute regulated health products.",
    "Information collected is proportionate, necessary, and directly related to platform integrity, regulatory compliance, payment processing, prescription validation, fraud prevention, and operational transparency.",

    {
      minorSubheading: "3.1 Business Information",
      content: [
        "We collect comprehensive business identity and compliance information before approving any health store for operation on the platform.",
        "This ensures:",
        [
          "Regulatory legitimacy",
          "Consumer safety",
          "Anti-fraud screening",
          "Accountability in pharmaceutical dispensing"
        ],

        {
          minorMinorSubheading: "A. Identification & Registration Data",
          content: [
            "We collect the following legal and structural information:",
            [
              "Legal business name (as registered)",
              "Trading name (if different from registered name)",
              "Owner’s full legal name",
              "Directors or authorized representatives (where applicable)",
              "Business registration number",
              "Certificate of incorporation or registration documents",
              "Tax Identification Number (TIN)",
              "KRA compliance certificate (where applicable)",
              "Business classification (pharmacy, clinic, hospital, supplier, etc.)",
              "Proof of authority of the person creating the account"
            ],
            "Purpose of Collection:",
            [
              "Verify the existence of a lawful business entity",
              "Confirm tax compliance",
              "Prevent impersonation or fraudulent storefronts",
              "Enable contractual enforcement",
              "Ensure only licensed health operators are onboarded",
              "Maintain audit trails for regulatory review"
            ],
            "No store may operate on the platform without successful verification."
          ]
        },

        {
          minorMinorSubheading: "B. Licensing & Regulatory Compliance Documentation",
          content: [
            "Where applicable, we collect:",
            [
              "Pharmacy license number",
              "Pharmacy operating license",
              "Premises license",
              "Regulatory board certifications",
              "Professional regulatory approvals",
              "Controlled substance authorization (if applicable)",
              "Government-issued identification of owner or license holder",
              "Proof of physical premises",
              "Premises photographs",
              "Supporting documentation required by regulatory authorities"
            ],
            "Verification & Monitoring:",
            [
              "Licensing documentation may be manually reviewed by Aven Health compliance officers",
              "Cross-verified with regulatory databases",
              "Re-validated periodically",
              "Suspended upon expiry"
            ],
            "Purpose:",
            [
              "Controlled medicine distribution compliance",
              "Legal defensibility of platform operations",
              "Prevention of unlawful pharmaceutical trade",
              "Public safety protection",
              "Trust and credibility within the marketplace"
            ],
            "Aven Health reserves the right to suspend or terminate stores with expired, falsified, or unverifiable licenses."
          ]
        },

        {
          minorMinorSubheading: "C. Location & Operational Contact Information",
          content: [
            "We collect precise operational data including:",
            [
              "Physical address",
              "Geographic coordinates (latitude and longitude)",
              "Contact phone number",
              "Business email",
              "Customer support contact",
              "Operating hours",
              "Availability days",
              "Delivery coverage zones",
              "Delivery methods offered (pickup, courier, in-house delivery)"
            ],
            "Why Geographic Coordinates Are Collected:",
            [
              "Accurate mapping within the app",
              "Delivery routing optimization",
              "Fraud detection (location mismatches)",
              "Regulatory traceability",
              "Proximity-based search results"
            ],
            "Why Contact Details Are Necessary:",
            [
              "Order coordination",
              "Regulatory communication",
              "Dispute resolution",
              "Emergency escalations",
              "Compliance notifications"
            ]
          ]
        },

        {
          minorMinorSubheading: "D. Financial & Settlement Information",
          content: [
            "To facilitate secure payments, settlements, commissions, and refunds, we collect:",
            [
              "Till number (if applicable)",
              "M-Pesa business number",
              "Bank account number",
              "Bank code",
              "Bank name",
              "Recipient name",
              "Paystack recipient code",
              "Wallet configuration settings",
              "Preferred payout schedule",
              "Currency (default: KES)"
            ],
            "How Financial Data Is Used:",
            [
              "Automated order settlement",
              "Commission deductions",
              "Refund reversals",
              "Payout scheduling",
              "Financial ledger reconciliation",
              "Fraud detection and chargeback handling",
              "Tax reporting compliance"
            ],
            "Sensitive payment details are stored securely and used strictly for authorized payout processing."
          ]
        }

      ]
    },
{
  subheading: "3.2 Account & Operational Data",
  content: [
    "This category includes data generated through the store’s ongoing use of the platform.",

    {
      minorSubheading: "A. Account Credentials & Governance Records",
      content: [
        "We collect and maintain:",
        [
          "Login credentials (secured and encrypted where applicable)",
          "Multi-factor authentication records (if enabled)",
          "Terms and Conditions acceptance status",
          "Privacy Policy acceptance status",
          "Signed agreements",
          "Account approval status",
          "Suspension or restriction history",
          "Administrative review notes",
          "Approval records (including approving administrator)",
          "Update logs (including timestamps and notes)"
        ],
        "Purpose:",
        [
          "Account accountability",
          "Auditability",
          "Traceability of modifications",
          "Contract enforceability",
          "Governance oversight",
          "Dispute defensibility"
        ]
      ]
    },

    {
      minorSubheading: "B. Store Profile & Marketplace Data",
      content: [
        "Health stores create publicly visible marketplace profiles. We collect:",
        [
          "Store biography",
          "Store logo",
          "Profile images",
          "Business description",
          "Product listings",
          "Inventory levels",
          "Pricing details",
          "Prescription requirement flags",
          "Product images",
          "Regulatory notices attached to products",
          "Service availability indicators"
        ],
        "Purpose:",
        [
          "Marketplace transparency",
          "Informed consumer decision-making",
          "Regulatory disclosure",
          "Accurate listing presentation",
          "Search and discovery optimization"
        ]
      ]
    },

    {
      minorSubheading: "C. Transactional & Performance Data",
      content: [
        "We collect data generated through commerce activity, including:",
        [
          "Orders received",
          "Order timestamps",
          "Fulfillment timelines",
          "Delivery confirmations",
          "Dispatch details",
          "Cancellations (user-initiated or store-initiated)",
          "Refund requests",
          "Refund approvals and denials",
          "Refund justifications",
          "Prescription validation logs",
          "Product substitution records",
          "Ratings and reviews",
          "Customer feedback",
          "Dispute records",
          "Chargeback records"
        ],
        "Purpose:",
        [
          "Operational transparency",
          "Fraud monitoring",
          "Performance analytics",
          "Customer dispute resolution",
          "Quality assurance monitoring",
          "Platform safety enforcement"
        ]
      ]
    },

    {
      minorSubheading: "D. Financial Wallet & Ledger Data",
      content: [
        "Each store may be assigned a digital wallet managed within Aven Health. We collect and maintain detailed financial records including:",
        [
          "Pending balance",
          "Available balance",
          "Lifetime earnings",
          "Currency designation",
          "Payout schedule (weekly, bi-weekly, monthly, or per order)",
          "Payout history",
          "Payout references",
          "Settlement dates",
          "Ledger entries (credit, debit, refund, release)",
          "Balance after each transaction",
          "Commission deductions",
          "Platform service fees",
          "Adjustment entries"
        ],
        "Why This Is Necessary:",
        [
          "Transparent accounting",
          "Fair commission calculation",
          "Refund reconciliation",
          "Fraud detection",
          "Financial auditing capability",
          "Legal defensibility in payment disputes"
        ],
        "All ledger entries create immutable transaction records for compliance review."
      ]
    }
  ]
},
{
  subheading: "3.3 Patient-Related Data (Processed by Stores)",
  content: [
    "When fulfilling orders, health stores process certain patient-related information. In this context:",
    [
      "The Health Store acts as a Data Controller regarding dispensing decisions.",
      "Aven Health acts as a Platform Operator and Data Processor for transmission and system management."
    ],

    {
      minorSubheading: "A. Prescription Data",
      content: [
        "The platform recognizes two prescription types:",

        {
          minorMinorSubheading: "1. User-Created Prescriptions (Invalid for Dispensing)",
          content: [
            "These are documents uploaded directly by users.",
            "Characteristics:",
            [
              "Not medically verified",
              "Not issued by a licensed professional",
              "Not legally valid for dispensing regulated medicine",
              "May serve as informational reference only"
            ],
            "Health stores are strictly prohibited from dispensing prescription-only medication based on user-created prescriptions."
          ]
        },

        {
          minorMinorSubheading: "2. Medical Professional-Created Prescriptions (Valid)",
          content: [
            "These prescriptions:",
            [
              "Are issued by verified licensed professionals",
              "Are digitally linked to a professional account",
              "May contain provider identifiers",
              "Are intended for lawful dispensing"
            ],
            "Health stores are responsible for:",
            [
              "Reviewing authenticity",
              "Confirming regulatory compliance",
              "Ensuring medication appropriateness",
              "Rejecting invalid or suspicious prescriptions"
            ],
            "Aven Health does not override professional dispensing obligations."
          ]
        }
      ]
    },

    {
      minorSubheading: "B. Order & Customer Data",
      content: [
        "Stores may access limited patient/customer data including:",
        [
          "Customer full name",
          "Contact phone number",
          "Delivery address",
          "Order notes",
          "Prescription attachments",
          "Prescription validation logs",
          "Order tracking information"
        ],

        "Strict Purpose Limitation:",
        [
          "This data may only be used for:",
          [
            "Order fulfillment",
            "Medication dispensing",
            "Delivery execution",
            "Regulatory compliance",
            "Prescription validation",
            "Direct order-related communication"
          ],
          "It may not be used for:",
          [
            "Marketing outside the platform",
            "Data resale",
            "Unauthorized profiling",
            "Secondary commercial exploitation"
          ]
        ]
      ]
    }
  ]
},
{
  subheading: "3.4 Data Minimization & Purpose Limitation",
  content: [
    "Aven Health adheres to strict data minimization principles. We collect only data that is:",
    [
      "Necessary for regulatory compliance",
      "Required for safe pharmaceutical commerce",
      "Essential for payment processing",
      "Relevant to dispute resolution",
      "Proportionate to platform functionality"
    ],
    "We do not collect excessive or unrelated data.",
    "All processing is conducted for clearly defined, legitimate, and lawful purposes consistent with healthcare marketplace operations."
  ]
}
  ]
},
{
  heading: "4. How We Use Health Store Data",
  content: [
    "Aven Health processes Health Store data exclusively for specific, legitimate, and necessary purposes directly connected to the operation of a regulated digital healthcare marketplace.",
    "All processing activities are conducted in accordance with the principles of:",
    [
      "Lawfulness, fairness, and transparency",
      "Purpose limitation",
      "Data minimization",
      "Accuracy",
      "Storage limitation",
      "Integrity and confidentiality"
    ],
    "Health Store data is never processed for speculative, unrelated, or unauthorized commercial purposes. Each processing activity is linked to a defined operational, contractual, regulatory, or legal requirement."
  ]
},
{
  subheading: "4.1 Account Verification & Onboarding",
  content: [
    {
      minorSubheading: "Data Used",
      content: [
        "Business registration documentation",
        "Ownership and authorized representative identification",
        "Pharmacy and regulatory licenses",
        "Tax registration information",
        "Physical address and geolocation data",
        "Official contact information"
      ]
    },
    {
      minorSubheading: "Processing Activities",
      content: [
        "Verification of legal existence of the business entity",
        "Authentication of licensing credentials",
        "Validation of regulatory certifications",
        "Identity confirmation of account creator",
        "Cross-checking against regulatory bodies where possible",
        "Review of submitted compliance documentation",
        "Risk assessment and eligibility classification",
        "Documentation archiving for audit purposes"
      ]
    },
    {
      minorSubheading: "Purpose of Processing",
      content: [
        "Confirm that the entity is lawfully authorized to dispense or distribute regulated health products",
        "Prevent impersonation, fraudulent storefronts, and unlawful pharmaceutical activity",
        "Protect patients and platform users from unsafe dispensing practices",
        "Establish a legally enforceable contractual relationship between the Store and Aven Health",
        "Maintain audit-ready onboarding records for regulatory review"
      ]
    },
    "No Health Store account becomes active until compliance verification is satisfactorily completed."
  ]
},
{
  subheading: "4.2 License & Regulatory Validation",
  content: [
    {
      minorSubheading: "Data Used",
      content: [
        "License numbers and expiry dates",
        "Regulatory board certifications",
        "Premises approvals",
        "Controlled substance authorizations (if applicable)",
        "Compliance documentation updates"
      ]
    },
    {
      minorSubheading: "Processing Activities",
      content: [
        "Periodic re-validation of licenses",
        "Monitoring of expiration dates",
        "Automated or manual suspension triggers where documentation lapses",
        "Compliance risk scoring",
        "Internal compliance reviews",
        "Response to regulatory inquiries"
      ]
    },
    {
      minorSubheading: "Purpose of Processing",
      content: [
        "Only properly licensed operators dispense prescription or regulated medicines",
        "Expired or invalid licenses are identified and addressed",
        "The platform remains compliant with pharmaceutical regulations",
        "Public health and patient safety are protected",
        "Aven Health maintains regulatory defensibility"
      ]
    },
    "Where licensing becomes invalid, the platform may restrict operations pending review or corrective action."
  ]
},
{
  subheading: "4.3 Order Routing & Matching",
  content: [
    "Aven Health processes operational and location data to ensure that orders are routed lawfully, efficiently, and in compliance with prescription rules.",
    {
      minorSubheading: "Data Used",
      content: [
        "Geographic coordinates and service coverage",
        "Store availability and operating hours",
        "Inventory data",
        "Prescription requirement settings",
        "Delivery method configurations"
      ]
    },
    {
      minorSubheading: "Processing Activities",
      content: [
        "Matching users with geographically appropriate stores",
        "Filtering stores based on prescription eligibility",
        "Ensuring prescription-only products are routed to authorized vendors",
        "Validating inventory availability prior to order confirmation",
        "Assigning orders based on operational readiness"
      ]
    },
    {
      minorSubheading: "Purpose of Processing",
      content: [
        "Match customers with legally eligible health stores",
        "Prevent unauthorized dispensing",
        "Reduce order failures and delays",
        "Ensure prescription validation requirements are respected",
        "Maintain lawful distribution channels"
      ]
    },
    "Order routing may involve automated decision-making systems, subject to platform governance controls."
  ]
},
{
  subheading: "4.4 Payment Processing & Financial Settlement",
  content: [
    "Health Store financial information is processed to facilitate secure transactions, settlements, commissions, and refunds.",
    {
      minorSubheading: "Data Used",
      content: [
        "Bank account information",
        "M-Pesa details",
        "Till numbers",
        "Wallet identifiers",
        "Transaction records",
        "Ledger entries",
        "Payout schedules",
        "Settlement references"
      ]
    },
    {
      minorSubheading: "Processing Activities",
      content: [
        "Calculation of platform service fees and commissions",
        "Allocation of order proceeds to store wallets",
        "Processing of payouts based on schedule",
        "Recording of credits, debits, refunds, and releases",
        "Reconciliation of financial ledgers",
        "Handling chargebacks and payment disputes",
        "Supporting tax and financial reporting obligations"
      ]
    },
    {
      minorSubheading: "Purpose of Processing",
      content: [
        "Accurate payment to stores for fulfilled orders",
        "Transparent commission deductions",
        "Proper refund management",
        "Traceable financial audit trails",
        "Compliance with financial reporting standards"
      ]
    },
    "Where third-party payment processors are used, processing is conducted under appropriate contractual safeguards."
  ]
},
{
  subheading: "4.5 Fraud Prevention & Risk Monitoring",
  content: [
    "Given the sensitivity of pharmaceutical commerce, Aven Health implements structured monitoring systems to detect suspicious, fraudulent, or unlawful activity.",
    {
      minorSubheading: "Data Used",
      content: [
        "Order frequency and behavioral patterns",
        "Cancellation and refund trends",
        "Geographic inconsistencies",
        "Payment anomalies",
        "Prescription validation records",
        "Customer complaints and dispute history"
      ]
    },
    {
      minorSubheading: "Processing Activities",
      content: [
        "Behavioral analytics",
        "Pattern recognition and anomaly detection",
        "Risk scoring models",
        "Manual compliance investigations",
        "Escalation to internal review teams",
        "Temporary or permanent account restrictions"
      ]
    },
    {
      minorSubheading: "Purpose of Processing",
      content: [
        "Detect fraudulent prescriptions or dispensing attempts",
        "Identify misuse of regulated medicine supply chains",
        "Prevent financial abuse and chargeback fraud",
        "Protect patients from unsafe or unlawful practices",
        "Preserve platform integrity"
      ]
    },
    "Automated monitoring systems may assist in identifying risk indicators; however, enforcement decisions may involve human review."
  ]
},
{
  subheading: "4.6 Analytics & Operational Optimization",
  content: [
    "Aven Health processes operational data to improve marketplace efficiency, reliability, and user safety.",
    {
      minorSubheading: "Data Used",
      content: [
        "Order fulfillment timelines",
        "Delivery performance metrics",
        "Product demand patterns",
        "Inventory availability trends",
        "Refund ratios",
        "Customer ratings and feedback",
        "Revenue and settlement analytics"
      ]
    },
    {
      minorSubheading: "Processing Activities",
      content: [
        "Generation of internal performance dashboards",
        "Analysis of order success rates",
        "Identification of operational bottlenecks",
        "Service reliability assessments",
        "Inventory forecasting insights",
        "Platform feature refinement"
      ]
    },
    {
      minorSubheading: "Purpose of Processing",
      content: [
        "Improve order completion rates",
        "Reduce delays and cancellations",
        "Enhance overall marketplace quality",
        "Identify systemic operational risks",
        "Support long-term platform scalability"
      ]
    },
    "Where possible, analytics are performed using aggregated or pseudonymized data to reduce exposure of identifiable information."
  ]
},
{
  subheading: "4.7 Compliance with Pharmacy & Health Regulations",
  content: [
    "Health Store data is processed to fulfill legal and regulatory obligations under applicable laws, including:",
    {
      minorSubheading: "Data Used",
      content: [
        "Pharmaceutical regulations",
        "Controlled substance laws",
        "Consumer protection laws",
        "Financial compliance regulations",
        "Tax obligations",
        "Data protection legislation"
      ]
    },
    {
      minorSubheading: "Processing Activities",
      content: [
        "Maintenance of dispensing audit trails",
        "Record retention in accordance with statutory requirements",
        "Production of documentation during audits",
        "Cooperation with lawful regulatory requests",
        "Reporting where legally mandated"
      ]
    },
    {
      minorSubheading: "Purpose of Processing",
      content: [
        "Lawful dispensing practices",
        "Accountability within pharmaceutical supply chains",
        "Proper prescription traceability",
        "Compliance with statutory reporting duties",
        "Regulatory defensibility in the event of investigation"
      ]
    },
    "Certain transaction records may be retained for legally mandated retention periods."
  ]
},
{
  subheading: "4.8 Platform Governance & Dispute Resolution",
  content: [
    "Health Store data may be processed to support platform governance and contractual enforcement.",
    {
      minorSubheading: "Data Used",
      content: [
        "Investigation of user complaints",
        "Resolution of order disputes",
        "Enforcement of platform rules",
        "Determination of financial liability",
        "Arbitration or court proceedings",
        "Evidence preservation"
      ]
    },
    {
      minorSubheading: "Purpose of Processing",
      content: [
        "Support fair dispute resolution",
        "Protect both users and stores",
        "Ensure platform rules are enforced consistently",
        "Maintain legal defensibility in contractual matters"
      ]
    }
  ]
},
{
  subheading: "4.9 No Unrelated Commercial Exploitation",
  content: [
    "Aven Health does not process Health Store data for unrelated commercial purposes.",
    {
      minorSubheading: "Prohibited Uses",
      content: [
        "Sell Health Store financial information",
        "Sell prescription data",
        "Use store banking details for marketing purposes",
        "Commercialize licensing documentation",
        "Share compliance documents for unrelated advertising purposes"
      ]
    },
    {
      minorSubheading: "Permitted Uses",
      content: [
        "All Health Store data is processed solely for defined operational, contractual, regulatory, and legal purposes connected to the functioning of the platform."
      ]
    }
  ]
},
{
  heading: "5. Legal Basis for Processing",
  content: [
    "Aven Health processes Health Store data only when there is a clear and lawful basis under applicable data protection and regulatory frameworks, including the Kenya Data Protection Act 2019 and other relevant international standards. Each processing activity is linked to one or more of the following legal bases:"
  ],
  subheading: "5.1 Contractual Necessity",
  content: [
    "Certain data processing is required to fulfill the contractual relationship between Aven Health and Health Stores.",
    {
      example: [
        "Verification of business and regulatory licenses to activate an account",
        "Routing and fulfillment of orders to customers",
        "Calculation of commissions, payouts, and refunds",
        "Delivery coordination and communication with customers"
      ]
    },
    {
      minorSubheading: "Purpose",
      content: [
        "This processing ensures that Aven Health can deliver platform services as agreed with Health Stores, including lawful participation in the marketplace and timely financial settlements."
      ]
    }
  ]
},
{
  subheading: "5.2 Legal Obligations",
  content: [
    "Some Health Store data is processed to comply with statutory or regulatory requirements.",
    {
      example: [
        "Verification and maintenance of pharmacy licenses and certifications",
        "Retention of order and prescription records for auditing purposes",
        "Reporting for tax obligations and regulatory oversight",
        "Cooperation with lawful requests from authorities regarding controlled substances or safety incidents"
      ]
    },
    {
      minorSubheading: "Purpose",
      content: [
        "This ensures compliance with Kenyan pharmaceutical, health, and financial regulations, safeguarding public health and protecting both users and the platform from legal exposure."
      ]
    }
  ]
},
{
  subheading: "5.3 Legitimate Interests",
  content: [
    "Aven Health processes certain Health Store data based on the platform’s legitimate interests, provided these do not override the fundamental rights of the store or its users.",
    {
      example: [
        "Fraud prevention and risk monitoring",
        "Detecting suspicious or abnormal order patterns",
        "Protecting platform integrity, reliability, and user trust",
        "Operational analytics to improve marketplace efficiency",
        "Monitoring compliance with platform rules"
      ]
    },
    {
      minorSubheading: "Purpose",
      content: [
        "This processing protects the platform, its users, and Health Stores from fraudulent, unsafe, or unlawful activity, while maintaining the secure and lawful operation of the marketplace."
      ]
    }
  ]
},
{
  subheading: "5.4 Consent (Where Applicable)",
  content: [
    "In some cases, Health Store data may be processed based on explicit consent.",
    {
      example: [
        "Participation in optional marketing or promotional programs",
        "Voluntary sharing of additional operational or business insights for analytics beyond core marketplace operations"
      ]
    },
    {
      minorSubheading: "Purpose",
      content: [
        "Consent ensures that stores are fully informed and voluntarily agree to specific processing activities not strictly required by contract or law."
      ]
    },
    {
      minorSubheading: "Withdrawal",
      content: [
        "Stores may withdraw consent at any time, without affecting the processing of data necessary for core platform operations or legal compliance."
      ]
    }
  ]
},
{
  heading: "6. Sharing of Health Store Data",
  content: [
    "Aven Health treats all data from Health Stores—including pharmacies, clinics, and health retailers—with the highest standard of confidentiality, integrity, and security. Data is shared strictly on a need-to-know basis to enable lawful Platform operations, ensure compliance with applicable regulations, facilitate legitimate transactions, and maintain the integrity and trustworthiness of the marketplace. All data sharing activities are conducted in accordance with legal obligations, contractual requirements, and industry-standard security protocols."
  ]
},
{
  subheading: "6.1 Sharing with Customers",
  content: [
    "Health Store information may be shared with Platform users (customers) solely to facilitate legitimate transactions and ensure proper service delivery. The types of information shared include:",
    {
      minorSubheading: "Information Shared",
      content: [
        "Legal store name, trade name, and verified business contact details",
        "Product availability, pricing, descriptions, and specifications",
        "Delivery schedules, tracking information, and order confirmations",
        "Prescription validation status for regulated medications"
      ]
    },
    {
      minorSubheading: "Key Protections",
      content: [
        "Sensitive internal data such as banking details, regulatory certifications, or proprietary operational procedures are never disclosed to customers.",
        "All communications with customers are transmitted securely using encryption protocols.",
        "Customer personal data (e.g., name, contact, prescription information) is handled in accordance with the Data Protection Act, 2019, ensuring compliance with patient privacy obligations."
      ]
    },
    {
      example: "A customer orders prescription medication from Pharmacy X. Aven Health shares only the necessary product, pricing, and delivery information to complete the transaction, while banking or internal compliance details remain protected."
    }
  ]
},
{
  subheading: "6.2 Sharing with Payment Processors",
  content: [
    "To enable secure and efficient payment processing, Health Store financial data may be shared with authorized third-party payment processors, including Paystack. This may include:",
    {
      minorSubheading: "Information Shared",
      content: [
        "Bank account information and payment recipient identifiers",
        "M-Pesa or mobile wallet numbers linked to the store account",
        "Transaction references, amounts, and order identifiers"
      ]
    },
    {
      minorSubheading: "Security Measures",
      content: [
        "Full payment card data is never stored by Aven Health.",
        "All financial data transmitted is encrypted in transit and processed according to PCI DSS standards.",
        "Data sharing is strictly limited to processing payments, settlements, refunds, and chargebacks."
      ]
    },
    {
      example: "When a customer pays for a health supplement order, the Platform transmits only the transaction and wallet identifiers necessary for settlement."
    }
  ]
},
{
  subheading: "6.3 Sharing with Logistics and Delivery Partners",
  content: [
    "To ensure accurate and lawful fulfillment, Health Store data may be shared with approved logistics providers. Shared data may include:",
    {
      minorSubheading: "Information Shared",
      content: [
        "Customer names, delivery addresses, and contact numbers",
        "Product details, quantities, and prescription requirements",
        "Delivery instructions, preferred time slots, and routing information"
      ]
    },
    {
      minorSubheading: "Controls and Restrictions",
      content: [
        "Logistics partners are prohibited from accessing store financial or regulatory documents.",
        "Shared data is solely for delivery purposes.",
        "Aven Health continuously audits partner access and monitors compliance."
      ]
    },
    {
      example: "A courier receives delivery instructions for a prescription order but cannot view the pharmacy’s banking or regulatory certificates."
    }
  ]
},
{
  subheading: "6.4 Sharing with Regulatory Authorities",
  content: [
    "Aven Health may disclose Health Store data to government or regulatory bodies when legally required, including:",
    {
      minorSubheading: "Regulatory Bodies",
      content: [
        "Pharmacy licensing authorities (e.g., Pharmacy & Poisons Board)",
        "Ministry of Health and public health inspectors",
        "Tax authorities and financial regulators"
      ]
    },
    {
      minorSubheading: "Information Disclosed",
      content: [
        "Business registration documents and licenses",
        "Prescription and order logs",
        "Inventory and operational records"
      ]
    },
    {
      minorSubheading: "Key Principles",
      content: [
        "Only the minimum necessary information is shared.",
        "All disclosures are secure and documented.",
        "Purpose: regulatory compliance, audits, and investigations into potential violations."
      ]
    },
    {
      example: "During a compliance audit, the Pharmacy & Poisons Board requests prescription fulfillment logs. Aven Health provides only the necessary records, maintaining security and confidentiality."
    }
  ]
},
{
  subheading: "6.5 Sharing with Cloud Hosting Providers and Data Processors",
  content: [
    "Health Store data may be stored or processed by trusted cloud providers or third-party processors contracted by Aven Health. This includes:",
    {
      minorSubheading: "Information Processed",
      content: [
        "Account login credentials",
        "Product catalogs, inventory, and pricing data",
        "Transaction histories and operational metadata"
      ]
    },
    {
      minorSubheading: "Safeguards",
      content: [
        "Data is encrypted both in transit and at rest.",
        "Access is role-based and strictly limited to operational purposes.",
        "Providers are contractually prohibited from independent use or commercial exploitation of the data."
      ]
    },
    {
      example: "Inventory data is stored on a cloud server for operational use, but the cloud provider cannot market or resell the pharmacy’s product information."
    }
  ]
},
{
  subheading: "6.6 Data Minimization, Access Control, and Oversight",
  content: [
    "Aven Health follows the principle of data minimization: only data necessary for the intended purpose is shared.",
    {
      minorSubheading: "Access Controls",
      content: [
        "Sensitive information (financial records, regulatory licenses, prescription validation logs) is restricted to authorized personnel.",
        "End-to-end encryption, administrative auditing, and continuous monitoring protect against unauthorized access.",
        "Regulatory and financial documentation is securely stored, ensuring availability, confidentiality, and integrity."
      ]
    },
    {
      minorSubheading: "Key Measures Include",
      content: [
        "Encryption of sensitive communications and prescription data",
        "Role-based access and administrative logs",
        "Monitoring for unauthorized attempts or breaches"
      ]
    },
    {
      example: "Only authorized staff can verify prescription fulfillment. All access is logged and audited periodically to ensure compliance."
    }
  ]
},
{
  subheading: "6.7 Restrictions on Commercial Use",
  content: [
    {
      content: [
        "Health Store data is never sold, leased, or otherwise exploited outside the operational, regulatory, or financial purposes defined.",
        "Any use of store data beyond Platform operations requires express written consent from Aven Health and the Health Store."
      ]
    }
  ]
},

{
  heading: "7. Patient Data Handling Responsibilities",
  content: [
    "Aven Health requires that all Health Stores, including pharmacies, clinics, and allied health retailers, handle patient data with the highest standards of confidentiality, security, and legal compliance.",
    "This Section outlines the responsibilities of Health Stores regarding access, storage, use, and protection of patient information, as well as independent regulatory obligations."
  ]
},
{
  subheading: "7.1 Access Limitation",
  content: [
    "Health Stores may only access patient data that is necessary to process, fulfill, and deliver orders or services.",
    {
      minorSubheading: "Permissible Data Access Examples",
      content: [
        "Patient name and contact details for order verification and delivery.",
        "Prescription details for validation and dispensing.",
        "Billing or payment information strictly for payment reconciliation."
      ]
    },
    {
      content: [
        "Accessing patient data for marketing, solicitation, or non-operational purposes is strictly prohibited.",
        "Employees or contractors of the Health Store must adhere to role-based access rules, and unauthorized access is considered a breach of both Platform policy and applicable law."
      ]
    },
    {
      example: "A pharmacy employee may view a patient’s prescription to prepare the order but cannot export the patient list for promotional campaigns."
    }
  ]
},
{
  subheading: "7.2 Encryption and Secure Storage",
  content: [
    "All patient data accessed or stored by the Health Store must be secured using industry-standard encryption, both in transit and at rest.",
    {
      content: [
        "Sensitive data, including prescription images, medical instructions, or patient identifiers, must be stored in secure, access-controlled systems.",
        "Physical copies of prescription documents must be stored in locked, secure areas with restricted access.",
        "Periodic security audits must be conducted to ensure ongoing compliance with data protection standards, including the Data Protection Act, 2019 (Kenya)."
      ]
    },
    {
      example: "Prescription orders received via Aven Health are encrypted in the system. When downloaded for fulfillment, the pharmacy ensures the data is stored on a secure, password-protected device accessible only to authorized personnel."
    }
  ]
},
{
  subheading: "7.3 Restriction on Use Outside Order Fulfillment",
  content: [
    "Patient data must not be used for any purpose unrelated to order fulfillment, such as marketing campaigns, product promotion, or sharing with third parties outside the Platform.",
    {
      content: [
        "Any operational reporting or analytics performed on patient data must de-identify personal information to protect privacy.",
        "Violations of this rule may result in immediate suspension of the Health Store account, legal action, or regulatory penalties."
      ]
    },
    {
      example: "Patient purchase history can be aggregated for stock planning but cannot be used to directly send promotional messages or shared with external advertisers."
    }
  ]
},
{
  subheading: "7.4 Prohibition on Marketing Misuse",
  content: [
    "Health Stores may not send unsolicited communications to patients based on personal health or prescription data.",
    {
      content: [
        "Targeted marketing campaigns using patient-specific prescription or medical history without explicit consent are strictly forbidden under Kenyan privacy laws.",
        "Aven Health monitors misuse, and violations may trigger penalties, account suspension, or termination, as well as regulatory reporting obligations."
      ]
    },
    {
      example: "A store cannot email all patients who ordered antibiotics to market unrelated supplements without obtaining separate, informed consent."
    }
  ]
},
{
  subheading: "7.5 Independent Compliance Obligations",
  content: [
    "Health Stores are independently responsible for complying with all applicable regulations, including but not limited to:",
    {
      minorSubheading: "Applicable Laws and Regulations",
      content: [
        "Pharmacy and Poisons Act, Cap 244 – for dispensing prescriptions legally.",
        "Data Protection Act, 2019 – for handling personal and health data.",
        "Public health regulations – for proper storage and transport of medications."
      ]
    },
    {
      content: [
        "Stores must maintain proper licenses, certifications, and indemnity where applicable.",
        "Aven Health facilitates secure operations but does not assume responsibility for the professional or legal obligations of the Health Store."
      ]
    },
    {
      example: "A pharmacy must ensure its pharmacist license is valid and that prescriptions are filled according to legal requirements, independent of Aven Health’s platform operations."
    }
  ],
  summary:
    "Health Stores operating on Aven Health must treat patient data as confidential, encrypted, and strictly operational in scope. Access is limited to the minimum necessary for order fulfillment, marketing misuse is prohibited, and compliance with all applicable Kenyan healthcare and privacy laws is the sole responsibility of the Health Store. These measures ensure patient trust, legal compliance, and Platform integrity, while reinforcing that Health Stores retain independent accountability for professional and regulatory duties."
},
{
  heading: "8. Data Retention",
  content: [
    "Aven Health and Health Stores (including pharmacies and allied health retailers) are required to retain certain business, operational, and patient-related records for legal, regulatory, and operational purposes.",
    "This Section outlines retention periods, prescription record requirements, and compliance with applicable tax and healthcare laws."
  ]
},
{
  subheading: "8.1 Business Records Retention",
  content: [
    "Health Stores must maintain operational and transactional records for a period sufficient to meet business, regulatory, and audit requirements.",
    {
      minorSubheading: "Records Include",
      content: [
        "Orders placed and fulfilled through the Platform",
        "Payment and transaction records",
        "Product inventory logs",
        "Communication with patients regarding orders or queries"
      ]
    },
    {
      content: [
        "Recommended retention period: minimum of 5 years, in alignment with common accounting and commercial recordkeeping practices under Kenyan law (Companies Act, Cap 486, and Tax Procedures Act, 2015)."
      ]
    },
    {
      example: "A pharmacy must retain records of all orders and financial transactions for at least 5 years to support potential audits by the Kenya Revenue Authority (KRA) or other regulatory inspections."
    }
  ]
},
{
  subheading: "8.2 Prescription Retention Requirements",
  content: [
    "For all regulated medications and prescriptions, Health Stores must retain records in compliance with the Pharmacy and Poisons Act, Cap 244 and the Kenya Medical Practitioners and Dentists Act, Cap 253, where applicable.",
    {
      minorSubheading: "Prescription Records Should Include",
      content: [
        "Patient identification (as legally permitted)",
        "Prescribing professional’s license and signature",
        "Medication name, dosage, and quantity",
        "Date of prescription and date of dispensing"
      ]
    },
    {
      content: [
        "Retention period: minimum of 5 years, unless otherwise specified by law or regulatory authorities.",
        "Records must be securely stored (electronically or physically) with access limited to authorized personnel only."
      ]
    },
    {
      example: "A patient orders a prescription drug on Aven Health. The pharmacy logs the prescription electronically, retains a scanned copy of the doctor’s authorization, and securely stores this record for 5 years."
    }
  ]
}
  ];

  const links = [
    { name: "View Terms & Conditions", route: "/terms-conditions" },
  ];

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center">
      <LegalCard
        title="HEALTH STORES PRIVACY POLICY"
        icon={<FaShieldAlt className="text-yellow-500" />}
        sections={sections}
        links={links}
      />
    </div>
  );
};

export default PharmacyPrivacyPolicy;