import { useEffect, useState } from 'react';
import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    console.log('Counter - ' + counter);
    return function cleanup() {
      console.log('Unmount');
    };
  });

  useEffect(() => {
    console.log('Mounted');
  }, []);

  return (
    <div>
      <Htag tag="h1">Click counter - {counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((i) => i + 1)}
      >
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
    </div>
  );
}
