import React from 'react';
import styled from 'styled-components';
// import { useRef } from 'react';

export default function SelectTime({ handleChangeTime }: any) {
  // const hoursRef = useRef(null);
  // const minuteRef = useRef(null);
  // const amRef = useRef(null);
  // const pmRef = useRef(null);

  const hoursOptions = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
  ];
  const minutesOptions = [
    '00',
    '05',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '55',
  ];
  return (
    <>
      <Container>
        <Title>Start time</Title>
        <div onChange={(e: any) => handleChangeTime(e)}>
          <Select
            name="hours"
            //  ref={hoursRef}
          >
            {hoursOptions.map(el => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </Select>
          :
          <Select
            name="minute"
            //  ref={minuteRef}
          >
            {minutesOptions.map(el => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </Select>
          <Button
            name="AM"
            value="true"
            onClick={(e: any) => handleChangeTime(e)}
            //  ref={amRef}
          >
            AM
          </Button>
          <Button
            name="AM"
            value="false"
            onClick={(e: any) => handleChangeTime(e)}
            //  ref={pmRef}
          >
            PM
          </Button>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
`;
const Title = styled.div`
  margin-left: 10px;
  width: 100px;
  font-size: 20px;
  font-weight: 600;
`;
const Select = styled.select`
  width: 100px;
  font-size: 15px;
`;
const Button = styled.button`
  width: 100px;
  margin-right: 30px;
`;
