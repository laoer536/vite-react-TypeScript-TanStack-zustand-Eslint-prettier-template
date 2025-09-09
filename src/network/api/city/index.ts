import { getCanvasData, GetCityTotalNumberModel } from './types.ts'

import { request } from '@/network/axios'

enum APIS {
  GET_CITY_TOTAL_NUMBER = '/xxxx/xxxx/xxxxx',
}

export const getCityTotalNumber = (params: getCanvasData) =>
  request.get<GetCityTotalNumberModel[]>(APIS.GET_CITY_TOTAL_NUMBER, params)
