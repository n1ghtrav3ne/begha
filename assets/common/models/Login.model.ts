export interface LoginRequestModel {
  deviceId: string;
  fireBaseToken: string;
  deviceType: number;
  version: number;
  brand: string;
  model: string
  manufacture: string,
  appVersion: string
}

export interface LoginResponseModel {
  accessToken: string;
  refreshToken: string;
}
