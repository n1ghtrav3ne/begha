
export interface OrginalCaheDataModel {
  AyeNo: number;
  SurahNo: number;
  GroupNo: number;
  CalligraphyNo: number;
  ArabicText: string;
  ArabicUnText: string;
  HasSejdeh: boolean;
  Joz: number;
  Hezb: number;
  Page: number;
  Version: number;
  Id: string;
  CreatedAt: string;
  ModifiedAt: string;
  DeletedAt: string;
  Deleted: boolean;
}
export interface PersianCaheDataModel {
  AyeNo: number;
  SurahNo: number;
  GroupNo: number;
  text: string
}


export interface SimilarWordModel {
  no: number,
  calliographyNo: number,
  word: string

}
export interface SimilarWordApiModel {
  No: number,
  CalliographyNo: number,
  UnArabicWord: string,
  Similars: Similar[]
}

export interface Similar {
  CalliographyNo: number
  UnArabicWord: string
}
