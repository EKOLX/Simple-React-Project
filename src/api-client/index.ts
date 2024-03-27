import { apiLiveClient } from "./live";
import { apiMockClient } from "./mock";
import { ApiClientInterface } from "./models/ApiClient.interface";

let env: string = "mock";
// Note: Vite uses import.meta.env (reference: https://vitejs.dev/guide/env-and-mode.html)
if (import.meta.env && import.meta.env.VITE_API_CLIENT) {
  env = import.meta.env.VITE_API_CLIENT.trim();
}

let apiClient: ApiClientInterface;
if (env === "live") {
  apiClient = apiLiveClient;
} else {
  apiClient = apiMockClient;
}

export { apiClient };
