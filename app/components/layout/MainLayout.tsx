import React, { ReactNode } from 'react';
import CollapsedSidebar from './CollapsedSidebar';
import ExpandedSidebar from './ExpandedSidebar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex bg-[#fafafa] min-h-screen">
      <CollapsedSidebar />
      <ExpandedSidebar />
      <main className="ml-70 p-6 w-full borde">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;