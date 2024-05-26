import { ApiService, getEnvironmentVar } from '@takamol/react-qiwa-core';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import qs from 'qs';
import { GenericObject } from 'src/app/shared/models/GenericObjects';
import { MetaPagination } from 'src/app/shared/models/MetaPagination';



export interface ErrorDetails {
  data?: GenericObject;
  status: number;
  statusText: string;
  errors?: Array<GenericObject> | GenericObject;
  message?: string;
}
export interface APIResponse<T = GenericObject> extends AxiosResponse<Array<T> | T | Blob> {
  data: Array<T> | T | Blob;
  meta?: MetaPagination;
  error?: ErrorDetails;
}

export interface ApiClientResponse {
  data: GenericObject;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig;
  request?: unknown;
}

interface ApiClientError {
  response: ErrorDetails;
}
type ApiServiceConfig = {
  withCamelizeResponseInterceptor: boolean;
  withDecamelizeRequestInterceptor: boolean;
};

const interceptorsConfig: ApiServiceConfig = {
  withCamelizeResponseInterceptor: true,
  withDecamelizeRequestInterceptor: false,
};

const baseUrl: string = getEnvironmentVar('API_BASE_URL');
console.log('Base URL ===>',baseUrl);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const paramsSerializer = (params: any) => {
  return qs.stringify(params, { encode: true, arrayFormat: 'brackets' });
};

export class ApiClient extends ApiService {
  private config: AxiosRequestConfig;

  constructor(config?: ApiServiceConfig) {
    super(baseUrl, config ?? interceptorsConfig);
    this.config = {
      timeout: 50000,
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    };
  }

  /**
   * Retrieves data from the specified URL using an HTTP GET request.
   *
   * @param {string} url - The URL to send the GET request to.
   * @param {object | URLSearchParams} params - Optional parameters to include in the request.
   * @return {Promise<AxiosResponse>} A promise that resolves to the response of the GET request.
   */
  get(
    url: string,
    params: object | URLSearchParams = {},
    configParams: AxiosRequestConfig = {},
  ): Promise<AxiosResponse> {
    return this.response(this.httpClient.get(url, { ...this.config, ...configParams, paramsSerializer, params }));
  }

  /**
   * Sends a POST request to the specified URL with an optional payload.
   *
   * @param {string} url - The URL to send the request to.
   * @param {B} payload - The payload to include in the request. Defaults to an empty object.
   * @return {Promise<AxiosResponse>} - A promise that resolves with the response from the server.
   */
  post<B>(url: string, payload: B = {} as B, configParams: AxiosRequestConfig = {}): Promise<AxiosResponse> {
    return this.response(this.httpClient.post(url, payload, { ...this.config, ...configParams }));
  }

  /**
   * Sends a PUT request to the specified URL with the provided payload.
   *
   * @param {string} url - The URL to send the request to.
   * @param {B} payload - The payload to include in the request body. Defaults to an empty object.
   * @return {Promise<AxiosResponse>} A promise that resolves with the response from the server.
   */
  put<B>(url: string, payload: B = {} as B, configParams: AxiosRequestConfig = {}): Promise<AxiosResponse> {
    return this.response(this.httpClient.put(url, payload, { ...this.config, ...configParams }));
  }

  /**
   * Patch the specified URL with the provided payload.
   *
   * @param {string} url - The URL to patch.
   * @param {B} payload - The payload to send with the patch request.
   * @return {Promise<AxiosResponse>} A promise that resolves to the response from the patch request.
   */
  patch<B>(url: string, payload: B = {} as B, configParams: AxiosRequestConfig = {}): Promise<AxiosResponse> {
    return this.response(this.httpClient.patch(url, payload, { ...this.config, ...configParams }));
  }

  /**
   * Deletes a resource using the specified URL.
   *
   * @param {string} url - The URL of the resource to delete.
   * @return {Promise<AxiosResponse>} A promise that resolves to the response from the server.
   */
  delete(url: string): Promise<AxiosResponse> {
    return this.response(this.httpClient.delete(url, this.config));
  }

  private response = async (promise: Promise<AxiosResponse>): Promise<APIResponse> => {
    try {
      const { data, status, statusText, headers, config, request } = await promise;

      const responseData = data.data || data;
      const metaData = data?.meta;

      return { data: responseData, meta: metaData, status, statusText, headers, config, request };
    } catch (error) {
      if (!(error as ApiClientError).response) {
        return Promise.reject({ error });
      }
      const { data, status, statusText } = (error as ApiClientError).response;

      const { errors, message } = data as GenericObject;

      const errorDetails: ErrorDetails = { errors, status, statusText, message } as GenericObject & ErrorDetails;
      return Promise.reject({ error: errorDetails });
    }
  };
}

export default new ApiClient();
