import { FC, ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";

interface CarouselProps {
  slides: ReactNode[];
  options?: EmblaOptionsType;
}

export const Carousel: FC<CarouselProps> = ({ slides, options }) => {
  const [emblaRef] = useEmblaCarousel(options);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide">
              {slide}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
