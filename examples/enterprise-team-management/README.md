# Miro Enterprise Team Management

Manage teams and organizations within Miro using Miro's REST API. This app uses Node.js.

ℹ️ This example requires an Enterprise plan subscription and an Enterprise Team account.

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10800544/6096bd94-b0a2-46bf-a01f-ba9d6a64adc6

# 📒 Table of Contents

- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [License](#license)

# ⚙️ Included Features <a name="features"></a>

- [Miro REST API](https://developers.miro.com/reference/api-reference)

  - /GET [https://api.miro.com/v1/oauth-token](https://developers.miro.com/reference/get-access-token-context)

- [Miro Enterprise REST APIs](https://developers.miro.com/reference/enterprise-create-team)
  - /GET [https://api.miro.com/v2/orgs/{org_id}](https://developers.miro.com/reference/enterprise-get-organization)
  <!-- - /GET [https://api.miro.com/v2/teams_settings/{team_id}](https://developers.miro.com/reference/enterprise-get-team-settings) -->
  - /GET [https://api.miro.com/v2/orgs/{org_id}/teams] i.e. List Teams API (https://developers.miro.com/reference/enterprise-get-teams)
  - /GET [https://api.miro.com/v2/orgs/{org_id}/teams/{team_id}/members] i.e. List Team Members API (https://developers.miro.com/reference/enterprise-get-team-members)
  - /POST [https://api.miro.com/v2/orgs/{org_id}/teams] i.e. Create Team API (https://developers.miro.com/reference/enterprise-create-team)
  - /POST [https://api.miro.com/v2/orgs/{org_id}/teams/{team_id}/members] i.e. Invite Team Members API (https://developers.miro.com/reference/enterprise-invite-team-member)
  - /PATCH [https://api.miro.com/v2/orgs/{org_id}/teams/{team_id}/members/{member_id}] i.e. Update Team Members API (https://developers.miro.com/reference/enterprise-update-team-member)
  - /DELETE [https://api.miro.com/v2/orgs/{org_id}/teams/{team_id}/members/{member_id}] i.e. Delete team member from team API (https://developers.miro.com/reference/enterprise-delete-team-member)
  - /DELETE [https://api.miro.com/v2/orgs/{org_id}/teams/{team_id}] i.e. Delete team API (https://developers.miro.com/reference/enterprise-delete-team)
  - /POST [https://api.miro.com/v2/boards] i.e. Create Board API (https://developers.miro.com/reference/create-board)
  - /POST [https://api.miro.com/v2/boards/{board_id}/sticky_notes] i.e. Create Sticky Note API (https://developers.miro.com/reference/create-sticky-note-item)
  - /GET [https://api.miro.com/v2/orgs/{org_id}/teams] i.e. List Teams API (https://developers.miro.com/reference/enterprise-get-teams)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [NodeJS](https://nodejs.org/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- Your account has an [Enterprise plan](https://help.miro.com/hc/en-us/articles/360017730433-Enterprise-Plan).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has an [Enterprise Developer team](https://help.miro.com/hc/en-us/articles/4766759572114-Enterprise-Developer-teams).
- Your development environment includes [Node.js 14.13](https://nodejs.org/en/download) or a later version.

# 🏃🏽‍♂️ Run the app locally <a name="run"></a>

1. Open the project and create a `.env` file in the root directory
2. Inside the `.env` file, specify variable `ACCESS_TOKEN` and pass the value of the token generated in **Step 5**.
   > ⚠️ You will need to install your app under an Enterprise team in order to access Miro's Enterprise APIs.⚠️

```
ACCESS_TOKEN="{YOUR_ACCESS_TOKEN}"
```

3. Run `npm install` to install dependencies.
4. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \

In the app manifest editor, configure the app as follows and then click save:

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: Enterprise Team Management
sdkVersion: SDK_V2
sdkUri: http://localhost:3000
scopes:
  - boards:read
  - boards:write
  - organizations:read
  - organizations:teams:write
  - organizations:teams:read
  - team:read
  - team:write
```

5. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below. This will generate an access_token.

> ⚠️ We recommend to install your app on an [Enterprise Developer Team](https://help.miro.com/hc/en-us/articles/4766759572114-Enterprise-Developer-teams) while you are developing or testing apps for use with Enterprise endpoints.⚠️

https://github.com/horeaporutiu/app-examples-template/assets/10428517/456108e8-7d9b-4067-94bb-e5511c736a23

6. Paste the value of the access_token in the variable `ACCESS_TOKEN`, in the `.env` file created in **Step 2.**
7. Open the script in your code editor
8. Open your terminal and run `node index.js`
   > Your script will run using the access_token provided by your Enterprise installation in Step 5 and the terminal will output the team management details fulfilled by Miro's REST APIs.

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── index.js <-- NodeJS script
├── .env <-- create this when you open the script
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
