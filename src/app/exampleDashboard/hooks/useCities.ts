import { useQuery } from '@tanstack/react-query';
import cityService from '../services/cityService';
import { Pagination } from 'src/app/shared/models/Pagination';


export const useCities = (pagination: Pagination, enabled: boolean) => {
  return useQuery(
    ['cities'],
    () => cityService.getCities({ ...pagination }),
    { enabled },
  );
};
