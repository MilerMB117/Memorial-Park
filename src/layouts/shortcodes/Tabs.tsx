"use client";

import React, { useState, useEffect, useRef } from 'react';
import Tab from './Tab'; // Asegúrate de importar el componente Tab

interface TabProps {
  label: string;
  title: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
  autoSwitchInterval?: number;
}

function Tabs({ children, autoSwitchInterval = 5000 }: TabsProps) {
  const [active, setActive] = useState(0);
  const tabItemsRef = useRef<(HTMLLIElement | null)[]>(Array(children.length).fill(null));

  useEffect(() => {
    const currentTab = tabItemsRef.current[active];
    if (currentTab) {
      currentTab.focus();
    }
  }, [active]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % children.length);
    }, autoSwitchInterval);

    return () => clearInterval(intervalId);

  }, [autoSwitchInterval, children.length]);

  const handleKeyDown = (event: React.KeyboardEvent<EventTarget>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setActive(index);
    } else if (event.key === 'ArrowRight') {
      setActive((prevActive) => (prevActive + 1) % children.length);
    } else if (event.key === 'ArrowLeft') {
      setActive((prevActive) => (prevActive - 1 + children.length) % children.length);
    }
  };

  return (
    <div className="tab">
      <ul className="tab-nav" role="tablist">
        {children.map((item: React.ReactElement<TabProps>, index: number) => (
          <li
            key={index}
            className={`tab-nav-item ${index === active ? 'active' : ''}`}
            role="tab"
            tabIndex={index === active ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(ref) => (tabItemsRef.current[index] = ref)}
          >
            {item.props.label}
          </li>
        ))}
      </ul>

      {children.map((data: React.ReactElement<TabProps>, index: number) => (
        <div
          key={index}
          className={`tab-content ${index === active ? 'block' : 'hidden'}`}
        >
          <Tab
            label={data.props.label}
            title={data.props.title}
          >
            {data.props.children}
          </Tab>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
