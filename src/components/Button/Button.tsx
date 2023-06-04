export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: React.ReactElement;
}
export const Button = (props: Props) => {
  const { children, icon, ...rest } = props;
  // Render
  return (
    <button {...rest}>
      <span>{icon}</span>
      <span>{children}</span>
    </button>
  );
};
