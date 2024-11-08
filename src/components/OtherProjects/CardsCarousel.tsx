'use client';

/* eslint-disable @typescript-eslint/comma-dangle */

import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import IdentifyCard from './IdenfityCard';
import VexoCard from './VexoCard';
import OcrCard from './OcrCard';

const CardsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className='relative w-full px-4 z-10'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          <div className='flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] p-2'>
            <IdentifyCard />
          </div>
          <div className='flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] p-2'>
            <VexoCard />
          </div>
          <div className='flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] p-2'>
            <OcrCard />
          </div>
        </div>
      </div>
      <Button
        className='absolute top-1/2 left-2 transform -translate-y-1/2 z-10'
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
        size='icon'
        variant='outline'
      >
        <ChevronLeft className='h-4 w-4' />
        <span className='sr-only'>Previous slide</span>
      </Button>
      <Button
        className='absolute top-1/2 right-2 transform -translate-y-1/2 z-10'
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
        size='icon'
        variant='outline'
      >
        <ChevronRight className='h-4 w-4' />
        <span className='sr-only'>Next slide</span>
      </Button>
    </div>
  );
};

export default CardsCarousel;
