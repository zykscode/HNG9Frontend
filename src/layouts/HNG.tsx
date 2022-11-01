import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { Footer } from '@/components/Footer';
import Links from '@/components/Links';
import Profile from '@/components/Profile';

import Share from '../components/Share';
import useCopyToClipboard from '../components/useCopyToClipboard';
import Logo from '../public/static/images/I4G.jpg';

const variants = {
  open: { opacity: 1, scale: 1.5 },
  closed: { opacity: 0 },
};

export const details = [
  {
    id: 'btn__zuri',
    link: 'https://training.zuri.team/',
    name: 'Zuri Team',
  },
  {
    id: 'books',
    link: 'http://books.zuri.team/',
    name: 'Zuri Books',
    subtext: 'This is where you find books about design and coding',
  },
  {
    id: 'book__python',
    link: 'https://books.zuri.team/python-for-beginners?ref_id=zykson',
    name: 'Python Books',
    subtext: 'You want to level up your python skills? click here',
  },
  {
    id: 'pitch',
    link: 'https://background.zuri.team',
    name: 'Background Check for Coders',
    subtext:
      "Tired of being catfished? trying to fish out impersonators? here's the best tool online",
  },
  {
    id: 'book__design',
    link: 'https://books.zuri.team/design-rules',
    name: 'Book Design',
    subtext: 'Get free design books offered by Zuri',
  },
];

