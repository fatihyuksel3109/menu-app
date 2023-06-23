"use client"
import { useEffect, useRef } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef, embla] = useEmblaCarousel(options);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (embla) {
      const autoplay = () => {
        embla.scrollNext();
      };
      timerRef.current = setInterval(autoplay, 2000);

      return () => {
        clearInterval(timerRef.current!);
      };
    }
  }, [embla]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  );
};

export default Carousel;
