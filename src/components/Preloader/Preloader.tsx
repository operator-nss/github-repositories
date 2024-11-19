import { FC } from 'react';
import preloader from '../../assets/spinner.svg';
import { Spinner } from './spinner.styled.ts';

const Preloader: FC = () => {
  return (
    <Spinner>
      <img src={preloader} alt="loader" />
    </Spinner>
  );
};

export default Preloader;
