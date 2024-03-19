type Props = {
  suffix: string;
};
const Button = (props: Props) => {
  const { suffix } = props;
  const nice = 4;

  return (
    <div>
      <div>
        Hello {nice} world {suffix}
      </div>
    </div>
  );
};

export default Button;
