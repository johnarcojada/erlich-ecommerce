import React, { ReactNode } from 'react';
import BEMHelper from 'react-bem-helper';
import 'components/Button/_button.scss';

export enum Variant {
  Black = 'black',
  White = 'white',
  WhiteBordered = 'white-bordered',
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
  rounded?: boolean;
  isPaymentBtn?: boolean;
}

const className = BEMHelper('button');

const Button: React.FC<Props> = ({
  variant = Variant.Black,
  children,
  size = Size.Medium,
  onClick,
  rounded = false,
  isPaymentBtn = false,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      {...className('', [
        variant,
        size,
        rounded ? 'rounded' : '',
        isPaymentBtn ? 'is-payment' : '',
      ])}
    >
      {children}
    </button>
  );
};

export default Button;
