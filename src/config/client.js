import { createManagementClient } from '@kontent-ai/management-sdk';

const client = createManagementClient({
  environmentId: "Environment ID goes here", // id of your Kontent.ai environment
  apiKey:
    "Management API key goes here", // Content management API token
});

export default client;
