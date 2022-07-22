import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = SanityClient({
  projectId: 't0ugjyaf', // you can find it in sanity.json inside sanity folder
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception fofr localhost 3000 CORS policy
// sanity cors add http://localhost:3000

export default client;
