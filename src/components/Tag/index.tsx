import React from 'react';
import 'components/Tag/_tag.scss';
import BEMHelper from 'react-bem-helper';

enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
}

enum Size {
  Small = 'small',
  Regular = 'regular',
}
interface Props {
  variant?: `${Variant}`;
  size?: `${Size}`;
  children: React.ReactNode;
}

const className = BEMHelper('tag');
const Tag: React.FC<Props> = ({
  children,
  variant = Variant.Primary,
  size = Size.Regular,
}) => {
  return <span {...className('', [variant, size])}>{children}</span>;
};

export default Tag;
