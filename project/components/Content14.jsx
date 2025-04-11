"use client";

import React, { Fragment } from "react";

export function Content14() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="aspect-video w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
        <div className="mx-auto max-w-lg">
          <div className="mb-8 grid grid-cols-2 gap-6 md:mb-10 md:grid-cols-4 md:gap-8 lg:mb-12">
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-lg md:leading-[1.4]">
                Overview
              </h3>
              <p>Project Title</p>
            </div>
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-lg md:leading-[1.4]">
                Details
              </h3>
              <p>Project Goals</p>
            </div>
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-lg md:leading-[1.4]">
                Process
              </h3>
              <p>Design Steps</p>
            </div>
            <div>
              <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-lg md:leading-[1.4]">
                Outcome
              </h3>
              <p>Final Results</p>
            </div>
          </div>
          <div className="prose">
            <Fragment>
              <p>
                Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus
                id scelerisque est ultricies ultricies. Duis est sit sed leo
                nisl, blandit elit sagittis. Quisque tristique consequat quam
                sed. Nisl at scelerisque amet nulla purus habitasse.
              </p>
              <p>
                Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
                condimentum mi massa. In tincidunt pharetra consectetur sed duis
                facilisis metus. Etiam egestas in nec sed et. Quis lobortis at
                sit dictum eget nibh tortor commodo cursus.
              </p>
              <p>
                Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce
                aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare
                id morbi eget ipsum. Aliquam senectus neque ut id eget
                consectetur dictum. Donec posuere pharetra odio consequat
                scelerisque et, nunc tortor. Nulla adipiscing erat a erat.
                Condimentum lorem posuere gravida enim posuere cursus diam.
              </p>
            </Fragment>
          </div>
        </div>
      </div>
    </section>
  );
}
