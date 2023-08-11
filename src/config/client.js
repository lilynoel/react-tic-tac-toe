import { createManagementClient } from "@kontent-ai/management-sdk";

const client = createManagementClient({
  environmentId: "add environment id here", // id of your Kontent.ai environment
  apiKey: "add management api key here", // Kontent management API token
});

export default client;
