import { Scroll } from "@react-three/drei";

const Overlay = () => {
  const sections = [
    {
      title: "Unveiling the Unseen",
      desc: "Unleash the Power!",
      direction: "start",
    },
    {
      title: "Sleek Curves, Bold Moves",
      desc: "Where Style Meets Precision",
      direction: "end",
    },
    {
      title: "Ignite the adventure",
      desc: "Ride the Revolution.",
      direction: "start",
    },
    {
      title: "Beyond Boundaries",
      desc: "Every Angle, Every Mile.",
      direction: "end",
    },
    {
      title: "Drive Dreams",
      desc: "Where Innovation Fuels the Journey",
      direction: "start",
    },
  ];

  return (
    <Scroll html>
      {sections.map((val, ind) => (
        <div
          key={ind}
          className="relative"
          style={{ width: "100vw", height: "100vh" }}
        >
          <div className="absolute w-full h-full px-8 flex align-items-center">
            <div
              className={`flex flex-column w-full align-items-${val.direction}`}
              style={{ letterSpacing: "-1px" }}
            >
              <p
                className={`font-bold white-space-normal w-8 text-${val.direction}`}
                style={{ fontSize: "8rem", lineHeight: "130px" }}
              >
                {val.title}
              </p>
              <p className="text-5xl font-medium text-100">{val.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </Scroll>
  );
};

export default Overlay;
