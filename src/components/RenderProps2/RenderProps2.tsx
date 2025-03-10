import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

export const RenderProps2 = () => {
  return (
    <div>
      <ParentComponent render={(data: string[]) => <ChildComponent data={data} />} />
    </div>
  );
};
