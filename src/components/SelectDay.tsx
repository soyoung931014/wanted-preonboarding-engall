import React from 'react';
import styled from 'styled-components';

export default function SelectDay() {
  return (
    <Container>
      <Title>Repeat on</Title>
      <DayBox>
        <DayButton>Monday</DayButton>
        <DayButton>Tuesday</DayButton>
        <DayButton>Wednesday</DayButton>
        <DayButton>Thursday</DayButton>
        <DayButton>Friday</DayButton>
        <DayButton>Saturday</DayButton>
        <DayButton>Sunday</DayButton>
      </DayBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const DayBox = styled.div`
  display: flex;
`;
const Title = styled.div`
  margin-left: 10px;
  width: 100px;
  font-size: 20px;
  font-weight: 600;
`;
const DayButton = styled.button`
  border: solid black 1px;
  padding: 10px;
  width: 100px;
`;
