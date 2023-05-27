import * as React from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';

import { Stopwatch } from '../util/Timer';

export const Timer = (): [Stopwatch, JSX.Element] => {
  const stopwatchRef = React.useRef(new Stopwatch());
  const [hours, setHours] = React.useState('');
  const [minutes, setMinutes] = React.useState('');
  //   const [seconds, setSeconds] = useState('');
  const [milliseconds, setMilliseconds] = React.useState('');

  React.useEffect(() => {
    const id = setInterval(() => {
      //   setTime((t) => t + 1);
      // setTime(stopwatchRef.current.getTime() / 1000);

      const duration = stopwatchRef.current.getTime();
      // Time calculations for days, hours, minutes and seconds
      //   const hours = Math.floor(distance / (1000 * 60 * 60));
      //   setHours(hours.toString());
      //   const minutes = `0${Math.floor(
      //     (distance % (1000 * 60 * 60)) / (1000 * 60)
      //   )}`.substr(-2);
      //   setMinutes(minutes);
      //   const seconds = `0${Math.floor((distance % (1000 * 60)) / 1000)}`.substr(
      //     -2
      //   );
      //   setSeconds(seconds);
      const hour = Math.floor(duration / 3600000);
      const minute = Math.floor((duration - 3600000 * hour) / 60000);

      const hh = ('00' + hour).slice(-2);
      const mm = ('00' + minute).slice(-2);
      const ms = ('00000' + (duration % 60000)).slice(-5);

      setHours(hh);
      setMinutes(mm);
      setMilliseconds(ms);
    }, 100);
    return () => clearInterval(id);
  }, []);

  return [
    stopwatchRef.current,
    <Flex>
      <Text
        display="flex"
        justifyContent="center"
        // fontSize="5vmin"
        color="white"
        // stroke="black"
        // textShadow="0px 3px 0px #000000"
        // userSelect="none"
        // fontFamily="UD デジタル 教科書体 N-R"
        cursor="pointer"
        // style={{ marginRight: '1rem' }}
      >{`TIME `}</Text>
      <Box>
        <Text
          display="flex"
          justifyContent="center"
          // fontSize="5vmin"
          color="white"
          // stroke="black"
          // textShadow="0px 3px 0px #000000"
          // userSelect="none"
          // fontFamily="UD デジタル 教科書体 N-R"
          cursor="pointer"
          style={{ width: '5vmin' }}
        >{`${minutes}`}</Text>
      </Box>
      <Text
        display="flex"
        justifyContent="center"
        // fontSize="5vmin"
        color="white"
        // stroke="black"
        // textShadow="0px 3px 0px #000000"
        userSelect="none"
        // fontFamily="UD デジタル 教科書体 N-R"
        cursor="pointer"
        style={{ padding: 0 }}
      >{`'`}</Text>
      <Box>
        <Text
          display="flex"
          justifyContent="center"
          // fontSize="5vmin"
          color="white"
          // stroke="black"
          // textShadow="0px 3px 0px #000000"
          userSelect="none"
          // fontFamily="UD デジタル 教科書体 N-R"
          cursor="pointer"
          // style={{ width: '5vmin' }}
        >{`${milliseconds.slice(0, 2)}`}</Text>
      </Box>
      <Text
        display="flex"
        justifyContent="center"
        // fontSize="5vmin"
        color="white"
        // -webkit-text-stroke-width: 2px;
        // -webkit-text-stroke-color: black;
        // stroke="black"
        // textShadow="0px 3px 0px #000000"
        userSelect="none"
        // fontFamily="UD デジタル 教科書体 N-R"
        cursor="pointer"
        style={{ padding: 0 }}
      >{`"`}</Text>
      <Box>
        <Text
          display="flex"
          justifyContent="center"
          // fontSize="5vmin"
          color="white"
          // -webkit-text-stroke-width: 2px;
          // -webkit-text-stroke-color: black;
          // stroke="black"
          // textShadow="0px 3px 0px #000000"
          userSelect="none"
          // fontFamily="UD デジタル 教科書体 N-R"
          cursor="pointer"
          style={{ width: '2.5vmin' }}
        >{`${milliseconds.slice(2, 3)}`}</Text>
      </Box>
    </Flex>,
  ];
};
