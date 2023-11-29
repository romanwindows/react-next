import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">TEXT</Htag>
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost">Кнопка</Button>
    </div>
  );
}
