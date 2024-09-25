import api from '../../api/API';

export const authService = async () => {
  try {
    const clientId = process.env.CTP_CLIENT_ID;
    const clientSecret = process.env.CTP_CLIENT_SECRET;
    const scope = process.env.CTP_SCOPES;
    const region = process.env.REGION;

    const data = await api.post(
      `https://${clientId}:${clientSecret}@auth.${region}.aws.commercetools.com/oauth/token?grant_type=client_credentials&scope=${scope}`
    );

    return data;
  } catch (error) {
    throw error;
  }
};
