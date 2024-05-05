import { ApiService } from '@takamol/react-qiwa-core';

import { exampleApiUrl } from '../constants/exampleApiUrl';
import { todoListMock } from '../constants/todoListMock';
import { economicActivityMock } from '../constants/economicActivityMock';
import { complianceMock } from '../constants/complianceMock';
import { nitaqatMock } from '../constants/nitaqatMock';
import { employeesMock } from '../constants/employeesMock';
import { nonSaudiEmployeesMock } from '../constants/nonSaudiEmployeesMock';

class ExampleApiService extends ApiService {
  constructor() {
    super(exampleApiUrl, { withCamelizeResponseInterceptor: true, withDecamelizeRequestInterceptor: false });
  }

  getTodoList = async () => {
    return Promise.resolve(todoListMock);
  };

  getComplianceStatus = async () => {
    return Promise.resolve(complianceMock);
  };

  getEconomicActivity = async () => {
    return Promise.resolve(economicActivityMock);
  };

  getNitaqatScore = async () => {
    return Promise.resolve(nitaqatMock);
  };

  getEmployees = async () => {
    return Promise.resolve(employeesMock);
  };

  getNonSaudisEmployees = async () => {
    return Promise.resolve(nonSaudiEmployeesMock);
  };
}

export const exampleApiService = new ExampleApiService();
