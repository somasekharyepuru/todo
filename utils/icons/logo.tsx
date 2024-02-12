import Image from 'next/image';
import * as React from 'react';
import logo from '@/public/logo/logo_transparent.png';
export const MSLogo = () => {
  return <Image alt="icon" src={logo} width={120} height={40} />;
};
