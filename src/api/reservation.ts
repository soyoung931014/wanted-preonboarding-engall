import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { BASE_URL } from '@api/index';

// 스케쥴 예약 체크 & 예약 전송
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

// 스케쥴 리스트 받아오기
export const fetchAllSchedule = async ({ queryKey }: any) => {
  const day = queryKey[1];
  const response = await axios.get(`${BASE_URL}/schedules?day=${day}`);
  return response.data;
};

// 스케쥴 리스트 받아오기 (쿼리)
export const QueryAllSchedule = (day: string) => {
  return useQuery(['schedule', day], fetchAllSchedule);
};
