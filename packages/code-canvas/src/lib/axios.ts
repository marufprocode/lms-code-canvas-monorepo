import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
const isServer = typeof window === "undefined";

export const api = axios.create({
  baseURL: baseURL,
  timeout: 60000,
  headers: {
    Accept: "application/json",
    post: {
      ["Content-Type"]: "application/json",
      ["Access-Control-Allow-Credentials"]: true,
    },
  },
  withCredentials: true,
});

api.interceptors.response.use(
  function (response) {
    return response?.data;
  },
  function (error) {
    let responseObject: {
      name: string;
      message: string;
      cause: string;
      statusCode: number;
      success: boolean;
    };
    if (error?.response) {
      responseObject = {
        statusCode: error?.response?.data?.statusCode || 500,
        success: false,
        message: error?.response?.data?.message || "Something went wrong",
        name:error?.response?.name,
        cause: error?.response?.cause,
      };
    } else {
      responseObject = {
        statusCode: error?.code || 500,
        success: false,
        message: error?.message || "Something went wrong",
        name:"Server Error",
        cause:"Network Error"
      };
    }
    return Promise.reject(responseObject);
  }
);

// api.interceptors.request.use(async (config) => {
//   if (isServer) {
//     const { cookies } = await import("next/headers"),
//       token = cookies().get("token")?.value;

//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//   } else {
//     const token = document.cookie.replace(
//       /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
//       "$1"
//     );

//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//   }

//   return config;
// });
