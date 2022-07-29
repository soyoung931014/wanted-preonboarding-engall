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

  return (
    <>
      <Container>
        <Button onClick={() => console.log(id)}>x</Button>
        <Schedule>
          <div>
            {startHours}:{startMinute} {amOrPm} -
          </div>
          <div>
            {endHours}:{endMinute} {amOrPm}
          </div>
        </Schedule>
      </Container>
    </>
  );
}

const Container = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
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
`;
