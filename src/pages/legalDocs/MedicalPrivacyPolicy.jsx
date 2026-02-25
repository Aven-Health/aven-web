import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import LegalCard from "../../components/LegalCard";
import PageHelmet from "../../components/pagehelmet";

const MedicalProfessionalPrivacyPolicy = () => {
  const sections = [
    {
      heading: "1. Introduction / Scope",
      content: [
        "This Professional Privacy Policy explains how Aven Health collects, processes, stores, and protects the personal and professional information of licensed healthcare professionals, allied medical personnel, and affiliated healthcare institutions that use the Aven Health Platform.",
        "It ensures transparency regarding the handling of professional data and demonstrates Aven Health’s commitment to safeguarding sensitive and confidential information.",
        "Professional data collected may include but is not limited to professional credentials, licenses, educational qualifications, specialization areas, clinical experience, consultation history, communication with patients, performance data, and professional recommendations.",
        "This data enables Aven Health to provide secure and personalized telehealth services, maintain accurate professional profiles, support patient–professional interactions, and comply with applicable privacy, health, and ethical standards.",
      ],
    },

    {
      subheading: "1.1 Purpose of the Policy",
      content: [
        "The purpose of this Policy is to:",
        [
          "Clearly communicate the types of professional data collected and how it is used",
          "Ensure professionals understand their rights and responsibilities regarding their data",
          "Establish security and confidentiality safeguards for protecting professional information",
          "Promote trust between professionals, patients, and Aven Health through responsible data management",
        ],
      ],
    },

    {
      subheading: "1.2 Applicability",
      content: [
        "This Policy applies to all healthcare professionals and institutions engaging with Aven Health, including but not limited to:",
        [
          "Licensed physicians, specialists, and surgeons",
          "Allied medical professionals (nurses, pharmacists, therapists, laboratory technicians)",
          "Affiliated healthcare institutions such as clinics, hospitals, and diagnostic centers",
          "Independent medical consultants providing telehealth or advisory services",
        ],
        "All individuals and institutions covered by this Policy are required to adhere to its outlined practices, including regulations governing the collection, use, and management of professional data on the Aven Health Platform.",
      ],
    },

    {
      subheading: "1.3 Scope",
      content: [
        "The scope of this Policy covers all professional activities conducted through the Aven Health Platform, including:",
        [
          "Telehealth services such as virtual consultations, diagnosis, treatment guidance, follow-ups, and remote patient management",
          "Professional profiles including credentials, qualifications, expertise areas, and clinical experience",
          "Consultations and interactions involving communication with patients, colleagues, and other professionals via chat, audio, or video",
          "Recommendations and referrals such as treatment suggestions and clinical guidance",
          "Administrative and compliance functions including licensing verification, credentialing, performance evaluation, and quality assurance",
        ],
        "All professional data processed within these activities is handled securely, stored responsibly, and utilized solely for legitimate professional purposes in alignment with ethical standards, medical regulations, and applicable laws.",
      ],
    },
    
{
  heading: "2. Definitions",
  content: [
    "For clarity and consistency, the following terms are used throughout this Professional Privacy Policy. These definitions establish how Aven Health interprets, collects, and processes professional and patient information."
  ],
},

{
  subheading: "2.1 Professionals",
  content: [
    "Professionals refer to all licensed and verified medical personnel registered on the Aven Health Platform, including but not limited to:",
    [
      "Doctors and Physicians: General practitioners, specialists, surgeons, and other licensed medical practitioners providing clinical care.",
      "Allied Medical Staff: Nurses, pharmacists, physiotherapists, laboratory technicians, dietitians, and other certified medical personnel.",
      "Mental Health Professionals: Counselors, psychiatrists, psychologists, therapists, and licensed social workers offering mental and behavioral health services."
    ],
    "These individuals are considered professionals because they provide healthcare or therapeutic services within the platform and interact with patient data in a clinical, advisory, or consultative capacity. Their professional data is subject to this Policy."
  ],
},

{
  subheading: "2.2 Personal Data (for Professionals)",
  content: [
    "Personal Data refers to any information relating to an identified or identifiable professional on the Platform, including but not limited to:",
    [
      "Name, contact information, and profile details",
      "Employment history and educational background",
      "Professional specialties, certifications, and affiliations",
      "Platform account identifiers (username, email, login credentials)"
    ],
    "This data is used to maintain professional profiles, facilitate communication with patients, and ensure the accuracy and legitimacy of the services provided."
  ],
},

{
  subheading: "2.3 Sensitive Personal Data",
  content: [
    "Sensitive Personal Data includes any information about a professional that requires heightened protection due to its confidential nature. This includes:",
    [
      "Professional license numbers and registration identifiers",
      "Credentials, certifications, and diplomas",
      "Background verification records or compliance documentation"
    ],
    "Sensitive Personal Data is handled with strict security measures to prevent unauthorized access or misuse."
  ],
},

{
  subheading: "2.4 Health Data",
  content: [
    "Health Data refers to any patient-related information processed or generated by a professional during their activities on Aven Health. This includes:",
    [
      "Medical histories, diagnoses, and treatment plans",
      "Consultation notes, prescriptions, and lab results",
      "Mental health assessments and therapy session notes"
    ],
    "Health Data is not the professional’s personal information but is processed by the professional on the Platform. Its collection, storage, and sharing are subject to additional privacy and regulatory safeguards to protect patient confidentiality."
  ],
},

{
  subheading: "2.5 Data Controller / Data Processor",
  content: [
    "The following roles define how data responsibilities are shared on the Platform:",
    {
      minorSubheading: "Data Controller",
      content: [
        "Aven Health acts as the Data Controller for professional data, determining the purposes and means of processing."
      ]
    },
    {
      minorSubheading: "Data Processor",
      content: [
        "In cases where services are outsourced (such as cloud storage or analytics), third-party service providers act as Data Processors and process professional or patient data strictly on behalf of Aven Health under binding contractual obligations."
      ]
    }
  ]
},

{
  subheading: "2.6 Third Parties",
  content: [
    "Third Parties are external individuals, organizations, or services that may receive or interact with professional or patient data under controlled conditions. Examples include:",
    [
      "Regulatory authorities for compliance and licensing verification",
      "Healthcare institutions collaborating with Aven Health",
      "Technology vendors providing secure platform services"
    ],
    "All interactions with Third Parties are governed by confidentiality agreements, legal requirements, and this Privacy Policy."
  ],
},

{
  subheading: "2.7 Platform Interactions",
  content: [
    "Platform Interactions include all activities that professionals conduct on the Aven Health Platform, such as:",
    [
      "Virtual consultations and appointments with patients",
      "Messaging and chat communications",
      "Providing recommendations, referrals, or professional guidance",
      "Participation in professional forums or collaborative activities"
    ],
    "These interactions generate data that may be collected, stored, and used in accordance with this Policy, always respecting confidentiality and professional ethical obligations."
  ],
},

  {
    "heading": "3. Information We Collect",
    "content": [
      "Aven Health collects information directly provided by professionals when they register on the platform, create or update their professional profiles, or engage with platform services. This data allows Aven Health to verify professional credentials, maintain accurate and trustworthy profiles, manage appointments, facilitate secure telehealth services, and ensure compliance with regulatory and ethical standards. The types of professional-provided information include, but are not limited to:"
    ]
  },

  {
    "subheading": "3.1 Professional-Provided Information",
    "content": [
      "Aven Health collects information directly provided by professionals when they register on the platform, create or update their professional profiles, or engage with platform services. This data allows Aven Health to verify professional credentials, maintain accurate and trustworthy profiles, manage appointments, facilitate secure telehealth services, and ensure compliance with regulatory and ethical standards."
    ]
  },

  {
    "minorSubheading": "3.1.1 Identity and Professional Credentials",
    "content": [
      "Full Name and Title: Includes first and last names, professional title (e.g., Doctor, Counselor, Psychologist), and any honorifics. This information ensures proper identification and recognition of the professional on the platform and in patient-facing interactions.",
      "Professional Qualifications and Certificates: All degrees, diplomas, licenses, certifications, and specialized training information provided by the professional. This is used to verify expertise, determine the scope of practice, and display verified credentials on professional profiles.",
      "License and Registration Numbers: Regulatory identification numbers issued by recognized licensing authorities. This information confirms legal authorization to practice and ensures compliance with applicable laws and professional regulations.",
      "Regulatory Organizations: Details of the board, council, or institution responsible for professional oversight, such as medical councils, nursing boards, or psychological associations. This allows Aven Health to verify authenticity and maintain professional accountability.",
      "Certificate of Practice: Documentation uploaded by the professional to provide evidence of legal authorization to practice in their respective field."
    ]
  },

  {
    "minorSubheading": "3.1.2 Contact and Communication Information",
    "content": [
      "Email Address and Phone Number: Used to facilitate secure communication between the platform, professionals, and patients. This includes appointment notifications, platform updates, security alerts, and professional verification processes.",
      "Wallet or Payment Identifiers: Information required to manage consultation fees, process payments, and support financial reconciliation between the professional and Aven Health.",
      "Physical Address / Location: Professional practice addresses and geolocation coordinates, used to facilitate in-person appointments, determine regional compliance, and optimize patient-professional matching."
    ]
  },

  {
    "minorSubheading": "3.1.3 Profile Details and Professional Specialization",
    "content": [
      "Profile Photo and Identification Photos: Uploads of professional headshots, identity verification photos, government-issued ID, or license scans. These serve both verification and trust-building purposes, allowing patients to confirm the professional’s identity visually.",
      "Biography and Professional Summary: A descriptive summary detailing professional background, areas of expertise, clinical experience, and notable achievements. This enhances transparency and informs patient decision-making.",
      "Medical Institution Affiliation: Links or references to hospitals, clinics, or other healthcare institutions with which the professional is affiliated. This supports validation of experience and enhances patient trust.",
      "Specialties and Offered Services: Detailed listings of services, including service name, duration, fee, description, and associated images where applicable. This information is critical for accurate appointment scheduling and patient expectations.",
      "Availability and Scheduling Preferences: Detailed working hours, preferred consultation modes (online, in-person, or hybrid), and recurring availability. This ensures accurate scheduling, prevents double-booking, and optimizes platform resource allocation.",
      "Experience and Evidence of Work: Past employment history, certifications, references, or supporting documentation demonstrating professional competency. These help maintain credibility and provide patients with informed choices."
    ]
  },

  {
    "minorSubheading": "3.1.4 Consultation and Fee Information",
    "content": [
      "Fee Structures: Information on standard fees for each service, including variations by specialization or consultation type. This supports transparent financial transactions between patients and professionals.",
      "First Consultation Offers: Indicators or flags that a professional provides discounted or free initial consultations, enabling patient engagement strategies.",
      "Booking Records: Historical and scheduled appointments, including service type, patient interactions, date, time, duration, and current status (e.g., booked, completed, canceled). This ensures accurate record-keeping and facilitates billing and reporting."
    ]
  },

  {
    "minorSubheading": "3.1.5 Platform Interaction Metadata",
    "content": [
      "Ratings and Reviews: Feedback received from patients or platform users, including numerical ratings and textual reviews. This provides quality control, supports professional reputation, and helps patients make informed decisions.",
      "Professional Updates: Logs of modifications to profiles, including the identity of the updater, timestamps, and nature of changes. This ensures accountability and allows audit trails for compliance purposes.",
      "Approval and Verification Notes: Internal records documenting platform admin approval, review outcomes, verification notes, and dates. These support regulatory compliance and maintain platform integrity.",
      "Preferred Consultation Modes: Information regarding whether the professional prefers online, in-person, or hybrid consultations. This guides patient selection and scheduling algorithms."
    ]
  },

  {
    "minorSubheading": "3.1.6 Security and Compliance",
    "content": [
      "Terms and Privacy Policy Acceptance: Confirmation that the professional has reviewed and accepted Aven Health’s Terms of Service and Privacy Policy. This demonstrates consent and legal acknowledgment.",
      "Audit and Activity Logs: Metadata capturing login history, profile updates, service offerings, appointment management, and patient interactions. These logs support security monitoring, detect unauthorized activity, and ensure adherence to compliance and ethical standards.",
      "Status and Approvals: Internal tracking of professional status (e.g., pending, active, suspended) and approvals by platform administrators. This information safeguards patients and ensures only verified professionals are allowed to operate on the platform."
    ]
  },

  {
    "minorSubheading": "3.1.7 Usage and Protection of Professional-Provided Information",
    "content": [
      "All information provided by professionals on the Aven Health platform is collected and handled with the highest standards of security, confidentiality, and ethical responsibility. The platform uses this data exclusively to support the professional’s role, ensure compliance with healthcare regulations, and provide a safe and reliable experience for patients.",
      "Primary Uses of Professional Data:",
      "Professional Verification and Credentialing:",
      "License numbers, registration details, certificates, and regulatory organization affiliations are cross-checked against recognized authorities to verify the professional’s qualifications.",
      "Identity documents (ID photos, profile images) are used to confirm the professional’s identity, ensuring that only verified and legitimate professionals are active on the platform.",
      "Secure Patient Interactions:",
      "Professional profiles, specialties, and service offerings are displayed to patients to help them make informed decisions.",
      "Data such as availability, consultation preferences, and communication details ensures that appointments and interactions between professionals and patients are secure, timely, and well-managed.",
      "Scheduling and Appointment Management:",
      "Availability, preferred consultation modes (online, physical, hybrid), and working hours are used to manage booking calendars, prevent scheduling conflicts, and ensure optimal patient access.",
      "Appointment metadata (dates, times, durations, status) is used to track interactions and enable reminders for both professionals and patients.",
      "Billing and Financial Reconciliation:",
      "Fee structures, wallet or payment identifiers, and consultation history are used to process payments, generate invoices, and manage revenue in a transparent and accurate manner.",
      "First consultation offers, discounts, and fee variations by specialization are applied automatically according to professional settings.",
      "Compliance and Regulatory Requirements:",
      "Audit logs, verification notes, and status updates (e.g., pending, approved, suspended) ensure that professionals adhere to platform policies, regulatory standards, and legal obligations.",
      "Metadata about updates and profile changes provides a clear audit trail for regulatory reporting or internal compliance review.",
      "Quality Assurance and Continuous Improvement:",
      "Ratings, reviews, and feedback are analyzed to maintain service quality, support professional development, and improve patient outcomes.",
      "Evidence of work and professional achievements help the platform identify high-performing professionals and recommend best practices."
    ]
  },
  {
  subheading: "3.2 Patient Interaction Data",
  content: [
    "Aven Health collects and processes information generated during interactions between professionals and patients. This data is critical to delivering safe, personalized, and effective healthcare services and is treated with the highest standards of confidentiality and security. All patient interaction data is collected only as necessary to provide telehealth, consultation, and treatment services, and is processed in accordance with applicable health regulations and platform policies.",
  ]
},

{
  minorSubheading: "3.2.1 Appointment Notes and Clinical Observations",
  content: [
    "Appointment Notes: Professionals may record observations, diagnoses, treatment plans, and follow-up recommendations during or after patient consultations.",
    "Clinical Documentation: This includes structured or unstructured notes regarding the patient’s health status, symptoms, and progress.",
    {
      minorMinorSubheading: "Purpose and Use",
      content: [
        "Supports continuity of care and accurate tracking of patient health over time.",
        "Enables professionals to monitor patient progress against goals or treatment plans.",
        "Provides a secure record for compliance, quality assurance, and audit purposes."
      ]
    },
    {
      minorMinorSubheading: "Protection Measures",
      content: [
        "Notes are stored in encrypted databases and linked only to authorized patient records.",
        "Access is restricted to the professional, authorized care team members, and platform administrators under strict protocols."
      ]
    }
  ]
},

{
  minorSubheading: "3.2.2 Patient Communication",
  content: [
    "Communication Logs: Includes messages, calls, video consultations, and other interactions between professionals and patients.",
    "End-to-End Encryption (E2EE): Telehealth chat messages and video calls are end-to-end encrypted, ensuring that only the intended professional and patient can access the content.",
    {
      minorMinorSubheading: "Purpose and Use",
      content: [
        "Facilitates timely communication, clarifies treatment instructions, and allows questions and follow-ups.",
        "Enables collaborative care where multiple professionals may be involved, with patient consent."
      ]
    },
    {
      minorMinorSubheading: "Protection Measures",
      content: [
        "Encryption prevents interception by unauthorized parties.",
        "Logs are stored securely with audit trails tracking access events."
      ]
    }
  ]
},

{
  minorSubheading: "3.2.3 Prescriptions and Treatment Recommendations",
  content: [
    "Prescriptions Written: Includes medication prescriptions, dosage instructions, and refills authored by the professional.",
    "Treatment Plans: Includes therapy recommendations, lifestyle adjustments, exercise regimens, and other non-pharmacological interventions.",
    {
      minorMinorSubheading: "Purpose and Use",
      content: [
        "Ensures patients receive correct, safe, and timely treatment.",
        "Supports pharmacy verification and accurate medication dispensing when linked with verified pharmacies on the platform."
      ]
    },
    {
      minorMinorSubheading: "Protection Measures",
      content: [
        "Prescriptions are digitally signed and securely stored in encrypted systems.",
        "Access is limited to the prescribing professional, authorized pharmacists, and the patient."
      ]
    }
  ]
},

{
  minorSubheading: "3.2.4 Managed Conditions, Goals, and Journal Entries",
  content: [
    "Condition Management: Professionals may track chronic conditions, treatment outcomes, and progress indicators for each patient.",
    "Patient Goals and Journals: Includes therapeutic goals, symptom journals, health diaries, or mental health tracking entries recorded in consultation with the professional.",
    {
      minorMinorSubheading: "Purpose and Use",
      content: [
        "Facilitates long-term care planning, progress tracking, and personalized interventions.",
        "Supports data-driven insights for professional decision-making and health outcome improvement."
      ]
    },
    {
     minorMinorSubheading: "Protection Measures",
      content: [
        "All condition management data is linked to the patient’s unique record and encrypted.",
        "Professionals can access only their assigned patients’ data unless cross-consultation is explicitly authorized by the patient."
      ]
    }
  ]
},

{
  minorSubheading: "3.2.5 Telehealth Chat Messages",
  content: [
    "Real-Time Messaging: Professionals and patients communicate through text, multimedia, and attachments within the telehealth platform.",
    "End-to-End Encryption: All chat content is encrypted from sender to receiver, ensuring that platform servers cannot read the content.",
    {
      minorMinorSubheading: "Purpose and Use",
      content: [
        "Enables secure consultation, follow-up, clarification of instructions, and sharing of documents or images.",
        "Provides a permanent and auditable record of care interactions while maintaining confidentiality."
      ]
    },
    {
      minorMinorSubheading: "Protection Measures",
      content: [
        "E2EE ensures data integrity and confidentiality.",
        "Message metadata (timestamps, sender, recipient) is stored securely to support service functionality and audit requirements."
      ]
    },
    "All patient interaction data is handled under strict confidentiality, security, and compliance frameworks:",
    [
      "Data is collected only for clinical, administrative, or regulatory purposes related to patient care.",
      "Sensitive patient data is encrypted both at rest and in transit, with access limited to authorized professionals and the patient.",
      "Professionals’ access to patient records is role-specific and consent-based, ensuring they can only view and manage data relevant to their care responsibilities.",
      "Platform activity related to patient interaction is logged and audited to detect unauthorized access, ensure accountability, and maintain regulatory compliance."
    ],
    "By adhering to these measures, Aven Health ensures that all patient interactions remain confidential, secure, and legally compliant, while enabling professionals to deliver high-quality, personalized care."
  ]
},

{
  subheading: "3.3 Automatically Collected Data",
  content: [
    "In addition to information directly provided by professionals, Aven Health also collects data automatically generated by the platform, devices, and system interactions. This data allows the platform to enhance security, improve service functionality, monitor system performance, and optimize professional and patient experience.",
    "Automatically collected data is captured passively when professionals access the platform, interact with features, or use telehealth services."
  ]
},

{
  minorSubheading: "3.3.1 Device and Technical Information",
  content: [
    "Device Details: Includes information about the device used to access the platform, such as device type (smartphone, tablet, desktop), operating system, browser type, and version.",
    "IP Address and Geolocation Data: Captures the IP address and, where available, approximate geolocation to enhance security, detect unusual activity, and ensure compliance with regional regulations.",
    "Device Identifiers and System Logs: May include unique device identifiers, session tokens, and system logs related to authentication, login attempts, and software updates.",
    {
      minorMinorSubheading: "Purpose and Use",
      content: [
        "Enhance platform security by detecting suspicious logins or unauthorized access attempts.",
        "Enable troubleshooting and technical support when professionals encounter issues.",
        "Ensure compliance with geographic and regulatory requirements, such as jurisdiction-specific telehealth laws.",
        "Monitor device compatibility to improve platform functionality across different hardware and software environments."
      ]
    },
    {
      minorMinorSubheading: "Protection Measures",
      content: [
        "Device and technical information is stored securely with restricted access to system administrators and security teams.",
        "Logs and identifiers are encrypted and anonymized wherever possible to prevent unnecessary exposure of personal or professional information."
      ]
    }
  ]
},

{
  minorSubheading: "3.3.2 Access Logs and Authentication Metadata",
  content: [
    "Login History: Records timestamps of login attempts, successful authentications, and logout events.",
    "Session Activity: Tracks session duration, navigation patterns, and interactions within the platform, such as opening dashboards, booking modules, or telehealth interfaces.",
    "Failed Authentication Attempts: Captures instances of incorrect password entry, two-factor authentication failures, or suspicious access patterns.",
    {
      minorMinorSubheading: "Purpose and Use",
      content: [
        "Maintain platform security by identifying and responding to unauthorized access attempts.",
        "Create an audit trail for regulatory compliance and internal review.",
        "Support account recovery, password reset, and authentication troubleshooting."
      ]
    },
    {
      minorMinorSubheading: "Protection Measures",
      content: [
        "Logs are stored in encrypted form with strict access controls.",
        "Access to these logs is limited to authorized personnel for security monitoring, system maintenance, and compliance purposes."
      ]
    }
  ]
},

{
  minorSubheading: "3.3.3 Usage Analytics and Platform Interactions",
  content: [
    "Dashboard Interactions: Tracks how professionals navigate the platform, access patient records, manage schedules, and update profiles.",
    "Consultation Metrics: Includes number of appointments, completed consultations, duration of interactions, and service usage frequency.",
    "Feature Utilization Data: Identifies which platform features (e.g., telehealth, messaging, booking tools) are most used, aiding in system optimization.",
    {
      minorMinorSubheading: "Purpose and Use",
      content: [
        "Improve platform design, functionality, and user experience for professionals and patients.",
        "Identify system bottlenecks, errors, or areas needing enhancement.",
        "Generate anonymized insights for reporting, platform performance monitoring, and continuous improvement initiatives.",
        "Support administrative decision-making related to professional engagement, workload management, and service planning."
      ]
    },
    {
      minorMinorSubheading: "Protection Measures",
      content: [
        "Usage analytics are anonymized and aggregated where possible, ensuring that individual professionals or patients cannot be personally identified in analytical reports.",
        "Access to detailed usage data is restricted to platform administrators and data analysts with proper authorization and under confidentiality protocols."
      ]
    }
  ]
},

{
  minorSubheading: "3.3.4 Summary of Automatic Data Handling",
  content: [
    "Automatically collected data is essential for:",
    [
      "Security Monitoring: Detecting unauthorized access, unusual activity, and potential breaches.",
      "System Performance: Ensuring platform stability, reliability, and responsiveness.",
      "Service Optimization: Improving scheduling, consultation efficiency, and user experience.",
      "Compliance and Auditing: Maintaining records for legal, regulatory, and internal review purposes."
    ],
    "All automatically collected data is stored with encryption, role-based access control, and regular auditing, ensuring that it is secure, used only for legitimate purposes, and protected against unauthorized disclosure or misuse."
  ]
},

{
  heading: "4. Use of Professional Data",
  content: [
    "Aven Health collects professional data not only to maintain accurate profiles but also to enable secure and effective healthcare delivery, regulatory compliance, platform optimization, and informed patient interactions. The platform ensures that all professional data is used only for legitimate purposes and is handled with strict confidentiality, encryption, and access controls.",
    "The key ways in which professional data is used include:"
  ]
},

{
  subheading: "4.1 Account Creation and Authentication",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Professional-provided identity information (name, license numbers, regulatory affiliation) is used to create verified accounts on the Aven Health platform.",
        "Authentication data (email, phone, login credentials) ensures that only the authorized professional can access their account.",
        "Multi-factor authentication or verification codes may be used to strengthen account security."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Protects the integrity of the professional’s profile.",
        "Prevents unauthorized access to sensitive patient and platform data.",
        "Enables professionals to securely manage appointments, consultation history, and personal information."
      ]
    },
    {
      minorSubheading: "Protection Measures",
      content: [
        "All authentication data is encrypted in transit and at rest.",
        "Login attempts, failed authentications, and session metadata are logged and monitored to detect unusual activity."
      ]
    }
  ]
},

