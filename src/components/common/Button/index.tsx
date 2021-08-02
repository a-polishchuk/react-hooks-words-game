import { useState } from 'react';
import { getStyle } from './styles';

interface Props {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

function Button({ text, disabled = false, onClick }: Props) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [pressed, setPressed] = useState<boolean>(false);
  const style = getStyle(disabled, hovered, pressed);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleMouseDown = () => {
    setPressed(true);
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  return (
    <div
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    >
      {text}
    </div>
  );
}

export default Button;
