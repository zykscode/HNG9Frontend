import type { ReactNode } from 'react';

type ILinktreeProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const Linktree = (props: ILinktreeProps) => {
  return (
    <div className=" flex w-full flex-col  bg-[#FFFFFF]">
      {props.meta}
      {props.children}
    </div>
  );
};
