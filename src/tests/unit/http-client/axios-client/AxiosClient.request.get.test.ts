import axios from "axios";

import {
  HttpClientAxios,
  HttpRequestParamsInterface,
  HttpRequestType,
} from "@/http-client";

const mockRequestParams: HttpRequestParamsInterface<any> = {
  requestType: HttpRequestType.get,
  endpoint: "path/to/a/get/api/endpoint",
  requiresToken: false,
};

describe("HttpClient: axios-client: request: get", () => {
  const httpClient = new HttpClientAxios();

  it("should execute get request succesfully", () => {
    vitest.spyOn(axios, "get").mockImplementation(async () =>
      Promise.resolve({
        data: `request completed: ${mockRequestParams.endpoint}`,
      })
    );

    httpClient
      .request(mockRequestParams)
      .then((response) => {
        expect(response).toEqual(
          `request completed: ${mockRequestParams.endpoint}`
        );
      })
      .catch((error) => {
        console.error("AxiosClient.request.get.test.ts: error", error);
      });
  });

  it("should throw error on get rejection", () => {
    vitest
      .spyOn(axios, "get")
      .mockImplementation(async () =>
        Promise.reject({
          data: `request completed: ${mockRequestParams.endpoint}`,
        })
      );

    httpClient.request(mockRequestParams).catch((error) => {
      expect(error).toBeDefined();
      expect(error.toString()).toEqual("Error: HttpClientAxios: exception");
    });
  });
});
