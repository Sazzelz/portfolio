"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { Fragment, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["end end", "end center"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(scrollYProgress, [0.85, 1], ["#ccc", "#000"]),
  };
  return (
    <motion.div
      ref={circleRef}
      style={backgroundColor}
      className="z-20 mt-7 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white] md:mt-8"
    />
  );
};

export function Timeline9() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="relative z-10 w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Journey</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Sasmitha's Professional Journey in UX/UI
              </h2>
              <p className="md:text-md">
                Sasmitha's career in UX/UI has been marked by a series of
                significant milestones. Her passion for design and user
                experience drives her to create impactful solutions.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Learn More" variant="secondary">
                  Learn More
                </Button>
                <Button
                  title="View"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="relative grid grid-cols-1 justify-items-center gap-12 md:gap-20">
            <div className="absolute flex h-full w-8 flex-col items-center justify-self-start md:justify-self-auto">
              <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-background-primary to-transparent" />
              <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-neutral-black" />
              <div className="h-full w-[3px] bg-neutral-lighter" />
              <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-background-primary" />
              <div className="absolute top-[-50vh] h-[50vh] w-full bg-background-primary" />
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 mt-4 flex w-full flex-col md:w-auto">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2021
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Career Highlights
                  </h4>
                  <p>
                    Joined XYZ Company as a Junior UX Designer, where she
                    contributed to various projects. Developed skills in user
                    research and prototyping.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Details</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 mt-4 flex w-full flex-col items-start text-left md:w-auto md:items-end md:text-right">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2022
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Key Projects
                  </h4>
                  <p>
                    Promoted to UX/UI Designer at ABC Agency, leading design
                    projects for major clients. Enhanced her skills in visual
                    design and user testing.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Learn More</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      View
                    </Button>
                  </div>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="hidden w-full md:block" />
                <div className="flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="z-20 mt-4 flex w-full flex-col md:w-auto">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2023
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Skills Developed
                  </h4>
                  <p>
                    Currently working as a Senior UX/UI Designer, focusing on
                    innovative design solutions. Passionate about enhancing user
                    experiences through research and creativity.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Contact</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Connect
                    </Button>
                  </div>
                </div>
              </Fragment>
            </div>
            <div className="grid grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="z-20 mt-4 flex w-full flex-col items-start text-left md:w-auto md:items-end md:text-right">
                  <h3 className="mb-5 text-4xl leading-[1.2] font-bold md:mb-6 md:text-5xl lg:text-6xl">
                    2024
                  </h3>
                  <h4 className="mb-3 text-xl font-bold md:mb-4 md:text-2xl">
                    Future Aspirations
                  </h4>
                  <p>
                    Aiming to expand her portfolio with more diverse projects.
                    Excited to collaborate with teams that value user-centric
                    design.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    <Button variant="secondary">Learn More</Button>
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                    >
                      Explore
                    </Button>
                  </div>
                </div>
                <div className="order-first flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="hidden w-full md:block" />
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
