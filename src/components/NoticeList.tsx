import { QueryAllSchedule } from '@src/api/reservation';
import React from 'react';
import styled from 'styled-components';
import DaySchedule from './DaySchedule';

export default function NoticeList() {
  const mon = QueryAllSchedule('Mon');
  const tue = QueryAllSchedule('Tue');
  const wed = QueryAllSchedule('Wed');
  const thu = QueryAllSchedule('Thu');
  const fri = QueryAllSchedule('Fri');
  const sat = QueryAllSchedule('Sat');
  const sun = QueryAllSchedule('Sun');

  return (
    <>
      <Container>
        <Div></Div>
        <DayBox>
          <Day>
            <DaySchedule day="Monday" scheduleList={mon} />
          </Day>
          <Day>
            <DaySchedule day="Tuesday" scheduleList={tue} />
          </Day>
          <Day>
            <DaySchedule day="Wednesday" scheduleList={wed} />
          </Day>
          <Day>
            <DaySchedule day="Thursday" scheduleList={thu} />
          </Day>
          <Day>
            <DaySchedule day="Friday" scheduleList={fri} />
          </Day>
          <Day>
            <DaySchedule day="Saturday" scheduleList={sat} />
          </Day>
          <Day>
            <DaySchedule day="Sunday" scheduleList={sun} />
          </Day>
        </DayBox>
      </Container>
    </>
  );
}
const Container = styled.div``;
const Div = styled.div`
  border-bottom: solid #b4b4b4 2px;
  position: relative;
  bottom: -35px;
`;
const DayBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Day = styled.div`
  margin-right: 20px;
  font-size: 25px;
  font-weight: 400;
`;
