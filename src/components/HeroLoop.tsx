"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { hero } from "@/lib/screens";

export function HeroLoop({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduceMotion(media.matches);
      const video = videoRef.current;
      if (!video) return;
      if (media.matches) {
        video.pause();
      } else {
        void video.play();
      }
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return (
    <figure className={cn("mx-auto w-full max-w-[560px] lg:max-w-none", className)}>
      {reduceMotion ? (
        <Image
          src={hero.poster}
          alt="Flux on iPhone: Welcome to Flux."
          width={1080}
          height={1080}
          className="h-auto w-full"
          priority
        />
      ) : (
        <video
          ref={videoRef}
          className="aspect-square h-auto w-full bg-transparent"
          width={1080}
          height={1080}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={hero.poster}
          aria-label="Flux app on iPhone"
        >
          <source src={hero.webm} type="video/webm" />
          <source src={hero.mov} type='video/mp4; codecs="hvc1"' />
        </video>
      )}
    </figure>
  );
}
