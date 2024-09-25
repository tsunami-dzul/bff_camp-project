import api from '../../api/API';

export const authService = async (username: string, password: string) => {
  try {
    const data = await api.post('integration/admin/token', { username, password });

    return data;
  } catch (error) {
    throw error;
  }
};
