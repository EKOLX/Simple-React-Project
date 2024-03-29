import { HttpRequestType } from "./Constants";

/**
 * @name HttpRequestParamsInterface
 * @description
 */
export interface HttpRequestParamsInterface<P = void> {
  requestType: HttpRequestType;
  endpoint: string;
  requiresToken: boolean;
  headers?: { [key: string]: string };
  payload?: P;
  mockDelay?: number;
}
