class API {
  private url = process.env.MAGENTO_API;

  async get<T>(path: string, bearerToken?: string): Promise<T> {
    try {
      const response = await fetch(`${this.url}/${path}`, {
        method: 'GET',
        headers: {
          Authorization: bearerToken ?? '',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      return data;
    } catch (error) {
      throw new Error('There were an unexpcted error');
    }
  }

  async post<T>(path: string, payload: any, bearerToken?: string): Promise<T> {
    try {
      const response = await fetch(`${this.url}/${path}`, {
        method: 'POST',
        headers: {
          Authorization: bearerToken ?? '',
          'Content-Type': 'application/json',
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
