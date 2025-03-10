import { ReactNode } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
} 

const Tab:React.FC<TabProps> = ({ label, children }) => {

  return (
    <>
     <em>{label}</em>
     <span>{children}</span>
    </>
  );
};

export default Tab;
