import { Link } from '@nextui-org/link';
import { title } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';

export default function PrivacyPolicyPage() {
  return (
    <DefaultLayout>
      <section className='flex flex-col pb-8 gap-4'>
        <h1 className={title()}>Privacy Policy</h1>
        <p className='font-semibold text-default-600 mt-4'>Last updated: January 8, 2023</p>
        <p>
          This privacy policy (“Privacy Policy”) applies to Playbook M&A, Inc, and its
          related and/or affiliated companies&#39;, including online tools and platform(s),
          including www.playbookmna.com, www.app.playbookmna.com, other Playbook M&A websites,
          and Office add-ins (collectively referred to in this document as “Playbook”).
          Except as otherwise indicated, this Privacy Policy describes how Playbook collects,
          uses, and shares your personal information and your choices with respect to your
          personal information.
        </p>
        <p>
          <span className='font-semibold'>California residents: </span>Please see the important
          information in our Notice for California Residents
        </p>
        <p className='text-xl font-semibold mt-4'>What we collect</p>
        <p>We get information about you in a range of ways:</p>
        <p className='font-semibold text-lg'>Information You Give Us</p>
        <p>
          We may collect your name, email address, username, password, demographic information
          (such as your occupation), as well as other information you directly give us on Playbook,
          which may include marketing, promotions and when communicating to you about new features.
        </p>
        <p>
          For customers who have paid software services, we collect your billing details such as 
          credit card information, banking information, and/or billing address.
        </p>
        <p className='font-semibold text-lg'>Information Automatically Collected</p>
        <p className='underline'>Device Information</p>
        <p>
          We may collect information about the devices accessing Playbook. Some examples are:
          type of device, operating system used, application information, unique device identifiers
          and crash data. The type of information we collect depends on the type of device used and
          its settings.
        </p>
        <p className='underline'>Transactional and Usage Information</p>
        <p>
          We may automatically log information about you and your computer, subject to your consent
          where required by law. For example, like most services when using Playbook, we log your computer
          operating system type, browser type, browser language, pages or screens you viewed, how long you
          spent on a page or screen, location (your IP address), access times and information about your
          use of and actions on Playbook. This is information we collect from every user of Playbook, whether
          they have an account or not. This information may include personal information.
        </p>
        <p className='underline'>Cookies and Similar Technologies Information</p>
        <p>
          As further described below, and subject to your consent where required by law, we automatically
          collect information from cookies and similar technologies as described below:
        </p>
        <p>
          <span className='font-semibold'>Technical or functional cookies: </span>
          Some cookies ensure that certain parts of the website work properly and that your user
          preferences remain known. By placing functional cookies, we make it easier for you to
          visit our website. This way, you do not need to repeatedly enter the same information when
          visiting our website and, for example, the products or services you are interested in
          (we may place these cookies without your consent).
        </p>
        <p>
          <span className='font-semibold'>Analytical cookies: </span>
          We use analytical cookies to optimize the website experience for our users. With these
          analytical cookies we get insights in the usage of our website (we may place these cookies
          without your consent).
        </p>
        <p>
          <span className='font-semibold'>Third party cookies: </span>
          We have made agreements about the use of cookies with other companies that place cookies.
          However, we cannot guarantee that these third parties handle your personal data in a reliable
          or secure manner. Parties such as Google are to be considered as independent data controllers.
          We recommend that you read the privacy statements of these companies. Please be aware that some
          of those companies may combine that information with information they have collected from you
          elsewhere.
        </p>
        <p className='text-xl font-semibold mt-4'>Use and disclosure of personal information</p>
        <p>We may use, process and/or disclose personal information for the following purposes:</p>
        <ul className='flex flex-col gap-4 list-disc px-4'>
          <li>
            To operate, maintain, and improve Playbook. This includes use of other information to support
            delivery of our services, assist with service requests, monitor for errors, remedy security or
            technical issues, analyze website and application performances.
          </li>
          <li>
            To respond to comments and questions, verify permission access, and provide customer service.
          </li>
          <li>
            To send information including confirmations, invoices and billing, technical notices, updates,
            security alerts, and administrative messages.
          </li>
          <li>
            To communicate upcoming events and other news about products and services offered by us.
          </li>
          <li>
            To communicate and inform you about system updates and important services-related notices,
            such as privacy and policy update notices or changes in our terms of service. These communications
            are administrative and you may not opt out of them.
          </li>
          <li>
            To send marketing emails related to Playbook, which you may opt out of using provided unsubscribe
            links or the opt-out mechanism in those communications.
          </li>
          <li>
            To protect, investigate, and deter against fraudulent, unauthorized, or illegal activity, including,
            but not limited to, validating your identity and preventing fraud on your account, and complying
            with KYC rules and regulations.
          </li>
        </ul>
        <p>We may also use and disclose personal information as follows:</p>
        <ul className='flex flex-col gap-4 list-disc px-4'>
          <li>
            To comply with laws, lawful requests and legal or regulatory processes.
          </li>
          <li>
            To protect the rights, safety and property of Playbook, our agents, users, customers, and others.
            This includes enforcing our agreements, policies, and terms of use, reporting on security breaches,
            or assisting with investigating and preventing fraud or security issues.
          </li>
        </ul>
        <p>
          We may create, use and share aggregated or anonymized data for any lawful purpose, such as marketing,
          analytics or research purposes permitted by law.
        </p>
        <p>
          We may share personal information with acquirers and other relevant participants in business transactions
          (or negotiations for such transactions) involving a corporate divestiture, merger, consolidation, acquisition,
          reorganization, sale or other disposition of all or any portion of the business or assets of, or equity
          interests in, Playbook (including, in connection with a bankruptcy or similar proceedings).
        </p>
        <p>
          We may share other information with third parties in other ways not described in this Privacy Policy when we
          have consent (either from users or business customers) to do so.
        </p>
        <p>
          We may share personal information with third party companies or individuals that we engage as service providers
          to process information and support our business and services. Examples include providers of cloud hosting and
          storage services, analytics, services, email delivery services and customer support services.
        </p>
        <p>
          We may share personal information with our lawyers, accountants and other professional advisors in the course
          of the services they render to us.
        </p>
        <p className='text-xl font-semibold mt-4'>Retention</p>
        <p>
          We generally retain personal information to fulfill the purposes for which we collected it, including for
          the purposes of satisfying any legal, accounting, or reporting requirements, to establish or defend legal
          claims, or for fraud prevention purposes. To determine the appropriate retention period for personal information,
          we may consider factors such as the amount, nature, and sensitivity of the personal information, the potential
          risk of harm from unauthorized use or disclosure of your personal information, the purposes for which we process
          your personal information and whether we can achieve those purposes through other means, and the applicable
          legal requirements.
        </p>
        <p>
          When we no longer require the personal information we have collected about you, we will either delete or anonymize
          it or, if this is not possible (for example, because your personal information has been stored in backup archives),
          then we will securely store your personal information and isolate it from any further processing until deletion
          is possible. If we anonymize your personal information (so that it can no longer be associated with you), we may
          use this information indefinitely without further notice to you.
        </p>
        <p className='text-xl font-semibold mt-4'>Age Limitations</p>
        <p>
          Playbook does not allow use by anyone younger than 18 years old. If you learn that anyone younger than 18 has 
          unlawfully provided us with personal data through the Services, please contact us and we will take steps to 
          delete such information.
        </p>
        <p className='text-xl font-semibold mt-4'>Information choices and changes</p>
        <p>
          Our marketing emails tell you how to “opt out.” If you opt out, we may still send you non-marketing emails.
          Non-marketing emails include emails about your accounts and our business dealings with you. If at any time you
          would like to change your communication preferences, we provide unsubscribe links and an opt-out mechanism in
          those communications for your convenience.
        </p>
        <p>
          You can request to change contact choices, opt out of our sharing with others, and update your personal information.
        </p>
        <p>
          You can typically remove and reject cookies from our website with your browser settings. Many browsers are set to
          accept cookies until you change your settings. If you remove or reject our cookies, it may affect how our website
          works for you.
        </p>
        <p>
          You can update or correct certain personal information in your Playbook account. If you are unable to do so on your
          own, the information is likely controlled by the security issuer and you should contact the security issuer directly
          to update your information.
        </p>
        <p className='text-xl font-semibold mt-4'>Notice for California Residents</p>
        <p>
          <span className='font-semibold'>Scope. </span>This section applies only to California residents. It describes how we
          collect, use, and share Personal Information of California residents in our capacity as a “business” under the California
          Consumer Privacy Act (<span className='font-semibold'>“CCPA”</span>) and their rights with respect to that Personal
          Information. For purposes of this section, <span className='font-semibold'>“Personal Information”</span> has the meaning
          given in the CCPA. However, this section does not apply to:
        </p>
        <ul className='flex flex-col gap-4 list-disc px-4'>
          <li>
            Information exempted from the scope of the CCPA, including nonpublic personal information;
          </li>
          <li>
            Personal Information we collect from individuals acting in their capacities as representatives
            of organizations solely in the context of conducting due diligence regarding, or providing or
            receiving a product or service to or from, such organizations; and
          </li>
          <li>
            Personal Information we collect, use, and share on behalf of our customers as a “service provider”
            under the CCPA for purposes of providing our services to them.
          </li>
        </ul>
        <p>
          Playbook does not sell (as such term is defined in the CCPA) the Personal Information we collect (and will not sell it 
          without providing a right to opt out).
        </p>
        <p>
          <span className='font-semibold'>Your California privacy rights. </span>You have the following rights under the CCPA:
        </p>
        <ul className='flex flex-col gap-4 list-disc px-4'>
          <li>
            <span className='font-semibold'>Information. </span>
            To request the following information about how we have collected and used your Personal Information during the
            past 12 months:
          </li>
          <ul className='flex flex-col gap-4 list-disc px-4'>
            <li>
              The categories of Personal Information that we have collected.
            </li>
            <li>
              The categories of sources from which we collected Personal Information.
            </li>
            <li>
              The business or commercial purpose for collecting Personal Information.
            </li>
            <li>
              The categories of third parties with whom we share Personal Information.
            </li>
            <li>
              Whether we have disclosed your Personal Information for a business purpose, and if so, the categories of
              Personal Information disclosed to each category of third party recipient.
            </li>
          </ul>
          <li>
            <span className='font-semibold'>Access. </span>
            To request a copy of the Personal Information that we have collected about you during the past 12 months.
          </li>
          <li>
            <span className='font-semibold'>Deletion. </span>
            To request that we delete the Personal Information that we have collected from you.
          </li>
          <li>
            <span className='font-semibold'>Nondiscrimination. </span>
            To exercise the rights described above free from discrimination as provided in the CCPA.
          </li>
        </ul>
        <p>
          <span className='font-semibold'>How to exercise your rights. </span>You may submit requests to exercise
          your right to information, access or deletion by submitting your request via email to support@playbookmna.com.
          We will need to verify your identity to process your information, access and deletion requests and we reserve
          the right to confirm your California residency. You may be required to provide government identification, give
          a declaration as to your identity under penalty of perjury and/or provide additional information. If you wish
          to designate an authorized agent to make a request on your behalf, we will need to verify both your and your
          agent&#39;s identities and your agent must provide a valid power of attorney pursuant to California Probate Code
          Sections 4000-4465. If you have not provided your agent with such a power of attorney, you must provide your
          agent signed permission to exercise your CCPA rights on your behalf, provide the information we request to verify
          your identity, and provide us with written confirmation that you have given the authorized agent permission to
          submit the request. We cannot process your request if you do not provide us with sufficient detail to allow us
          to understand and respond to it. In certain cases, we may be required or permitted by law to deny your request.
        </p>
        <p>
          <span className='font-semibold'>Personal information that we collect, use and disclose. </span>For each category
          of data described above in the “What we collect” section of the Privacy Policy, the list below summarizes the
          Personal Information we collect by reference to the categories of Personal Information specified in the CCPA,
          and describes our practices currently and during the 12 months preceding the effective date of this Privacy Policy.
          Information you voluntarily provide to us, such as in free-form webforms, may contain other categories of personal
          information not described below.
        </p>
        <ul className='flex flex-col gap-4 list-disc px-4'>
          <li>
            <p className='font-semibold'>You give us</p>
            <ul className='flex flex-col gap-4 list-disc px-4 mt-4'>
              <li>Examples of Personal Information Collected</li>
              <ul className='flex flex-col gap-4 list-disc px-4'>
                <li>Name, email address, username, password, demographic information</li>
              </ul>
              <li>CCPA Categories</li>
              <ul className='flex flex-col gap-4 list-disc px-4'>
                <li>
                  California Customer Records (as defined in California Civil Code section 1798.80); financial information;
                  identifiers; inferences; online identifiers
                </li>
              </ul>
              <li>Source</li>
              <ul className='flex flex-col gap-4 list-disc px-4'>
                <li>You</li>
              </ul>
            </ul>
          </li>
          <li>
            <p className='font-semibold'>Automatically collected: device information</p>
            <ul className='flex flex-col gap-4 list-disc px-4 mt-4'>
              <li>Examples of Personal Information Collected</li>
              <ul className='flex flex-col gap-4 list-disc px-4'>
                <li>Type of device, operating system used, application information, unique device identifiers and crash data</li>
              </ul>
              <li>CCPA Categories</li>
              <ul className='flex flex-col gap-4 list-disc px-4'>
                <li>
                  Commercial information; internet or network information; online identifiers
                </li>
              </ul>
              <li>Source</li>
              <ul className='flex flex-col gap-4 list-disc px-4'>
                <li>Automatic collection</li>
              </ul>
            </ul>
          </li>
          <li>
            <p className='font-semibold'>Automatically collected: transactional and usage information</p>
            <ul className='flex flex-col gap-4 list-disc px-4 mt-4'>
              <li>Examples of Personal Information Collected</li>
              <ul className='flex flex-col gap-4 list-disc px-4'>
                <li>
                  Your computer operating system type, browser type, browser language, pages you viewed, how long you spent on a
                  page, location, access times and information about your use of and actions on our website
                </li>
              </ul>
              <li>CCPA Categories</li>
              <ul className='flex flex-col gap-4 list-disc px-4'>
                <li>
                  Commercial information; geolocation data; internet or network information
                </li>
              </ul>
              <li>Source</li>
              <ul className='flex flex-col gap-4 list-disc px-4'>
                <li>Automatic collection</li>
              </ul>
            </ul>
          </li>
          <li>
            <p className='font-semibold'>Automatically collected: cookies and similar technologies information</p>
            <ul className='flex flex-col gap-4 list-disc px-4 mt-4'>
              <li>Examples of Personal Information Collected</li>
              <ul className='flex flex-col gap-4 list-disc px-4'>
                <li>Cookie ID and settings</li>
              </ul>
              <li>CCPA Categories</li>
              <ul className='flex flex-col gap-4 list-disc px-4'>
                <li>
                  Commercial information; internet or network information; online identifiers
                </li>
              </ul>
              <li>Source</li>
              <ul className='flex flex-col gap-4 list-disc px-4'>
                <li>Automatic collection</li>
              </ul>
            </ul>
          </li>
        </ul>
        <p>
          The business/commercial purposes for which we use these categories of Personal Information, and the types
          of third parties to which we disclose these categories of Personal Information for business purposes are
          described in the section above entitled “Use and disclosure of personal information.”
        </p>
        <p className='mt-6'>
          We welcome your comments or questions about this Privacy Policy. You may contact us at:
        </p>
        <p>
          <span className='font-semibold'>Data Protection Officer</span><br />
          <Link href='mailto:support@playbookmna.com' isExternal>support@playbookmna.com</Link>
        </p>
      </section>
    </DefaultLayout>
  );
}