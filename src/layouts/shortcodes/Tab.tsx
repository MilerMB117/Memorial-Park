import React, { ReactNode } from 'react';

interface TabProps {
  label: string;
  title: string;
  children: ReactNode;
}

const Tab = ({ label, title, children }: TabProps) => {
  return (
    <div className="tab-content-panel">
      <h4>{label}</h4>
      <p>{title}</p>
      {children}
    </div>
  );
};

export default Tab;
