import React, { useState } from 'react';
import styled from 'styled-components';

import SelectDay from '@src/components/SelectDay';
import SelectTime from '@src/components/SelectTime';
import { useNavigate } from 'react-router-dom';

export default function Reservation() {
  const navigate = useNavigate();
  const [registeration, setRegisteration] = useState({
    day: '',
    AM: true,
    start: '',
    end: '',
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
  });

  const handleChangeTime = (e: any) => {
    e.preventDefault();
    setRegisteration({ ...registeration, [e.target.name]: e.target.value });
  };
  console.log(registeration, 'registeration');

  // const chooseDay = (): any => {
  //   console.log('클릭');

  //   const day = {
  //     sun: false,
  //     mon: false,
  //     tue: false,
  //     wed: false,
  //     thu: false,
  //     fri: false,
  //     sat: false,
  //   };
  // };

  const TryRegisteration = () => {
    console.log(registeration);
  };

  return (
    <>
      <Container>
        <Title>Add class schedule</Title>
        <div>
          <SelectDate>
            <SelectTime handleChangeTime={handleChangeTime} />
            <SelectDay />
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
