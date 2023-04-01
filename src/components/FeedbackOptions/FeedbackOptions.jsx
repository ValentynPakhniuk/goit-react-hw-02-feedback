import { ContainerButton, Button } from './Button.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handelClick }) => {
  return (
    <ContainerButton>
      {options.map(name => (
        <Button key={name} type="button" onClick={() => handelClick(name)}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Button>
      ))}
    </ContainerButton>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handelClick: PropTypes.func.isRequired,
};
