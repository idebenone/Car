import { Scroll, useScroll } from "@react-three/drei";
import { useState, useRef, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

const Section = (props) => {
  return (
    <section
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="">{props.children}</div>
    </section>
  );
};

const Overlay = () => {
  const scroll = useScroll();
  const tl = useRef();

  const [opacityValues, setOpacityValues] = useState({
    firstSection: 1,
    secondSection: 1,
    lastSection: 1,
    fourthSection: 1,
    fifthSection: 1,
  });

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());

    const newOpacityValues = {
      ...opacityValues,
      firstSection: 1 - scroll.range(0, 0.07),
      secondSection: scroll.curve(0.25, 0.07),
      lastSection: scroll.curve(0.5, 0.07),
      fourthSection: scroll.curve(0.75, 0.07),
      fifthSection: scroll.curve(0.95, 0.1),
    };
    setOpacityValues(newOpacityValues);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
  });

  return (
    <Scroll html>
      <div className="backdrop-contrast-[.85] backdrop-saturate-150">
        <Section opacity={opacityValues.firstSection}>
          <div className="relative h-screen w-screen">
            <div className="absolute w-full h-full px-20 xl:px-40 flex items-center">
              <div className="flex flex-col w-1/2 items-start">
                <p className=" font-bold text-7xl xl:text-9xl leading-[80px] xl:leading-[130px] normal-case text-left tracking-tighter ml-[-6px] xl:ml-[-12px]">
                  Unveiling the Unseen
                </p>
                <hr className="border border-gray-400 w-1/2 mt-6" />
                <p className="text-2xl xl:text-3xl font-medium text-100 tracking-tighter text-gray-600 mt-2">
                  Unleash the Power!
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section opacity={opacityValues.secondSection}>
          <div className="relative h-screen w-screen">
            <div className="absolute w-full h-full px-20 xl:px-40 flex items-center">
              <div className="flex flex-col w-full items-end">
                <p className="font-bold text-7xl xl:text-9xl leading-[90px] xl:leading-[140px] normal-case w-2/3 text-right tracking-tighter">
                  Sleek Curves, Bold Moves
                </p>
                <hr className="border border-gray-400 w-1/4 mt-8" />
                <p className="text-2xl xl:text-3xl font-medium text-100  tracking-tighter text-gray-600 mt-2">
                  Where Style Meets
                  <span className="text-white"> Precision</span>
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section opacity={opacityValues.lastSection}>
          <div className="relative h-screen w-screen">
            <div className="absolute w-full h-full px-20 xl:px-40 flex items-center">
              <div className="flex flex-col w-full items-start">
                <p className="font-bold text-7xl xl:text-9xl leading-[90px] xl:leading-[140px] normal-case w-2/3 text-left tracking-tighter">
                  Ignite the inner adventurer
                </p>
                <hr className="border border-gray-400 w-1/4 mt-8" />
                <p className="text-2xl xl:text-3xl font-medium text-100 tracking-tighter text-gray-600 mt-2">
                  Ride the <span className="text-white">Revolution</span>
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section opacity={opacityValues.fourthSection}>
          <div className="relative h-screen w-screen">
            <div className="absolute w-full h-full px-20 xl:px-40 flex items-center">
              <div className="flex flex-col w-full items-end">
                <p className="font-bold text-7xl xl:text-9xl leading-[90px] xl:leading-[140px] normal-case w-1/2 text-right tracking-tighter">
                  Beyond Boundaries
                </p>
                <hr className="border border-gray-400 w-1/4 mt-8" />
                <p className="text-2xl xl:text-3xl font-medium text-100 tracking-tighter text-gray-700 mt-2">
                  Every Angle, <span className="text-white">Every Mile .</span>
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section opacity={opacityValues.fifthSection}>
          <div className="relative h-screen w-screen">
            <div className="absolute w-full h-full px-20 xl:px-40 flex flex-col justify-center">
              <div className="flex flex-col w-full items-start">
                <p className="font-bold text-7xl xl:text-9xl leading-[90px] xl:leading-[120px] normal-case w-1/2 text-left tracking-tighter">
                  Drive Dreams
                </p>
                <p className="text-2xl xl:text-3xl font-medium text-100 tracking-tighter text-gray-100 mt-2">
                  Where Innovation Fuels the Journey
                </p>
              </div>
              <div className="pt-12 w-1/4">
                <hr className="mb-4 border-gray-800" />
                <a
                  href="https://github.com/idebenone"
                  target="_blank"
                  className="font-bold text-3xl"
                >
                  Vineeth G
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Scroll>
  );
};

export default Overlay;
