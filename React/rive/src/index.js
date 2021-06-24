import reactdom from "react-dom";
import { useRive } from "rive-react";
import Rive from "rive-react";

function Example() {
  return <Rive src="new_file.riv" />;
}
reactdom.render(<Example />, document.getElementById("root"));
