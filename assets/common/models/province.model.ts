export interface ProvinceModel {
  pId: number;
  name: string;
}
export interface CityModel {
  cId: number;
  provinceId: number;
  name: string;
}
export interface AreaModel {
  aId: number;
  cityId: number;
  aNo: number;
  title: string;
}
