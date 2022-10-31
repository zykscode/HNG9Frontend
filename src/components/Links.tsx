import { motion } from 'framer-motion';
import React, { useState } from 'react';

import Share from './Share';
import useCopyToClipboard from './useCopyToClipboard';

type Props = {
  id: string;
  link: string;
  name: string;
  subtext?: string;
};

const variants = {
  open: { opacity: 1, scale: 1.5 },
  closed: { opacity: 0 },
};

const Links = (props: Props) => {
  const [anim, setAnim] = useState(false);

  const handleAnim = () => {
    setAnim(() => !anim);
  };
  // eslint-disable-next-line prettier/prettier, unused-imports/no-unused-vars
  const [ value, copy] = useCopyToClipboard();
  return (
    <>
      <button
        id={props.id}
        className={` rounded-lg flex   justify-center py-4 px-8 gap-2 ${
          anim ? 'focus:bg-[#FCFCFD]' : 'focus:bg-[#98A2B3] '
        } bg-[#EAECF0]  hover:bg-[#D0D5DD]  `}
      >
        {' '}
        {
          <div className="flex items-center gap-3 justify-center">
            <motion.div
              drag="x"
              dragSnapToOrigin={true}
              dragElastic={0.2}
              dragConstraints={{ left: -52, right: 0 }}
              onDragEnd={handleAnim}
              className={`flex flex-col md:p-2   gap-1 ${anim ? '' : ''}`}
            >
              <a
                href={props.link}
                target="_blank"
                className={`text-[#101828]  mx-auto `}
                rel="noreferrer"
              >
                <span className="text2 font-bold"> {props.name}</span>
              </a>
              <h3 className="text3 italic flex mr-3">{props.subtext}</h3>
            </motion.div>
            <motion.div
              animate={anim ? 'open' : 'closed'}
              variants={variants}
              initial={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <Share
                onClick={() => {
                  copy(props.link);
                  setTimeout(handleAnim, 5000);
                }}
              />
            </motion.div>
          </div>
        }
      </button>
    </>
  );
};

export default Links;
