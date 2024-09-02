import { baseUrl } from "@/constants";

export interface RegisterPayload {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
}

export interface VerifyOTP {
  email: string;
  otp: string;
}

export interface ResendOTPPayload {
  email: string;
}

export const register = async (payload: RegisterPayload) => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        password1: payload.password,
        password2: payload.confirmPassword,
        username: payload.username,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const verifyOtp = async (payload: VerifyOTP) => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/otp/verify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const resendOtp = async (payload: ResendOTPPayload) => {
  try {
    const response = await fetch(`${baseUrl}/api/v1/otp/resend`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
