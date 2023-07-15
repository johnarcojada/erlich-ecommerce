import React from 'react';
import 'components/Tag/_tag.scss';
import BEMHelper from 'react-bem-helper';

interface Props {
  children: React.ReactNode;
}

const className = BEMHelper('tag');
const Tag: React.FC<Props> = ({ children }) => {
  return <span {...className('')}>{children}</span>;
};

export default Tag;
