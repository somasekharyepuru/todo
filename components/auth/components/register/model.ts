export interface IRegisterEmail {
  email: string;
}

export interface IRegisterOtp {
  otp: number;
}

export interface IRegisterUserSignUp {
  first_name: string;
  last_name: string;
  password: string;
  confirmPassword: string;
  phone: number;
}
