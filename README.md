[![Linkedin](https://img.shields.io/static/v1.svg?logo=linkedin&color=f78A38&labelColor=083468&logoColor=ffffff&style=for-the-badge&label=Linkedin&message=Public)](https://www.linkedin.com/in/eric-ricielle-2aa1ba237/) [![Elestio examples](https://img.shields.io/static/v1.svg?logo=github&color=f78A38&labelColor=083468&logoColor=ffffff&style=for-the-badge&label=github&message=open%20source)](https://github.com/TucanoWeb) [![Whatsapp](https://img.shields.io/static/v1.svg?logo=whatsapp&color=f78A38&labelColor=083468&logoColor=ffffff&style=for-the-badge&label=Whatsapp&message=Tirar%20Dúvidas)](https://api.whatsapp.com/send?phone=5531992936042)

# Azure Function with Identity Manager, KeyVault, and CosmosDB by TucanoWeb with NODEJS

Project made for one of my students, using NODEJS and TS on Azure Platform.

# Get Starter

## Install Dependencies

In the root of the each project, run the command:

```bash
npm install
```

## Create cosmosDB

ON AZURE PLATFORM:

- Create the Resource Group;
- Create Storage Account;
- Create a CosmosDB NoSQL with manual throughtput (low price)

Copy endpoint end cosmos_key.
Copy the connection string of the Storage Account.

## Create Key Vault resource

The Key Vault Resource allow that the app get the environmets without expose your values. In this step, we created secrets with dev sufixe to avoid expose the environments production values.

- Create the key vault and the respectives secrets. Create with DEV sufixe to dev environments. Ex. COSMOSKEYDEV.

## Run Project - api_function

On Azure Platform, create a cosmosDB

- Create the Azure Function Resource in same Resource Group, using the Storage Account created.
- On respective function's menu, click to Settings > Identity. In "System assigned" tab, change the "status" value to "on". Click in "Azure role assignments" and "Add role assignment". Select the Key Vault and await for aproximatelly 5 minutes to refresh permission on the system. When stay ready, the role will appear in this page.
- Create the environmets to production or other mode if you want using the endpoint of the key vault.

Ex.

- environment in the app: COSMOS_ENDPOINT_KV
- production environment in the key vault: COSMOSENDPOINT

create the environment into "environments menu" in the functions, on the azure platform:

COSMOS_ENDPOINT_KV = COSMOSENDPOINT

In the root of the project:

- Paste cosmos endpoint and key into of .env_example and rename the file to .env
- Paste connection string into the file local.settings.json_example and rename the file to local.setting.json

Run the command:

```bash
az login
func azure <name_app> publish <name_function_resource_created>
```
