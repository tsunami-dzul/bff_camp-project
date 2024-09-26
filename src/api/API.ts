class API {
  private url: string | undefined = '';

  constructor() {
    const bffTool = process.env.BFF_TOOL;

    if (bffTool === 'magento') {
      this.url = process.env.MAGENTO_API;
    } else {
      const partialUrl = process.env.CTP_API_URL?.replace('region', process.env.CTP_REGION ?? '');

      this.url = `${partialUrl}/${process.env.CTP_PROJECT_KEY}`;
    }
  }

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

  async post<T>(path: string, payload?: any, bearerToken?: string): Promise<T> {
    try {
      if (path.indexOf('@') >= 0) {
        this.url = path;
      }

      const response = await fetch(`${this.url}/${path}`, {
        method: 'POST',
        headers: {
          Authorization: bearerToken ?? '',
          'Content-Type': 'application/json; charset=utf-8',
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

  async put<T>(path: string, payload?: any, bearerToken?: string): Promise<T> {
    try {
      const response = await fetch(`${this.url}/${path}`, {
        method: 'PUT',
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

  async delete<T>(path: string, bearerToken?: string): Promise<T> {
    try {
      const response = await fetch(`${this.url}/${path}`, {
        method: 'DELETE',
        headers: {
          Authorization: bearerToken ?? '',
          'Content-Type': 'application/json',
        },
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
