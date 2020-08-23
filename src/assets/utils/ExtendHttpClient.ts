import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/**
 * Создает оберточные методы вокруг методов HttpClient для определения заголовков и параметров по умолчанию для каждого метода
 * @param { HttpClient } http - экземпляр класса HttpClient
 * @param { ExtendHttpClientConfig } config - Настройки запросов
 */
export function ExtendHttpClient (http: HttpClient, config: ExtendHttpClientConfig): HttpClientRequestMethods {
  let { baseUrl } = config;
  const { baseHeaders, baseParams } = config;
  const excludeMethods = ['constructor', 'request']
  const requestMethods = Object.getOwnPropertyNames((http as any).__proto__).filter(e => !excludeMethods.includes(e))
  const methodList = {};

  if (baseUrl[baseUrl.length - 1] !== '/') {
    baseUrl = baseUrl + '/'
  }

  for (let requestMethod of requestMethods) {
    methodList[requestMethod] = function (method: string, options?:HttpClientRequestOptions): Observable<any> {
      const argCount = http[requestMethod].length;
      const isMethodContainsBody = argCount === 2;

      const headers = {
        ...baseHeaders,
        ...(options?.headers || {})
      }
      const params = {
        ...baseParams,
        ...(options?.params || {})
      }

      const requestOptions = {
        observe: 'body',
        responseType: 'json',
        ...options,
        headers,
        params
      }

      if (isMethodContainsBody) {
        delete requestOptions.params;
      }
      return http[requestMethod](baseUrl + method, isMethodContainsBody && options.params || requestOptions, isMethodContainsBody && requestOptions)
    }
  }

  return methodList;
}

/**
 * @see {@link https://angular.io/guide/http#requesting-data-from-a-server | Requesting data from a server}
 */
export interface HttpClientRequestOptions {
  headers?:{[header: string]: string | string[]},
  observe?: 'body' | 'events' | 'response',
  params?: {[param: string]: string | string[]},
  reportProgress?: boolean,
  responseType?: 'arraybuffer'| 'blob'|'json'|'text',
  withCredentials?: boolean
}

type PostRequest = (method: string, body?: any, options?: HttpClientRequestOptions) => Observable<any>
type GetRequest = (method: string, options?: HttpClientRequestOptions) => Observable<any>
export interface HttpClientRequestMethods {
  [requestMethod: string]: PostRequest | GetRequest
}

export interface ExtendHttpClientConfig {
  /**
   * Базовые параметры, которые передаются в каждом запросе
   */
  baseParams?: {[param: string]: string | string[]},
  /**
   * Базовые заголовки, которые передаются в каждом запросе
   */
  baseHeaders?: {[header: string]: string | string[]},
  /**
   * Базовый URL который будет добавлен к URL запроса
   */
  baseUrl: string
}
