import { QueryAllSchedule } from '@src/api/reservation';
import NoticeList from '@src/components/NoticeList';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Notice() {
  const navigate = useNavigate();

  return (
    <Container>
      <FirstSection>
        <Title>Class schedule</Title>
        <Button onClick={() => navigate('/reservation')}>
          Add Class Schedule
        </Button>
      </FirstSection>
      <SecondSection>
        <NoticeList />
      </SecondSection>
    </Container>
  );
}

const Container = styled.div``;
const FirstSection = styled.section`
  display: flex;
`;
const SecondSection = styled.section`
  width: 100vw;
  height: 30vh;
  background-color: white;
  margin-top: 30px;
`;

const Title = styled.div`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
`;
const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.buttonColor};
  color: white;
  font-weight: 600;
  font-size: 20px;
`;
