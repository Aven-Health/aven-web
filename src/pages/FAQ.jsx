import { useState } from "react";
import Banner from "../components/banner";
import faqBg from "../assets/faqs.jpg";

export default function FAQ() {
  const faqSections = [
    {
      title: "About Aven Health",
      faqs: [
        {
          q: "What is Aven Health?",
          a: "Aven Health is a community-first digital health platform designed to connect individuals with healthcare providers, services, and trusted health resources.",
        },
        {
          q: "Is Aven Health a hospital or clinic?",
          a: "No. Aven Health is not a healthcare provider. It serves as an access point that helps users discover, plan, and engage with healthcare services.",
        },
        {
          q: "Does Aven Health replace my doctor?",
          a: "No. Aven Health complements traditional care by helping users stay informed and connected, it does not replace medical professionals.",
        },
        {
          q: "Is Aven Health free to use?",
          a: "Core discovery and access features are designed to be widely accessible. Additional services may be introduced later.",
        },
        {
          q: "Who can use Aven Health?",
          a: "Aven Health is available to anyone seeking access to verified healthcare providers, products, and health information, subject to age and local regulations.",
        },
        {
          q: "Where is Aven Health available?",
          a: "Currently, Aven Health operates in regions where local healthcare providers and pharmacies are registered on the platform. Coverage will expand over time.",
        },
        {
          q: "What devices can I use Aven Health on?",
          a: "Aven Health is primarily available via the mobile app on iOS and Android. Web access is planned for future releases.",
        },
        {
          q: "How does Aven Health ensure quality of service?",
          a: "All doctors, medical professionals, and health stores are verified, and Aven Health continuously monitors reviews, ratings, and compliance with platform standards.",
        },
        {
          q: "Can I trust the health information on Aven Health?",
          a: "Yes. Aven Health curates trusted health content from verified professionals and sources. Users should always follow professional medical advice when making health decisions.",
        },
      ],
    },

    {
      title: "Account & Registration",
      faqs: [
        {
          q: "How do I create an account?",
          a: "You can create an account via the Aven Health app using your phone number or email. You must provide accurate personal information as required in our User Agreement.",
        },
        {
          q: "Can I update my personal information later?",
          a: "Yes, you can update your profile information in your account settings. Always ensure it is accurate to ensure correct booking and communication.",
        },
        {
          q: "Is my personal data safe?",
          a: "Yes. Aven Health uses strict security and privacy measures to protect all your personal and health information, in compliance with our Privacy Policy.",
        },
        {
          q: "Do I need to verify my account?",
          a: "Yes. Some features require verification via email or SMS to ensure account authenticity and secure access to health services.",
        },
        {
          q: "Can I have multiple accounts?",
          a: "No. Each user is allowed only one account to maintain accurate health records and appointment history.",
        },
        {
          q: "What should I do if I forget my password?",
          a: "Use the 'Forgot Password' option on the login screen to reset your password securely via email or SMS.",
        },
        {
          q: "Can I deactivate or delete my account?",
          a: "Yes. You can request account deletion or temporary deactivation through the app. Data deletion requests are processed according to the Privacy Policy and applicable laws.",
        },
        {
          q: "Are there age requirements for creating an account?",
          a: "Yes. Users must meet the minimum age requirement specified in the User Agreement. Parental consent may be required for minors.",
        },
        {
          q: "What happens if someone else uses my account?",
          a: "You should immediately report unauthorized access via the app or support email. Aven Health will help secure your account and prevent misuse.",
        },
      ],
    },

    {
      title: "Booking Appointments",
      faqs: [
        {
          q: "How do I book an appointment?",
          a: "Booking is currently available in the Aven Health app. Simply select a doctor, choose a time, and confirm. Web booking will be available in a future update.",
        },
        {
          q: "Can I book both online and in-person appointments?",
          a: "Yes. You can select online (video) or physical appointments where the doctor offers both options.",
        },
        {
          q: "Are there any limits on the number of appointments I can book?",
          a: "There are no strict limits, but availability depends on the doctor’s schedule.",
        },
        {
          q: "What happens if I need to cancel or reschedule?",
          a: "You can cancel or reschedule through the app before the cutoff time specified by the doctor. Cancellation policies are outlined in the User Agreement.",
        },
        {
          q: "Will I receive confirmation of my appointment?",
          a: "Yes. Once your appointment is booked, you will receive a confirmation notification via the app ",
        },

        {
          q: "Can I choose a specific time for my appointment?",
          a: "Yes. Appointment times depend on the doctor’s availability, but you can select from all available slots shown in the app.",
        },
        {
          q: "What should I do if my preferred slot is unavailable?",
          a: "You can choose an alternative time or set a notification to alert you when new slots become available for that doctor.",
        },
        {
          q: "Are there reminders for upcoming appointments?",
          a: "Yes. The app sends automated reminders via notifications  before your scheduled appointment.",
        },
        {
          q: "Can I book recurring appointments?",
          a: "Some doctors allow recurring appointments. You can check the doctor's availability and repeat scheduling options in the booking interface.",
        },
      ],
    },

    {
      title: "Doctors & Health Stores",
      faqs: [
        {
          q: "How are doctors verified?",
          a: "All doctors and healthcare professionals on Aven Health are verified for credentials, licensure, and certifications before they can accept appointments.",
        },
        {
          q: "Can I choose any type of doctor?",
          a: "Yes. Aven Health hosts general practitioners, specialists, mental health professionals, chronic care experts, and other certified medical professionals.",
        },
        {
          q: "How do I know if a health store or pharmacy is legitimate?",
          a: "Only verified and registered health stores and pharmacies are allowed to list their products on Aven Health. Verification ensures compliance with local regulations and platform standards.",
        },
        {
          q: "Can I see a doctor's profile before booking?",
          a: "Yes. Each doctor has a detailed profile showing qualifications, specialties, experience, ratings, and reviews from previous patients.",
        },
        {
          q: "Are all health stores’ products verified?",
          a: "Yes. Aven Health ensures that all listed products are from legitimate health stores, verified for authenticity and compliance with applicable regulations.",
        },
        {
          q: "Can I filter doctors by specialty ?",
          a: "Yes. The app allows you to search and filter doctors based on specialty, rating, availability, and consultation type (online or in-person).",
        },
        {
          q: "Can I leave a review for a doctor or health store?",
          a: "Yes. After your appointment or purchase, you can leave reviews and ratings to help other users make informed decisions.",
        },
        {
          q: "How do I report an issue with a doctor or health store?",
          a: "Any concerns or disputes can be reported through the app. Aven Health will review and mediate according to the User Agreement and Health Store Agreement.",
        },
        {
          q: "Are there telehealth doctors available on Aven Health?",
          a: "Yes. Many doctors on Aven Health offer secure online consultations via in app video call appointments, in addition to physical appointments.",
        },
      ],
    },

    {
      title: "Payments & Commissions",
      faqs: [
        {
          q: "How do I pay for appointments?",
          a: "Payments are made via the app using secure payment options such as M-pesa and credit/debit cards, mobile money, or other supported payment gateways. Pricing is displayed before you confirm your booking.",
        },
        {
          q: "Does Aven Health charge commission?",
          a: "Yes. Doctors and health stores pay a platform commission for appointments and product sales. This does not affect your listed appointment fee as a user.",
        },
        {
          q: "Will I receive a receipt or invoice for my payments?",
          a: "Yes. After completing a payment, a digital receipt is generated and can be accessed in your account for record-keeping or reimbursement purposes.",
        },
        {
          q: "Can I get a refund if an appointment is canceled?",
          a: "Refunds follow the cancellation policy set by the doctor or health store. If an appointment is canceled according to policy, you will receive a full or partial refund via the app.",
        },
        {
          q: "Are there any hidden fees?",
          a: "No. All fees are clearly displayed during booking. Aven Health does not charge hidden fees for using the platform.",
        },
        {
          q: "Can I use multiple payment methods for one appointment?",
          a: "Currently, each appointment must be paid using a single payment method. You can change the method before confirming the booking if needed.",
        },
        {
          q: "How are commissions calculated for doctors and health stores?",
          a: "Commission rates are a percentage of the appointment or product sale value and are clearly communicated to service providers in their agreements with Aven Health.",
        },
      ],
    },
    {
      title: "Privacy & Security",
      faqs: [
        {
          q: "Is my consultation private?",
          a: "Yes. All one-on-one appointments and communications on Aven Health are fully encrypted end-to-end (E2EE). This ensures that only you and your doctor can access the content of your consultation.",
        },
        {
          q: "How does Aven Health protect my personal and health data?",
          a: "Aven Health uses advanced encryption protocols, secure servers, and strict access controls to protect all personal and health-related data. Data is stored in compliance with industry standards and local regulations.",
        },
        {
          q: "Will my data be shared with third parties?",
          a: "Data is only shared as necessary for appointment processing, legal obligations, system operations, or with your explicit consent. See the Privacy Policy for full details.",
        },
        {
          q: "Can I request deletion of my data?",
          a: "Yes. Users may request deletion of their account and associated data through the app. Requests are processed according to the Privacy Policy and applicable regulations.",
        },
        {
          q: "How secure is messaging with doctors?",
          a: "All in-app messages and calls are encrypted end-to-end. No unauthorized party, including Aven Health staff, can access your private messages or consultation content.",
        },
        {
          q: "How does Aven Health prevent unauthorized access?",
          a: "Aven Health enforces strong authentication, password protection to prevent unauthorized access to user accounts.",
        },
        {
          q: "What happens if there is a security breach?",
          a: "Aven Health has a security incident response plan. In the unlikely event of a breach, affected users will be notified immediately, and corrective measures will be taken to secure data and prevent recurrence.",
        },
        {
          q: "Does Aven Health store my health records?",
          a: "Yes, health records related to consultations and appointments are securely stored. Access is strictly controlled, encrypted, and used only to facilitate care or as legally required.",
        },
        {
          q: "Are my payment details secure?",
          a: "Yes. Payment information is processed using secure, PCI-compliant payment gateways. Sensitive payment data is never stored on Aven Health servers.",
        },
        {
          q: "Can I control who sees my health information?",
          a: "Yes. Users can manage privacy settings and decide which information is visible to doctors, health stores, or others. Consent is required for all sharing.",
        },
      ],
    },

    {
      title: "Platform Features",
      faqs: [
        {
          q: "What features does Aven Health offer?",
          a: "Aven Health combines healthcare and social engagement. Features include easy 2-step booking, secure one-on-one appointments, online and physical consultations, access to verified doctors across specialties, quick appointments with real-time availability, in-app messaging, health record management, verified health store product purchases, health communities, and posting and sharing trusted health resources with peers.",
        },
        {
          q: "Can I use Aven Health without the app?",
          a: "Currently, all features are available via the mobile app. Web access and browser-based booking and social features will be available in future updates.",
        },
        {
          q: "Are all types of medical professionals available on Aven Health?",
          a: "Yes. Aven Health provides access to general practitioners, specialists, mental health professionals, chronic care experts, and other verified healthcare providers.",
        },
        {
          q: "How fast can I get an appointment?",
          a: "Appointment availability depends on the doctor’s schedule, but Aven Health is designed for quick booking with real-time updates, minimizing wait times wherever possible.",
        },
        {
          q: "Can I access my medical records through Aven Health?",
          a: "Yes. You can securely view and manage your consultation history, prescriptions, and lab results directly in the app.",
        },
        {
          q: "Can I chat with my doctor before an appointment?",
          a: "Yes. Aven Health supports secure in-app messaging to communicate with doctors before, during, or after appointments.",
        },
        {
          q: "Can I purchase verified products from health stores?",
          a: "Yes. Aven Health allows you to buy verified health and wellness products directly from registered health stores within the app.",
        },
        {
          q: "Does Aven Health support reminders and notifications?",
          a: "Yes. The app sends notifications for upcoming appointments, prescription refills, messages from doctors, and updates in your health communities.",
        },
        {
          q: "Can I book recurring or follow-up appointments?",
          a: "Yes. For ongoing care, you can schedule recurring or follow-up appointments with your doctor through the app.",
        },
        {
          q: "Is Aven Health suitable for both individuals and families?",
          a: "Yes. You can manage accounts for yourself and family members, allowing appointments, social engagement, and health tracking for multiple people under one account.",
        },
        {
          q: "What social features does Aven Health provide?",
          a: "Aven Health includes communities where users can interact with peers, share experiences, post trusted health resources, ask questions, and participate in discussions moderated for safety and accuracy.",
        },
        {
          q: "Can I follow specific health topics or communities?",
          a: "Yes. Users can join or follow communities focused on specific health conditions, wellness topics, or general medical advice to stay informed and connected.",
        },


      ],
    },
    {
      title: "Support & Help",
      faqs: [
        {
          q: "How can I contact support?",
          a: "Use the in-app support chat or email avenhealthke@gmail.com for help with bookings, payments, account issues, or technical problems. Our support team responds promptly to ensure smooth usage.",
        },
        {
          q: "Who do I contact for disputes with a doctor or store?",
          a: "All disputes should be reported via the app. Aven Health will review and mediate according to the User Agreement and Health Store Agreement to ensure fair resolution.",
        },
        {
          q: "What should I do if I experience technical issues?",
          a: "Report technical issues through the in-app support chat or email. Provide details about the issue, and our technical team will guide you to resolve it quickly.",
        },
        {
          q: "How do I report inappropriate content in communities?",
          a: "Any inappropriate posts or comments in health communities can be reported directly in the app. Aven Health moderators review all reports and take action to maintain a safe environment.",
        },
        {
          q: "How do I escalate an unresolved issue?",
          a: "If your issue is not resolved via regular support channels, you can escalate by emailing avenhealthke@gmail.com with the subject 'Escalation' along with your case details.",
        },

        {
          q: "Can I get assistance for account recovery?",
          a: "Yes. If you lose access to your account, use the 'Forgot Password' option in the app or contact support for verification and recovery assistance.",
        },
        {
          q: "Is support available for all users?",
          a: "Yes. Support is available to all users, including patients, doctors, and health stores, for any issues related to appointments, payments, technical problems, or platform use.",
        },
        {
          q: "How long does it take to get a response from support?",
          a: "Response times vary depending on the complexity of the issue, but most standard inquiries are addressed within 24 hours. Urgent issues related to appointments are prioritized.",
        },
      ],
    }
  ];

  const slides = [
    {
      title: "Your Questions Answered",
      description:
        "Explore answers to the most common questions about Aven Health, our features, and how to make the most of the platform.",
    },
    {
      title: "Learn About Aven Health",
      description:
        "Understand how Aven Health connects you with doctors, pharmacies, and wellness resources in one convenient platform.",
    },
    {
      title: "Support & Guidance",
      description:
        "Find information about accounts, bookings, payments, privacy, and more to navigate the app with confidence.",
    },
  ];


  const [openSectionIndex, setOpenSectionIndex] = useState(0);

  const toggleSection = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? -1 : index);
  };


  return (
    <section className="max-w-7xl mx-auto space-y-16 px-4 sm:px-6 lg:px-8 ">
  <Banner backgroundImage={faqBg} slides={slides} interval={6000} />
     

      <div className="space-y-6">
        {faqSections.map((section, sIndex) => (
          <div key={sIndex} className="border-b border-gray-700">

            <button
              onClick={() => toggleSection(sIndex)}
              className="w-full flex justify-between items-center py-4 text-left text-2xl font-bold text-accent focus:outline-none"
            >
              {section.title}
              <span className="ml-4 text-white">
                {openSectionIndex === sIndex ? "−" : "+"}
              </span>
            </button>

            {openSectionIndex === sIndex && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                {section.faqs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-cardDark p-6 rounded-xl"
                  >
                    <h3 className="text-xl font-semibold text-white">{item.q}</h3>
                    <p className="mt-3 text-gray-300 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
}