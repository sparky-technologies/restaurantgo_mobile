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

export interface LoginPayload {
  email: string;
  password: string;
}

export interface ResetPasswordPayload {
  email: string;
}

export interface ForgotPasswordPayload {
  reset_token: string;
  password1: string;
  password2: string;
}

export const register = async (payload: RegisterPayload) => {
  try {
    const response = await fetch(`${baseUrl}/register`, {
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
    const response = await fetch(`${baseUrl}/otp/verify`, {
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
    const response = await fetch(`${baseUrl}/otp/resend`, {
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

export const login = async (payload: LoginPayload) => {
  try {
    const response = await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const resetPassword = async (resetPassword: ResetPasswordPayload) => {
  try {
    const response = await fetch(`${baseUrl}/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resetPassword),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const resetChangePassword = async (pl: ForgotPasswordPayload) => {
  try {
    const response = await fetch(`${baseUrl}/change-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pl),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
