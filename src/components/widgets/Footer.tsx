import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import IconTwitter from "~/components/icons/IconTwitter"
import IconInstagram from "~/components/icons/IconInstagram"
import IconFacebook from "~/components/icons/IconFacebook"
import IconGithub from "~/components/icons/IconGithub"

export default component$(() => {
  const links = [
    {
      title: "Product",
      items: [
        { title: "Features", href: "#" },
        { title: "Security", href: "#" },
        { title: "Team", href: "#" },
        { title: "Enterprise", href: "#" },
        { title: "Customer stories", href: "#" },
        { title: "Pricing", href: "#" },
        { title: "Resources", href: "#" },
      ],
    },
    {
      title: "Platform",
      items: [
        { title: "Developer API", href: "#" },
        { title: "Partners", href: "#" },
        { title: "Atom", href: "#" },
        { title: "Electron", href: "#" },
        { title: "Qwind Desktop", href: "#" },
      ],
    },
    {
      title: "Support",
      items: [
        { title: "Docs", href: "#" },
        { title: "Community Forum", href: "#" },
        { title: "Professional Services", href: "#" },
        { title: "Skills", href: "#" },
        { title: "Status", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About", href: "#" },
        { title: "Blog", href: "#" },
        { title: "Careers", href: "#" },
        { title: "Press", href: "#" },
        { title: "Inclusion", href: "#" },
        { title: "Social Impact", href: "#" },
        { title: "Shop", href: "#" },
      ],
    },
  ];

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "#" },
    { label: "Instagram", icon: IconInstagram, href: "#" },
    { label: "Facebook", icon: IconFacebook, href: "#" },
    {
      label: "Github",
      icon: IconGithub,
      href: "https://www.linkedin.com/in/davidnestoff",
    },
  ];

  return (
    <footer class="border-t border-gray-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-2">
              <Link class="inline-block font-bold text-xl" href={"/"}>
                AI Artistry
              </Link>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400">
              Copyright AI Artistry 2024. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
