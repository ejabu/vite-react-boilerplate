type Props = {
  suffix: string;
};
function Button2(props: Props) {
  const {suffix} = props;
  return (
    <div>
      <div>Hello world {suffix}</div>
    </div>
  );
}

export default Button2;
