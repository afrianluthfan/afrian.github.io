import React, { FC } from 'react';
import { Slider } from '@nextui-org/react';

interface ExpSliderProps {}

const ExpSlider: FC<ExpSliderProps> = () => (
  <Slider
    color='foreground'
    size='sm'
    step={0.167}
    maxValue={6}
    minValue={1}
    showSteps
    hideValue
    marks={[
      {
        value: 1,
        label: '2019',
      },
      {
        value: 2,
        label: '2020',
      },
      {
        value: 3,
        label: '2021',
      },
      {
        value: 4,
        label: '2022',
      },
      {
        value: 5,
        label: '2023',
      },
      {
        value: 6,
        label: '2024',
      },
    ]}
  />
);

export default ExpSlider;
