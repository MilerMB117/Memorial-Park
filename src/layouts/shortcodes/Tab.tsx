// En el archivo donde defines Tab
import { ReactNode } from 'react';

interface TabProps {
  name: string;
  children: ReactNode;
}

const Tab = ({ name, children }: TabProps) => {
  return <div className="tab-content-panel">{children}</div>;
};

export default Tab;
