import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/Button/_button.scss';

export enum Variant {
  Black = 'black',
  White = 'white',
}
export enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface Props {
  variant?: `${Variant}`;
  children?: ReactNode;
  size?: `${Size}`;
  onClick?: () => void;
}

const className = BEMHelper('button');

const Button: React.FC<Props> = ({
  variant = Variant.Black,
  children,
  size = Size.Medium,
  onClick,
}) => {
  return (
    <button type="button" onClick={onClick} {...className('', [variant, size])}>
      {children}
    </button>
  );
};

export default Button;
