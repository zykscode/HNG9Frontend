import React from 'react';

import { HNG } from '@/layouts/HNG';
import { Meta } from '@/layouts/Meta';
import { Linktree } from '@/templates/Linktree';

const Index = () => {
  return (
    <Linktree
      meta={
        <Meta title="Zyk Linktree" description="HNG9 Frontend Track Stage 1" />
      }
    >
      <HNG />
    </Linktree>
  );
};

export default Index;
