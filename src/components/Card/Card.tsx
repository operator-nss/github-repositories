import { FC } from 'react';
import { RepositoryItem } from '../../types/repositoryTypes.ts';
import { CardContainer, CardDescription, CardLink, CardTitle, StarCount } from './card.styles.ts';

interface ICard {
  repository: RepositoryItem;
}

const Card: FC<ICard> = ({ repository }) => (
  <CardContainer>
    <CardLink href={repository.html_url} target="_blank" rel="noopener noreferrer">
      <CardTitle>{repository.name}</CardTitle>
    </CardLink>
    <CardDescription>{repository.description || 'Описание отсутствует'}</CardDescription>
    <StarCount>{repository.stargazers_count}</StarCount>
  </CardContainer>
);

export default Card;
