"use client";

import { Badge } from "@relume_io/relume-ui";
import React from "react";

export function PortfolioHeader5() {
  return (
    <section id="relume" className="px-[5%]">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-12 py-16 md:grid-cols-[1.5fr_1fr] md:py-24 lg:gap-x-20 lg:py-28">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Innovative Design Project
            </h1>
            <p className="md:text-md">
              A comprehensive exploration of user experience and interface
              design for a leading tech company.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <Badge>
                <a href="#">UX Design</a>
              </Badge>
              <Badge>
                <a href="#">UI Development</a>
              </Badge>
              <Badge>
                <a href="#">User Research</a>
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                TechCorp
              </h3>
              <p>Sasmitha Jones</p>
            </div>
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                March
              </h3>
              <p>2023</p>
            </div>
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Designer
              </h3>
              <p>Lead Designer</p>
            </div>
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
                Website
              </h3>
              <a href="#" className="underline">
                www.relume.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
