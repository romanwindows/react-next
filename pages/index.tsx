import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(1);

  return (
    <div>
      <Htag tag="h1">Click</Htag>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="small">Small text</P>
      <P size="medium">Medium text</P>
      <P size="large">Large text</P>
      <P>Medium text by default</P>
      <Tag
        color="primary"
        size="medium"
        href="https://translate.google.com/?hl=ru&sl=en&tl=uk&op=translate"
      >
        Google translate hello
      </Tag>
      <Tag>simple Tag</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </div>
  );
}
