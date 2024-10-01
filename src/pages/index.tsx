import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, Image } from "@nextui-org/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
        <div className='inline-block max-w-lg text-center justify-center'>
          <span className={title()}>Invest&nbsp;</span>
          <span className={title({ color: 'blue' })}>Smarter&nbsp;</span>
          <br />
          <span className={title()}>Close&nbsp;</span>
          <span className={title({ color: 'blue' })}>Faster&nbsp;</span>
          <div className={subtitle({ class: 'mt-4' })}>
            Explore the world&#39;s leading transaction structuring software for investors
          </div>
        </div>
        <div className='flex gap-3'>
          <Image src='/app/dropdown.gif' alt='excel-plugin-dropdown' />
        </div>
        <div className='flex gap-3 mt-4'>
          <Link
            isExternal
            href={siteConfig.links.microsoft}
          >
            <Image src='/app/msft_download_button.png' alt='microsoft-store-button' width='175px' radius='none' />
          </Link>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
        <span className='text-lg font-semibold'>TRUSTED BY INVESTORS FROM</span>
        <div className='flex gap-4 mt-8'>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]'
            shadow='sm'
          >
            <CardBody className='justify-center'>
              <Image src='/company_logos/nep_logo.png' alt='nep-company-logo' width='150px' />
            </CardBody>
          </Card>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]'
            shadow='sm'
          >
            <CardBody className='justify-center'>
              <Image src='/company_logos/barclays_logo.png' alt='barclays-company-logo' width='150px' />
            </CardBody>
          </Card>
        </div>
        <div className='flex gap-4'>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]'
            shadow='sm'
          >
            <CardBody className='justify-center'>
              <Image src='/company_logos/stg_logo.png' alt='stg-company-logo' width='150px' />
            </CardBody>
          </Card>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]'
            shadow='sm'
          >
            <CardBody className='justify-center'>
              <Image src='/company_logos/structural_capital_logo.png' alt='structural-capital-company-logo' width='150px' />
            </CardBody>
          </Card>
        </div>
        <div className='flex gap-4'>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]'
            shadow='sm'
          >
            <CardBody className='justify-center'>
              <Image src='/company_logos/carrick_logo.png' alt='carrick-company-logo' width='150px' />
            </CardBody>
          </Card>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]'
            shadow='sm'
          >
            <CardBody className='justify-center'>
              <Image src='/company_logos/lazard_logo.jpeg' alt='lazard-company-logo' width='150px' />
            </CardBody>
          </Card>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center py-8 md:py-10'>
        <span className='text-lg font-semibold'>SOLUTIONS</span>
          <span className={`${title({ color: 'blue' })} mt-8 text-base`}>90% FASTER MODELING</span>
          <span className='text-2xl font-light text-center'>Automate transaction modeling with real-time scenarios analysis</span>
          <span className='text-md text-center mt-4'>
            Playbook&#39;s advanced formulas effortlessly handle complex cap table math, waterfall proceeds, MOIC, and
            IRR for various securities within seconds. Compare multiple transaction scenarios with ease for new investments
            and efficiently update existing valuation models each quarter as cap tables change.
          </span>
          <div className='flex gap-3 mt-4'>
            <Image src='/app/formula.gif' alt='excel-plugin-formula' />
          </div>

          <span className={`${title({ color: 'blue' })} mt-16 text-base`}>100% ACCURATE AND AUDITABLE</span>
          <span className='text-2xl font-light text-center'>Verify your existing models for accuracy</span>
          <span className='text-md text-center mt-4'>
            Remove cap table calculation errors to get to the correct answer, the first time. Make better decisions by
            understanding individual shareholder incentives clearly and streamline negotiations by quickly evaluating multiple
            transaction structures directly within Excel.
          </span>
          <div className='flex gap-3 mt-4'>
            <Image src='/app/audit.gif' alt='excel-plugin-audit' />
          </div>

          <span className={`${title({ color: 'blue' })} mt-16 text-base`}>EXCEL-FIRST DESIGN, NO LEARNING CURVE</span>
          <span className='text-2xl font-light text-center'>Use Excel templates powered by our formulas</span>
          <span className='text-md text-center mt-4'>
            Playbook has been built from the ground up to support your workflows directly within Excel with no learning curve.
            Use our formulas or predefined templates to gain an edge on your competition when structuring transactions so that
            you can focus more time on sourcing and evaluating more deals.
          </span>
          <div className='flex flex-col gap-3 mt-4'>
            <Image src='/app/template_mock_returns_output.png' alt='excel-template-returns-output' />
            <Image src='/app/template_mock_pwerm.png' alt='excel-template-pwerm' />
          </div>
      </section>

      <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
        <span className='text-lg font-semibold'>GET STARTED</span>
        <div className='flex gap-3 mt-8'>
          <Link
            isExternal
            href={siteConfig.links.microsoft}
          >
            <Image src='/app/msft_download_button.png' alt='microsoft-store-button' width='175px' radius='none' />
          </Link>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center py-8 md:py-10'>
        <span className='text-lg font-semibold'>TEAM</span>
        <Image src='/people/rachit.jpeg' alt='rachit-profile-picture' className='mt-8' style={{ width: '250px', borderRadius: '100%' }} />
        <span className='text-2xl mt-4'>Rachit Joshi</span>
        <span className='text-lg'>CEO & Co-Founder</span>
        <span className='text-sm mt-2 text-center'>
          Rachit has worked 11+ years in private equity, growth equity / VC, and investment banking. His prior experience
          includes Carrick Capital Partners, Symphony Technology Group, Barclays, Lazard. He holds a BS in Accounting, BS
          in Finance, and Masters in Accounting from University of Illinois.
        </span>

        <Image src='/people/anand.png' alt='anand-profile-picture' className='mt-12' style={{ width: '250px', borderRadius: '100%' }} />
        <span className='text-2xl mt-4'>Anand Patel</span>
        <span className='text-lg'>CTO & Co-Founder</span>
        <span className='text-sm mt-2 text-center'>
          Anand has 12+ years of experience in software engineering and technology leadership. Prior work experience includes
          Nvidia, Salesforce, Mulesoft, Runnable, Doma. He holds a BS in Computer Engineering and Masters in Electrical and
          Computer Engineering from Georgia Institute of Technology.
        </span>

        <Image src='/people/neil.jpeg' alt='neil-profile-picture' className='mt-12' style={{ width: '250px', borderRadius: '100%' }} />
        <span className='text-2xl mt-4'>Neil Mithipati</span>
        <span className='text-lg'>CPO & Co-Founder</span>
        <span className='text-sm mt-2 text-center'>
          Neil has 11+ years of experience in product management, software engineering, and financial consulting. He was
          previously at AppLovin, Cardlytics, FTI Consulting, and Deloitte. He holds a BS in Finance from University of Illinois,
          Product School, and Hack Reactor.
        </span>
      </section>
    </DefaultLayout>
  );
}
