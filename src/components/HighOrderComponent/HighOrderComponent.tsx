function withLoading<T extends object>(Component: React.ComponentType<T>) {

  return (props: T & { isLoading: boolean }) => {
    const { isLoading, ...rest } = props
    return isLoading ? <div>Loading...</div> : <Component {...rest as T} />;
  }
}

type UserProps = {
  name: string;
}
const UserComponent: React.FC<UserProps> = ({ name }) => {
  return <p>Hello, {name}!</p>
};

const UserWithLoading = withLoading(UserComponent);

export const ParentComponent = () => {
  return (
    <div>
      <UserWithLoading isLoading={true} name="Teffcode" />
      <UserWithLoading isLoading={false} name="Teffcode" />
    </div>
  );
};
