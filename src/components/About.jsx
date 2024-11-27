import { useState } from "react";
import { restaurantList } from "../utils/mockdata";

const About = () => {
  const [show, setshow] = useState(null);
  return (
    <div className="p-10">
      {restaurantList.map((item) => {
        return (
          <div>
            <h1
              onClick={() => {
                if (show === item.info.name) {
                  setshow(item.info.name + 1);
                } else {
                  setshow(item.info.name);
                }
              }}
              className="bg-blue-500 mb-1 p-2 rounded-lg"
            >
              {item.info.name}
            </h1>

            {show == item.info.name ? <h1>Hello</h1> : ""}
          </div>
        );
      })}
    </div>
  );
};

export default About;
