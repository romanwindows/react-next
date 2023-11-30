import { Button, Htag, P } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">TEXT</Htag>
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
    </div>
  );
}
