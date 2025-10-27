import { Body, Container, Head, Html, Img, pixelBasedPreset, Tailwind } from '@react-email/components';
import type { ReactNode } from 'react';
import { getLogoSrc } from './utils/getImageSrc';

const CobaltWrapper = ({ children }: { children: ReactNode }) => (
  <Tailwind
    config={{
      presets: [pixelBasedPreset],
      theme: {
        extend: {
          colors: {
            cobalt: '#0047ab',
            cobalthover: '#1234ff',
            light: '#f8f9fa',
            dark: '#282c31',
            green: '#28a745',
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Body className="bg-white text-dark font-sans">
        <Container className="bg-light text-center rounded-3xl overflow-hidden px-12 py-8 !my-10 mx-auto">
          <Img src={getLogoSrc()} alt="Cobalt Logo" className="mx-auto" />
          {children}
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default CobaltWrapper;
