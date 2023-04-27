import Api, { ApiResponse } from "./api";
import { AxiosPromise } from "axios";

export interface DetailResponseData extends ApiResponse {
  data: DetailResponse;
}

export interface detailListItem {
  id: string;
  title: string;
  desc: string;
  img: string[];
}

export interface List {
  list: detailListItem[];
  landingPage: string;
}

export interface DetailBaseInfo {
  id: string;
  userName: string;
  website: string;
  qualifications: string;
  tradeLevel1: string;
  tradeLevel2: string;
  type: string;
  note: string;
}

export interface DetailResponse extends DetailBaseInfo {
  list: List;
}

class DetailApi extends Api {
  static getListUrl = "/list";
  static getDetailUrl = (id: string) => `/detail/${id}`;
  static passDetailUrl = "/verify/pass";
  static refuseDetailUrl = "/verify/refuse";
  static stopDetailUrl = "/verify/stop";
  static passLandPageUrl = "/landPage/pass";
  static refuseLandPageUrl = "/landPage/refuse";
  static refuseUserUrl = "/user/refuse";

  static getDetail(id: string): AxiosPromise<DetailResponseData> {
    return Api.get(DetailApi.getDetailUrl(id));
  }

  static passDetail(idList: string[]): AxiosPromise<ApiResponse> {
    return Api.post(DetailApi.passDetailUrl, { id: idList });
  }

  static refuseDetail(idList: string[]): AxiosPromise<ApiResponse> {
    return Api.post(DetailApi.refuseDetailUrl, { id: idList });
  }

  static stopDetail(idList: string[]): AxiosPromise<ApiResponse> {
    return Api.post(DetailApi.stopDetailUrl, { id: idList });
  }

  static passLandPage(id: string): AxiosPromise<ApiResponse> {
    return Api.post(DetailApi.passLandPageUrl, id);
  }

  static refuseLandPage(id: string): AxiosPromise<ApiResponse> {
    return Api.post(DetailApi.refuseLandPageUrl, id);
  }

  static refuseUser(id: string): AxiosPromise<ApiResponse> {
    return Api.post(DetailApi.refuseUserUrl, id);
  }
}

export default DetailApi;
