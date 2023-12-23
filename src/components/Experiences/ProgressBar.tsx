import React, { FC } from 'react';
import { Progress } from '@nextui-org/react';

interface ProgressBarProps {
  warna?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
}

const colorMap: { [key: number]: any } = {
  1: 'success',
  2: 'warning',
  3: 'default',
  4: 'primary',
  5: 'secondary',
  6: 'danger',
  7: undefined,
};

const ProgressBar: FC<ProgressBarProps> = ({ warna }) => {
  const color = warna ? colorMap[warna] : undefined;
  return <Progress color={color} size='md' value={100} />;
};

export default ProgressBar;
