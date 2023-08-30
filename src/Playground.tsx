import { Card } from "./components/Card";
import { MovieList } from "./components/MovieList";
import { MyButton } from "./components/Mybutton";

export function Playground() {
  return <div>
    <MyButton
      label={"custom label"}
      onClick={() => { alert('click props')}}
      active={true}
    />
    <MyButton
      label={"custom label"}
      onClick={() => { alert('click props')}}
      active={false}
    />
    <Card header={<p className="text-teal-300">header</p>}>
      <p>Hello within the card</p>
      <p>Hello 1</p>
    </Card>
    <MovieList />
  </div>
};
