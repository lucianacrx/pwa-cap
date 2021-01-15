/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg";

declare interface NodeModule {
  hot: {
    accept(path?: string, fn: () => void, callback?: () => void): void;
  };
}
