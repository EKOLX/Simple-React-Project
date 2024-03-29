import {
  HttpClientAxios,
  HttpClientFetch,
  HttpClientInterface,
} from "./models";

export * from "./models";

let _httpClient: HttpClientInterface | undefined = undefined;

export const httpClientInstance = () => {
  if (!_httpClient) {
    const clientType = "fetch";
    if (clientType === "fetch") {
      _httpClient = new HttpClientFetch();
    } else if (clientType === "axios") {
      _httpClient = new HttpClientAxios();
    }
  }

  return _httpClient as HttpClientInterface;
};
