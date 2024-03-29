import axios, { AxiosRequestConfig } from "axios";

import { HttpClientInterface } from "./HttpClient.interface";
import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";
import { UrlUtils } from "./UrlUtils";
import { HttpRequestType } from "./Constants";

/**
 * @name HttpClientAxios
 * @description
 * Wraps http client functionality to avoid directly using a third party npm package like axios
 */
export class HttpClientAxios implements HttpClientInterface {
  constructor() {}

  /**
   * @name request
   * @description
   * A method that executes different types of http requests (i.e. GET/POST/etc) based on the parameters argument.
   * @param parameters
   * The type R specify the type of the result returned
   * The type P specify the type of payload if any
   * @returns A Promise<R> as the implementation of this method will be async
   */
  async request<R, P = void>(
    parameters: HttpRequestParamsInterface<P>
  ): Promise<R> {
    const {
      requestType,
      endpoint,
      requiresToken,
      payload,
      headers,
      mockDelay,
    } = parameters;
    const fullUrl = UrlUtils.getFullUrlWithParams(endpoint, payload as any);
    console.log("HttpClientAxios: fullUrl: ", fullUrl, payload);

    const options: AxiosRequestConfig = {
      headers: {},
      maxRedirects: 0,
    };

    if (headers) {
      options.headers = {
        ...headers,
      };
    }

    if (requiresToken && options.headers) {
      options.withCredentials = true;
      // options.headers.Authorization = `bearer ${ JwtHelpers.getJwtToken() }`
    }

    let result!: R;

    try {
      switch (requestType) {
        case HttpRequestType.get: {
          const response = await axios.get(fullUrl, options);
          result = response?.data as R;
          break;
        }
        case HttpRequestType.post: {
          const response = await axios.post(fullUrl, payload, options);
          result = response?.data as R;
          break;
        }
        case HttpRequestType.put: {
          const response = await axios.put(fullUrl, payload, options);
          result = response?.data as R;
          break;
        }
        case HttpRequestType.delete: {
          const response = await axios.delete(fullUrl, options);
          result = response?.data as R;
          break;
        }
        case HttpRequestType.patch: {
          const response = await axios.put(fullUrl, payload, options);
          result = response?.data as R;
          break;
        }
        default: {
          console.warn(
            "HttpClientAxios: invalid requestType argument or request type not implemented"
          );
        }
      }
    } catch (e) {
      console.error("HttpClientAxios: exception", e);
      throw Error("HttpClientAxios: exception");
    }

    if ((mockDelay || 0) > 0) {
      return new Promise<R>((resolve) => {
        setTimeout(() => {
          resolve(result);
        }, mockDelay);
      });
    }

    return result;
  }
}
