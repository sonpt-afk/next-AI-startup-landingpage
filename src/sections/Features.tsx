"use client";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import Image from "next/image";
import productImage from "@/assets/product-image.png";
import {
  ComponentPropsWithoutRef,
  use,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationTransition,
} from "framer-motion";
import { s } from "framer-motion/client";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (
  props: (typeof tabs)[number] &
    ComponentPropsWithoutRef<"div"> & { selected: boolean }
) => {
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const tabRef = useRef<HTMLDivElement>(null);
  const xPercentage = useMotionValue(100);
  const yPercentage = useMotionValue(50);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}% , black, transparent)`;
  useEffect(() => {
    if (!tabRef.current || !props.selected) return;

    const animateGradient = () => {
      const rect = tabRef.current?.getBoundingClientRect();
      if (!rect) return;

      const { height, width } = rect;
      const circumference = 2 * height + 2 * width;
      const times = [
        0,
        width / circumference,
        (width + height) / circumference,
        (2 * width + height) / circumference,
        1,
      ];
      const options: ValueAnimationTransition = {
        times,
        duration: 4,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      };
      animate(xPercentage, [0, 100, 100, 0, 0], options);
      animate(yPercentage, [0, 0, 100, 100, 0], options);
    };

    xPercentage.set(0);
    yPercentage.set(0);
    animateGradient();
  }, [props.selected, xPercentage, yPercentage]);

  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <div
      ref={tabRef}
      onMouseEnter={handleTabHover}
      key={props?.title}
      className="border mt-2.5border-[#8c44ff] flex p-2.5 rounded-xl gap-2.5 h-[68px] items-center lg:flex-1 hover:cursor-pointer"
      onClick={props.onClick}
    >
      {/* {props.selected && (
      <motion.div style={{
        maskImage,
      }} className="absolute inset-0 border border-[#8c44ff] -m-px rounded-xl ">
        
      </motion.div>

      )} */}

      <div className="border rounded border-white/15 p-3">
        <DotLottiePlayer
          src={props?.icon}
          ref={dotLottieRef}
          className="h-5 w-5"
          autoplay
        />
      </div>
      <div className="">{props?.title}</div>
      {props?.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black">
          new
        </div>
      )}
    </div>
  );
};

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index: number) => {
    setSelectedTab(index);

    const animateOptions: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions
    );
    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions
    );
  };

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-5xl font-medium text-center tracking-lighter">
          Elevate your SEO efforts.
        </h2>
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              onClick={() => handleSelectTab(tabIndex)}
              key={tab.title}
              selected={selectedTab === tabIndex}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            className="aspect-video bg-cover border border-white/20"
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage.src})`,
            }}
          ></motion.div>
        </div>
        <Image src={productImage} alt="Product image"></Image>
      </div>
    </section>
  );
};
