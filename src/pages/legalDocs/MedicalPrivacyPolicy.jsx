import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import LegalCard from "../../components/LegalCard";

const MedicalProfessionalPrivacyPolicy = () => {
  const sections = [
    {
      heading: "1. Introduction / Scope",
      content: [
        "This Professional Privacy Policy explains how Aven Health collects, processes, stores, and protects the personal and professional information of licensed healthcare professionals, allied medical personnel, and affiliated healthcare institutions that use the Aven Health Platform.",
        "It ensures transparency regarding the handling of professional data and demonstrates Aven Health’s commitment to safeguarding sensitive and confidential information.",
        "Professional data collected may include—but is not limited to—professional credentials, licenses, educational qualifications, specialization areas, clinical experience, consultation history, communication with patients, performance data, and professional recommendations.",
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
    "For clarity and consistency, the following terms are used throughout this Professional Privacy Policy. These definitions establish how Aven Health interprets, collects, and processes professional and patient information.",
    {
      minorSubheading: "2.1 Professionals",
      content: [
        "Professionals refer to all licensed and verified medical personnel registered on the Aven Health platform, including, but not limited to:",
        {
          example: [
            "Doctors and Physicians: General practitioners, specialists, surgeons, and other licensed medical practitioners providing clinical care.",
            "Allied Medical Staff: Nurses, pharmacists, physiotherapists, laboratory technicians, dietitians, and other certified medical personnel.",
            "Mental Health Professionals: Counselors, psychiatrists, psychologists, therapists, and licensed social workers offering mental and behavioral health services."
          ]
        },
        "These individuals are considered professionals because they provide healthcare or therapeutic services within the platform and interact with patient data in a clinical, advisory, or consultative capacity. Their professional data is subject to this policy."
      ]
    },
    {
      minorSubheading: "2.2 Personal Data (for professionals)",
      content: [
        "Personal Data refers to any information relating to an identified or identifiable professional on the platform, including, but not limited to:",
        {
          example: [
            "Name, contact information, and profile details",
            "Employment history and educational background",
            "Professional specialties, certifications, and affiliations",
            "Platform account identifiers (username, email, and login credentials)"
          ]
        },
        "This data is used to maintain professional profiles, facilitate communication with patients, and ensure the accuracy and legitimacy of the services provided."
      ]
    },
    {
      minorSubheading: "2.3 Sensitive Personal Data",
      content: [
        "Sensitive Personal Data includes any information about a professional that requires heightened protection due to its confidential nature, including:",
        {
          example: [
            "Professional license numbers and registration identifiers",
            "Credentials, certifications, and diplomas",
            "Background verification records or compliance documentation"
          ]
        },
        "Sensitive Personal Data is handled with strict security measures to prevent unauthorized access or misuse."
      ]
    },
    {
      minorSubheading: "2.4 Health Data",
      content: [
        "Health Data refers to any patient-related information processed or generated by a professional during their activities on Aven Health. This includes:",
        {
          example: [
            "Medical histories, diagnoses, and treatment plans",
            "Consultation notes, prescriptions, and lab results",
            "Mental health assessments and therapy session notes"
          ]
        },
        "Health Data is not the professional’s personal information but is processed by the professional on the platform. Its collection, storage, and sharing are subject to additional privacy and regulatory safeguards to protect patient confidentiality."
      ]
    },
    {
      minorSubheading: "2.5 Data Controller / Data Processor",
      content: [
        "Data Controller: Aven Health acts as the Data Controller for professional data, determining the purposes and means of processing.",
        "Data Processor: In cases where services are outsourced (e.g., cloud storage, analytics), third-party service providers act as Data Processors, processing professional or patient data strictly on behalf of Aven Health under contractual obligations."
      ]
    },
    {
      minorSubheading: "2.6 Third Parties",
      content: [
        "Third Parties are any external individuals, organizations, or services that may receive or interact with professional or patient data under controlled conditions. Examples include:",
        {
          example: [
            "Regulatory authorities for compliance and licensing verification",
            "Healthcare institutions collaborating with Aven Health",
            "Technology vendors providing secure platform services"
          ]
        },
        "All interactions with Third Parties are governed by confidentiality agreements, legal requirements, and this Privacy Policy."
      ]
    },
    {
      minorSubheading: "2.7 Platform Interactions",
      content: [
        "Platform Interactions include all activities that professionals conduct on the Aven Health platform, such as:",
        {
          example: [
            "Virtual consultations and appointments with patients",
            "Messaging and chat communications",
            "Providing recommendations, referrals, or professional guidance",
            "Participation in professional forums or collaborative activities"
          ]
        },
        "These interactions generate data that may be collected, stored, and used in accordance with this policy, always respecting confidentiality and ethical obligations."
      ]
    }
  ]
},

{
  heading: "3. Information We Collect",
  content: [
    {
      subheading: "3.1 Professional-Provided Information",
      content: [
        "Aven Health collects information directly provided by professionals when they register on the Platform, create or update their professional profiles, or engage with Platform services. This information enables Aven Health to verify credentials, maintain accurate profiles, manage appointments, deliver secure telehealth services, and meet regulatory and ethical obligations.",

        "The types of professional-provided information include, but are not limited to:",
        
        {
          subheading: "3.1.1 Identity and Professional Credentials",
          content: [
            [
              "Full Name and Title: Includes first and last names, professional title (e.g., Doctor, Counselor, Psychologist), and honorifics. Used for identity verification and accurate display in patient-facing contexts",
              "Professional Qualifications and Certificates: Degrees, diplomas, licenses, certifications, and specialized training used to verify expertise and determine scope of practice",
              "License and Registration Numbers: Regulatory identifiers issued by licensing authorities to confirm legal authorization to practice",
              "Regulatory Organizations: Details of boards, councils, or institutions responsible for professional oversight",
              "Certificate of Practice: Documentation uploaded to verify legal authorization to practice",
            ],
          ],
        },

        {
          subheading: "3.1.2 Contact and Communication Information",
          content: [
            [
              "Email Address and Phone Number: Used for secure communication, appointment updates, verification, and security alerts",
              "Wallet or Payment Identifiers: Required for processing consultation fees and financial reconciliation",
              "Physical Address / Location: Practice address or geolocation for in-person appointments, regulatory compliance, and patient-professional matching",
            ],
          ],
        },

        {
          subheading: "3.1.3 Profile Details and Professional Specialization",
          content: [
            [
              "Profile Photo and Identification Photos: Headshots, ID verification images, or license scans for identity confirmation and patient trust",
              "Biography and Professional Summary: Background, expertise, experience, and achievements displayed on professional profiles",
              "Medical Institution Affiliation: Hospital, clinic, or healthcare institution affiliations",
              "Specialties and Offered Services: Service names, descriptions, durations, fees, and images for scheduling accuracy",
              "Availability and Scheduling Preferences: Working hours, preferred consultation modes (online, in-person, hybrid), and recurring availability",
              "Experience and Evidence of Work: Past employment, certifications, references, or supporting documents demonstrating competency",
            ],
          ],
        },

        {
          subheading: "3.1.4 Consultation and Fee Information",
          content: [
            [
              "Fee Structures: Standard service fees and variations based on specialization or consultation type",
              "First Consultation Offers: Flags indicating discounted or free initial sessions",
              "Booking Records: Historical and upcoming appointments with details such as service type, interaction history, timestamps, and status",
            ],
          ],
        },

        {
          subheading: "3.1.5 Platform Interaction Metadata",
          content: [
            [
              "Ratings and Reviews: Patient feedback for quality control and reputation management",
              "Professional Updates: Logs of profile modifications including timestamps and update details",
              "Approval and Verification Notes: Internal admin records documenting verification outcomes",
              "Preferred Consultation Modes: Professional preferences for in-person, online, or hybrid consultations",
            ],
          ],
        },

        {
          subheading: "3.1.6 Security and Compliance",
          content: [
            [
              "Terms and Privacy Policy Acceptance: Confirmation of agreement with Aven Health’s policies",
              "Audit and Activity Logs: Login history, profile changes, service updates, appointment management, and patient interaction metadata",
              "Status and Approvals: Tracking of professional status (pending, active, suspended) and administrative approvals",
            ],
          ],
        },

        {
          subheading: "Usage and Protection of Professional-Provided Information",
          content: [
            "All information provided by professionals is collected and managed with high standards of security and confidentiality. Aven Health uses this data solely to support professional activity, comply with healthcare regulations, and ensure reliable service delivery.",

            {
              subheading: "1. Primary Uses of Professional Data",
              content: [
                [
                  "Professional Verification and Credentialing: Verification of licenses, certificates, and identity documents to maintain platform integrity",
                  "Secure Patient Interactions: Use of specialties, profiles, and availability data to facilitate informed patient decisions and secure consultations",
                  "Scheduling and Appointment Management: Use of availability and preferences to manage calendars and prevent scheduling conflicts",
                  "Billing and Financial Reconciliation: Use of fee structures, payment identifiers, and history to process payments accurately",
                  "Compliance and Regulatory Requirements: Use of audit logs, verification notes, and status updates to meet legal obligations",
                  "Quality Assurance and Improvement: Analysis of ratings, reviews, and evidence of work to enhance service quality",
                ],
              ],
            },

            {
              subheading: "2. Protection Measures for Professional Data",
              content: [
                [
                  "Encryption: Sensitive information is encrypted in transit and at rest",
                  "Access Control and Role-Based Permissions: Only authorized personnel can access professional data based on operational need",
                  "Auditing and Monitoring: All access is logged with regular reviews to detect unauthorized activity",
                  "Data Minimization and Purpose Limitation: Only required data is collected or stored and never repurposed without consent",
                  "Secure Storage and Backup: Data is stored in secure databases with encrypted backups and integrity testing",
                  "Confidentiality and Ethical Use: Data is never shared except with legal necessity or explicit consent; all staff operate under confidentiality agreements",
                ],
              ],
            },
          ],
        },
      ],
    },

    {
      subheading: "3.2 Patient Interaction Data",
      content: [
        "Aven Health collects information generated during interactions between professionals and patients to deliver safe, personalized, and effective healthcare services. All data is handled under strict confidentiality and regulatory controls.",

        {
          subheading: "3.2.1 Appointment Notes and Clinical Observations",
          content: [
            [
              "Appointment Notes: Observations, diagnoses, treatment plans, and follow-up recommendations",
              "Clinical Documentation: Structured or unstructured notes on symptoms, progress, and health status",
            ],
            {
              subheading: "Purpose and Use",
              content: [
                [
                  "Supports continuity of care and health tracking",
                  "Enables monitoring of patient progress and treatment outcomes",
                  "Provides secure records for compliance and audit requirements",
                ],
              ],
            },
            {
              subheading: "Protection Measures",
              content: [
                [
                  "Notes are encrypted and linked only to authorized patient records",
                  "Access is restricted to the professional, authorized care team members, and administrators under strict protocols",
                ],
              ],
            },
          ],
        },

        {
          subheading: "3.2.2 Patient Communication",
          content: [
            [
              "Communication Logs: Includes chat messages, calls, video consultations, and related metadata",
              "End-to-End Encryption (E2EE): Ensures only the professional and patient can access communication content",
            ],
            {
              subheading: "Purpose and Use",
              content: [
                [
                  "Enables timely communication and follow-ups",
                  "Supports collaborative care with patient consent",
                ],
              ],
            },
            {
              subheading: "Protection Measures",
              content: [
                [
                  "Encrypted communication prevents unauthorized interception",
                  "Secure storage with audit trails for access events",
                ],
              ],
            },
          ],
        },

        {
          subheading: "3.2.3 Prescriptions and Treatment Recommendations",
          content: [
            [
              "Prescriptions Written: Medications, dosages, and refills issued by the professional",
              "Treatment Plans: Therapy recommendations, lifestyle adjustments, or non-pharmacological interventions",
            ],
            {
              subheading: "Purpose and Use",
              content: [
                [
                  "Ensures accurate and safe patient treatment",
                  "Supports pharmacy verification and medication dispensing",
                ],
              ],
            },
            {
              subheading: "Protection Measures",
              content: [
                [
                  "Digitally signed and securely stored prescriptions",
                  "Access limited to the professional, authorized pharmacists, and the patient",
                ],
              ],
            },
          ],
        },

        {
          subheading: "3.2.4 Managed Conditions, Goals, and Journal Entries",
          content: [
            [
              "Condition Management: Tracking chronic conditions, progress indicators, and outcomes",
              "Patient Goals and Journals: Goals, health diaries, symptom journals, or mental health entries",
            ],
            {
              subheading: "Purpose and Use",
              content: [
                [
                  "Supports long-term care planning and personalized interventions",
                  "Provides insights for clinical decision-making",
                ],
              ],
            },
            {
              subheading: "Protection Measures",
              content: [
                [
                  "Encrypted and linked to unique patient records",
                  "Accessible only to authorized professionals or when patient explicitly authorizes cross-consultation",
                ],
              ],
            },
          ],
        },

        {
          subheading: "3.2.5 Telehealth Chat Messages",
          content: [
            [
              "Real-Time Messaging: Secure text, multimedia, and attachments shared during consultations",
              "End-to-End Encryption: Ensures only sender and receiver can read messages",
            ],
            {
              subheading: "Purpose and Use",
              content: [
                [
                  "Supports secure consultation and follow-up",
                  "Provides an auditable record of interactions",
                ],
              ],
            },
            {
              subheading: "Protection Measures",
              content: [
                [
                  "Encrypted messaging ensures confidentiality",
                  "Metadata stored securely with controlled access",
                ],
              ],
            },
          ],
        },

        [
          "Patient interaction data is collected only for clinical, administrative, or regulatory purposes",
          "Sensitive patient data is encrypted in transit and at rest",
          "Role-specific and consent-based access ensures professionals only view relevant patient data",
          "All activity is logged and audited to ensure accountability and compliance",
        ],
      ],
    },

    {
      subheading: "3.3 Automatically Collected Data",
      content: [
        "Aven Health also collects data automatically generated by devices, system interactions, and platform activities. This supports enhanced security, performance optimization, and regulatory compliance.",

        {
          subheading: "3.3.1 Device and Technical Information",
          content: [
            [
              "Device Details: Device type, OS, browser details",
              "IP Address and Geolocation: Used for security monitoring and regulatory compliance",
              "Device Identifiers and System Logs: Session tokens, authentication logs, and update logs",
            ],
            {
              subheading: "Purpose and Use",
              content: [
                [
                  "Detect unauthorized access and suspicious activity",
                  "Support troubleshooting and technical assistance",
                  "Ensure compatibility and regulatory compliance",
                  "Improve performance across hardware and software environments",
                ],
              ],
            },
            {
              subheading: "Protection Measures",
              content: [
                [
                  "Data stored securely with restricted administrative access",
                  "Logs encrypted and anonymized where possible",
                ],
              ],
            },
          ],
        },

        {
          subheading: "3.3.2 Access Logs and Authentication Metadata",
          content: [
            [
              "Login History: Timestamps of login and logout events",
              "Session Activity: Navigation patterns and dashboard interactions",
              "Failed Authentication Attempts: Incorrect passwords, 2FA failures, suspicious access patterns",
            ],
            {
              subheading: "Purpose and Use",
              content: [
                [
                  "Monitor and prevent unauthorized access",
                  "Maintain a regulatory-compliant audit trail",
                  "Support account recovery and authentication troubleshooting",
                ],
              ],
            },
            {
              subheading: "Protection Measures",
              content: [
                [
                  "Encrypted logs with role-based access controls",
                  "Access restricted to authorized security personnel",
                ],
              ],
            },
          ],
        },

        {
          subheading: "3.3.3 Usage Analytics and Platform Interactions",
          content: [
            [
              "Dashboard Interactions: Navigational behavior and usage patterns",
              "Consultation Metrics: Appointment counts, durations, and frequency",
              "Feature Utilization Data: Usage of telehealth, messaging, booking tools, etc.",
            ],
            {
              subheading: "Purpose and Use",
              content: [
                [
                  "Improve platform design and user experience",
                  "Identify errors or bottlenecks",
                  "Generate anonymized insights for reporting",
                  "Support workload management and service optimization",
                ],
              ],
            },
            {
              subheading: "Protection Measures",
              content: [
                [
                  "Analytics anonymized and aggregated where possible",
                  "Restricted access to authorized analysts under confidentiality protocols",
                ],
              ],
            },
          ],
        },

        {
          subheading: "3.3.4 Summary of Automatic Data Handling",
          content: [
            [
              "Security Monitoring: Detecting unauthorized access and breaches",
              "System Performance: Ensuring reliability and responsiveness",
              "Service Optimization: Improving scheduling and consultation efficiency",
              "Compliance and Auditing: Maintaining legally required data logs",
            ],
            "All automatically collected data is encrypted, stored securely, role-restricted, and regularly audited to ensure it is used only for legitimate purposes.",
          ],
        },
      ],
    },
  ],
},

{
  heading: "4. Use of Professional Data",
  content: [
    "Aven Health collects professional data not only to maintain accurate profiles but also to enable secure and effective healthcare delivery, regulatory compliance, platform optimization, and informed patient interactions. The platform ensures that all professional data is used only for legitimate purposes and is handled with strict confidentiality, encryption, and access controls.",
    {
      minorSubheading: "4.1 Account Creation and Authentication",
      content: [
        {
          minorMinorSubheading: "Purpose and Use",
          content: [
            "Professional-provided identity information (name, license numbers, regulatory affiliation) is used to create verified accounts on the Aven Health platform.",
            "Authentication data (email, phone, login credentials) ensures that only the authorized professional can access their account.",
            "Multi-factor authentication or verification codes may be used to strengthen account security."
          ]
        },
        {
          minorMinorSubheading: "Benefits",
          content: [
            "Protects the integrity of the professional’s profile.",
            "Prevents unauthorized access to sensitive patient and platform data.",
            "Enables professionals to securely manage appointments, consultation history, and personal information."
          ]
        },
        {
          minorMinorSubheading: "Protection Measures",
          content: [
            "All authentication data is encrypted in transit and at rest.",
            "Login attempts, failed authentications, and session metadata are logged and monitored to detect unusual activity."
          ]
        }
      ]
    },
    {
      minorSubheading: "4.2 Professional Recommendations to Patients",
      content: [
        {
          minorMinorSubheading: "Purpose and Use",
          content: [
            "Professional data, including specialization, services offered, and availability, is used to match patients with appropriate professionals.",
            "The platform may perform gender-based randomization or service-type matching when suggesting professionals to patients, ensuring fair and balanced distribution of consultations while respecting patient preferences.",
            "Recommendations are also influenced by location, professional expertise, and historical patient satisfaction metrics."
          ]
        },
        {
          minorMinorSubheading: "Benefits",
          content: [
            "Improves patient experience by providing timely, relevant, and qualified professional suggestions.",
            "Helps distribute appointment requests fairly across available professionals."
          ]
        },
        {
          minorMinorSubheading: "Protection Measures",
          content: [
            "Personal data is never disclosed to patients without consent.",
            "Matching algorithms operate on anonymized or pseudonymized professional data for recommendation purposes."
          ]
        }
      ]
    },
    {
      minorSubheading: "4.3 Scheduling and Appointment Management",
      content: [
        {
          minorMinorSubheading: "Purpose and Use",
          content: [
            "Professional availability, consultation durations, and preferred modes (online or physical) are used to manage appointment scheduling.",
            "Booking records, historical appointment data, and consultation preferences are used to prevent double-bookings and ensure accurate time allocation.",
            "Automated reminders and notifications are sent to both professionals and patients to reduce missed appointments and improve efficiency."
          ]
        },
        {
          minorMinorSubheading: "Benefits",
          content: [
            "Ensures smooth coordination between professionals and patients.",
            "Reduces administrative burden on professionals by automating scheduling and follow-ups."
          ]
        },
        {
          minorMinorSubheading: "Protection Measures",
          content: [
            "Scheduling and booking data is restricted to the professional, authorized patients, and platform administrators for operational purposes only.",
            "All data is encrypted and stored securely, with audit logs to track access and modifications."
          ]
        }
      ]
    },
    {
      minorSubheading: "4.4 Compliance and Licensing Verification",
      content: [
        {
          minorMinorSubheading: "Purpose and Use",
          content: [
            "Professional-provided licenses, registration numbers, certifications, and regulatory board affiliations are continuously verified to ensure compliance with healthcare regulations and legal requirements.",
            "Platform administrators may periodically review or update verification status to maintain professional accountability."
          ]
        },
        {
          minorMinorSubheading: "Benefits",
          content: [
            "Protects patients by ensuring that only qualified and licensed professionals provide healthcare services.",
            "Ensures Aven Health meets regional legal and regulatory obligations for telehealth services."
          ]
        },
        {
          minorMinorSubheading: "Protection Measures",
          content: [
            "Sensitive verification data (license numbers, certificates) is encrypted and access-restricted.",
            "Verification records are logged and auditable but are not shared externally unless legally mandated."
          ]
        }
      ]
    },
    {
      minorSubheading: "4.5 Analytics for Platform Improvement",
      content: [
        {
          minorMinorSubheading: "Purpose and Use",
          content: [
            "Professional usage data, service offerings, appointment metrics, and platform interactions are analyzed to improve platform functionality, user experience, and service delivery.",
            "Data may be used to identify trends, optimize matching algorithms, evaluate feature usage, and inform professional development tools.",
            "Aggregate and anonymized data may support reporting and strategic decision making without revealing personally identifiable information."
          ]
        },
        {
          minorMinorSubheading: "Benefits",
          content: [
            "Enhances the efficiency and effectiveness of telehealth services.",
            "Supports continuous improvement of professional engagement, patient outcomes, and platform performance."
          ]
        },
        {
          minorMinorSubheading: "Protection Measures",
          content: [
            "All analytics are performed on anonymized or aggregated datasets wherever possible.",
            "Access to detailed usage data is limited to authorized platform staff and is governed by strict internal policies and audit controls."
          ]
        }
      ]
    },
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
        "Professionals’ publicly relevant profile information—such as name, title, qualifications, specialties, offered services, consultation modes, availability, and professional summary—is shared with patients to facilitate informed selection and secure engagement.",
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

  const links = [
    { name: "View Terms & Conditions", route: "/terms-conditions" },
  ];

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center">
      <LegalCard
        subheading="Medical Professional Privacy Policy"
        icon={<FaShieldAlt className="text-blue-500" />}
        sections={sections}
        links={links}
      />
    </div>
  );
};

export default MedicalProfessionalPrivacyPolicy;