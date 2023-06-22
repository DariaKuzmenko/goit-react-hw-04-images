import FadeLoader from 'react-spinners/FadeLoader';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <FadeLoader size={60} color={'#4a58d9'} aria-label="Loading Spinner" />
    </LoaderContainer>
  );
};
