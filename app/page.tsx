'use client';

import MainLayout from './components/layout/MainLayout';
import SalesMetrics from './components/dashboard/SalesMetrics';
import SkuTable from './components/dashboard/SkuTable';
import CityTable from './components/dashboard/CityTable';
import React, { useState } from 'react';

export default function Home() {
  const [activePlatform, setActivePlatform] = useState<string>('Blinkit');
  const [chartView, setChartView] = useState<boolean>(true);

  return (
    <MainLayout>
      {/* Outer container with border radius */}
      <div className="rounded-[10px] border border-[#ebebeb] overflow-hidden ">
        {/* Header - kept exactly as it was but without its own border */}
        <div className="mb-0 flex items-center justify-between p-3 border-b border-[#ebebeb]">
          <div>
            <h1 className="text-xl font-semibold text-[#031b15]">Quick Commerce</h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Chart Toggle Button */}
            <div className="flex items-center border rounded-[10px] border-[#ebebeb] bg-white px-3 py-1.5">
              <div className="flex items-center mr-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.6324 16.75C18.6324 16.9158 18.5666 17.0747 18.4494 17.1919C18.3322 17.3092 18.1732 17.375 18.0074 17.375H3.00745C2.84169 17.375 2.68271 17.3092 2.5655 17.1919C2.44829 17.0747 2.38245 16.9158 2.38245 16.75V4.25C2.38245 4.08424 2.44829 3.92527 2.5655 3.80806C2.68271 3.69085 2.84169 3.625 3.00745 3.625C3.17321 3.625 3.33218 3.69085 3.44939 3.80806C3.5666 3.92527 3.63245 4.08424 3.63245 4.25V11.6227L7.59573 8.15625C7.70358 8.06184 7.8406 8.00737 7.98382 8.00197C8.12705 7.99656 8.26779 8.04055 8.38245 8.12656L12.977 11.5727L17.5957 7.53125C17.6563 7.4713 17.7285 7.42437 17.8078 7.39334C17.8872 7.36231 17.9721 7.34784 18.0572 7.35081C18.1424 7.35378 18.226 7.37414 18.303 7.41062C18.38 7.44711 18.4488 7.49896 18.505 7.56298C18.5612 7.627 18.6038 7.70185 18.63 7.78292C18.6563 7.86399 18.6657 7.94956 18.6576 8.0344C18.6496 8.11923 18.6243 8.20152 18.5833 8.27622C18.5423 8.35091 18.4864 8.41643 18.4192 8.46875L13.4192 12.8438C13.3113 12.9382 13.1743 12.9926 13.0311 12.998C12.8878 13.0034 12.7471 12.9594 12.6324 12.8734L8.03792 9.42891L3.63245 13.2836V16.125H18.0074C18.1732 16.125 18.3322 16.1908 18.4494 16.3081C18.5666 16.4253 18.6324 16.5842 18.6324 16.75Z" fill="#031B15" className={chartView ? "fill-[#34967a]" : "fill-[#031B15]"}/>
                </svg>
              </div>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_1_55)">
<path d="M7.1344 3.75C5.4768 3.75 3.88708 4.40848 2.71498 5.58058C1.54288 6.75269 0.884399 8.3424 0.884399 10C0.884399 11.6576 1.54288 13.2473 2.71498 14.4194C3.88708 15.5915 5.4768 16.25 7.1344 16.25H14.6344C16.292 16.25 17.8817 15.5915 19.0538 14.4194C20.2259 13.2473 20.8844 11.6576 20.8844 10C20.8844 8.3424 20.2259 6.75269 19.0538 5.58058C17.8817 4.40848 16.292 3.75 14.6344 3.75H7.1344ZM14.6344 15C13.3083 15 12.0365 14.4732 11.0989 13.5355C10.1612 12.5979 9.6344 11.3261 9.6344 10C9.6344 8.67392 10.1612 7.40215 11.0989 6.46447C12.0365 5.52678 13.3083 5 14.6344 5C15.9605 5 17.2323 5.52678 18.1699 6.46447C19.1076 7.40215 19.6344 8.67392 19.6344 10C19.6344 11.3261 19.1076 12.5979 18.1699 13.5355C17.2323 14.4732 15.9605 15 14.6344 15Z" fill="#027056"/>
</g>
<defs>
<clipPath id="clip0_1_55">
<rect width="20" height="20" fill="white" transform="translate(0.884399)"/>
</clipPath>
</defs>
</svg>

            </div>
            
            {/* Date Picker */}
            <div className="flex items-center">
              <button className="flex items-center bg-white border border-[#ebebeb] rounded-[10px] px-3 py-1.5 text-sm text-[#515153]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <rect x="2" y="3" width="12" height="10" rx="1" stroke="#515153" strokeWidth="1.5"/>
                  <path d="M11 2V4" stroke="#515153" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M5 2V4" stroke="#515153" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M2 6H14" stroke="#515153" strokeWidth="1.5"/>
                </svg>
                Aug 01, 024 - Aug 03, 2024
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                  <path d="M4 6L8 10L12 6" stroke="#515153" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Platform tabs - kept exactly as it was but without its own border */}
        {/* Commerce Platform Tabs */}
        <div className="flex items-center px-4 py-3 gap-6 border-b border-[#EBEBEB] bg-white">
          <div className="flex items-center p-1 rounded-xl border border-[rgba(3,27,21,0.1)] bg-white">
            {['Blinkit', 'Zepto', 'Instamart'].map((platform) => {
              const isActive = activePlatform === platform;
              const isDimmed = !isActive && (platform === 'Zepto' || platform === 'Instamart');

              return (
                <button 
                  key={platform}
                  className={`px-4 py-3 rounded-md text-sm flex items-center gap-2 w-[120px] transition-opacity ${
                    isActive 
                      ? 'bg-[#e6f3eb] text-[#34967a]' 
                      : 'bg-white text-[#6b7583]'
                  } ${isDimmed ? 'opacity-[0.5]' : ''}`}
                  onClick={() => setActivePlatform(platform)}
                >
                  <div className="rounded-md flex items-center justify-center">
                    <img src={`/${platform.toLowerCase()}.png`} alt={platform} className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{platform}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Content - kept exactly as it was */}
        <div className='p-3'>
          <div className="flex flex-wrap">
            <div className="w-full pb-3">
              <SalesMetrics />
            </div>
            {/* <div className="w-1/3">
              <TopCities />
            </div> */}
          </div>
          <CityTable />
          <SkuTable />
        </div>
      </div>
    </MainLayout>
  );
}