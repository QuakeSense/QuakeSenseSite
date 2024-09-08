import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <Container>
        <div className="mx-auto max-w-4xl px-4 py-8">
          <h1 className="mb-6 text-3xl font-bold">QuakeSense Privacy Policy</h1>
          <p className="mb-4">Last Updated: 2024/9/8</p>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
            <p>
              QuakeSense (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
              committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you use our QuakeSense mobile application (the &quot;App&quot;).
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              2. Information We Collect
            </h2>
            <h3 className="mb-2 text-xl font-semibold">
              2.1 Personal Information
            </h3>
            <p className="mb-4">
              We do not collect any personal information that can be used to
              identify you individually. The App does not require you to create
              an account or provide any personal details.
            </p>
            <h3 className="mb-2 text-xl font-semibold">
              2.2 Non-Personal Information
            </h3>
            <h4 className="mb-2 text-lg font-semibold">
              2.2.1 Approximate Location Data
            </h4>
            <p className="mb-4">
              With your consent, we collect your approximate location (city
              level) through the iOS location services API. This information is
              used solely to provide you with relevant earthquake information
              for your area.
            </p>
            <h4 className="mb-2 text-lg font-semibold">2.2.2 Device Token</h4>
            <p className="mb-4">
              We collect an anonymous device token provided by Apple Push
              Notification service (APNs). This token is used to send you push
              notifications about earthquake events relevant to your location.
            </p>
            <h4 className="mb-2 text-lg font-semibold">
              2.2.3 Information Collection for QuakeSense Pro
            </h4>
            <p className="mb-4">
              To provide earthquake notification functionality, only QuakeSense
              Pro collects information. Free users will not have any information
              collected. For Pro users, when earthquake notifications can no
              longer be successfully delivered to the user's device due to
              manual deactivation of earthquake notifications or expiration of
              Pro benefits, the system will automatically delete the
              corresponding device records.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              3. How We Use Your Information
            </h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="mb-4 list-disc pl-6">
              <li>To provide and maintain our Service</li>
              <li>To notify you about earthquakes in your vicinity</li>
              <li>To provide customer support</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              4. Disclosure of Your Information
            </h2>
            <p className="mb-4">
              We do not sell, trade, rent or otherwise transfer your information
              to third parties. We may disclose your information in the
              following situations:
            </p>
            <ul className="mb-4 list-disc pl-6">
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights or property</li>
              <li>
                To prevent or investigate possible wrongdoing in connection with
                the App
              </li>
              <li>
                To protect the personal safety of users of the App or the public
              </li>
              <li>To protect against legal liability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate technical and organizational measures to
              maintain the safety of your information. However, no method of
              transmission over the Internet or method of electronic storage is
              100% secure.
            </p>
            <p>
              QuakeSense currently uses cloud infrastructure provided by
              Cloudflare to enhance data security and service reliability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              6. Your Data Protection Rights
            </h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding
              your information:
            </p>
            <h3 className="mb-2 text-xl font-semibold">
              6.1 European Union Residents
            </h3>
            <p className="mb-4">
              Under the General Data Protection Regulation (GDPR), you have the
              right to access, rectify, or erase your data, restrict or object
              to our processing of your data, and the right to data portability.
            </p>
            <h3 className="mb-2 text-xl font-semibold">
              6.2 California Residents
            </h3>
            <p className="mb-4">
              Under the California Consumer Privacy Act (CCPA), you have the
              right to request access to and deletion of your information, and
              to opt-out of the sale of your personal information (although we
              do not sell personal information).
            </p>
            <h3 className="mb-2 text-xl font-semibold">
              6.3 Chinese Residents
            </h3>
            <p className="mb-4">
              Under the Personal Information Protection Law (PIPL), you have the
              right to access, correct, and delete your personal information, as
              well as the right to withdraw consent for the processing of your
              information.
            </p>
            <h3 className="mb-2 text-xl font-semibold">
              6.4 Japanese Residents
            </h3>
            <p className="mb-4">
              Under the Act on the Protection of Personal Information (APPI),
              you have the right to request disclosure of your personal
              information and to correct, add, or delete such information.
            </p>
            <p>
              To exercise any of these rights, please contact us using the
              information provided in the &quot;Contact Us&quot; section.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              7. Children&apos;s Privacy
            </h2>
            <p>
              Our App does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from
              children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date at the top of this
              Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold">9. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p>feedback@quakesense.app</p>
          </section>
        </div>
      </Container>
    </Layout>
  )
}
