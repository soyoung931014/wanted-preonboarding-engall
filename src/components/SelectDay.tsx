import React from 'react';
import styled from 'styled-components';

export default function SelectDay({ handleDayofWeek }: any) {
  return (
    <Container>
      <Title>Repeat on</Title>

      <DayBox onClick={e => handleDayofWeek(e)}>
        <DayButton name="Mon">Monday</DayButton>
        <DayButton name="Tue">Tuesday</DayButton>
        <DayButton name="Wed">Wednesday</DayButton>
        <DayButton name="Thu">Thursday</DayButton>
        <DayButton name="Fri">Friday</DayButton>
        <DayButton name="Sat">Saturday</DayButton>
        <DayButton name="Sun">Sunday</DayButton>
      </DayBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;
const DayBox = styled.div``;
const Title = styled.div`
  margin-left: 10px;
  width: 100px;
  font-size: 20px;
  font-weight: 600;
  position: relative;
  top: 12px;
`;

const DayButton = styled.button`
  border: solid 2px #b4b4b4;
  padding: 10px;
  width: 140px;
  margin-right: 30px;
  background-color: white;
  font-size: 18px;
`;
