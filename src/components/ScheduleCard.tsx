import { queryDeleteSchedule } from '@src/api/reservation';
import React from 'react';
import styled from 'styled-components';

export default function ScheduleCard({ id, start }: any) {
  let startTime = Number(start);
  let endTime = Number(start) + 40;
  let amOrPm = 'AM';

  // 시작시간 가공
  if (startTime >= 720) {
    startTime = startTime - 720;
    amOrPm = 'PM';
  }
  let startHours = String(Math.floor(startTime / 60));
  if (startHours.length === 1) {
    startHours = '0' + String(startHours);
  }

  let startMinute = String(startTime % 60);
  if (startMinute.length === 1) {
    startMinute = '0' + String(startMinute);
  }

  // 끝나는시간 가공
  if (endTime >= 720) {
    endTime = endTime - 720;
    amOrPm = 'PM';
  }
  let endHours = String(Math.floor(endTime / 60));
  if (endHours.length === 1) {
    endHours = '0' + String(endHours);
  }

  let endMinute = String(endTime % 60);
  if (endMinute.length === 1) {
    endMinute = '0' + String(endMinute);
  }
  const { mutate } = queryDeleteSchedule(id);
  const deleteCard = (id: any) => {
    return mutate(id);
  };
  return (
    <>
      <Container>
        <Button onClick={() => deleteCard(id)}>x</Button>
        <Schedule>
          <ScheduleTime>
            {startHours}:{startMinute} {amOrPm} -
          </ScheduleTime>
          <ScheduleTime>
            {endHours}:{endMinute} {amOrPm}
          </ScheduleTime>
        </Schedule>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  margin-top: 30px;
  &:hover {
    box-shadow: 10px 10px 10px #3c4a5645;
    border-bottom: #b1b0b0 solid 3px;
  }
`;

const Schedule = styled.div`
  width: 150px;
  height: 50px;
`;
const Button = styled.button`
  background-color: #c5c5c5;
  color: #f4f4f4;
  border-radius: 100%;
  position: relative;
  left: 120px;
  &:hover {
    background-color: #adadad;
  }
`;
const ScheduleTime = styled.div`
  color: #747474;
  position: relative;
  left: 10px;
  font-size: 22px;
`;
