import { HttpRequestParamsInterface } from "./HttpRequestParams.interface";

/**
 * @name HttpClientConfigInterface
 * @description
 */
export interface HttpClientConfigInterface {
  tokenKey: string;
  clientType: string;
}

/**
 * @name HttpClientInterface
 * @description
 */
export interface HttpClientInterface {
  /**
   * @name request
   * @description
   * A method that executes different types of http requests (i.e. GET/POST/etc) based on the parameters argument.
   * @param parameters
   * The type R specify the type of the result returned
   * The type P specify the type of payload if any
   * @returns A Promise<R> as the implementation of this method will be async
   */
  request<R, P = void>(parameters: HttpRequestParamsInterface<P>): Promise<R>;
}