{
  subheading: "4.2 Professional Recommendations to Patients",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Professional data, including specialization, services offered, and availability, is used to match patients with appropriate professionals.",
        "The platform may perform gender-based randomization or service-type matching when suggesting professionals to patients, ensuring fair and balanced distribution of consultations while respecting patient preferences.",
        "Recommendations are also influenced by location, professional expertise, and historical patient satisfaction metrics."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Improves patient experience by providing timely, relevant, and qualified professional suggestions.",
        "Helps distribute appointment requests fairly across available professionals."
      ]
    },
    {
      minorSubheading: "Protection Measures",
      content: [
        "Personal data is never disclosed to patients without consent.",
        "Matching algorithms operate on anonymized or pseudonymized professional data for recommendation purposes."
      ]
    }
  ]
},

{
  subheading: "4.3 Scheduling and Appointment Management",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Professional availability, consultation durations, and preferred modes (online or physical) are used to manage appointment scheduling.",
        "Booking records, historical appointment data, and consultation preferences are used to prevent double-bookings and ensure accurate time allocation.",
        "Automated reminders and notifications are sent to both professionals and patients to reduce missed appointments and improve efficiency."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Ensures smooth coordination between professionals and patients.",
        "Reduces administrative burden on professionals by automating scheduling and follow-ups."
      ]
    },
    {
      minorSubheading: "Protection Measures",
      content: [
        "Scheduling and booking data is restricted to the professional, authorized patients, and platform administrators for operational purposes only.",
        "All data is encrypted and stored securely, with audit logs to track access and modifications."
      ]
    }
  ]
},

