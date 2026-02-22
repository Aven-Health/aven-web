// src/pages/legalDocs/MedicalPrivacyPolicy.jsx
import React from "react";
import LegalCard from "../../components/LegalCard";
import { FaShieldAlt } from "react-icons/fa";

const MedicalPrivacyPolicy = () => (
  <div className="p-6 space-y-6">
    <h1 className="text-3xl font-bold mb-4">Medical Professional Privacy Policy</h1>


    {/* Section 1 */}
    <section>
      <h2 className="text-2xl font-semibold mb-2">1. Introduction / Scope</h2>

      {/* 1.1 Purpose */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">1.1 Purpose of the Policy</h3>
        <p className="mb-2">
          This Professional Privacy Policy outlines how Aven Health collects, processes, stores, and protects the personal and professional information of licensed healthcare professionals, allied medical staff, and affiliated healthcare institutions. The policy ensures transparency regarding the handling of professional data and emphasizes Aven Health’s commitment to safeguarding sensitive information.
        </p>
        <p className="mb-2">
          Professional data collected may include, but is not limited to: professional credentials, licenses, educational qualifications, specialization areas, clinical experience, and consultation history, communication with patients, feedback, and recommendations. This data enables Aven Health to provide secure and personalized telehealth services, maintain accurate professional profiles, and facilitate effective patient–professional interactions while complying with applicable privacy laws and ethical standards.
        </p>
        <p className="mb-1">The purpose of this policy is to:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Clearly communicate the types of professional data collected and how it is used.</li>
          <li>Ensure professionals understand their rights and responsibilities regarding their data.</li>
          <li>Establish security and confidentiality measures for protecting professional information.</li>
          <li>Promote trust between professionals, patients, and Aven Health through responsible data management.</li>
        </ul>
      </div>

      {/* 1.2 Applicability */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">1.2 Applicability</h3>
        <p className="mb-2">This policy applies to all healthcare professionals who engage with Aven Health, including:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Licensed physicians, specialists, and surgeons</li>
          <li>Allied medical professionals, such as nurses, pharmacists, therapists, and laboratory technicians</li>
          <li>Affiliated healthcare institutions, including hospitals, clinics, and diagnostic centers</li>
          <li>Independent medical consultants providing telehealth or advisory services</li>
        </ul>
        <p>
          All individuals and institutions covered by this policy are expected to adhere to the practices outlined herein and are subject to the terms of data collection, storage, and usage when interacting with the Aven Health platform.
        </p>
      </div>

      {/* 1.3 Scope */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">1.3 Scope</h3>
        <p className="mb-2">The scope of this policy encompasses all professional activities conducted through Aven Health, including:</p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Telehealth services: Virtual consultations, diagnosis, follow-up sessions, and remote patient management.</li>
          <li>Professional profiles: Creation, updating, and display of credentials, areas of expertise, and professional experience.</li>
          <li>Consultations and interactions: Communication with patients, colleagues, and other professionals, including chat, audio, and video formats.</li>
          <li>Recommendations and referrals: Guidance provided to patients or other professionals, including treatment recommendations and referral suggestions.</li>
          <li>Administrative and compliance functions: Activities related to licensing verification, credentialing, performance evaluation, and quality assurance.</li>
        </ul>
        <p>
          This policy ensures that professional data used across these areas is handled securely, stored responsibly, and utilized solely for legitimate professional purposes, in alignment with ethical standards and applicable healthcare regulations.
        </p>
      </div>
    </section>

    {/* Section 2 */}
    <section>
      <h2 className="text-2xl font-semibold mb-2">2. Definitions</h2>

      <p className="mb-2">
        For clarity and consistency, the following terms are used throughout this Professional Privacy Policy. These definitions establish how Aven Health interprets, collects, and processes professional and patient information.
      </p>

      {/* 2.1 Professionals */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">2.1 Professionals</h3>
        <p className="mb-2">
          Professionals refer to all licensed and verified medical personnel registered on the Aven Health platform, including, but not limited to:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Doctors and Physicians: General practitioners, specialists, surgeons, and other licensed medical practitioners providing clinical care.</li>
          <li>Allied Medical Staff: Nurses, pharmacists, physiotherapists, laboratory technicians, dietitians, and other certified medical personnel.</li>
          <li>Mental Health Professionals: Counselors, psychiatrists, psychologists, therapists, and licensed social workers offering mental and behavioral health services.</li>
        </ul>
        <p className="mt-2">
          These individuals are considered professionals because they provide healthcare or therapeutic services within the platform and interact with patient data in a clinical, advisory, or consultative capacity. Their professional data is subject to this policy.
        </p>
      </div>

      {/* 2.2 Personal Data */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">2.2 Personal Data (for professionals)</h3>
        <p className="mb-2">
          Personal Data refers to any information relating to an identified or identifiable professional on the platform, including, but not limited to:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Name, contact information, and profile details</li>
          <li>Employment history and educational background</li>
          <li>Professional specialties, certifications, and affiliations</li>
          <li>Platform account identifiers (username, email, and login credentials)</li>
        </ul>
        <p className="mt-2">
          This data is used to maintain professional profiles, facilitate communication with patients, and ensure the accuracy and legitimacy of the services provided.
        </p>
      </div>

      {/* 2.3 Sensitive Personal Data */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">2.3 Sensitive Personal Data</h3>
        <p className="mb-2">
          Sensitive Personal Data includes any information about a professional that requires heightened protection due to its confidential nature, including:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Professional license numbers and registration identifiers</li>
          <li>Credentials, certifications, and diplomas</li>
          <li>Background verification records or compliance documentation</li>
        </ul>
        <p className="mt-2">Sensitive Personal Data is handled with strict security measures to prevent unauthorized access or misuse.</p>
      </div>

      {/* 2.4 Health Data */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">2.4 Health Data</h3>
        <p className="mb-2">
          Health Data refers to any patient-related information processed or generated by a professional during their activities on Aven Health. This includes:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Medical histories, diagnoses, and treatment plans</li>
          <li>Consultation notes, prescriptions, and lab results</li>
          <li>Mental health assessments and therapy session notes</li>
        </ul>
        <p className="mt-2">
          Health Data is not the professional’s personal information but is processed by the professional on the platform. Its collection, storage, and sharing are subject to additional privacy and regulatory safeguards to protect patient confidentiality.
        </p>
      </div>

      {/* 2.5 Data Controller / Data Processor */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">2.5 Data Controller / Data Processor</h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li><strong>Data Controller:</strong> Aven Health acts as the Data Controller for professional data, determining the purposes and means of processing.</li>
          <li><strong>Data Processor:</strong> In cases where services are outsourced (e.g., cloud storage, analytics), third-party service providers act as Data Processors, processing professional or patient data strictly on behalf of Aven Health under contractual obligations.</li>
        </ul>
      </div>

      {/* 2.6 Third Parties */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">2.6 Third Parties</h3>
        <p className="mb-2">
          Third Parties are any external individuals, organizations, or services that may receive or interact with professional or patient data under controlled conditions. Examples include:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Regulatory authorities for compliance and licensing verification</li>
          <li>Healthcare institutions collaborating with Aven Health</li>
          <li>Technology vendors providing secure platform services</li>
        </ul>
        <p className="mt-2">
          All interactions with Third Parties are governed by confidentiality agreements, legal requirements, and this Privacy Policy.
        </p>
      </div>

      {/* 2.7 Platform Interactions */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-1">2.7 Platform Interactions</h3>
        <p className="mb-2">
          Platform Interactions include all activities that professionals conduct on the Aven Health platform, such as:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Virtual consultations and appointments with patients</li>
          <li>Messaging and chat communications</li>
          <li>Providing recommendations, referrals, or professional guidance</li>
          <li>Participation in professional forums or collaborative activities</li>
        </ul>
        <p className="mt-2">
          These interactions generate data that may be collected, stored, and used in accordance with this policy, always respecting confidentiality and ethical obligations.
        </p>
      </div>
    </section>
    {/* Section 3 */}
<section>
  <h2 className="text-2xl font-semibold mb-2">3. Information We Collect</h2>

  {/* 3.1 Professional-Provided Information */}
  <div className="mb-4">
    <h3 className="text-xl font-semibold mb-1">3.1 Professional-Provided Information</h3>
    <p className="mb-2">
      Aven Health collects information directly provided by professionals when they register on the platform, create or update their professional profiles, or engage with platform services. This data allows Aven Health to verify professional credentials, maintain accurate and trustworthy profiles, manage appointments, facilitate secure telehealth services, and ensure compliance with regulatory and ethical standards.
    </p>
    <p className="mb-2">
      The types of professional-provided information include, but are not limited to:
    </p>

    {/* 3.1.1 Identity and Professional Credentials */}
    <div className="mb-2">
      <h4 className="text-lg font-semibold mb-1">3.1.1 Identity and Professional Credentials</h4>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>
          <strong>Full Name and Title:</strong> Includes first and last names, professional title (e.g., Doctor, Counselor, Psychologist), and any honorifics. This information ensures proper identification and recognition of the professional on the platform and in patient-facing interactions.
        </li>
        <li>
          <strong>Professional Qualifications and Certificates:</strong> All degrees, diplomas, licenses, certifications, and specialized training information provided by the professional. This is used to verify expertise, determine the scope of practice, and display verified credentials on professional profiles.
        </li>
        <li>
          <strong>License and Registration Numbers:</strong> Regulatory identification numbers issued by recognized licensing authorities. This information confirms legal authorization to practice and ensures compliance with applicable laws and professional regulations.
        </li>
        <li>
          <strong>Regulatory Organizations:</strong> Details of the board, council, or institution responsible for professional oversight, such as medical councils, nursing boards, or psychological associations. This allows Aven Health to verify authenticity and maintain professional accountability.
        </li>
        <li>
          <strong>Certificate of Practice:</strong> Documentation uploaded by the professional to provide evidence of legal authorization to practice in their respective field.
        </li>
      </ul>
    </div>

    {/* 3.1.2 Contact and Communication Information */}
    <div className="mb-2">
      <h4 className="text-lg font-semibold mb-1">3.1.2 Contact and Communication Information</h4>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Email Address and Phone Number: Used to facilitate secure communication between the platform, professionals, and patients. This includes appointment notifications, platform updates, security alerts, and professional verification processes.</li>
        <li>Wallet or Payment Identifiers: Information required to manage consultation fees, process payments, and support financial reconciliation between the professional and Aven Health.</li>
        <li>Physical Address / Location: Professional practice addresses and geolocation coordinates, used to facilitate in-person appointments, determine regional compliance, and optimize patient-professional matching.</li>
      </ul>
    </div>

    {/* 3.1.3 Profile Details and Professional Specialization */}
    <div className="mb-2">
      <h4 className="text-lg font-semibold mb-1">3.1.3 Profile Details and Professional Specialization</h4>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Profile Photo and Identification Photos: Uploads of professional headshots, identity verification photos, government-issued ID, or license scans. These serve both verification and trust-building purposes, allowing patients to confirm the professional’s identity visually.</li>
        <li>Biography and Professional Summary: A descriptive summary detailing professional background, areas of expertise, clinical experience, and notable achievements. This enhances transparency and informs patient decision-making.</li>
        <li>Medical Institution Affiliation: Links or references to hospitals, clinics, or other healthcare institutions with which the professional is affiliated. This supports validation of experience and enhances patient trust.</li>
        <li>Specialties and Offered Services: Detailed listings of services, including service name, duration, fee, description, and associated images where applicable. This information is critical for accurate appointment scheduling and patient expectations.</li>
        <li>Availability and Scheduling Preferences: Detailed working hours, preferred consultation modes (online, in-person, or hybrid), and recurring availability. This ensures accurate scheduling, prevents double-booking, and optimizes platform resource allocation.</li>
        <li>Experience and Evidence of Work: Past employment history, certifications, references, or supporting documentation demonstrating professional competency. These help maintain credibility and provide patients with informed choices.</li>
      </ul>
    </div>

    {/* 3.1.4 Consultation and Fee Information */}
    <div className="mb-2">
      <h4 className="text-lg font-semibold mb-1">3.1.4 Consultation and Fee Information</h4>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Fee Structures: Information on standard fees for each service, including variations by specialization or consultation type. This supports transparent financial transactions between patients and professionals.</li>
        <li>First Consultation Offers: Indicators or flags that a professional provides discounted or free initial consultations, enabling patient engagement strategies.</li>
        <li>Booking Records: Historical and scheduled appointments, including service type, patient interactions, date, time, duration, and current status (e.g., booked, completed, canceled). This ensures accurate record-keeping and facilitates billing and reporting.</li>
      </ul>
    </div>

    {/* 3.1.5 Platform Interaction Metadata */}
    <div className="mb-2">
      <h4 className="text-lg font-semibold mb-1">3.1.5 Platform Interaction Metadata</h4>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Ratings and Reviews: Feedback received from patients or platform users, including numerical ratings and textual reviews. This provides quality control, supports professional reputation, and helps patients make informed decisions.</li>
        <li>Professional Updates: Logs of modifications to profiles, including the identity of the updater, timestamps, and nature of changes. This ensures accountability and allows audit trails for compliance purposes.</li>
        <li>Approval and Verification Notes: Internal records documenting platform admin approval, review outcomes, verification notes, and dates. These support regulatory compliance and maintain platform integrity.</li>
        <li>Preferred Consultation Modes: Information regarding whether the professional prefers online, in-person, or hybrid consultations. This guides patient selection and scheduling algorithms.</li>
      </ul>
    </div>

    {/* 3.1.6 Security and Compliance */}
    <div className="mb-4">
      <h4 className="text-lg font-semibold mb-1">3.1.6 Security and Compliance</h4>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Terms and Privacy Policy Acceptance: Confirmation that the professional has reviewed and accepted Aven Health’s Terms of Service and Privacy Policy. This demonstrates consent and legal acknowledgment.</li>
        <li>Audit and Activity Logs: Metadata capturing login history, profile updates, service offerings, appointment management, and patient interactions. These logs support security monitoring, detect unauthorized activity, and ensure adherence to compliance and ethical standards.</li>
        <li>Status and Approvals: Internal tracking of professional status (e.g., pending, active, suspended) and approvals by platform administrators. This information safeguards patients and ensures only verified professionals are allowed to operate on the platform.</li>
      </ul>
    </div>

    <p className="mb-2 font-semibold">Usage and Protection of Professional-Provided Information</p>
    <p className="mb-2">All information provided by professionals on the Aven Health platform is collected and handled with the highest standards of security, confidentiality, and ethical responsibility. The platform uses this data exclusively to support the professional’s role, ensure compliance with healthcare regulations, and provide a safe and reliable experience for patients.</p>

    {/* Primary Uses */}
    <div className="mb-2">
      <p className="font-semibold mb-1">1. Primary Uses of Professional Data</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>
          Professional Verification and Credentialing:
          <ul className="list-disc list-inside ml-6">
            <li>License numbers, registration details, certificates, and regulatory organization affiliations are cross-checked against recognized authorities to verify the professional’s qualifications.</li>
            <li>Identity documents (ID photos, profile images) are used to confirm the professional’s identity, ensuring that only verified and legitimate professionals are active on the platform.</li>
          </ul>
        </li>
        <li>
          Secure Patient Interactions:
          <ul className="list-disc list-inside ml-6">
            <li>Professional profiles, specialties, and service offerings are displayed to patients to help them make informed decisions.</li>
            <li>Data such as availability, consultation preferences, and communication details ensures that appointments and interactions between professionals and patients are secure, timely, and well-managed.</li>
          </ul>
        </li>
        <li>
          Scheduling and Appointment Management:
          <ul className="list-disc list-inside ml-6">
            <li>Availability, preferred consultation modes (online, physical, hybrid), and working hours are used to manage booking calendars, prevent scheduling conflicts, and ensure optimal patient access.</li>
            <li>Appointment metadata (dates, times, durations, status) is used to track interactions and enable reminders for both professionals and patients.</li>
          </ul>
        </li>
        <li>
          Billing and Financial Reconciliation:
          <ul className="list-disc list-inside ml-6">
            <li>Fee structures, wallet or payment identifiers, and consultation history are used to process payments, generate invoices, and manage revenue in a transparent and accurate manner.</li>
            <li>First consultation offers, discounts, and fee variations by specialization are applied automatically according to professional settings.</li>
          </ul>
        </li>
        <li>
          Compliance and Regulatory Requirements:
          <ul className="list-disc list-inside ml-6">
            <li>Audit logs, verification notes, and status updates (e.g., pending, approved, suspended) ensure that professionals adhere to platform policies, regulatory standards, and legal obligations.</li>
            <li>Metadata about updates and profile changes provides a clear audit trail for regulatory reporting or internal compliance review.</li>
          </ul>
        </li>
        <li>
          Quality Assurance and Continuous Improvement:
          <ul className="list-disc list-inside ml-6">
            <li>Ratings, reviews, and feedback are analyzed to maintain service quality, support professional development, and improve patient outcomes.</li>
            <li>Evidence of work and professional achievements help the platform identify high-performing professionals and recommend best practices.</li>
          </ul>
        </li>
      </ul>
    </div>

    {/* Protection Measures */}
    <div className="mb-4">
      <p className="font-semibold mb-1">2. Protection Measures for Professional Data</p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>
          Encryption:
          <ul className="list-disc list-inside ml-6">
            <li>Sensitive professional information such as license numbers, certificates, identification photos, and financial details is encrypted both in transit and at rest, ensuring that unauthorized parties cannot access or intercept the data.</li>
          </ul>
        </li>
        <li>
          Access Control and Role-Based Permissions:
          <ul className="list-disc list-inside ml-6">
            <li>Only authorized personnel and systems with legitimate operational need can access professional data.</li>
            <li>Different levels of access are applied depending on role (that is, administrative staff, system processes, compliance auditors), reducing the risk of internal misuse.</li>
          </ul>
        </li>
        <li>
          Auditing and Monitoring:
          <ul className="list-disc list-inside ml-6">
            <li>All access to professional data is logged, creating a permanent record of who accessed what information and when.</li>
            <li>Regular audits of these logs help detect unauthorized access, suspicious activity, or potential breaches in real time.</li>
          </ul>
        </li>
        <li>
          Data Minimization and Purpose Limitation:
          <ul className="list-disc list-inside ml-6">
            <li>Only the data necessary to fulfill the stated purposes (verification, patient care, compliance, billing) is collected, used, or stored.</li>
            <li>Professionals’ personal and sensitive data is never repurposed for unrelated activities without explicit consent.</li>
          </ul>
        </li>
        <li>
          Secure Storage and Backup:
          <ul className="list-disc list-inside ml-6">
            <li>Professional data is stored in secure, access-controlled databases with redundant backups to prevent loss due to hardware failures or accidental deletion.</li>
            <li>Backup copies are also encrypted and periodically tested for data integrity.</li>
          </ul>
        </li>
        <li>
          Confidentiality and Ethical Use:
          <ul className="list-disc list-inside ml-6">
            <li>Professionals’ sensitive information, including credentials, certificates, and ID photos, is never shared with third parties except where legally required (e.g., regulatory audits, licensing verification) or with explicit consent.</li>
            <li>Platform staff and service providers are bound by confidentiality agreements and ethical guidelines, ensuring professional data is handled responsibly at all times.</li>
          </ul>
        </li>
      </ul>
      <p className="mt-2">
        Through a combination of secure technical measures, strict access policies, auditing, encryption, and ethical guidelines, Aven Health ensures that all professional-provided data remains confidential, secure, and used solely for legitimate platform purposes. This approach guarantees that professionals can trust the platform to protect their personal and sensitive information while supporting their practice and interactions with patients.
      </p>
    </div>

    {/* 3.2 Patient Interaction Data */}
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-1">3.2 Patient Interaction Data</h3>
      <p className="mb-2">
        Aven Health collects and processes information generated during interactions between professionals and patients. This data is critical to delivering safe, personalized, and effective healthcare services and is treated with the highest standards of confidentiality and security. All patient interaction data is collected only as necessary to provide telehealth, consultation, and treatment services, and is processed in accordance with applicable health regulations and platform policies.
      </p>

      <p className="mb-2">The types of patient interaction data collected include, but are not limited to:</p>

      {/* 3.2.1 Appointment Notes and Clinical Observations */}
      <div className="mb-2">
        <h4 className="text-lg font-semibold mb-1">3.2.1 Appointment Notes and Clinical Observations</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Appointment Notes: Professionals may record observations, diagnoses, treatment plans, and follow-up recommendations during or after patient consultations.</li>
          <li>Clinical Documentation: This includes structured or unstructured notes regarding the patient’s health status, symptoms, and progress.</li>
          <li>Purpose and Use:
            <ul className="list-disc list-inside ml-6">
              <li>Supports continuity of care and accurate tracking of patient health over time.</li>
              <li>Enables professionals to monitor patient progress against goals or treatment plans.</li>
              <li>Provides a secure record for compliance, quality assurance, and audit purposes.</li>
            </ul>
          </li>
          <li>Protection Measures:
            <ul className="list-disc list-inside ml-6">
              <li>Notes are stored in encrypted databases and linked only to authorized patient records.</li>
              <li>Access is restricted to the professional, authorized care team members, and platform administrators under strict protocols.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* 3.2.2 Patient Communication */}
      <div className="mb-2">
        <h4 className="text-lg font-semibold mb-1">3.2.2 Patient Communication</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Communication Logs: Includes messages, calls, video consultations, and other interactions between professionals and patients.</li>
          <li>End-to-End Encryption (E2EE): Telehealth chat messages and video calls are end-to-end encrypted, ensuring that only the intended professional and patient can access the content.</li>
          <li>Purpose and Use:
            <ul className="list-disc list-inside ml-6">
              <li>Facilitates timely communication, clarifies treatment instructions, and allows questions and follow-ups.</li>
              <li>Enables collaborative care where multiple professionals may be involved, with patient consent.</li>
            </ul>
          </li>
          <li>Protection Measures:
            <ul className="list-disc list-inside ml-6">
              <li>Encryption prevents interception by unauthorized parties.</li>
              <li>Logs are stored securely with audit trails tracking access events.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* 3.2.3 Prescriptions and Treatment Recommendations */}
      <div className="mb-2">
        <h4 className="text-lg font-semibold mb-1">3.2.3 Prescriptions and Treatment Recommendations</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Prescriptions Written: Includes medication prescriptions, dosage instructions, and refills authored by the professional.</li>
          <li>Treatment Plans: Includes therapy recommendations, lifestyle adjustments, exercise regimens, and other non-pharmacological interventions.</li>
          <li>Purpose and Use:
            <ul className="list-disc list-inside ml-6">
              <li>Ensures patients receive correct, safe, and timely treatment.</li>
              <li>Supports pharmacy verification and accurate medication dispensing when linked with verified pharmacies on the platform.</li>
            </ul>
          </li>
          <li>Protection Measures:
            <ul className="list-disc list-inside ml-6">
              <li>Prescriptions are digitally signed and securely stored in encrypted systems.</li>
              <li>Access is limited to the prescribing professional, authorized pharmacists, and the patient.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* 3.2.4 Managed Conditions, Goals, and Journal Entries */}
      <div className="mb-2">
        <h4 className="text-lg font-semibold mb-1">3.2.4 Managed Conditions, Goals, and Journal Entries</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Condition Management: Professionals may track chronic conditions, treatment outcomes, and progress indicators for each patient.</li>
          <li>Patient Goals and Journals: Includes therapeutic goals, symptom journals, health diaries, or mental health tracking entries recorded in consultation with the professional.</li>
          <li>Purpose and Use:
            <ul className="list-disc list-inside ml-6">
              <li>Facilitates long-term care planning, progress tracking, and personalized interventions.</li>
              <li>Supports data-driven insights for professional decision-making and health outcome improvement.</li>
            </ul>
          </li>
          <li>Protection Measures:
            <ul className="list-disc list-inside ml-6">
              <li>All condition management data is linked to the patient’s unique record and encrypted.</li>
              <li>Professionals can access only their assigned patients’ data unless cross-consultation is explicitly authorized by the patient.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* 3.2.5 Telehealth Chat Messages */}
      <div className="mb-2">
        <h4 className="text-lg font-semibold mb-1">3.2.5 Telehealth Chat Messages</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Real-Time Messaging: Professionals and patients communicate through text, multimedia, and attachments within the telehealth platform.</li>
          <li>End-to-End Encryption: All chat content is encrypted from sender to receiver, ensuring that platform servers cannot read the content.</li>
          <li>Purpose and Use:
            <ul className="list-disc list-inside ml-6">
              <li>Enables secure consultation, follow-up, clarification of instructions, and sharing of documents or images.</li>
              <li>Provides a permanent and auditable record of care interactions while maintaining confidentiality.</li>
            </ul>
          </li>
          <li>Protection Measures:
            <ul className="list-disc list-inside ml-6">
              <li>E2EE ensures data integrity and confidentiality.</li>
              <li>Message metadata (timestamps, sender, recipient) is stored securely to support service functionality and audit requirements.</li>
            </ul>
          </li>
        </ul>
      </div>

      <p className="mb-2">
        All patient interaction data is handled under strict confidentiality, security, and compliance frameworks:
      </p>
      <ul className="list-disc list-inside ml-4 space-y-1 mb-2">
        <li>Data is collected only for clinical, administrative, or regulatory purposes related to patient care.</li>
        <li>Sensitive patient data is encrypted both at rest and in transit, with access limited to authorized professionals and the patient.</li>
        <li>Professionals’ access to patient records is role-specific and consent-based, ensuring they can only view and manage data relevant to their care responsibilities.</li>
        <li>Platform activity related to patient interaction is logged and audited to detect unauthorized access, ensure accountability, and maintain regulatory compliance.</li>
      </ul>
      <p className="mb-2">
        By adhering to these measures, Aven Health ensures that all patient interactions remain confidential, secure, and legally compliant, while enabling professionals to deliver high-quality, personalized care.
      </p>
    </div>

    {/* 3.3 Automatically Collected Data */}
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-1">3.3 Automatically Collected Data</h3>
      <p className="mb-2">
        In addition to information directly provided by professionals, Aven Health also collects data automatically generated by the platform, devices, and system interactions. This data allows the platform to enhance security, improve service functionality, monitor system performance, and optimize professional and patient experience.
      </p>
      <p className="mb-2">
        Automatically collected data is captured passively when professionals access the platform, interact with features, or use telehealth services. The types of automatically collected data include, but are not limited to:
      </p>

      {/* 3.3.1 Device and Technical Information */}
      <div className="mb-2">
        <h4 className="text-lg font-semibold mb-1">3.3.1 Device and Technical Information</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Device Details: Includes information about the device used to access the platform, such as device type (smartphone, tablet, desktop), operating system, browser type, and version.</li>
          <li>IP Address and Geolocation Data: Captures the IP address and, where available, approximate geolocation to enhance security, detect unusual activity, and ensure compliance with regional regulations.</li>
          <li>Device Identifiers and System Logs: May include unique device identifiers, session tokens, and system logs related to authentication, login attempts, and software updates.</li>
          <li>Purpose and Use:
            <ul className="list-disc list-inside ml-6">
              <li>Enhance platform security by detecting suspicious logins or unauthorized access attempts.</li>
              <li>Enable troubleshooting and technical support when professionals encounter issues.</li>
              <li>Ensure compliance with geographic and regulatory requirements, such as jurisdiction-specific telehealth laws.</li>
              <li>Monitor device compatibility to improve platform functionality across different hardware and software environments.</li>
            </ul>
          </li>
          <li>Protection Measures:
            <ul className="list-disc list-inside ml-6">
              <li>Device and technical information is stored securely with restricted access to system administrators and security teams.</li>
              <li>Logs and identifiers are encrypted and anonymized wherever possible to prevent unnecessary exposure of personal or professional information.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* 3.3.2 Access Logs and Authentication Metadata */}
      <div className="mb-2">
        <h4 className="text-lg font-semibold mb-1">3.3.2 Access Logs and Authentication Metadata</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Login History: Records timestamps of login attempts, successful authentications, and logout events.</li>
          <li>Session Activity: Tracks session duration, navigation patterns, and interactions within the platform, such as opening dashboards, booking modules, or telehealth interfaces.</li>
          <li>Failed Authentication Attempts: Captures instances of incorrect password entry, two-factor authentication failures, or suspicious access patterns.</li>
          <li>Purpose and Use:
            <ul className="list-disc list-inside ml-6">
              <li>Maintain platform security by identifying and responding to unauthorized access attempts.</li>
              <li>Create an audit trail for regulatory compliance and internal review.</li>
              <li>Support account recovery, password reset, and authentication troubleshooting.</li>
            </ul>
          </li>
          <li>Protection Measures:
            <ul className="list-disc list-inside ml-6">
              <li>Logs are stored in encrypted form with strict access controls.</li>
              <li>Access to these logs is limited to authorized personnel for security monitoring, system maintenance, and compliance purposes.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* 3.3.3 Usage Analytics and Platform Interactions */}
      <div className="mb-2">
        <h4 className="text-lg font-semibold mb-1">3.3.3 Usage Analytics and Platform Interactions</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Dashboard Interactions: Tracks how professionals navigate the platform, access patient records, manage schedules, and update profiles.</li>
          <li>Consultation Metrics: Includes number of appointments, completed consultations, duration of interactions, and service usage frequency.</li>
          <li>Feature Utilization Data: Identifies which platform features (e.g., telehealth, messaging, booking tools) are most used, aiding in system optimization.</li>
          <li>Purpose and Use:
            <ul className="list-disc list-inside ml-6">
              <li>Improve platform design, functionality, and user experience for professionals and patients.</li>
              <li>Identify system bottlenecks, errors, or areas needing enhancement.</li>
              <li>Generate anonymized insights for reporting, platform performance monitoring, and continuous improvement initiatives.</li>
              <li>Support administrative decision-making related to professional engagement, workload management, and service planning.</li>
            </ul>
          </li>
          <li>Protection Measures:
            <ul className="list-disc list-inside ml-6">
              <li>Usage analytics are anonymized and aggregated where possible, ensuring that individual professionals or patients cannot be personally identified in analytical reports.</li>
              <li>Access to detailed usage data is restricted to platform administrators and data analysts with proper authorization and under confidentiality protocols.</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* 3.3.4 Summary */}
      <div className="mb-2">
        <h4 className="text-lg font-semibold mb-1">3.3.4 Summary of Automatic Data Handling</h4>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Security Monitoring: Detecting unauthorized access, unusual activity, and potential breaches.</li>
          <li>System Performance: Ensuring platform stability, reliability, and responsiveness.</li>
          <li>Service Optimization: Improving scheduling, consultation efficiency, and user experience.</li>
          <li>Compliance and Auditing: Maintaining records for legal, regulatory, and internal review purposes.</li>
        </ul>
        <p className="mt-2">
          All automatically collected data is stored with encryption, role-based access control, and regular auditing, ensuring that it is secure, used only for legitimate purposes, and protected against unauthorized disclosure or misuse.
        </p>
      </div>
    </div>
    </div>
</section>
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-4">
    4. Use of Professional Data
  </h2>

  <p className="mb-4">
    Aven Health collects professional data not only to maintain accurate profiles but also to enable
    secure and effective healthcare delivery, regulatory compliance, platform optimization, and
    informed patient interactions. The platform ensures that all professional data is used only for
    legitimate purposes and is handled with strict confidentiality, encryption, and access controls.
  </p>

  <p className="mb-6">
    The key ways in which professional data is used include:
  </p>

  {/* 4.1 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      4.1 Account Creation and Authentication
    </h3>

    <ul className="list-disc pl-6 space-y-2">

      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Professional-provided identity information (name, license numbers, regulatory affiliation) is used to create verified accounts on the Aven Health platform.
          </li>
          <li>
            Authentication data (email, phone, login credentials) ensures that only the authorized professional can access their account.
          </li>
          <li>
            Multi-factor authentication or verification codes may be used to strengthen account security.
          </li>
        </ul>
      </li>

      <li>
        <strong>Benefits:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Protects the integrity of the professional’s profile.</li>
          <li>Prevents unauthorized access to sensitive patient and platform data.</li>
          <li>
            Enables professionals to securely manage appointments, consultation history, and personal information.
          </li>
        </ul>
      </li>

      <li>
        <strong>Protection Measures:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>All authentication data is encrypted in transit and at rest.</li>
          <li>
            Login attempts, failed authentications, and session metadata are logged and monitored to detect unusual activity.
          </li>
        </ul>
      </li>

    </ul>
  </div>

  {/* 4.2 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      4.2 Professional Recommendations to Patients
    </h3>

    <ul className="list-disc pl-6 space-y-2">

      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Professional data, including specialization, services offered, and availability, is used to match patients with appropriate professionals.
          </li>
          <li>
            The platform may perform gender-based randomization or service-type matching when suggesting professionals to patients, ensuring fair and balanced distribution of consultations while respecting patient preferences.
          </li>
          <li>
            Recommendations are also influenced by location, professional expertise, and historical patient satisfaction metrics.
          </li>
        </ul>
      </li>

      <li>
        <strong>Benefits:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Improves patient experience by providing timely, relevant, and qualified professional suggestions.
          </li>
          <li>
            Helps distribute appointment requests fairly across available professionals.
          </li>
        </ul>
      </li>

      <li>
        <strong>Protection Measures:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Personal data is never disclosed to patients without consent.</li>
          <li>
            Matching algorithms operate on anonymized or pseudonymized professional data for recommendation purposes.
          </li>
        </ul>
      </li>

    </ul>
  </div>

  {/* 4.3 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      4.3 Scheduling and Appointment Management
    </h3>

    <ul className="list-disc pl-6 space-y-2">

      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Professional availability, consultation durations, and preferred modes (online or physical) are used to manage appointment scheduling.
          </li>
          <li>
            Booking records, historical appointment data, and consultation preferences are used to prevent double-bookings and ensure accurate time allocation.
          </li>
          <li>
            Automated reminders and notifications are sent to both professionals and patients to reduce missed appointments and improve efficiency.
          </li>
        </ul>
      </li>

      <li>
        <strong>Benefits:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Ensures smooth coordination between professionals and patients.</li>
          <li>
            Reduces administrative burden on professionals by automating scheduling and follow-ups.
          </li>
        </ul>
      </li>

      <li>
        <strong>Protection Measures:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Scheduling and booking data is restricted to the professional, authorized patients, and platform administrators for operational purposes only.
          </li>
          <li>
            All data is encrypted and stored securely, with audit logs to track access and modifications.
          </li>
        </ul>
      </li>

    </ul>
  </div>

  {/* 4.4 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      4.4 Compliance and Licensing Verification
    </h3>

    <ul className="list-disc pl-6 space-y-2">

      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Professional-provided licenses, registration numbers, certifications, and regulatory board affiliations are continuously verified to ensure compliance with healthcare regulations and legal requirements.
          </li>
          <li>
            Platform administrators may periodically review or update verification status to maintain professional accountability.
          </li>
        </ul>
      </li>

      <li>
        <strong>Benefits:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Protects patients by ensuring that only qualified and licensed professionals provide healthcare services.
          </li>
          <li>
            Ensures Aven Health meets regional legal and regulatory obligations for telehealth services.
          </li>
        </ul>
      </li>

      <li>
        <strong>Protection Measures:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Sensitive verification data (license numbers, certificates) is encrypted and access-restricted.
          </li>
          <li>
            Verification records are logged and auditable but are not shared externally unless legally mandated.
          </li>
        </ul>
      </li>

    </ul>
  </div>

  {/* 4.5 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      4.5 Analytics for Platform Improvement
    </h3>

    <ul className="list-disc pl-6 space-y-2">

      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Professional usage data, service offerings, appointment metrics, and platform interactions are analyzed to improve platform functionality, user experience, and service delivery.
          </li>
          <li>
            Data may be used to identify trends, optimize matching algorithms, evaluate feature usage, and inform professional development tools.
          </li>
          <li>
            Aggregate and anonymized data may support reporting and strategic decision-making without revealing personally identifiable information.
          </li>
        </ul>
      </li>

      <li>
        <strong>Benefits:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Enhances the efficiency and effectiveness of telehealth services.
          </li>
          <li>
            Supports continuous improvement of professional engagement, patient outcomes, and platform performance.
          </li>
        </ul>
      </li>

      <li>
        <strong>Protection Measures:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            All analytics are performed on anonymized or aggregated datasets wherever possible.
          </li>
          <li>
            Access to detailed usage data is limited to authorized platform staff and is governed by strict internal policies and audit controls.
          </li>
        </ul>
      </li>

    </ul>
  </div>

  <p className="mt-6">
    Professional data is used exclusively to enable secure account management, support patient
    care, ensure compliance with regulatory standards, and optimize the platform. Aven Health
    ensures that all uses of professional data are lawful, ethical, and aligned with the
    professional’s consent, and that sensitive data is encrypted, access-controlled, audited, and
    protected against unauthorized use.
  </p>
</section>
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-4">
    5. Legal Basis for Processing Professional Data
  </h2>

  <p className="mb-4">
    Aven Health collects, stores, and processes professional data only when there is a clear and
    lawful justification. The platform adheres to applicable data protection and healthcare
    regulations, ensuring that all processing of professional information is transparent,
    proportional, and necessary for the provision of telehealth services.
  </p>

  <p className="mb-6">
    The primary legal bases for processing professional data are as follows:
  </p>

  {/* 5.1 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      5.1 Consent from the Professional
    </h3>

    <ul className="list-disc pl-6 space-y-2">

      <li>
        <strong>Definition and Scope:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Professionals provide explicit consent when registering on the platform, creating their profile, or engaging with platform features.
          </li>
          <li>
            Consent includes agreeing to the collection, storage, and processing of personal and sensitive professional data, as well as patient interaction data, for the purposes described in this Privacy Policy.
          </li>
        </ul>
      </li>

      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Consent enables Aven Health to process professional data for account management, telehealth service delivery, scheduling, and communications.
          </li>
          <li>
            Consent also covers the use of professional data for analytics, platform improvements, and quality assurance initiatives.
          </li>
        </ul>
      </li>

      <li>
        <strong>Safeguards:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Professionals can withdraw consent at any time, with clear procedures provided for account deactivation or data deletion where legally permissible.
          </li>
          <li>
            Consent records are securely stored and auditable to demonstrate compliance with data protection laws.
          </li>
        </ul>
      </li>

    </ul>
  </div>

  {/* 5.2 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      5.2 Contractual Necessity
    </h3>

    <ul className="list-disc pl-6 space-y-2">

      <li>
        <strong>Definition and Scope:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Certain processing activities are necessary to fulfill the contractual relationship between Aven Health and the professional.
          </li>
          <li>
            This includes enabling access to the platform, facilitating telehealth consultations, managing bookings, processing payments, and supporting patient-professional interactions.
          </li>
        </ul>
      </li>

      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Ensures that the professional can provide healthcare services through the platform.
          </li>
          <li>
            Enables Aven Health to meet its obligations as a service provider, such as appointment scheduling, fee processing, and secure communication facilitation.
          </li>
        </ul>
      </li>

      <li>
        <strong>Safeguards:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Data processed under contractual necessity is restricted to relevant platform functions.
          </li>
          <li>
            Sensitive professional and patient data is protected using encryption, role-based access control, and regular audits.
          </li>
        </ul>
      </li>

    </ul>
  </div>

  {/* 5.3 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      5.3 Legal Obligations
    </h3>

    <ul className="list-disc pl-6 space-y-2">

      <li>
        <strong>Definition and Scope:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Processing may be required to comply with applicable healthcare, telehealth, or professional licensing regulations.
          </li>
          <li>
            Examples include reporting to medical councils, verifying licenses, maintaining audit trails for compliance, and adhering to anti-fraud or anti-money-laundering laws.
          </li>
        </ul>
      </li>

      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Ensures that professionals are qualified and legally authorized to provide care.
          </li>
          <li>
            Protects patients by guaranteeing compliance with professional and regulatory standards.
          </li>
          <li>
            Supports lawful disclosure requests from regulatory authorities or governmental bodies.
          </li>
        </ul>
      </li>

      <li>
        <strong>Safeguards:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Only the minimum necessary professional data is disclosed to meet legal obligations.
          </li>
          <li>Disclosures are logged and monitored for audit purposes.</li>
          <li>Any shared data is handled securely and confidentially.</li>
        </ul>
      </li>

    </ul>
  </div>

  {/* 5.4 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      5.4 Legitimate Interests
    </h3>

    <ul className="list-disc pl-6 space-y-2">

      <li>
        <strong>Definition and Scope:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Aven Health may process professional data to pursue legitimate platform interests, provided these interests do not override the professional’s rights and privacy.
          </li>
          <li>
            Examples include platform security, fraud detection, prevention of unauthorized access, monitoring for misuse, and protection of patients and other platform users.
          </li>
        </ul>
      </li>

      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Detecting suspicious login attempts or unusual activity to prevent fraud.
          </li>
          <li>
            Ensuring that only verified professionals interact with patients.
          </li>
          <li>
            Maintaining system integrity, monitoring for technical issues, and improving operational security.
          </li>
        </ul>
      </li>

      <li>
        <strong>Safeguards:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Legitimate interest processing is limited in scope and strictly necessary for the stated purposes.
          </li>
          <li>
            Continuous risk assessments are conducted to balance platform security needs with professional privacy.
          </li>
          <li>
            Data used for security purposes is monitored and protected through encryption, access control, and audit logs.
          </li>
        </ul>
      </li>

    </ul>
  </div>

  <p className="mt-6">
    Aven Health processes professional data only when there is a lawful basis, such as consent,
    contractual necessity, legal compliance, or legitimate interest. All processing is purpose-driven,
    transparent, and secure, with strict safeguards including encryption, role-based access control,
    audit trails, and limited disclosure, ensuring that professional privacy is respected while
    enabling safe, compliant, and efficient telehealth services.
  </p>
</section>
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-4">
    6. Patient Health Data Handling
  </h2>

  <p className="mb-4">
    Aven Health is committed to ensuring that patient health data is treated with the highest
    standards of confidentiality, security, and compliance. Professionals on the platform are
    granted access only to the patient information necessary to provide care, and all data
    handling is governed by strict technical, administrative, and ethical safeguards.
  </p>

  {/* 6.1 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      6.1 Access Limitation to Relevant Data
    </h3>

    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Professionals are provided access only to patient data that is directly relevant to consultations, treatment, and care planning.
          </li>
          <li>
            This includes information such as current conditions, medical history, prior consultations, medications, goals, and journal entries that are pertinent to the service being provided.
          </li>
          <li>
            Access is role-based: a professional cannot view unrelated patient records or data outside their assigned consultations.
          </li>
        </ul>
      </li>

      <li>
        <strong>Benefits:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Minimizes exposure of sensitive patient data.</li>
          <li>Reduces risk of data misuse or unauthorized disclosure.</li>
          <li>
            Ensures professionals focus on relevant clinical information for safe and effective care.
          </li>
        </ul>
      </li>

      <li>
        <strong>Safeguards:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Access permissions are strictly controlled by the platform and continuously reviewed.
          </li>
          <li>
            All access events are logged in audit trails to maintain accountability.
          </li>
        </ul>
      </li>
    </ul>
  </div>

  {/* 6.2 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      6.2 End-to-End Encryption of Communications
    </h3>

    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Telehealth chat messages, video consultations, and file exchanges between professionals and patients are secured using end-to-end encryption (E2EE).
          </li>
          <li>
            This ensures that only the professional and the patient can read the content of communications, preventing unauthorized interception, modification, or access.
          </li>
        </ul>
      </li>

      <li>
        <strong>Benefits:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Protects sensitive patient health information during real-time interactions.
          </li>
          <li>
            Maintains the privacy and trust necessary for secure telehealth services.
          </li>
        </ul>
      </li>

      <li>
        <strong>Safeguards:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Encryption keys are securely managed and are only accessible to the endpoints (professional and patient).
          </li>
          <li>
            Platform servers cannot decrypt communications, ensuring true end-to-end security.
          </li>
        </ul>
      </li>
    </ul>
  </div>

  {/* 6.3 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      6.3 Storage and Access Controls for Medical Records
    </h3>

    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Patient health data, consultation notes, prescriptions, and related medical records are stored securely in encrypted databases.
          </li>
          <li>
            Professionals can retrieve and update only the records related to their own consultations, maintaining both functionality and security.
          </li>
        </ul>
      </li>

      <li>
        <strong>Benefits:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Ensures continuity of care by maintaining accurate and complete medical records.
          </li>
          <li>
            Supports compliance with medical, telehealth, and data protection regulations.
          </li>
        </ul>
      </li>

      <li>
        <strong>Protection Measures:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Data is encrypted both at rest and in transit.</li>
          <li>
            Access to stored data is controlled through role-based permissions, multi-factor authentication, and strict audit logging.
          </li>
          <li>
            Regular security assessments and backups are conducted to prevent data loss or unauthorized access.
          </li>
        </ul>
      </li>
    </ul>
  </div>

  {/* 6.4 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      6.4 Professional Responsibility for Independent Recordkeeping
    </h3>

    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Professionals are responsible for maintaining their own records of patient interactions, prescriptions, and clinical notes in accordance with their professional standards and legal obligations.
          </li>
          <li>
            The platform facilitates recordkeeping but does not replace the professional’s duty to maintain compliant, independent documentation.
          </li>
        </ul>
      </li>

      <li>
        <strong>Benefits:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Ensures that all clinical activity can be referenced for ongoing patient care, audits, or regulatory inspections.
          </li>
          <li>
            Provides professionals with the ability to maintain historical records outside the platform if required by local laws or institutional policies.
          </li>
        </ul>
      </li>

      <li>
        <strong>Safeguards:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Professionals are guided on best practices for recordkeeping and are encouraged to synchronize platform records with independent documentation.
          </li>
          <li>
            Platform audit logs support accountability while respecting professional independence.
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <p className="mt-6">
    Aven Health ensures that patient health data is accessed, stored, and communicated securely,
    with access limited strictly to relevant professionals. End-to-end encryption, role-based
    permissions, encrypted storage, and audit trails are employed to safeguard patient
    confidentiality. Professionals retain responsibility for independent recordkeeping, reinforcing
    compliance, accountability, and continuity of care. This layered approach protects patients,
    supports regulatory compliance, and maintains trust in telehealth services.
  </p>
</section>
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-4">
    7. Data Sharing & Disclosure
  </h2>

  <p className="mb-4">
    Aven Health treats professional data with the highest level of confidentiality and security.
    Sharing of professional information is strictly controlled, limited to purposes necessary for
    service delivery, legal compliance, or operational functionality. Professionals’ consent,
    platform policies, and applicable regulations govern all data disclosures.
  </p>

  {/* 7.1 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      7.1 Sharing with Patients (As Authorized)
    </h3>

    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Professionals’ publicly relevant profile information—such as name, title, qualifications, specialties, offered services, consultation modes, availability, and professional summary—is shared with patients to facilitate informed selection and secure engagement.
          </li>
          <li>
            Any sensitive data, such as license numbers or identity verification documents, is never shared directly with patients unless explicitly authorized or required for transparency in patient-professional interactions.
          </li>
        </ul>
      </li>

      <li>
        <strong>Benefits:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Enables patients to verify credentials and make informed decisions about which professional to consult.
          </li>
          <li>
            Builds trust between professionals and patients through transparent, accurate profile information.
          </li>
        </ul>
      </li>

      <li>
        <strong>Safeguards:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Only authorized profile fields are displayed.</li>
          <li>
            Access is controlled by the platform to prevent unauthorized exposure of sensitive professional data.
          </li>
        </ul>
      </li>
    </ul>
  </div>

  {/* 7.2 */}
  <div className="mb-6">
    <h3 className="font-semibold mb-2">
      7.2 Platform Internal Operations
    </h3>

    <ul className="list-disc pl-6 space-y-2">
      <li>
        <strong>Purpose and Use:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Professional data is shared internally within the platform to support essential operational functions, including:
          </li>
          <li>Scheduling and appointment management.</li>
          <li>
            Matching professionals with patients based on specialization, availability, and patient preferences.
          </li>
          <li>
            Generating professional recommendations, performance metrics, and internal analytics.
          </li>
          <li>
            This internal use ensures the platform functions efficiently and provides a seamless telehealth experience.
          </li>
        </ul>
      </li>

      <li>
        <strong>Benefits:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Improves workflow efficiency for professionals.</li>
          <li>
            Supports platform algorithms that optimize patient-professional matching.
          </li>
          <li>
            Enables accurate tracking of professional activity and service quality.
          </li>
        </ul>
      </li>

      <li>
        <strong>Safeguards:</strong>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            Internal data sharing is restricted to authorized system components and staff.
          </li>
          <li>
            Access is monitored, logged, and regularly audited to prevent misuse.
          </li>
          <li>
            Professional identifiers are protected with encryption when used in system operations and analytics.
          </li>
        </ul>
      </li>
    </ul>
  </div>

  <p className="mt-6">
    Professional data is shared only when necessary and with strict controls: with patients to
    facilitate care, internally for operational purposes, with regulatory authorities to meet legal
    obligations, and with trusted third-party service providers to maintain platform functionality.
    No professional data is sold or used for external advertising, and all disclosures are governed
    by encryption, access control, audit logs, and contractual safeguards, ensuring
    confidentiality, accountability, and compliance at all times.
  </p>
</section>
{/* Section 8 */}
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-3">8. International Data Transfers</h2>
  <p className="mb-4">
    Aven Health may transfer professional and patient data across national borders to support
    platform operations, cloud storage, backup, and telehealth functionality. Such transfers are
    conducted in strict compliance with applicable data protection regulations to ensure that
    personal and sensitive professional data remain secure, confidential, and protected against
    unauthorized access.
  </p>

  <h3 className="text-lg font-semibold mb-2">8.1 Disclosure of Server Locations</h3>

  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Data collected on the platform, including professional profiles, consultation
      records, appointment metadata, and system logs, may be stored on servers
      located in Belgium (Region: Belgium East-1) or other secure cloud regions
      managed by trusted cloud service providers.
    </li>
    <li>
      This ensures reliable data storage, low-latency access, disaster recovery, and
      high availability for professionals and patients using the platform globally.
    </li>
  </ul>

  <p className="font-medium">Benefits:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>Supports uninterrupted telehealth services and platform reliability.</li>
    <li>
      Enables secure cloud-based storage with geographically redundant backups to
      prevent data loss.
    </li>
  </ul>

  <p className="font-medium">Protection Measures:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Data stored on these servers is encrypted at rest and in transit, ensuring
      confidentiality.
    </li>
    <li>
      Servers are hosted in ISO-certified and GDPR-compliant data centers with
      strict physical and digital security protocols.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">8.2 Safeguards for Cross-Border Data Transfers</h3>

  <p className="font-medium">Legal and Contractual Safeguards:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Cross-border transfers are governed by contractual agreements with cloud and
      service providers, requiring compliance with applicable data protection laws
      (e.g., GDPR).
    </li>
    <li>
      Standard contractual clauses and data processing agreements ensure that
      professional and patient data cannot be accessed or processed outside the
      platform’s intended purposes.
    </li>
  </ul>

  <p className="font-medium">Technical Safeguards:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Data is encrypted both at rest and during transmission, using industry-standard
      cryptographic protocols.
    </li>
    <li>
      Access is strictly limited to authorized platform systems and personnel, with
      detailed logging and audit trails.
    </li>
  </ul>

  <p className="font-medium">Operational Safeguards:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>Only the minimum necessary data is transferred across borders.</li>
    <li>
      Data transfers are monitored and reviewed regularly to maintain security,
      compliance, and integrity.
    </li>
  </ul>

  <p className="font-medium">Professional and Patient Assurance:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals are informed that their data may be stored internationally and can
      request information about how their data is handled during cross-border
      transfers.
    </li>
    <li>
      The platform ensures that transferred data continues to be protected under
      equivalent or higher privacy and security standards as those applied in the
      professional’s country of residence.
    </li>
  </ul>

  <p>
    Aven Health may store and process professional and patient data on secure servers in Belgium
    East-1 or other compliant regions to maintain platform functionality and reliability. All cross-border
    data transfers are conducted with strict technical, legal, and operational safeguards,
    including encryption, access controls, audit trails, and contractual protections. This approach
    ensures that professional data remains confidential, secure, and compliant with international
    privacy regulations, even when processed or stored outside the professional’s home
    jurisdiction.
  </p>
</section>

{/* Section 9 */}
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-3">9. Data Retention</h2>
  <p className="mb-4">
    Aven Health retains professional and patient data only for as long as necessary to provide
    services, comply with legal obligations, and ensure platform functionality. Data retention
    policies are designed to balance operational needs, regulatory compliance, and professional and
    patient privacy.
  </p>

  <h3 className="text-lg font-semibold mb-2">9.1 Professional Account Retention</h3>

  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professional account data, including identity, qualifications, licenses, profile
      information, and preferences, is retained for the duration of the professional’s
      active engagement with the platform.
    </li>
    <li>
      Retaining professional accounts allows ongoing management of appointments,
      patient interactions, billing, and compliance activities.
    </li>
  </ul>

  <p className="font-medium">Retention Period:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Active professional accounts: Data is retained indefinitely while the account
      remains active.
    </li>
    <li>
      Inactive or deactivated accounts: Data may be retained for 48 months after
      account closure to fulfill contractual, regulatory, or legal obligations.
    </li>
  </ul>

  <p className="font-medium">Protection Measures:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Even during retention after account deactivation, sensitive professional data is
      encrypted and access-restricted, with audit logs maintained for compliance
      purposes.
    </li>
    <li>
      Professionals can request account deletion or anonymization in accordance
      with applicable privacy laws, subject to retention requirements for legal
      compliance.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">9.2 Consultation and Patient Data Retention</h3>

  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Data generated during consultations including patient health records,
      appointment notes, chat messages, prescriptions, and progress tracking, is
      retained to support continuity of care, professional accountability, and
      regulatory compliance.
    </li>
  </ul>

  <p className="font-medium">Retention Period:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Telehealth consultation records: Typically retained for a minimum of 5–10 years,
      consistent with regional medical and telehealth regulations.
    </li>
    <li>
      End-to-end encrypted chat messages, appointment logs, and billing records:
      Retained for audit, security, and operational purposes, in alignment with
      professional and legal requirements.
    </li>
  </ul>

  <p className="font-medium">Protection Measures:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>All patient data is encrypted at rest and in transit.</li>
    <li>
      Role-based access ensures that only authorized professionals or platform
      personnel can access records.
    </li>
    <li>Audit logs maintain a record of all access, edits, and disclosures.</li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">9.3 Legal Compliance Obligations</h3>

  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Certain professional and patient data may be retained beyond standard
      operational timelines to satisfy legal, regulatory, or contractual obligations.
    </li>
    <li>Examples include:</li>
    <li>Verification of professional licenses or certifications.</li>
    <li>Regulatory reporting or audit requirements.</li>
    <li>Legal proceedings, malpractice claims, or insurance documentation.</li>
  </ul>

  <p className="font-medium">Retention Period:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Data retained for legal purposes is maintained only for the duration required by
      applicable law or regulation.
    </li>
    <li>
      Once the legal retention period expires, data is securely deleted, anonymized,
      or archived according to platform policies.
    </li>
  </ul>

  <p className="font-medium">Protection Measures:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Data retained for legal compliance is isolated, encrypted, and access-controlled,
      ensuring it is protected from unauthorized access or misuse.
    </li>
    <li>
      Regular reviews and audits ensure that retained data continues to meet
      compliance requirements without retaining excessive information.
    </li>
  </ul>

  <p>
    Aven Health’s data retention policy ensures that professional and patient data is stored only as
    long as necessary, whether for active platform use, continuity of care, or legal compliance. All
    retained data is secure, access-controlled, and regularly reviewed, with mechanisms in place
    for deletion, anonymization, or secure archiving once retention periods expire. This approach
    balances operational functionality, professional accountability, patient safety, and regulatory
    obligations while protecting confidentiality and privacy.
  </p>
</section>
{/* Section 10 */}
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-3">10. Professional Rights</h2>
  <p className="mb-4">
    Professionals using the Aven Health platform have specific rights regarding their personal
    and professional data. These rights ensure transparency, control, and accountability in the
    processing of professional information and support compliance with privacy laws and ethical
    obligations.
  </p>

  <h3 className="text-lg font-semibold mb-2">10.1 Right of Access</h3>
  <p className="font-medium">Definition and Scope:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals have the right to request access to the personal and professional
      data that Aven Health stores about them, including identity details, credentials,
      profile information, appointment history, and platform interactions.
    </li>
    <li>
      This includes both information provided by the professional and system-generated
      metadata related to their account usage.
    </li>
  </ul>
  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Enables professionals to verify the accuracy, completeness, and lawfulness of data
      processing.
    </li>
    <li>
      Supports transparency and accountability in professional data handling.
    </li>
  </ul>
  <p className="font-medium">Process:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals may submit an access request through the platform’s account
      management interface or via formal support channels.
    </li>
    <li>
      Aven Health responds within the timeframe mandated by applicable law,
      providing the requested information in a clear, readable format.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">10.2 Right to Correction</h3>
  <p className="font-medium">Definition and Scope:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals may request correction or updating of inaccurate, incomplete, or
      outdated data in their profile or account records.
    </li>
    <li>
      This includes contact details, professional qualifications, license numbers,
      service offerings, and consultation-related information.
    </li>
  </ul>
  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Ensures that patient-facing information remains accurate and reliable.
    </li>
    <li>
      Supports regulatory compliance and proper professional representation on the
      platform.
    </li>
  </ul>
  <p className="font-medium">Process:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals can submit correction requests through the profile management
      interface or by contacting platform support.
    </li>
    <li>
      Changes are reviewed, verified where necessary (e.g., for credentials or licenses),
      and updated promptly.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">10.3 Right to Deletion (Right to Be Forgotten)</h3>
  <p className="font-medium">Definition and Scope:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals can request deletion of their personal data from the platform,
      subject to legal, contractual, and operational obligations.
    </li>
    <li>
      Certain data may be retained for legitimate purposes, such as fulfilling regulatory
      obligations, audit requirements, or ongoing consultations, but is anonymized or
      archived whenever possible.
    </li>
  </ul>
  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Provides professionals with control over the presence of their data on the
      platform.
    </li>
    <li>
      Ensures compliance with privacy regulations that recognize the right to erasure.
    </li>
  </ul>
  <p className="font-medium">Process:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Deletion requests are submitted via account settings or formal communication
      channels.
    </li>
    <li>
      Aven Health evaluates the request, deletes data that can be removed, and notifies
      the professional of any data retained for legal or operational reasons.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">10.4 Withdrawal of Consent</h3>
  <p className="font-medium">Definition and Scope:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals may withdraw consent for data processing activities that were
      initially based on explicit consent, such as marketing communications or
      optional analytics.
    </li>
  </ul>
  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Ensures that professionals retain control over how their data is used beyond
      essential platform operations.
    </li>
  </ul>
  <p className="font-medium">Process:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Consent withdrawal can be initiated via account settings or support channels.
    </li>
    <li>
      Withdrawal does not affect the legality of data processing conducted prior to
      withdrawal or data processing required for contractual or legal obligations.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">10.5 Data Portability</h3>
  <p className="font-medium">Definition and Scope:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals have the right to request their personal data in a structured,
      commonly used, and machine-readable format.
    </li>
    <li>
      This includes profile information, credentials, appointment history, and
      consultation metadata.
    </li>
  </ul>
  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Facilitates the transfer of professional data to other platforms or systems,
      enabling interoperability and professional mobility.
    </li>
  </ul>
  <p className="font-medium">Process:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Aven Health provides a secure export mechanism or delivers the requested data
      securely upon verified request.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">10.6 Restriction of Processing</h3>
  <p className="font-medium">Definition and Scope:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals can request that processing of their data be restricted in certain
      circumstances, such as while a correction is pending, or when the professional
      contests the accuracy of data.
    </li>
  </ul>
  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Limits the use of professional data to essential activities only, preserving data
      integrity and privacy until disputes are resolved.
    </li>
  </ul>
  <p className="font-medium">Process:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Requests for processing restriction are submitted via account settings or support.
    </li>
    <li>
      The platform implements technical measures to suspend non-essential processing
      and notifies the professional once restriction is applied.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">10.7 Right to Lodge Complaints with Regulators</h3>
  <p className="font-medium">Definition and Scope:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals have the right to lodge complaints with supervisory authorities if
      they believe their data is processed in violation of applicable privacy or data
      protection laws.
    </li>
  </ul>
  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Ensures accountability and provides an external mechanism for professional
      recourse.
    </li>
  </ul>
  <p className="font-medium">Process:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Aven Health provides guidance and support for professionals wishing to contact
      relevant regulators.
    </li>
    <li>
      Complaints may be submitted to authorities such as national data protection
      agencies or telehealth regulatory boards, depending on jurisdiction.
    </li>
  </ul>

  <p>
    Aven Health ensures that professionals retain full rights over their personal and professional
    data, including access, correction, deletion, withdrawal of consent, data portability, restriction
    of processing, and the ability to lodge complaints. These rights are supported through clear
    procedures, secure mechanisms, and adherence to applicable privacy laws, reinforcing
    transparency, accountability, and trust between professionals and the platform.
  </p>
</section>

{/* Section 11 */}
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-3">11. Account Deletion & Data Deletion Process</h2>
  <p className="mb-4">
    Aven Health ensures that professional accounts and associated data can be securely deleted
    or deactivated, while maintaining compliance with applicable legal and regulatory obligations,
    including patient safety, telehealth regulations, and professional licensing requirements.
  </p>

  <h3 className="text-lg font-semibold mb-2">11.1 Termination of Professional Account</h3>

  <p className="font-medium">Voluntary Account Deletion:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals may request termination of their account through the platform
      interface or by contacting Aven Health support.
    </li>
    <li>
      Upon verification of the request, the platform will deactivate the professional’s
      access and initiate the data deletion or anonymization process.
    </li>
  </ul>

  <p className="font-medium">Involuntary Account Termination:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Accounts may be terminated by Aven Health for violations of platform policies,
      regulatory non-compliance, or ethical breaches.
    </li>
    <li>
      Terminated accounts trigger audit and retention processes to comply with legal
      and regulatory obligations.
    </li>
  </ul>

  <p className="font-medium">Data Handling Post-Termination:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Profile information, credentials, and personally identifiable data are deleted or
      anonymized according to retention schedules.
    </li>
    <li>
      Data required for legal compliance (e.g., regulatory reporting, malpractice claims,
      or ongoing patient care documentation) is retained securely, access-controlled,
      and encrypted.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">11.2 Handling of Patient Data Post-Deletion</h3>

  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Patient health records linked to the professional remain accessible only to
      authorized platform personnel and the patient for continuity of care, legal
      compliance, and audit purposes.
    </li>
    <li>
      Deleted professional accounts do not compromise patient access to their own
      health data.
    </li>
  </ul>

  <p className="font-medium">Retention and Protection Measures:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Patient consultation history, prescriptions, and medical notes are retained
      according to regulatory timelines, even after the professional’s account is
      deleted.
    </li>
    <li>
      Any data no longer required for legal or operational purposes is securely deleted
      or anonymized.
    </li>
    <li>
      End-to-end encrypted communications remain inaccessible to the deleted
      professional.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">11.3 Compliance with Regulatory Retention Requirements</h3>

  <p className="font-medium">Legal Obligations in Kenya:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Under Kenyan health regulations and the Kenya Medical Practitioners and
      Dentists Board (KMPDB) guidelines, certain professional and patient records
      must be retained for minimum periods, typically:
    </li>
    <li>
      Patient medical records: at least 7 years from the last consultation or
      treatment.
    </li>
    <li>
      Professional registration and licensing information: retained as required for
      audit or verification purposes.
    </li>
  </ul>

  <p className="font-medium">Platform Implementation:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Retention schedules are enforced automatically, and data exceeding regulatory
      requirements is either anonymized or securely deleted.
    </li>
    <li>
      Logs of deletions and retention decisions are maintained to demonstrate
      compliance with regulatory obligations.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">11.4 Legal Posting Guidelines for Professionals (Kenya Context)</h3>

  <p className="font-medium">General Principle:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals may promote their services and expertise only in a manner that is
      truthful, ethical, and compliant with Kenyan medical advertising laws,
      including the Medical Practitioners and Dentists Act (Cap 253) and KMPDB
      guidelines.
    </li>
  </ul>

  <p className="font-medium">Permissible Posts:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Accurate descriptions of professional qualifications, specialties, and services
      offered.
    </li>
    <li>
      Announcements regarding availability for consultation, telehealth services, or
      institutional affiliations.
    </li>
    <li>
      Educational content about general health topics, wellness, and preventive care,
      without making claims about guaranteed outcomes.
    </li>
    <li>
      Professional achievements, awards, or certifications that can be independently
      verified.
    </li>
  </ul>

  <p className="font-medium">Prohibited Posts:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      False, misleading, or exaggerated claims about medical services or outcomes.
    </li>
    <li>
      Direct solicitation of patients or advertisement of services that may create undue
      inducement.
    </li>
    <li>
      Comparative or disparaging statements about other professionals or institutions.
    </li>
    <li>
      Promotions of products or services outside professional scope unless approved by
      regulatory authorities.
    </li>
  </ul>

  <p className="font-medium">Platform Enforcement:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Aven Health monitors professional postings to ensure compliance with Kenyan
      medical advertising laws.
    </li>
    <li>
      Violations may result in content removal, account warnings, or account
      termination, with records maintained for regulatory accountability.
    </li>
  </ul>

  <p>
    Aven Health ensures that account and data deletion is secure, transparent, and compliant
    with both internal policies and Kenyan regulatory requirements. Professionals retain the
    right to terminate their account while the platform preserves patient safety and legal
    compliance. Additionally, professionals must ensure that all content they post adheres
    strictly to Kenyan medical advertising laws, ensuring truthful, ethical, and responsible
    representation of services.
  </p>
</section>
{/* Section 12 */}
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-3">12. Security Measures</h2>
  <p className="mb-4">
    Aven Health employs a comprehensive, multi-layered approach to security to ensure that
    professional and patient data is protected from unauthorized access, disclosure, modification, or
    loss. Security measures combine technical, administrative, and organizational safeguards,
    designed to comply with legal and regulatory obligations while maintaining platform reliability
    and confidentiality.
  </p>

  <h3 className="text-lg font-semibold mb-2">12.1 Encryption and Data Protection</h3>

  <p className="font-medium">Data in Transit and at Rest:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      All professional and patient data, including profile information, consultation
      records, appointment metadata, and communications, is encrypted using
      industry-standard cryptographic protocols both in transit and at rest.
    </li>
    <li>
      End-to-end encryption (E2EE) is applied to telehealth chats, video consultations,
      and file transfers between professionals and patients, ensuring only intended
      recipients can access the content.
    </li>
  </ul>

  <p className="font-medium">Secure Servers:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Data is stored on ISO-certified, GDPR-compliant servers located in Belgium
      East-1 and other trusted cloud regions.
    </li>
    <li>
      Servers feature physical security controls, redundancy, and disaster recovery
      mechanisms to prevent data loss and ensure platform availability.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">12.2 Access Controls and Authentication Safeguards</h3>

  <p className="font-medium">Role-Based Access Control (RBAC):</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Access to professional and patient data is strictly limited based on user role,
      ensuring professionals can only access data necessary for consultations, and
      platform administrators only access operationally required information.
    </li>
  </ul>

  <p className="font-medium">Authentication Measures:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Secure login procedures, including multi-factor authentication (MFA),
      password complexity requirements, and session monitoring, protect professional
      accounts from unauthorized access.
    </li>
    <li>
      Access attempts, successful logins, and failed authentication events are logged
      and audited to detect potential security incidents.
    </li>
  </ul>

  <p className="font-medium">Administrative Oversight:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Platform administrators and technical staff access sensitive data only when
      required for operational or regulatory purposes.
    </li>
    <li>
      All administrative actions are logged, monitored, and subject to periodic review.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">12.3 Network and Application Security</h3>

  <p className="font-medium">Firewalls and Intrusion Detection:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      The platform is protected by enterprise-grade firewalls, intrusion detection,
      and intrusion prevention systems to mitigate unauthorized access attempts.
    </li>
  </ul>

  <p className="font-medium">Regular Vulnerability Assessments:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Security assessments, penetration testing, and vulnerability scanning are
      conducted periodically to identify and remediate potential weaknesses.
    </li>
  </ul>

  <p className="font-medium">Software Updates and Patching:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      All platform components, including web applications, APIs, and databases, are
      kept up-to-date to prevent exploitation of known security vulnerabilities.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">12.4 Data Backup and Disaster Recovery</h3>

  <p className="font-medium">Purpose and Use:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Data backups are performed regularly and securely, ensuring that professional
      and patient data can be restored in the event of accidental deletion, technical
      failure, or cybersecurity incident.
    </li>
  </ul>

  <p className="font-medium">Retention and Security:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Backup data is encrypted, access-restricted, and stored in geographically
      redundant locations.
    </li>
  </ul>

  <p className="font-medium">Recovery Procedures:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Disaster recovery plans are in place to restore platform operations quickly and
      securely, minimizing downtime and data loss.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">12.5 Limitations of Liability</h3>

  <p className="font-medium">Acknowledgment of Risk:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      While Aven Health implements robust security measures, no system is
      completely immune to cyber threats, technical failures, or unauthorized access.
    </li>
    <li>
      Professionals acknowledge that certain risks, such as phishing, malware, or
      sophisticated cyberattacks, cannot be fully eliminated despite the platform’s
      safeguards.
    </li>
  </ul>

  <p className="font-medium">Liability Scope:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Aven Health is not liable for losses resulting from unauthorized access caused
      by professional negligence, such as sharing credentials or failing to follow
      recommended security practices.
    </li>
    <li>
      Platform liability is limited to breaches arising from demonstrable failure of
      Aven Health’s security measures, consistent with contractual and regulatory
      obligations.
    </li>
  </ul>

  <p>
    Aven Health employs state-of-the-art encryption, access control, authentication safeguards,
    and secure server infrastructure to protect professional and patient data. Combined with
    administrative oversight, network security, and disaster recovery processes, these measures
    ensure the confidentiality, integrity, and availability of sensitive information. Professionals are
    also responsible for following security best practices, and the platform limits liability to
    circumstances where security failures arise directly from platform shortcomings.
  </p>
</section>

{/* Section 13 */}
<section className="mb-8">
  <h2 className="text-xl font-semibold mb-3">13. Children’s Privacy</h2>
  <p className="mb-4">
    Aven Health is designed primarily for use by licensed healthcare professionals, allied medical
    staff, and adult patients. The platform enforces a minimum age requirement of 18 years for
    professional accounts, and interactions with minors (patients under 18) are strictly regulated to
    comply with applicable child protection and privacy laws.
  </p>

  <h3 className="text-lg font-semibold mb-2">13.1 Age Restrictions</h3>

  <p className="font-medium">Professional Accounts:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Only individuals 18 years or older may register as professionals on the platform.
    </li>
    <li>
      Verification processes ensure that all professionals meet the minimum age
      requirement and hold the appropriate qualifications and licenses.
    </li>
  </ul>

  <p className="font-medium">Patient Accounts:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      While the platform primarily serves adults, minors may interact with
      professionals only under parental or legal guardian supervision.
    </li>
    <li>
      Parents or guardians are required to provide consent for the collection and
      processing of their child’s health data.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">13.2 Collection and Use of Minor Patient Data</h3>

  <p className="font-medium">Limited Scope:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Professionals may access only the health information relevant to the minor
      patient’s consultation.
    </li>
    <li>
      No personal or sensitive data of minors is collected beyond what is strictly
      necessary for providing care and managing appointments.
    </li>
  </ul>

  <p className="font-medium">Parental/Guardian Consent:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      The platform ensures that parental or legal guardian consent is obtained prior to
      processing any health data of minors.
    </li>
    <li>
      Parents/guardians may exercise all applicable rights, including access, correction,
      or deletion of the child’s data, in accordance with applicable privacy laws.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">13.3 Security Measures for Minors</h3>

  <p className="font-medium">End-to-End Encryption:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Communications and health records related to minor patients are secured using
      end-to-end encryption, ensuring confidentiality and limiting access strictly to
      authorized professionals and guardians.
    </li>
  </ul>

  <p className="font-medium">Access Controls:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Role-based access ensures that only assigned professionals and authorized
      guardians can view or modify minor patient data.
    </li>
  </ul>

  <h3 className="text-lg font-semibold mb-2">13.4 Prohibition on Targeted Marketing</h3>

  <p className="font-medium">Children’s Data:</p>
  <ul className="list-disc ml-6 mb-4">
    <li>
      Aven Health does not use the data of minors for advertising or marketing
      purposes.
    </li>
    <li>
      No promotions, solicitations, or targeted ads are directed at patients under 18
      years of age.
    </li>
  </ul>

  <p>
    Aven Health enforces an 18+ age policy for professionals and regulates interactions with minor
    patients to ensure safety, consent, and privacy. Minor patient data is collected and processed
    only with guardian authorization, for the purpose of providing care, and protected using
    strict access controls and encryption. No minor data is used for marketing or advertising,
    ensuring full compliance with child privacy regulations and ethical healthcare practices.
  </p>
</section>
<section id="community-public-information">
  <h2>14. Community & Public Information</h2>
  <p>
    Aven Health provides professionals with the ability to interact with patients and the broader
    platform community while maintaining privacy, ethical standards, and compliance with
    regulatory obligations. This section outlines how professional data is presented publicly, how
    feedback is managed, and the rules governing professional-patient interactions in public spaces.
  </p>

  <h3>14.1 Professional Profile Visibility</h3>
  <ul>
    <li><strong>Purpose and Scope:</strong>
      <ul>
        <li>Certain professional information is publicly visible to patients and other platform users to facilitate informed selection of healthcare providers.</li>
        <li>Publicly visible data may include:
          <ul>
            <li>Name and professional title (e.g., Doctor, Psychologist, Counselor)</li>
            <li>Profile photo and biography</li>
            <li>Specialties and services offered</li>
            <li>Professional affiliations (e.g., hospitals or clinics)</li>
            <li>Consultation availability and modes (online or physical)</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>Benefits:</strong>
      <ul>
        <li>Enables patients to make informed decisions when choosing a professional.</li>
        <li>Builds trust and transparency between professionals and the platform community.</li>
      </ul>
    </li>
    <li><strong>Privacy Safeguards:</strong>
      <ul>
        <li>Sensitive information such as license numbers, identity documents, regulatory IDs, and personal contact information is never publicly visible.</li>
        <li>Professionals can manage which non-sensitive profile fields are visible to the public through platform settings.</li>
      </ul>
    </li>
  </ul>

  <h3>14.2 Public Feedback and Ratings</h3>
  <ul>
    <li><strong>Purpose and Scope:</strong>
      <ul>
        <li>Patients may provide feedback or ratings for professionals based on consultations or interactions on the platform.</li>
        <li>Feedback may include numerical ratings and textual comments about service quality, professionalism, and responsiveness.</li>
      </ul>
    </li>
    <li><strong>Benefits:</strong>
      <ul>
        <li>Supports quality assurance, professional accountability, and platform trustworthiness.</li>
        <li>Provides professionals with insights into patient satisfaction and areas for improvement.</li>
      </ul>
    </li>
    <li><strong>Privacy and Moderation:</strong>
      <ul>
        <li>Feedback is publicly visible only in aggregated or moderated form to prevent disclosure of sensitive personal or medical information.</li>
        <li>Professionals cannot access the identity of patients providing anonymous feedback unless the patient explicitly consents.</li>
        <li>Aven Health monitors public comments to ensure compliance with platform policies and professional conduct standards.</li>
      </ul>
    </li>
  </ul>

  <h3>14.3 Interaction Rules with Patients in Public Forums</h3>
  <ul>
    <li><strong>Professional Conduct Guidelines:</strong>
      <ul>
        <li>Professionals must interact with patients in public spaces in a professional, respectful, and ethical manner, consistent with local medical and telehealth regulations.</li>
        <li>Discussions in public forums should avoid sharing personal patient information or making individualized medical recommendations publicly.</li>
      </ul>
    </li>
    <li><strong>Prohibited Activities:</strong>
      <ul>
        <li>Soliciting patients or advertising services outside regulatory and platform-approved methods.</li>
        <li>Sharing confidential patient health data, identifiable consultation notes, or prescriptions in public forums.</li>
        <li>Posting false, misleading, or unverified medical claims.</li>
      </ul>
    </li>
    <li><strong>Compliance and Monitoring:</strong>
      <ul>
        <li>Public forum interactions are monitored to ensure adherence to professional and ethical standards.</li>
        <li>Violations of conduct rules may result in content removal, warnings, or account suspension to maintain platform integrity and regulatory compliance.</li>
      </ul>
    </li>
  </ul>
  <p>
    Aven Health ensures that professional information shared in the community or public domains
    is transparent, accurate, and limited to non-sensitive data. Public feedback and ratings are
    moderated to protect patient confidentiality while supporting professional accountability.
    Professionals must follow strict interaction rules in public forums to maintain ethical standards,
    comply with local regulations, and safeguard both patient privacy and platform trust.
  </p>
</section>

<section id="changes-to-policy">
  <h2>15. Changes to This Policy</h2>
  <p>
    Aven Health may periodically update or revise this Professional Privacy Policy to reflect
    changes in platform operations, legal or regulatory requirements, security practices, or other
    developments. These updates are implemented to ensure continued transparency, compliance,
    and protection of professional and patient data.
  </p>

  <h3>15.1 Notification of Updates</h3>
  <ul>
    <li><strong>Professional Notification:</strong>
      <ul>
        <li>Professionals will be notified of any material changes to this privacy policy through multiple channels, which may include:
          <ul>
            <li>In-app notifications upon login</li>
            <li>Email alerts to the registered professional account</li>
            <li>Announcements in the professional account dashboard</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>Purpose and Use:</strong>
      <ul>
        <li>Ensures that professionals are aware of changes affecting the collection, use, retention, or sharing of their data.</li>
        <li>Provides an opportunity for professionals to review, accept, or seek clarification regarding the updates.</li>
      </ul>
    </li>
    <li><strong>Transparency Measures:</strong>
      <ul>
        <li>All updates are documented in a version history, clearly identifying the changes made, the effective date, and the sections impacted.</li>
        <li>Summaries of material changes are provided to facilitate quick understanding of policy modifications.</li>
      </ul>
    </li>
  </ul>

  <h3>15.2 Effective Date of Changes</h3>
  <ul>
    <li><strong>Implementation:</strong>
      <ul>
        <li>Updated policies will specify an effective date, which may be immediate or after a defined notice period to allow professionals to review the changes.</li>
        <li>In cases where consent is required for specific processing activities, professionals may be prompted to re-confirm their acceptance of the updated policy before continuing to use the platform.</li>
      </ul>
    </li>
    <li><strong>Legal and Regulatory Compliance:</strong>
      <ul>
        <li>Changes are designed to comply with applicable data protection regulations and ensure that continued use of the platform constitutes agreement to the updated terms.</li>
        <li>Professionals who do not agree to the updated policy may request account deletion or suspension, following the procedures outlined in Section 11.</li>
      </ul>
    </li>
  </ul>
  <p>
    Aven Health commits to maintaining a transparent and accountable process for updating this
    Professional Privacy Policy. Professionals are promptly notified of any changes, and all
    modifications clearly indicate their effective date and impact. The platform ensures that
    professionals have the opportunity to review and consent to updates, preserving trust, legal
    compliance, and alignment with best practices in professional data protection.
  </p>
</section>

<section id="contact-information">
  <h2>16. Contact Information</h2>
  <p>
    Professionals can contact Aven Health regarding privacy concerns, data access requests,
    corrections, or any questions related to this Professional Privacy Policy. The platform provides
    clear and accessible contact channels to ensure transparency, accountability, and timely
    resolution of privacy-related matters.
  </p>

  <h3>16.1 Privacy Contact Email</h3>
  <ul>
    <li><strong>Purpose and Use:</strong>
      <ul>
        <li>Professionals may contact the designated privacy officer or support team via email for:
          <ul>
            <li>Requests to access, correct, or delete professional data</li>
            <li>Withdrawal of consent for certain data processing activities</li>
            <li>Questions or clarifications regarding data collection, storage, or sharing</li>
            <li>Reporting suspected privacy violations or security incidents</li>
          </ul>
        </li>
      </ul>
    </li>
    <li><strong>Contact Email:</strong>
      <ul>
        <li>
          <a href="mailto:avenhealthke@gmail.com" style={{ color: '#1E90FF' }}>
            avenhealthke@gmail.com
          </a>
        </li>
        <li>Professionals can expect a response within the timeframe mandated by applicable data protection laws, typically 30 days for standard requests.</li>
      </ul>
    </li>
    <li><strong>Security Considerations:</strong>
      <ul>
        <li>When sending sensitive information, professionals are encouraged to use secure email channels or encrypted attachments to protect the confidentiality of their data.</li>
      </ul>
    </li>
  </ul>
  <p>
    Aven Health provides professionals with clear and accessible contact channels for all privacy-related matters. Both email and physical address communications are monitored and handled in a secure, timely, and compliant manner, ensuring that professionals can exercise their rights, raise concerns, and obtain information regarding the handling of their personal and professional data.
  </p>
</section>

  </div>
);     

export default MedicalPrivacyPolicy;
