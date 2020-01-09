import React, { Suspense } from 'react';
import LoadingContent from '../loadingContent';
type Props = {
  children: any;
};
function WithSuspense({ children }: Props) {
  return <Suspense fallback={<LoadingContent />}>{children}</Suspense>;
}

WithSuspense.displayName = 'WithSuspense';

export default WithSuspense;
