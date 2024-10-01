import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className='w-full flex flex-col items-center py-3 bg-black'>
        <img src='/playbook_logos/playbook_logo.svg' alt='playbook-logo' className='mt-4' />
        <div className='flex mt-5 mb-4 gap-4'>
          <span className='text-default-600'>© 2024 Playbook M, Inc.</span>
          <Link
            isExternal
            className='flex items-center gap-1 text-current'
            href='https://www.playbookmna.com/privacy-policy'
            title='playbook-privacy-policy'
            >
            <p className='text-primary'>Privacy Policy</p>
          </Link>
        </div>
      </footer>
    </div>
  );
}
