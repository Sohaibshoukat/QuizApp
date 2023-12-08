import React from 'react';

const page = () => {
  const Section = [
    "This Privacy Policy applies to MBG and its related websites, applications, and services (collectively, 'MBG', 'we', 'us', or 'our'). MBG provides services for consumers, companies, insurance companies, and other healthcare-related companies.",
    "At MBG, we take the privacy and security of our users' information seriously. This Policy describes how we collect and use information from our users and how we protect that information.",
    "By using MBG, you agree to the terms of this Policy and our Terms of Use. By using our suite of websites and our services, you accept all of the provisions of the My Benefits Guardian TERMS OF USE and this PRIVACY POLICY. If you do not accept the My Benefits Guardian TERMS OF USE and this PRIVACY POLICY, then you are not authorized to use any of the My Benefits Guardian websites or services."
  ];

  const Collecton = [
    "To provide and improve the services we offer.",
    "To respond to your requests for customer service and technical support.",
    "To send you marketing communications about products and services that may be of interest to you.",
    "To administer surveys, promotions, or other activities.",
    "To protect the security and integrity of MBG and our users.",
    "To comply with legal requirements and industry standards."
  ];

  const AdditionalData = [
    "We may share your information with third parties in order to provide the services and features offered through MBG, such as payment processing.",
    "We may also share your information with third parties for marketing purposes, but only if you have given us your prior consent.",
    "THIRD-PARTY LINKS\nMBG may contain links to third-party websites or services. We are not responsible for the privacy practices of those websites or services. We encourage you to read the privacy policies of those websites or services before providing any of your personal information.",
    "DATA RETENTION\nWe will retain your information for as long as your account is active or as needed to provide you services and savings information. We may also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.",
    "CHILDREN’S ONLINE PRIVACY PROTECTION ACT COMPLIANCE\nOur organization is committed to ensuring the integrity and protection of the privacy of minors by adhering to the guidelines set forth in the Children’s Online Privacy Protection Act (COPPA). We are dedicated to protecting the privacy of children. We do not knowingly solicit or collect any personal information from minors under the age of 18, nor do we allow minors to use our Site. Furthermore, our Site and all products and services offered through it are directed exclusively to persons over the age of 18. Any purchases of children's products are limited to adults only.",
    "STATE PRIVACY RIGHTS\nResidents of certain states, such as California, Nevada, Colorado, Connecticut, Virginia, and Utah may have additional personal information rights and choices.\nIf you are a California, Nevada, Colorado, Connecticut, Virginia, or Utah resident, your state’s laws may provide you with additional rights regarding our use of your personal information. To learn more about your California privacy rights, see Here.\nColorado, Connecticut, Virginia and Utah each provide their state residents with rights to:\n•Confirm whether we process their personal information.\n•Access and delete certain personal information.\n•Data portability.\n•Opt-out of personal data processing for targeted advertising and sales.\nColorado, Connecticut and Virginia also provide their state residents with rights to:\n•Correct inaccuracies in their personal information, taking into account the information’s nature processing purpose.\n•Opt-out of profiling in furtherance of decisions that produce legal or similarly significant effects.\nTo exercise any of these rights please send an email to legal@mybenefitsguardian.com. To appeal a decision regarding a consumer rights request, please send another email marked OPT-OUT ATTN: LEGAL to legal@mybenefitsguardian.com. Our legal department will review the decision and we will respond to you within two weeks with the decision regarding your appeal. This email will contain information supporting the appeal decision.\nNevada provides its residents with a limited right to opt-out of certain personal information sales. Residents who wish to exercise this sale opt-out rights may submit a request to us by calling us at 1-800-000-0000 or emailing us at legal@mybenefitsguardian.com.",
    "SECURITY\nWe use reasonable administrative, technical, and physical security measures to protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We will never ask for your password in an unsolicited phone call or email.\nIf you have any questions or concerns about the security of your information, please contact us at legal@mybenefitsguardian.com",
    "CHANGES TO THE PRIVACY POLICY\nWe may update this policy from time to time. If we make any material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective. We encourage you to review this Policy periodically to stay informed about how we are protecting the information we collect.",
    "CONTACT INFORMATION\nIf you have any questions or concerns about this policy or our privacy practices, please contact us at legal@mybenefitsguardian.com"
  ];

  const informationSections = [
    {
      heading: "Personal Information",
      description: "We may collect your name, address, phone number, email address, and other contact information. We may also collect your date of birth, gender, and other demographic information."
    },
    {
      heading: "Payment Information",
      description: "If you purchase a service through MBG, we may collect information related to your payment, such as your credit card number and billing address."
    },
    {
      heading: "Usage Information",
      description: "We may collect information about how you use MBG, including the type of services you use, how often you use them, and other usage information."
    },
    {
      heading: "Location Information",
      description: "We may collect information about your location, either directly or by using data from your device or other services."
    },
    {
      heading: "Device Information",
      description: "We may collect information about the device you are using, such as the type of device, its operating system, hardware version, and other device information."
    }
  ];
  

  return (
    <>
      <div className="LegalHead">
        <h1>Privacy Policy</h1>
        <h4>My Benefits Guardian: Last Updated: 7-12-2023</h4>
      </div>
      <div className="DataSetSection">
        <ol>
          {Section.map((item, index) => (
            <div className='DataIn' key={index}>
              <p>{item}</p>
            </div>
          ))}
          <h3>COLLECTION OF INFORMATION</h3>
          <div className='DataIn'>
            <p>We collect information from our users in the following ways:</p>
          </div>
          <ul>
            {informationSections.map((item, index) => (
              <div className='DataIn' key={index}>
                <li>{item.heading}:{item.description}</li>
              </div>
            ))}
          </ul>
          <h3>USE OF INFORMATION</h3>
          <div className='DataIn'>
            <p>We may use the information we collect from our users for the following purposes:</p>
          </div>
          <ul>
            {Collecton.map((item, index) => (
              <div className='DataIn' key={index}>
                <li>{item}</li>
              </div>
            ))}
          </ul>
          <div className="DataIn">
            <p>We may share your information with third parties in order to provide the services and features offered through MBG, such as payment processing.</p>
          </div>
          <div className="DataIn">
            <p>We may also share your information with third parties for marketing purposes, but only if you have given us your prior consent.</p>
          </div>
          <h3>THIRD-PARTY LINKS</h3>
          <div className="DataIn">
            <p>MBG may contain links to third-party websites or services. We are not responsible for the privacy practices of those websites or services. We encourage you to read the privacy policies of those websites or services before providing any of your personal information.</p>
          </div>
          <h3>DATA RETENTION</h3>
          <div className="DataIn">
            <p>We will retain your information for as long as your account is active or as needed to provide you services and savings information. We may also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
          </div>
          <h3>CHILDREN’S ONLINE PRIVACY PROTECTION ACT COMPLIANCE</h3>
          <div className="DataIn">
            <p>We use reasonable administrative, technical, and physical security measures to protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We will never ask for your password in an unsolicited phone call or email.</p>
            <p>If you have any questions or concerns about the security of your information, please contact us at legal@mybenefitsguardian.com</p>
          </div>
          <h3>SECURITY</h3>
          <div className="DataIn">
            <p>Our organization is committed to ensuring the integrity and protection of the privacy of minors by adhering to the guidelines set forth in the Children’s Online Privacy Protection Act (COPPA). We are dedicated to protecting the privacy of children. We do not knowingly solicit or collect any personal information from minors under the age of 18, nor do we allow minors to use our Site. Furthermore, our Site and all products and services offered through it are directed exclusively to persons over the age of 18. Any purchases of children's products are limited to adults only.</p>
          </div>
          <h3>CHANGES TO THE PRIVACY POLICY</h3>
          <div className="DataIn">
            <p>We may update this policy from time to time. If we make any material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective. We encourage you to review this Policy periodically to stay informed about how we are protecting the information we collect.</p>
          </div>
          <h3>CONTACT INFORMATION</h3>
          <div className="DataIn">
            <p>If you have any questions or concerns about this policy or our privacy practices, please contact us at legal@mybenefitsguardian.com</p>
          </div>


        </ol>
      </div>
    </>
  );
}

export default page;
