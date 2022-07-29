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

const Container = styled.div`
  margin-right: 20px;
  margin-left: 20px;
`;
const FirstSection = styled.section`
  display: flex;
  height: 140px;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
`;
const SecondSection = styled.section`
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
const Button = styled.button`
  width: 250px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.buttonColor};
  color: white;
  font-weight: 600;
  font-size: 20px;
  border-radius: 10px;
`;
