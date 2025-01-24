import { CosmosClient } from "@azure/cosmos";
import { DefaultAzureCredential } from "@azure/identity";
import { SecretClient } from "@azure/keyvault-secrets";
import * as dotenv from "dotenv";
dotenv.config();

const keyVaultName = process.env.NAME_KEY_VAULT; // Nome do Key Vault
const keyVaultUrl = `https://${keyVaultName}.vault.azure.net/`; // URL do Key Vault

const credential = new DefaultAzureCredential();
const secretClient = new SecretClient(keyVaultUrl, credential);

// Função para obter os segredos do Key Vault
async function getConfig() {
  try {
    const endpointSecret = await secretClient.getSecret(process.env.COSMOS_ENDPOINT_KV);
    const keySecret = await secretClient.getSecret(process.env.COSMOS_KEY_KV);

    return {
      endpoint: endpointSecret.value || "",
      key: keySecret.value || "",
    };
  } catch (error) {
    console.error("Erro ao buscar segredos do Key Vault:", error.message);
    throw new Error("Falha ao obter credenciais do Azure Cosmos DB.");
  }
}

const client = async () => {
  const config = await getConfig();
  const instance = new CosmosClient({
    key: config.key,
    endpoint: config.endpoint,
  });
  return instance;
};

export default client;
