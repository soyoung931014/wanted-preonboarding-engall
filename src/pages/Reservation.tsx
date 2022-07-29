import React, { useState } from 'react';
import styled from 'styled-components';

import SelectDay from '@src/components/SelectDay';
import SelectTime from '@src/components/SelectTime';
import { useNavigate } from 'react-router-dom';
import { checkReservation } from '@src/api/reservation';

type dayOfWeek = {
  [key: string]: boolean;
};

export default function Reservation() {
  const navigate = useNavigate();

  // 임시로 시간 담는 부분
  const [collectTime, setCollectTime] = useState({
    hours: 0,
    minute: 0,
    AM: 'true',
  });

  // 임시로 날짜 담는 부분
  const [day, setDay] = useState<dayOfWeek>({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  const handleChangeTime = (e: any) => {
    e.preventDefault();
    if (e.target.name === 'AM') {
      setCollectTime({ ...collectTime, [e.target.name]: e.target.value });
      return;
    }
    setCollectTime({ ...collectTime, [e.target.name]: Number(e.target.value) });
  };

  // 요일 선택하는 부분
  const handleDayofWeek = (e: dayOfWeek) => {
    const { name }: any = e.target;
    const select = !day[name]; // true of false값
    setDay({ ...day, [name]: select });
  };

  const TryRegisteration = async () => {
    const { hours, minute, AM } = collectTime;
    let start = hours * 60 + minute;
    if (AM === 'false') {
      start = +720;
    }
    const end = start + 40;
    const findDayArray = findDayTrue(day);

    const reservation = await checkReservation(start, end, findDayArray);
    if (reservation !== undefined) {
      const { message }: any = reservation;
      if (message === 'post success') {
        gotoNotice();
        return;
      }
    }
  };

  function gotoNotice() {
    return navigate('/');
  }

  function findDayTrue(day: any) {
    const result = [];
    for (const key in day) {
      if (day[key] === true) {
        result.push(key);
      }
    }
    return result;
  }

  return (
    <>
      <Container>
        <FirstSection>
          <Title>Add class schedule</Title>
        </FirstSection>
        <SecondSection>
          <SelectDate>
            <SelectTime
              handleChangeTime={handleChangeTime}
              setCollectTime={setCollectTime}
            />
            <SelectDay handleDayofWeek={handleDayofWeek} />
          </SelectDate>
        </SecondSection>
        <ButtonContainer>
          <div></div>
          <Button onClick={TryRegisteration}>Save</Button>
        </ButtonContainer>
      </Container>
    </>
  );
}
const Container = styled.div`
  margin-right: 20px;
  margin-left: 20px;
`;
const FirstSection = styled.div`
  display: flex;
  height: 140px;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
`;
const SecondSection = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  background-color: white;
  margin-top: 15px;
  padding: 30px;
  box-shadow: 10px 10px 10px #3c4a5645;
`;
const Title = styled.div`
  margin-left: 10px;
  font-size: 35px;
  font-weight: 650;
`;
const SelectDate = styled.div``;
const Button = styled.button`
  width: 250px;
  height: 50px;
  font-size: 20px;
  margin: 10px;
  background-color: ${({ theme }) => theme.color.buttonColor};
  color: white;
  border-radius: 10px;
  margin-top: 15px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
