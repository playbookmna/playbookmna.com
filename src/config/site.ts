export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Playbook",
  description: "Invest Smarter, Close Faster",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Solutions",
      href: "#solutions",
    },
    {
      label: "Get Started",
      href: "#get-started",
    },
    {
      label: "Team",
      href: "#team",
    },
  ],
  navMenuItems: [
    {
      label: "Solutions",
      href: "#solutions",
    },
    {
      label: "Get Started",
      href: "#get-started",
    },
    {
      label: "Team",
      href: "#team",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    microsoft: "https://pages.store.office.com/addinsinstallpage.aspx?assetid=WA200006471&rs=en-US&correlationId=d8f7dba7-a15e-6a06-5a25-def6affcd3ec",
  },
};
