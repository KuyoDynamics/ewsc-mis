/* eslint-disable react/jsx-props-no-spreading */
import React, { Suspense } from 'react';

import Loader from 'components/loader';

// eslint-disable-next-line react/function-component-definition
const Loadable = (Component: React.FC) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
