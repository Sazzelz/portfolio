"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@relume_io/relume-ui";
import React from "react";
import {
  BiLinkAlt,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function BlogPostHeader3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid gap-x-20 gap-y-12 md:grid-cols-[.75fr_1fr]">
          <div className="mx-auto flex size-full max-w-lg flex-col items-start justify-start">
            <Breadcrumb className="mb-6 flex w-full items-center md:mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">About</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="mb-8 text-5xl font-bold md:mb-10 md:text-7xl lg:mb-12 lg:text-8xl">
              Passionate UX/UI Designer
            </h1>
            <div className="flex size-full flex-col items-start justify-start">
              <div className="rb-4 mb-6 flex items-center md:mb-8">
                <div>
                  <h6 className="font-semibold">
                    <span className="font-normal">
                      Sasmitha blends creativity with functionality to create
                      user-centric designs that elevate digital experiences.
                    </span>
                  </h6>
                </div>
              </div>
              <div>
                <p className="text-base font-semibold">Share this Profil</p>
                <div className="rt-4 mt-3 grid grid-flow-col grid-cols-[max-content] items-start gap-2 md:mt-4">
                  <a
                    href="#"
                    className="rounded-[1.25rem] bg-background-secondary p-1"
                  >
                    <BiLinkAlt className="size-6" />
                  </a>
                  <a
                    href="#"
                    className="rounded-[1.25rem] bg-background-secondary p-1"
                  >
                    <BiLogoLinkedinSquare className="size-6" />
                  </a>
                  <a
                    href="#"
                    className="rounded-[1.25rem] bg-background-secondary p-1"
                  >
                    <FaXTwitter className="size-6 p-0.5" />
                  </a>
                  <a
                    href="#"
                    className="rounded-[1.25rem] bg-background-secondary p-1"
                  >
                    <BiLogoFacebookCircle className="size-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full overflow-hidden">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="aspect-[3/2] size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
