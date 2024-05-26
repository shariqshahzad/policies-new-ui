/* eslint-disable @typescript-eslint/no-explicit-any */
import apiRouter from 'src/app/shared/constants/apiRouter';
import apiClient from './apiClient';
import { Pagination } from 'src/app/shared/models/Pagination';

class CityService {
  getCities(params: Pagination): Promise<any> {
    return apiClient.get(apiRouter.cities.getCities,params);
  }
}

export default new CityService();
