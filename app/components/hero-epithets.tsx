'use client';

import { NextPage } from 'next';
import Textra from 'react-textra';

interface HeroEpithetsProps {
  data: string[];
}

const HeroEpithets: NextPage<HeroEpithetsProps> = ({ data }) => {
  return (
    <Textra
      data={data}
      effect={'downTop'}
      className=" bg-clip-text text-transparent bg-gradient-to-b from-white to-yellowgrey"
    />
  );
};

export default HeroEpithets;
