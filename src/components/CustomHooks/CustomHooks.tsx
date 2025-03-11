
import React, { useEffect, useState } from "react";

function useLoading(initialLoading: boolean = false) {
  const [isLoading, setIsLoading] = useState(initialLoading);
  
  return {  isLoading, setIsLoading };
}
type UserProps = {
  name: string;
}

const UserComponent: React.FC<UserProps> = ({name}) => {
  const { isLoading, setIsLoading } = useLoading(false);

  useEffect(() => {
    if(isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }
  , [isLoading, setIsLoading]);

  if(isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Hello, {name}!</p>
      <button onClick={() => setIsLoading(true)}>Simulate Loading</button>
    </div>
  );
};

export const ParentComponent = () => {
  return <UserComponent name='Teffcode' />;
};
