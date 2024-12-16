import { Link } from '@nextui-org/link';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';
import { Card, CardBody, Image } from '@nextui-org/react';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className='flex flex-col items-center justify-center pb-8 sm:flex-row'>
        <div className='flex flex-col gap-2 text-center sm:mr-16 sm:text-left'>
          <div>
            <span className={title()}>Invest&nbsp;</span>
            <span className={title({ color: 'blue' })}>Smarter&nbsp;</span>
          </div>
          <div>
            <span className={title()}>Close&nbsp;</span>
            <span className={title({ color: 'blue' })}>Faster&nbsp;</span>
          </div>
          <div className={subtitle({ class: 'my-0' })}>
            The all-in-one deal execution platform for Venture Capitalists
          </div>
          <Link
            isExternal
            href={siteConfig.links.microsoft}
            className='hidden sm:flex mt-6'
            >
            <Image src='/app/msft_download_button.png' alt='microsoft-store-button' width='175px' radius='none' />
          </Link>
        </div>
        <div className='flex flex-col justify-center mt-4 sm:mt-0'>
          <Image src='/app/dropdown.gif' alt='excel-plugin-dropdown' />
          <Link
            isExternal
            href={siteConfig.links.microsoft}
            className='sm:hidden mt-8 mx-auto'
            >
            <Image src='/app/msft_download_button.png' alt='microsoft-store-button' width='175px' radius='none' />
          </Link>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center gap-4 py-8'>
        <span className='text-lg font-semibold'>TRUSTED BY INVESTORS FROM</span>
        <div className='flex flex-wrap justify-center	gap-8 sm:gap-8 mt-8'>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 basis-2/6 sm:basis-1/4'
            shadow='sm'
          >
            <CardBody className='justify-center'>
              <Image src='/company_logos/nep_logo.png' alt='nep-company-logo' />
            </CardBody>
          </Card>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 basis-2/6 sm:basis-1/4'
            shadow='sm'
          >
            <CardBody className='justify-center'>
              <Image src='/company_logos/barclays_logo.png' alt='barclays-company-logo' />
            </CardBody>
          </Card>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 basis-2/6 sm:basis-1/4'
            shadow='sm'
          >
            <CardBody className='justify-center'>
              <Image src='/company_logos/stg_logo.png' alt='stg-company-logo' />
            </CardBody>
          </Card>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 basis-2/6 sm:basis-1/4'
            shadow='sm'
          >
            <CardBody className='justify-center'>
              <Image src='/company_logos/structural_capital_logo.png' alt='structural-capital-company-logo' />
            </CardBody>
          </Card>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 basis-2/6 sm:basis-1/4'
            shadow='sm'
          >
            <CardBody className='justify-center'>
              <Image src='/company_logos/carrick_logo.png' alt='carrick-company-logo' />
            </CardBody>
          </Card>
          <Card
            isBlurred
            className='border-none bg-background/60 dark:bg-default-100/50 basis-2/6 sm:basis-1/4'
            shadow='sm'
          >
            <CardBody className='justify-center'>
              <Image src='/company_logos/lazard_logo.jpeg' alt='lazard-company-logo' />
            </CardBody>
          </Card>
        </div>
        <a id='solutions'></a>
      </section>

      <section className='py-8 text-center'>
        <span className='text-lg font-semibold'>SOLUTIONS</span>
        <section className='flex flex-col items-center justify-center mt-12 sm:mt-12 sm:flex-row sm:text-left'>
          <div className='flex flex-col sm:mr-8'>
            <span className={title({ color: 'blue', class: 'text-xl lg:text-2xl' })}>10x+ Faster Modeling</span>
            <span className='text-2xl font-light'>Automate modeling, metrics analysis, and data logging, reducing workflows from days to minutes</span>
            <span className='text-md mt-4'>
              Playbook&#39;s cap table modeling delivers faster, more precise transaction structuring for VCs.
              Import a cap table, in any format and level of complexity, and use our advanced formulas to model
              scenarios, link financial data, and build institutional memory over time—even for deals that don't close.
            </span>
          </div>
          <div className='flex gap-3 mt-4'>
            <Image src='/app/formula.gif' alt='excel-plugin-formula' />
          </div>
        </section>

        <section className='flex flex-col items-center justify-center mt-12 sm:flex-row sm:text-left'>
          <div className='flex flex-col sm:mr-8'>
            <span className={title({ color: 'blue', class: 'text-xl lg:text-2xl' })}>100% Accuracy</span>
            <span className='text-2xl font-light'>Eliminate manual errors with consistent, reliable, and instant results</span>
            <span className='text-md mt-4'>
              Playbook&#39;s metrics engine delivers powerful insights, dynamic benchmarking, and institutional memory.
              Leverage 50+ core metrics and valuation metrics to benchmark across industries, funding stages, and peer
              groups as well as compare against past deals to identify trends and outliers.

            </span>
          </div>
          <div className='flex gap-3 mt-4'>
            <Image src='/app/audit.gif' alt='excel-plugin-audit' />
          </div>
        </section>

        <section className='flex flex-col items-center justify-center mt-12 sm:flex-row sm:text-left sm:items-start'>
          <div className='flex flex-col sm:mr-8'>
            <span className={title({ color: 'blue', class: 'text-xl lg:text-2xl' })}>System of Record</span>
            <span className='text-2xl font-light'>Turn your deal data into your firm&#39;s most valuable asset</span>
            <span className='text-md mt-4'>
              Playbook centralizes your deal data into a single, secure database, accessible firm-wide. This living database is 
              can be leveraged to benchmark against new opportunities and track valuation and metric trends—improving deal diligence 
              and driving better decision-making.

            </span>
          </div>
          <div className='flex flex-col gap-3 mt-4'>
            <Image src='/app/metrics_and_benchmarking.png' alt='metrics-and-benchmarking' />
          </div>
        </section>
        <a id='get-started'></a>
      </section>

      <section className='flex flex-col items-center justify-center gap-4 py-8'>
        <span className='text-lg font-semibold'>GET STARTED</span>
        <div className='flex gap-3 mt-8 sm:mt-12'>
          <Link
            isExternal
            href={siteConfig.links.microsoft}
          >
            <Image src='/app/msft_download_button.png' alt='microsoft-store-button' width='175px' radius='none' />
          </Link>
        </div>
        <a id='team'></a>
      </section>

      <section id='team' className='pt-8 pb-16 text-center'>
        <span className='text-lg font-semibold'>TEAM</span>
        <div className='flex flex-wrap'>
        <div className='flex flex-col items-center mt-12 px-4 sm:basis-1/3'>
          <Image src='/people/rachit.jpeg' alt='rachit-profile-picture' style={{ width: '250px', borderRadius: '100%' }} />
          <span className='text-2xl mt-4'>Rachit Joshi</span>
          <span className='text-lg'>CEO & Co-Founder</span>
          <span className='text-sm mt-2 text-center sm:px-4'>
            Rachit has worked 11+ years in private equity, growth equity / VC, and investment banking. His prior experience
            includes Carrick Capital Partners, Symphony Technology Group, Barclays, Lazard. He holds a BS in Accounting, BS
            in Finance, and Masters in Accounting from University of Illinois.
          </span>
        </div>

        <div className='flex flex-col items-center mt-12 px-4 sm:basis-1/3'>
          <Image src='/people/anand.png' alt='anand-profile-picture' style={{ width: '250px', borderRadius: '100%' }} />
          <span className='text-2xl mt-4'>Anand Patel</span>
          <span className='text-lg'>CTO & Co-Founder</span>
          <span className='text-sm mt-2 text-center sm:px-4'>
            Anand has 12+ years of experience in software engineering and technology leadership. Prior work experience includes
            Nvidia, Salesforce, Mulesoft, Runnable, Doma. He holds a BS in Computer Engineering and Masters in Electrical and
            Computer Engineering from Georgia Institute of Technology.
          </span>
        </div>

        <div className='flex flex-col items-center mt-12 px-4 sm:basis-1/3'>
          <Image src='/people/neil.jpeg' alt='neil-profile-picture' style={{ width: '250px', borderRadius: '100%' }} />
          <span className='text-2xl mt-4'>Neil Mithipati</span>
          <span className='text-lg'>CPO & Co-Founder</span>
          <span className='text-sm mt-2 text-center sm:px-4'>
            Neil has 11+ years of experience in product management, software engineering, and financial consulting. He was
            previously at AppLovin, Cardlytics, FTI Consulting, and Deloitte. He holds a BS in Finance from University of Illinois,
            Product School, and Hack Reactor.
          </span>
        </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
