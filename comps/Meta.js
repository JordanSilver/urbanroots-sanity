import Head from 'next/head';
import React from 'react';

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Head>
  );
};

Meta.defaultProps = {
  title: ' URBAN ROOTS LANDSCAPING',
  description: 'LANDSCAPE CONTRACTORS',
  keywords:
    'Kitchen Cabinet Painting Custom Cabinet Painters Barrie Ontario Canada',
};
export default Meta;
