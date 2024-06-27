"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { EXAMPLE_PATH, CMS_NAME } from "@/lib/constants";
import {
  Header as TeradataHeader,
  Footer as TeradataFooter,
  Icon,
  Button,
} from "@teradata-web/react-components";
const metadata = {
  title: `Next.js and ${CMS_NAME} Example`,
  description: `This is a blog built with Next.js and ${CMS_NAME}.`,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

function Header() {
  return (
    <TeradataHeader
      headerActions={[
        {
          actionElement: (
            <div>
              <Icon className="fa fa-search" />
            </div>
          ),
          type: "search",
        },
        {
          actionElement: <Button icon="fa fa-home" label="Start free demo" />,
          type: "button",
        },
      ]}
      languages={[
        {
          label: "Global",
          value: "",
        },
        {
          label: "France",
          value: "fr",
        },
      ]}
      navItems={[
        {
          href: "test",
          isOpen: false,
          label: "Getting started",
        },
        {
          active: true,
          href: "test",
          isOpen: false,
          label: "Docs",
          navItems: [
            {
              href: "https://docs.teradata.com/p/VantageCloud/Lake",
              label: "VantageCloud Lake Documentation",
            },
            {
              active: true,
              label: "All Documentation",
              to: "/docs/ai-unlimited",
            },
          ],
        },
        {
          href: "test",
          isOpen: false,
          label: "Downloads",
        },
        {
          href: "test",
          isOpen: false,
          label: "Community",
          navItems: [
            {
              href: "https://support.teradata.com/community",
              label: "Teradata Community",
            },
            {
              external: true,
              href: "https://medium.com/teradata",
              label: "Technical Medium Blogs",
            },
            {
              external: true,
              href: "https://github.com/Teradata",
              label: "GitHub",
            },
            {
              external: true,
              href: "https://stackoverflow.com/questions/tagged/teradata",
              label: "Stack Overflow",
            },
          ],
        },
      ]}
      secondaryMenu={{
        menuElement: <>Hello world</>,
        title: "Demos",
      }}
      selectedLanguage="fr"
      title="Developers"
    />
  );
}

function Footer() {
  return (
    <TeradataFooter
      copyright="2024 Teradata. All Rights Reserved"
      legalLinks={[
        {
          href: "https://www.teradata.com/privacy",
          label: "Privacy",
        },
        {
          href: "https://www.teradata.com/privacy#do-not-sell-share",
          label: "Don’t Sell/Share My Info",
        },
        {
          href: "https://www.teradata.com/legal/terms-of-use",
          label: "Terms of use",
        },
        {
          href: "https://www.teradata.com/legal/legal-notice",
          label: "Legal",
        },
        {
          href: "https://www.teradata.com/product-support-policy",
          label: "Support Policies",
        },
        {
          href: "https://www.teradata.com/how-we-help#tracking-consent",
          label: "Tracking Consent",
        },
      ]}
      links={[
        {
          items: [
            {
              href: "https://www.teradata.com/how-we-help",
              label: "Roles",
            },
            {
              href: "https://www.teradata.com/industries",
              label: "Industries",
            },
            {
              href: "https://www.teradata.com/partners",
              label: "Partners",
            },
            {
              external: true,
              href: "https://www.teradata.com/getattachment/49d347ac-d544-4a6c-9db3-27c9cd2d5afd/new-user-registration-instructions-for-td-partner-community.pdf?lang=en-us",
              label: "Partner registration",
            },
            {
              external: true,
              href: "https://teradata.my.site.com/teradataPRM/s/login/",
              label: "Partner portal login",
            },
            {
              href: "https://www.teradata.com/customers",
              label: "Success stories",
            },
          ],
          title: "How we help",
        },
        {
          items: [
            {
              href: "https://www.teradata.com/platform",
              label: "Platform",
            },
            {
              href: "https://www.teradata.com/platform/vantagecloud",
              label: "VantageCloud",
            },
            {
              href: "https://www.teradata.com/platform/clearscape-analytics",
              label: "ClearScape Analytics",
            },
            {
              href: "https://www.teradata.com/platform/ai-ml",
              label: "Unleash AI Innovation",
            },
            {
              href: "https://www.teradata.com/platform/workloads",
              label: "Workloads",
            },
            {
              href: "https://www.teradata.com/platform/deployment",
              label: "Deployment",
            },
          ],
          title: "Our platform",
        },
        {
          items: [
            {
              href: "https://www.teradata.com/getting-started/pricing",
              label: "Pricing",
            },
            {
              href: "https://www.teradata.com/getting-started/demos",
              label: "Demos",
            },
            {
              href: "https://www.teradata.com/getting-started/modernization-workshop",
              label: "Modernization workshop",
            },
            {
              href: "https://www.teradata.com/getting-started/executive-briefing-center",
              label: "Executive Briefing Center",
            },
            {
              href: "https://www.teradata.com/events",
              label: "Events",
            },
            {
              href: "https://www.teradata.com/university",
              label: "Learning",
            },
          ],
          title: "Getting started",
        },
        {
          items: [
            {
              href: "https://www.teradata.com/insights/ai-and-machine-learning",
              label: "AI/ML",
            },
            {
              href: "https://www.teradata.com/insights/cloud-data-analytics",
              label: "Cloud data analytics",
            },
            {
              href: "https://www.teradata.com/insights/data-architecture",
              label: "Data architecture",
            },
            {
              href: "https://www.teradata.com/insights/data-platform",
              label: "Data platform",
            },
            {
              href: "https://www.teradata.com/insights/data-security",
              label: "Data security",
            },
            {
              href: "https://www.teradata.com/glossary",
              label: "Glossary",
            },
          ],
          title: "Insights",
        },
        {
          items: [
            {
              href: "https://www.teradata.com/about-us",
              label: "Who we are",
            },
            {
              href: "https://www.teradata.com/about-us/leadership",
              label: "Our leadership",
            },
            {
              href: "https://www.teradata.com/newsroom",
              label: "Newsroom",
            },
            {
              external: true,
              href: "https://careers.teradata.com/?_gl=1*ebzjes*_ga*MjIwNzU5MDQuMTcxMDc3MDE3MQ..*_ga_7PE2TMW3FE*MTcxMjc3NjAwNy4yOS4wLjE3MTI3NzYwMDcuNjAuMC4w",
              label: "Careers",
            },
            {
              external: true,
              href: "https://investor.teradata.com/?_gl=1*ebzjes*_ga*MjIwNzU5MDQuMTcxMDc3MDE3MQ..*_ga_7PE2TMW3FE*MTcxMjc3NjAwNy4yOS4wLjE3MTI3NzYwMDcuNjAuMC4w",
              label: "Investors",
            },
          ],
          title: "About us",
        },
      ]}
      socialLinks={{
        items: [
          {
            href: "https://www.linkedin.com/company/teradata",
            icon: "fa-brands fa-linkedin-in",
          },
          {
            href: "https://twitter.com/teradata",
            icon: "fa-brands fa-x-twitter",
          },
          {
            href: "https://www.facebook.com/Teradata",
            icon: "fa-brands fa-facebook-f",
          },
          {
            href: "https://www.instagram.com/teradata/",
            icon: "fa-brands fa-instagram",
          },
          {
            href: "https://www.youtube.com/user/teradata",
            icon: "fa-brands fa-youtube",
          },
          {
            href: "https://www.teradata.com/rss",
            icon: "fa fa-rss",
          },
        ],
        title: "Social media",
      }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <section className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </section>
      </body>
    </html>
  );
}
