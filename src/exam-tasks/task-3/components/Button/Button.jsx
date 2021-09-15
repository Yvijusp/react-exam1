import { StyledButton } from './Button.styled';

const Button = ({ className, text }) => {
  return <StyledButton className={className}>{text}</StyledButton>;
};

export default Button;
