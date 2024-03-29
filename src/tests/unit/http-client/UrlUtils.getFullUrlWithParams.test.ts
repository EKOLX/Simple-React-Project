import { UrlUtils } from "@/http-client";

describe("UrlUtils: getFullUrlWithParams", () => {
  it("should return fullUrl formatted as expected with one param", () => {
    const endpoint = "https://unit-test-api/v1/domain/[catalogId]/";
    const param = {
      catalogId: 123456,
    };
    const result = UrlUtils.getFullUrlWithParams(endpoint, param);

    expect("https://unit-test-api/v1/domain/123456/").toEqual(result);
  });

  it("should return fullUrl formatted as expected with multiple params", () => {
    const endpoint =
      "https://unit-test-api/v1/domain/[country]/[state]/[cityId]";
    const params = {
      country: "USA",
      state: "NY",
      cityId: "NY123",
    };
    const result = UrlUtils.getFullUrlWithParams(endpoint, params);

    expect("https://unit-test-api/v1/domain/USA/NY/NY123").toEqual(result);
  });
});
