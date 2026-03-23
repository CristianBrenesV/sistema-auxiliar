export interface LoginResponse {
  success: boolean;
  message?: string;
}

export const authService = {
  login: async (usuario: string, contraseña: string): Promise<LoginResponse> => {
    if (usuario === "admin" && contraseña === "123") {
      return { success: true };
    }
    return { success: false, message: "Usuario y/o contraseña incorrectos." };
  }
};