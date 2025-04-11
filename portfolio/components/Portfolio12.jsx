"use client";

import { Badge, Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Portfolio12() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <header className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Portfolio</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Explore My Creative Works
          </h2>
          <p className="md:text-md">
            A collection of my recent design projects.
          </p>
        </header>
        <div className="columns-1 after:block md:columns-2 md:gap-x-8 lg:columns-3">
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Website Redesign</a>
            </h3>
            <p>
              Revamping an e-commerce site for improved user experience and
              engagement.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Web Design</a>
              </Badge>
              <Badge>
                <a href="#">E-commerce</a>
              </Badge>
              <Badge>
                <a href="#">User Experience</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Mobile App</a>
            </h3>
            <p>
              Designing a mobile application focused on user-friendly navigation
              and aesthetics.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Mobile Design</a>
              </Badge>
              <Badge>
                <a href="#">User Interface</a>
              </Badge>
              <Badge>
                <a href="#">App Development</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Brand Identity</a>
            </h3>
            <p>
              Creating a cohesive brand identity for a startup company from
              scratch.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Branding</a>
              </Badge>
              <Badge>
                <a href="#">Graphic Design</a>
              </Badge>
              <Badge>
                <a href="#">Visual Identity</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Landing Page</a>
            </h3>
            <p>
              Designing an engaging landing page to boost conversions for a
              marketing campaign.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Landing Page</a>
              </Badge>
              <Badge>
                <a href="#">Conversion Rate</a>
              </Badge>
              <Badge>
                <a href="#">User Engagement</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">E-Learning Platform</a>
            </h3>
            <p>
              Developing a user-friendly e-learning platform for enhanced
              educational experiences.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">E-Learning</a>
              </Badge>
              <Badge>
                <a href="#">Educational Design</a>
              </Badge>
              <Badge>
                <a href="#">User-Centric</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
          <article className="mb-8 break-inside-avoid">
            <div className="mb-5 md:mb-6">
              <a href="#">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  className="w-full rounded-image object-cover"
                  alt="Relume placeholder image"
                />
              </a>
            </div>
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              <a href="#">Portfolio Highlights</a>
            </h3>
            <p>
              Discover a selection of my best work and innovative design
              solutions.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 md:mt-4">
              <Badge>
                <a href="#">Design Showcase</a>
              </Badge>
              <Badge>
                <a href="#">Creative Solutions</a>
              </Badge>
              <Badge>
                <a href="#">Innovative Ideas</a>
              </Badge>
            </div>
            <Button
              title="View project"
              variant="link"
              size="link"
              iconRight={<RxChevronRight />}
              className="mt-5 md:mt-6"
            >
              <a href="#">View project</a>
            </Button>
          </article>
        </div>
        <footer className="mt-8 flex justify-center md:mt-18 lg:mt-20">
          <Button title="View all" variant="secondary" size="primary">
            View all
          </Button>
        </footer>
      </div>
    </section>
  );
}