export const HNG = () => {
  const [anim, setAnim] = useState(false);

  const handleAnim = () => {
    setAnim(() => !anim);
  };
  // eslint-disable-next-line prettier/prettier, unused-imports/no-unused-vars
  const [ value, copy] = useCopyToClipboard();
  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="pt-16 pb-8 flex flex-col gap-6   min-h-screen w-full">
        <div className="flex flex-col gap-8 px-4 md:px-[10%] h-full  justify-between">
          <Profile />
          <div className="h-full flex flex-col gap-6 justify-between">
            <a
              href="https://twitter.com/zykson"
              target="_blank"
              className={` rounded-lg flex   justify-center py-4 px-8 gap-2 ${
                anim ? 'focus:bg-[#FCFCFD]' : 'focus:bg-[#98A2B3] '
              } bg-[#EAECF0]  hover:bg-[#D0D5DD]  `}
              rel="noreferrer"
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
                    <span className={`text-[#101828]  mx-auto `}>
                      <span className="text2 font-bold"> Zykson</span>
                    </span>
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
                        copy('https://twitter.com/zykson');
                        setTimeout(handleAnim, 7000);
                      }}
                    />
                  </motion.div>
                </div>
              }
            </a>
            {details.map((detail) => {
              return (
                <Links
                  key={detail.id}
                  id={detail.id}
                  name={detail.name}
                  link={detail.link}
                  subtext={detail.subtext}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
      <div className="py-8 md:pt-16 px-4 ">
        <div className="flex flex-col md:flex-row gap-4 justify-between md:px-24">
          <svg
            width="141"
            height="24"
            viewBox="0 0 141 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.58728 17.3696V17.3017L11.2984 7.88469V5.75107H1.28986V8.25323H7.59374V8.32113L1.01831 17.68V19.8621H11.3179V17.3696H4.58728ZM19.7942 10.1637V14.8674C19.7942 15.7694 19.5808 16.4676 19.1735 16.9526C18.7565 17.4472 18.2425 17.6897 17.6411 17.6897C17.0205 17.6897 16.5743 17.5151 16.3028 17.166C16.0312 16.8168 15.9052 16.1961 15.9052 15.3233V10.1637H13.306V16.0021C13.306 16.7295 13.3836 17.3502 13.5582 17.874C13.7328 18.3977 13.9752 18.8147 14.305 19.125C14.6347 19.4354 15.0032 19.6681 15.4299 19.8136C15.8469 19.9591 16.3319 20.0269 16.875 20.0269C17.4278 20.0269 17.9515 19.9202 18.4461 19.6875C18.9407 19.4547 19.3772 19.125 19.7554 18.6789H19.7942V19.8621H22.3933V10.1637H19.7942ZM30.5011 9.99889C29.9191 9.99889 29.3858 10.1444 28.8814 10.4159C28.3772 10.6875 27.9407 11.0851 27.5722 11.5894H27.5431V10.1637H24.9439V19.8621H27.5431V15.3621C27.5431 14.625 27.7565 14.014 28.1929 13.5388C28.6293 13.0733 29.2403 12.8308 30.0161 12.8308C30.2101 12.8308 30.4429 12.8405 30.7048 12.8599V10.0087C30.666 10.0087 30.5981 9.99889 30.5011 9.99889ZM33.8082 8.79633C34.2446 8.79633 34.6228 8.64115 34.9429 8.33081C35.2533 8.02047 35.4181 7.65193 35.4181 7.20581C35.4181 6.77909 35.2533 6.40086 34.9429 6.09052C34.6228 5.78017 34.2446 5.625 33.8082 5.625C33.3621 5.625 32.9742 5.78017 32.6638 6.09052C32.3535 6.40086 32.1982 6.77909 32.1982 7.20581C32.1982 7.49676 32.2662 7.76832 32.4117 8.01077C32.5474 8.25323 32.7414 8.44717 32.9935 8.58298C33.2457 8.72846 33.5172 8.79633 33.8082 8.79633ZM32.5086 19.8621H35.1078V10.1637H32.5086V19.8621ZM48.6563 19.8621H51.4687V5.75107H48.6563V19.8621ZM60.1681 9.99889C59.5668 9.99889 58.9946 10.125 58.4515 10.3674C57.9084 10.6099 57.4429 10.9591 57.0549 11.4149H57.0258V10.1637H54.4267V19.8621H57.0258V14.9839C57.0258 14.14 57.2198 13.4903 57.6175 13.0248C58.0151 12.569 58.5485 12.3362 59.2274 12.3362C59.8577 12.3362 60.3232 12.5205 60.6336 12.8793C60.9343 13.2478 61.0894 13.8685 61.0894 14.7607V19.8717H63.6885V14.111C63.6885 13.3836 63.6013 12.7533 63.4364 12.2101C63.2618 11.6767 63.0194 11.25 62.6993 10.9299C62.3793 10.6196 62.0108 10.3869 61.5938 10.2317C61.1767 10.0765 60.7015 9.99889 60.1681 9.99889ZM69.1972 20.0269C69.7888 20.0269 70.2737 19.9784 70.6519 19.8717C71.0205 19.7748 71.3987 19.6196 71.7673 19.4159L71.0981 17.3405C70.6519 17.5733 70.2446 17.68 69.8761 17.68C69.5657 17.68 69.3524 17.583 69.2166 17.3793C69.0808 17.1853 69.0226 16.8653 69.0226 16.4386V12.3168H71.6605V10.1637H69.0226V6.71121L66.4235 6.99245V10.1637H65.2791V12.3168H66.4235V16.7974C66.4235 17.8642 66.6659 18.6692 67.1605 19.2122C67.6552 19.7554 68.334 20.0269 69.1972 20.0269ZM82.1444 14.9257C82.1444 13.9849 81.9407 13.1412 81.5528 12.3944C81.1552 11.6476 80.5927 11.0657 79.875 10.639C79.1476 10.2122 78.3136 9.99889 77.3825 9.99889C76.7037 9.99889 76.0636 10.125 75.472 10.3674C74.8707 10.6196 74.3664 10.9591 73.9397 11.3954C73.5129 11.8319 73.1832 12.3653 72.9407 12.986C72.6885 13.6067 72.5722 14.2855 72.5722 15.0032C72.5722 15.9924 72.7855 16.875 73.222 17.6412C73.6584 18.417 74.2597 19.0087 75.0161 19.4159C75.7726 19.8232 76.6164 20.0269 77.5668 20.0269C78.4979 20.0269 79.3125 19.8621 80.0302 19.5324C80.7381 19.2026 81.3103 18.7565 81.7565 18.194L80.069 16.6228C79.458 17.3599 78.6821 17.7285 77.7511 17.7188C77.1304 17.7188 76.597 17.5442 76.1605 17.2145C75.7241 16.8847 75.4332 16.4386 75.278 15.8567H82.0765C82.1153 15.7015 82.1444 15.3912 82.1444 14.9257ZM77.4698 12.2877C78.0129 12.2877 78.4687 12.4429 78.8276 12.7435C79.1767 13.0442 79.4289 13.4612 79.5646 13.9849H75.2878C75.4332 13.4418 75.695 13.0151 76.083 12.7241C76.4709 12.4332 76.9267 12.2877 77.4698 12.2877ZM89.7766 9.99889C89.1948 9.99889 88.6618 10.1444 88.157 10.4159C87.653 10.6875 87.2168 11.0851 86.8477 11.5894H86.8187V10.1637H84.2201V19.8621H86.8187V15.3621C86.8187 14.625 87.0323 14.014 87.4684 13.5388C87.9054 13.0733 88.5161 12.8308 89.2924 12.8308C89.4861 12.8308 89.7186 12.8405 89.981 12.8599V10.0087C89.9421 10.0087 89.8742 9.99889 89.7766 9.99889ZM97.4094 9.99889C96.8085 9.99889 96.2359 10.125 95.693 10.3674C95.1501 10.6099 94.6841 10.9591 94.296 11.4149H94.267V10.1637H91.6684V19.8621H94.267V14.9839C94.267 14.14 94.4615 13.4903 94.8588 13.0248C95.2568 12.569 95.7898 12.3362 96.4684 12.3362C97.099 12.3362 97.565 12.5205 97.8753 12.8793C98.1757 13.2478 98.3305 13.8685 98.3305 14.7607V19.8717H100.93V14.111C100.93 13.3836 100.843 12.7533 100.678 12.2101C100.503 11.6767 100.26 11.25 99.941 10.9299C99.6207 10.6196 99.2524 10.3869 98.8353 10.2317C98.4182 10.0765 97.9432 9.99889 97.4094 9.99889ZM106.555 20.0269C107.777 20.0269 108.708 19.7554 109.348 19.1929C109.988 18.6401 110.318 17.9127 110.318 17.0108C110.318 16.778 110.298 16.5549 110.259 16.361C110.134 15.7209 109.755 15.1972 109.135 14.8092C108.766 14.5765 108.049 14.2662 106.982 13.8685C106.467 13.6745 106.099 13.5 105.866 13.3448C105.634 13.1897 105.527 13.0151 105.527 12.8211C105.527 12.5883 105.624 12.4138 105.818 12.2877C106.012 12.1616 106.225 12.0938 106.477 12.0938C106.846 12.0938 107.234 12.1811 107.641 12.3556C108.049 12.5301 108.427 12.7823 108.795 13.1218L110.056 11.2209C109.503 10.7942 108.941 10.4839 108.378 10.2899C107.806 10.0959 107.186 9.99889 106.506 9.99889C105.847 9.99889 105.246 10.125 104.722 10.3577C104.198 10.6002 103.781 10.9397 103.471 11.3858C103.16 11.8319 103.015 12.3362 103.015 12.9084C103.015 13.2188 103.044 13.5 103.121 13.7522C103.19 14.014 103.296 14.2467 103.432 14.4407C103.568 14.6444 103.723 14.8287 103.898 14.9839C104.072 15.1487 104.276 15.2942 104.518 15.4299C104.751 15.5657 104.983 15.6724 105.217 15.7694C105.449 15.8664 105.711 15.9634 106.002 16.0603C106.458 16.2156 106.798 16.3319 107.03 16.4289C107.263 16.5259 107.437 16.6326 107.573 16.7489C107.7 16.8653 107.767 16.9913 107.767 17.1368C107.767 17.3793 107.661 17.5733 107.447 17.7188C107.234 17.874 106.943 17.9418 106.574 17.9418C105.585 17.9418 104.693 17.5636 103.888 16.8071L102.627 18.6013C103.704 19.5517 105.013 20.0269 106.555 20.0269ZM118.116 9.99889C117.485 9.99889 116.903 10.1153 116.36 10.3384C115.817 10.5711 115.351 10.9009 114.963 11.3373H114.924V5.23706H112.326V19.8621H114.924V14.945C114.924 14.0916 115.119 13.4515 115.526 13.0053C115.923 12.5593 116.476 12.3362 117.194 12.3362C117.834 12.3362 118.309 12.5205 118.62 12.8696C118.93 13.2285 119.086 13.8395 119.086 14.6929V19.8717H121.694V14.0334C121.694 13.3157 121.606 12.6853 121.432 12.1616C121.258 11.6379 121.006 11.2112 120.685 10.9009C120.356 10.5905 119.987 10.3674 119.561 10.222C119.134 10.0765 118.658 9.99889 118.116 9.99889ZM125.593 8.79633C126.029 8.79633 126.407 8.64115 126.727 8.33081C127.038 8.02047 127.202 7.65193 127.202 7.20581C127.202 6.77909 127.038 6.40086 126.727 6.09052C126.407 5.78017 126.029 5.625 125.593 5.625C125.147 5.625 124.759 5.78017 124.448 6.09052C124.138 6.40086 123.982 6.77909 123.982 7.20581C123.982 7.49676 124.051 7.76832 124.196 8.01077C124.332 8.25323 124.526 8.44717 124.778 8.58298C125.03 8.72846 125.302 8.79633 125.593 8.79633ZM124.294 19.8621H126.892V10.1637H124.294V19.8621ZM135.223 9.99889C133.982 9.99889 133.002 10.4257 132.285 11.2791H132.246V10.1637H129.646V23.7899H132.246V18.7759H132.285C132.973 19.6099 133.923 20.0269 135.146 20.0269C135.805 20.0269 136.426 19.9106 136.998 19.6681C137.57 19.4354 138.065 19.0959 138.472 18.6692C138.879 18.2425 139.209 17.709 139.442 17.0883C139.674 16.4676 139.791 15.7791 139.791 15.042C139.791 14.4602 139.713 13.917 139.568 13.3933C139.413 12.8696 139.199 12.4041 138.928 11.9968C138.656 11.5894 138.327 11.2306 137.958 10.9299C137.58 10.6293 137.153 10.3965 136.687 10.2414C136.222 10.0862 135.727 9.99889 135.223 9.99889ZM134.671 17.6993C134.195 17.6993 133.769 17.5927 133.38 17.3793C132.992 17.166 132.692 16.8459 132.468 16.4386C132.246 16.0313 132.139 15.5754 132.139 15.0517C132.139 14.6735 132.197 14.3147 132.324 13.9752C132.449 13.6455 132.624 13.3545 132.847 13.1121C133.06 12.8793 133.332 12.6853 133.642 12.5496C133.952 12.4138 134.302 12.3362 134.671 12.3362C135.378 12.3362 135.97 12.5883 136.445 13.083C136.911 13.5873 137.153 14.237 137.153 15.0517C137.153 15.8373 136.92 16.4774 136.455 16.9623C135.989 17.4569 135.397 17.6993 134.671 17.6993Z"
              fill="black"
            />
            <path
              d="M42.1665 20.1643C42.9666 20.1643 43.66 19.8799 44.229 19.3109C44.798 18.742 45.1002 18.0663 45.1002 17.2662C45.1002 16.4839 44.798 15.7905 44.229 15.2215C43.66 14.6525 42.9666 14.3502 42.1665 14.3502C41.3308 14.3502 40.6196 14.6347 40.0506 15.2037C39.4816 15.7727 39.1972 16.4661 39.1972 17.2662C39.1972 18.0841 39.4816 18.7598 40.0506 19.3287C40.6196 19.8977 41.3308 20.1643 42.1665 20.1643Z"
              fill="#E7332B"
            />
          </svg>
          <span className="text4 text-[#667085]">
            HNG Internship 9 Frontend Task
          </span>
          <Image src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};