{
  subheading: "4.4 Compliance and Licensing Verification",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Professional-provided licenses, registration numbers, certifications, and regulatory board affiliations are continuously verified to ensure compliance with healthcare regulations and legal requirements.",
        "Platform administrators may periodically review or update verification status to maintain professional accountability."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Protects patients by ensuring that only qualified and licensed professionals provide healthcare services.",
        "Ensures Aven Health meets regional legal and regulatory obligations for telehealth services."
      ]
    },
    {
      minorSubheading: "Protection Measures",
      content: [
        "Sensitive verification data (license numbers, certificates) is encrypted and access-restricted.",
        "Verification records are logged and auditable but are not shared externally unless legally mandated."
      ]
    }
  ]
},

{
  subheading: "4.5 Analytics for Platform Improvement",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Professional usage data, service offerings, appointment metrics, and platform interactions are analyzed to improve platform functionality, user experience, and service delivery.",
        "Data may be used to identify trends, optimize matching algorithms, evaluate feature usage, and inform professional development tools.",
        "Aggregate and anonymized data may support reporting and strategic decision-making without revealing personally identifiable information."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Enhances the efficiency and effectiveness of telehealth services.",
        "Supports continuous improvement of professional engagement, patient outcomes, and platform performance."
      ]
    },
    {
      minorSubheading: "Protection Measures",
      content: [
        "All analytics are performed on anonymized or aggregated datasets wherever possible.",
        "Access to detailed usage data is limited to authorized platform staff and is governed by strict internal policies and audit controls."
      ]
    }
  ]
},

