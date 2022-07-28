import React from 'react';
import styled from 'styled-components';

export default function SelectTime({ handleChangeTime }: any) {
  return (
    <>
      <Container>
        <Title>Start time</Title>
        <div>
          <Select
            name="hours"
            onChange={(e: any) => handleChangeTime(e)}
            required
          >
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </Select>
          :
          <Select name="minute" onChange={(e: any) => handleChangeTime(e)}>
            <option>00</option>
            <option>05</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
            <option>30</option>
            <option>35</option>
            <option>40</option>
            <option>45</option>
            <option>50</option>
            <option>55</option>
          </Select>
          <Button
            name="AM"
            value="true"
            onClick={(e: any) => handleChangeTime(e)}
          >
            AM
          </Button>
          <Button
            name="AM"
            value="false"
            onClick={(e: any) => handleChangeTime(e)}
          >
            PM
          </Button>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
`;
const Title = styled.div`
  margin-left: 10px;
  width: 100px;
  font-size: 20px;
  font-weight: 600;
`;
const Select = styled.select`
  width: 100px;
  font-size: 15px;
`;
const Button = styled.button`
  width: 100px;
  margin-right: 30px;
`;
