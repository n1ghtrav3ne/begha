export interface AuthenticateModel {
    userId: string
    userName: string
    fullName: string
    accessToken: string
    refreshToken: string
}

export interface ProfileModel {
    id: string
    userName: string
    fullName: string
    categoryName: string
    mobile: string
    cityId: number
    provinceId: number
    followers: number
    gender: number
    isAuthor: boolean
    isFollowed: boolean
}