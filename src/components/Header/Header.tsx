import { FC } from 'react';
import { HeaderWrapper } from './header.styled.ts';

interface IInfoBlock {
  count: number;
}

const Header: FC<IInfoBlock> = ({ count }) => {
  return <HeaderWrapper>Всего найдено репозиториев: {count}</HeaderWrapper>;
};

export default Header;
