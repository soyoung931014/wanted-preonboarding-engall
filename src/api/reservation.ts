import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { BASE_URL } from '@api/index';
import { Navigate, useNavigate } from 'react-router-dom';

export const checkReservation = async (
  start: number,
  end: number,
  findDayArray: string | any[],
) => {
  const data = [];
  for (let i = 0; i < findDayArray.length; i++) {
    const response = await axios.get(
      `${BASE_URL}/schedules?day=${findDayArray[i]}&time_gte=${start}&time_lte=${end}`,
    );
    if (response.data.length > 0) {
      return alert(`이미 예약된 스케쥴이 포함되어 있습니다.`);
    }
    data.push({ day: findDayArray[i], time: String(start) });
  }
  const post = await axios.post(`${BASE_URL}/schedules`, ...data);
  if (post.status === 201) {
    alert('예약되었습니다.');
    return { message: 'post success' };
  }
};
