import { useState } from 'react';

type ToggleProps = {
  isToggled?: boolean;
  onToggle: (value: boolean) => void;
};

export const Toggle: React.FC<ToggleProps> = ({
  isToggled = false,
  onToggle,
}) => {
  const [internalToggled, setInternalToggle] = useState(isToggled);

  const toggle = () => {
    const newValue = !internalToggled;
    setInternalToggle(newValue);

    if (onToggle) {
      console.log("onToggle", newValue);
      onToggle(newValue);
    }
  };

  return (
    <div>
      <button onClick={toggle}>Toggle {internalToggled ? "ON 🥳" : "OFF 🤒"}</button>
    </div>
  );
};

export const ParentComponent = () => {
  const [toggleState, setToggleState] = useState(false);

  return (
    <div>
      <p>Toggle State: {toggleState ? "ON" : "OFF"}</p>
      <Toggle isToggled={toggleState} onToggle={setToggleState} />
    </div>
  );
};
