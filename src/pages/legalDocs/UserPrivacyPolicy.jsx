import React from "react";
import LegalCard from "../../components/LegalCard";
import { FaShieldAlt } from "react-icons/fa";

const UserPrivacyPolicy = () => {
  const sections = [
    {
      heading: "1. Introduction and Scope",
      content: [
        "Aven Health (“Aven Health,” “we,” “our,” or “us”) is a digital health platform that enables users to participate in health-focused communities, book and attend appointments with licensed healthcare professionals, communicate through secure messaging, and purchase products from verified pharmacies.",
        "This Privacy Policy explains how we collect, use, process, store, disclose, and protect personal data when individuals access or use the Aven Health mobile application, website, and related services (collectively, the “Platform”).",
        "This Policy applies to:",
        [
          "Individuals who create an account on the Platform",
          "Individuals who browse or interact with health communities",
          "Users who book or attend appointments",
          "Users who purchase products through the pharmacy marketplace",
          "Any person whose personal data is processed through the Platform in connection with user activities"
        ],
        "This Privacy Policy governs the handling of personal data, including sensitive personal data such as health-related information, in accordance with applicable data protection and privacy laws, including the Kenya Data Protection Act, 2019, and any other applicable regulations where Aven Health operates.",
        "By accessing or using the Platform, users acknowledge that they have read and understood this Privacy Policy.",
        "If a user does not agree with this Policy, they should discontinue use of the Platform."
      ]
    },
    {
  heading: "2. Definitions",
  content: [
    "For the purposes of this Privacy Policy, the following terms shall have the meanings set out below:",
    {
      subheading: "2.1 Personal Data",
      content: [
        "“Personal Data” means any information relating to an identified or identifiable natural person.",
        "An identifiable person is one who can be identified, directly or indirectly, by reference to an identifier such as a name, identification number, location data, online identifier, contact details, or other factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that person."
      ]
    },
    {
      subheading: "2.2 Sensitive Personal Data",
      content: [
        "“Sensitive Personal Data” means personal data that, due to its nature, requires a higher level of protection. This includes, but is not limited to:",
        [
          "Health or medical information",
          "Biometric data",
          "Genetic data",
          "Information relating to a person’s sexual life",
          "Financial account information",
          "Any other data classified as sensitive under applicable data protection laws"
        ],
        "Sensitive Personal Data is subject to enhanced security and processing safeguards."
      ]
    },
    {
      subheading: "2.3 Health Data",
      content: [
        "“Health Data” means any Personal Data relating to the physical or mental health condition of a user, including information provided during appointments, communications with healthcare professionals, prescription details, symptoms, diagnoses, medical history, or pharmacy purchase records.",
        "For the purposes of this Policy, Health Data constitutes Sensitive Personal Data and is treated with enhanced confidentiality and security protections."
      ]
    },
    {
      subheading: "2.4 Processing",
      content: [
        "“Processing” means any operation or set of operations performed on Personal Data, whether by automated means or otherwise. This includes collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, disclosure, transmission, dissemination, alignment, restriction, erasure, or destruction."
      ]
    },
    {
      subheading: "2.5 Data Controller",
      content: [
        "“Data Controller” means the natural or legal person who determines the purpose and means of processing Personal Data. For purposes of user data collected through the Platform, Aven Health acts as the Data Controller."
      ]
    },
    {
      subheading: "2.6 Data Processor",
      content: [
        "“Data Processor” means a natural or legal person that processes Personal Data on behalf of the Data Controller. This may include cloud hosting providers, payment processors, analytics providers, and other service providers engaged by Aven Health to support the operation of the Platform."
      ]
    },
    {
      subheading: "2.7 Third Parties",
      content: [
        "“Third Parties” means any person or entity other than the user and Aven Health that may receive Personal Data in accordance with this Privacy Policy. This includes licensed healthcare professionals, pharmacies, regulatory authorities, service providers, and other entities lawfully engaged in delivering services through the Platform."
      ]
    }
  ]
},
{
  heading: "3. Information We Collect",
  content: [
    "Aven Health collects and processes Personal Data that is necessary to operate the Platform, facilitate healthcare interactions, enable community engagement, process pharmacy transactions, and ensure security and regulatory compliance.",
    "The categories of information we collect depend on how a user interacts with the Platform.",
    {
      subheading: "3.1 Information Users Provide Directly",
      content: [
        "When creating an account or using the Platform, users may provide the following Personal Data:",
        {
          minorSubheading: "A. Account and Identification Information",
          content: [
            "Full legal name",
            "Email address",
            "Phone number",
            "Gender",
            "Date of birth",
            "Profile photograph (if uploaded)",
            "Username or display name",
            "This information is required to create and manage a user account, verify identity, and facilitate communication."
          ]
        },
        {
          minorSubheading: "B. Profile and Community Information",
          content: [
            "Biographical details",
            "Health interests or preferences",
            "Content posted within communities (including posts, comments, replies, reactions, and shared materials)",
            "Information voluntarily disclosed in public or semi-public areas of the Platform",
            "Users acknowledge that information shared in community spaces may be visible to other users depending on privacy settings and community structure."
          ]
        },
        {
          minorSubheading: "C. Appointment and Consultation Information",
          content: [
            "Preferred healthcare professional",
            "Appointment date and time",
            "Reason for visit",
            "Notes or descriptions of symptoms",
            "Supporting documentation voluntarily uploaded",
            "This information is used to facilitate consultations and coordinate care."
          ]
        },
        {
          minorSubheading: "D. Communications",
          content: [
            "Messages sent to healthcare professionals",
            "Messages sent to other users (where permitted)",
            "Attachments shared within messages",
            "These communications may contain Health Data and other Sensitive Personal Data."
          ]
        },
        {
          minorSubheading: "E. Pharmacy and Delivery Information",
          content: [
            "Delivery address",
            "Contact details for order fulfillment",
            "Product selection and order history",
            "Special delivery instructions (if provided)",
            "This information is required to process and fulfill pharmacy transactions."
          ]
        },
        {
          minorSubheading: "F. Payment Facilitation Information",
          content: [
            "Full name",
            "Email address",
            "Phone number",
            "Transaction amount",
            "Transaction reference details",
            "Users are responsible for ensuring that all information provided is accurate, current, and complete."
          ]
        }
      ]
    },
    {
  subheading: "3.2 Health and Medical Information",
  content: [
    "Due to the nature of the Platform, Aven Health processes Health Data, which constitutes Sensitive Personal Data.",
    "Health Data may include:",
    [
      "Reported symptoms",
      "Medical history (if voluntarily disclosed)",
      "Information discussed during consultations",
      "Prescription details",
      "Pharmacy purchase records",
      "Appointment history",
      "Uploaded medical documents (if provided)",
      "Diagnosis details",
      "Managed condition"
    ],
    "Health Data is processed strictly for healthcare service delivery, pharmacy fulfillment, and compliance with applicable legal obligations."
  ]
},
{
  subheading: "3.2.1 Storage, Access, and Encryption of Health Communications",
  content: [
    "Messages between users and healthcare professionals and other users are protected using end-to-end encryption (E2EE).",
    "The content of end-to-end encrypted messages is not accessible to Aven Health in readable form.",
    "Encrypted messages may be stored in encrypted format to enable secure delivery, synchronization across devices, and service continuity.",
    "Access to non-encrypted health-related information is restricted to authorized personnel subject to confidentiality obligations.",
    "Healthcare professionals using the Platform may independently create and maintain medical records in accordance with their professional, ethical, and legal obligations. Such independent records are controlled by the respective healthcare professional or affiliated medical institution and are not controlled by Aven Health unless explicitly stored within the Platform.",
    "Where consultation summaries or structured medical information are stored within the Platform, such data is protected using appropriate technical and organizational safeguards."
  ]
},
{
  subheading: "3.3 Location Information",
  content: [
    "We collect and process location information for the following purposes:",
    [
      "Identifying pharmacies near the user",
      "Facilitating delivery of pharmacy products",
      "Enabling booking of physical (in-person) appointments",
      "Enhancing service availability based on geographic region"
    ],
    "Location data may include:",
    [
      "GPS-based location data (subject to user permission settings)",
      "IP-based location estimation",
      "Manually entered address information"
    ],
    "Users may control certain location permissions through their device settings. Disabling location services may limit certain Platform functionalities."
  ]
},
{
  subheading: "3.4 Automatically Collected Technical Information",
  content: [
    "When users access or interact with the Platform, certain technical information may be collected automatically to ensure system functionality, security, and performance optimization. This may include:",
    [
      "IP address",
      "Device type, model, and operating system",
      "Unique device identifiers",
      "Application version",
      "Usage analytics and interaction patterns",
      "Log files",
      "Access timestamps",
      "Error reports and crash diagnostics"
    ],
    "If a web-based version of the Platform is available, we may use cookies or similar tracking technologies to:",
    [
      "Maintain session integrity",
      "Improve user experience",
      "Analyze traffic and usage trends",
      "Enhance security"
    ],
    "Users may manage cookie preferences through browser settings, where applicable."
  ]
},
{
  subheading: "3.5 Payment Information",
  content: [
    "Payments made through the Platform are processed by third-party payment service providers, including Paystack.",
    "To facilitate payment transactions, we collect necessary identifying and transaction-related information, including:",
    [
      "Full name",
      "Email address",
      "Phone number",
      "Transaction details and references",
      "Card details"
    ],
    "Aven Health does not store full payment card numbers, CVV codes, or sensitive payment authentication credentials. Payment information is transmitted directly to and processed by the third-party payment provider in accordance with their security, regulatory, and compliance standards.",
    "Users are encouraged to review the privacy policy of the payment processor for detailed information regarding how payment data is handled."
  ]
}  
  ]
},
{
  heading: "4. How We Use the Information",
  content: [
    "Aven Health processes Personal Data in a lawful, transparent, and purpose-specific manner. All information collected from users is used only for the purposes described in this Policy, in compliance with the Kenya Data Protection Act, 2019, and other applicable laws.",
    "The categories of data and their specific uses are outlined below."
  ]
},
{
  subheading: "4.1 Account Creation and Identity Verification",
  content: [
    "Data involved:",
    [
      "Full name",
      "Email address",
      "Date of birth",
      "Gender",
      "Profile photograph"
    ],
    "Purpose of processing:",
    [
      "To create and manage user accounts",
      "To verify user identity and eligibility for the Platform",
      "To authenticate users during login and prevent unauthorized access",
      "To maintain user profile and personalization",
      "To enable communication related to account activity (notifications, confirmations, alerts)"
    ],
    "Lawful basis:",
    [
      "Consent from the user",
      "Performance of a contract (providing the Platform services)",
      "Compliance with legal obligations (identity verification where required)"
    ],
    "Additional notes:",
    [
      "Users are responsible for providing accurate and complete information.",
      "Profile data may be displayed to other users depending on privacy settings."
    ]
  ]
},
{
  subheading: "4.2 Community Engagement and Social Interaction",
  content: [
    "Data involved:",
    [
      "Username/display name",
      "Profile photograph",
      "Posts, comments, replies, and reactions",
      "Health-related content shared voluntarily",
      "Community shared messages"
    ],
    "Purpose of processing:",
    [
      "To enable participation in health-focused communities",
      "To allow users to communicate and interact with other users",
      "To provide personalized community recommendations",
      "To monitor platform activity for security, content moderation, and compliance purposes"
    ],
    "Lawful basis:",
    [
      "Consent from the user",
      "Legitimate interests of Aven Health to maintain a safe and functional Platform",
      "Performance of a contract (providing Platform services)"
    ],
    "Additional notes:",
    [
      "Publicly shared content may be visible to other users according to Platform settings.",
      "Users should avoid sharing sensitive health information in public community areas unless they consent to such visibility."
    ]
  ]
},
{
  subheading: "4.3 Telehealth Appointments and Health Services",
  content: [
    "Data involved:",
    [
      "Health Data (symptoms, medical history, consultation notes)",
      "Appointment booking details (date, time, healthcare professional)",
      "Messages exchanged with healthcare professionals"
    ],
    "Purpose of processing:",
    [
      "To schedule, manage, and conduct consultations with healthcare professionals",
      "To enable secure communication with healthcare professionals",
      "To support healthcare professionals in providing accurate care",
      "To maintain encrypted records of communications for service continuity",
      "To comply with medical, regulatory, and professional record-keeping obligations"
    ],
    "Lawful basis:",
    [
      "Consent from the user",
      "Performance of a contract (booking and receiving healthcare services)",
      "Legal obligation (medical record-keeping and health regulations)"
    ],
    "Additional notes:",
    [
      "Messages are end-to-end encrypted; Aven Health cannot access message content.",
      "Healthcare professionals may independently maintain medical records outside the Platform."
    ]
  ]
},
{
  subheading: "4.4 Pharmacy Services and Product Orders",
  content: [
    "Data involved:",
    [
      "Delivery address and location",
      "Contact details",
      "Order history and product preferences",
      "Transaction data"
    ],
    "Purpose of processing:",
    [
      "To process pharmacy orders and ensure accurate delivery",
      "To identify nearby pharmacies for user convenience",
      "To manage payment processing and refunds",
      "To comply with regulatory requirements for pharmaceutical transactions"
    ],
    "Lawful basis:",
    [
      "Consent from the user",
      "Performance of a contract (processing orders and delivering products)",
      "Compliance with legal obligations (pharmacy regulations)"
    ]
  ]
},
{
  subheading: "4.5 Payment Processing",
  content: [
    "Data involved:",
    [
      "Full name",
      "Email address",
      "Phone number",
      "Transaction details",
      "Card details"
    ],
    "Purpose of processing:",
    [
      "To facilitate secure payments via third-party providers, including Paystack",
      "To verify payment completion",
      "To maintain transaction records for accounting and legal compliance"
    ],
    "Lawful basis:",
    [
      "Consent from the user",
      "Performance of a contract",
      "Legal obligations (financial reporting, anti-fraud measures)"
    ],
    "Additional notes:",
    [
      "Aven Health does not store card numbers or sensitive authentication data.",
      "All payment data is handled in accordance with Paystack’s security and compliance standards."
    ]
  ]
},
{
  subheading: "4.6 Technical, Security, and Analytical Purposes",
  content: [
    "Data involved:",
    [
      "IP address",
      "Device type and operating system",
      "App usage and interaction logs",
      "Crash reports and performance diagnostics"
    ],
    "Purpose of processing:",
    [
      "To maintain, secure, and improve the Platform",
      "To monitor for suspicious activity and prevent fraud",
      "To perform diagnostics and enhance user experience",
      "To comply with legal and regulatory requirements for system integrity"
    ],
    "Lawful basis:",
    [
      "Legitimate interests of Aven Health to ensure security, reliability, and quality of services"
    ]
  ]
},
{
  subheading: "4.7 Location-Based Services",
  content: [
    "Data involved:",
    [
      "GPS-based location (with permission)",
      "Manually provided address information"
    ],
    "Purpose of processing:",
    [
      "To provide accurate pharmacy delivery options",
      "To display nearby healthcare facilities and pharmacies",
      "To facilitate physical appointment scheduling and attendance"
    ],
    "Lawful basis:",
    [
      "Consent from the user",
      "Performance of a contract"
    ]
  ]
},
{
  subheading: "4.8 Recommendation System and Personalization",
  content: [
    "Data involved:",
    [
      "Gender (used only for professional recommendation)",
      "Profile information (interests, previously engaged content)",
      "Thoughts(posts)",
      "Interactions",
      "Communities and Community messages"
    ],
    "Purpose of processing:",
    [
      "To provide personalized recommendations of posts, communities, and content relevant to users’ interests",
      "To suggest healthcare professionals based on gender only, where applicable",
      "To suggest pharmacies or products based on location or previously ordered items"
    ],
    "Key Clarifications:",
    [
      "Professional recommendations are only suggested based on gender and are not automatically assigned or pushed to users. Users retain full freedom to select any professional for appointments.",
      "No health information, medical history, or private messages are used for recommendations."
    ],
    "Lawful basis:",
    [
      "Legitimate interests of Aven Health to enhance user experience and engagement",
      "Consent, where applicable, for processing profile and community data"
    ]
  ]
},
{
  heading: "5. Legal Basis for Processing",
  content: [
    "Aven Health processes Personal Data only when there is a lawful basis for doing so, as required under the Kenya Data Protection Act, 2019, and in alignment with international privacy standards such as the General Data Protection Regulation (GDPR) for global operations.",
    "The legal bases for processing Personal Data on the Platform are detailed below."
  ]
},
{
  subheading: "5.1 User Consent",
  content: [
    {
      minorSubheading: "Definition:",
      content: [
        "Consent is freely given, informed, specific, and unambiguous agreement by the user for Aven Health to process their Personal Data."
      ]
    },
    {
      minorSubheading: "Applicable Data & Use Cases:",
      content: [
        [
          "Health and medical information voluntarily provided for consultations",
          "Content shared in communities, posts, and interactions",
          "Location information used to identify nearby pharmacies or healthcare facilities",
          "Recommendations based on profile information and gender",
          "Marketing communications, newsletters, and promotional messages"
        ]
      ]
    },
    {
      minorSubheading: "Notes:",
      content: [
        "Users may withdraw consent at any time, subject to limitations related to contractual obligations or legal requirements.",
        "Withdrawal of consent will not affect the lawfulness of processing based on consent prior to withdrawal."
      ]
    }
  ]
},
{
  subheading: "5.2 Contractual Necessity",
  content: [
    {
      minorSubheading: "Definition:",
      content: [
        "Processing necessary to perform a contract to which the user is a party."
      ]
    },
    {
      minorSubheading: "Applicable Data & Use Cases:",
      content: [
        [
          "Account creation and management (name, email, phone number, date of birth, gender, profile image)",
          "Telehealth appointment scheduling, management, and follow-up",
          "Processing of pharmacy orders, payments, and delivery coordination",
          "Providing access to Platform features and services"
        ]
      ]
    },
    {
      minorSubheading: "Notes:",
      content: [
        "This legal basis allows processing strictly to fulfill obligations under the service agreement between the user and Aven Health"
      ]
    }
  ]
},
{
  subheading: "5.3 Legal Obligation",
  content: [
    {
      minorSubheading: "Definition:",
      content: [
        "Processing required to comply with a legal or regulatory obligation applicable to Aven Health."
      ]
    },
    {
      minorSubheading: "Applicable Data & Use Cases:",
      content: [
        [
          "Retention of medical records or transaction logs as required by law",
          "Reporting or disclosure to government authorities for legal or regulatory purposes",
          "Compliance with tax, health, and financial regulations in Kenya and other jurisdictions where Aven Health operates"
        ]
      ]
    },
    {
      minorSubheading: "Notes:",
      content: [
        "Users may not opt out of processing required by law."
      ]
    }
  ]
},
{
  subheading: "5.4 Legitimate Interests",
  content: [
    {
      minorSubheading: "Definition:",
      content: [
        "Processing necessary for Aven Health’s legitimate interests, provided these do not override the rights and freedoms of the user."
      ]
    },
    {
      minorSubheading: "Applicable Data & Use Cases:",
      content: [
        [
          "Platform security, fraud detection, and prevention",
          "Technical diagnostics and performance improvement (IP addresses, device logs, crash reports)",
          "Personalized recommendations for posts, communities, and content (excluding sensitive health data)",
          "Enhancing user experience and engagement through anonymized or pseudonymized analysis"
        ]
      ]
    },
    {
      minorSubheading: "Notes:",
      content: [
        "Legitimate interest processing does not include sensitive health data or private messages.",
        "Users have the right to object to processing based on legitimate interests."
      ]
    }
  ]
},
{
  subheading: "5.5 Special Considerations for Sensitive Health Data",
  content: [
    "Health Data is treated as Sensitive Personal Data under Kenyan law and GDPR.",
    "Health Data is processed primarily under user consent, contractual necessity, and where required by legal obligation.",
    "Sensitive Personal Data is never used for automated profiling or recommendation of healthcare professionals except where gender is used for suggestions, as described in Section 4.8."
  ]
},
{
  subheading: "5.6 International Users and Global Compliance",
  content: [
    "For users accessing the Platform outside Kenya, processing is structured to comply with relevant local privacy laws (including GDPR).",
    "Where applicable, consent is obtained explicitly for processing cross-border data transfers.",
    "Users are informed of their rights under applicable local law, including access, correction, deletion, and withdrawal of consent."
  ]
},
{
  heading: "6. How Health Data Is Treated",
  content: [
    "Aven Health recognizes that Health Data and other Sensitive Personal Data are highly confidential. All such data collected through the Platform is processed with enhanced safeguards to protect confidentiality, integrity, and user control."
  ]
},
{
  subheading: "6.1 Classification of Health Data",
  content: [
    "Health Data processed on the Platform includes, but is not limited to:",
    [
      "Prescriptions",
      "Diagnoses",
      "Pharmacy orders",
      "Managed conditions (added by users or healthcare professionals)",
      "Personal goals set by users",
      "Journals and notes",
      "Appointments and consultation records",
      "Messages between users and healthcare professionals"
    ],
    "All Health Data is classified as Sensitive Personal Data under the Kenya Data Protection Act, 2019, and international privacy standards, requiring heightened security measures."
  ]
},
{
  subheading: "6.2 Encryption and Access Controls",
  content: [
    {
      minorSubheading: "A. End-to-End Encryption (E2EE)",
      content: [
        "All chat messages between users and other users are protected using end-to-end encryption.",
        "Messages between users and healthcare professionals are end-to-end encrypted.",
        "Users’ sensitive communications are inaccessible to Aven Health in readable form."
      ]
    },
    {
      minorSubheading: "B. Encrypted Health Records",
      content: [
        "Prescriptions, diagnoses, and pharmacy orders are encrypted at rest.",
        "Managed conditions added by users or permitted healthcare professionals are encrypted and can only be accessed by:",
        [
          "The user who created or owns the data",
          "Healthcare professionals explicitly permitted by the user"
        ],
        "Users’ personal goals and journals are encrypted and accessible only to the user and permitted professionals.",
        "Appointment records are encrypted and visible only to the user and the professional(s) involved in the appointment."
      ]
    },
    {
      minorSubheading: "C. Anonymized and Public Data",
      content: [
        "Users can post content anonymously in community spaces.",
        "Anonymized posts are not linked to identifiable personal or health data."
      ]
    },
    {
      minorSubheading: "D. Storage and Access Control",
      content: [
        "All encrypted Health Data is stored securely on servers with restricted access.",
        "Only authorized personnel, subject to confidentiality obligations and access controls, can access non-encrypted operational data necessary for Platform functionality.",
        "No unauthorized third party can access encrypted Health Data."
      ]
    }
  ]
},
{
  subheading: "6.3 Transparency of Encryption and Plaintext",
  content: [
    {
      minorSubheading: "Chat messages (user ↔ user)",
      content: [
        "Encryption Status: End-to-end encrypted",
        "Who Can Access: Only message participants"
      ]
    },
    {
      minorSubheading: "Chat messages (user ↔ professional)",
      content: [
        "Encryption Status: End-to-end encrypted",
        "Who Can Access: Only user and professional"
      ]
    },
    {
      minorSubheading: "Prescriptions",
      content: [
        "Encryption Status: Encrypted at rest",
        "Who Can Access: User + authorized healthcare professional"
      ]
    },
    {
      minorSubheading: "Diagnoses",
      content: [
        "Encryption Status: Encrypted at rest",
        "Who Can Access: User + authorized healthcare professional"
      ]
    },
    {
      minorSubheading: "Orders / Pharmacy transactions",
      content: [
        "Encryption Status: Encrypted at rest",
        "Who Can Access: User + authorized pharmacy / professional"
      ]
    },
    {
      minorSubheading: "Managed conditions",
      content: [
        "Encryption Status: Encrypted at rest",
        "Who Can Access: User + permitted professional"
      ]
    },
    {
      minorSubheading: "Personal goals / journals",
      content: [
        "Encryption Status: Encrypted at rest",
        "Who Can Access: User + permitted professional"
      ]
    },
    {
      minorSubheading: "Appointments",
      content: [
        "Encryption Status: Encrypted at rest",
        "Who Can Access: User + professional involved"
      ]
    },
    {
      minorSubheading: "Anonymous posts",
      content: [
        "Encryption Status: Public",
        "Who Can Access: Anonymous (no link to personal ID)"
      ]
    }
  ]
},
{
  subheading: "6.4 Data Sharing Limitations",
  content: [
    "Health Data is only shared with selected healthcare professionals or pharmacies as authorized by the user.",
    "No Health Data is sold, rented, or shared with third parties for marketing or profiling purposes.",
    "Sharing of Health Data with external parties is limited to legally required disclosures or compliance obligations."
  ]
},
{
  subheading: "6.5 User Control and Consent",
  content: [
    "Users explicitly control which professionals can access managed conditions, goals, and consultation records.",
    "Users may revoke access to their data for a professional at any time; such revocation is logged and enforced immediately.",
    "Users control their anonymous posting, and content is not linked to their identity unless they choose to reveal it."
  ]
},
{
  subheading: "6.6 Technical and Organizational Safeguards",
  content: [
    "Strong encryption standards are applied to all sensitive data.",
    "Role-based access controls limit who can access Health Data.",
    "Regular audits, monitoring, and security reviews ensure ongoing compliance.",
    "Backups of encrypted data are maintained securely to prevent data loss."
  ]
},

 {
  subheading: "7. Data Sharing & Disclosure",
  content: [
    "Aven Health treats Personal Data and Sensitive Health Data with the highest level of confidentiality. We do not sell, rent, or trade user data. Data is shared only in limited, specific circumstances, as described below.",

    "7.1 Healthcare Professionals (Doctors, Specialists, and Other Medical Professionals)",
    "Health Data and appointment-related information are shared only with healthcare professionals explicitly authorized by the user.",
    "Users control which professionals can access managed conditions, prescriptions, personal goals, journals, or consultation records.",
    "Professionals are legally and ethically liable for the use of data shared with them.",
    "The Platform prevents users from inadvertently sharing screenshots or copying sensitive information, ensuring confidentiality.",

    "7.2 Pharmacies",
    "Pharmacy-related information (orders, prescriptions, and delivery details) is shared only with verified pharmacies necessary to fulfill the transaction.",
    "No health or personal data is disclosed beyond what is required for order fulfillment.",

    "7.3 Payment Processors",
    "Payments on the Platform are processed exclusively through Paystack.",
    "Payment-related data shared with the processor includes:",
    "1. Full name",
    "2. Email address",
    "3. Phone number",
    "4. Transaction details",
    "5. Card details",
    "Aven Health does not store full card numbers, CVV codes, or sensitive authentication data.",
    "Users are encouraged to review Paystack’s privacy policy for details on how payment data is handled.",

    "7.4 Cloud Hosting and Platform Service Providers",
    "Certain technical or operational data (encrypted or anonymized) may be processed on secure cloud servers.",
    "Access is restricted to authorized personnel necessary to maintain the Platform’s operation, backups, and security.",
    "Data stored on cloud servers is encrypted and protected by strong access controls.",

    "7.5 Analytics Providers",
    "Non-identifiable, aggregated, or pseudonymized data may be analyzed to improve Platform performance, detect errors, and optimize user experience.",
    "Such analytics never include unencrypted health data or personal identifiers unless explicitly authorized by the user.",

    "7.6 Legal Authorities",
    "Health or personal data may be disclosed only if required by law, regulation, or court order.",
    "Aven Health will disclose the minimum amount of data necessary to comply with legal obligations.",

    "7.7 Limitations on Sharing",
    "Users are fully responsible for any information they voluntarily share with professionals beyond the Platform.",
    "The Platform has a screenshot prevention feature for sensitive areas to reduce data leakage.",
    "Aven Health does not share any user data for external advertising, marketing, or third-party promotions.",
    "No data is shared with partners for profiling, advertising, or analytics beyond what is listed above."
  ]
},
{
  subheading: "8. International Data Transfers",
  content: [
    "Aven Health is a Kenyan company, but some Personal Data, including Health Data, may be stored or processed on servers located outside Kenya.",

    "8.1 Server Location",
    "The primary servers hosting the Platform and user data are located in Belgium (East-1 region).",
    "These servers are maintained by reputable cloud hosting providers with strong security and compliance certifications.",

    "8.2 Cross-Border Transfers",
    "Data may be transferred internationally to support the operation of the Platform, including encrypted storage, system maintenance, and disaster recovery.",
    "Only the minimum necessary data is transferred, and sensitive Health Data remains encrypted during transit and at rest.",

    "8.3 Safeguards for International Data Transfers",
    "Aven Health implements the following safeguards to protect Personal Data during international transfer:",
    "• Encryption: All Health Data, appointments, prescriptions, journals, managed conditions, goals, and communications are encrypted in transit using industry-standard encryption protocols.",
    "• Access Controls: Only authorized personnel with strict confidentiality obligations have access to operational systems.",
    "• Compliance with Local Laws: Transfers are conducted in accordance with the Kenya Data Protection Act, 2019, and relevant international data protection standards (including GDPR for users outside Kenya).",
    "• Contractual Safeguards: Agreements with cloud hosting providers ensure compliance with security, privacy, and data protection obligations.",

    "8.4 User Awareness",
    "By using the Platform, users acknowledge that their data may be stored or processed outside Kenya, in countries with potentially different privacy regulations.",
    "Users retain the rights to access, correct, or request deletion of their data in accordance with Sections 9 and 10 of this Policy."
  ]
},


{
  heading: "9. Data Retention",
  content: [
    "Aven Health retains Personal Data and Health Data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, enforce agreements, or otherwise as permitted or required by law.",

    {
      subheading: "9.1 Account Information",
      content: [
        "Data included:",
        [
          "Full name, email, phone number, date of birth, gender, profile image",
          "Account login credentials, settings, and preferences"
        ],

        {
          minorSubheading: "Retention period:",
          content: [
            "Account data is retained for the duration of the active account.",
            "If a user deletes their account, Aven Health will retain account metadata (e.g., anonymized identifiers) for up to 12 months for operational, security, and fraud prevention purposes."
          ]
        },
        {
          minorSubheading: "User rights:",
          content: [
            "Users can request account deletion at any time via the Platform or by contacting support.",
            "Upon deletion, all personal identifiers associated with the account are permanently removed, except where retention is legally required."
          ]
        }
      ]
    },

    {
      subheading: "9.2 Health and Medical Data",
      content: [
        "Data included:",
        [
          "Prescriptions, diagnoses, pharmacy orders",
          "Managed conditions, personal goals, journals",
          "Appointment records and consultations",
          "Encrypted messages with healthcare professionals"
        ],

        {
          minorSubheading: "Retention period:",
          content: [
            "Health Data is retained for as long as the user maintains an active account and continues using the Platform.",
            "Following account deletion, Health Data is permanently deleted unless retention is required by law or professional regulations.",
            "Where legal or regulatory obligations mandate retention of medical records (e.g., Kenya Medical Practitioners and Dentists Board requirements), Aven Health may retain encrypted records for the legally required period."
          ]
        },
        {
          minorSubheading: "User rights:",
          content: [
            "Users may request deletion of Health Data that is not legally required to be retained.",
            "Access to deletion requests for regulated medical records is subject to compliance with legal and professional retention requirements."
          ]
        }
      ]
    },

    {
      subheading: "9.3 Transaction and Payment Data",
      content: [
        "Data included:",
        [
          "Payment details, transaction records, invoices, order history"
        ],

        {
          minorSubheading: "Retention period:",
          content: [
            "Payment and transaction data is retained for up to 7 years, or as required by applicable financial and tax regulations."
          ]
        },
        {
          minorSubheading: "User rights:",
          content: [
            "Users may request anonymization or deletion of personal identifiers in transaction records after the legal retention period."
          ]
        }
      ]
    },

    {
      subheading: "9.4 Technical and Analytical Data",
      content: [
        "Data included:",
        [
          "Log files, device identifiers, IP addresses, crash reports, usage analytics"
        ],

        {
          minorSubheading: "Retention period:",
          content: [
            "Technical and analytical data is retained for up to 48 months, unless longer retention is required for security, audit, or legal purposes.",
            "Aggregated or anonymized analytics may be retained indefinitely for improving the Platform."
          ]
        }
      ]
    },

    {
      subheading: "9.5 Legal Compliance",
      content: [
        "All retention periods are subject to applicable laws and regulations in Kenya and other jurisdictions in which Aven Health operates.",
        "Where retention is legally mandated, users’ deletion requests may be limited, and only the minimum required data is retained for compliance purposes."
      ]
    }
  ]
},

{
  subheading: "10. User Rights",
  content: [
    "Aven Health respects the rights of users regarding their Personal Data and Sensitive Health Data. Users may exercise their rights in accordance with the Kenya Data Protection Act, 2019, and where applicable, international privacy regulations such as GDPR.",

    "10.1 Right to Access",
    "Users have the right to request access to any Personal Data and Health Data Aven Health holds about them.",
    "Upon request, Aven Health will provide a copy of the data in a readable format within 30 days, unless additional time is legally required.",
    "Access requests may include:",
    "1. Account information",
    "2. Health and medical records",
    "3. Appointment and consultation history",
    "4. Transaction and payment records",
    "5. Technical or usage data collected",

    "10.2 Right to Correction",
    "Users may request corrections to inaccurate or incomplete Personal Data.",
    "This includes:",
    "1. Account details (name, email, phone number, date of birth, gender)",
    "2. Profile information and preferences",
    "3. Health data provided by the user",
    "Healthcare professionals may also request updates to Health Data they manage, subject to user authorization.",

    "10.3 Right to Deletion (“Right to be Forgotten”)",
    "Users may request deletion of Personal Data and Health Data that is not legally required to be retained.",
    "Upon deletion request:",
    "• Health Data and other sensitive data are permanently removed from Aven Health systems.",
    "• Backup copies are securely destroyed according to retention schedules (Section 9).",
    "Limitations:",
    "Certain Health Data or transaction records may be retained to comply with legal, regulatory, or professional obligations.",
    "Deletion does not affect data required for dispute resolution, fraud prevention, or enforcement of Platform agreements.",

    "10.4 Right to Withdraw Consent",
    "Users can withdraw consent for any processing activity that relies solely on consent (e.g., anonymous posts, health data shared for research if applicable).",
    "Withdrawal of consent will not affect the lawfulness of processing conducted prior to withdrawal.",
    "Consent withdrawal requests can be submitted via the Platform or by contacting support.",

    "10.5 Right to Data Portability",
    "Users have the right to receive their Personal Data in a structured, commonly used, machine-readable format.",
    "Users may request that their data be transferred to another service provider where technically feasible.",
    "Data portability applies to Personal Data that users have provided to the Platform and does not extend to information derived or anonymized by Aven Health.",

    "10.6 Right to Restrict Processing",
    "Users may request the restriction of processing of their Personal Data in certain circumstances, including:",
    "• While contesting accuracy of data",
    "• While challenging the lawfulness of processing",
    "• When data is no longer required for regular processing but cannot be deleted for legal reasons",
    "Restricted data will be securely stored and not further processed, except for storage purposes.",

    "10.7 Right to Object",
    "Users may object to the processing of their Personal Data based on legitimate interests, including profiling or automated recommendations.",
    "Objection requests will be evaluated promptly, and Aven Health will cease processing unless there are compelling legal or contractual grounds to continue.",

    "10.8 Right to Lodge a Complaint with the Regulator",
    "Users have the right to lodge a complaint with the Office of the Data Protection Commissioner (ODPC) in Kenya or other applicable regulatory authorities in their jurisdiction if they believe their rights have been violated.",
    "Contact details for the ODPC:",
    "Website: www.odpc.go.ke",
    "Email: info@odpc.go.ke",
    "Phone: +254 20 2890000",

    "10.9 Exercise of Rights",
    "Users can exercise their rights by:",
    "• Using Platform features (e.g., account settings, privacy controls)",
    "• Contacting Aven Health support directly via email or the in-app support system",
    "Requests will be processed without undue delay and within 30 days, unless an extension is required under law.",

    "10.10 Additional Notes",
    "Requests to exercise rights may require verification of the user’s identity to prevent unauthorized access.",
    "Some rights may be limited in scope due to:",
    "1. Legal obligations (e.g., medical record retention, financial regulations)",
    "2. Platform operational requirements (e.g., backup retention, fraud prevention)"
  ]
},
{
  subheading: "11. Account Deletion & Data Deletion Process",
  content: [
    "Aven Health provides users full control over their accounts and the associated data. Users may request deletion of their account at any time.",

    "11.1 User-Initiated Account Deletion",
    "Users can delete their account through the Platform settings or by contacting Aven Health support.",
    "Upon account deletion:",
    "1. All Personal Data, Health Data, account preferences, messages, journals, goals, managed conditions, and community content linked to the account are permanently deleted from Aven Health systems.",
    "2. Encrypted Health Data, messages, and appointments are removed from active storage.",
    "3. Users’ posts in anonymous mode are retained anonymously if still relevant for community integrity, with no link to the deleted account.",

    "11.2 Data Retained for Legal or Compliance Reasons",
    "Certain minimal information may be retained even after account deletion to comply with legal, regulatory, or operational obligations, including:",
    "1. Medical or health records that are legally required to be retained under healthcare regulations",
    "2. Financial or transaction records required for tax, auditing, or anti-fraud compliance",
    "3. System logs or anonymized metadata necessary to maintain security, prevent fraud, or comply with legal obligations",
    "Any retained data is stored separately from personally identifiable information and is restricted to authorized personnel. It cannot be used to contact or identify the deleted account holder.",

    "11.3 Timeline for Deletion",
    "Account deletion requests are processed promptly.",
    "Personal and health data not subject to legal retention requirements are permanently removed within 30 days.",
    "Data retained for compliance purposes is secured and handled according to retention schedules defined in Section 9 – Data Retention.",

    "11.4 User Rights After Deletion",
    "Users whose accounts are deleted retain the right to request verification of data deletion.",
    "Users may also exercise rights over any remaining data retained for legal compliance, such as requesting anonymization or limited access.",

    "11.5 Transparency and Trust",
    "Aven Health’s deletion process is designed to maximize user control while respecting legal and regulatory obligations.",
    "Users are informed clearly about which types of data may be retained and why, ensuring trust and accountability."
  ]
},


{
  subheading: "12. Security Measures",
  content: [
    "Aven Health takes the protection of Personal Data and Sensitive Health Data seriously. While no system can guarantee absolute security, we implement strong technical, administrative, and organizational measures to protect user information from unauthorized access, disclosure, alteration, or destruction.",

    "12.1 Encryption",
    "Sensitive Personal Data, including Health Data, prescriptions, diagnoses, managed conditions, journals, goals, and appointments, is encrypted at rest and in transit using industry-standard encryption protocols.",
    "End-to-end encryption (E2EE) is applied to all chat communications between users and between users and healthcare professionals.",

    "12.2 Access Controls",
    "Access to Personal Data and Health Data is restricted to authorized personnel only based on job role and necessity.",
    "Role-based access controls ensure that employees, contractors, and healthcare professionals can only access data they are permitted to view.",
    "Users have control over which healthcare professionals can access sensitive Health Data.",

    "12.3 Secure Servers and Infrastructure",
    "User data is hosted on secure servers in Belgium (East-1 region), maintained by trusted cloud providers.",
    "Servers are protected using physical, administrative, and technical safeguards in line with industry standards.",
    "Data backups are encrypted and securely maintained to prevent loss and ensure service continuity.",

    "12.4 Authentication Safeguards",
    "User accounts are protected through secure login procedures, including password requirements and optional multi-factor authentication.",
    "Continuous monitoring for suspicious activity and unauthorized access attempts helps maintain account security.",

    "12.5 Risk Acknowledgment",
    "While Aven Health implements rigorous security measures, no system can guarantee 100% security.",
    "Users are encouraged to protect their account credentials, avoid sharing sensitive information outside the Platform, and report any suspicious activity immediately."
  ]
},


{
  heading: "13. Children’s Privacy",
  content: [
    "Aven Health is intended for use by adults aged 18 years and older.",
    "Users must be at least 18 years old to create an account and use the Platform.",
    "We do not knowingly collect or process Personal Data or Health Data from minors under 18.",
    "If we become aware that a user under 18 has provided Personal Data, we will promptly delete the data and terminate the account.",
    "Parents or guardians should not attempt to create accounts or submit Health Data on behalf of minors, as the Platform is strictly restricted to adults.",
    "This policy ensures compliance with legal requirements and protects the privacy of minors while maintaining the integrity of the healthcare services offered."
  ]
},

{
  subheading: "14. Community Content & Public Information",
  content: [
    "Aven Health includes a social layer that allows users to share content, join communities, and interact with other users. Users should be aware that content shared publicly may be visible to others, and Aven Health cannot control all interactions.",

    "14.1 Thoughts (Posts)",
    "Users can create posts in the Thoughts section, including:",
    "1. Text",
    "2. Videos",
    "3. Images",
    "4. Documents",
    "Users can interact with others’ posts by liking, saving, replying, or sharing.",
    "Users may post anonymously, in which case their identity is not displayed.",
    "Recommendations for thoughts are based on user interactions and engagement patterns.",
    "Users are responsible for the content they share.",
    "Posts must not be discriminatory, violent, or otherwise violate the law.",
    "Posts that violate these rules may result in removal or account suspension.",

    "14.2 Communities",
    "Users may join public or private communities.",
    "Communities may allow posting of text, images, videos, and messages among members.",
    "Community content is publicly visible to all users of the Platform.",
    "To join a community:",
    "1. Users submit a request to join.",
    "2. Community administrators approve membership.",
    "Users may be removed from a community by administrators based on community rules or other factors beyond Aven Health’s control.",
    "Users are responsible for adhering to community guidelines and maintaining respectful engagement.",

    "14.3 Medical Stores and Products",
    "Medical stores and pharmacies are suggested to users based on:",
    "1. User interactions",
    "2. Location",
    "3. User gender",
    "Product recommendations follow the same logic.",
    "Users’ interactions with stores and products help improve personalization.",

    "14.4 Healthcare Professionals",
    "Recommendations for healthcare professionals:",
    "1. Are based on service type, professional category, and user gender",
    "2. Are randomized and intended for user convenience",
    "3. Do not constitute promotion or advertisement, in compliance with Kenya’s anti-advertisement regulations for medical professionals",
    "4. Users are free to select any professional regardless of recommendations.",
    "The Platform does not influence medical decisions or compel users to engage with recommended professionals.",

    "14.5 Integrated Recommendation System",
    "Aven Health provides an all-in-one recommendation experience, including:",
    "1. Thoughts/posts",
    "2. Communities",
    "3. Healthcare professionals",
    "4. Products and stores",
    "Recommendations aim to enhance user engagement and platform usability, without using sensitive health data for profiling, except for gender in professional recommendations.",

    "14.6 User Responsibility",
    "Users are responsible for:",
    "1. Content they post publicly",
    "2. Interactions in communities",
    "3. Compliance with Kenyan laws and regulations, including anti-discrimination and anti-advertisement laws",
    "Aven Health reserves the right to moderate, remove, or restrict content that violates platform rules or legal requirements."
  ]
},

{
  subheading: "15. Changes to This Policy",
  content: [
    "Aven Health may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the Platform.",
    "Right to Update: We reserve the right to revise this Privacy Policy at any time.",
    "Notice of Changes: Users will be notified of material changes via in-app notification within the Platform.",
    "Effective Date: Each version of the Privacy Policy includes an effective date. Continued use of the Platform after changes indicates acceptance of the updated Privacy Policy."
  ]
},

{
  subheading: "16. Contact Information",
  content: [
    "Users can contact Aven Health with questions, requests, or complaints regarding the handling of their Personal Data or Health Data.",
    "Privacy Contact Email: avenhealthke@gmail.com",
    "Users are encouraged to reach out regarding any concerns about their privacy, data access, or rights under this Privacy Policy."
  ]
},



  ];

  const links = [
    { name: "View Terms & Conditions", route: "/terms-conditions" }
  ];

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center">
      <LegalCard
        subheading="User Privacy Policy"
        icon={<FaShieldAlt className="text-yellow-500" />}
        sections={sections}
        links={links}
      />
    </div>
  );
};

export default UserPrivacyPolicy;
