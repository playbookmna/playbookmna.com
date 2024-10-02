import React from 'react';
import { Link } from "@nextui-org/link";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <NextUINavbar maxWidth='xl' position='sticky' isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      {/* always show logo */}
      <NavbarContent className='basis-1/5 sm:basis-full' justify='start'>
        <NavbarBrand className='gap-3 max-w-fit'>
          <Link
            className='flex justify-start'
            href='/'
          >
            <img src='/playbook_logos/playbook_logo_black.svg' alt='logo' />
          </Link>
        </NavbarBrand>

        {/* desktop display, show navbar items */}
        <div className='hidden sm:flex gap-4 justify-start ml-2'>
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <a href={item.href}>
                {item.label}
              </a>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      {/* desktop display, show only dark mode toggle */}
      <NavbarContent
        className='hidden sm:flex basis-1/5 sm:basis-full'
        justify='end'
      >
        <NavbarItem className='hidden sm:flex gap-2'>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* mobile display, show hamburger menu */}
      <NavbarContent className='sm:hidden basis-1 pl-4' justify='end'>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className='mx-4 mt-2 flex flex-col gap-2'>
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <a
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
