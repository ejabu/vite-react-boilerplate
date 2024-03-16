type Props = {
  suffix: string;
};
const Button = (props: Props) => {
  // const {suffix} = props;
  return (
    <div>
      <div>Hello world {props.suffix}</div>
    </div>
  );
};

export default Button;
