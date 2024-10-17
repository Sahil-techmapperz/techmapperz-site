import Link from 'next/link';
import React from 'react';

const Help = () => {
  return (
    <div className="p-6 mt-[60px] px-[300px] mx-auto bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Help & Support</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p>
          Welcome to Techmapperz! We specialize in GIS solutions, spatial data management, and IT 
          consulting services. To learn more about how we can help your business, explore our 
          <Link href="/service" className="text-blue-500"> Services page</Link>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions (FAQs)</h2>
        <div>
          <h3 className="font-semibold">1. What services does Techmapperz offer?</h3>
          <p>
            Techmapperz provides a range of services including Geographic Information System (GIS) 
            solutions, geospatial mapping, software development, and IT consulting. Visit our 
            <Link href="/about" className="text-blue-500"> About page</Link> to 
            learn more.
          </p>

          <h3 className="font-semibold mt-4">2. How can I contact customer support?</h3>
          <p>
            You can reach our support team by emailing us at <a href="mailto:support@techmapperz.com" className="text-blue-500">support@techmapperz.com</a> or by calling us at (phone number).
          </p>

          <h3 className="font-semibold mt-4">3. Where can I find more information on specific services?</h3>
          <p>
            Detailed information on all our services is available on the 
            <Link href="/service" className="text-blue-500"> Services page</Link>.
          </p>

          <h3 className="font-semibold mt-4">4. How do I get started with a GIS project?</h3>
          <p>
            To begin your GIS project with Techmapperz, please fill out the contact form on our 
            <Link href="/contact" className="text-blue-500"> Contact page</Link> 
            or email us at support@techmapperz.com. Our team will get in touch with you to understand 
            your requirements and provide a detailed plan.
          </p>

          <h3 className="font-semibold mt-4">5. What is the expected timeline for a project?</h3>
          <p>
            Project timelines vary depending on the complexity and scope. Typically, smaller projects 
            take a few weeks, while larger GIS or IT consulting projects can take several months. We 
            will provide an estimated timeline during the project planning phase.
          </p>

          <h3 className="font-semibold mt-4">6. Do you offer customized solutions?</h3>
          <p>
            Yes, Techmapperz offers fully customized GIS and IT solutions tailored to your specific 
            business needs. We work closely with you to understand your goals and provide the best 
            solutions possible.
          </p>

          <h3 className="font-semibold mt-4">7. How is my data secured?</h3>
          <p>
            Techmapperz places a high priority on data security. We follow industry-standard security 
            protocols to ensure that your data is handled securely. For more details, you can review 
            our <Link href="/privacy" className="text-blue-500"> Privacy Policy</Link>.
          </p>

          <h3 className="font-semibold mt-4">8. How can I request a demo or consultation?</h3>
          <p>
            You can request a demo or consultation by reaching out via our 
            <Link href="/contact" className="text-blue-500"> Contact page</Link>. 
            One of our team members will schedule a time to showcase our solutions and discuss your 
            needs in detail.
          </p>

          <h3 className="font-semibold mt-4">9. Do you provide after-project support?</h3>
          <p>
            Yes, we provide ongoing support even after the project completion. You can contact our 
            support team for any issues, updates, or additional services you may need.
          </p>

          <h3 className="font-semibold mt-4">10. What payment methods do you accept?</h3>
          <p>
            We accept payments via bank transfer, credit card, and PayPal. If you require any 
            alternative payment methods, please contact our billing department at billing@techmapperz.com.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Technical Support</h2>
        <p>
          If you're experiencing issues with our platform or any of the services we provide, please contact 
          our technical support team via <a href="mailto:support@techmapperz.com" className="text-blue-500">support@techmapperz.com</a>. 
          We also have troubleshooting guides available in our 
          <Link href="/blog" className="text-blue-500"> Resources section</Link>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Privacy and Security</h2>
        <p>
          Your privacy is important to us. To learn more about how we handle your data, 
          please read our <Link href="/privacy" className="text-blue-500"> Privacy Policy</Link>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          For any other questions, feel free to get in touch with us:
        </p>
        <ul>
          <li>Email: <a href="mailto:support@techmapperz.com" className="text-blue-500">support@techmapperz.com</a></li>
          <li>Phone: +91-9643002065 / +91-3335752689</li>
          <li>Address: 55, Lane - 2, Westend Marg, Saidullajab, Near Saket metro station, New Delhi - 110030, India</li>
          <li>Address: CF 401, Block CF, Sector 1, Salt Lake, Kolkata-700064, India</li>
        </ul>
      </section>
    </div>
  );
};

export default Help;
