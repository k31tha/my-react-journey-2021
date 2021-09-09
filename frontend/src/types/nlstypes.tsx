export enum ProcessingStatusType {
  pending = 'pending',
  complete = 'complete',
  loaded = 'loaded',
  error = 'error',
  warning = 'warning',
  notfound = 'notfound',
}

export type ProcessingStatus =
  | ProcessingStatusType.pending
  | ProcessingStatusType.complete
  | ProcessingStatusType.loaded
  | ProcessingStatusType.error
  | ProcessingStatusType.warning
  | ProcessingStatusType.notfound;

export type ApiError = {
  PropertyName: string;
  ErrorMessage: string;
};

export type FluentApiErrors = {
  fluentErrors: Array<ApiError>;
};
