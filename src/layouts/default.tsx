import { Link } from '@nextui-org/react';
import { Navbar } from '@/components/navbar';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='relative flex flex-col h-screen'>
      <Navbar />
      <main className='container mx-auto max-w-7xl px-6 sm:px-16 flex-grow pt-16'>
        {children}
      </main>
      <footer className='w-full flex flex-col py-4 px-6 sm:px-16 bg-black'>
        <div className='flex my-4 gap-4 justify-between'>
          <p className='text-sm text-default-600'>
            <p className='text-sm text-default-600 hidden sm:inline'>Copyright </p>
            © 2024 Playbook M, Inc.
            <p className='text-sm text-default-600 hidden sm:inline'> All rights reserved.</p>
          </p>
          <Link
            isExternal
            className='flex items-center gap-1 text-current'
            href='/privacy-policy'
            title='playbook-privacy-policy'
            >
            <p className='text-sm text-primary'>Privacy Policy</p>
          </Link>
        </div>
      </footer>
    </div>
  );
}
