
export type RegistrationUser = {
    username : String,
    password : String,
    rePassword : String,
    email : String
}

export type LoginUser = {
    userName : String
    password : String,

}

export type Horoscope = {
    id : number,
    name : string,
    description : string,
    period : string,
    image : string
}