{
  content: [
    "Professional data is used exclusively to enable secure account management, support patient care, ensure compliance with regulatory standards, and optimize the platform. Aven Health ensures that all uses of professional data are lawful, ethical, and aligned with the professional’s consent, and that sensitive data is encrypted, access-controlled, audited, and protected against unauthorized use."
  ]
},

{
  heading: "5. Legal Basis for Processing Professional Data",
  content: [
    "Aven Health collects, stores, and processes professional data only when there is a clear and lawful justification. The platform adheres to applicable data protection and healthcare regulations, ensuring that all processing of professional information is transparent, proportional, and necessary for the provision of telehealth services.",
    "The primary legal bases for processing professional data are as follows:"
  ]
},
{
  subheading: "5.1 Consent from the Professional",
  content: [
    {
      minorSubheading: "Definition and Scope",
      content: [
        "Professionals provide explicit consent when registering on the platform, creating their profile, or engaging with platform features.",
        "Consent includes agreeing to the collection, storage, and processing of personal and sensitive professional data, as well as patient interaction data, for the purposes described in this Privacy Policy."
      ]
    },
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Consent enables Aven Health to process professional data for account management, telehealth service delivery, scheduling, and communications.",
        "Consent also covers the use of professional data for analytics, platform improvements, and quality assurance initiatives."
      ]
    },
    {
      minorSubheading: "Safeguards",
      content: [
        "Professionals can withdraw consent at any time, with clear procedures provided for account deactivation or data deletion where legally permissible.",
        "Consent records are securely stored and auditable to demonstrate compliance with data protection laws."
      ]
    }
  ]
},
{
  subheading: "5.2 Contractual Necessity",
  content: [
    {
      minorSubheading: "Definition and Scope",
      content: [
        "Certain processing activities are necessary to fulfill the contractual relationship between Aven Health and the professional.",
        "This includes enabling access to the platform, facilitating telehealth consultations, managing bookings, processing payments, and supporting patient-professional interactions."
      ]
    },
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Ensures that the professional can provide healthcare services through the platform.",
        "Enables Aven Health to meet its obligations as a service provider, such as appointment scheduling, fee processing, and secure communication facilitation."
      ]
    },
    {
      minorSubheading: "Safeguards",
      content: [
        "Data processed under contractual necessity is restricted to relevant platform functions.",
        "Sensitive professional and patient data is protected using encryption, role-based access control, and regular audits."
      ]
    }
  ]
},
{
  subheading: "5.3 Legal Obligations",
  content: [
    {
      minorSubheading: "Definition and Scope",
      content: [
        "Processing may be required to comply with applicable healthcare, telehealth, or professional licensing regulations.",
        "Examples include reporting to medical councils, verifying licenses, maintaining audit trails for compliance, and adhering to anti-fraud or anti-money-laundering laws."
      ]
    },
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Ensures that professionals are qualified and legally authorized to provide care.",
        "Protects patients by guaranteeing compliance with professional and regulatory standards.",
        "Supports lawful disclosure requests from regulatory authorities or governmental bodies."
      ]
    },
    {
      minorSubheading: "Safeguards",
      content: [
        "Only the minimum necessary professional data is disclosed to meet legal obligations.",
        "Disclosures are logged and monitored for audit purposes.",
        "Any shared data is handled securely and confidentially."
      ]
    }
  ]
},
{
  subheading: "5.4 Legitimate Interests",
  content: [
    {
      minorSubheading: "Definition and Scope",
      content: [
        "Aven Health may process professional data to pursue legitimate platform interests, provided these interests do not override the professional’s rights and privacy.",
        "Examples include platform security, fraud detection, prevention of unauthorized access, monitoring for misuse, and protection of patients and other platform users."
      ]
    },
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Detecting suspicious login attempts or unusual activity to prevent fraud.",
        "Ensuring that only verified professionals interact with patients.",
        "Maintaining system integrity, monitoring for technical issues, and improving operational security."
      ]
    },
    {
      minorSubheading: "Safeguards",
      content: [
        "Legitimate interest processing is limited in scope and strictly necessary for the stated purposes.",
        "Continuous risk assessments are conducted to balance platform security needs with professional privacy.",
        "Data used for security purposes is monitored and protected through encryption, access control, and audit logs."
      ]
    }
  ],
  summary: "Aven Health processes professional data only when there is a lawful basis, such as consent, contractual necessity, legal compliance, or legitimate interest. All processing is purpose-driven, transparent, and secure, with strict safeguards including encryption, role-based access control, audit trails, and limited disclosure, ensuring that professional privacy is respected while enabling safe, compliant, and efficient telehealth services."
},
{
  heading: "6. Patient Health Data Handling",
  content: [
    "Aven Health is committed to ensuring that patient health data is treated with the highest standards of confidentiality, security, and compliance. Professionals on the platform are granted access only to the patient information necessary to provide care, and all data handling is governed by strict technical, administrative, and ethical safeguards."
  ]
},
{
  subheading: "6.1 Access Limitation to Relevant Data",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Professionals are provided access only to patient data that is directly relevant to consultations, treatment, and care planning.",
        "This includes information such as current conditions, medical history, prior consultations, medications, goals, and journal entries that are pertinent to the service being provided.",
        "Access is role-based: a professional cannot view unrelated patient records or data outside their assigned consultations."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Minimizes exposure of sensitive patient data.",
        "Reduces risk of data misuse or unauthorized disclosure.",
        "Ensures professionals focus on relevant clinical information for safe and effective care."
      ]
    },
    {
      minorSubheading: "Safeguards",
      content: [
        "Access permissions are strictly controlled by the platform and continuously reviewed.",
        "All access events are logged in audit trails to maintain accountability."
      ]
    }
  ]
},
{
  subheading: "6.2 End-to-End Encryption of Communications",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Telehealth chat messages, video consultations, and file exchanges between professionals and patients are secured using end-to-end encryption (E2EE).",
        "This ensures that only the professional and the patient can read the content of communications, preventing unauthorized interception, modification, or access."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Protects sensitive patient health information during real-time interactions.",
        "Maintains the privacy and trust necessary for secure telehealth services."
      ]
    },
    {
      minorSubheading: "Safeguards",
      content: [
        "Encryption keys are securely managed and are only accessible to the endpoints (professional and patient).",
        "Platform servers cannot decrypt communications, ensuring true end-to-end security."
      ]
    }
  ]
},
{
  subheading: "6.3 Storage and Access Controls for Medical Records",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Patient health data, consultation notes, prescriptions, and related medical records are stored securely in encrypted databases.",
        "Professionals can retrieve and update only the records related to their own consultations, maintaining both functionality and security."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Ensures continuity of care by maintaining accurate and complete medical records.",
        "Supports compliance with medical, telehealth, and data protection regulations."
      ]
    },
    {
      minorSubheading: "Protection Measures",
      content: [
        "Data is encrypted both at rest and in transit.",
        "Access to stored data is controlled through role-based permissions, multi-factor authentication, and strict audit logging.",
        "Regular security assessments and backups are conducted to prevent data loss or unauthorized access."
      ]
    }
  ]
},
{
  subheading: "6.4 Professional Responsibility for Independent Recordkeeping",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Professionals are responsible for maintaining their own records of patient interactions, prescriptions, and clinical notes in accordance with their professional standards and legal obligations.",
        "The platform facilitates recordkeeping but does not replace the professional’s duty to maintain compliant, independent documentation."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Ensures that all clinical activity can be referenced for ongoing patient care, audits, or regulatory inspections.",
        "Provides professionals with the ability to maintain historical records outside the platform if required by local laws or institutional policies."
      ]
    },
    {
      minorSubheading: "Safeguards",
      content: [
        "Professionals are guided on best practices for recordkeeping and are encouraged to synchronize platform records with independent documentation.",
        "Platform audit logs support accountability while respecting professional independence."
      ]
    }
  ],
  summary: "Aven Health ensures that patient health data is accessed, stored, and communicated securely, with access limited strictly to relevant professionals. End-to-end encryption, role-based permissions, encrypted storage, and audit trails are employed to safeguard patient confidentiality. Professionals retain responsibility for independent recordkeeping, reinforcing compliance, accountability, and continuity of care. This layered approach protects patients, supports regulatory compliance, and maintains trust in telehealth services."
},
{
  heading: "7. Data Sharing & Disclosure",
  content: [
    "Aven Health treats professional data with the highest level of confidentiality and security. Sharing of professional information is strictly controlled, limited to purposes necessary for service delivery, legal compliance, or operational functionality. Professionals’ consent, platform policies, and applicable regulations govern all data disclosures."
  ]
},
{
  subheading: "7.1 Sharing with Patients (As Authorized)",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Professionals’ publicly relevant profile information such as name, title, qualifications, specialties, offered services, consultation modes, availability, and professional summary is shared with patients to facilitate informed selection and secure engagement.",
        "Any sensitive data, such as license numbers or identity verification documents, is never shared directly with patients unless explicitly authorized or required for transparency in patient-professional interactions."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Enables patients to verify credentials and make informed decisions about which professional to consult.",
        "Builds trust between professionals and patients through transparent, accurate profile information."
      ]
    },
    {
      minorSubheading: "Safeguards",
      content: [
        "Only authorized profile fields are displayed.",
        "Access is controlled by the platform to prevent unauthorized exposure of sensitive professional data."
      ]
    }
  ]
},
{
  subheading: "7.2 Platform Internal Operations",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Professional data is shared internally within the platform to support essential operational functions, including:",
        [
          "Scheduling and appointment management.",
          "Matching professionals with patients based on specialization, availability, and patient preferences.",
          "Generating professional recommendations, performance metrics, and internal analytics."
        ],
        "This internal use ensures the platform functions efficiently and provides a seamless telehealth experience."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Improves workflow efficiency for professionals.",
        "Supports platform algorithms that optimize patient-professional matching.",
        "Enables accurate tracking of professional activity and service quality."
      ]
    },
    {
      minorSubheading: "Safeguards",
      content: [
        "Internal data sharing is restricted to authorized system components and staff.",
        "Access is monitored, logged, and regularly audited to prevent misuse.",
        "Professional identifiers are protected with encryption when used in system operations and analytics."
      ]
    }
  ]
},
{
  subheading: "7.3 Regulatory Authorities When Legally Required",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Professional data may be disclosed to governmental, licensing, or regulatory bodies when required by law or for compliance purposes. Examples include:",
        [
          "Verification of licenses or certifications.",
          "Mandatory reporting of professional conduct, adverse events, or telehealth compliance.",
          "Legal investigations, audits, or requests from healthcare oversight authorities."
        ]
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Ensures platform compliance with regional and national telehealth, medical, and professional regulations.",
        "Protects patient safety and maintains the integrity of professional services."
      ]
    },
    {
      minorSubheading: "Safeguards",
      content: [
        "Only the minimum necessary data is disclosed to fulfill legal obligations.",
        "All disclosures are documented and logged for audit and accountability purposes.",
        "Where possible, disclosures are anonymized or pseudonymized to limit exposure of sensitive professional data."
      ]
    }
  ]
},
{
  subheading: "7.4 Third-Party Service Providers",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Certain professional data is shared with trusted third-party service providers to enable platform functionality, including:",
        [
          "Cloud hosting and secure data storage.",
          "Analytics, performance monitoring, and system optimization.",
          "Backup and disaster recovery services."
        ],
        "No data is shared with external advertisers or marketing entities without explicit professional consent."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Ensures the platform remains secure, performant, and reliable.",
        "Allows Aven Health to improve platform features and professional workflows."
      ]
    },
    {
      minorSubheading: "Safeguards",
      content: [
        "Third-party providers are contractually obligated to maintain confidentiality, security, and compliance with data protection regulations.",
        "Shared data is encrypted and access-controlled, and providers may only use the data for the specified operational purposes.",
        "Regular audits and compliance reviews are conducted to ensure that third-party services meet platform standards."
      ]
    }
  ],
  summary: "Professional data is shared only when necessary and with strict controls: with patients to facilitate care, internally for operational purposes, with regulatory authorities to meet legal obligations, and with trusted third-party service providers to maintain platform functionality. No professional data is sold or used for external advertising, and all disclosures are governed by encryption, access control, audit logs, and contractual safeguards, ensuring confidentiality, accountability, and compliance at all times."
},
{
  heading: "8. International Data Transfers",
  content: [
    "Aven Health may transfer professional and patient data across national borders to support platform operations, cloud storage, backup, and telehealth functionality. Such transfers are conducted in strict compliance with applicable data protection regulations to ensure that personal and sensitive professional data remain secure, confidential, and protected against unauthorized access."
  ]
},
{
  subheading: "8.1 Disclosure of Server Locations",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Data collected on the platform, including professional profiles, consultation records, appointment metadata, and system logs, may be stored on servers located in Belgium (Region: Belgium East-1) or other secure cloud regions managed by trusted cloud service providers.",
        "This ensures reliable data storage, low-latency access, disaster recovery, and high availability for professionals and patients using the platform globally."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Supports uninterrupted telehealth services and platform reliability.",
        "Enables secure cloud-based storage with geographically redundant backups to prevent data loss."
      ]
    },
    {
      minorSubheading: "Protection Measures",
      content: [
        "Data stored on these servers is encrypted at rest and in transit, ensuring confidentiality.",
        "Servers are hosted in ISO-certified and GDPR-compliant data centers with strict physical and digital security protocols."
      ]
    }
  ]
},
{
  subheading: "8.2 Safeguards for Cross-Border Data Transfers",
  content: [
    {
      minorSubheading: "Legal and Contractual Safeguards",
      content: [
        "Cross-border transfers are governed by contractual agreements with cloud and service providers, requiring compliance with applicable data protection laws (e.g., GDPR).",
        "Standard contractual clauses and data processing agreements ensure that professional and patient data cannot be accessed or processed outside the platform’s intended purposes."
      ]
    },
    {
      minorSubheading: "Technical Safeguards",
      content: [
        "Data is encrypted both at rest and during transmission, using industry-standard cryptographic protocols.",
        "Access is strictly limited to authorized platform systems and personnel, with detailed logging and audit trails."
      ]
    },
    {
      minorSubheading: "Operational Safeguards",
      content: [
        "Only the minimum necessary data is transferred across borders.",
        "Data transfers are monitored and reviewed regularly to maintain security, compliance, and integrity."
      ]
    },
    {
      minorSubheading: "Professional and Patient Assurance",
      content: [
        "Professionals are informed that their data may be stored internationally and can request information about how their data is handled during cross-border transfers.",
        "The platform ensures that transferred data continues to be protected under equivalent or higher privacy and security standards as those applied in the professional’s country of residence."
      ]
    }
  ],
  summary: "Aven Health may store and process professional and patient data on secure servers in Belgium East-1 or other compliant regions to maintain platform functionality and reliability. All cross-border data transfers are conducted with strict technical, legal, and operational safeguards, including encryption, access controls, audit trails, and contractual protections. This approach ensures that professional data remains confidential, secure, and compliant with international privacy regulations, even when processed or stored outside the professional’s home jurisdiction."
},
{
  heading: "9. Data Retention",
  content: [
    "Aven Health retains professional and patient data only for as long as necessary to provide services, comply with legal obligations, and ensure platform functionality. Data retention policies are designed to balance operational needs, regulatory compliance, and professional and patient privacy."
  ]
},
{
  subheading: "9.1 Professional Account Retention",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Professional account data, including identity, qualifications, licenses, profile information, and preferences, is retained for the duration of the professional’s active engagement with the platform.",
        "Retaining professional accounts allows ongoing management of appointments, patient interactions, billing, and compliance activities."
      ]
    },
    {
      minorSubheading: "Retention Period",
      content: [
        "Active professional accounts: Data is retained indefinitely while the account remains active.",
        "Inactive or deactivated accounts: Data may be retained for 48 months after account closure to fulfill contractual, regulatory, or legal obligations."
      ]
    },
    {
      minorSubheading: "Protection Measures",
      content: [
        "Even during retention after account deactivation, sensitive professional data is encrypted and access-restricted, with audit logs maintained for compliance purposes.",
        "Professionals can request account deletion or anonymization in accordance with applicable privacy laws, subject to retention requirements for legal compliance."
      ]
    }
  ]
},
{
  subheading: "9.2 Consultation and Patient Data Retention",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Data generated during consultations including patient health records, appointment notes, chat messages, prescriptions, and progress tracking, is retained to support continuity of care, professional accountability, and regulatory compliance."
      ]
    },
    {
      minorSubheading: "Retention Period",
      content: [
        "Telehealth consultation records: Typically retained for a minimum of 5–10 years, consistent with regional medical and telehealth regulations.",
        "End-to-end encrypted chat messages, appointment logs, and billing records: Retained for audit, security, and operational purposes, in alignment with professional and legal requirements."
      ]
    },
    {
      minorSubheading: "Protection Measures",
      content: [
        "All patient data is encrypted at rest and in transit.",
        "Role-based access ensures that only authorized professionals or platform personnel can access records.",
        "Audit logs maintain a record of all access, edits, and disclosures."
      ]
    }
  ]
},
{
  subheading: "9.3 Legal Compliance Obligations",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Certain professional and patient data may be retained beyond standard operational timelines to satisfy legal, regulatory, or contractual obligations.",
        "Examples include:",
        [
          "Verification of professional licenses or certifications.",
          "Regulatory reporting or audit requirements.",
          "Legal proceedings, malpractice claims, or insurance documentation."
        ]
      ]
    },
    {
      minorSubheading: "Retention Period",
      content: [
        "Data retained for legal purposes is maintained only for the duration required by applicable law or regulation.",
        "Once the legal retention period expires, data is securely deleted, anonymized, or archived according to platform policies."
      ]
    },
    {
      minorSubheading: "Protection Measures",
      content: [
        "Data retained for legal compliance is isolated, encrypted, and access-controlled, ensuring it is protected from unauthorized access or misuse.",
        "Regular reviews and audits ensure that retained data continues to meet compliance requirements without retaining excessive information."
      ]
    }
  ],
  summary: "Aven Health’s data retention policy ensures that professional and patient data is stored only as long as necessary, whether for active platform use, continuity of care, or legal compliance. All retained data is secure, access-controlled, and regularly reviewed, with mechanisms in place for deletion, anonymization, or secure archiving once retention periods expire. This approach balances operational functionality, professional accountability, patient safety, and regulatory obligations while protecting confidentiality and privacy."
},
{
  heading: "10. Professional Rights",
  content: [
    "Professionals using the Aven Health platform have specific rights regarding their personal and professional data. These rights ensure transparency, control, and accountability in the processing of professional information and support compliance with privacy laws and ethical obligations."
  ]
},
{
  subheading: "10.1 Right of Access",
  content: [
    {
      minorSubheading: "Definition and Scope",
      content: [
        "Professionals have the right to request access to the personal and professional data that Aven Health stores about them, including identity details, credentials, profile information, appointment history, and platform interactions.",
        "This includes both information provided by the professional and system-generated metadata related to their account usage."
      ]
    },
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Enables professionals to verify the accuracy, completeness, and lawfulness of data processing.",
        "Supports transparency and accountability in professional data handling."
      ]
    },
    {
      minorSubheading: "Process",
      content: [
        "Professionals may submit an access request through the platform’s account management interface or via formal support channels.",
        "Aven Health responds within the timeframe mandated by applicable law, providing the requested information in a clear, readable format."
      ]
    }
  ]
},
{
  subheading: "10.2 Right to Correction",
  content: [
    {
      minorSubheading: "Definition and Scope",
      content: [
        "Professionals may request correction or updating of inaccurate, incomplete, or outdated data in their profile or account records.",
        "This includes contact details, professional qualifications, license numbers, service offerings, and consultation-related information."
      ]
    },
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Ensures that patient-facing information remains accurate and reliable.",
        "Supports regulatory compliance and proper professional representation on the platform."
      ]
    },
    {
      minorSubheading: "Process",
      content: [
        "Professionals can submit correction requests through the profile management interface or by contacting platform support.",
        "Changes are reviewed, verified where necessary (e.g., for credentials or licenses), and updated promptly."
      ]
    }
  ]
},
{
  subheading: "10.3 Right to Deletion (Right to Be Forgotten)",
  content: [
    {
      minorSubheading: "Definition and Scope",
      content: [
        "Professionals can request deletion of their personal data from the platform, subject to legal, contractual, and operational obligations.",
        "Certain data may be retained for legitimate purposes, such as fulfilling regulatory obligations, audit requirements, or ongoing consultations, but is anonymized or archived whenever possible."
      ]
    },
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Provides professionals with control over the presence of their data on the platform.",
        "Ensures compliance with privacy regulations that recognize the right to erasure."
      ]
    },
    {
      minorSubheading: "Process",
      content: [
        "Deletion requests are submitted via account settings or formal communication channels.",
        "Aven Health evaluates the request, deletes data that can be removed, and notifies the professional of any data retained for legal or operational reasons."
      ]
    }
  ]
},
{
  subheading: "10.4 Withdrawal of Consent",
  content: [
    {
      minorSubheading: "Definition and Scope",
      content: [
        "Professionals may withdraw consent for data processing activities that were initially based on explicit consent, such as marketing communications or optional analytics."
      ]
    },
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Ensures that professionals retain control over how their data is used beyond essential platform operations."
      ]
    },
    {
      minorSubheading: "Process",
      content: [
        "Consent withdrawal can be initiated via account settings or support channels.",
        "Withdrawal does not affect the legality of data processing conducted prior to withdrawal or data processing required for contractual or legal obligations."
      ]
    }
  ]
},
{
  subheading: "10.5 Data Portability",
  content: [
    {
      minorSubheading: "Definition and Scope",
      content: [
        "Professionals have the right to request their personal data in a structured, commonly used, and machine-readable format.",
        "This includes profile information, credentials, appointment history, and consultation metadata."
      ]
    },
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Facilitates the transfer of professional data to other platforms or systems, enabling interoperability and professional mobility."
      ]
    },
    {
      minorSubheading: "Process",
      content: [
        "Aven Health provides a secure export mechanism or delivers the requested data securely upon verified request."
      ]
    }
  ]
},
{
  subheading: "10.6 Restriction of Processing",
  content: [
    {
      minorSubheading: "Definition and Scope",
      content: [
        "Professionals can request that processing of their data be restricted in certain circumstances, such as while a correction is pending, or when the professional contests the accuracy of data."
      ]
    },
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Limits the use of professional data to essential activities only, preserving data integrity and privacy until disputes are resolved."
      ]
    },
    {
      minorSubheading: "Process",
      content: [
        "Requests for processing restriction are submitted via account settings or support.",
        "The platform implements technical measures to suspend non-essential processing and notifies the professional once restriction is applied."
      ]
    }
  ]
},
{
  subheading: "10.7 Right to Lodge Complaints with Regulators",
  content: [
    {
      minorSubheading: "Definition and Scope",
      content: [
        "Professionals have the right to lodge complaints with supervisory authorities if they believe their data is processed in violation of applicable privacy or data protection laws."
      ]
    },
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Ensures accountability and provides an external mechanism for professional recourse."
      ]
    },
    {
      minorSubheading: "Process",
      content: [
        "Aven Health provides guidance and support for professionals wishing to contact relevant regulators.",
        "Complaints may be submitted to authorities such as national data protection agencies or telehealth regulatory boards, depending on jurisdiction."
      ]
    }
  ],
  summary: "Aven Health ensures that professionals retain full rights over their personal and professional data, including access, correction, deletion, withdrawal of consent, data portability, restriction of processing, and the ability to lodge complaints. These rights are supported through clear procedures, secure mechanisms, and adherence to applicable privacy laws, reinforcing transparency, accountability, and trust between professionals and the platform."
},
{
  heading: "11. Account Deletion & Data Deletion Process",
  content: [
    "Aven Health ensures that professional accounts and associated data can be securely deleted or deactivated, while maintaining compliance with applicable legal and regulatory obligations, including patient safety, telehealth regulations, and professional licensing requirements."
  ]
},
{
  subheading: "11.1 Termination of Professional Account",
  content: [
    {
      minorSubheading: "Voluntary Account Deletion",
      content: [
        "Professionals may request termination of their account through the platform interface or by contacting Aven Health support.",
        "Upon verification of the request, the platform will deactivate the professional’s access and initiate the data deletion or anonymization process."
      ]
    },
    {
      minorSubheading: "Involuntary Account Termination",
      content: [
        "Accounts may be terminated by Aven Health for violations of platform policies, regulatory non-compliance, or ethical breaches.",
        "Terminated accounts trigger audit and retention processes to comply with legal and regulatory obligations."
      ]
    },
    {
      minorSubheading: "Data Handling Post-Termination",
      content: [
        "Profile information, credentials, and personally identifiable data are deleted or anonymized according to retention schedules.",
        "Data required for legal compliance (e.g., regulatory reporting, malpractice claims, or ongoing patient care documentation) is retained securely, access-controlled, and encrypted."
      ]
    }
  ]
},
{
  subheading: "11.2 Handling of Patient Data Post-Deletion",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Patient health records linked to the professional remain accessible only to authorized platform personnel and the patient for continuity of care, legal compliance, and audit purposes.",
        "Deleted professional accounts do not compromise patient access to their own health data."
      ]
    },
    {
      minorSubheading: "Retention and Protection Measures",
      content: [
        "Patient consultation history, prescriptions, and medical notes are retained according to regulatory timelines, even after the professional’s account is deleted.",
        "Any data no longer required for legal or operational purposes is securely deleted or anonymized.",
        "End-to-end encrypted communications remain inaccessible to the deleted professional."
      ]
    }
  ]
},
{
  subheading: "11.3 Compliance with Regulatory Retention Requirements",
  content: [
    {
      minorSubheading: "Legal Obligations in Kenya",
      content: [
        "Under Kenyan health regulations and the Kenya Medical Practitioners and Dentists Board (KMPDB) guidelines, certain professional and patient records must be retained for minimum periods, typically:",
        [
          "Patient medical records: at least 7 years from the last consultation or treatment.",
          "Professional registration and licensing information: retained as required for audit or verification purposes."
        ]
      ]
    },
    {
      minorSubheading: "Platform Implementation",
      content: [
        "Retention schedules are enforced automatically, and data exceeding regulatory requirements is either anonymized or securely deleted.",
        "Logs of deletions and retention decisions are maintained to demonstrate compliance with regulatory obligations."
      ]
    }
  ]
},
{
  subheading: "11.4 Legal Posting Guidelines for Professionals (Kenya Context)",
  content: [
    {
      minorSubheading: "General Principle",
      content: [
        "Professionals may promote their services and expertise only in a manner that is truthful, ethical, and compliant with Kenyan medical advertising laws, including the Medical Practitioners and Dentists Act (Cap 253) and KMPDB guidelines."
      ]
    },
    {
      minorSubheading: "Permissible Posts",
      content: [
        "Accurate descriptions of professional qualifications, specialties, and services offered.",
        "Announcements regarding availability for consultation, telehealth services, or institutional affiliations.",
        "Educational content about general health topics, wellness, and preventive care, without making claims about guaranteed outcomes.",
        "Professional achievements, awards, or certifications that can be independently verified."
      ]
    },
    {
      minorSubheading: "Prohibited Posts",
      content: [
        "False, misleading, or exaggerated claims about medical services or outcomes.",
        "Direct solicitation of patients or advertisement of services that may create undue inducement.",
        "Comparative or disparaging statements about other professionals or institutions.",
        "Promotions of products or services outside professional scope unless approved by regulatory authorities."
      ]
    },
    {
      minorSubheading: "Platform Enforcement",
      content: [
        "Aven Health monitors professional postings to ensure compliance with Kenyan medical advertising laws.",
        "Violations may result in content removal, account warnings, or account termination, with records maintained for regulatory accountability."
      ]
    }
  ],
  summary: "Aven Health ensures that account and data deletion is secure, transparent, and compliant with both internal policies and Kenyan regulatory requirements. Professionals retain the right to terminate their account while the platform preserves patient safety and legal compliance. Additionally, professionals must ensure that all content they post adheres strictly to Kenyan medical advertising laws, ensuring truthful, ethical, and responsible representation of services."
},
{
  heading: "12. Security Measures",
  content: [
    "Aven Health employs a comprehensive, multi-layered approach to security to ensure that professional and patient data is protected from unauthorized access, disclosure, modification, or loss. Security measures combine technical, administrative, and organizational safeguards, designed to comply with legal and regulatory obligations while maintaining platform reliability and confidentiality."
  ]
},
{
  subheading: "12.1 Encryption and Data Protection",
  content: [
    {
      minorSubheading: "Data in Transit and at Rest",
      content: [
        "All professional and patient data, including profile information, consultation records, appointment metadata, and communications, is encrypted using industry-standard cryptographic protocols both in transit and at rest.",
        "End-to-end encryption (E2EE) is applied to telehealth chats, video consultations, and file transfers between professionals and patients, ensuring only intended recipients can access the content."
      ]
    },
    {
      minorSubheading: "Secure Servers",
      content: [
        "Data is stored on ISO-certified, GDPR-compliant servers located in Belgium East-1 and other trusted cloud regions.",
        "Servers feature physical security controls, redundancy, and disaster recovery mechanisms to prevent data loss and ensure platform availability."
      ]
    }
  ]
},
{
  subheading: "12.2 Access Controls and Authentication Safeguards",
  content: [
    {
      minorSubheading: "Role-Based Access Control (RBAC)",
      content: [
        "Access to professional and patient data is strictly limited based on user role, ensuring professionals can only access data necessary for consultations, and platform administrators only access operationally required information."
      ]
    },
    {
      minorSubheading: "Authentication Measures",
      content: [
        "Secure login procedures, including multi-factor authentication (MFA), password complexity requirements, and session monitoring, protect professional accounts from unauthorized access.",
        "Access attempts, successful logins, and failed authentication events are logged and audited to detect potential security incidents."
      ]
    },
    {
      minorSubheading: "Administrative Oversight",
      content: [
        "Platform administrators and technical staff access sensitive data only when required for operational or regulatory purposes.",
        "All administrative actions are logged, monitored, and subject to periodic review."
      ]
    }
  ]
},
{
  subheading: "12.3 Network and Application Security",
  content: [
    {
      minorSubheading: "Firewalls and Intrusion Detection",
      content: [
        "The platform is protected by enterprise-grade firewalls, intrusion detection, and intrusion prevention systems to mitigate unauthorized access attempts."
      ]
    },
    {
      minorSubheading: "Regular Vulnerability Assessments",
      content: [
        "Security assessments, penetration testing, and vulnerability scanning are conducted periodically to identify and remediate potential weaknesses."
      ]
    },
    {
      minorSubheading: "Software Updates and Patching",
      content: [
        "All platform components, including web applications, APIs, and databases, are kept up-to-date to prevent exploitation of known security vulnerabilities."
      ]
    }
  ]
},
{
  subheading: "12.4 Data Backup and Disaster Recovery",
  content: [
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Data backups are performed regularly and securely, ensuring that professional and patient data can be restored in the event of accidental deletion, technical failure, or cybersecurity incident."
      ]
    },
    {
      minorSubheading: "Retention and Security",
      content: [
        "Backup data is encrypted, access-restricted, and stored in geographically redundant locations."
      ]
    },
    {
      minorSubheading: "Recovery Procedures",
      content: [
        "Disaster recovery plans are in place to restore platform operations quickly and securely, minimizing downtime and data loss."
      ]
    }
  ]
},
{
  subheading: "12.5 Limitations of Liability",
  content: [
    {
      minorSubheading: "Acknowledgment of Risk",
      content: [
        "While Aven Health implements robust security measures, no system is completely immune to cyber threats, technical failures, or unauthorized access.",
        "Professionals acknowledge that certain risks, such as phishing, malware, or sophisticated cyberattacks, cannot be fully eliminated despite the platform’s safeguards."
      ]
    },
    {
      minorSubheading: "Liability Scope",
      content: [
        "Aven Health is not liable for losses resulting from unauthorized access caused by professional negligence, such as sharing credentials or failing to follow recommended security practices.",
        "Platform liability is limited to breaches arising from demonstrable failure of Aven Health’s security measures, consistent with contractual and regulatory obligations."
      ]
    }
  ],
  summary: "Aven Health employs state-of-the-art encryption, access control, authentication safeguards, and secure server infrastructure to protect professional and patient data. Combined with administrative oversight, network security, and disaster recovery processes, these measures ensure the confidentiality, integrity, and availability of sensitive information. Professionals are also responsible for following security best practices, and the platform limits liability to circumstances where security failures arise directly from platform shortcomings."
},
{
  heading: "13. Children’s Privacy",
  content: [
    "Aven Health is designed primarily for use by licensed healthcare professionals, allied medical staff, and adult patients. The platform enforces a minimum age requirement of 18 years for professional accounts, and interactions with minors (patients under 18) are strictly regulated to comply with applicable child protection and privacy laws."
  ]
},
{
  subheading: "13.1 Age Restrictions",
  content: [
    {
      minorSubheading: "Professional Accounts",
      content: [
        "Only individuals 18 years or older may register as professionals on the platform.",
        "Verification processes ensure that all professionals meet the minimum age requirement and hold the appropriate qualifications and licenses."
      ]
    },
    {
      minorSubheading: "Patient Accounts",
      content: [
        "While the platform primarily serves adults, minors may interact with professionals only under parental or legal guardian supervision.",
        "Parents or guardians are required to provide consent for the collection and processing of their child’s health data."
      ]
    }
  ]
},
{
  subheading: "13.2 Collection and Use of Minor Patient Data",
  content: [
    {
      minorSubheading: "Limited Scope",
      content: [
        "Professionals may access only the health information relevant to the minor patient’s consultation.",
        "No personal or sensitive data of minors is collected beyond what is strictly necessary for providing care and managing appointments."
      ]
    },
    {
      minorSubheading: "Parental/Guardian Consent",
      content: [
        "The platform ensures that parental or legal guardian consent is obtained prior to processing any health data of minors.",
        "Parents or guardians may exercise all applicable rights, including access, correction, or deletion of the child’s data, in accordance with applicable privacy laws."
      ]
    }
  ]
},
{
  subheading: "13.3 Security Measures for Minors",
  content: [
    {
      minorSubheading: "End-to-End Encryption",
      content: [
        "Communications and health records related to minor patients are secured using end-to-end encryption, ensuring confidentiality and limiting access strictly to authorized professionals and guardians."
      ]
    },
    {
      minorSubheading: "Access Controls",
      content: [
        "Role-based access ensures that only assigned professionals and authorized guardians can view or modify minor patient data."
      ]
    }
  ]
},
{
  subheading: "13.4 Prohibition on Targeted Marketing",
  content: [
    {
      minorSubheading: "Children’s Data",
      content: [
        "Aven Health does not use the data of minors for advertising or marketing purposes.",
        "No promotions, solicitations, or targeted ads are directed at patients under 18 years of age."
      ]
    }
  ],
  summary: "Aven Health enforces an 18+ age policy for professionals and regulates interactions with minor patients to ensure safety, consent, and privacy. Minor patient data is collected and processed only with guardian authorization, for the purpose of providing care, and protected using strict access controls and encryption. No minor data is used for marketing or advertising, ensuring full compliance with child privacy regulations and ethical healthcare practices."
},
{
  heading: "14. Community & Public Information",
  content: [
    "Aven Health provides professionals with the ability to interact with patients and the broader platform community while maintaining privacy, ethical standards, and compliance with regulatory obligations. This section outlines how professional data is presented publicly, how feedback is managed, and the rules governing professional-patient interactions in public spaces."
  ]
},
{
  subheading: "14.1 Professional Profile Visibility",
  content: [
    {
      minorSubheading: "Purpose and Scope",
      content: [
        "Certain professional information is publicly visible to patients and other platform users to facilitate informed selection of healthcare providers.",
        "Publicly visible data may include:",
        [
          "Name and professional title (e.g., Doctor, Psychologist, Counselor).",
          "Profile photo and biography.",
          "Specialties and services offered.",
          "Professional affiliations (e.g., hospitals or clinics).",
          "Consultation availability and modes (online or physical)."
        ]
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Enables patients to make informed decisions when choosing a professional.",
        "Builds trust and transparency between professionals and the platform community."
      ]
    },
    {
      minorSubheading: "Privacy Safeguards",
      content: [
        "Sensitive information such as license numbers, identity documents, regulatory IDs, and personal contact information is never publicly visible.",
        "Professionals can manage which non-sensitive profile fields are visible to the public through platform settings."
      ]
    }
  ]
},
{
  subheading: "14.2 Public Feedback and Ratings",
  content: [
    {
      minorSubheading: "Purpose and Scope",
      content: [
        "Patients may provide feedback or ratings for professionals based on consultations or interactions on the platform.",
        "Feedback may include numerical ratings and textual comments about service quality, professionalism, and responsiveness."
      ]
    },
    {
      minorSubheading: "Benefits",
      content: [
        "Supports quality assurance, professional accountability, and platform trustworthiness.",
        "Provides professionals with insights into patient satisfaction and areas for improvement."
      ]
    },
    {
      minorSubheading: "Privacy and Moderation",
      content: [
        "Feedback is publicly visible only in aggregated or moderated form to prevent disclosure of sensitive personal or medical information.",
        "Professionals cannot access the identity of patients providing anonymous feedback unless the patient explicitly consents.",
        "Aven Health monitors public comments to ensure compliance with platform policies and professional conduct standards."
      ]
    }
  ]
},
{
  subheading: "14.3 Interaction Rules with Patients in Public Forums",
  content: [
    {
      minorSubheading: "Professional Conduct Guidelines",
      content: [
        "Professionals must interact with patients in public spaces in a professional, respectful, and ethical manner, consistent with local medical and telehealth regulations.",
        "Discussions in public forums should avoid sharing personal patient information or making individualized medical recommendations publicly."
      ]
    },
    {
      minorSubheading: "Prohibited Activities",
      content: [
        "Soliciting patients or advertising services outside regulatory and platform-approved methods.",
        "Sharing confidential patient health data, identifiable consultation notes, or prescriptions in public forums.",
        "Posting false, misleading, or unverified medical claims."
      ]
    },
    {
      minorSubheading: "Compliance and Monitoring",
      content: [
        "Public forum interactions are monitored to ensure adherence to professional and ethical standards.",
        "Violations of conduct rules may result in content removal, warnings, or account suspension to maintain platform integrity and regulatory compliance."
      ]
    }
  ],
  summary: "Aven Health ensures that professional information shared in the community or public domains is transparent, accurate, and limited to non-sensitive data. Public feedback and ratings are moderated to protect patient confidentiality while supporting professional accountability. Professionals must follow strict interaction rules in public forums to maintain ethical standards, comply with local regulations, and safeguard both patient privacy and platform trust."
},
{
  heading: "15. Changes to This Policy",
  content: [
    "Aven Health may periodically update or revise this Professional Privacy Policy to reflect changes in platform operations, legal or regulatory requirements, security practices, or other developments. These updates are implemented to ensure continued transparency, compliance, and protection of professional and patient data."
  ]
},
{
  subheading: "15.1 Notification of Updates",
  content: [
    {
      minorSubheading: "Professional Notification",
      content: [
        "Professionals will be notified of any material changes to this privacy policy through multiple channels, which may include:",
        [
          "In-app notifications upon login.",
          "Email alerts to the registered professional account.",
          "Announcements in the professional account dashboard."
        ]
      ]
    },
    {
      minorSubheading: "Purpose and Use",
      content: [
        "Ensures that professionals are aware of changes affecting the collection, use, retention, or sharing of their data.",
        "Provides an opportunity for professionals to review, accept, or seek clarification regarding the updates."
      ]
    },
    {
      minorSubheading: "Transparency Measures",
      content: [
        "All updates are documented in a version history, clearly identifying the changes made, the effective date, and the sections impacted.",
        "Summaries of material changes are provided to facilitate quick understanding of policy modifications."
      ]
    }
  ]
},
{
  subheading: "15.2 Effective Date of Changes",
  content: [
    {
      minorSubheading: "Implementation",
      content: [
        "Updated policies will specify an effective date, which may be immediate or after a defined notice period to allow professionals to review the changes.",
        "In cases where consent is required for specific processing activities, professionals may be prompted to re-confirm their acceptance of the updated policy before continuing to use the platform."
      ]
    },
    {
      minorSubheading: "Legal and Regulatory Compliance",
      content: [
        "Changes are designed to comply with applicable data protection regulations and ensure that continued use of the platform constitutes agreement to the updated terms.",
        "Professionals who do not agree to the updated policy may request account deletion or suspension, following the procedures outlined in Section 11."
      ]
    }
  ],
  summary: "Aven Health commits to maintaining a transparent and accountable process for updating this Professional Privacy Policy. Professionals are promptly notified of any changes, and all modifications clearly indicate their effective date and impact. The platform ensures that professionals have the opportunity to review and consent to updates, preserving trust, legal compliance, and alignment with best practices in professional data protection."
}

  ];

  return (
    <div className="">
        <PageHelmet
  title="Medical Professionals Privacy Policy"
  description="Aven Health's medical professionals terms and conditions"
  url="https://www.avenhealth.co.ke/medical-professional-agreement"

/>
      <LegalCard
        title="MEDICAL PROFESSIONALS PRIVACY POLICY"
     icon={<FaShieldAlt className="text-yellow-500" />}
        sections={sections}
      
      />
    </div>
  );
};

export default MedicalProfessionalPrivacyPolicy;