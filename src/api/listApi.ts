import Api, { ApiResponse } from "./api";
import { AxiosPromise } from "axios";

export interface listItem {
  id: string;
  userName: string;
  product: string;
  trade: string;
  time: string;
}

export interface ListResponseData extends ApiResponse {
  data: ListResponse;
}

export interface ListResponse {
  data: listItem[];
  total: number;
}

export type GetListPagination = {
  offset: number;
  size: number;
};

export type GetListFilters = {
  userName?: string;
  product?: string;
  trade?: string;
  startTime?: string;
  endTime?: string;
};

export type GetListParams = GetListPagination & GetListFilters;

class ListApi extends Api {
  static getListUrl = "/list";
  static getDeleteUrl = (id: string) => `/list/${id}`;

  static getList(params: GetListParams): AxiosPromise<ListResponseData> {
    return Api.post(ListApi.getListUrl, params);
  }

  static delete(id: string): AxiosPromise<ApiResponse> {
    return Api.delete(ListApi.getDeleteUrl(id));
  }
}

export default ListApi;
