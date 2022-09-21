export interface ComponentEvent<T, K> {
    componetName?: string;
    action: T;
    data: K;
  }