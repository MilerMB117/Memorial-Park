import React, { ReactNode } from 'react';

interface TabProps {
  label: string;
  title: string;
  children: ReactNode;
}

const Tab = ({ label, title, children }: TabProps) => {
  return (
    <div className="tab-content-panel">
      <h4 className=''>{label}</h4>
      <h5 className='mb-2 pt-2'>{title}</h5>
      {children}
    </div>
  );
};

export default Tab;
