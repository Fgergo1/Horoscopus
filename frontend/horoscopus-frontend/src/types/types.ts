export type User = {
    username: string,
    password?: string,
    rePassword?: string,
    email?: string
}

export type Horoscope = {
    id: number,
    name: string,
    description: string,
    period: string,
    image: string
}

export type JwtResponse = {
    jwt: string,
    roles: Array<string>,
    userName: string
}

export type ReserveDate = {
    id?: number ,
    interval : string,
    reserve : boolean
}

