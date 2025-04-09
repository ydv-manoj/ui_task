import React from 'react';
import Image from 'next/image';

const CollapsedSidebar = () => {
  return (
    <div className="fixed left-0 top-0 z-10 h-full w-16 bg-white border-r border-gray-100 flex flex-col items-center py-4">
      {/* Top app icons section */}
      <div className="flex flex-col items-center w-full">
        {/* First icon with green border (Perfora) */}
        <div className="mb-6 flex items-center justify-center bg-gray-50">
        <img className="w-10 h-10 rounded-xl border-2 border-green-600" src="/perfora.png" />
        </div>
        
        {/* Second icon with blue border (Mama Earth) */}
        <div className="w-10 h-10 rounded-lg border-2 border-blue-500 mb-3 flex items-center justify-center bg-white">
        <img className="rounded-lg" src="/mamearth.png" />
        </div>
        
        {/* Third icon black background with red triangle */}
        <div className="w-10 h-10 rounded-lg bg-black mb-3 flex items-center justify-center">
        <img className="rounded-lg" src="/boat.png" />
        </div>
        
        {/* Add button with plus icon */}
        <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-green-600 mb-6">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3V13" stroke="#027056" strokeWidth="2" strokeLinecap="round"/>
            <path d="M13 8L3 8" stroke="#027056" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      
      {/* Bottom section */}
      <div className="mt-auto mb-4 flex flex-col items-center gap-3">
        {/* User icon with SS */}
        <div className='w-10 h-10 flex items-center justify-center'>
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_1_654)">
                          <path d="M14.6741 17.5V15.8333C14.6741 14.9493 14.3229 14.1014 13.6978 13.4763C13.0727 12.8512 12.2248 12.5 11.3408 12.5H4.67411C3.79006 12.5 2.94221 12.8512 2.31709 13.4763C1.69197 14.1014 1.34078 14.9493 1.34078 15.8333V17.5" stroke="#7E8986" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8.00745 9.16667C9.84839 9.16667 11.3408 7.67428 11.3408 5.83333C11.3408 3.99238 9.84839 2.5 8.00745 2.5C6.1665 2.5 4.67411 3.99238 4.67411 5.83333C4.67411 7.67428 6.1665 9.16667 8.00745 9.16667Z" stroke="#7E8986" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M19.6741 17.501V15.8344C19.6736 15.0958 19.4277 14.3784 18.9752 13.7946C18.5227 13.2109 17.8892 12.794 17.1741 12.6094" stroke="#7E8986" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M13.8408 2.60938C14.5578 2.79296 15.1933 3.20996 15.6471 3.79463C16.101 4.37931 16.3473 5.0984 16.3473 5.83854C16.3473 6.57868 16.101 7.29778 15.6471 7.88245C15.1933 8.46712 14.5578 8.88412 13.8408 9.06771" stroke="#7E8986" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                          <clipPath id="clip0_1_654">
                              <rect width="20" height="20" fill="white" transform="translate(0.507446)" />
                          </clipPath>
                      </defs>
                  </svg>
        </div>
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white mb-4">
          <span className="text-sm font-medium">SS</span>
        </div>
      </div>


    </div>
  );
};

export default CollapsedSidebar;