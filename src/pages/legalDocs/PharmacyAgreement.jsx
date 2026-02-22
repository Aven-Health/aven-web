import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import LegalCard from "../../components/LegalCard";

const PharmacyAgreement = () => {
  const sections = [
    {
      heading: "1. Introduction & Relationship",
      content: [
        "This Health Store Agreement (“Agreement”) sets forth the terms and conditions governing the use of the Aven Health platform (“Platform”) by licensed pharmacies, health stores, and allied healthcare retailers (collectively, “Health Stores”). By registering on or accessing the Platform, Health Stores agree to comply with these terms, which establish the legal, operational, and ethical framework for offering products, fulfilling orders, and interacting with Platform users.",
      ],
      subheading: "1.1 Purpose of the Agreement",
      content: [
        "This Agreement defines:",
        [
          "The rights, responsibilities, and obligations of Health Stores using the Platform.",
          "Rules for product listings, order fulfillment, payment processing, and customer communication.",
          "Compliance with applicable healthcare, telemedicine, and regulatory requirements.",
        ],
        "The Agreement ensures that Health Stores operate in a professional, lawful, and transparent manner while maintaining data privacy, customer trust, and Platform integrity.",
      ],
    },
    {
      subheading: "1.2 Independent Contractor Status",
      content: [
        "Health Stores acknowledge and agree that:",
        [
          "They are independent business operators, not employees, agents, partners, or representatives of Aven Health.",
          "All operational decisions—including product selection, pricing, inventory management, and fulfillment processes—are the sole responsibility of the Health Store.",
          "Health Stores are solely responsible for regulatory compliance, professional licensing, business permits, and applicable tax obligations.",
        ],
      ],
    },
    {
      subheading: "1.3 No Employment or Agency Relationship",
      content: [
        "Nothing in this Agreement creates an employment relationship between Aven Health and the Health Store.",
        [
          "Health Stores are not entitled to employee benefits, insurance coverage, or other privileges associated with employment by Aven Health.",
          "Health Stores shall not present themselves as employees, agents, or representatives of Aven Health outside the scope of this Agreement.",
        ],
      ],
    },
    {
      subheading: "1.4 Platform Facilitation Role",
      content: [
        "Aven Health operates solely as a technology and facilitation platform. The Platform:",
        [
          "Provides infrastructure for product listings, order management, payments, and customer communications.",
          "Ensures secure processing of transactions through integrated payment processors.",
          "Hosts Health Store data, subject to the Privacy Policy and applicable regulations.",
          "Provides analytics and operational dashboards to support store performance.",
        ],
        "Limitations of Platform Role:",
        [
          "Aven Health does not control the inventory, pricing, or fulfillment practices of Health Stores.",
          "Aven Health does not provide clinical advice or guarantee the safety or efficacy of products sold.",
          "All regulatory, compliance, and customer service obligations remain with the Health Store.",
        ],
      ],
    },
    {
      subheading: "1.5 Summary Statement",
      content: [
        "Health Stores using Aven Health acknowledge that they operate as independent business entities.",
        "The Platform serves solely to facilitate marketplace operations, payment processing, and order management.",
        "By using the Platform, Health Stores agree to act lawfully, ethically, and in full compliance with applicable healthcare, business, and regulatory standards.",
      ],
    },
    {
      heading: "2. Eligibility & Licensing Requirements",
      content: [
        "This section establishes comprehensive legal, professional, and operational requirements that Health Stores must satisfy to register and operate on the Aven Health Platform. Compliance is mandatory to ensure lawful participation, protect patients and customers, and maintain adherence to Kenyan healthcare, pharmaceutical, and business regulations. Non-compliance may result in immediate suspension, termination, or other enforcement actions.",
      ],
      subheading: "2.1 Valid Pharmacy or Health Store License",
      content: [
        {
          minorSubheading: "Mandatory Licensing Requirements",
          content: [
            "Health Stores must hold a current, valid license to operate legally in Kenya as a pharmacy, health store, or allied healthcare retailer.",
            "Acceptable licenses include, but are not limited to:",
            [
              "Pharmacy license issued by the Pharmacy and Poisons Board (PPB) for dispensing prescription or controlled medicines.",
              "Retailer or wholesaler licenses for herbal, wellness, or allied health products, if applicable.",
              "Any other regulatory or professional permit required under Kenyan law to sell health-related products.",
            ],
          ],
        },
        {
          minorSubheading: "Registration and Documentation",
          content: [
            "Health Stores must submit complete documentation for verification, including:",
            [
              "Scanned or digital copies of licenses and certifications issued by regulatory authorities.",
              "Business registration certificate issued by Kenya’s Registrar of Companies, where applicable.",
              "Special permits for controlled substances, scheduled drugs, or restricted health products.",
              "Evidence of compliance with safety, sanitation, and storage standards.",
            ],
          ],
        },
        {
          minorSubheading: "Verification Examples",
          content: [
            {
              minorMinorSubheading: "Licensed Pharmacy",
              content: [
                "A licensed pharmacy dispensing antibiotics must provide:",
                [
                  "A valid PPB license",
                  "Business registration certificate",
                  "Evidence of compliance with storage and handling regulations (temperature-controlled storage, secure access, and inventory management)",
                ],
              ],
            },
            {
              minorMinorSubheading: "Herbal Health Store",
              content: [
                "An herbal health store must provide:",
                [
                  "Retail license for herbal products",
                  "Evidence of product safety compliance (no prohibited substances, accurate labeling, ingredient transparency)",
                ],
              ],
            },
          ],
        },
        {
          minorSubheading: "Platform Action",
          content: [
            "Registration is contingent upon verification of all credentials. Incomplete, fraudulent, or expired documentation will result in account suspension until corrected.",
          ],
        },
      ],
    },
    {
      subheading: "2.2 Regulatory Compliance Obligations",
      content: [
        "Health Stores are required to comply with all relevant Kenyan legislation, professional standards, and regulatory guidelines at all times, including but not limited to:",

        {
          minorSubheading: "Regulatory Framework Obligations",
          content: [
            {
              minorMinorSubheading: "Pharmacy and Poisons Act, Cap 244",
              content: [
                "Controls sale, storage, and distribution of medications; requires licensed personnel for prescription drugs; mandates proper recordkeeping of controlled substances.",
              ],
            },
            {
              minorMinorSubheading:
                "Kenya Medical Practitioners and Dentists Act, Cap 253",
              content: [
                "Governs interactions with healthcare professionals for prescription validation and professional oversight.",
              ],
            },
            {
              minorMinorSubheading: "Data Protection Act, 2019",
              content: [
                "Governs the collection, storage, and processing of personal data (patients/customers) with explicit consent; ensures confidentiality and security.",
              ],
            },
            {
              minorMinorSubheading: "Consumer Protection Act, 2012",
              content: [
                "Ensures truthful advertising, prevents misleading claims, and requires safe product supply.",
              ],
            },
            {
              minorMinorSubheading:
                "Food, Drugs, and Chemical Substances Regulations",
              content: [
                "Mandates proper labeling, safe product formulations, and compliance with import/export or distribution rules.",
              ],
            },
          ],
        },

        {
          minorSubheading: "Operational Compliance Requirements",
          content: [
            "Health Stores must adhere to the following operational standards:",
            [
              "Product Handling: Safe storage of medications or health products, including temperature control, expiry tracking, and restricted access to controlled substances.",
              "Prescription Validation: Verification of prescriptions before dispensing regulated medicines.",
              "Accurate Labeling and Packaging: All products must be labeled with ingredients, dosage, warnings, expiration dates, and manufacturer information.",
              "Ethical Marketing: Health Stores must not make false health claims or advertise prescription-only products directly to customers.",
            ],
          ],
        },
      ],
      example:
        "A pharmacy selling insulin must ensure cold-chain storage, verify patient prescriptions, and accurately label each vial with dosage instructions. Failure to comply may trigger regulatory action and Platform suspension.",
    },
    {
      subheading: "2.3 Verification and Auditing of Credentials",
      content: [
        {
          minorSubheading: "Ongoing Verification",
          content: [
            "Aven Health reserves the right to verify, audit, and request renewal of Health Store licenses at any time.",
            "Verification may include:",
            [
              "Direct confirmation with regulatory authorities (PPB or Ministry of Health)",
              "On-site inspection reports",
              "Requesting updated compliance certificates",
            ],
          ],
        },
        {
          minorSubheading: "Consequences of Non-Compliance",
          content: [
            "Health Stores failing to comply with verification or regulatory obligations may face:",
            [
              "Temporary suspension of account and order fulfillment privileges",
              "Removal of product listings or visibility on the Platform",
              "Permanent termination of account for repeated non-compliance or fraudulent documentation",
            ],
          ],
        },
      ],
      example:
        "If a health store’s PPB license is revoked due to safety violations, Aven Health may immediately suspend its account and remove its listings until compliance is restored.",
    },
    {
      subheading: "2.4 Ongoing Licensing Obligations",
      content: [
        {
          minorSubheading: "Duty to Maintain Credentials",
          content: [
            "Health Stores must continuously maintain all licenses, certifications, and regulatory approvals required to operate.",
            "Any lapse, suspension, or revocation of licenses must be reported to Aven Health immediately, along with corrective action plans.",
          ],
        },
        {
          minorSubheading: "Notification Requirements",
          content: [
            "Health Stores must notify the Platform of:",
            [
              "License renewal, suspension, or revocation",
              "Investigations or sanctions by regulatory authorities",
              "Ownership, management, or operational changes affecting compliance",
            ],
          ],
        },
        {
          minorSubheading: "Material Breach",
          content: [
            "Failure to maintain or report valid licenses constitutes a material breach of this Agreement, allowing Aven Health to suspend or terminate the account without prior notice.",
          ],
        },
      ],
      example:
        "If a pharmacy undergoes a change of ownership, the new owner must submit updated licenses within 7 days. Failure to do so results in suspension of all orders until verification is complete.",
    },
    {
      subheading: "2.5 Summary Statement",
      content: [
        "By registering on the Aven Health Platform, Health Stores:",
        [
          "Confirm they hold all required licenses and permits to operate legally in Kenya.",
          "Acknowledge their ongoing responsibility to maintain regulatory compliance and update credentials as required.",
          "Understand that failure to maintain compliance, provide accurate documentation, or adhere to Kenyan law may result in account suspension, removal from the Platform, or permanent termination.",
        ],
        "This section ensures that only legally compliant and professionally responsible Health Stores can operate on the Platform, thereby protecting patient safety, data privacy, and the integrity of the Aven Health marketplace.",
      ],
    },
    {
      heading: "3. Account Registration & Verification",
      content: [
        "This section governs the process, responsibilities, and verification requirements for Health Stores registering on the Aven Health Platform. It establishes the obligations of Health Stores to provide accurate information, submit required documentation, and maintain compliance, as well as Aven Health’s rights to verify, audit, or suspend accounts to ensure legal, professional, and operational integrity.",
      ],
    },
    {
      subheading: "3.1 Accurate Information Requirement",
      content: [
        "Health Stores must provide complete, accurate, and up-to-date information during registration and throughout their use of the Platform. Required information includes, but is not limited to:",
        [
          "Legal business name and trade name",
          "Physical business address and operational locations",
          "Authorized contact persons (emails, phone numbers)",
          "Business registration number",
          "Regulatory licenses and permits (e.g., PPB license, retail license for herbal products)",
          "Bank account or payment details for order settlements",
        ],
        "Health Stores must immediately update the Platform if any information changes, including:",
        [
          "Change of ownership, management, or operational address",
          "Change in contact details or authorized personnel",
          "Change in banking information or payment processors",
          "Expiration, renewal, suspension, or revocation of licenses or permits",
        ],
        "Failure to provide accurate information constitutes a material breach of this Agreement and may result in suspension, removal of listings, or permanent termination.",
        {
          example:
            "If a pharmacy relocates to a new facility, it must update the business address in the Platform system before processing new orders. Orders processed with outdated information may be canceled or flagged for compliance review.",
        },
      ],
    },
    {
      subheading: "3.2 Documentation Submission",
      content: [
        "Health Stores are required to submit all documentation necessary to verify eligibility and compliance. This includes:",
        [
          "Scanned or digital copies of licenses and certifications issued by regulatory authorities",
          "Business registration certificate",
          "Permits for controlled substances, scheduled drugs, or restricted products",
          "Safety and storage compliance evidence (e.g., temperature-controlled storage logs, security procedures)",
        ],
        "All documents must be authentic, current, and verifiable. Aven Health reserves the right to request additional supporting documentation at any time, including:",
        [
          "Inspection reports",
          "Proof of professional training or staff qualifications",
          "Certificates of compliance with safety, sanitation, or packaging standards",
        ],
        {
          example: [
            "If a pharmacy wishes to sell prescription antibiotics, it must provide:",
            [
              "A valid PPB license",
              "Business registration certificate",
              "Evidence of proper cold-chain storage for medications",
            ],
            "Incomplete or fraudulent documentation may delay account activation, restrict order processing, or result in account suspension until verification is complete.",
          ],
        },
      ],
    },
    {
      subheading: "3.3 Right of Aven Health to Verify, Audit, or Suspend",
      content: [
        "Aven Health has the right to verify, audit, and review Health Store accounts at any time to ensure ongoing compliance with legal, regulatory, and operational requirements. Verification methods may include:",
        [
          "Cross-checking licenses and permits with regulatory authorities (e.g., PPB, Ministry of Health)",
          "Auditing submitted documentation for authenticity and completeness",
          "Requesting updated documentation for expiring licenses or permits",
          "Conducting physical or virtual inspections of storage, facilities, and inventory handling procedures",
        ],
        "If a Health Store fails verification or is found non-compliant, Aven Health may:",
        [
          "Temporarily suspend the account, preventing new orders or fulfillment",
          "Restrict access to certain Platform features",
          "Remove listings or products until compliance is restored",
          "Permanently terminate the account for repeated violations, fraudulent submissions, or regulatory breaches",
        ],
        {
          example:
            "If a store submits a PPB license that has expired or been revoked, Aven Health may immediately suspend the account and block order processing until a valid license is submitted and verified.",
        },
        "All Health Stores acknowledge and accept that verification and auditing are essential for legal compliance, customer safety, and Platform integrity, and consent to Aven Health exercising these rights at any time.",
      ],
    },

    {
      heading: "4. Product Listings & Compliance",
      content: [
        "This section governs the listing, description, handling, and compliance obligations of products offered by Health Stores on the Aven Health Platform. It ensures that all products are represented accurately, fulfill regulatory requirements, and protect patient/customer safety.",
      ],
    },
    {
      subheading: "4.1 Accurate Product Descriptions",
      content: [
        "Health Stores must provide complete, truthful, and accurate information for every product listed on the Platform. Product listing information must include, where applicable:",
        [
          "Product name and brand",
          "Manufacturer and country of origin",
          "Active ingredients, dosage, concentration, and form (e.g., tablet, syrup, cream)",
          "Indications and usage instructions",
          "Expiry date and batch/lot numbers",
          "Storage requirements (e.g., refrigerated, room temperature)",
          "Prescription requirements, if applicable",
        ],
        "Misrepresentation of products, including exaggeration of effects or omission of important information, is strictly prohibited and may result in immediate removal of listings or account suspension.",
        {
          example:
            "A store selling multivitamins must accurately display the vitamin composition, dosage instructions, expiration date, and manufacturer. Claims such as “cures diabetes” would be prohibited.",
        },
      ],
    },
    {
      subheading: "4.2 Proper Labeling Requirements",
      content: [
        "All products must comply with Kenyan labeling laws, including requirements under:",
        [
          "Pharmacy and Poisons Act, Cap 244",
          "Food, Drugs, and Chemical Substances Regulations",
          "Kenya Bureau of Standards (KEBS) labeling guidelines",
        ],
        "Labels must clearly include:",
        [
          "Product name and generic name (if applicable)",
          "Ingredients and composition",
          "Dosage instructions and warnings",
          "Expiration or best-before dates",
          "Manufacturer or distributor information",
          "Storage conditions and safety precautions",
        ],
        "Packaging and labeling must prevent tampering, contamination, or misidentification.",
        {
          example:
            "A health store selling antibiotics must provide a label with the generic name, manufacturer, dosage schedule, storage instructions (e.g., “store below 25°C”), and warning statements about completing the course.",
        },
      ],
    },
    {
      subheading: "4.3 Prescription-Only Medication Rules",
      content: [
        "Health Stores may only list and dispense prescription-only medicines if:",
        [
          "They hold a valid PPB license permitting the sale of prescription medications",
          "The customer provides a valid prescription from a licensed healthcare professional",
          "The prescription is verified for authenticity and accuracy",
        ],
        "The Platform may implement features to verify prescriptions digitally before allowing order fulfillment.",
        "Health Stores must refuse to dispense prescription medications if verification fails, the prescription is invalid, or the order violates applicable law.",
        {
          example:
            "A customer orders a controlled antibiotic. The store must check the uploaded prescription against the healthcare provider’s details and ensure the prescription is valid for that specific patient.",
        },
      ],
    },
    {
      subheading: "4.4 Prohibited Products",
      content: [
        "Health Stores may not list or sell the following without express legal authorization:",
        [
          "Narcotics or controlled substances not approved for sale",
          "Psychoactive or restricted chemicals",
          "Products banned by Kenyan law or international treaties",
          "Counterfeit, expired, or unregistered drugs",
          "Products that pose safety risks without proper regulatory approval",
        ],
        "Listing prohibited products constitutes a material breach and may trigger immediate suspension, legal action, or termination of Platform access.",
        {
          example:
            "A store attempting to sell heroin or an unregistered stimulant product would face immediate removal of listings and possible reporting to the relevant authorities.",
        },
      ],
    },
    {
      subheading: "4.5 Compliance with Pharmaceutical Laws",
      content: [
        "Health Stores must ensure all listings comply with all applicable Kenyan laws and regulations, including:",
        [
          "Pharmacy and Poisons Act, Cap 244 – legal sale, distribution, and storage of medicines",
          "Kenya Medical Practitioners and Dentists Act, Cap 253 – interactions with healthcare professionals for prescription verification",
          "Data Protection Act, 2019 – handling patient prescriptions and personal information securely",
          "Consumer Protection Act, 2012 – truthful advertising and safe product supply",
        ],
        "Health Stores are responsible for:",
        [
          "Maintaining proper storage conditions for medications and health products",
          "Ensuring regulatory reporting obligations are met (e.g., controlled substance logs, stock reporting)",
          "Preventing unauthorized access to prescription or patient data",
        ],
        {
          example:
            "A store selling vaccines must adhere to cold-chain storage requirements, maintain proper dispensing records, and ensure accurate labeling as required by the PPB.",
        },
      ],
    },
    {
      subheading: "4.6 Platform Enforcement Rights",
      content: [
        "Aven Health reserves the right to:",
        [
          "Review, approve, or reject product listings for compliance",
          "Remove non-compliant products or listings",
          "Temporarily or permanently suspend Health Store accounts for repeated violations",
        ],
        "Health Stores agree to comply with Platform directives for product compliance and cooperate with audits or inspections.",
        {
          example:
            "If a listed herbal supplement contains prohibited substances, Aven Health may remove the product, notify regulatory authorities, and suspend the store’s account until compliance is restored.",
        },
      ],
    },
    {
      heading: "5. Prescription Handling",
      content: [
        "This section governs the handling, verification, and dispensing of prescriptions by Health Stores on the Aven Health Platform. It defines the responsibilities of pharmacies for validating prescriptions, maintaining documentation, ensuring authenticity, and interacting with healthcare professionals while protecting patient safety and complying with Kenyan law.",
        "The Platform organizes prescriptions by product categories, ensuring that prescription rendering and order processing are tailored to the type of product being requested. Categories may include, for example: antibiotics, chronic disease medications, controlled substances, over-the-counter prescription-only items, and specialized health products. The type of prescription dictates validation, fulfillment workflow, and verification requirements.",
      ],
    },
    {
      subheading: "5.1 Prescription Validation Obligations",
      content: [
        "Health Stores are solely responsible for verifying all prescriptions prior to dispensing any prescription-only medication.",
        "Dispensing without proper validation is strictly prohibited and may result in account suspension, regulatory enforcement, or legal liability.",
        "Validation must include confirming:",
        [
          "Legitimacy of the prescribing professional",
          "Appropriateness of the medication for the patient and product category",
          "Completeness and accuracy of prescription details (drug, dosage, quantity, instructions)",
        ],
        {
          example:
            "If a prescription for insulin (chronic disease medication category) is uploaded, the pharmacy must confirm correct cold-chain handling, verify the prescriber is licensed, and ensure the dosage matches the prescription.",
        },
      ],
    },
    {
      subheading: "5.2 Types of Prescriptions on the Platform",
      content: [
        "The Aven Health Platform supports three prescription types, all of which must be processed according to the relevant product category.",

        {
          minorSubheading: "5.2.1 External Prescriptions (Images)",
          content: [
            "Submitted by users as scanned images or photographs of physical prescriptions.",
            "Health Stores must carefully verify:",
            [
              "Legibility and authenticity of the document",
              "Correct patient details for the product category",
              "Validity of the prescriber’s license and signature",
            ],
            {
              minorMinorSubheading: "Category Note",
              content: [
                "Certain categories, such as controlled substances, may require additional verification or approval from a licensed professional before fulfillment.",
              ],
            },
          ],
        },

        {
          minorSubheading: "5.2.2 In-App Professional-Made Prescriptions",
          content: [
            "Created and issued within the Platform by licensed healthcare professionals.",
            "Prescriptions are end-to-end encrypted (E2EE) and securely transmitted to the Health Store.",
            "Health Stores cannot access decrypted content outside the Platform workflow.",
            "Verification requires:",
            [
              "Confirmation of professional credentials",
              "Assessment of prescription appropriateness for the patient and product category",
            ],
            "Health Stores must contact the professional in-app for clarifications before accepting or rejecting the order.",
            {
              minorMinorSubheading: "Category Note",
              content: [
                "Prescription rendering may differ by category. For example, controlled medications may trigger an additional validation step, whereas standard OTC prescription-only items may follow a simpler verification workflow.",
              ],
            },
          ],
        },

        {
          minorSubheading: "5.2.3 In-App User-Made Prescriptions",
          content: [
            "Generated by users in the Platform interface.",
            "Must be validated by the Health Store prior to dispensing.",
            "Validation may require:",
            [
              "Cross-checking with a licensed professional",
              "Direct communication with the prescriber if known",
            ],
            "Dispensing is prohibited if authenticity cannot be confirmed.",
            {
              minorMinorSubheading: "Category Note",
              content: [
                "Product categories influence how validation is handled. High-risk categories (e.g., narcotics or injectable medications) require stricter verification protocols compared to lower-risk categories.",
              ],
            },
          ],
        },
      ],
    },
    {
      subheading: "5.3 End-to-End Encryption and Data Security",
      content: [
        "All in-app prescriptions (professional-made and user-made) use E2EE.",
        "Decryption occurs only on authorized Health Store devices after secure authentication.",
        "Health Stores are responsible for:",
        [
          "Securing decrypted prescription data",
          "Using the data solely for order fulfillment within the product category workflow",
          "Avoiding external storage or sharing",
        ],
      ],
      example:
        "A prescription for an antibiotic is decrypted only for verification and dispensing. The encrypted data and audit logs are stored according to compliance requirements for the relevant category.",
    },
    {
      subheading: "5.4 Communication with Prescribers",
      content: [
        "Health Stores are required to communicate with the prescribing professional if:",
        [
          "Prescription details are unclear",
          "Dosage, quantity, or instructions require confirmation",
          "There is a potential safety risk",
        ],
        "Acceptance or rejection cannot occur without reasonable verification.",
        "All communication must occur through the Platform messaging system to maintain audit trails and comply with privacy regulations.",
      ],
      minorSubheading: "Category Note",
      content: [
        "For sensitive categories like controlled substances, communication may require additional documentation or approval before order fulfillment.",
      ],
    },
    {
      subheading: "5.5 Documentation and Retention",
      content: [
        "Health Stores must maintain records for all prescriptions according to:",
        [
          "Pharmacy and Poisons Act, Cap 244",
          "Professional record-keeping standards",
          "Platform retention policies",
        ],
        "Records must include:",
        [
          "Prescription type, date, prescriber, patient, and product category",
          "Verification steps taken",
          "Communication with prescribers",
          "Fulfillment actions and dispensing logs",
        ],
        "Data must be stored securely, access-restricted, and retained as required by law.",
      ],
      example:
        "A pharmacy dispenses a user-submitted prescription for a chronic medication. The encrypted prescription, verification messages, and dispensing logs are securely stored for the legally required retention period.",
    },
    {
      subheading: "5.6 Compliance and Liability",
      content: [
        "Dispensing without proper validation or failing to communicate for clarifications is a material breach of this Agreement.",
        "Health Stores assume full legal and professional liability for all prescription fulfillment, including errors, misdispensing, or regulatory violations.",
        "Aven Health is not liable for professional judgment, accuracy, or authenticity of prescriptions; liability rests with the Health Store and prescriber.",
      ],
      minorSubheading: "Category Note",
      content: [
        "The risk profile varies by product category; high-risk categories carry stricter compliance expectations, and Health Stores must adhere to these requirements fully.",
      ],
    },
    {
      heading: "6. Order Fulfillment Obligations",
      content: [
        "This section outlines the responsibilities of Health Stores in processing, dispensing, and delivering products ordered through the Aven Health Platform. It ensures that all orders are handled safely, accurately, and in compliance with regulatory, professional, and Platform standards. Health Stores are also given flexibility to set delivery fees and estimated delivery times while remaining accountable for service quality and legal compliance.",
      ],
    },
    {
      subheading: "6.1 Timely Order Processing",
      content: [
        "Health Stores must acknowledge new orders promptly upon receipt through the Platform.",
        "Orders must be processed within the timeframe specified in the Platform interface, considering product category and inventory availability.",
        "Delays must be communicated immediately to the customer via Platform notifications, providing reasons for the delay and expected fulfillment time.",
      ],
      example:
        "A customer orders a chronic medication. The pharmacy must confirm receipt within 30 minutes and provide an estimated dispatch time based on stock and category-specific handling requirements.",
    },
    {
      subheading: "6.2 Accurate Dispensing",
      content: [
        "Health Stores are responsible for dispensing exactly what was ordered, including:",
        [
          "Correct product",
          "Correct dosage or quantity",
          "Proper labeling and instructions",
        ],
        "Verification must be performed for all prescription-based orders, as per Section 5, with special attention to product category (e.g., controlled substances vs. over-the-counter prescription-only items).",
      ],
      example:
        "If a user orders antibiotics via an in-app professional prescription, the pharmacy must confirm the exact antibiotic, strength, and quantity match the prescription before dispensing.",
    },
    {
      subheading: "6.3 Safe Packaging",
      content: [
        "Health Stores must ensure that products are packaged securely and hygienically, preventing damage, contamination, or degradation during transit.",
        "Packaging must comply with category-specific requirements, including:",
        [
          "Temperature-sensitive packaging for cold-chain products (e.g., insulin, vaccines)",
          "Tamper-evident seals for prescription-only medications",
          "Childproof or safety packaging where legally required",
        ],
      ],
      example:
        "Insulin must be packaged with ice packs or insulated containers, clearly labeled with storage instructions, and delivered without compromising the cold chain.",
    },
    {
      subheading: "6.4 Compliance with Storage Standards",
      content: [
        "Health Stores are responsible for storing products according to legal and manufacturer standards, including:",
        [
          "Temperature, humidity, and light exposure controls",
          "Restricted access for controlled substances",
          "Regular inventory checks to remove expired or damaged items",
        ],
      ],
      example:
        "A pharmacy stocking narcotics must maintain a secure cabinet with restricted access and ensure proper temperature and logging for compliance.",
    },
    {
      subheading: "6.5 Delivery Coordination",
      content: [
        "Health Stores may set their own delivery fees for orders, which must be clearly displayed to the customer at checkout.",
        "Health Stores may also define estimated delivery times, subject to accuracy and feasibility, and must communicate any changes promptly.",
        "Coordination with delivery providers or internal logistics must ensure:",
        [
          "Accurate delivery addresses and recipient information",
          "Secure handling during transport",
          "Compliance with any regulatory or legal restrictions on the delivery of prescription-only or controlled products",
        ],
      ],
      example:
        "A pharmacy offering same-day delivery for chronic disease medications can set a fee of KES 500 and estimate a 3–4 hour delivery window. If unforeseen delays occur, the customer must be notified promptly.",
    },
    {
      subheading: "6.6 Recordkeeping and Auditability",
      content: [
        "Health Stores must maintain records of:",
        [
          "Order acceptance and processing times",
          "Dispensed product details (category, dosage, quantity)",
          "Packaging and delivery actions, including delivery provider information and timestamps",
        ],
        "Records must be securely stored and accessible for audit by Aven Health or regulatory authorities.",
      ],
      example:
        "A pharmacy delivers a prescription via a third-party courier. The pharmacy must log the order ID, product details, dispatch time, delivery provider, and delivery confirmation in the Platform dashboard.",
    },
    {
      subheading: "6.7 Accountability and Liability",
      content: [
        "Health Stores are fully liable for any errors in dispensing, packaging, or delivery, including:",
        [
          "Incorrect products or quantities",
          "Improper handling or storage",
          "Failure to meet delivery commitments",
        ],
        "Aven Health is not responsible for mistakes in order fulfillment, delivery, or storage.",
      ],
      example:
        "If a pharmacy mislabels a prescription-only medication and delivers it to the wrong patient, the pharmacy bears full legal and professional responsibility.",
    },
    {
      heading: "7. Cancellations, Refunds & Returns",
      content: [
        "This section governs the processes, responsibilities, and limitations relating to cancellations, refunds, and returns of orders processed through the Aven Health Platform. It ensures clarity for both Health Stores and customers while maintaining compliance with regulatory and safety requirements, particularly for prescription medications, controlled substances, and temperature-sensitive products.",
      ],
    },
    {
      subheading: "7.1 Customer-Initiated Cancellations",
      content: [
        "Health Stores must process cancellations initiated by customers according to product category and order status.",
      ],
    },
    {
      minorSubheading: "7.1.1 Cancellations Before Fulfillment",
      content: [
        "Customers may cancel an order prior to the Health Store dispatching the product.",
        "Refund eligibility depends on:",
        [
          "Order type (prescription vs. over-the-counter)",
          "Product category (e.g., controlled vs. non-controlled, temperature-sensitive)",
          "Platform-specified cancellation windows",
        ],
        "Upon valid cancellation:",
        [
          "The full payment may be refunded, minus any applicable processing or platform fees.",
          "Health Stores must update inventory immediately to reflect the cancellation.",
        ],
      ],
      example:
        "A user cancels an OTC supplement before dispatch. The full amount paid, minus KES 50 processing fee, is refunded to the original payment method.",
    },
    {
      minorSubheading: "7.1.2 Cancellations After Dispatch",
      content: [
        "Orders already dispatched may be canceled only under limited circumstances, such as:",
        [
          "Delivery failure",
          "Incorrect fulfillment",
          "Regulatory restrictions on the product",
        ],
        "Refunds for dispatched orders may be:",
        [
          "Partial, if delivery fees or handling costs apply",
          "Full, if the product cannot legally or safely be delivered",
        ],
        "Health Stores must coordinate return of the product if possible, ensuring safe handling and compliance with storage requirements.",
      ],
      example:
        "A user cancels an insulin order after dispatch. The product must be returned under cold-chain conditions, and the refund will cover the product cost but exclude delivery expenses.",
    },
    {
      subheading: "7.2 Store-Initiated Cancellations",
      content: [
        "Health Stores may cancel orders for legitimate operational or regulatory reasons. The Platform requires immediate notification to the customer and initiation of refunds.",
      ],
    },
    {
      minorSubheading: "7.2.1 Out-of-Stock or Inventory Errors",
      content: [
        "Health Stores must cancel the order and notify the customer immediately.",
        "Refunds must be processed promptly, and inventory records updated to prevent repeated errors.",
      ],
      example:
        "A customer orders a specific brand of multivitamins, but stock is exhausted. The pharmacy cancels the order and initiates a refund.",
    },
    {
      minorSubheading: "7.2.2 Invalid Prescription or Regulatory Restrictions",
      content: [
        "Orders with prescriptions that fail validation or are illegal to dispense must be canceled.",
        "Health Stores are obligated to communicate the reason clearly to the customer via the Platform.",
        "Refunds must cover the full order amount, excluding platform processing fees if applicable.",
      ],
      example:
        "A user uploads a prescription for a controlled antibiotic that does not meet legal dispensing requirements. The store cancels the order and issues a full refund.",
    },
    {
      minorSubheading: "7.2.3 Compliance or Safety Issues",
      content: [
        "If dispensing a product would violate regulatory, professional, or safety standards, the Health Store may cancel the order.",
        "Documentation of the cancellation and reason must be logged in the Platform for audit purposes.",
      ],
      example:
        "A temperature-sensitive vaccine cannot be delivered due to equipment failure. The order is canceled, and a full refund is issued.",
    },
    {
      subheading: "7.3 Refund Procedures",
      content: [
        "Health Stores must process refunds in a timely, accurate, and compliant manner.",
      ],
    },
    {
      minorMinorSubheading: "7.3.1 Timelines",
      content: [
        "Refunds must be initiated within 24–48 hours of order cancellation or return approval.",
        "The refund process may take additional business days depending on the payment provider or banking system.",
      ],
    },
    {
      minorMinorSubheading: "7.3.2 Payment Reversals",
      content: [
        "Refunds are processed through the original payment method whenever possible.",
        "For third-party payments (mobile money, card, digital wallets), Health Stores must provide correct payment details to enable reversal.",
      ],
    },
    {
      minorMinorSubheading: "7.3.3 Responsibility for Refund Costs",
      content: [
        "Health Stores are generally responsible for the cost of product refunds unless the cancellation is due to Platform error.",
        "Delivery fees may be deducted from the refund where legally permissible and clearly communicated at the time of order.",
      ],
      example:
        "A customer cancels a delivery of herbal supplements before dispatch. The store initiates a full refund minus the delivery fee of KES 100.",
    },
    {
      subheading: "7.4 Non-Returnable Items",
      content: [
        "Certain products cannot be returned due to safety, legal, or hygiene reasons. Health Stores must clearly indicate non-returnable items on the Platform. These include:",
        [
          "Opened or partially used medications",
          "Temperature-sensitive products (e.g., insulin, vaccines, refrigerated medicines)",
          "Prescription-only medications that cannot legally be resold or reused",
        ],
      ],
      example:
        "A user opens a bottle of prescription antibiotics. The product cannot be returned or refunded for safety and regulatory compliance.",
    },
    {
      subheading: "7.5 Logging and Audit Requirements",
      content: [
        "All cancellations, refunds, and returns must be logged in the Platform system with timestamps, order ID, reason for cancellation, and refund status.",
        "These records must be securely stored for audit, regulatory compliance, and dispute resolution purposes.",
      ],
    },
    {
      heading: "8. Payments & Fees",
      content: [
        "This section governs the financial transactions between customers, Health Stores, and Aven Health on the Platform. It defines how payments are processed, the applicable fees and commissions, timelines for payout, and procedures for handling disputes or chargebacks. Clear financial rules ensure transparency, accountability, and compliance with applicable laws.",
      ],
    },
    {
      subheading: "8.1 Payment Processing",
      content: [
        "All customer payments for products ordered through the Platform are processed securely via Paystack, an authorized third-party payment processor.",
        "Health Stores do not directly handle customer payments, except for agreed-on cash-on-delivery options if offered on the Platform.",
        "Payment methods include:",
        [
          "Mobile money (M-Pesa, Airtel Money)",
          "Debit and credit cards",
          "Digital wallets integrated through Paystack",
        ],
        "Security Measures:",
        [
          "All transactions are encrypted and comply with PCI DSS standards.",
          "Financial data shared with Health Stores is limited to amounts, transaction IDs, and relevant payout information.",
        ],
      ],
    },
    {
      subheading: "8.2 Platform Commission Structure",
      content: [
        "Aven Health charges a commission of 4.8% on the total value of each product sold through the Platform.",
        "The commission is automatically deducted from the payment received before any payout to the Health Store.",
      ],
      example:
        "If a product is sold for KES 1,000, Aven Health retains KES 48 as commission, and the remaining KES 952 is eligible for payout.",
    },
    {
      minorSubheading: "Notes",
      content: [
        "Commission is calculated per product, not per order.",
        "Any applicable platform or processing fees charged by Paystack are separate from the Aven Health commission.",
      ],
    },
    {
      subheading: "8.3 Payout Timelines and Conditions",
      content: [
        "Payments are released to the Health Store only after the order is confirmed delivered by both parties:",
        [
          "Confirmation by the customer (receipt acknowledgment on the Platform or delivery confirmation)",
          "Confirmation by the Health Store that the product was dispatched according to the order",
        ],
        "Payout schedules:",
        [
          "Daily, weekly, or as specified in the Health Store account settings",
          "Delays in confirmation may result in postponement of payout",
        ],
      ],
      example:
        "A user receives a multivitamin order and confirms delivery via the Platform. The pharmacy’s account will then be credited with the product value minus the 4.8% commission.",
    },
    {
      subheading: "8.4 Handling Chargebacks and Disputes",
      content: [
        "In the event of chargebacks, payment reversals, or disputes initiated by the customer:",
        [
          "The Health Store is required to cooperate with Aven Health and the payment processor to provide documentation of order fulfillment, delivery confirmation, and transaction details.",
          "The disputed amount may be temporarily withheld from payout until resolution.",
          "Any chargeback fees or penalties imposed by the payment processor may be the responsibility of the Health Store, depending on the circumstances of the dispute.",
        ],
      ],
      example:
        "A customer claims non-delivery of an OTC product. The pharmacy must provide proof of dispatch and delivery confirmation. If verified, the payout is released; if unverified, the payout is withheld and subject to dispute resolution.",
    },
    {
      subheading: "8.5 Transparency and Record-Keeping",
      content: [
        "Health Stores can view all transactions, commissions, payouts, and pending payments through the Platform dashboard.",
        "Records must be maintained for audit purposes and to comply with tax and regulatory requirements.",
        "Any discrepancies must be reported to Aven Health within 7 calendar days of transaction completion for timely resolution.",
      ],
    },

    {
      heading: "9. Professional Conduct & Platform Use",
      content: [
        "This section defines the standards of professional behavior, marketing practices, and platform interaction that Health Stores must follow while using the Aven Health Platform. It is designed to protect patients, maintain the integrity of the Platform, and ensure compliance with Kenyan law and healthcare regulations.",
      ],
    },
    {
      subheading: "9.1 Accurate and Truthful Representation",
      content: [
        "Health Stores must represent themselves, their services, and products truthfully at all times. This includes:",
        [
          "Using the correct legal business name, trade name, and registration details.",
          "Providing accurate descriptions of products, including ingredients, uses, warnings, and restrictions.",
          "Avoiding exaggerated or misleading health claims about medications, supplements, or medical devices.",
        ],
      ],
      example:
        "A pharmacy may advertise a vitamin supplement as supporting immune health but cannot claim it cures or prevents diseases unless explicitly approved by Kenyan regulatory authorities.",
    },
    {
      subheading: "9.2 Compliance with Legal Advertising Standards",
      content: [
        "Health Stores must adhere to Kenyan regulations regarding healthcare and pharmaceutical advertising, including:",
        {
          minorSubheading: "Applicable Legislation",
          content: [
            "Pharmacy and Poisons Act, Cap 244 – restricts promotion of prescription medicines directly to consumers. Only authorized advertisements of OTC products are permitted.",
            "Medical Practitioners and Dentists Act, Cap 253 – governs advertising by medical institutions, prohibiting false or misleading claims regarding treatment outcomes.",
            "Consumer Protection Act, 2012 – requires truthful, transparent, and non-deceptive marketing.",
          ],
        },
        {
          minorSubheading: "Permitted Marketing Practices for Health Stores",
          content: [
            "Advertising over-the-counter (OTC) products, wellness items, and general health products with truthful claims.",
            "Promoting the availability of services (e.g., home delivery, consultation support, immunizations) in a factual manner.",
            "Sharing educational content about health products or preventive care without making unverified therapeutic claims.",
            "Using Platform-provided badges or verified store indicators to show legitimacy, without implying endorsement by Aven Health beyond participation.",
          ],
        },
        {
          minorSubheading: "Restricted or Prohibited Practices",
          content: [
            "Direct promotion of prescription-only medicines to customers without a valid prescription.",
            "Making false, exaggerated, or unverified claims about a product’s efficacy, safety, or disease-curing abilities.",
            "Soliciting patients to purchase products off the Platform, bypassing Aven Health systems.",
            "Implying partnership, sponsorship, or approval from Aven Health beyond the normal store listing.",
          ],
        },
      ],
      example:
        "A hospital can advertise its radiology services with factual statements such as “MRI scans available daily,” but cannot claim “Guaranteed early detection of all cancers” unless substantiated by evidence and regulatory approval.",
    },
    {
      subheading: "9.3 Ethical Marketing and Communication",
      content: [
        "Health Stores must ensure that all communications with Platform users:",
        [
          "Are professional, courteous, and respectful.",
          "Do not harass, pressure, or mislead customers into purchasing products.",
          "Maintain patient confidentiality and comply with Data Protection Act, 2019 when discussing patient-specific matters.",
        ],
      ],
      example:
        "When notifying customers of a prescription refill, the pharmacy may use neutral language like “Your prescribed medication is ready for collection or delivery” but cannot include marketing statements about unrelated products.",
    },
    {
      subheading: "9.4 Prohibition on Off-Platform Solicitation",
      content: [
        "Health Stores are strictly prohibited from:",
        [
          "Contacting users directly to solicit sales outside the Aven Health Platform.",
          "Offering incentives to bypass the Platform for ordering or delivery.",
          "Using customer data obtained via the Platform for independent marketing purposes.",
        ],
        "Purpose: This ensures patient safety, data privacy, and fair marketplace practices, and prevents circumvention of Aven Health’s commission and dispute resolution mechanisms.",
      ],
      example:
        "A store cannot message a patient who ordered medication through the Platform and offer to sell future orders at a discounted rate outside the Platform.",
    },
    {
      subheading: "9.5 Monitoring and Enforcement",
      content: [
        "Aven Health may monitor listings, advertisements, and communications for compliance with this Section.",
        "Violations may result in:",
        [
          "Warning notifications and mandatory correction of content.",
          "Temporary suspension of Platform access.",
          "Permanent removal from the Platform for repeated or serious breaches.",
        ],
        "Health Stores are responsible for ensuring all employees, agents, or representatives follow these rules when using the Platform.",
      ],
    },
    {
      subheading: "9.6 Summary of Legal Advertising for Health Stores",
      content: [
        "Permitted marketing activities:",
        [
          "OTC product promotion",
          "Factual service availability",
          "Educational content",
        ],
        "Prohibited marketing activities:",
        [
          "Prescription drug marketing",
          "False claims",
          "Off-platform solicitation",
          "Misleading advertising",
        ],
        "Requirement: All marketing must comply with Kenyan pharmaceutical, healthcare, and consumer protection laws.",
      ],
    },
    {
      heading: "10. Data Protection Obligations",
      content: [
        "This section establishes the responsibilities of Health Stores for handling, securing, and protecting all patient and customer data collected, accessed, or processed through the Aven Health Platform. Compliance is mandatory under Kenyan law, including the Data Protection Act, 2019, and ensures patient confidentiality, platform integrity, and legal accountability.",
      ],
    },
    {
      subheading: "10.1 Secure Handling of Patient Data",
      content: [
        "Health Stores must implement strict measures to protect patient and customer data at all stages, including collection, processing, storage, transmission, and disposal. Responsibilities include:",
        [
          "Access Control: Restrict access to patient data only to authorized personnel involved in order fulfillment, prescription verification, or regulatory compliance.",
          "Data Minimization: Only collect and use the data strictly necessary to process orders or dispense medications.",
          "Transmission Security: Use secure, encrypted channels (as provided by Aven Health) for all communications involving patient information.",
          "Storage: Store patient data in secure systems with role-based access and prevent unauthorized duplication, sharing, or exposure.",
        ],
      ],
      example:
        "When a user submits a prescription, the pharmacy decrypts it solely for verification and dispensing; data should not be downloaded, emailed, or stored on unsecured devices.",
    },
    {
      subheading: "10.2 Confidentiality Obligations",
      content: [
        "Health Stores are legally and contractually obligated to maintain the confidentiality of all patient information, including:",
        [
          "Prescription details (external or in-app)",
          "Order history and product requests",
          "Contact information and personal identifiers",
          "Payment and insurance information",
        ],
        "Stores must not disclose any patient data to third parties except as required for:",
        [
          "Fulfillment of the order (delivery services, payment processors)",
          "Regulatory compliance (government authorities, professional audits)",
          "Lawful investigation of suspected fraud or safety concerns",
        ],
      ],
      example:
        "A pharmacy may share prescription information with a delivery partner only for the purpose of safe and accurate delivery, but cannot use it for marketing purposes.",
    },
    {
      subheading: "10.3 Prohibition on Data Resale or Misuse",
      content: [
        "Health Stores are strictly prohibited from:",
        [
          "Selling, leasing, or otherwise commercializing patient or customer data.",
          "Using data for off-platform marketing, promotions, or targeting unrelated products.",
          "Sharing patient data with third parties without explicit patient consent or legal requirement.",
        ],
      ],
      example:
        "Using a patient’s prescription history to advertise unrelated supplements directly to them via SMS or WhatsApp outside the Platform is strictly prohibited.",
    },
    {
      subheading: "10.4 Breach Notification Requirements",
      content: [
        "In the event of a data breach, accidental exposure, or unauthorized access involving patient data, Health Stores must:",
        [
          "Notify Aven Health immediately through the designated compliance channels.",
          "Provide a detailed report including:",
          [
            "Nature and scope of the breach",
            "Data affected",
            "Potential or actual impact on patients/customers",
            "Mitigation actions taken or planned",
          ],
          "Cooperate fully with Aven Health and relevant regulatory authorities in investigating and remediating the breach.",
          "Comply with Data Protection Act, 2019 requirements for notifying affected individuals if necessary.",
        ],
      ],
      example:
        "If a pharmacy’s internal system is compromised and patient prescription data is exposed, the store must immediately alert Aven Health, block further access, and follow instructions for notifying affected patients and regulators.",
    },
    {
      subheading: "10.5 Compliance and Accountability",
      content: [
        "Health Stores remain fully accountable for any misuse, unauthorized disclosure, or breach of patient data under this Agreement and applicable law.",
        "Aven Health may audit data handling practices to ensure compliance.",
        "Non-compliance may result in:",
        [
          "Temporary suspension of Platform access",
          "Removal of listings or order processing privileges",
          "Permanent termination of account",
          "Reporting to regulatory authorities for legal enforcement",
        ],
      ],
      example:
        "A repeated violation, such as storing decrypted prescription data on a shared cloud folder, could trigger immediate suspension and reporting to the Pharmacy and Poisons Board.",
    },

    {
      heading: "11. Intellectual Property",
      content: [
        `This section governs the use, protection, and ownership of all intellectual property (“IP”)
associated with the Aven Health Platform, including brand assets, logos, platform content, and
product listings. Health Stores must comply with these rules to protect Aven Health’s IP rights,
ensure consistent branding, and prevent unauthorized use or misrepresentation`,
      ],
    },
    {
      subheading: "11.1 Use of Aven Health Brand Assets",
      content: [
        "Health Stores are granted a limited, non-exclusive, non-transferable license to use Aven Health brand assets strictly for the purpose of operating on the Platform, including:",
        [
          "Platform dashboards, listings, and communication tools",
          "Marketing materials provided by Aven Health for order promotion or customer communication",
        ],
        "All use of Aven Health branding must maintain the integrity of the brand and comply with provided style guides or usage instructions.",
      ],
      example:
        "A pharmacy may display the Aven Health badge on its Platform store page or marketing messages sent through the Platform, but must not modify the logo, colors, or claim endorsement outside of the Platform.",
    },
    {
      subheading: "11.2 Restrictions on Logo and Trademark Usage",
      content: [
        "Health Stores must not:",
        [
          "Use the Aven Health logo, trademarks, or brand names outside the Platform without prior written consent",
          "Alter or combine Aven Health brand assets with other logos, symbols, or promotional content in a misleading manner",
          "Imply partnership, sponsorship, or endorsement beyond the independent store relationship on the Platform",
          "Create derivative works of Platform content for resale, commercial exploitation, or external marketing",
        ],
      ],
      example:
        "A health store cannot include the Aven Health logo on its own website, social media pages, or third-party advertisements implying that Aven Health owns, certifies, or endorses the store beyond the marketplace connection.",
    },
    {
      subheading: "11.3 Ownership of Listings and Platform Content",
      content: [
        "All product listings, descriptions, images, and content uploaded to the Platform by Health Stores remain owned by the Health Store, subject to the license granted to Aven Health for display, operation, promotion, and transactional purposes.",
        "Health Stores grant Aven Health a non-exclusive, worldwide, royalty-free license to:",
        [
          "Display and distribute the listings and associated content to users and customers",
          "Use the content in marketing, analytics, and reporting",
          "Host and store content for operational continuity and backup",
        ],
        "Aven Health retains ownership of all Platform design, technology, user interfaces, software, brand assets, and proprietary systems.",
      ],
      example:
        "If a health store uploads product photos and descriptions, the store retains copyright ownership, but Aven Health can display and use that content on the Platform to process orders, advertise the store, and generate sales reports.",
    },
    {
      subheading: "11.4 Protection and Enforcement",
      content: [
        "Health Stores are prohibited from copying, reproducing, or exploiting Aven Health intellectual property for personal, commercial, or competitive purposes outside the Platform.",
        "Any suspected infringement of Aven Health IP by Health Stores or third parties must be reported immediately to the Platform.",
        "Aven Health reserves the right to enforce its IP rights through suspension, removal of content, or legal action.",
      ],
      example:
        "If a store attempts to create a standalone website using Aven Health software code or brand assets without authorization, Aven Health may terminate the store’s Platform access and pursue legal remedies.",
    },
    {
      heading: "12. Limitation of Liability",
      content: [
        `This section defines the scope of legal responsibility between Aven Health and Health Stores,
specifically relating to product dispensing, order fulfillment, regulatory compliance, and
platform use. It is intended to allocate risk clearly, protect patient safety, and clarify that Health
Stores assume primary responsibility for professional, operational, and regulatory actions.`,
      ],
    },

    {
      subheading: "12.1 Scope of Platform Responsibilities",
      content: [
        "Aven Health operates solely as a technology and facilitation platform, providing infrastructure for:",
        [
          "Product listings and catalog management",
          "Order processing and payments",
          "Customer communication and delivery tracking",
        ],
        "Aven Health does not control inventory, dispense products, or validate prescriptions.",
      ],
      example:
        "If a patient receives the wrong dosage of a medication due to a pharmacy error, Aven Health is not liable for any resulting harm.",
    },
    {
      subheading: "12.2 Independent Health Store Liability",
      content: [
        "Health Stores acknowledge and agree that they are solely responsible for:",
        [
          "Accurate dispensing of medications and health products",
          "Compliance with all applicable laws, regulations, and professional standards",
          "Verification of prescriptions and fulfillment of orders",
          "Safe packaging, storage, and handling of temperature-sensitive or controlled products",
        ],
        "Health Stores assume liability for:",
        [
          "Dispensing errors, incorrect dosage, or mislabeled products",
          "Violation of regulatory requirements, including those enforced by the Pharmacy and Poisons Board (PPB)",
          "Any adverse drug reactions resulting from dispensing errors, counterfeits, or misuse",
          "Failure to properly validate external or in-app prescriptions",
        ],
      ],
      example:
        "If a pharmacy fills a prescription incorrectly and a patient suffers an adverse effect, the store is fully responsible, and Aven Health bears no legal responsibility.",
    },
    {
      subheading: "12.1 Scope of Platform Responsibilities",
      content: [
        "Aven Health operates solely as a technology and facilitation platform, providing infrastructure for:",
        [
          "Product listings and catalog management",
          "Order processing and payments",
          "Customer communication and delivery tracking",
        ],
        "Aven Health does not control inventory, dispense products, or validate prescriptions.",
      ],
      example:
        "If a patient receives the wrong dosage of a medication due to a pharmacy error, Aven Health is not liable for any resulting harm.",
    },
    {
      subheading: "12.2 Independent Health Store Liability",
      content: [
        "Health Stores acknowledge and agree that they are solely responsible for:",
        [
          "Accurate dispensing of medications and health products",
          "Compliance with all applicable laws, regulations, and professional standards",
          "Verification of prescriptions and fulfillment of orders",
          "Safe packaging, storage, and handling of temperature-sensitive or controlled products",
        ],
        "Health Stores assume liability for:",
        [
          "Dispensing errors, incorrect dosage, or mislabeled products",
          "Violation of regulatory requirements, including those enforced by the Pharmacy and Poisons Board (PPB)",
          "Any adverse drug reactions resulting from dispensing errors, counterfeits, or misuse",
          "Failure to properly validate external or in-app prescriptions",
        ],
      ],
      example:
        "If a pharmacy fills a prescription incorrectly and a patient suffers an adverse effect, the store is fully responsible, and Aven Health bears no legal responsibility.",
    },

    {
      heading: "12. Limitation of Liability",
      content: [
        `This section defines the scope of legal responsibility between Aven Health and Health Stores,
specifically relating to product dispensing, order fulfillment, regulatory compliance, and
platform use. It is intended to allocate risk clearly, protect patient safety, and clarify that Health
Stores assume primary responsibility for professional, operational, and regulatory actions.`,
      ],
    },

    {
      subheading: "13.1 Scope of Indemnification",
      content: [
        "Health Stores agree to indemnify Aven Health, its affiliates, officers, directors, employees, and agents against any and all claims, damages, liabilities, costs, or expenses, including reasonable legal fees, arising from or related to the following:",
        "1. Regulatory Fines or Penalties:",
        [
          "Violations of Kenyan laws and regulations, including Pharmacy and Poisons Act, Cap 244; Data Protection Act, 2019; Consumer Protection Act, 2012",
          "Failure to comply with licensing, prescription validation, storage, or dispensing standards",
        ],
        "2. Claims Arising from Dispensing or Order Fulfillment:",
        [
          "Patient or customer claims resulting from incorrect medication or dosage, adverse drug reactions due to dispensing errors, missing, damaged, or delayed deliveries",
        ],
        "3. Misrepresentation or False Advertising:",
        [
          "Any inaccurate, misleading, or fraudulent statements regarding product description, pricing, efficacy, licensing status, or regulatory compliance",
        ],
        "4. Data Misuse or Breach of Confidentiality:",
        [
          "Unauthorized use, disclosure, or sharing of patient, customer, or Platform data by the Health Store",
          "Failure to comply with Aven Health’s data protection obligations, including prescription confidentiality",
        ],
      ],
      example: [
        "Selling a prescription-only drug without a valid prescription",
        "Non-compliance with temperature control requirements for sensitive medications",
        "Advertising a controlled substance as over-the-counter without authorization",
        "Sharing patient prescriptions outside the Platform workflow",
        "Selling customer information to third parties",
      ],
    },

    {
      heading: "13. Indemnification",
      content: [
        `This section establishes the obligation of Health Stores to protect, defend, and hold harmless
Aven Health against any claims, losses, or liabilities arising from the store’s actions, omissions,
or regulatory non-compliance. The purpose is to allocate risk clearly, ensure accountability, and
safeguard the Platform from operational, legal, or regulatory consequences caused by Health
Stores.`,
      ],
    },

    {
      subheading: "13.2 Obligations of the Health Store",
      content: [
        "Defense of Claims: Health Stores must promptly assume responsibility for defending any claim, suit, or investigation arising from their actions.",
        "Notification: Health Stores must immediately notify Aven Health of any legal or regulatory claims related to their operations on the Platform.",
        "Cooperation: Health Stores must cooperate fully with Aven Health in the defense, settlement, or resolution of claims.",
        "Financial Responsibility: Health Stores are responsible for all costs, including settlements, damages, fines, and attorneys’ fees, resulting from indemnified claims.",
      ],
    },
    {
      subheading: "13.3 Survival of Indemnification Obligations",
      content: [
        "These indemnification obligations survive termination of the Health Store’s account or this Agreement.",
        "Even after account closure, Health Stores remain liable for any claims arising from actions taken while registered on the Platform.",
      ],
      example:
        "A pharmacy account is terminated due to license expiration. If a patient later files a claim for an improperly dispensed prescription while the account was active, the Health Store remains fully responsible, and Aven Health is indemnified.",
    },

    {
      heading: "14. Suspension & Termination",
      content: [
        `This section defines the circumstances under which a Health Store’s account may be suspended
or terminated, the procedures and consequences of such actions, and the handling of data and
pending orders. The purpose is to protect patient safety, regulatory compliance, and Platform
integrity, while ensuring clear communication and operational continuity.`,
      ],
    },
    {
      subheading: "14.1 Grounds for Suspension",
      content: [
        "Aven Health may temporarily suspend a Health Store’s account when there is reasonable cause to believe that the store:",
        "1. Fails to maintain valid licensing or regulatory compliance:",
        [
          "Expired, revoked, or suspended licenses",
          "Non-compliance with the Pharmacy and Poisons Act, Cap 244, or other relevant legislation",
        ],
        "2. Violates Platform policies:",
        [
          "Breaches of prescription handling procedures",
          "Misrepresentation of products or professional credentials",
          "Non-compliance with data protection obligations",
        ],
        "3. Presents a potential risk to patients or customers:",
        [
          "Safety concerns regarding product quality or storage conditions",
          "Suspected dispensing errors or fraudulent prescriptions",
        ],
        "4. Fails to respond to regulatory or Platform inquiries:",
        [
          "Ignoring requests for updated credentials or documentation",
          "Failure to provide clarification on complaints, disputes, or audits",
        ],
      ],
      effects: [
        "All order processing and new listings may be paused",
        "Pending orders may be temporarily held until verification or resolution",
        "Health Store access to Platform dashboards, analytics, and communications may be restricted",
      ],
      example:
        "If a pharmacy’s temperature-controlled storage equipment fails and violates drug safety regulations, Aven Health may suspend its account until compliance is restored.",
    },
    {
      subheading: "14.2 Immediate Termination for Regulatory Breaches",
      content: [
        "Aven Health reserves the right to terminate a Health Store account immediately without prior notice in cases of:",
        "1. Serious regulatory violations:",
        [
          "Revocation of licenses by the Pharmacy and Poisons Board (PPB)",
          "Legal or administrative action for unsafe dispensing practices",
        ],
        "2. Fraudulent or illegal activity:",
        [
          "Submitting false credentials or misrepresenting licensing",
          "Selling prohibited or controlled substances without authorization",
        ],
        "3. Repeated or egregious violations of Platform policies:",
        [
          "Continuous non-compliance with prescription validation requirements",
          "Endangering patient safety or public health",
        ],
      ],
      consequences: [
        "All pending orders may be canceled automatically",
        "Health Store loses access to all Platform features and account data",
        "Product listings are removed and customers are notified if necessary",
      ],
      example:
        "A pharmacy found dispensing prescription-only narcotics without verified prescriptions would face immediate account termination and regulatory reporting.",
    },
    {
      heading: "14. Suspension & Termination",
      subheadings: [
        {
          subheading: "14.1 Grounds for Suspension",
          content:
            "Aven Health may temporarily suspend a Health Store’s account when there is reasonable cause to believe that the store: invalid licensing or regulatory compliance, Platform policy violations, risk to patients or customers, or failure to respond to inquiries. Effects include paused order processing, held pending orders, and restricted access. Example: Account suspended if cold storage fails.",
        },
        {
          subheading: "14.2 Immediate Termination for Regulatory Breaches",
          content:
            "Immediate termination may occur for serious regulatory violations, fraudulent or illegal activity, or repeated egregious policy breaches. Consequences: cancellation of pending orders, loss of access, removal of listings, and customer notifications. Example: Dispensing prescription-only narcotics without verification triggers termination and reporting.",
        },
        {
          subheading: "14.3 Effect on Pending Orders",
          content:
            "Orders in Progress: Orders initiated before suspension or termination may be completed if legally and safely possible. If fulfillment cannot continue, orders are canceled and customers notified promptly. Communication with Customers: Health Stores must provide status updates for pending orders in compliance with Kenyan consumer protection law. Aven Health may assist in notifications to maintain trust. Example: A user orders an antibiotic, but the pharmacy is suspended for license verification. The Platform may hold the order temporarily or cancel it and issue a refund.",
        },
        {
          subheading: "14.4 Data Retention and Deletion",
          content:
            "Health Store data may be retained after suspension or termination for regulatory compliance, legal obligations, and operational purposes. This includes audit trails, prescription and order records, and evidence for disputes or indemnification. Data Access Post-Termination: Stores may request copies within legal limits. Sensitive data, including patient prescriptions and order history, remain encrypted and subject to privacy obligations. Example: Prescription logs and order fulfillment records may be retained for a minimum of five years to comply with Kenyan pharmacy regulations, even after account closure.",
        },
      ],
    },
    {
      subheading: "14.3 Effect on Pending Orders",
      content: [
        "Orders in Progress:",
        [
          "Orders that were initiated before suspension or termination may be completed if legally and safely possible",
          "If fulfillment cannot continue, orders are canceled and customers are notified promptly",
        ],
        "Communication with Customers:",
        [
          "Health Stores are required to provide status updates for any pending orders in compliance with Kenyan consumer protection law",
          "Aven Health may assist in notifying customers to maintain trust and transparency",
        ],
      ],
      example:
        "A user places an order for an antibiotic, but the pharmacy is suspended for license verification. The Platform may temporarily hold the order until verification or cancel it and issue a refund.",
    },
    {
      subheading: "14.4 Data Retention and Deletion",
      content: [
        "Even after suspension or termination, Health Store data may be retained by Aven Health for the purposes of:",
        "1. Regulatory compliance:",
        [
          "Maintaining records required by Pharmacy and Poisons Act, Cap 244, and other relevant laws",
        ],
        "2. Legal obligations:",
        [
          "Retaining documentation to respond to claims, audits, or investigations",
        ],
        "3. Operational purposes:",
        [
          "Audit trails of prescriptions, orders, and communications",
          "Evidence in disputes or indemnification claims",
        ],
      ],
      data_access: [
        "Health Stores may request copies of their retained data within the limits of applicable law",
        "Certain data, including patient prescriptions and order history, remain encrypted and subject to privacy obligations",
      ],
      example:
        "Prescription logs and order fulfillment records may be retained for a minimum of five years to comply with Kenyan pharmacy regulations, even after account closure.",
    },
    {
      heading: "15. Governing Law & Dispute Resolution",
      content: [
        "This section establishes the legal framework for resolving disputes between Health Stores and Aven Health. It defines applicable law, preferred resolution mechanisms, and fallback procedures to protect the rights of all parties while ensuring operational continuity and compliance with Kenyan regulations.",
      ],
      subheading: "15.1 Governing Law",
      content: [
        "This Agreement and all activities, transactions, and interactions on the Aven Health Platform shall be governed by the laws of the Republic of Kenya.",
        "Applicable statutes include, but are not limited to:",
        [
          "Pharmacy and Poisons Act, Cap 244 – regulates the sale, storage, and dispensing of medications.",
          "Data Protection Act, 2019 – governs collection, processing, and storage of patient and customer data.",
          "Consumer Protection Act, 2012 – ensures fair trade practices, truthful advertising, and safe product delivery.",
          "Kenya Information and Communications Act, 1998 – applies to digital communications and telehealth operations.",
        ],
        "Health Stores agree to conduct all activities in compliance with Kenyan law and relevant regulatory requirements.",
      ],
      example:
        "Any dispute arising from prescription handling, order fulfillment, or data privacy will be interpreted and adjudicated in accordance with Kenyan statutes and professional standards.",
    },
    {
      subheading: "15.2 Negotiation and Amicable Resolution",
      content: [
        "Good Faith Negotiation:",
        [
          "Parties agree to attempt to resolve disputes through informal discussions before formal proceedings.",
        ],
        "Notice of Dispute:",
        [
          "Written notice must describe:",
          ["Nature of the dispute", "Parties involved", "Requested resolution"],
        ],
        "Negotiation Period:",
        [
          "A minimum of 30 calendar days from receipt of notice is allotted for negotiation before escalation to arbitration or court proceedings.",
        ],
      ],
      example:
        "If a Health Store disputes a refund or commission calculation, both parties must first attempt to resolve the matter via written communication and negotiation through the Platform.",
    },
    {
      subheading: "15.5 Interim Measures and Injunctive Relief",
      content: [
        {
          minorSubheading: "Urgent Remedies",
          content: [
            "Either party may request interim measures to prevent immediate harm, including:",
            [
              "Temporary suspension of Platform access",
              "Freezing of disputed payments",
              "Injunctions to protect patient safety, Platform security, or intellectual property",
            ],
          ],
        },
        {
          minorSubheading: "Conditions",
          content: [
            "Interim relief can be sought without prior arbitration if delay would cause irreparable harm.",
          ],
        },
        {
          minorSubheading: "Enforcement",
          content: [
            "Interim measures granted by courts in Kenya are binding and enforceable through the Platform.",
          ],
        },
      ],
      example:
        "If a Health Store is suspected of distributing counterfeit medication, Aven Health may seek a temporary injunction to suspend order processing until verification is complete.",
    },
    {
      subheading: "15.6 Costs and Fees",
      content: [
        "Each party bears its own costs for negotiation, arbitration, or court proceedings unless an arbitrator or court decides otherwise.",
        "The prevailing party may recover reasonable legal fees, arbitration costs, and associated expenses from the non-prevailing party.",
      ],
      example:
        "If arbitration favors Aven Health in a dispute over unpaid commission fees, the Health Store may be required to cover the costs of arbitration and related legal expenses.",
    },
    {
      subheading: "15.7 Survival of Obligations",
      content: [
        "Obligations under this Section, including arbitration, interim relief, and enforcement of legal rights, survive termination of the Health Store’s account or this Agreement.",
      ],
      example:
        "Even after account termination, a Health Store remains bound to resolve pending disputes via arbitration or court proceedings as outlined in this section.",
    },
    {
      heading: "16. Amendments",
      content: [
        "This section outlines Aven Health’s right to modify the Health Store Agreement, the formal procedures for communicating changes, and the responsibilities of Health Stores to review, accept, and comply with updated terms. It ensures that both parties understand how modifications are handled and the consequences of non-compliance.",
      ],
    },
    {
      subheading: "16.1 Right to Update Terms",
      content: [
        "Aven Health reserves the right to amend, revise, or update any part of this Agreement at its sole discretion.",
        "Modifications may include, but are not limited to:",
        [
          "Changes to Platform policies, operational procedures, or feature functionalities.",
          "Updates to commission structures, fees, or payment terms.",
          "Adjustments to regulatory, compliance, or data handling requirements in line with Kenyan law or international standards.",
          "Revisions to product listing, prescription handling, or order fulfillment obligations.",
        ],
      ],
      example:
        "If Kenyan data protection laws are updated to require stricter consent for customer health data, Aven Health may revise the Agreement to mandate additional validation steps or reporting obligations for Health Stores. Health Stores will need to implement these changes to remain compliant.",
    },
    {
      subheading: "16.2 Notification Procedures",
      content: [
        "Health Stores will be notified of all amendments through multiple channels:",
        [
          "Email sent to the address registered on the Platform.",
          "In-app notifications or dashboard alerts within the Health Store interface.",
          "In certain urgent cases, direct communication via phone or official correspondence may be used.",
        ],
        "The effective date of each amendment will be clearly stated. Updates may take effect:",
        [
          "Immediately upon notification, or",
          "After a specified grace period, as determined by Aven Health, to allow operational adjustments.",
        ],
      ],
      example:
        "If the commission rate is changed from 4.8% to 5%, Aven Health may notify Health Stores via email and in-app dashboard notice, with a 14-day grace period for the new rates to apply to subsequent orders.",
    },
    {
      subheading: "16.3 Obligations of Health Stores",
      content: [
        "Health Stores are responsible for reviewing, understanding, and implementing any changes by the effective date.",
        "Continued use of the Platform after the effective date constitutes acceptance of the updated Agreement.",
        "Failure to comply with updated terms may result in:",
        [
          "Temporary or permanent suspension of order processing.",
          "Restriction or removal of product listings or prescription fulfillment privileges.",
          "Permanent termination of Platform access in case of repeated non-compliance.",
        ],
      ],
      example:
        "If a new prescription verification requirement is introduced, Health Stores must update their internal processes and communicate with prescribers via the Platform as required. Failure to comply could result in temporary suspension until the store demonstrates compliance.",
    },
    {
      heading: "17. Miscellaneous / General Provisions",
      content: [
        "This section contains general legal and operational provisions that support enforceability, handle unforeseen events, govern assignment of rights, and confirm the completeness of the Agreement.",
      ],
    },
    {
      subheading: "17.1 Severability",
      content: [
        "If any provision of this Agreement is found to be invalid, illegal, or unenforceable under Kenyan law:",
        [
          "The remainder of the Agreement remains fully valid and enforceable.",
          "Parties shall negotiate in good faith to replace the invalid provision with a legally valid provision that closely reflects the original intent.",
        ],
      ],
      example:
        "If a clause setting mandatory delivery timelines conflicts with a local regulation, only that clause may be invalidated; all other obligations, including payment, licensing, and prescription validation, remain binding.",
    },
    {
      subheading: "17.2 Force Majeure",
      content: [
        "Neither Aven Health nor Health Stores will be liable for delays or failures in performance caused by events beyond their reasonable control, including:",
        [
          "Natural disasters (floods, earthquakes, storms)",
          "Government actions, regulations, or restrictions",
          "Civil unrest, strikes, or labor disruptions",
          "Cyberattacks, internet outages, or critical system failures",
          "Pandemic-related restrictions or supply chain disruptions",
        ],
        "During a force majeure event:",
        [
          "Affected obligations may be temporarily suspended without penalty.",
          "Parties must notify the other promptly and take reasonable steps to mitigate the impact.",
        ],
      ],
      example:
        "If a nationwide transport strike prevents medication deliveries, Health Stores are not considered in breach of order fulfillment obligations, provided they notify affected customers and take reasonable alternative measures.",
    },
    {
      subheading: "17.3 Assignment",
      content: [
        "Health Stores may not assign or transfer their account, rights, licenses, or obligations to a third party without prior written consent from Aven Health.",
        "Aven Health may assign, delegate, or subcontract its rights or obligations to affiliates, successors, or third-party service providers, provided such assignment does not reduce Health Store rights under this Agreement.",
      ],
      example:
        "A pharmacy cannot transfer its product listings or account access to another pharmacy without approval. Conversely, Aven Health may outsource delivery management to a logistics partner while maintaining compliance and accountability under the Agreement.",
    },
    {
      subheading: "17.4 Entire Agreement",
      content: [
        "This Agreement, together with related policies, constitutes the full and exclusive understanding between Aven Health and Health Stores, including:",
        [
          "Privacy Policy",
          "Prescription Handling Policy",
          "Data Protection Policy",
          "Any Platform-specific rules communicated to Health Stores",
        ],
        "This Agreement supersedes all prior communications, agreements, or understandings—whether written, verbal, or implied.",
      ],
      example:
        "Any prior verbal arrangements regarding commissions, product promotions, or delivery timelines are null and void unless expressly incorporated into this Agreement.",
    },
  ];

  const links = [
    {
      name: "View Health Stores Privacy Policy",
      route: "/pharmacy-privacy-policy",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen flex justify-center">
      <LegalCard
        title="HEALTH STORES TERMS AND CONDITIONS"
        icon={<FaShieldAlt className="text-yellow-500" />}
        sections={sections}
        links={links}
      />
    </div>
  );
};

export default PharmacyAgreement;
