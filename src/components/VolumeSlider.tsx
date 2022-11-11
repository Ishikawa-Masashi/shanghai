import * as React from 'react';

import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from '@chakra-ui/react';
import { setSeVolume } from '../states/settingsState';

type Props = { value: number };

export const VolumeSlider = (props: Props) => {
  const { value } = props;
  const [sliderValue, setSliderValue] = React.useState(value);

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  };

  return (
    <Box pt={6} pb={2}>
      <Slider
        aria-label="slider-ex-6"
        onChange={(val) => {
          setSliderValue(val);

          setSeVolume(val / 100);
        }}
      >
        <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50%
        </SliderMark>
        <SliderMark value={75} {...labelStyles}>
          75%
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign="center"
          bg="blue.500"
          color="white"
          mt="-10"
          ml="-5"
          w="12"
        >
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};
