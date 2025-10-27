import Script from 'next/script';
import { Graph, Organization, Person, Service, SoftwareApplication, WebPage } from 'schema-dts';

export const JsonLd = () => {
  const organization: Organization = {
    '@type': 'Organization',
    '@id': 'https://www.cobaltsoft.ca/#cobalt-software-solutions',
    name: 'Cobalt Software Solutions',
    url: 'https://www.cobaltsoft.ca',
    logo: [
      'https://www.cobaltsoft.ca/images/cobalt-text-logo512.png',
      'https://www.cobaltsoft.ca/images/cobalt-text-logo192.png',
    ],
    sameAs: ['https://www.linkedin.com/company/cobalt-software-solutions/'],
  };

  const person: Person = {
    '@type': 'Person',
    '@id': 'https://www.cobaltsoft.ca/#jacob-hexamer',
    name: 'Jacob Hexamer',
    sameAs: ['https://www.linkedin.com/in/jhexamer/'],
    affiliation: { '@id': 'https://www.cobaltsoft.ca/#cobalt-software-solutions' },
  };

  const software: SoftwareApplication = {
    '@type': 'SoftwareApplication',
    '@id': 'https://www.cobaltsoft.ca/#cobalt-axis',
    name: 'Cobalt Axis',
    description: 'A fully modular scheduling and compliance platform, tailored to your business.',
    provider: { '@id': 'https://www.cobaltsoft.ca/#cobalt-software-solutions' },
    mainEntityOfPage: { '@id': 'https://www.cobaltsoft.ca/#page' },
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
  };

  const service: Service = {
    '@type': 'Service',
    '@id': 'https://www.cobaltsoft.ca/#consulting-service',
    name: 'Software Consultation and Design',
    provider: { '@id': 'https://www.cobaltsoft.ca/#cobalt-software-solutions' },
    serviceType: 'Software Consultation and Design',
    description:
      'Custom software consultation and design services for businesses looking to improve productivity and workflows.',
  };

  const webPage: WebPage = {
    '@type': 'WebPage',
    '@id': 'https://www.cobaltsoft.ca/#page',
    url: 'https://www.cobaltsoft.ca',
    name: 'Cobalt Software Solutions',
    description: 'Home page for Cobalt Software Solutions, showcasing offerings and contact form.',
    inLanguage: 'en-CA',
    mainEntity: { '@id': 'https://www.cobaltsoft.ca/#cobalt-axis' },
  };

  const jsonLd: Graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, person, software, service, webPage],
  };

  return (
    <Script id="json-ld" type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </Script>
  );
};
