import Script from 'next/script';
import { AboutPage, Graph, Organization, Person, Service, SoftwareApplication, WebPage } from 'schema-dts';

export const JsonLd = () => {
  const organization: Organization = {
    '@type': 'Organization',
    '@id': 'https://cobaltsoft.ca/#cobalt-software-solutions',
    name: 'Cobalt Software Solutions',
    url: 'https://cobaltsoft.ca',
    logo: [
      'https://cobaltsoft.ca/images/cobalt-text-logo512.png',
      'https://cobaltsoft.ca/images/cobalt-text-logo192.png',
      'https://cobaltsoft.ca/images/cobalt-logo512.png',
      'https://cobaltsoft.ca/images/cobalt-logo192.png',
    ],
    sameAs: ['https://www.linkedin.com/company/cobalt-software-solutions/'],
  };

  const person: Person = {
    '@type': 'Person',
    '@id': 'https://cobaltsoft.ca/about/#jacob-hexamer',
    name: 'Jacob Hexamer',
    mainEntityOfPage: { '@id': 'https://cobaltsoft.ca/about/#page' },
    sameAs: ['https://www.linkedin.com/in/jhexamer/'],
    affiliation: { '@id': 'https://cobaltsoft.ca/#cobalt-software-solutions' },
  };

  const software: SoftwareApplication = {
    '@type': 'SoftwareApplication',
    '@id': 'https://cobaltsoft.ca/#cobalt-axis',
    name: 'Cobalt Axis',
    description: 'A fully modular scheduling and compliance platform, tailored to your business.',
    provider: { '@id': 'https://cobaltsoft.ca/#cobalt-software-solutions' },
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
  };

  const service: Service = {
    '@type': 'Service',
    '@id': 'https://cobaltsoft.ca/#consulting-service',
    name: 'Software Consultation and Design',
    provider: { '@id': 'https://cobaltsoft.ca/#cobalt-software-solutions' },
    serviceType: 'Software Consultation and Design',
    description:
      'Custom software consultation and design services for businesses looking to improve productivity and workflows.',
  };

  const webPage: WebPage = {
    '@type': 'WebPage',
    '@id': 'https://cobaltsoft.ca/#page',
    url: 'https://cobaltsoft.ca',
    name: 'Cobalt Software Solutions',
    description: 'Home page for Cobalt Software Solutions, showcasing offerings and contact form.',
    inLanguage: 'en-CA',
    mainEntity: { '@id': 'https://cobaltsoft.ca/#cobalt-axis' },
    about: { '@id': 'https://cobaltsoft.ca/about/#jacob-hexamer' },
  };

  const aboutPage: AboutPage = {
    '@type': 'AboutPage',
    '@id': 'https://cobaltsoft.ca/about/#page',
    url: 'https://cobaltsoft.ca/about',
    name: 'About Jacob Hexamer, Founder and President of Cobalt Software Solutions',
    mainEntity: { '@id': 'https://cobaltsoft.ca/about/#jacob-hexamer' },
  };

  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, person, software, service, webPage, aboutPage],
  };

  return (
    <Script id="json-ld" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  );
};
