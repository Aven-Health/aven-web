export default function UserAgreement() {
  return (
    <div className="min-h-screen bg-cardDark text-white p-10 space-y-6">
      <h1 className="text-3xl font-bold mb-4">User Terms and Conditions</h1>

      {/* Section 1: Introduction / Scope */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">1. Introduction / Scope</h2>
        <p>
          Welcome to <strong>Aven Health</strong>. These Terms and Conditions (“Terms”) govern your use of the Aven Health platform, 
          including our website, mobile applications, services, and related features (collectively, the “Platform”).
        </p>
        <p>
          By creating an account, accessing, or using the Platform, you agree to be legally bound by these Terms. 
          If you do not agree with any part of these Terms, you must not use the Platform.
        </p>

        <h3 className="text-xl font-semibold">1.1 Scope of the Terms</h3>
        <p>These Terms apply to all users of the Platform, including but not limited to:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Individuals seeking health information, telehealth consultations, or pharmacy services (“Users”).</li>
          <li>Healthcare professionals providing services via the Platform (“Professionals”).</li>
          <li>Verified pharmacies and medical stores offering products through the Platform (“Pharmacies”).</li>
        </ul>
        <p>The Terms cover:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Account creation, access, and responsibilities</li>
          <li>User rights and obligations</li>
          <li>Use of services, including telehealth, community interactions, and pharmacy transactions</li>
          <li>Payment processing, recommendations, and interactions with other users and professionals</li>
          <li>Intellectual property, content ownership, and restrictions</li>
          <li>Liability, dispute resolution, and legal compliance</li>
        </ul>

        <h3 className="text-xl font-semibold">1.2 Acceptance of Terms</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>By using the Platform, you confirm that you are at least 18 years old and legally capable of entering into a binding agreement.</li>
          <li>Continued use of the Platform constitutes acceptance of these Terms, including any updates or amendments made from time to time.</li>
          <li>Users are encouraged to review the Terms regularly to remain informed of their rights and obligations.</li>
        </ul>

        <h3 className="text-xl font-semibold">1.3 Relationship to Privacy Policy</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>These Terms are complemented by Aven Health’s Privacy Policy, which explains how your personal and health data is collected, used, stored, and shared.</li>
          <li>By agreeing to these Terms, you also acknowledge and accept the Privacy Policy.</li>
        </ul>
      </section>

      {/* Section 2: Eligibility */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">2. Eligibility</h2>

        <h3 className="text-xl font-semibold">2.1 Age Requirement</h3>
        <p>
          The Aven Health Platform is intended solely for use by individuals who are eighteen (18) years of age or older. 
          By creating an account, accessing, or using the Platform, you expressly represent and warrant that you are at least 18 years old 
          and possess the legal capacity to enter into a binding agreement under the laws applicable in your jurisdiction.
        </p>
        <p>
          The Platform is not directed to minors, and Aven Health does not knowingly permit individuals under the age of 18 to register 
          for or use the services. If Aven Health becomes aware that an account has been created by a person under 18 years of age, 
          or that a user has misrepresented their age, Aven Health reserves the right to immediately suspend or terminate the account 
          and remove associated data, without prior notice and without liability.
        </p>
        <p>
          It is your responsibility to ensure that your use of the Platform complies with all applicable laws and that you meet the 
          eligibility requirements at all times.
        </p>

        <h3 className="text-xl font-semibold">2.2 Account Registration</h3>
        <p>
          Certain features of the Platform, including telehealth consultations, participation in communities, interaction with healthcare 
          professionals, pharmacy services, and personalized recommendations, require the creation of a registered user account.
        </p>
        <p>
          When registering for an account, you agree to provide information that is accurate, complete, and current. This may include, 
          but is not limited to, your full name, email address, gender, date of birth, and any profile information you voluntarily choose 
          to provide, such as a profile image.
        </p>
        <p>
          You further agree to promptly update your account information if it changes, so that it remains accurate and complete at all times.
        </p>
        <p>
          You may not create more than one account for personal use unless expressly authorized by Aven Health. Accounts may not be 
          created using false identities, impersonated information, or misleading details. Any attempt to misrepresent identity, age, 
          or credentials may result in suspension or termination of the account.
        </p>
        <p>
          You acknowledge that Aven Health relies on the accuracy of the information you provide in order to deliver its services 
          effectively and safely, including health-related features. You are solely responsible for the truthfulness and accuracy 
          of your registration details.
        </p>

        <h3 className="text-xl font-semibold">2.3 Account Security</h3>
        <p>
          You are responsible for maintaining the confidentiality and security of your login credentials, including your password 
          and any authentication methods associated with your account. You agree not to share your credentials with any third 
          party and to take reasonable steps to prevent unauthorized access to your account.
        </p>
        <p>
          You are fully responsible for all activities that occur under your account, whether or not such activities are authorized by you. 
          If you suspect or become aware of any unauthorized access, security breach, or misuse of your account, you must notify Aven Health 
          immediately through the designated support channels.
        </p>
        <p>
          Aven Health shall not be liable for any loss, damage, or unauthorized activity arising from your failure to safeguard your account 
          credentials or from unauthorized access resulting from your negligence.
        </p>

        <h3 className="text-xl font-semibold">2.4 Right to Refuse or Terminate Access</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Aven Health reserves the right, at its sole discretion and without obligation to provide prior notice, to refuse registration, suspend access, restrict certain features, or terminate accounts where it reasonably believes that:</li>
          <ul className="list-disc ml-6 space-y-1">
            <li>A user has violated these Terms;</li>
            <li>A user has misrepresented their identity, age, or eligibility;</li>
            <li>A user has engaged in fraudulent, abusive, unlawful, or harmful conduct;</li>
            <li>Continued access poses a risk to the integrity, security, or lawful operation of the Platform.</li>
          </ul>
          <li>Termination or suspension under this section may result in the loss of access to account data, content, and services. 
              Aven Health shall not be liable for any consequences arising from such suspension or termination where action is taken 
              in accordance with these Terms.</li>
        </ul>
      </section>

      {/* Section 3: User Accounts and Responsibilities */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">3. User Accounts and Responsibilities</h2>

        <h3 className="text-xl font-semibold">3.1 Account Ownership and Personal Use</h3>
        <p>
          User accounts on Aven Health are personal to the registered individual and may not be transferred, assigned, sold, or shared with any other person. 
          Each account is intended for use solely by the individual who registered it.
        </p>
        <p>
          You agree not to allow any third party to access or use your account under any circumstances. 
          Any activity conducted through your account will be presumed to have been carried out by you.
        </p>

        <h3 className="text-xl font-semibold">3.2 Accuracy of Information</h3>
        <p>
          You are responsible for ensuring that all information provided to Aven Health, whether during registration or at any time thereafter, is accurate, complete, and not misleading.
        </p>
        <p>This includes, but is not limited to:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Identity and contact information</li>
          <li>Demographic details such as gender and date of birth</li>
          <li>Health-related information you voluntarily provide</li>
          <li>Information submitted for appointments, pharmacy services, or community participation</li>
        </ul>
        <p>
          You acknowledge that Aven Health may rely on this information to deliver services, generate recommendations, facilitate interactions 
          with healthcare professionals or pharmacies, and maintain platform integrity.
        </p>
        <p>
          Providing false, outdated, or misleading information may result in suspension or termination of your account and may affect 
          the accuracy of services delivered through the Platform.
        </p>

        <h3 className="text-xl font-semibold">3.3 Credential Security</h3>
        <ul className="list-disc ml-6 space-y-1">
          <li>Keep your credentials confidential</li>
          <li>Use strong and secure passwords</li>
          <li>Avoid accessing the Platform through unsecured or shared devices without appropriate precautions</li>
        </ul>
        <p>
          Aven Health is not responsible for unauthorized access to your account that results from your failure to maintain adequate security over your credentials. 
          If you believe your account has been compromised, accessed without authorization, or subjected to any security breach, you must notify Aven Health immediately. 
          Aven Health may take reasonable steps to secure the account, including temporary suspension or password reset requirements.
        </p>

        <h3 className="text-xl font-semibold">3.4 Responsibility for Account Activity</h3>
        <p>You are responsible for all actions taken under your account, including:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Content posted in Thoughts or Communities</li>
          <li>Messages sent to other users or professionals</li>
          <li>Appointments booked</li>
          <li>Pharmacy interactions</li>
          <li>Purchases or transactions processed through the Platform</li>
        </ul>
        <p>
          You agree that you will use the Platform in a lawful and responsible manner and will not use your account for fraudulent, harmful, abusive, discriminatory, or unlawful purposes. 
          Aven Health reserves the right to monitor account activity where necessary to ensure compliance with these Terms and applicable law.
        </p>

        <h3 className="text-xl font-semibold">3.5 Compliance With Applicable Laws</h3>
        <p>
          You agree to use the Platform in compliance with:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>All applicable laws and regulations in Kenya and your jurisdiction</li>
          <li>Healthcare-related regulations where applicable</li>
          <li>Anti-discrimination and anti-harassment laws</li>
          <li>Applicable professional conduct standards where relevant</li>
        </ul>
        <p>
          You are solely responsible for ensuring that your use of the Platform does not violate any applicable legal or regulatory requirement.
        </p>

        <h3 className="text-xl font-semibold">3.6 Platform Integrity and Cooperation</h3>
        <p>You agree not to:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Attempt to bypass security measures</li>
          <li>Interfere with the operation of the Platform</li>
          <li>Reverse engineer or exploit any part of the Platform</li>
          <li>Use automated tools to access or scrape content</li>
          <li>Engage in conduct that disrupts other users’ experience</li>
        </ul>
        <p>
          You further agree to cooperate with Aven Health in good faith in the event of investigations related to misuse, security breaches, or regulatory compliance.
        </p>
        {/* ================= Section 4: Platform Use Rules ================= */}
<h1 className="text-3xl font-bold mb-4">4. Platform Use Rules</h1>

{/* 4.1 Lawful and Responsible Use */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">4.1 Lawful and Responsible Use</h2>
  <p>
    The Platform must be used solely for lawful, ethical, and responsible purposes consistent with its role as a health-focused digital service. You agree that you will not use the Platform in any way that:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>Violates applicable laws or regulations;</li>
    <li>Infringes the rights of others;</li>
    <li>Disrupts or interferes with the operation, integrity, or security of the Platform; or</li>
    <li>Undermines the safety and trust of other users.</li>
  </ul>
  <p>
    Aven Health reserves the right to monitor activity where necessary to ensure compliance with these Terms and applicable law.
  </p>
</section>

{/* 4.2 Content Posting Rules */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">4.2 Content Posting Rules (Thoughts and User Content)</h2>
  <p>
    The Platform allows users to post content in the form of text, images, videos, documents, and other materials (“User Content”), including through the Thoughts feature and community participation.
  </p>
  <p>By posting content, you acknowledge and agree that:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>You are solely responsible for the content you create, upload, or share.</li>
    <li>You must have the legal right to post any content you submit.</li>
    <li>You understand that content posted publicly may be visible to other users of the Platform.</li>
  </ul>
  <p>You agree not to post, upload, transmit, or share any content that:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Is discriminatory, hateful, or promotes violence against individuals or groups;</li>
    <li>Contains threats, harassment, abuse, or intimidation;</li>
    <li>Contains unlawful, fraudulent, or misleading information;</li>
    <li>Promotes medical misinformation or unsafe health practices;</li>
    <li>Infringes intellectual property or privacy rights of others;</li>
    <li>Contains explicit, exploitative, or otherwise inappropriate material;</li>
    <li>Advertises or promotes unauthorized services in violation of applicable law.</li>
  </ul>
  <p>
    Aven Health reserves the right, at its sole discretion, to remove content that violates these Terms and to suspend or terminate accounts responsible for such violations.
  </p>
</section>

{/* 4.3 Anonymous Posting */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">4.3 Anonymous Posting</h2>
  <p>
    The Platform may allow users to post content anonymously. While your identity may not be publicly displayed, you remain fully responsible for the content you submit. Anonymous posting does not exempt you from compliance with these Terms or applicable law. Aven Health may take appropriate action against users who misuse anonymous features.
  </p>
</section>

{/* 4.4 Community Participation Rules */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">4.4 Community Participation Rules</h2>
  <p>
    The Platform includes community features where users may interact, share messages, and exchange content. Users acknowledge and agree that:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>Community content may be visible to other users of the Platform.</li>
    <li>Membership in a community may require approval by a community administrator.</li>
    <li>Community administrators may remove members at their discretion based on community rules or standards.</li>
  </ul>
  <p>
    Aven Health does not control the independent decisions of community administrators regarding membership approval or removal. However, Aven Health reserves the right to intervene where community activity violates Platform rules or applicable law. Users must engage respectfully and comply with all stated community guidelines.
  </p>
</section>

{/* 4.5 Prohibition on Misuse of Health Services */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">4.5 Prohibition on Misuse of Health Services</h2>
  <p>You agree not to use the Platform to:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Seek fraudulent prescriptions;</li>
    <li>Impersonate another individual or healthcare professional;</li>
    <li>Provide medical advice unless properly licensed and authorized;</li>
    <li>Circumvent regulatory safeguards;</li>
    <li>Solicit or engage in unlawful medical advertising.</li>
  </ul>
  <p>
    Where applicable, healthcare professional conduct must comply with Kenyan regulatory standards, including restrictions on medical advertising and promotion.
  </p>
</section>

{/* 4.6 No Unauthorized Advertising or Solicitation */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">4.6 No Unauthorized Advertising or Solicitation</h2>
  <p>The Platform may not be used for unauthorized commercial solicitation, promotional campaigns, or advertising activities. Users may not:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Promote unrelated products or services;</li>
    <li>Send unsolicited commercial messages;</li>
    <li>Engage in spam or bulk messaging;</li>
    <li>Use the Platform to circumvent professional advertising restrictions under applicable law.</li>
  </ul>
  <p>
    Aven Health reserves the right to remove promotional content and suspend accounts engaged in unauthorized advertising.
  </p>
</section>

{/* 4.7 Enforcement and Moderation */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">4.7 Enforcement and Moderation</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>Monitor content and activity where reasonably necessary;</li>
    <li>Remove or restrict access to content;</li>
    <li>Issue warnings;</li>
    <li>Suspend or permanently terminate accounts.</li>
  </ul>
  <p>
    Enforcement decisions may be made without prior notice where necessary to protect users, comply with law, or preserve Platform integrity. Aven Health shall not be liable for actions taken in good faith to enforce these Terms.
  </p>
</section>
{/* ================= Section 5: Health Services Disclaimer ================= */}
<h1 className="text-3xl font-bold mb-4">5. Health Services Disclaimer</h1>

{/* 5.1 Nature of the Platform */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">5.1 Nature of the Platform</h2>
  <p>
    Aven Health is a digital platform that facilitates communication and interaction between users, licensed healthcare professionals, and verified pharmacies. The Platform provides tools for appointment booking, communication, prescription management, community engagement, and access to pharmacy services.
  </p>
  <p>
    Aven Health does not provide medical care, diagnosis, or treatment directly. Healthcare services made available through the Platform are provided independently by licensed healthcare professionals who are solely responsible for the medical services they deliver. Nothing on the Platform shall be interpreted as the practice of medicine by Aven Health.
  </p>
</section>

{/* 5.2 No Substitute for In-Person Medical Care */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">5.2 No Substitute for In-Person Medical Care</h2>
  <p>Telehealth services provided through the Platform are not a substitute for in-person medical evaluation in all circumstances. You acknowledge and agree that:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Certain medical conditions require physical examination, laboratory testing, imaging, or emergency intervention.</li>
    <li>Remote consultations may have inherent limitations due to the absence of physical examination.</li>
    <li>The accuracy and effectiveness of telehealth services depend on the completeness and accuracy of the information you provide.</li>
  </ul>
  <p>
    If you believe you are experiencing a medical emergency, you must immediately seek in-person emergency medical care or contact local emergency services. The Platform is not designed for emergency response or urgent life-threatening conditions.
  </p>
</section>

{/* 5.3 Professional Responsibility */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">5.3 Professional Responsibility</h2>
  <p>Healthcare professionals using the Platform are independent practitioners and are solely responsible for:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>The medical advice, diagnoses, and treatment plans they provide;</li>
    <li>The accuracy of prescriptions issued;</li>
    <li>Compliance with professional and regulatory standards applicable in their jurisdiction.</li>
  </ul>
  <p>
    Aven Health does not control, supervise, or direct the clinical judgment of healthcare professionals and does not guarantee the outcome of any medical service obtained through the Platform.
  </p>
</section>

{/* 5.4 User Responsibility */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">5.4 User Responsibility</h2>
  <p>You are responsible for:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Providing accurate and complete health information;</li>
    <li>Following medical advice at your discretion;</li>
    <li>Seeking additional or emergency care where appropriate;</li>
    <li>Verifying any information obtained through community discussions before acting upon it.</li>
  </ul>
  <p>
    Content shared within communities or posts is for informational and peer-support purposes only and does not constitute medical advice.
  </p>
</section>

{/* 5.5 No Guarantee of Outcomes */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">5.5 No Guarantee of Outcomes</h2>
  <p>Aven Health makes no representations or warranties regarding:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>The effectiveness of any medical treatment;</li>
    <li>The suitability of any healthcare professional;</li>
    <li>The availability of specific services;</li>
    <li>The outcome of consultations, prescriptions, or pharmacy transactions.</li>
  </ul>
  <p>All healthcare decisions remain solely between you and the licensed professional providing care.</p>
</section>

{/* 5.6 Limitation of Platform Liability for Medical Services */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">5.6 Limitation of Platform Liability for Medical Services</h2>
  <p>To the fullest extent permitted by applicable law, Aven Health shall not be liable for:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Any medical advice, diagnosis, or treatment provided by independent professionals;</li>
    <li>Any injury, loss, or damage arising from reliance on medical services accessed through the Platform;</li>
    <li>Any adverse outcomes resulting from incomplete or inaccurate information provided by users.</li>
  </ul>
  <p>
    This limitation does not exclude liability where prohibited by law but shall apply to the maximum extent legally permitted.
  </p>
</section>

{/* ================= Section 6: Payments and Transactions ================= */}
<h1 className="text-3xl font-bold mb-4">6. Payments and Transactions</h1>

{/* 6.1 Payment Processing */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">6.1 Payment Processing</h2>
  <p>
    Payments made through the Platform, including consultation fees and pharmacy purchases, are processed through a third-party payment provider (currently Paystack or any successor payment processor). By making a payment through the Platform, you:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>Authorize Aven Health and its payment processor to charge your selected payment method;</li>
    <li>Agree to comply with the payment processor’s terms and conditions;</li>
    <li>Acknowledge that Aven Health does not store full payment card details.</li>
  </ul>
  <p>All payments are processed electronically. Aven Health is not responsible for delays or errors caused by payment processors, banks, or financial institutions.</p>
</section>

{/* 6.2 Appointments, Consultation Fees, and Cancellation Policy */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">6.2 Appointments, Consultation Fees, and Cancellation Policy</h2>
  <p>This section governs consultation fees, appointment booking, cancellation, rescheduling, no-shows, and refunds. It ensures clarity, fairness, and accountability for both healthcare professionals and users of the Platform.</p>

  {/* 6.2.1 Consultation Fees and Appointment Payments */}
  <h3 className="text-xl font-semibold">6.2.1 Consultation Fees and Appointment Payments</h3>
  <p><strong>Setting Fees:</strong> Healthcare professionals may set their own consultation fees per service, which will be clearly displayed to users before booking. Fees may vary based on service type, specialty, consultation duration, or first-time discounts.</p>
  <p><strong>Payment Requirement:</strong> Payment must be made in advance to confirm an appointment unless the Platform specifies otherwise. Payment confirms the appointment and guarantees the time slot for both the user and professional.</p>
  <p><strong>Ledger and Tracking:</strong> The Platform automatically records all payments, including pending, completed, and disbursed fees. Professionals can track payments and appointment status via their Platform dashboard.</p>
  <p><strong>Example:</strong> Patient A books a telehealth session with Dr. B for 2 PM and pays immediately. The Platform marks the appointment as “Paid – Pending Attendance,” triggering the disbursement schedule.</p>

  {/* 6.2.2 Appointment Cancellation by User */}
  <h3 className="text-xl font-semibold">6.2.2 Appointment Cancellation by User</h3>
  <p><strong>6.2.2.1 Cancellation Cut-Off Period:</strong> Users may cancel an appointment up to 6 hours before the scheduled time without penalty. Cancellations within this 6-hour window are considered late cancellations and may affect refund eligibility.</p>
  <p><strong>6.2.2.2 Cancellation Before Appointment (Advance Notice):</strong> If the user cancels more than 6 hours before the appointment:
    <ul className="list-disc list-inside space-y-1">
      <li>Eligible for a full refund, or</li>
      <li>Eligible for a partial refund after deduction of applicable processing or platform fees.</li>
    </ul>
    Refund eligibility and amounts are clearly displayed during booking. Professionals are not penalized if the user cancels within this timeframe.
  </p>
  <p><strong>Example:</strong> Patient C cancels a 3 PM session at 8 AM the same day. Since notice was given more than 6 hours in advance, they qualify for a full refund.</p>

  {/* 6.2.2.3 Late Cancellation */}
  <p><strong>6.2.2.3 Late Cancellation (Within 6 Hours of Appointment):</strong> If the user cancels less than 6 hours before the appointment, the cancellation is considered late:
    <ul className="list-disc list-inside space-y-1">
      <li>The fee may be partially refundable or non-refundable.</li>
    </ul>
    This protects the professional from lost time and ensures compensation for reserved appointments. Professionals are expected to document their availability to claim the fee for late cancellations.
  </p>
  <p><strong>Example:</strong> Patient D cancels a 4 PM session at 11:30 AM. Since this is within 6 hours of the scheduled appointment, the professional may still receive full or partial payment.</p>

  {/* 6.2.3 Missed Appointments */}
  <h3 className="text-xl font-semibold">6.2.3 Missed Appointments (No-Show Policy)</h3>
  <p>A “no-show” occurs when a user fails to attend an appointment without prior cancellation, rescheduling, or communication. In such cases:
    <ul className="list-disc list-inside space-y-1">
      <li>65% of the consultation fee is refunded to the user.</li>
      <li>The professional receives compensation for their time, subject to verification of attendance readiness.</li>
      <li>Rebooking requires a new consultation payment.</li>
      <li>Repeated no-shows may lead to account restrictions or suspension.</li>
    </ul>
  </p>
  <p><strong>Example:</strong> Patient E does not log in for a 2 PM session, and no notice is given. The Platform automatically refunds 65% of the consultation fee, while the professional is paid within 48 hours if logs confirm readiness.</p>

  {/* 6.2.4 Professional-Initiated Cancellations */}
  <h3 className="text-xl font-semibold">6.2.4 Professional-Initiated Cancellations</h3>
  <p>Professionals must notify users immediately and reschedule the appointment at the user’s convenience. Fee Implications:
    <ul className="list-disc list-inside space-y-1">
      <li>If rescheduled promptly, no fee is deducted, and the appointment remains valid.</li>
      <li>Failure to reschedule for 5 consecutive appointments may lead to account suspension or termination.</li>
    </ul>
  </p>
  <p><strong>Example:</strong> Dr. F cancels a 10 AM session and reschedules for 2 PM the same day. No payment is affected. Missing 5 consecutive sessions without rescheduling triggers review.</p>

  {/* 6.2.5 Rescheduling Appointments */}
  <h3 className="text-xl font-semibold">6.2.5 Rescheduling Appointments</h3>
  <p>Users may request rescheduling, subject to professional availability:
    <ul className="list-disc list-inside space-y-1">
      <li>Rescheduling more than 6 hours in advance: allowed without penalty.</li>
      <li>Rescheduling within 6 hours: may be treated as a late cancellation.</li>
      <li>The Platform does not guarantee the availability of specific time slots once released.</li>
    </ul>
  </p>
  <p><strong>Example:</strong> Patient G requests a reschedule from 3 PM to 5 PM, 8 hours before the appointment. Approved reschedule is allowed without fee adjustment.</p>
</section>
{/* ================= Section 7: Intellectual Property ================= */}
<h1 className="text-3xl font-bold mb-4">7. Intellectual Property</h1>

{/* 7.1 Ownership of the Platform */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">7.1 Ownership of the Platform</h2>
  <p>
    All rights, title, and interest in and to the Aven Health Platform, including but not limited to:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>The software, source code, and application architecture;</li>
    <li>Design, layout, user interface, and visual elements;</li>
    <li>Logos, trademarks, service marks, and branding;</li>
    <li>Recommendation systems and underlying algorithms;</li>
    <li>Databases, compilations, and proprietary technology;</li>
    <li>Text, graphics, and platform-created content;</li>
  </ul>
  <p>
    are owned by or licensed to Aven Health and are protected by applicable intellectual property laws, including copyright, trademark, and other proprietary rights.
  </p>
  <p>
    Nothing in these Terms grants you ownership of the Platform or any intellectual property belonging to Aven Health. You are granted a limited, non-exclusive, non-transferable, revocable license to use the Platform solely for its intended purpose and in accordance with these Terms.
  </p>
  <p>You may not:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Copy, reproduce, distribute, modify, or create derivative works from the Platform;</li>
    <li>Reverse engineer or attempt to extract source code;</li>
    <li>Use Aven Health’s trademarks or branding without prior written consent;</li>
    <li>Use the Platform for commercial exploitation outside its intended functionality.</li>
  </ul>
</section>

{/* 7.2 User-Generated Content */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">7.2 User-Generated Content</h2>
  <p>
    The Platform allows users to create and share content, including text, images, videos, documents, messages, and other materials (“User Content”) through features such as Thoughts and Communities.
  </p>
  <p>You retain ownership of the intellectual property rights in content that you create and post. However, by posting content on the Platform, you grant Aven Health a worldwide, non-exclusive, royalty-free, transferable license to:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Host, store, reproduce, display, and distribute your content within the Platform;</li>
    <li>Adapt and format your content for technical compatibility;</li>
    <li>Use your content for purposes of operating, maintaining, improving, and promoting the Platform.</li>
  </ul>
  <p>This license continues for as long as your content remains on the Platform and may survive deletion to the extent necessary for legal compliance, backups, or dispute resolution.</p>
</section>

{/* 7.3 Public Nature of Content */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">7.3 Public Nature of Content</h2>
  <p>
    You acknowledge that content posted in public areas of the Platform, including communities and public Thoughts, may be visible to other users.
  </p>
  <p>
    You are solely responsible for the content you choose to share and understand that publicly shared content may be viewed, saved, or interacted with by others in accordance with Platform functionality.
  </p>
  <p>
    Anonymous posting does not transfer ownership of content and does not eliminate your responsibility for what you publish.
  </p>
</section>

{/* 7.4 Content Standards and Infringement */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">7.4 Content Standards and Infringement</h2>
  <p>You represent and warrant that:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>You own the content you post or have the necessary rights and permissions to share it;</li>
    <li>Your content does not infringe any third-party intellectual property rights;</li>
    <li>Your content does not violate privacy or confidentiality obligations.</li>
  </ul>
  <p>
    Aven Health reserves the right to remove content that allegedly infringes intellectual property rights or violates these Terms. If you believe your intellectual property rights have been infringed through content posted on the Platform, you may submit a formal notice to Aven Health for review.
  </p>
</section>

{/* 7.5 Feedback */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">7.5 Feedback</h2>
  <p>
    If you provide suggestions, ideas, or feedback regarding the Platform (“Feedback”), you agree that Aven Health may use such Feedback without restriction or compensation to you.
  </p>
</section>

{/* ================= Section 8: Limitation of Liability ================= */}
<h1 className="text-3xl font-bold mb-4">8. Limitation of Liability</h1>

{/* 8.1 Disclaimer of Warranties */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">8.1 Disclaimer of Warranties</h2>
  <p>
    The Aven Health Platform is provided on an “as is” and “as available” basis, without any warranties, representations, or guarantees of any kind, whether express, implied, statutory, or otherwise.
  </p>
  <p>
    To the maximum extent permitted by applicable law, Aven Health expressly disclaims all warranties, including, without limitation:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>The uninterrupted, error-free, or fully secure operation of the Platform or any associated services;</li>
    <li>The accuracy, reliability, completeness, or timeliness of any information, content, or recommendations provided on the Platform;</li>
    <li>The availability, suitability, or performance of healthcare professionals, pharmacies, products, or services listed on the Platform;</li>
    <li>The effectiveness, correctness, or safety of any consultation, prescription, treatment, or transaction facilitated through the Platform;</li>
    <li>The prevention of unauthorized access, viruses, malware, or other harmful components introduced via the Platform or its integrations;</li>
    <li>The compatibility of the Platform with any specific devices, operating systems, or browsers.</li>
  </ul>
  <p>All services, features, and content are provided without warranty of merchantability, fitness for a particular purpose, or non-infringement.</p>
</section>

{/* 8.2 Independent Professionals and Pharmacies */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">8.2 Independent Professionals and Pharmacies</h2>
  <p>
    Healthcare professionals and pharmacies available on the Platform operate as independent entities, and Aven Health does not act as a healthcare provider, pharmacist, or intermediary in a clinical capacity.
  </p>
  <p>Aven Health shall not be responsible for:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Any medical advice, diagnosis, or treatment provided by healthcare professionals;</li>
    <li>Professional negligence, malpractice, errors, or omissions by practitioners;</li>
    <li>Accuracy, legality, safety, or quality of any products, prescriptions, or medications dispensed by pharmacies;</li>
    <li>Errors, delays, or omissions in prescription fulfillment, product preparation, dispatch, or delivery;</li>
    <li>Any loss, injury, or damage arising from reliance on professional or pharmacy services.</li>
  </ul>
  <p>
    All decisions regarding your health, treatment, and product use are solely between you and the relevant licensed professional or pharmacy. Aven Health does not guarantee outcomes or suitability of services or products.
  </p>
</section>

{/* 8.3 User-Generated Content */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">8.3 User-Generated Content</h2>
  <p>
    The Platform allows users to create, post, and share content, including posts, comments, media, and other materials (“User Content”).
  </p>
  <p>
    Aven Health does not pre-screen or verify all user-generated content and is not responsible for:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>Statements, opinions, or advice posted by other users;</li>
    <li>Offensive, misleading, fraudulent, or unlawful content submitted by users;</li>
    <li>Interactions, disputes, or conflicts that may arise between users;</li>
    <li>The accuracy or applicability of health-related information shared in communities, public posts, or anonymous submissions.</li>
  </ul>
  <p>Users engage with the Platform at their own risk. While Aven Health may moderate or remove content, there is no obligation to monitor all activity or detect violations.</p>
</section>

{/* 8.4 No Liability for Indirect, Incidental, or Consequential Loss */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">8.4 No Liability for Indirect, Incidental, or Consequential Loss</h2>
  <p>
    To the maximum extent permitted by law, Aven Health shall not be liable for any indirect, incidental, consequential, punitive, or special damages, including but not limited to:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>Loss of profits, revenue, business opportunities, or goodwill;</li>
    <li>Loss, corruption, or unauthorized access to data;</li>
    <li>Emotional distress, reputational harm, or personal injury;</li>
    <li>Losses caused by technical failures, platform downtime, security breaches, or cyberattacks beyond reasonable control.</li>
  </ul>
  <p>This limitation applies regardless of whether the claim arises under contract, tort, negligence, strict liability, or other legal theories.</p>
</section>

{/* 8.5 Financial Liability Cap */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">8.5 Financial Liability Cap</h2>
  <p>
    To the fullest extent permitted by law, the maximum aggregate liability of Aven Health, its affiliates, employees, officers, or agents arising from or related to your use of the Platform shall not exceed:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>The total amount paid by you to Aven Health in the twelve (48) months immediately preceding the event giving rise to the claim; or</li>
    <li>Where no payments have been made, a reasonable statutory minimum amount as allowed under applicable law.</li>
  </ul>
  <p>This cap applies to all claims, whether direct or indirect, arising from technical, operational, or service-related issues.</p>
</section>

{/* 8.6 Exceptions to Limitations */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">8.6 Exceptions to Limitations</h2>
  <p>
    Nothing in these Terms shall exclude or limit liability where prohibited by law, including liability for:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>Fraud or fraudulent misrepresentation;</li>
    <li>Gross negligence or willful misconduct;</li>
    <li>Any other liability that cannot legally be excluded under applicable regulations.</li>
  </ul>
</section>

{/* 8.7 User Assumption of Risk */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">8.7 User Assumption of Risk</h2>
  <p>
    By accessing and using the Platform, you acknowledge and accept that:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>Telehealth services are inherently limited by the absence of in-person evaluation;</li>
    <li>Interactions with other users, professionals, or pharmacies carry inherent risks;</li>
    <li>Publicly shared content and anonymous postings may be viewed and engaged with by other users;</li>
    <li>Technical failures, delays, or breaches may occur despite reasonable safeguards;</li>
    <li>Health-related decisions and actions taken based on information obtained through the Platform are solely your responsibility.</li>
  </ul>
  <p>
    You voluntarily assume all risks associated with your use of the Platform and its services, acknowledging that no reliance on the Platform should replace appropriate professional judgment or in-person care where required.
  </p>
</section>
{/* ================= Section 9: Termination ================= */}
<h1 className="text-3xl font-bold mb-4">9. Termination</h1>

{/* 9.1 Voluntary Termination by User */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">9.1 Voluntary Termination by User</h2>
  <p>You have the right to voluntarily terminate or delete your account at any time. This can be done by:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Using the account deletion feature provided within the Platform; or</li>
    <li>Contacting Aven Health’s support team via the provided communication channels to request account closure.</li>
  </ul>
  <p>Upon voluntary termination:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Your access to all Platform features, including appointment booking, telehealth consultations, community participation, content creation, and pharmacy services, will be immediately revoked.</li>
    <li>Any remaining credits, balances, subscriptions, or pre-paid services may be forfeited unless otherwise explicitly stated in the applicable Payment & Transactions or subscription policy.</li>
    <li>Certain information, including medical records, transaction history, and regulatory compliance data, may be retained by Aven Health as required by law, regulation, or contractual obligations. This retention ensures compliance with health regulations, auditing requirements, and dispute resolution processes.</li>
  </ul>
  <p>Users are responsible for removing or managing their own content where applicable, though some publicly posted content may persist to meet operational, legal, or archival requirements.</p>
</section>

{/* 9.2 Termination or Suspension by Aven Health */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">9.2 Termination or Suspension by Aven Health</h2>
  <p>Aven Health reserves the right, at its sole discretion, to suspend, restrict, or permanently terminate a user’s account, without prior notice, for any reason including but not limited to:</p>
  <ol className="list-decimal list-inside space-y-1">
    <li>
      <strong>Violation of Terms or Law</strong>
      <ul className="list-disc list-inside">
        <li>Breach of any provision of these Terms or any applicable laws, regulations, or professional guidelines.</li>
      </ul>
    </li>
    <li>
      <strong>Fraudulent or Abusive Behavior</strong>
      <ul className="list-disc list-inside">
        <li>Engagement in fraud, harassment, discriminatory behavior, hate speech, illegal activity, or any conduct harmful to the Platform, its users, or professionals.</li>
      </ul>
    </li>
    <li>
      <strong>False or Misleading Information</strong>
      <ul className="list-disc list-inside">
        <li>Providing false, incomplete, or misleading information during registration or use of the Platform.</li>
      </ul>
    </li>
    <li>
      <strong>Platform Interference</strong>
      <ul className="list-disc list-inside">
        <li>Attempts to access, disrupt, reverse engineer, or interfere with Platform operations, security, or other users’ experiences.</li>
      </ul>
    </li>
    <li>
      <strong>Payment Non-Compliance or No-Shows</strong>
      <ul className="list-disc list-inside">
        <li>Repeated failure to attend scheduled appointments without proper cancellation or non-payment of fees.</li>
      </ul>
    </li>
    <li>
      <strong>Regulatory or Legal Requirements</strong>
      <ul className="list-disc list-inside">
        <li>Actions required to comply with Kenyan telehealth regulations, global privacy laws (e.g., GDPR), or professional and pharmacy compliance obligations.</li>
      </ul>
    </li>
  </ol>
  <p>Suspension or termination decisions are final and may be applied at Aven Health’s discretion, including for preliminary investigations or suspected violations.</p>
</section>

{/* 9.3 Effect of Suspension */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">9.3 Effect of Suspension</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>Access to all or selected Platform features will be temporarily restricted, including appointments, content posting, and community participation.</li>
    <li>Ongoing appointments, pharmacy orders, or transactions may be paused, canceled, or rescheduled, depending on the nature of the suspension.</li>
    <li>Aven Health may investigate the circumstances surrounding the suspension. Users may be asked to provide information to resolve disputes or clarify compliance concerns.</li>
    <li>Suspension does not relieve users of financial obligations incurred prior to or during suspension, including consultation fees, product payments, or service charges.</li>
  </ul>
</section>

{/* 9.4 Effect of Termination */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">9.4 Effect of Termination</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>Your account will be permanently deactivated, and all access to Platform services, recommendations, telehealth features, and community content will cease.</li>
    <li>Aven Health may retain certain information, including transaction history, appointment records, medical records, and communications, solely for purposes of regulatory compliance, legal obligations, dispute resolution, fraud prevention, and operational integrity.</li>
    <li>Publicly posted User Content (e.g., Thoughts, community discussions) may remain accessible to other users or archived to satisfy legal or operational requirements.</li>
    <li>No refunds are guaranteed for services or products already rendered, except as explicitly stated under the Payment & Transactions policy or refund terms.</li>
  </ul>
</section>

{/* 9.5 Consequences of Rule Violations */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">9.5 Consequences of Rule Violations</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>Permanent exclusion from creating new accounts or accessing services;</li>
    <li>Reporting to relevant authorities in cases of illegal, fraudulent, or harmful activity;</li>
    <li>Forfeiture of pre-paid services, credits, or appointments, particularly where violation caused disruption;</li>
    <li>Removal of interactions, posts, or content deemed harmful, illegal, abusive, or in violation of Platform policies.</li>
  </ul>
  <p>These measures are intended to protect the integrity, safety, and trust of the Aven Health community.</p>
</section>

{/* 9.6 Regulatory and Legal Compliance */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">9.6 Regulatory and Legal Compliance</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>Kenyan regulations governing telemedicine, digital health records, pharmacy transactions, and professional conduct;</li>
    <li>Global privacy laws applicable to users accessing the Platform internationally (e.g., GDPR, HIPAA-equivalent standards);</li>
    <li>Professional and pharmacy compliance obligations, including anti-advertisement laws, medical licensing regulations, and professional standards;</li>
    <li>Legal obligations to retain or disclose data in cases of audits, legal proceedings, or public health investigations.</li>
  </ul>
  <p>Users acknowledge and accept that regulatory compliance may necessitate retention or disclosure of certain account information even after account termination.</p>
</section>

{/* ================= Section 10: Governing Law & Dispute Resolution ================= */}
<h1 className="text-3xl font-bold mb-4">10. Governing Law & Dispute Resolution</h1>

{/* 10.1 Governing Law */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">10.1 Governing Law</h2>
  <p>
    These Terms and your use of the Aven Health Platform, including all services, features, content, transactions, and interactions, are governed by and interpreted in accordance with the laws of the Republic of Kenya, without regard to conflicts of law principles.
  </p>
  <p>By using the Platform, you expressly acknowledge and agree that:</p>
  <ol className="list-decimal list-inside space-y-1">
    <li>
      <strong>Primary Jurisdiction</strong> – Kenyan law will govern the interpretation, enforcement, and resolution of any disputes arising from your access to or use of the Platform. This includes all telehealth services, pharmacy transactions, social interactions, recommendations, and any data-related activities.
    </li>
    <li>
      <strong>Legal Compliance</strong> – Your rights and obligations under these Terms are subject to Kenyan statutes, regulations, and judicial precedents, including but not limited to:
      <ul className="list-disc list-inside space-y-1">
        <li>The Kenya Data Protection Act, 2019 (privacy and health data obligations);</li>
        <li>The Health Act and any telemedicine regulations;</li>
        <li>Consumer protection and e-commerce regulations.</li>
      </ul>
    </li>
    <li>
      <strong>International Users</strong> – For users accessing the Platform outside Kenya, these Terms remain primarily governed by Kenyan law, unless a specific foreign jurisdiction’s law mandatorily overrides Kenyan law for certain protections. Users accessing Aven Health from other jurisdictions must comply with local laws regarding telehealth, pharmaceuticals, and digital communications.
    </li>
  </ol>
</section>

{/* 10.2 Dispute Resolution Procedure */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">10.2 Dispute Resolution Procedure</h2>
  <p>Aven Health emphasizes early, good faith resolution of disputes to minimize cost, delay, and operational disruption. Users agree to the following steps before initiating formal proceedings:</p>
  
  {/* 10.2.1 Contact Aven Health Support */}
  <h3 className="text-xl font-semibold">10.2.1 Contact Aven Health Support</h3>
  <p>Users must submit a written complaint or concern through the official support channels provided on the Platform or via email.</p>
  <p>Submissions should include all relevant details, including account identifiers, transaction references, appointment information, and any supporting documentation or evidence. Users must allow Aven Health a reasonable period, typically 30 calendar days, to investigate and respond.</p>

  {/* 10.2.2 Good Faith Negotiation */}
  <h3 className="text-xl font-semibold">10.2.2 Good Faith Negotiation</h3>
  <p>Both parties commit to engaging in good faith negotiations to resolve disputes amicably. This process may include additional information requests, discussions with involved professionals, or mediation facilitated by Aven Health. Failure to resolve disputes through negotiation does not waive your legal rights but is a prerequisite for arbitration or litigation, except in cases requiring immediate injunctive relief.</p>
</section>

{/* 10.3 Arbitration */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">10.3 Arbitration</h2>
  <ol className="list-decimal list-inside space-y-1">
    <li>
      <strong>Scope</strong> – Arbitration applies to all disputes, claims, or controversies arising from or relating to:
      <ul className="list-disc list-inside space-y-1">
        <li>These Terms;</li>
        <li>The Platform or its features;</li>
        <li>Any transactions, appointments, consultations, or professional interactions;</li>
        <li>User-generated content or social interactions.</li>
      </ul>
    </li>
    <li>
      <strong>Location and Administration</strong> – Arbitration will take place in Nairobi, Kenya, unless the parties mutually agree on a different location. Arbitration will be conducted under the Kenya Arbitration Act, 1995 (or its successor legislation).
    </li>
    <li>
      <strong>Arbitrator Appointment</strong> – A single arbitrator shall be appointed by mutual agreement or, failing that, in accordance with the procedures in the Arbitration Act.
    </li>
    <li>
      <strong>Legal Standard</strong> – The arbitrator shall apply Kenyan law and may award any remedies available under statute or common law, including compensatory, declaratory, or injunctive relief.
    </li>
    <li>
      <strong>Binding Decision</strong> – The arbitration award is final, binding, and enforceable in any Kenyan court with jurisdiction.
    </li>
    <li>
      <strong>Costs</strong> – Arbitration costs, including arbitrator fees and reasonable legal expenses, shall be allocated at the discretion of the arbitrator, unless otherwise specified.
    </li>
  </ol>
</section>

{/* 10.4 Court Jurisdiction */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">10.4 Court Jurisdiction</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>The courts of Kenya shall have exclusive jurisdiction over any disputes related to the Platform or these Terms.</li>
    <li>Users submit to the personal and subject-matter jurisdiction of Kenyan courts and waive any objection to inconvenient venues.</li>
    <li>All claims must comply with applicable Kenyan statutes of limitation, and failure to file within the prescribed period may result in dismissal.</li>
  </ul>
</section>

{/* 10.5 Injunctive Relief and Interim Measures */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">10.5 Injunctive Relief and Interim Measures</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>Aven Health may seek injunctive relief, temporary restraining orders, or other provisional remedies from a competent Kenyan court to:
      <ul className="list-disc list-inside">
        <li>Prevent imminent harm to the Platform or its users;</li>
        <li>Protect intellectual property rights;</li>
        <li>Stop unauthorized access or data breaches;</li>
        <li>Enforce compliance with Platform rules, particularly regarding safety, fraud, or illegal activity.</li>
      </ul>
    </li>
    <li>Such relief may be sought without prior negotiation or arbitration, as permitted by law, to prevent irreparable harm.</li>
  </ul>
</section>

{/* 10.6 Waiver of Class Actions */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">10.6 Waiver of Class Actions</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>Users waive the right to initiate or participate in any class, consolidated, or representative action against Aven Health.</li>
    <li>All disputes must be resolved on an individual basis, either through arbitration or court proceedings as described above.</li>
    <li>This limitation helps preserve Platform integrity, ensures privacy of user health data, and minimizes operational and financial risk.</li>
  </ul>
</section>
{/* ================= Section 11: Changes to Terms ================= */}
<h1 className="text-3xl font-bold mb-4">11. Changes to Terms</h1>

{/* 11.1 Right to Update Terms */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">11.1 Right to Update Terms</h2>
  <p>
    Aven Health reserves the right, at its sole discretion, to modify, amend, or update these Terms and Conditions at any time. Updates may be necessary to:
  </p>
  <ul className="list-disc list-inside space-y-1">
    <li>Reflect changes in legal or regulatory requirements, including telehealth, data protection, or e-commerce laws;</li>
    <li>Address new features, services, or functionalities added to the Platform;</li>
    <li>Improve clarity, enforceability, or operational effectiveness of the Terms;</li>
    <li>Respond to security, privacy, or safety concerns;</li>
    <li>Incorporate global compliance obligations for users accessing the Platform from other jurisdictions.</li>
  </ul>
  <p>
    These updates may include modifications to user rights, obligations, fees, payment terms, platform usage rules, and dispute resolution procedures.
  </p>
</section>

{/* 11.2 User Notification */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">11.2 User Notification</h2>
  <p>When Terms are updated, Aven Health will provide notice to users through one or more of the following methods:</p>
  <ol className="list-decimal list-inside space-y-1">
    <li>
      <strong>In-App Notification</strong>: Users will receive a notification or prompt upon login requiring acknowledgment of the updated Terms before continuing to use the Platform.
    </li>
    <li>
      <strong>Email Notification</strong>: If you have registered an email address with Aven Health, a summary of the changes, along with a link to the full updated Terms, will be sent to your registered email.
    </li>
    <li>
      <strong>Effective Date Display</strong>: Updated Terms will clearly indicate the “Effective Date” at the top of the document, reflecting when the new terms come into force.
    </li>
  </ol>
  <p>
    Users are strongly encouraged to review the updated Terms each time they are notified, as continued use of the Platform after the Effective Date constitutes acceptance of the updated Terms.
  </p>
</section>

{/* 11.3 User Obligations */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">11.3 User Obligations</h2>
  <ul className="list-disc list-inside space-y-1">
    <li>You acknowledge that you have read, understood, and agreed to the updated Terms;</li>
    <li>You accept that your continued use binds you to any new rights, responsibilities, and limitations imposed by the updated Terms;</li>
    <li>If you do not agree with the changes, you must stop using the Platform and may delete your account in accordance with the Account Deletion provisions (Section 9).</li>
  </ul>
</section>

{/* 11.4 Material Changes */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">11.4 Material Changes</h2>
  <p>For material changes, including changes to:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Payment obligations, fees, or refund policies;</li>
    <li>User privacy rights or data usage;</li>
    <li>Health service delivery or professional responsibilities;</li>
    <li>Legal disclaimers, limitation of liability, or dispute resolution procedures;</li>
  </ul>
  <p>Aven Health may provide enhanced notice, including:</p>
  <ul className="list-disc list-inside space-y-1">
    <li>Prominent in-app banners or notifications requiring explicit acknowledgment;</li>
    <li>Direct emails summarizing key changes;</li>
    <li>Additional guidance or FAQs to clarify the impact of updates on users.</li>
  </ul>
  <p>Material changes will only take effect after the notice period, allowing users a reasonable opportunity to review and, if necessary, discontinue use.</p>
</section>

{/* 11.5 Binding Effect */}
<section className="space-y-2">
  <h2 className="text-2xl font-semibold">11.5 Binding Effect</h2>
  <p>
    All updates made in accordance with this section are binding on users from the Effective Date. Users who continue to use the Platform after updates are deemed to have consented to and accepted the updated Terms in their entirety.
  </p>
</section>
        
      </section>
      
    </div>
  );
}
