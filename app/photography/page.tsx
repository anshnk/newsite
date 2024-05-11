"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Page() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const imageData = [
    { url: "/photography/APC_0222-hdr.png", width: 3024, height: 4032 },
    { url: "/photography/APC_0147-hdr.png", width: 3024, height: 4032 },
    { url: "/photography/APC_0108-hdr.png", width: 3024, height: 4032 },
  ];

  const maxWidth = 480;
  const maxHeight = 720;

  return (
      <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold mb-4">
              Welcome to my photography site
          </h1>
          <p className="text-lg text-center mb-8">Here are some of my photos</p>
          <Carousel
              plugins={[plugin.current]}
              className="w-[480px] h-[720px]" // Adjust the max-width as needed
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
          >
              <CarouselContent>
                  {imageData.map(({ url, width, height }, index) => {
                      // Calculate scaled dimensions while maintaining aspect ratio
                      const aspectRatio = width / height;
                      let scaledWidth = maxWidth;
                      let scaledHeight = scaledWidth / aspectRatio;

                      if (scaledHeight > maxHeight) {
                          scaledHeight = maxHeight;
                          scaledWidth = scaledHeight * aspectRatio;
                      }

                      return (
                          <CarouselItem key={index}>
                              <div className="p-1">
                                  <Card>
                                      <CardContent className="flex aspect-square items-center justify-center p-0">
                                          <img
                                              src={url}
                                              alt={`Photo ${index + 1}`}
                                              width={scaledWidth}
                                              height={scaledHeight}
                                              className="object-cover w-full h-full"
                                          />
                                      </CardContent>
                                  </Card>
                              </div>
                          </CarouselItem>
                      );
                  })}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
          </Carousel>
      </div>
  );
}