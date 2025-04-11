"use client";

import { Badge } from "@relume_io/relume-ui";
import React, { useState } from "react";

const useHover = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const getLinkHoverHandler = () => () => {
    setHoveredIndex(index);
  };
  const getOrderNumberClassNames = (index) => {
    return clsx(
      "text-xl font-bold transition-colors duration-300 md:text-2xl",
      {
        "lg:text-black/20": hoveredIndex !== index && hoveredIndex !== null,
        "lg:text-black": hoveredIndex === index || hoveredIndex === null,
      },
    );
  };
  const getHeadingClassNames = (index) => {
    return clsx(
      "text-2xl font-bold transition-colors duration-300 md:text-3xl md:leading-[1.3] lg:text-4xl",
      {
        "lg:text-black/20": hoveredIndex !== index && hoveredIndex !== null,
        "lg:text-black": hoveredIndex === index || hoveredIndex === null,
      },
    );
  };
  const getImageOverClassNames = () => {
    return clsx(
      "sticky top-8 h-full max-h-[60vh] overflow-hidden",
      index === 0 ? "z-0" : "-z-10",
      hoveredIndex === index || hoveredIndex === null
        ? "opacity-100"
        : "opacity-0",
    );
  };
  return {
    handleMouseLeave,
    getLinkHoverHandler,
    getOrderNumberClassNames,
    getHeadingClassNames,
    getImageOverClassNames,
  };
};

export function Portfolio22() {
  const hoverState = useHover();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="lg:grid-auto-cols-fr relative block lg:grid lg:grid-cols-2 lg:items-start">
          <div
            className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:pl-10"
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div>
              <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                <div className={hoverState.getImageOverClassNames(0)}>
                  <img
                    className="size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                    alt="Relume placeholder image 1"
                  />
                </div>
              </div>
              <a
                href="#"
                className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-border-primary py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                onMouseEnter={hoverState.getLinkHoverHandler(0)}
              >
                <div className={hoverState.getOrderNumberClassNames(0)}>01</div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(0)}>
                    Design Revamp
                  </h3>
                  <Badge>UI</Badge>
                </div>
              </a>
            </div>
            <div>
              <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                <div className={hoverState.getImageOverClassNames(1)}>
                  <img
                    className="size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                    alt="Relume placeholder image 2"
                  />
                </div>
              </div>
              <a
                href="#"
                className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-border-primary py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                onMouseEnter={hoverState.getLinkHoverHandler(1)}
              >
                <div className={hoverState.getOrderNumberClassNames(1)}>02</div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(1)}>
                    User Journey
                  </h3>
                  <Badge>UX</Badge>
                </div>
              </a>
            </div>
            <div>
              <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                <div className={hoverState.getImageOverClassNames(2)}>
                  <img
                    className="size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                    alt="Relume placeholder image 3"
                  />
                </div>
              </div>
              <a
                href="#"
                className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-border-primary py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                onMouseEnter={hoverState.getLinkHoverHandler(2)}
              >
                <div className={hoverState.getOrderNumberClassNames(2)}>03</div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(2)}>
                    Brand Identity
                  </h3>
                  <Badge>Branding</Badge>
                </div>
              </a>
            </div>
            <div>
              <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                <div className={hoverState.getImageOverClassNames(3)}>
                  <img
                    className="size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                    alt="Relume placeholder image 4"
                  />
                </div>
              </div>
              <a
                href="#"
                className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-border-primary py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                onMouseEnter={hoverState.getLinkHoverHandler(3)}
              >
                <div className={hoverState.getOrderNumberClassNames(3)}>04</div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(3)}>
                    E-commerce Site
                  </h3>
                  <Badge>Web</Badge>
                </div>
              </a>
            </div>
            <div>
              <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                <div className={hoverState.getImageOverClassNames(4)}>
                  <img
                    className="size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-5.svg"
                    alt="Relume placeholder image 5"
                  />
                </div>
              </div>
              <a
                href="#"
                className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-border-primary py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                onMouseEnter={hoverState.getLinkHoverHandler(4)}
              >
                <div className={hoverState.getOrderNumberClassNames(4)}>05</div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(4)}>
                    Mobile App
                  </h3>
                  <Badge>App</Badge>
                </div>
              </a>
            </div>
            <div>
              <div className="absolute top-0 right-0 left-0 hidden h-full w-1/2 pr-10 lg:block">
                <div className={hoverState.getImageOverClassNames(5)}>
                  <img
                    className="size-full rounded-image object-cover"
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-6.svg"
                    alt="Relume placeholder image 6"
                  />
                </div>
              </div>
              <a
                href="#"
                className="relative z-10 flex flex-col flex-wrap items-start justify-start gap-4 border-b border-border-primary py-5 no-underline transition-all duration-300 sm:flex-row sm:items-center md:gap-8 md:py-6"
                onMouseEnter={hoverState.getLinkHoverHandler(5)}
              >
                <div className={hoverState.getOrderNumberClassNames(5)}>06</div>
                <div className="flex flex-wrap items-center gap-4">
                  <h3 className={hoverState.getHeadingClassNames(5)}>
                    Interactive Prototype
                  </h3>
                  <Badge>Prototype</Badge>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
