import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'r7pd2dj4', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-08-31', // this is the API version that you are using
  useCdn: true, // `false` if you want to ensure fresh data
});
