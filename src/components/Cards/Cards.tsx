import { FC } from 'react';
import { RepositoryItem } from '../../types/repositoryTypes.ts';
import Card from '../Card/Card.tsx';

interface ICards {
  repositories: RepositoryItem[] | undefined;
}

const Cards: FC<ICards> = ({ repositories }) => {
  console.log('repositories', repositories);
  return (
    <ul>
      {repositories?.map((repository) => (
        <li key={repository.id}>
          <Card repository={repository} />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
