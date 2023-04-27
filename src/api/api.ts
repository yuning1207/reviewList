import axios, { AxiosResponse } from "axios";

export type ApiResponse = {
  success: boolean;
  code: number;
  message: string;
  data: any;
};

class Api {
  static get(url: string, queryParams?: any) {
    return queryParams ? axios.get(url, { params: queryParams }) : axios.get(url);
  }

  static post(url: string, queryParams?: any) {
    return axios.post(url, queryParams);
  }

  static delete(url: string) {
    return axios.delete(url);
  }
}

export function validateResponse(response: AxiosResponse<ApiResponse>): true | never {
  if (doValidResponse(response)) {
    return true;
  } else {
    throw Error(response.data.message);
  }
}

export function doValidResponse(response: AxiosResponse<ApiResponse>) {
  if (!response) {
    throw Error("网络连接失败");
  }
  if (!response.data && !response.status) {
    throw Error("网络连接失败");
  }
  if (!response.data && response.status) {
    throw Error("数据请求失败");
  }
  return response.data.success;
}

export default Api;
