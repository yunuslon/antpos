import Routing from "./routing";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

function App() {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <Routing />
    </RecoilRoot>
  );
}

export default App;
