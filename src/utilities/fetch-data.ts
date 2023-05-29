import { cacheType } from "@/types/fetch-data-class-type";

class fetchAPI {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get<T>(endpoint: string, cache:cacheType = 'no-cache', params?: object, headers?: HeadersInit): Promise<T> {
    const url = this.baseURL + endpoint;
    const response = await fetch(url, {
      method: 'GET',
      headers: headers,
      cache:cache
    });
    return response.json();
  }

  async post<T>(endpoint: string, data?: object, headers?: HeadersInit): Promise<T> {
    const url = this.baseURL + endpoint;
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async put<T>(endpoint: string, data?: object, headers?: HeadersInit): Promise<T> {
    const url = this.baseURL + endpoint;
    const response = await fetch(url, {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async patch<T>(endpoint: string, data?: object, headers?: HeadersInit): Promise<T> {
    const url = this.baseURL + endpoint;
    const response = await fetch(url, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async delete<T>(endpoint: string, headers?: HeadersInit): Promise<T> {
    const url = this.baseURL + endpoint;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: headers,
    });
    return response.json();
  }
};

const API = new fetchAPI(`https://hotel-hub-server.vercel.app`);

export default API;