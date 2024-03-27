/// <reference types="vite/client" />
/// <reference types="react" />

// (reference: https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript)
interface ImportMetaEnv {
  readonly VITE_API_CLIENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
