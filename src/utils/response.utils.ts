import { PaginationParamsInterface } from '../interfaces/pagination-params.interface';

export interface okMessage {
  code: number;
  message: string;
}

export interface resMessage {
  code: number;
  message: string;
  error?: string;
}

class ResponseUtils {
  public success(
    collectionName: string,
    data: any,
    options?: {
      location: string;
      paginationParams: PaginationParamsInterface;
      totalCount: number;
    },
  ) {
    return {
      collectionName,
      data,
      options,
    };
  }

  public okMessage(message?: string, code?: number): okMessage {
    return {
      code: code || 200,
      message: message || 'ok',
    };
  }

  public resMessage(
    message?: string,
    code?: number,
    error?: string,
  ): resMessage {
    return {
      code: code || 200,
      message: message || 'Success',
      error,
    };
  }
}

export default new ResponseUtils();
