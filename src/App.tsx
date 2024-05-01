import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div>
      <h1 className="text-red-500 text-lg font-bold">Welcome to Dashboard</h1>
      <Button variant={"destructive"}>Click Me</Button>
    </div>
  );
};

export default App;
