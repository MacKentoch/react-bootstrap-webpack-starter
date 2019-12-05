import React from 'react';
import FadeInDiv from './styled/FadeInDiv';

type Props = {
  children: any;
};

function FadeInEntrance({ children }: Props) {
  return <FadeInDiv startAnimation>{children}</FadeInDiv>;
}

FadeInEntrance.displayName = 'FadeInEntrance';

export default FadeInEntrance;
