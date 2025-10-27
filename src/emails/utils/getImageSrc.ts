export const getLogoSrc = () => {
  const isDev = process.env.NODE_ENV !== 'production';
  const baseUrl = isDev ? 'http://localhost:3000' : 'https://cobaltsoft.ca';
  return `${baseUrl}/images/cobalt-logo192.png`;
};
