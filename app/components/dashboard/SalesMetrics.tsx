import React from 'react';

const SalesMetrics = () => {
  return (
    <div className="flex">
      <div className="w-2/3 flex">
        {/* Sales (MRP) Card */}
        <div className="w-1/2 pr-2">
          <div className="bg-white rounded-lg overflow-hidden border border-[#ebebeb] h-full flex flex-col">
            {/* Card Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#ebebeb]">
              <h3 className="text-sm font-medium text-[#77777E]">Sales (MRP)</h3>
              <button className="text-[#77777E]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 16V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="8" r="1" fill="currentColor"/>
                </svg>
              </button>
            </div>
            
            {/* Price and Percentage */}
            <div className="px-4 py-2">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-[#031B15]">125.49</h2>
                <div className="flex flex-col items-end">
                  <div className="flex items-center text-[#37B37F] text-sm font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>2.4%</span>
                  </div>
                  <span className="text-xs text-[#77777E]">vs 119.69 last month</span>
                </div>
              </div>
            </div>
            
            {/* Chart with Y axis labels */}
{/* Chart with Y axis labels */}
<div className="relative flex-grow p-2 pb-8 border-b border-[#ebebeb]">
  {/* Y axis labels */}
  <div className="absolute left-4 top-4 bottom-10 flex flex-col justify-between text-xs text-[#77777E]">
    <span>6.0</span>
    <span>4.5</span>
    <span>3.0</span>
    <span>1.5</span>
  </div>
  
  {/* Chart */}
  <div className="ml-8 h-full">
    <svg width="100%" height="170" viewBox="0 0 285 108" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <g clipPath="url(#clip0_1_98)">
        <path d="M1.50742 38H284.507" stroke="#EDEDED"/>
        <path d="M1.50742 73H284.507" stroke="#EDEDED"/>
        <path d="M1.50742 105L27.4119 81.6231C28.2045 80.9078 29.2502 80.5391 30.3162 80.599L60.7196 82.3081C61.7446 82.3657 62.7524 82.0271 63.5346 81.3622L90.9951 58.0222C92.4454 56.7895 94.5636 56.7496 96.0593 57.9267L123.555 79.5653C125.459 81.0639 128.248 80.5387 129.476 78.4502L155.168 34.776C156.645 32.2652 160.225 32.1248 161.894 34.5121L188.548 72.633C189.776 74.3891 192.17 74.8657 193.977 73.7139L220.771 56.6335C221.514 56.1599 222.392 55.9449 223.27 56.0217L252.177 58.5529C253.523 58.6708 254.839 58.1005 255.673 57.0368L285.507 19" stroke="#37B37F"/>
        <path d="M26.9873 81.6537L1.38854 105.265C0.719258 105.882 1.15603 107 2.06653 107H281.507C283.717 107 285.507 105.209 285.507 103V19L255.622 57.0397C254.788 58.1018 253.474 58.671 252.128 58.5534L223.165 56.0214C222.288 55.9448 221.411 56.1592 220.669 56.6316L193.819 73.7194C192.013 74.8686 189.623 74.3927 188.395 72.6394L161.685 34.5011C160.016 32.1171 156.44 32.2575 154.963 34.7651L129.218 78.4578C127.989 80.5434 125.204 81.068 123.3 79.5725L95.7441 57.9214C94.2493 56.7469 92.1343 56.7868 90.6848 58.0168L63.1705 81.3646C62.3887 82.028 61.382 82.3658 60.3583 82.3084L29.9234 80.6003C28.8425 80.5396 27.7831 80.9197 26.9873 81.6537Z" fill="url(#paint0_linear_1_98)" fillOpacity="0.15"/>
        <path d="M1.50742 83.3933L77.9866 92.8029C79.0141 92.9294 80.0507 92.6524 80.8783 92.0304L122.559 60.7027C123.468 60.0196 124.624 59.7555 125.74 59.9765L160.997 66.9628C161.82 67.1258 162.673 67.0262 163.435 66.6781L202.087 49.0392C203.48 48.4035 205.114 48.6188 206.295 49.5936L242.012 79.0832C243.308 80.1532 245.135 80.299 246.584 79.4481L285.507 56.5955" stroke="#E96D5C" strokeOpacity="0.8" strokeDasharray="2 2"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_1_98" x1="142.124" y1="0.42308" x2="142.308" y2="122.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#37B37F"/>
          <stop offset="1" stopColor="#37B37F" stopOpacity="0"/>
        </linearGradient>
        <clipPath id="clip0_1_98">
          <rect width="283.667" height="107" fill="white" transform="translate(0.84079 0.5)"/>
        </clipPath>
      </defs>
    </svg>
  </div>
  
  {/* X-axis labels */}
  <div className="flex justify-center gap-6 text-xs text-[#77777E] ml-5 mt-0 mb-2">
    <span>09</span>
    <span>10</span>
    <span>11</span>
    <span>12</span>
    <span>13</span>
    <span>14</span>
    <span>15</span>
  </div>
</div>
            
            {/* Legend */}
            <div className="flex items-center p-4 space-x-6">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#37B37F] mr-2"></div>
                <span className="text-xs text-[#77777E]">This Month</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#E96D5C] mr-2"></div>
                <span className="text-xs text-[#77777E]">Last Month</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Total Quantity Sold Card */}
        <div className="w-1/2 pl-2">
          <div className="bg-white rounded-lg overflow-hidden border border-[#ebebeb] h-full flex flex-col">
            {/* Card Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#ebebeb]">
              <h3 className="text-sm font-medium text-[#77777E]">Total Quantity Sold</h3>
              <button className="text-[#77777E]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 16V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="8" r="1" fill="currentColor"/>
                </svg>
              </button>
            </div>
            
            {/* Price and Percentage */}
            <div className="px-4 py-2">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-[#031B15]">125.49</h2>
                <div className="flex flex-col items-end">
                  <div className="flex items-center text-[#37B37F] text-sm font-medium">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>2.4%</span>
                  </div>
                  <span className="text-xs text-[#77777E]">vs 119.69 last month</span>
                </div>
              </div>
            </div>
            
            {/* Chart with Y axis labels */}
            {/* Chart with Y axis labels */}
<div className="relative flex-grow p-2 pb-8 border-b border-[#ebebeb]">
  {/* Y axis labels */}
  <div className="absolute left-4 top-4 bottom-10 flex flex-col justify-between text-xs text-[#77777E]">
    <span>6.0</span>
    <span>4.5</span>
    <span>3.0</span>
    <span>1.5</span>
  </div>
  
  {/* Chart */}
  <div className="ml-8 h-full">
    <svg width="100%" height="170" viewBox="0 0 285 108" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <g clipPath="url(#clip0_1_98)">
        <path d="M1.50742 38H284.507" stroke="#EDEDED"/>
        <path d="M1.50742 73H284.507" stroke="#EDEDED"/>
        <path d="M1.50742 105L27.4119 81.6231C28.2045 80.9078 29.2502 80.5391 30.3162 80.599L60.7196 82.3081C61.7446 82.3657 62.7524 82.0271 63.5346 81.3622L90.9951 58.0222C92.4454 56.7895 94.5636 56.7496 96.0593 57.9267L123.555 79.5653C125.459 81.0639 128.248 80.5387 129.476 78.4502L155.168 34.776C156.645 32.2652 160.225 32.1248 161.894 34.5121L188.548 72.633C189.776 74.3891 192.17 74.8657 193.977 73.7139L220.771 56.6335C221.514 56.1599 222.392 55.9449 223.27 56.0217L252.177 58.5529C253.523 58.6708 254.839 58.1005 255.673 57.0368L285.507 19" stroke="#37B37F"/>
        <path d="M26.9873 81.6537L1.38854 105.265C0.719258 105.882 1.15603 107 2.06653 107H281.507C283.717 107 285.507 105.209 285.507 103V19L255.622 57.0397C254.788 58.1018 253.474 58.671 252.128 58.5534L223.165 56.0214C222.288 55.9448 221.411 56.1592 220.669 56.6316L193.819 73.7194C192.013 74.8686 189.623 74.3927 188.395 72.6394L161.685 34.5011C160.016 32.1171 156.44 32.2575 154.963 34.7651L129.218 78.4578C127.989 80.5434 125.204 81.068 123.3 79.5725L95.7441 57.9214C94.2493 56.7469 92.1343 56.7868 90.6848 58.0168L63.1705 81.3646C62.3887 82.028 61.382 82.3658 60.3583 82.3084L29.9234 80.6003C28.8425 80.5396 27.7831 80.9197 26.9873 81.6537Z" fill="url(#paint0_linear_1_98)" fillOpacity="0.15"/>
        <path d="M1.50742 83.3933L77.9866 92.8029C79.0141 92.9294 80.0507 92.6524 80.8783 92.0304L122.559 60.7027C123.468 60.0196 124.624 59.7555 125.74 59.9765L160.997 66.9628C161.82 67.1258 162.673 67.0262 163.435 66.6781L202.087 49.0392C203.48 48.4035 205.114 48.6188 206.295 49.5936L242.012 79.0832C243.308 80.1532 245.135 80.299 246.584 79.4481L285.507 56.5955" stroke="#E96D5C" strokeOpacity="0.8" strokeDasharray="2 2"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear_1_98" x1="142.124" y1="0.42308" x2="142.308" y2="122.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#37B37F"/>
          <stop offset="1" stopColor="#37B37F" stopOpacity="0"/>
        </linearGradient>
        <clipPath id="clip0_1_98">
          <rect width="283.667" height="107" fill="white" transform="translate(0.84079 0.5)"/>
        </clipPath>
      </defs>
    </svg>
  </div>
  
  {/* X-axis labels */}
  <div className="flex justify-center gap-6 text-xs text-[#77777E] ml-5 mt-0 mb-2">
    <span>09</span>
    <span>10</span>
    <span>11</span>
    <span>12</span>
    <span>13</span>
    <span>14</span>
    <span>15</span>
  </div>
</div>
            
            {/* Legend */}
            <div className="flex items-center p-4 space-x-6">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#37B37F] mr-2"></div>
                <span className="text-xs text-[#77777E]">This Month</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#E96D5C] mr-2"></div>
                <span className="text-xs text-[#77777E]">Last Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top Cities Card */}
      <div className="w-1/3 pl-4">
        <div className="bg-white rounded-lg overflow-hidden border border-[#ebebeb] h-full flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-[#ebebeb]">
            <h3 className="text-sm font-medium text-[#77777E]">Top Cities</h3>
            <button className="text-[#77777E]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 16V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="8" r="1" fill="currentColor"/>
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col items-center justify-center p-4 flex-grow">
            {/* Half-Circle SVG Chart */}
            <div className="relative flex items-center justify-center">
              <svg width="195" height="104" viewBox="0 0 195 104" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M194.45 97.1974C194.45 71.5061 184.244 46.867 166.077 28.7005C147.911 10.534 123.272 0.328127 97.5804 0.328125C71.889 0.328123 47.2499 10.534 29.0834 28.7005C10.9169 46.867 0.711063 71.5061 0.71106 97.1974H20.0849C20.0849 76.6443 28.2496 56.9331 42.7828 42.3999C57.316 27.8667 77.0273 19.702 97.5804 19.702C118.133 19.702 137.845 27.8667 152.378 42.3999C166.911 56.9331 175.076 76.6443 175.076 97.1974H194.45Z" fill="#D9D9D9"/>
<path d="M65.594 5.76147C46.6448 12.3903 30.2232 24.7427 18.5997 41.1107C6.97631 57.4786 0.725315 77.0535 0.711084 97.1287L20.0849 97.1425C20.0963 81.0823 25.0971 65.4224 34.3959 52.328C43.6946 39.2337 56.8319 29.3517 71.9913 24.0487L65.594 5.76147Z" fill="#6C4FED"/>
<path d="M138.764 9.51882C115.511 -1.40386 88.8701 -2.64164 64.7037 6.07779L71.2791 24.3017C90.6122 17.3262 111.925 18.3164 130.528 27.0545L138.764 9.51882Z" fill="#EA6153"/>
<path d="M168.16 30.8481C159.833 21.991 149.914 14.7802 138.921 9.5924L130.653 27.1134C139.448 31.2637 147.383 37.0323 154.044 44.1179L168.16 30.8481Z" fill="#F7C245"/>
<path d="M85.2992 48V39.745H82.0622V38.835H89.6022V39.745H86.3782V48H85.2992ZM92.2327 48.117C91.6087 48.117 91.0627 47.9827 90.5947 47.714C90.1354 47.4367 89.78 47.0467 89.5287 46.544C89.2774 46.0327 89.1517 45.4303 89.1517 44.737C89.1517 44.035 89.2774 43.4327 89.5287 42.93C89.78 42.4273 90.1354 42.0417 90.5947 41.773C91.0627 41.4957 91.6087 41.357 92.2327 41.357C92.8654 41.357 93.4114 41.4957 93.8707 41.773C94.3387 42.0417 94.6984 42.4273 94.9497 42.93C95.2097 43.4327 95.3397 44.035 95.3397 44.737C95.3397 45.4303 95.2097 46.0327 94.9497 46.544C94.6984 47.0467 94.3387 47.4367 93.8707 47.714C93.4114 47.9827 92.8654 48.117 92.2327 48.117ZM92.2327 47.259C92.8567 47.259 93.3507 47.0467 93.7147 46.622C94.0787 46.1887 94.2607 45.5603 94.2607 44.737C94.2607 43.905 94.0744 43.2767 93.7017 42.852C93.3377 42.4187 92.848 42.202 92.2327 42.202C91.6174 42.202 91.1277 42.4187 90.7637 42.852C90.3997 43.2767 90.2177 43.905 90.2177 44.737C90.2177 45.5603 90.3997 46.1887 90.7637 46.622C91.1277 47.0467 91.6174 47.259 92.2327 47.259ZM98.972 48.117C98.3306 48.117 97.841 47.935 97.503 47.571C97.165 47.1983 96.996 46.6393 96.996 45.894V42.293H95.722V41.474H96.996V39.693L98.049 39.394V41.474H99.921V42.293H98.049V45.777C98.049 46.297 98.1356 46.6697 98.309 46.895C98.491 47.1117 98.7596 47.22 99.115 47.22C99.2796 47.22 99.427 47.207 99.557 47.181C99.687 47.1463 99.804 47.1073 99.908 47.064V47.948C99.7866 48 99.6393 48.039 99.466 48.065C99.3013 48.0997 99.1366 48.117 98.972 48.117ZM103.426 48.117C102.845 48.117 102.338 47.9827 101.905 47.714C101.472 47.4367 101.134 47.0467 100.891 46.544C100.657 46.0413 100.54 45.439 100.54 44.737C100.54 44.0263 100.657 43.4197 100.891 42.917C101.134 42.4143 101.472 42.0287 101.905 41.76C102.338 41.4913 102.845 41.357 103.426 41.357C104.015 41.357 104.522 41.5087 104.947 41.812C105.38 42.1067 105.666 42.5097 105.805 43.021H105.649L105.792 41.474H106.806C106.78 41.7253 106.754 41.981 106.728 42.241C106.711 42.4923 106.702 42.7393 106.702 42.982V48H105.649V46.466H105.792C105.653 46.9773 105.367 47.3803 104.934 47.675C104.501 47.9697 103.998 48.117 103.426 48.117ZM103.634 47.259C104.258 47.259 104.752 47.0467 105.116 46.622C105.48 46.1887 105.662 45.5603 105.662 44.737C105.662 43.905 105.48 43.2767 105.116 42.852C104.752 42.4187 104.258 42.202 103.634 42.202C103.019 42.202 102.525 42.4187 102.152 42.852C101.788 43.2767 101.606 43.905 101.606 44.737C101.606 45.5603 101.788 46.1887 102.152 46.622C102.525 47.0467 103.019 47.259 103.634 47.259ZM108.478 48V38.432H109.531V48H108.478Z" fill="#7D7D7E"/>
<path d="M75.1744 72L72.4924 67.968C72.3364 67.716 72.1684 67.512 71.9884 67.356C71.8204 67.2 71.6284 67.092 71.4124 67.032C71.2084 66.96 70.9624 66.924 70.6744 66.924H68.1184V65.34H71.6464C72.4984 65.34 73.1404 65.166 73.5724 64.818C74.0044 64.458 74.2624 63.948 74.3464 63.288L74.6524 63.468H68.1184V62.136H74.6524L74.3104 62.37C74.2144 61.806 73.9564 61.38 73.5364 61.092C73.1164 60.792 72.5164 60.642 71.7364 60.642H68.1184V59.31H78.1804V60.642H74.9584L75.2464 60.39C75.6304 60.606 75.9304 60.894 76.1464 61.254C76.3624 61.602 76.4944 62.01 76.5424 62.478L76.1284 62.136H78.1804V63.468H76.1824L76.5784 63.054C76.5904 63.822 76.4224 64.488 76.0744 65.052C75.7264 65.616 75.2284 66.054 74.5804 66.366C73.9444 66.666 73.1764 66.816 72.2764 66.816V66.636H72.7804C73.3204 66.636 73.7824 66.744 74.1664 66.96C74.5624 67.164 74.9344 67.53 75.2824 68.058L77.9464 72H75.1744ZM84.1233 72.18C82.5273 72.18 81.2913 71.628 80.4153 70.524C79.5513 69.42 79.1193 67.872 79.1193 65.88C79.1193 64.44 79.3413 63.222 79.7853 62.226C80.2293 61.218 80.8593 60.45 81.6753 59.922C82.5033 59.394 83.4933 59.13 84.6453 59.13C85.3293 59.13 86.0073 59.256 86.6793 59.508C87.3513 59.748 87.9273 60.096 88.4073 60.552L87.6333 62.28C87.1893 61.872 86.7093 61.572 86.1933 61.38C85.6773 61.176 85.1553 61.074 84.6273 61.074C83.5473 61.074 82.7253 61.44 82.1613 62.172C81.5973 62.904 81.3153 63.996 81.3153 65.448V66.798H81.0993C81.1953 66.186 81.3993 65.664 81.7113 65.232C82.0233 64.788 82.4253 64.452 82.9173 64.224C83.4093 63.984 83.9553 63.864 84.5553 63.864C85.2993 63.864 85.9593 64.038 86.5353 64.386C87.1113 64.734 87.5613 65.214 87.8853 65.826C88.2213 66.438 88.3893 67.14 88.3893 67.932C88.3893 68.748 88.2033 69.48 87.8313 70.128C87.4713 70.764 86.9733 71.268 86.3373 71.64C85.7013 72 84.9633 72.18 84.1233 72.18ZM83.9973 70.344C84.4413 70.344 84.8313 70.248 85.1673 70.056C85.5033 69.864 85.7613 69.594 85.9413 69.246C86.1333 68.886 86.2293 68.478 86.2293 68.022C86.2293 67.554 86.1333 67.146 85.9413 66.798C85.7613 66.45 85.5033 66.18 85.1673 65.988C84.8313 65.784 84.4413 65.682 83.9973 65.682C83.5533 65.682 83.1633 65.784 82.8273 65.988C82.4913 66.18 82.2273 66.45 82.0353 66.798C81.8433 67.146 81.7473 67.554 81.7473 68.022C81.7473 68.478 81.8433 68.886 82.0353 69.246C82.2273 69.594 82.4913 69.864 82.8273 70.056C83.1633 70.248 83.5533 70.344 83.9973 70.344ZM94.2063 72.18C92.7183 72.18 91.5543 71.862 90.7143 71.226C89.8863 70.59 89.4723 69.708 89.4723 68.58C89.4723 67.692 89.7423 66.954 90.2823 66.366C90.8223 65.778 91.5243 65.43 92.3883 65.322V65.7C91.6083 65.532 90.9783 65.166 90.4983 64.602C90.0303 64.038 89.7963 63.354 89.7963 62.55C89.7963 61.482 90.1863 60.648 90.9663 60.048C91.7583 59.436 92.8383 59.13 94.2063 59.13C95.5863 59.13 96.6663 59.436 97.4463 60.048C98.2383 60.648 98.6343 61.482 98.6343 62.55C98.6343 63.354 98.4063 64.044 97.9503 64.62C97.5063 65.196 96.9003 65.55 96.1323 65.682V65.322C96.9843 65.442 97.6683 65.796 98.1843 66.384C98.7003 66.96 98.9583 67.692 98.9583 68.58C98.9583 69.708 98.5383 70.59 97.6983 71.226C96.8703 71.862 95.7063 72.18 94.2063 72.18ZM94.2063 70.38C95.0823 70.38 95.7363 70.218 96.1683 69.894C96.6003 69.558 96.8163 69.066 96.8163 68.418C96.8163 67.77 96.6003 67.284 96.1683 66.96C95.7363 66.636 95.0823 66.474 94.2063 66.474C93.3423 66.474 92.6883 66.636 92.2443 66.96C91.8123 67.284 91.5963 67.77 91.5963 68.418C91.5963 69.066 91.8123 69.558 92.2443 69.894C92.6883 70.218 93.3423 70.38 94.2063 70.38ZM94.2063 64.674C94.9503 64.674 95.5143 64.506 95.8983 64.17C96.2943 63.834 96.4923 63.372 96.4923 62.784C96.4923 62.208 96.2943 61.758 95.8983 61.434C95.5143 61.098 94.9503 60.93 94.2063 60.93C93.4743 60.93 92.9103 61.098 92.5143 61.434C92.1303 61.758 91.9383 62.208 91.9383 62.784C91.9383 63.372 92.1303 63.834 92.5143 64.17C92.9103 64.506 93.4743 64.674 94.2063 64.674ZM100.311 72V69.498H102.831V72H100.311ZM104.948 72V70.29L109.16 65.898C109.688 65.346 110.078 64.836 110.33 64.368C110.582 63.9 110.708 63.42 110.708 62.928C110.708 62.316 110.516 61.854 110.132 61.542C109.748 61.23 109.19 61.074 108.458 61.074C107.87 61.074 107.306 61.182 106.766 61.398C106.226 61.602 105.698 61.926 105.182 62.37L104.426 60.642C104.942 60.186 105.578 59.82 106.334 59.544C107.102 59.268 107.906 59.13 108.746 59.13C110.114 59.13 111.164 59.436 111.896 60.048C112.628 60.66 112.994 61.536 112.994 62.676C112.994 63.468 112.808 64.224 112.436 64.944C112.064 65.652 111.488 66.396 110.708 67.176L107.198 70.686V70.074H113.498V72H104.948ZM115.481 72V59.31H117.803V70.038H123.779V72H115.481Z" fill="black"/>
<path d="M74.9933 85.8155L78.9308 81.878C78.9715 81.8373 79.0197 81.805 79.0728 81.783C79.1259 81.761 79.1829 81.7497 79.2404 81.7497C79.2979 81.7497 79.3548 81.761 79.4079 81.783C79.461 81.805 79.5093 81.8373 79.5499 81.878L83.4874 85.8155C83.5695 85.8976 83.6156 86.0089 83.6156 86.125C83.6156 86.2411 83.5695 86.3524 83.4874 86.4345C83.4053 86.5166 83.294 86.5627 83.1779 86.5627C83.0618 86.5627 82.9504 86.5166 82.8683 86.4345L79.6779 83.2435L79.6779 91.8125C79.6779 91.9285 79.6318 92.0398 79.5497 92.1219C79.4677 92.2039 79.3564 92.25 79.2404 92.25C79.1243 92.25 79.013 92.2039 78.931 92.1219C78.849 92.0398 78.8029 91.9285 78.8029 91.8125L78.8029 83.2435L75.6124 86.4345C75.5303 86.5166 75.419 86.5627 75.3029 86.5627C75.1868 86.5627 75.0754 86.5166 74.9933 86.4345C74.9112 86.3524 74.8651 86.2411 74.8651 86.125C74.8651 86.0089 74.9112 85.8976 74.9933 85.8155Z" fill="#1D874F"/>
<path d="M90.3454 92V91.103L93.5434 87.749C93.9594 87.3243 94.267 86.917 94.4664 86.527C94.6744 86.137 94.7784 85.734 94.7784 85.318C94.7784 84.8067 94.618 84.421 94.2974 84.161C93.9854 83.8923 93.526 83.758 92.9194 83.758C92.4514 83.758 92.0094 83.8447 91.5934 84.018C91.186 84.1827 90.796 84.4383 90.4234 84.785L89.9944 83.862C90.3497 83.5153 90.796 83.238 91.3334 83.03C91.8794 82.822 92.4514 82.718 93.0494 82.718C93.9854 82.718 94.709 82.9347 95.2204 83.368C95.7317 83.7927 95.9874 84.4037 95.9874 85.201C95.9874 85.7817 95.8444 86.3363 95.5584 86.865C95.281 87.385 94.8694 87.9223 94.3234 88.477L91.5284 91.311V90.973H96.3644V92H90.3454ZM97.5683 92V90.557H99.0113V92H97.5683ZM100.654 92V91.103L103.852 87.749C104.268 87.3243 104.576 86.917 104.775 86.527C104.983 86.137 105.087 85.734 105.087 85.318C105.087 84.8067 104.927 84.421 104.606 84.161C104.294 83.8923 103.835 83.758 103.228 83.758C102.76 83.758 102.318 83.8447 101.902 84.018C101.495 84.1827 101.105 84.4383 100.732 84.785L100.303 83.862C100.659 83.5153 101.105 83.238 101.642 83.03C102.188 82.822 102.76 82.718 103.358 82.718C104.294 82.718 105.018 82.9347 105.529 83.368C106.041 83.7927 106.296 84.4037 106.296 85.201C106.296 85.7817 106.153 86.3363 105.867 86.865C105.59 87.385 105.178 87.9223 104.632 88.477L101.837 91.311V90.973H106.673V92H100.654ZM110.997 92H109.957L115.391 82.835H116.444L110.997 92ZM109.996 88.321C109.286 88.321 108.727 88.074 108.319 87.58C107.921 87.0773 107.721 86.3883 107.721 85.513C107.721 84.629 107.925 83.9443 108.332 83.459C108.74 82.965 109.294 82.718 109.996 82.718C110.716 82.718 111.275 82.9693 111.673 83.472C112.081 83.966 112.284 84.6463 112.284 85.513C112.284 86.3883 112.081 87.0773 111.673 87.58C111.275 88.074 110.716 88.321 109.996 88.321ZM109.996 87.515C110.395 87.515 110.707 87.3503 110.932 87.021C111.158 86.6917 111.27 86.189 111.27 85.513C111.27 84.8457 111.158 84.3517 110.932 84.031C110.707 83.7017 110.395 83.537 109.996 83.537C109.606 83.537 109.299 83.6973 109.073 84.018C108.848 84.3387 108.735 84.837 108.735 85.513C108.735 86.1977 108.848 86.7047 109.073 87.034C109.299 87.3547 109.606 87.515 109.996 87.515ZM116.392 92.117C115.682 92.117 115.123 91.87 114.715 91.376C114.317 90.8733 114.117 90.1843 114.117 89.309C114.117 88.425 114.321 87.7403 114.728 87.255C115.136 86.761 115.69 86.514 116.392 86.514C117.103 86.514 117.662 86.761 118.069 87.255C118.477 87.749 118.68 88.4337 118.68 89.309C118.68 90.1843 118.477 90.8733 118.069 91.376C117.662 91.87 117.103 92.117 116.392 92.117ZM116.392 91.298C116.791 91.298 117.103 91.1377 117.328 90.817C117.554 90.4877 117.666 89.985 117.666 89.309C117.666 88.633 117.554 88.1347 117.328 87.814C117.103 87.4933 116.791 87.333 116.392 87.333C116.002 87.333 115.695 87.4933 115.469 87.814C115.244 88.1347 115.131 88.633 115.131 89.309C115.131 89.985 115.244 90.4877 115.469 90.817C115.695 91.1377 116.002 91.298 116.392 91.298Z" fill="#1D874F"/>
              </svg>
              
              {/* Total overlay in center of half-circle */}
              {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 text-center">
                <div className="text-sm text-[#77777E]">Total</div>
                <div className="text-2xl font-bold">₹68.2L</div>
                <div className="flex items-center justify-center text-xs text-[#37B37F]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="ml-1">2.2%</span>
                </div>
              </div> */}
            </div>
            
            {/* City List */}
            <div className="w-full mt-6 flex flex-col gap-2">
              {/* New Delhi */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#6C4FED] mr-2"></div>
                  <span className="text-sm">New Delhi</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">₹26.5L</span>
                  <span className="text-xs text-[#77777E]">35%</span>
                  <div className="flex items-center ml-2 text-[#37B37F] text-xs">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>1.2%</span>
                  </div>
                </div>
              </div>
              
              {/* Mumbai */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#E96D5C] mr-2"></div>
                  <span className="text-sm">Mumbai</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">₹36.4L</span>
                  <span className="text-xs text-[#77777E]">23%</span>
                  <div className="flex items-center ml-2 text-[#E96D5C] text-xs">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>3.3%</span>
                  </div>
                </div>
              </div>
              
              {/* West Bengal */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#F8CB46] mr-2"></div>
                  <span className="text-sm">West Bengal</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">₹12.2L</span>
                  <span className="text-xs text-[#77777E]">21%</span>
                  <div className="flex items-center ml-2 text-[#E96D5C] text-xs">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>2.3%</span>
                  </div>
                </div>
              </div>
              
              {/* Others */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#DDDDDD] mr-2"></div>
                  <span className="text-sm">Others</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-2">₹24.3L</span>
                  <span className="text-xs text-[#77777E]">9%</span>
                  <div className="flex items-center ml-2 text-[#37B37F] text-xs">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>1.09%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesMetrics;