import React from 'react';

const SkuTable = () => {
  return (
    <div className="bg-white rounded-lg p-4 mt-6 border border-[#ebebeb]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-[#031b15]">City level data</h2>
          <p className="text-sm text-[#77777E]">Analytics for all your cities</p>
        </div>
        <div className="flex items-center">
          <button className="bg-[#3D8F78] text-white text-sm px-4 py-2 rounded flex items-center">
            Filters(1)
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
              <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Table */}
      <div className="overflow-hidden border border-[#F1F1F1] rounded-lg">
        {/* Section Headers */}
        <div className="grid grid-cols-8 border-b border-[#F1F1F1] bg-[#F7F7F7]">
          <div className="col-span-1 p-4 flex items-center">
            <div className="flex items-center gap-2 ">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.6324 16.75C18.6324 16.9158 18.5666 17.0747 18.4494 17.1919C18.3322 17.3092 18.1732 17.375 18.0074 17.375H3.00745C2.84169 17.375 2.68271 17.3092 2.5655 17.1919C2.44829 17.0747 2.38245 16.9158 2.38245 16.75V4.25C2.38245 4.08424 2.44829 3.92527 2.5655 3.80806C2.68271 3.69085 2.84169 3.625 3.00745 3.625C3.17321 3.625 3.33218 3.69085 3.44939 3.80806C3.5666 3.92527 3.63245 4.08424 3.63245 4.25V11.6227L7.59573 8.15625C7.70358 8.06184 7.8406 8.00737 7.98382 8.00197C8.12705 7.99656 8.26779 8.04055 8.38245 8.12656L12.977 11.5727L17.5957 7.53125C17.6563 7.4713 17.7285 7.42437 17.8078 7.39334C17.8872 7.36231 17.9721 7.34784 18.0572 7.35081C18.1424 7.35378 18.226 7.37414 18.303 7.41062C18.38 7.44711 18.4488 7.49896 18.505 7.56298C18.5612 7.627 18.6038 7.70185 18.63 7.78292C18.6563 7.86399 18.6657 7.94956 18.6576 8.0344C18.6496 8.11923 18.6243 8.20152 18.5833 8.27622C18.5423 8.35091 18.4864 8.41643 18.4192 8.46875L13.4192 12.8438C13.3113 12.9382 13.1743 12.9926 13.0311 12.998C12.8878 13.0034 12.7471 12.9594 12.6324 12.8734L8.03792 9.42891L3.63245 13.2836V16.125H18.0074C18.1732 16.125 18.3322 16.1908 18.4494 16.3081C18.5666 16.4253 18.6324 16.5842 18.6324 16.75Z" fill="#031B15"/>
            </svg>
              <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">SKU Name</span>
            </div>
          </div>
          <div className="col-span-3 flex items-center justify-center border-r border-[#F1F1F1]">
            <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">Availability</span>
          </div>
          <div className="col-span-4 flex items-center justify-center">
            <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">Visibility</span>
          </div>
        </div>
        
        {/* Column Headers */}
        <div className="grid grid-cols-8 border-b border-[#F1F1F1] bg-[#F7F7F7]">
          <div className="col-span-1 p-4"></div>
          <div className="p-4 flex items-center justify-start gap-[4px]">
            <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">Sales</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#4E5E5A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="p-4 flex items-center justify-start gap-[4px]">
            <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">Out of Stock</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#4E5E5A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="p-4 flex items-center justify-start gap-[4px] border-r border-[#F1F1F1]">
            <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">Total Inventory</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#4E5E5A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="p-4 flex items-center justify-start gap-[4px]">
            <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">Average Rank</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#4E5E5A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="p-4 flex items-center justify-start gap-[4px]">
            <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">Est. Traffic</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#4E5E5A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="p-4 flex items-center justify-start gap-[4px]">
            <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">Est. Impressions</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6L8 10L12 6" stroke="#4E5E5A" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="p-4 flex items-center justify-start gap-[4px]">
            <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">CI</span>
          </div>
        </div>
        
        {/* Data Rows */}
        {/* Protein Bar (Selected) */}
        <div className="grid grid-cols-8 border-b border-[#F1F1F1]">
          <div className="col-span-1 p-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#34967A] flex items-center justify-center text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8.5L6 11.5L13 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <a href="#" className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] hover:underline">
              Delhi
            </a>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">₹93,132.12</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">1.68%</span>
          </div>
          
          <div className="p-4 border-r border-[#F1F1F1]">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">931.9</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">3.2</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">12,303</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">25,005</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">1.5</span>
          </div>
        </div>
        
        {/* Choco Bar (Selected with growth) */}
        <div className="grid grid-cols-8 border-b border-[#F1F1F1]">
          <div className="col-span-1 p-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#34967A] flex items-center justify-center text-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8.5L6 11.5L13 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <a href="#" className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] hover:underline">
              Bengaluru
            </a>
          </div>
          
          <div className="p-4">
            <div className="flex flex-col">
              <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">₹8,526.32</span>
              <span className="text-[14px] text-[#77777E] leading-[16px] tracking-[-0.02px]">₹7,012.72</span>
              <div className="flex items-center text-[#37B37F] text-[14px] leading-[16px] tracking-[-0.02px]">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4L12 8L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" transform="rotate(90 8 8)"/>
                </svg>
                <span>2.4%</span>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex flex-col">
              <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">6.79%</span>
              <span className="text-[14px] text-[#77777E] leading-[16px] tracking-[-0.02px]">3.28%</span>
              <div className="flex items-center text-[#37B37F] text-[14px] leading-[16px] tracking-[-0.02px]">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 4L12 8L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" transform="rotate(90 8 8)"/>
                </svg>
                <span>2.4%</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 border-r border-[#F1F1F1]">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">679</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">7</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">3005</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">4231</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">2</span>
          </div>
        </div>
        
        {/* SKU 3 (Not Selected) */}
        <div className="grid grid-cols-8 border-b border-[#F1F1F1] bg-[#FAFAFA]">
          <div className="col-span-1 p-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded border border-[#D9D9D9] bg-white flex items-center justify-center">
            </div>
            <a href="#" className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] hover:underline">
              SKU 3
            </a>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">₹9313</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">1.68%</span>
          </div>
          
          <div className="p-4 border-r border-[#F1F1F1]">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">931.9</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">11</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">1931.9</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">931.9</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">1.5</span>
          </div>
        </div>
        
        {/* SKU 4 (Not Selected) */}
        <div className="grid grid-cols-8 border-b border-[#F1F1F1] bg-[#FAFAFA]">
          <div className="col-span-1 p-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded border border-[#D9D9D9] bg-white flex items-center justify-center">
            </div>
            <a href="#" className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px] hover:underline">
              SKU 4
            </a>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">₹0</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">0</span>
          </div>
          
          <div className="p-4 border-r border-[#F1F1F1]">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">0</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">0</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">0</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">0</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">0.0</span>
          </div>
        </div>
        
        {/* Total Row */}
        <div className="grid grid-cols-8 bg-white">
          <div className="col-span-1 p-4">
            <span className="text-[14px] text-[#4E5E5A] font-medium leading-[16px] tracking-[-0.02px]">Total</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">₹2,93,132.12</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">16%</span>
          </div>
          
          <div className="p-4 border-r border-[#F1F1F1]">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">2931</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">8.3</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">61,985</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">2,61,768</span>
          </div>
          
          <div className="p-4">
            <span className="text-[14px] text-[#4E5E5A] leading-[16px] tracking-[-0.02px]">1.6</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkuTable;