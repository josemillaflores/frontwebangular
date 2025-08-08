export const environment = {
  baseUrl: 'https://webapp-josemilla-fracf9hce9azcdhv.eastus2-01.azurewebsites.net/',
  production: true,
  msalConfig: {
    auth: {
      clientId: 'a765ada0-cb53-496e-a7b1-5401c8bd632c',
      authority: 'https://login.microsoftonline.com/2c41a349-9d15-499e-89e9-25131a40b7df',
    },
  },
  apiConfig: {
    scopes: ['user.read'],
    uri: 'https://graph.microsoft.com/v1.0/me',
  },
};
