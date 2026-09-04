"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { hero } from "@/lib/screens";

export function HeroLoop({ className }: Readonly<{ className?: string }>) {
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
    <figure
      className={cn(
        "mx-auto w-full max-w-[28rem] sm:max-w-[32rem] lg:mx-0 lg:max-w-none lg:w-[min(100%,42rem)] lg:translate-x-[150px]",
        className,
      )}
    >
      <div className="relative aspect-square origin-center scale-[1.12] lg:origin-right lg:scale-[1.22]">
        {reduceMotion ? (
          <Image
            src={hero.poster}
            alt="Flux on iPhone: Welcome to Flux."
            width={1080}
            height={1080}
            className="absolute inset-x-0 -top-[1px] h-[calc(100%+10px)] w-full object-fill"
            priority
          />
        ) : (
          <video
            ref={videoRef}
            className="absolute inset-x-0 -top-[1px] h-[calc(100%+10px)] w-full bg-transparent object-fill"
            width={1080}
            height={1080}
            autoPlay
            muted
            playsInline
            preload="auto"
            poster={hero.poster}
            aria-label="Flux app on iPhone"
            onEnded={(event) => {
              const video = event.currentTarget;
              video.pause();
              if (Number.isFinite(video.duration) && video.duration > 0) {
                video.currentTime = video.duration;
              }
            }}
          >
            <source src={hero.webm} type="video/webm" />
            <source src={hero.mov} type='video/mp4; codecs="hvc1"' />
          </video>
        )}
      </div>
    </figure>
  );
}
