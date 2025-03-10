import React, { ReactElement, useState } from 'react';

import classes from './CompoundComponents.module.css';

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const tabElements = React.Children.toArray(children).filter(
    (child): child is ReactElement => {
      return React.isValidElement(child);
    }
  );

  return (
    <div className={classes.Tabs}>
      <ul>
        {tabElements.map((child, index) => {
          return (
            <li
              key={index}
              onClick={() => handleTabClick(index)}
              className={index === activeIndex ? classes.TabActive : ''}
            >
              {child.props.label}
            </li>
          );
        })}
      </ul>
      <p className={classes.TabContent}>{tabElements[activeIndex]}</p>
    </div>
  );
};

export default Tabs;
