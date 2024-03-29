import axios from "axios";

import {
  HttpClientFetch,
  HttpRequestParamsInterface,
  HttpRequestType,
} from "@/http-client";

const mockRequestParams: HttpRequestParamsInterface<any> = {
  requestType: HttpRequestType.get,
  endpoint: "path/to/a/get/api/endpoint",
  requiresToken: false,
};

describe("HttpClient: fetch-client: request: get", () => {
  const httpClient = new HttpClientFetch();

  it("should execute get request succesfully", async () => {
    const unmockedFetch = global.fetch || (() => {});
    global.fetch = unmockedFetch;

    const expectedResult = {
      result: `request completed: ${mockRequestParams.endpoint}`,
    };

    vitest.spyOn(global, "fetch").mockImplementation(async () =>
      Promise.resolve({
        redirected: false,
        json: () => Promise.resolve(JSON.stringify(expectedResult)),
      } as any)
    );

    try {
      const response = await httpClient.request(mockRequestParams);
      expect(response).not.toBeNull();
      expect(response).toEqual(expectedResult);
    } catch (error) {
      console.error("FetchClient.request.get.test.ts: error", error);
    }

    // restore globa.fetch
    global.fetch = unmockedFetch;
  });

  it("should throw error on get rejection", () => {
    const unmockedFetch = global.fetch || (() => {});
    global.fetch = unmockedFetch;

    vitest
      .spyOn(global, "fetch")
      .mockImplementation(async () => Promise.reject());

    httpClient.request(mockRequestParams).catch((error) => {
      expect(error).toBeDefined();
      expect(error.toString()).toEqual("Error: HttpClientFetch: exception");
    });
  });
});
