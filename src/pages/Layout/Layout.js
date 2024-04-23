import React from 'react';
import TopBar from '../../components/TopBar/TopBar';

function Layout({ children }) {
  return (
    <div>
      <TopBar />
      <main>{children}</main>
      {/* Add footer or other elements if needed */}
    </div>
  );
}

export default Layout;
