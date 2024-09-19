import { IHeader } from '../models/header.model';

class API {
  private url = process.env.MAGENTO_API;

  async get(path: string, headers?: IHeader) {
    try {
      const response = await fetch(`${this.url}/${path}`, {
        method: 'GET',
        headers: {
          Authorization: headers?.Authorization ?? '',
          'Content-Type': headers?.ContentType ?? 'application/json',
        },
      });
      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error('There were an unexpcted error');
    }
  }

  async post(path: string, payload: any, headers?: IHeader) {
    try {
      const response = await fetch(`${this.url}/${path}`, {
        method: 'POST',
        headers: {
          Authorization: headers?.Authorization ?? '',
          'Content-Type': headers?.ContentType ?? 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);

      throw new Error('There were an unexpcted error');
    }
  }
}

const api = new API();

export default api;
