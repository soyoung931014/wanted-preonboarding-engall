import { scheduleInfo } from '@src/types/models/dayOfTheWeek';
import React from 'react';
import styled from 'styled-components';
import ScheduleCard from './ScheduleCard';

export interface date {
  day: string;
  scheduleList: object;
}

export default function DaySchedule({ day, scheduleList }: any) {
  const { isLoading, isError, data } = scheduleList;
  console.log(data);

  if (isLoading === true) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>Error</span>;
  }

  return (
    <Container>
      <Title>{day}</Title>
      {data.length > 0
        ? data.map((schedule: scheduleInfo) => (
            <ScheduleCard
              id={schedule.id}
              start={schedule.time}
              key={schedule.id}
            />
          ))
        : null}
    </Container>
  );
}
const Container = styled.div`
  display: block;
`;
const Title = styled.div`
  text-align: center;
`;
