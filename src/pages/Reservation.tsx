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

  //서버에 보낼 정보
  const [registeration, setRegisteration] = useState({
    day: '',
    time: '',
  });

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
  console.log(collectTime, 'collectTime');

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
    //console.log(findDayArray);
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
        <Title>Add class schedule</Title>
        <div>
          <SelectDate>
            <SelectTime
              handleChangeTime={handleChangeTime}
              setCollectTime={setCollectTime}
            />
            <SelectDay handleDayofWeek={handleDayofWeek} />
          </SelectDate>
        </div>
        <Button onClick={TryRegisteration}>Save</Button>
        <Button onClick={() => navigate('/')}>게시판</Button>
      </Container>
    </>
  );
}
const Container = styled.div``;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const SelectDate = styled.div``;
const Button = styled.button`
  width: 70px;
  height: 50px;
  font-size: 20px;
  margin: 10px;
  background-color: ${({ theme }) => theme.color.buttonColor};
  color: white;
`;
