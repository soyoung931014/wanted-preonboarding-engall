import React from 'react';
import styled from 'styled-components';

export default function NoticeList() {
  return (
    <>
      <Container>
        <DayBox>
          <Day>Monday</Day>
          <Day>Tuesday</Day>
          <Day>Wednesday</Day>
          <Day>Thursday</Day>
          <Day>Friday</Day>
          <Day>Saturday</Day>
          <Day>Sunday</Day>
        </DayBox>
        <div>스케쥴</div>
      </Container>
    </>
  );
}
const Container = styled.div``;
const DayBox = styled.div`
  display: flex;
  border-bottom: solid black 1px;
  justify-content: space-around;
`;
const Day = styled.div`
  margin-right: 20px;
  font-size: 25px;
  font-weight: 400;
`;
