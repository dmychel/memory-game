import { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  return setToggle(!toggle);
};

export default Toggle;
