import React from 'react';
import styled from 'styled-components';

export default function SelectTime({ handleChangeTime }: any) {
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
          <Select name="hours">
            {hoursOptions.map(el => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </Select>
          :
          <Select name="minute">
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
          >
            AM
          </Button>
          <Button
            Right
            name="AM"
            value="false"
            onClick={(e: any) => handleChangeTime(e)}
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
  position: relative;
  top: 4px;
`;
const Select = styled.select`
  width: 56px;
  font-size: 19px;
  height: 30px;
  border: solid 2px #b4b4b4;
`;
const Button = styled.button<{ Right?: any }>`
  margin-left: ${props => (props.Right ? '5px' : '20px')};
  width: 56px;
  height: 30px;
  font-size: 15px;
  background-color: white;
  border: solid 2px #b4b4b4;
  position: relative;
  top: -1px;
`;
