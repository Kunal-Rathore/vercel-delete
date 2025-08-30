
#  Vercel Deployment Cleanup Script

This repository contains a Node.js script for cleaning up old deployments on Vercel, keeping only the most recent deployments to manage your deployment history.

  

---

  

##  📁 Project Structure

```text

vercel-delete/

├── script.js

├── package.json

└── .env

```

  

---

  

##  ✨ Features

- Automatically deletes old Vercel deployments

- Configurable limit for number of deployments to keep

- Supports both personal and team projects

- Simple setup with environment variables

  

---

  

##  🚀 Quick Start

  

###  1) Install Dependencies

```bash

npm install

```

  

###  2) Configure Environment Variables

Create a `.env` file with the following variables:

```env

TOKEN=your_vercel_api_token

projectName=your_vercel_project_name

```

  

###  3) Get Vercel API Token

- Go to your Vercel account settings

- Navigate to the "Tokens" section

- Create a new token with deployment read and write permissions

  

###  4) Run the Script

```bash

node script.js

```

  

---

  

##  ⚙️ Configuration

The script is configured with the following options in `script.js`:

  

```javascript

const token =  process.env.TOKEN;  // Vercel API token

const project =  process.env.projectName;  // Vercel project name

const team =  null;  // Set to team ID if using a team project

const limitToKeep =  5;  // Number of recent deployments to keep

```

  

---

  

##  🔧 Customization

You can customize the script by modifying these variables:

-  **team**: Set to your team ID if managing a team project

-  **limitToKeep**: Change this number to keep more or fewer deployments

  

---

  

##  📝 API Reference

This script uses the Vercel API endpoints:

-  `GET /v6/deployments` → Retrieves deployment list

-  `DELETE /v13/deployments/{id}` → Deletes a specific deployment

  

---

  

##  🛡️ Security Notes

- Keep your Vercel API token secure and never commit it to version control

- The token requires both **read** and **delete** permissions for deployments

- Regularly review and rotate your API tokens

  

---

  

##  📄 License

MIT
