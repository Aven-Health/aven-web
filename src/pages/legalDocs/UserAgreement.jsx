import React from "react";
import LegalCard from "../../components/LegalCard";
import { FaFileContract } from "react-icons/fa";

const UserAgreement = () => {
  const sections = [
    {
      heading: "1. Introduction / Scope",
      content: [
        "Welcome to Aven Health. These Terms and Conditions (“Terms”) govern your use of the Aven Health platform, including our website, mobile applications, services, and related features (collectively, the “Platform”).",
        "By creating an account, accessing, or using the Platform, you agree to be legally bound by these Terms. If you do not agree with any part of these Terms, you must not use the Platform.",

        {
          subheading: "1.1 Scope of the Terms",
          content: [
            "These Terms apply to all users of the Platform, including but not limited to:",
            [
              "Individuals seeking health information, telehealth consultations, or pharmacy services (“Users”)",
              "Healthcare professionals providing services via the Platform (“Professionals”)",
              "Verified pharmacies and medical stores offering products through the Platform (“Pharmacies”)"
            ],
            "The Terms cover:",
            [
              "Account creation, access, and responsibilities",
              "User rights and obligations",
              "Use of services, including telehealth, community interactions, and pharmacy transactions",
              "Payment processing, recommendations, and interactions with other users and professionals",
              "Intellectual property, content ownership, and restrictions",
              "Liability, dispute resolution, and legal compliance"
            ]
          ]
        },

        {
          subheading: "1.2 Acceptance of Terms",
          content: [
            [
              "By using the Platform, you confirm that you are at least 18 years old and legally capable of entering into a binding agreement.",
              "Continued use of the Platform constitutes acceptance of these Terms, including any updates or amendments made from time to time.",
              "Users are encouraged to review the Terms regularly to remain informed of their rights and obligations."
            ]
          ]
        },

        {
          subheading: "1.3 Relationship to Privacy Policy",
          content: [
            [
              "These Terms are complemented by Aven Health’s Privacy Policy, which explains how your personal and health data is collected, used, stored, and shared.",
              "By agreeing to these Terms, you also acknowledge and accept the Privacy Policy."
            ]
          ]
        }
      ]
    },
    {
  heading: "2. Eligibility",
  content: [
    {
      subheading: "2.1 Age Requirement",
      content: [
        "The Aven Health Platform is intended solely for use by individuals who are eighteen (18) years of age or older. By creating an account, accessing, or using the Platform, you expressly represent and warrant that you are at least 18 years old and possess the legal capacity to enter into a binding agreement under the laws applicable in your jurisdiction.",
        "The Platform is not directed to minors, and Aven Health does not knowingly permit individuals under the age of 18 to register for or use the services. If Aven Health becomes aware that an account has been created by a person under 18 years of age, or that a user has misrepresented their age, Aven Health reserves the right to immediately suspend or terminate the account and remove associated data, without prior notice and without liability.",
        "It is your responsibility to ensure that your use of the Platform complies with all applicable laws and that you meet the eligibility requirements at all times."
      ]
    },

    {
      subheading: "2.2 Account Registration",
      content: [
        "Certain features of the Platform, including telehealth consultations, participation in communities, interaction with healthcare professionals, pharmacy services, and personalized recommendations, require the creation of a registered user account.",
        "When registering for an account, you agree to provide information that is accurate, complete, and current. This may include, but is not limited to, your full name, email address, gender, date of birth, and any profile information you voluntarily choose to provide, such as a profile image.",
        "You further agree to promptly update your account information if it changes, so that it remains accurate and complete at all times.",
        "You may not create more than one account for personal use unless expressly authorized by Aven Health. Accounts may not be created using false identities, impersonated information, or misleading details. Any attempt to misrepresent identity, age, or credentials may result in suspension or termination of the account.",
        "You acknowledge that Aven Health relies on the accuracy of the information you provide in order to deliver its services effectively and safely, including health-related features. You are solely responsible for the truthfulness and accuracy of your registration details."
      ]
    },

    {
      subheading: "2.3 Account Security",
      content: [
        "You are responsible for maintaining the confidentiality and security of your login credentials, including your password and any authentication methods associated with your account. You agree not to share your credentials with any third party and to take reasonable steps to prevent unauthorized access to your account.",
        "You are fully responsible for all activities that occur under your account, whether or not such activities are authorized by you. If you suspect or become aware of any unauthorized access, security breach, or misuse of your account, you must notify Aven Health immediately through the designated support channels.",
        "Aven Health shall not be liable for any loss, damage, or unauthorized activity arising from your failure to safeguard your account credentials or from unauthorized access resulting from your negligence."
      ]
    },

    {
      subheading: "2.4 Right to Refuse or Terminate Access",
      content: [
        "Aven Health reserves the right, at its sole discretion and without obligation to provide prior notice, to refuse registration, suspend access, restrict certain features, or terminate accounts where it reasonably believes that:",
        [
          "A user has violated these Terms;",
          "A user has misrepresented their identity, age, or eligibility;",
          "A user has engaged in fraudulent, abusive, unlawful, or harmful conduct; or",
          "Continued access poses a risk to the integrity, security, or lawful operation of the Platform."
        ],
        "Termination or suspension under this section may result in the loss of access to account data, content, and services. Aven Health shall not be liable for any consequences arising from such suspension or termination where action is taken in accordance with these Terms."
      ]
    }
  ]
},
{
  heading: "3. User Accounts and Responsibilities",
  content: [
    {
      subheading: "3.1 Account Ownership and Personal Use",
      content: [
        "User accounts on Aven Health are personal to the registered individual and may not be transferred, assigned, sold, or shared with any other person. Each account is intended for use solely by the individual who registered it.",
        "You agree not to allow any third party to access or use your account under any circumstances. Any activity conducted through your account will be presumed to have been carried out by you."
      ]
    },

    {
      subheading: "3.2 Accuracy of Information",
      content: [
        "You are responsible for ensuring that all information provided to Aven Health, whether during registration or at any time thereafter, is accurate, complete, and not misleading.",
        "This includes, but is not limited to:",
        [
          "Identity and contact information",
          "Demographic details such as gender and date of birth",
          "Health-related information you voluntarily provide",
          "Information submitted for appointments, pharmacy services, or community participation"
        ],
        "You acknowledge that Aven Health may rely on this information to deliver services, generate recommendations, facilitate interactions with healthcare professionals or pharmacies, and maintain platform integrity.",
        "Providing false, outdated, or misleading information may result in suspension or termination of your account and may affect the accuracy of services delivered through the Platform."
      ]
    },

    {
      subheading: "3.3 Credential Security",
      content: [
        "You are solely responsible for safeguarding your login credentials and any authentication mechanisms associated with your account, including passwords, verification codes, or multi-factor authentication tools.",
        "You agree to:",
        [
          "Keep your credentials confidential",
          "Use strong and secure passwords",
          "Avoid accessing the Platform through unsecured or shared devices without appropriate precautions"
        ],
        "Aven Health is not responsible for unauthorized access to your account that results from your failure to maintain adequate security over your credentials.",
        "If you believe your account has been compromised, accessed without authorization, or subjected to any security breach, you must notify Aven Health immediately. Aven Health may take reasonable steps to secure the account, including temporary suspension or password reset requirements."
      ]
    },

    {
      subheading: "3.4 Responsibility for Account Activity",
      content: [
        "You are responsible for all actions taken under your account, including:",
        [
          "Content posted in Thoughts or Communities",
          "Messages sent to other users or professionals",
          "Appointments booked",
          "Pharmacy interactions",
          "Purchases or transactions processed through the Platform"
        ],
        "You agree that you will use the Platform in a lawful and responsible manner and will not use your account for fraudulent, harmful, abusive, discriminatory, or unlawful purposes.",
        "Aven Health reserves the right to monitor account activity where necessary to ensure compliance with these Terms and applicable law."
      ]
    },

    {
      subheading: "3.5 Compliance With Applicable Laws",
      content: [
        "You agree to use the Platform in compliance with:",
        [
          "All applicable laws and regulations in Kenya and your jurisdiction",
          "Healthcare-related regulations where applicable",
          "Anti-discrimination and anti-harassment laws",
          "Applicable professional conduct standards where relevant"
        ],
        "You are solely responsible for ensuring that your use of the Platform does not violate any applicable legal or regulatory requirement."
      ]
    },

    {
      subheading: "3.6 Platform Integrity and Cooperation",
      content: [
        "You agree not to:",
        [
          "Attempt to bypass security measures",
          "Interfere with the operation of the Platform",
          "Reverse engineer or exploit any part of the Platform",
          "Use automated tools to access or scrape content",
          "Engage in conduct that disrupts other users’ experience"
        ],
        "You further agree to cooperate with Aven Health in good faith in the event of investigations related to misuse, security breaches, or regulatory compliance."
      ]
    }
  ]
},
{
  heading: "4. Platform Use Rules",
  content: [
    {
      subheading: "4.1 Lawful and Responsible Use",
      content: [
        "The Platform must be used solely for lawful, ethical, and responsible purposes consistent with its role as a health-focused digital service.",
        "You agree that you will not use the Platform in any way that:",
        [
          "Violates applicable laws or regulations;",
          "Infringes the rights of others;",
          "Disrupts or interferes with the operation, integrity, or security of the Platform; or",
          "Undermines the safety and trust of other users."
        ],
        "Aven Health reserves the right to monitor activity where necessary to ensure compliance with these Terms and applicable law."
      ]
    },

    {
      subheading: "4.2 Content Posting Rules (Thoughts and User Content)",
      content: [
        "The Platform allows users to post content in the form of text, images, videos, documents, and other materials (“User Content”), including through the Thoughts feature and community participation.",
        "By posting content, you acknowledge and agree that:",
        [
          "You are solely responsible for the content you create, upload, or share.",
          "You must have the legal right to post any content you submit.",
          "You understand that content posted publicly may be visible to other users of the Platform."
        ],
        "You agree not to post, upload, transmit, or share any content that:",
        [
          "Is discriminatory, hateful, or promotes violence against individuals or groups;",
          "Contains threats, harassment, abuse, or intimidation;",
          "Contains unlawful, fraudulent, or misleading information;",
          "Promotes medical misinformation or unsafe health practices;",
          "Infringes intellectual property or privacy rights of others;",
          "Contains explicit, exploitative, or otherwise inappropriate material;",
          "Advertises or promotes unauthorized services in violation of applicable law."
        ],
        "Aven Health reserves the right, at its sole discretion, to remove content that violates these Terms and to suspend or terminate accounts responsible for such violations."
      ]
    },

    {
      subheading: "4.3 Anonymous Posting",
      content: [
        "The Platform may allow users to post content anonymously. While your identity may not be publicly displayed, you remain fully responsible for the content you submit.",
        "Anonymous posting does not exempt you from compliance with these Terms or applicable law. Aven Health may take appropriate action against users who misuse anonymous features."
      ]
    },

    {
      subheading: "4.4 Community Participation Rules",
      content: [
        "The Platform includes community features where users may interact, share messages, and exchange content.",
        "Users acknowledge and agree that:",
        [
          "Community content may be visible to other users of the Platform.",
          "Membership in a community may require approval by a community administrator.",
          "Community administrators may remove members at their discretion based on community rules or standards."
        ],
        "Aven Health does not control the independent decisions of community administrators regarding membership approval or removal. However, Aven Health reserves the right to intervene where community activity violates Platform rules or applicable law.",
        "Users must engage respectfully and comply with all stated community guidelines."
      ]
    },

    {
      subheading: "4.5 Prohibition on Misuse of Health Services",
      content: [
        "You agree not to use the Platform to:",
        [
          "Seek fraudulent prescriptions;",
          "Impersonate another individual or healthcare professional;",
          "Provide medical advice unless properly licensed and authorized;",
          "Circumvent regulatory safeguards;",
          "Solicit or engage in unlawful medical advertising."
        ],
        "Where applicable, healthcare professional conduct must comply with Kenyan regulatory standards, including restrictions on medical advertising and promotion."
      ]
    },

    {
      subheading: "4.6 No Unauthorized Advertising or Solicitation",
      content: [
        "The Platform may not be used for unauthorized commercial solicitation, promotional campaigns, or advertising activities.",
        "Users may not:",
        [
          "Promote unrelated products or services;",
          "Send unsolicited commercial messages;",
          "Engage in spam or bulk messaging;",
          "Use the Platform to circumvent professional advertising restrictions under applicable law."
        ],
        "Aven Health reserves the right to remove promotional content and suspend accounts engaged in unauthorized advertising."
      ]
    },

    {
      subheading: "4.7 Enforcement and Moderation",
      content: [
        "Aven Health reserves the right to:",
        [
          "Monitor content and activity where reasonably necessary;",
          "Remove or restrict access to content;",
          "Issue warnings;",
          "Suspend or permanently terminate accounts."
        ],
        "Enforcement decisions may be made without prior notice where necessary to protect users, comply with law, or preserve Platform integrity.",
        "Aven Health shall not be liable for actions taken in good faith to enforce these Terms."
      ]
    }
  ]
},
{
  heading: "5. Health Services Disclaimer",
  content: [
    {
      subheading: "5.1 Nature of the Platform",
      content: [
        "Aven Health is a digital platform that facilitates communication and interaction between users, licensed healthcare professionals, and verified pharmacies. The Platform provides tools for appointment booking, communication, prescription management, community engagement, and access to pharmacy services.",
        "Aven Health does not provide medical care, diagnosis, or treatment directly. Healthcare services made available through the Platform are provided independently by licensed healthcare professionals who are solely responsible for the medical services they deliver.",
        "Nothing on the Platform shall be interpreted as the practice of medicine by Aven Health."
      ]
    },

    {
      subheading: "5.2 No Substitute for In-Person Medical Care",
      content: [
        "Telehealth services provided through the Platform are not a substitute for in-person medical evaluation in all circumstances.",
        "You acknowledge and agree that:",
        [
          "Certain medical conditions require physical examination, laboratory testing, imaging, or emergency intervention.",
          "Remote consultations may have inherent limitations due to the absence of physical examination.",
          "The accuracy and effectiveness of telehealth services depend on the completeness and accuracy of the information you provide."
        ],
        "If you believe you are experiencing a medical emergency, you must immediately seek in-person emergency medical care or contact local emergency services. The Platform is not designed for emergency response or urgent life-threatening conditions."
      ]
    },

    {
      subheading: "5.3 Professional Responsibility",
      content: [
        "Healthcare professionals using the Platform are independent practitioners and are solely responsible for:",
        [
          "The medical advice, diagnoses, and treatment plans they provide;",
          "The accuracy of prescriptions issued;",
          "Compliance with professional and regulatory standards applicable in their jurisdiction."
        ],
        "Aven Health does not control, supervise, or direct the clinical judgment of healthcare professionals and does not guarantee the outcome of any medical service obtained through the Platform."
      ]
    },

    {
      subheading: "5.4 User Responsibility",
      content: [
        "You are responsible for:",
        [
          "Providing accurate and complete health information;",
          "Following medical advice at your discretion;",
          "Seeking additional or emergency care where appropriate;",
          "Verifying any information obtained through community discussions before acting upon it."
        ],
        "Content shared within communities or posts is for informational and peer-support purposes only and does not constitute medical advice."
      ]
    },

    {
      subheading: "5.5 No Guarantee of Outcomes",
      content: [
        "Aven Health makes no representations or warranties regarding:",
        [
          "The effectiveness of any medical treatment;",
          "The suitability of any healthcare professional;",
          "The availability of specific services;",
          "The outcome of consultations, prescriptions, or pharmacy transactions."
        ],
        "All healthcare decisions remain solely between you and the licensed professional providing care."
      ]
    },

    {
      subheading: "5.6 Limitation of Platform Liability for Medical Services",
      content: [
        "To the fullest extent permitted by applicable law, Aven Health shall not be liable for:",
        [
          "Any medical advice, diagnosis, or treatment provided by independent professionals;",
          "Any injury, loss, or damage arising from reliance on medical services accessed through the Platform;",
          "Any adverse outcomes resulting from incomplete or inaccurate information provided by users."
        ],
        "This limitation does not exclude liability where prohibited by law but shall apply to the maximum extent legally permitted."
      ]
    }
  ]
},
{
  heading: "6. Payments and Transactions",
  content: [
    {
      subheading: "6.1 Payment Processing",
      content: [
        "Payments made through the Platform, including consultation fees and pharmacy purchases, are processed through a third-party payment provider (currently Paystack or any successor payment processor).",
        "By making a payment through the Platform, you:",
        [
          "Authorize Aven Health and its payment processor to charge your selected payment method;",
          "Agree to comply with the payment processor’s terms and conditions;",
          "Acknowledge that Aven Health does not store full payment card details."
        ],
        "All payments are processed electronically. Aven Health is not responsible for delays or errors caused by payment processors, banks, or financial institutions."
      ]
    },

    {
      subheading: "6.2 Appointments, Consultation Fees, and Cancellation Policy",
      content: [
        "This section governs consultation fees, appointment booking, cancellation, rescheduling, no-shows, and refunds. It ensures clarity, fairness, and accountability for both healthcare professionals and users."
      ]
    },

    {
      minorSubheading: "6.2.1 Consultation Fees and Appointment Payments",
      content: [
        {
          minorMinorSubheading: "Setting Fees",
          content: [
            "Healthcare professionals may set their own consultation fees per service, which will be clearly displayed before booking.",
            "Fees may vary based on service type, specialty, consultation duration, or promotional discounts."
          ]
        },
        {
          minorMinorSubheading: "Payment Requirement",
          content: [
            "Payment must be made in advance unless otherwise indicated.",
            "Payment confirms the appointment and secures the time slot for both user and professional."
          ]
        },
        {
          minorMinorSubheading: "Ledger and Tracking",
          content: [
            "The Platform automatically records payment states including pending, completed, and disbursed transactions.",
            "Professionals can track payments and appointment statuses through their dashboard."
          ]
        },
        {
          example: [
            "Patient A books a telehealth session with Dr. B for 2 PM and pays immediately. The Platform marks the appointment as “Paid – Pending Attendance,” triggering the disbursement schedule."
          ]
        }
      ]
    },

    {
      minorSubheading: "6.2.2 Appointment Cancellation by User",
      content: []
    },

    {
      minorSubheading: "6.2.2.1 Cancellation Cut-Off Period",
      content: [
        "Users may cancel an appointment up to 6 hours before the scheduled time without penalty.",
        "Cancellations within the 6-hour window are considered late and may affect refund eligibility."
      ]
    },

    {
      minorSubheading: "6.2.2.2 Cancellation Before Appointment (Advance Notice)",
      content: [
        "If the user cancels more than 6 hours before the appointment:",
        [
          "Eligible for a full refund, or",
          "Eligible for a partial refund with deduction of processing or platform fees."
        ],
        "Refund eligibility and amounts are clearly displayed during booking.",
        "Healthcare professionals are not penalized for timely user cancellations.",
        {
          example: "Patient C cancels a 3 PM session at 8 AM and qualifies for a full refund."
        }
      ]
    },

    {
      minorSubheading: "6.2.2.3 Late Cancellation (Within 6 Hours of Appointment)",
      content: [
        "If the user cancels less than 6 hours before the appointment, the cancellation is considered late.",
        [
          "The fee may be partially refundable or non-refundable.",
          "This protects the professional from lost time.",
          "Professionals must document their availability to claim fees from late cancellations."
        ],
        {
          example: "Patient D cancels a 4 PM session at 11:30 AM; the professional may still receive partial or full payment."
        }
      ]
    },

    {
      minorSubheading: "6.2.3 Missed Appointments (No-Show Policy)",
      content: [
        "A “no-show” occurs when a user fails to attend an appointment without prior cancellation or communication.",
        "In such cases:",
        [
          "65% of the consultation fee is refunded to the user;",
          "The professional receives compensation for their time if readiness is verified;",
          "Rebooking requires a new payment;",
          "Repeated no-shows may result in account restrictions or suspension."
        ],
        {
          example: "Patient E fails to log in for a 2 PM session. The Platform refunds 65% and disburses the remainder to the professional after confirming readiness."
        }
      ]
    },

    {
      minorSubheading: "6.2.4 Professional-Initiated Cancellations",
      content: [
        "Professionals must notify users immediately and attempt to reschedule.",
        {
          minorMinorSubheading: "Fee Implications",
          content: [
            "If rescheduled promptly, no fee is deducted.",
            "Failure to reschedule for 5 consecutive appointments may result in account suspension or termination."
          ]
        },
        {
          example: "Dr. F cancels a 10 AM session and reschedules for 2 PM. No payment is affected."
        }
      ]
    },

    {
      minorSubheading: "6.2.5 Rescheduling Appointments",
      content: [
        "Users may request rescheduling based on professional availability.",
        "Rescheduling more than 6 hours in advance is allowed without penalty.",
        "Rescheduling within 6 hours may be treated as a late cancellation.",
        "Availability of released slots is not guaranteed.",
        {
          example: "Patient G requests a reschedule from 3 PM to 5 PM, 8 hours in advance. The request is approved without penalties."
        }
      ]
    },

    {
      minorSubheading: "6.2.6 Refunds",
      content: [
        "Refunds may be issued under the following conditions:",
        [
          "Valid user cancellation within the 6-hour cut-off period;",
          "Technical failures preventing consultation;",
          "Professional unavailability or failure to attend;",
          "Duplicate payments or billing errors."
        ],
        "Refunds are processed through the original payment method and may take several business days.",
        "Aven Health may request documentation to verify eligibility.",
        "Refunds will not be issued if:",
        [
          "The user attended the consultation;",
          "The user was a no-show (except partial refund);",
          "The user is dissatisfied with advice provided in good faith."
        ]
      ]
    },

    {
      subheading: "6.3 Pharmacy Orders and Product Transactions",
      content: [
        [
          "Users must review product descriptions, pricing, and delivery terms before confirming an order.",
          "Orders are final once confirmed and paid."
        ],
        {
          minorSubheading: "(a) Cancellations Before Fulfillment",
          content: [
            "Orders may be eligible for cancellation if they have not been processed, prepared, or dispatched."
          ]
        },
        {
          minorSubheading: "(b) After Dispatch",
          content: [
            "Once dispatched:",
            [
              "Cancellation may not be possible;",
              "Refunds may apply only to defective, incorrect, or damaged products."
            ]
          ]
        },
        {
          minorSubheading: "(c) Health and Safety Restrictions",
          content: [
            "Due to the nature of pharmaceutical products:",
            [
              "Some items may not be returned once delivered;",
              "Refund eligibility may depend on legal and regulatory requirements."
            ]
          ]
        }
      ]
    },

    {
      subheading: "6.4 Chargebacks and Payment Disputes",
      content: [
        "If a user initiates a chargeback without first attempting resolution through the Platform:",
        [
          "Aven Health may suspend the account;",
          "The user may be required to repay disputed amounts;",
          "Future access to paid services may be restricted."
        ],
        "Fraudulent disputes may lead to termination and possible legal action."
      ]
    },

    {
      subheading: "6.5 Platform Fees",
      content: [
        "Aven Health may charge service or processing fees for certain transactions.",
        "Applicable fees are disclosed before payment confirmation."
      ]
    },

    {
      subheading: "6.6 Cancellation by Healthcare Professional",
      content: [
        [
          "Users are entitled to a full refund if a professional cancels an appointment;",
          "Users may alternatively reschedule at no additional cost."
        ],
        "Short-notice cancellations may lead to professional disciplinary action.",
        "Aven Health will not retain platform fees when the professional cancels and no service is delivered."
      ]
    },

    {
      subheading: "6.11 Failure of Professional to Attend",
      content: [
        [
          "The user is entitled to a full refund;",
          "Users may receive priority rescheduling or alternative professional options."
        ],
        "Repeated failures may result in suspension or removal of the professional."
      ]
    },

    {
      subheading: "6.12 Pharmacy Order Cancellation by Pharmacy",
      content: [
        [
          "If a pharmacy cancels before dispatch, the user receives a full refund including service fees;",
          "Refunds are processed through the original payment method."
        ],
        [
          "If only part of the order is unavailable, the affected portion is refunded;",
          "Users must be notified before substituting any product."
        ]
      ]
    },

    {
      subheading: "6.13 Incorrect, Defective, or Damaged Products",
      content: [
        "If the user receives incorrect, defective, damaged, or inconsistent products, they may report the issue within the required timeframe.",
        "After verification:",
        [
          "The user may receive a replacement or refund;",
          "Return logistics may be coordinated if required."
        ]
      ]
    },

    {
      subheading: "6.14 Delivery Failures",
      content: [
        "If a pharmacy fails to dispatch within agreed timelines or delivery fails due to their error:",
        [
          "The user may request cancellation and a full refund;",
          "Or choose to wait for completion of the order."
        ]
      ]
    }
  ]
},
{
  heading: "7. Intellectual Property",
  content: [
    {
      subheading: "7.1 Ownership of the Platform",
      content: [
        "All rights, title, and interest in and to the Aven Health Platform—including its software, source code, architecture, interface, visual elements, branding, algorithms, databases, and proprietary technology—are owned by or licensed to Aven Health.",
        "These assets are protected under applicable copyright, trademark, and intellectual property laws.",
        "Nothing in these Terms grants you ownership of any part of the Platform or Aven Health’s intellectual property.",
        "You are granted a limited, non-exclusive, non-transferable, revocable license to use the Platform solely for its intended purpose and in accordance with these Terms."
      ],
      structuredContent: [
        {
          minorSubheading: "You may not:",
          content: [
            "Copy, reproduce, distribute, modify, or create derivative works from the Platform.",
            "Reverse engineer, decompile, or attempt to extract source code.",
            "Use Aven Health’s trademarks, logos, or branding without written permission.",
            "Use the Platform for commercial exploitation outside its intended functionality."
          ]
        }
      ]
    },

    {
      subheading: "7.2 User-Generated Content",
      content: [
        "The Platform allows users to create and share content, including text, images, videos, documents, and other materials (“User Content”), through features such as Thoughts and Communities.",
        "You retain ownership of the intellectual property rights in the content you create and post."
      ],
      structuredContent: [
        {
          minorSubheading: "License You Grant to Aven Health",
          content: [
            "By posting content on the Platform, you grant Aven Health a worldwide, non-exclusive, royalty-free, transferable license to:",
            "• Host, store, reproduce, display, and distribute your content within the Platform.",
            "• Adapt or format your content for technical compatibility.",
            "• Use your content to operate, maintain, improve, and promote the Platform."
          ]
        },
        {
          minorSubheading: "License Duration",
          content: [
            "The license applies for as long as your content remains on the Platform.",
            "Aven Health may retain copies after deletion if needed for legal compliance, backups, or dispute resolution."
          ]
        }
      ]
    },

    {
      subheading: "7.3 Public Nature of Content",
      content: [
        "Content posted in public areas of the Platform, including communities and public Thoughts, may be visible to other users.",
        "You are responsible for any content you choose to share publicly.",
        "Publicly shared content may be viewed, saved, or interacted with by other users in accordance with Platform functionality.",
        "Anonymous posting does not transfer ownership of your content and does not remove your responsibility for it."
      ]
    },

    {
      subheading: "7.4 Content Standards and Infringement",
      content: [
        "You represent and warrant that:",
        "• You own the content you post or have valid permission to share it.",
        "• Your content does not infringe third-party intellectual property rights.",
        "• Your content does not violate confidentiality or privacy obligations."
      ],
      structuredContent: [
        {
          minorSubheading: "Aven Health’s Rights",
          content: [
            "Aven Health may remove content that allegedly infringes intellectual property rights or violates these Terms."
          ]
        },
        {
          minorSubheading: "Reporting Infringement",
          content: [
            "If you believe your intellectual property rights have been violated through Platform content, you may submit a formal notice to Aven Health for review."
          ]
        }
      ]
    },

    {
      subheading: "7.5 Feedback",
      content: [
        "If you provide suggestions, ideas, or feedback about the Platform (“Feedback”), you agree that Aven Health may use such Feedback without restriction or compensation.",
        "You disclaim any rights to ownership, royalties, or attribution related to Feedback you provide."
      ]
    }
  ]
},
{
  heading: "8. Limitation of Liability",
  content: [
    {
      subheading: "8.1 Disclaimer of Warranties",
      content: [
        "The Aven Health Platform is provided on an “as is” and “as available” basis, without any warranties, representations, or guarantees of any kind, whether express, implied, statutory, or otherwise.",
        "To the maximum extent permitted by applicable law, Aven Health expressly disclaims all warranties, including, without limitation:"
      ],
      structuredContent: [
        {
          minorSubheading: "Disclaimed Warranties",
          content: [
            "• The uninterrupted, error-free, or fully secure operation of the Platform or any associated services;",
            "• The accuracy, reliability, completeness, or timeliness of any information, content, or recommendations provided on the Platform;",
            "• The availability, suitability, or performance of healthcare professionals, pharmacies, products, or services listed on the Platform;",
            "• The effectiveness, correctness, or safety of any consultation, prescription, treatment, or transaction facilitated through the Platform;",
            "• The prevention of unauthorized access, viruses, malware, or other harmful components introduced via the Platform or its integrations;",
            "• The compatibility of the Platform with any specific devices, operating systems, or browsers."
          ]
        },
        {
          minorSubheading: "Additional Disclaimer",
          content: [
            "All services, features, and content are provided without warranty of merchantability, fitness for a particular purpose, or non-infringement."
          ]
        }
      ]
    },

    {
      subheading: "8.2 Independent Professionals and Pharmacies",
      content: [
        "Healthcare professionals and pharmacies available on the Platform operate as independent entities, and Aven Health does not act as a healthcare provider, pharmacist, or intermediary in a clinical capacity.",
        "Aven Health shall not be responsible for:"
      ],
      structuredContent: [
        {
          minorSubheading: "Professional and Pharmacy Liability",
          content: [
            "• Any medical advice, diagnosis, or treatment provided by healthcare professionals;",
            "• Professional negligence, malpractice, errors, or omissions by practitioners;",
            "• Accuracy, legality, safety, or quality of any products, prescriptions, or medications dispensed by pharmacies;",
            "• Errors, delays, or omissions in prescription fulfillment, product preparation, dispatch, or delivery;",
            "• Any loss, injury, or damage arising from reliance on professional or pharmacy services."
          ]
        },
        {
          minorSubheading: "User–Professional Relationship",
          content: [
            "All decisions regarding your health, treatment, and product use are solely between you and the relevant licensed professional or pharmacy.",
            "Aven Health does not guarantee outcomes or suitability of services or products."
          ]
        }
      ]
    },

    {
      subheading: "8.3 User-Generated Content",
      content: [
        "The Platform allows users to create, post, and share content, including posts, comments, media, and other materials (“User Content”).",
        "Aven Health does not pre-screen or verify all user-generated content and is not responsible for:"
      ],
      structuredContent: [
        {
          minorSubheading: "User Content Liability",
          content: [
            "• Statements, opinions, or advice posted by other users;",
            "• Offensive, misleading, fraudulent, or unlawful content submitted by users;",
            "• Interactions, disputes, or conflicts that may arise between users;",
            "• The accuracy or applicability of health-related information shared in communities, public posts, or anonymous submissions."
          ]
        },
        {
          minorSubheading: "Moderation",
          content: [
            "Users engage with the Platform at their own risk. While Aven Health may moderate or remove content, there is no obligation to monitor all activity or detect violations."
          ]
        }
      ]
    },

    {
      subheading: "8.4 No Liability for Indirect, Incidental, or Consequential Loss",
      content: [
        "To the maximum extent permitted by law, Aven Health shall not be liable for any indirect, incidental, consequential, punitive, or special damages, including but not limited to:"
      ],
      structuredContent: [
        {
          minorSubheading: "Examples of Excluded Damages",
          content: [
            "• Loss of profits, revenue, business opportunities, or goodwill;",
            "• Loss, corruption, or unauthorized access to data;",
            "• Emotional distress, reputational harm, or personal injury;",
            "• Losses caused by technical failures, platform downtime, security breaches, or cyberattacks beyond reasonable control."
          ]
        },
        {
          minorSubheading: "Applicability",
          content: [
            "This limitation applies regardless of whether the claim arises under contract, tort, negligence, strict liability, or other legal theories."
          ]
        }
      ]
    },

    {
      subheading: "8.5 Financial Liability Cap",
      content: [
        "To the fullest extent permitted by law, the maximum aggregate liability of Aven Health, its affiliates, employees, officers, or agents arising from or related to your use of the Platform shall not exceed:"
      ],
      structuredContent: [
        {
          minorSubheading: "Liability Limit",
          content: [
            "• The total amount paid by you to Aven Health in the forty-eight (48) months immediately preceding the event giving rise to the claim; or",
            "• Where no payments have been made, a reasonable statutory minimum amount as allowed under applicable law."
          ]
        },
        {
          minorSubheading: "Scope",
          content: [
            "This cap applies to all claims, whether direct or indirect, arising from technical, operational, or service-related issues."
          ]
        }
      ]
    },

    {
      subheading: "8.6 Exceptions to Limitations",
      content: [
        "Nothing in these Terms shall exclude or limit liability where prohibited by law, including liability for:"
      ],
      structuredContent: [
        {
          minorSubheading: "Liability That Cannot Be Excluded",
          content: [
            "• Fraud or fraudulent misrepresentation;",
            "• Gross negligence or willful misconduct;",
            "• Any other liability that cannot legally be excluded under applicable regulations."
          ]
        }
      ]
    },

    {
      subheading: "8.7 User Assumption of Risk",
      content: [
        "By accessing and using the Platform, you acknowledge and accept that:"
      ],
      structuredContent: [
        {
          minorSubheading: "Risks You Accept",
          content: [
            "• Telehealth services are inherently limited by the absence of in-person evaluation;",
            "• Interactions with other users, professionals, or pharmacies carry inherent risks;",
            "• Publicly shared content and anonymous postings may be viewed and engaged with by other users;",
            "• Technical failures, delays, or breaches may occur despite reasonable safeguards;",
            "• Health-related decisions and actions taken based on information obtained through the Platform are solely your responsibility."
          ]
        },
        {
          minorSubheading: "Assumption of Responsibility",
          content: [
            "You voluntarily assume all risks associated with your use of the Platform and its services, acknowledging that no reliance on the Platform should replace appropriate professional judgment or in-person care where required."
          ]
        }
      ]
    }
  ]
},
{
  heading: "9. Termination",
  content: [
    {
      subheading: "9.1 Voluntary Termination by User",
      content: [
        "Users may voluntarily terminate or delete their accounts at any time using:",
        [
          "The account deletion feature available within the Platform; or",
          "A request submitted to Aven Health’s support team through official communication channels."
        ],
        "Upon voluntary termination:",
        [
          "User access to all Platform features — including appointment booking, telehealth consultations, communities, content creation, pharmacy services, and personalized recommendations — will be immediately revoked.",
          "Any remaining credits, balances, subscriptions, or pre-paid services may be forfeited unless otherwise stated in the applicable Payment & Transactions or subscription policy.",
          "Certain information such as medical records, transaction logs, and compliance data may be retained as required by law, regulation, or contractual obligations (e.g., healthcare documentation laws, auditing, dispute resolution)."
        ],
        "Users are responsible for managing or removing their own content where applicable. Some publicly posted content may continue to exist to satisfy operational, legal, or archival requirements."
      ]
    },

    {
      subheading: "9.2 Termination or Suspension by Aven Health",
      content: [
        "Aven Health may suspend, restrict, or permanently terminate a user’s account at its sole discretion, with or without prior notice, for reasons including but not limited to:",
        {
          minorSubheading: "1. Violation of Terms or Law",
          content: [
            "Breach of any provision of these Terms or any applicable laws, regulations, or professional guidelines."
          ]
        },
        {
          minorSubheading: "2. Fraudulent or Abusive Behavior",
          content: [
            "Engaging in fraud, harassment, discriminatory behavior, hate speech, illegal activity, or any conduct harmful to the Platform, its users, or healthcare professionals."
          ]
        },
        {
          minorSubheading: "3. False or Misleading Information",
          content: [
            "Providing incorrect, incomplete, or deceptive information during registration or while using the Platform."
          ]
        },
        {
          minorSubheading: "4. Platform Interference",
          content: [
            "Attempting to access, disrupt, tamper with, or reverse engineer Platform systems, security features, or user experiences."
          ]
        },
        {
          minorSubheading: "5. Payment Non-Compliance or No-Shows",
          content: [
            "Repeated appointment no-shows, failure to pay required fees, chargebacks, or patterns of financial misuse."
          ]
        },
        {
          minorSubheading: "6. Regulatory or Legal Requirements",
          content: [
            "Actions required to comply with Kenyan telehealth regulations, global privacy laws (e.g., GDPR), healthcare standards, or pharmacy and professional compliance obligations."
          ]
        },
        "Suspension or termination decisions may be final and may also be applied during preliminary investigations where misuse or violations are suspected."
      ]
    },

    {
      subheading: "9.3 Effect of Suspension",
      content: [
        "When a user account is suspended:",
        [
          "Access to some or all features may be restricted, including appointments, messaging, content posting, and community participation.",
          "Active appointments, pharmacy orders, or pending transactions may be paused, rescheduled, or canceled depending on the nature of the suspension.",
          "Aven Health may conduct an investigation into the events leading to suspension, and users may be required to provide additional information.",
          "Suspension does not cancel or waive outstanding financial obligations, including fees, orders, or service charges incurred before or during suspension."
        ]
      ]
    },

    {
      subheading: "9.4 Effect of Termination",
      content: [
        "Upon termination — whether voluntary or enforced:",
        [
          "The account will be permanently deactivated, and all access to services, appointments, records, and features will cease.",
          "Aven Health may retain certain information such as transaction records, medical records, appointment logs, and communications for regulatory compliance, legal obligations, fraud prevention, dispute resolution, and operational integrity.",
          "Publicly posted content (e.g., Thoughts, community discussions) may remain visible to other users or archived to meet operational, recordkeeping, or legal requirements.",
          "Refunds are not guaranteed for services already rendered unless explicitly outlined in the Payment & Transactions or refund policy."
        ]
      ]
    },

    {
      subheading: "9.5 Consequences of Rule Violations",
      content: [
        "Accounts suspended or terminated for violations may also face:",
        [
          "Permanent bans from future account creation or Platform access;",
          "Reporting to relevant authorities in cases involving illegal, fraudulent, harmful, or abusive behavior;",
          "Forfeiture of pre-paid services, credits, or scheduled appointments, particularly where user misconduct caused disruption;",
          "Removal of harmful, illegal, abusive, or policy-violating interactions, posts, or content."
        ],
        "These actions help ensure community safety, compliance, and the integrity of the Platform."
      ]
    },

    {
      subheading: "9.6 Regulatory and Legal Compliance",
      content: [
        "Account termination or suspension may be required to comply with regulatory obligations, including:",
        [
          "Kenyan regulations governing telemedicine, digital health records, pharmacy operations, and healthcare professional conduct;",
          "International privacy laws applicable to cross-border users (e.g., GDPR, HIPAA-equivalent standards);",
          "Pharmacy and medical licensing rules, anti-advertisement laws, and professional ethics requirements;",
          "Legal obligations to retain or disclose data for audits, legal proceedings, or public health investigations."
        ],
        "Users acknowledge that regulatory compliance may require the retention or disclosure of certain information even after account termination."
      ]
    }
  ]
},
{
  heading: "10. Governing Law & Dispute Resolution",
  content: [
    {
      subheading: "10.1 Governing Law",
      content: [
        "These Terms and your use of the Aven Health Platform — including all services, features, transactions, and interactions — are governed by and interpreted in accordance with the laws of the Republic of Kenya, without regard to conflict of law principles.",
        "By using the Platform, you expressly acknowledge and agree to the following:",
        {
          minorSubheading: "1. Primary Jurisdiction",
          content: [
            "Kenyan law governs the interpretation, enforcement, and resolution of any disputes arising from your access to or use of the Platform.",
            "This applies to telehealth services, pharmacy transactions, social interactions, recommendations, data processing, and all other Platform activities."
          ]
        },
        {
          minorSubheading: "2. Legal Compliance",
          content: [
            "Your rights and obligations under these Terms are subject to Kenyan statutes, regulations, and judicial precedents, including but not limited to:",
            [
              "The Kenya Data Protection Act, 2019 (privacy and health data obligations);",
              "The Health Act, including any telemedicine regulations;",
              "Consumer protection and e-commerce regulations."
            ]
          ]
        },
        {
          minorSubheading: "3. International Users",
          content: [
            "For users accessing the Platform outside Kenya, these Terms remain primarily governed by Kenyan law unless a foreign jurisdiction mandatorily overrides certain protections.",
            "Users accessing Aven Health internationally must also comply with local laws applicable to telehealth, pharmaceutical services, and digital communications."
          ]
        }
      ]
    },

    {
      subheading: "10.2 Dispute Resolution Procedure",
      content: [
        "Aven Health prioritizes early, good faith resolution of disputes to minimize cost, delay, and disruption. Users agree to complete the following steps before initiating any formal proceedings:",
        {
          minorSubheading: "10.2.1 Contact Aven Health Support",
          content: [
            "Users must submit a written complaint or concern through the official support channels provided on the Platform or via email.",
            "Submissions should include relevant details such as account identifiers, transaction references, appointment information, and supporting documentation.",
            "Users must allow Aven Health a reasonable period — typically 30 calendar days — to investigate and respond."
          ]
        },
        {
          minorSubheading: "10.2.2 Good Faith Negotiation",
          content: [
            "Both parties commit to engaging in good faith negotiations to resolve disputes amicably.",
            "This process may include information requests, discussions with involved professionals, or mediation facilitated by Aven Health.",
            "Failure to resolve disputes through negotiation does not waive legal rights but is a prerequisite for arbitration or litigation, except when immediate injunctive relief is required."
          ]
        }
      ]
    },

    {
      subheading: "10.3 Arbitration",
      content: [
        "If disputes remain unresolved after negotiation, users agree to submit them to binding arbitration in accordance with Kenyan law.",
        {
          minorSubheading: "1. Scope",
          content: [
            "Arbitration applies to all disputes, claims, or controversies arising from or relating to:",
            [
              "These Terms;",
              "The Platform or its features;",
              "Any transactions, appointments, consultations, or professional interactions;",
              "User-generated content, social interactions, or community activity."
            ]
          ]
        },
        {
          minorSubheading: "2. Location and Administration",
          content: [
            "Arbitration will occur in Nairobi, Kenya, unless both parties agree on a different location.",
            "Proceedings will be conducted under the Kenya Arbitration Act, 1995, or its successor legislation."
          ]
        },
        {
          minorSubheading: "3. Arbitrator Appointment",
          content: [
            "A single arbitrator shall be appointed by mutual agreement, or if the parties cannot agree, the appointment will follow the procedures of the Arbitration Act."
          ]
        },
        {
          minorSubheading: "4. Legal Standard",
          content: [
            "The arbitrator shall apply Kenyan law and may award any remedies available under statute or common law, including compensatory, declaratory, or injunctive relief."
          ]
        },
        {
          minorSubheading: "5. Binding Decision",
          content: [
            "The arbitration award is final, binding, and enforceable in any Kenyan court with jurisdiction."
          ]
        },
        {
          minorSubheading: "6. Costs",
          content: [
            "Arbitration costs, including arbitrator fees and reasonable legal expenses, shall be allocated at the discretion of the arbitrator, unless otherwise specified."
          ]
        }
      ]
    },

    {
      subheading: "10.4 Court Jurisdiction",
      content: [
        "Where arbitration is unavailable, unenforceable, or waived:",
        [
          "The courts of Kenya have exclusive jurisdiction over any disputes relating to the Platform or these Terms.",
          "Users submit to the personal and subject-matter jurisdiction of Kenyan courts and waive objections to inconvenient venues.",
          "All claims must comply with applicable Kenyan statutes of limitation, and failure to file within the prescribed period may result in dismissal."
        ]
      ]
    },

    {
      subheading: "10.5 Injunctive Relief and Interim Measures",
      content: [
        "Notwithstanding arbitration or court provisions, Aven Health may seek injunctive or provisional remedies from a competent Kenyan court to:",
        [
          "Prevent imminent harm to the Platform or its users;",
          "Protect intellectual property rights;",
          "Stop unauthorized access, security breaches, or misuse;",
          "Enforce compliance regarding safety, fraud, or illegal activity."
        ],
        "Such relief may be sought without prior negotiation or arbitration when necessary to prevent irreparable harm."
      ]
    },

    {
      subheading: "10.6 Waiver of Class Actions",
      content: [
        "To the fullest extent permitted by law:",
        [
          "Users waive the right to initiate or participate in any class, consolidated, or representative action against Aven Health;",
          "All disputes must be resolved individually through arbitration or court proceedings as described herein;",
          "This limitation protects user privacy, preserves Platform integrity, and reduces operational and financial risk."
        ]
      ]
    }
  ]
},
{
  heading: "11. Changes to Terms",
  content: [
    {
      subheading: "11.1 Right to Update Terms",
      content: [
        "Aven Health reserves the right, at its sole discretion, to modify, amend, or update these Terms and Conditions at any time.",
        "Updates may be necessary to:",
        [
          "Reflect changes in legal or regulatory requirements, including telehealth, data protection, or e-commerce laws",
          "Address new features, services, or functionalities added to the Platform",
          "Improve clarity, enforceability, or operational effectiveness of the Terms",
          "Respond to security, privacy, or safety concerns",
          "Incorporate global compliance obligations for users accessing the Platform from other jurisdictions"
        ],
        "Such updates may include modifications to user rights, obligations, fees, payment terms, platform usage rules, and dispute resolution procedures."
      ]
    },

    {
      subheading: "11.2 User Notification",
      content: [
        "When the Terms are updated, Aven Health will provide notice to users through one or more of the following methods:",
        {
          minorSubheading: "Notification Methods",
          content: [
            {
              minorMinorSubheading: "1. In-App Notification",
              content: [
                "Users may receive a notification or prompt upon login requiring acknowledgment of the updated Terms before continuing to use the Platform."
              ]
            },
            {
              minorMinorSubheading: "2. Email Notification",
              content: [
                "If a user has registered an email address with Aven Health, a summary of the changes, along with a link to the full updated Terms, will be sent to the registered email."
              ]
            },
            {
              minorMinorSubheading: "3. Effective Date Display",
              content: [
                "The updated Terms will clearly display the “Effective Date” at the top of the document to indicate when the changes come into effect."
              ]
            }
          ]
        },
        "Users are strongly encouraged to review the updated Terms each time they receive a notification.",
        "Continued use of the Platform after the Effective Date constitutes acceptance of the updated Terms."
      ]
    },

    {
      subheading: "11.3 User Obligations",
      content: [
        "By continuing to access or use the Platform after notification of changes:",
        [
          "You acknowledge that you have read, understood, and agreed to the updated Terms",
          "You accept that your continued use binds you to any new rights, responsibilities, and limitations imposed by the updated Terms",
          "If you do not agree with the changes, you must stop using the Platform and may delete your account in accordance with the Account Deletion provisions (Section 9)"
        ]
      ]
    },

    {
      subheading: "11.4 Material Changes",
      content: [
        "For material changes, including amendments to:",
        [
          "Payment obligations, fees, or refund policies",
          "User privacy rights or data usage",
          "Health service delivery or professional responsibilities",
          "Legal disclaimers, limitation of liability, or dispute resolution procedures"
        ],
        "Aven Health may provide enhanced notice that may include:",
        [
          "Prominent in-app banners or notifications requiring explicit acknowledgment",
          "Direct emails summarizing key changes",
          "Additional guidance or FAQs to clarify the impact of updates on users"
        ],
        "Material changes will take effect only after a notice period, allowing users reasonable time to review and, if necessary, discontinue use."
      ]
    },

    {
      subheading: "11.5 Binding Effect",
      content: [
        "All updates made in accordance with this section are binding on users from the Effective Date.",
        "Users who continue to use the Platform after updates are deemed to have consented to and accepted the updated Terms in their entirety."
      ]
    }
  ]
}
  ];

  const links = [
    { name: "View User Privacy Policy", route: "/privacy-policy" }
  ];

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center">
      <LegalCard
        title="User Agreement"
        icon={<FaFileContract className="text-yellow-500" />}
        sections={sections}
        links={links}
      />
    </div>
  );
};

export default UserAgreement;