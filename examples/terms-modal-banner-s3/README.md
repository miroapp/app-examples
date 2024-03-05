# Miro Terms Modal Banner App (Web-SDK V2 & AWS S3)

This app creates a custom modal banner on your Miro boards that you can show to your users/attendees with any desired content and/or call to actions. It is typically used to accept terms and agreements before using a Miro board.

<b> To understand how to set up the app (including AWS resources needed to run the app) see the
[developer tutorial](https://developers.miro.com/docs/display-bannermodal-on-a-miro-board-using-aws-s3) on Miro's Developer documentation.</b>

💸 **Important**: this application uses various AWS services and there are costs associated with these services after the Free Tier usage - please see the [AWS Pricing page](https://aws.amazon.com/pricing/) for details. You are responsible for any AWS costs incurred. No warranty is implied in this example. 💸

# 👨🏻‍💻 App Demo

https://github.com/miroapp/app-examples/assets/10428517/16e009f7-70f2-435b-bd61-f11845ad3197

# 📒 Table of Contents

- [Support](#support)
- [Included Features](#features)
- [Tools and Technologies](#tools)
- [Prerequisites](#prerequisites)
- [Associated Developer Tutorial](#tutorial)
- [Run the app locally](#run)
- [Folder Structure](#folder)
- [Contributing](#contributing)
- [License](#license)

# 🙋🏻 Support <a name="features"></a>

If you have any questions or need assistance setting up this application, please reach out to your Miro Customer Success Manager or dedicated Miro Solutions Engineer.

# ⚙️ Included Features <a name="features"></a>

- [Miro Web SDK](https://developers.miro.com/docs/web-sdk-reference)
  - [miro.board.ui.canOpenModal()](https://developers.miro.com/docs/websdk-reference-ui#canopenmodal)
  - [miro.board.ui.openModal()](https://developers.miro.com/docs/websdk-reference-ui#openmodal)
  - [miro.board.ui.closeModal()](https://developers.miro.com/docs/websdk-reference-ui#closemodal)
  - [miro.board.getUserInfo()](https://developers.miro.com/docs/websdk-reference-board#getuserinfo)

# 🛠️ Tools and Technologies <a name="tools"></a>

- [AWS CLI](https://aws.amazon.com/cli/)
- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
- [AWS CloudFormation](https://aws.amazon.com/cloudformation/)
- [AWS S3](https://aws.amazon.com/s3/)
- [AWS Lambda](https://aws.amazon.com/lambda/)
- [AWS API Gateway](https://aws.amazon.com/api-gateway/)

# ✅ Prerequisites <a name="prerequisites"></a>

- You have a [Miro account](https://miro.com/signup/).
- You're [signed in to Miro](https://miro.com/login/).
- Your Miro account has a [Developer team](https://developers.miro.com/docs/create-a-developer-team).
- [NodeJS 16.x installed](https://nodejs.org/en/download/)
- [AWS CLI](https://aws.amazon.com/cli/) already configured with Administrator permission
- [AWS SAM CLI installed](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) - minimum version 0.48.

# 📖 Associated Developer Tutorial <a name="tutorial"></a>

Using AWS S3 you can host your html files and serve them as regular web pages so they can load within Miro. In addition, you can also use AWS S3 to add custom functionality to your Miro app to track which users have already accepted the modal, so that the modal does not re-appear again for those users. In this guide we will guide you on how to achieve this functionality using Miro and AWS S3.

> See the [developer tutorial](https://developers.miro.com/docs/display-bannermodal-on-a-miro-board-using-aws-s3) on Miro's Developer documentation.

# 🏃🏽‍♂️ Run the app using AWS S3 <a name="run"></a>

Once you have finished all of the steps related to AWS in the [developer tutorial](https://developers.miro.com/docs/display-bannermodal-on-a-miro-board-using-aws-s3), you can then create the Miro app.

1. In your new Miro app settings, add in the `App URL`. It should end with `webassets/app.html`.
2. Open the [app manifest editor](https://developers.miro.com/docs/manually-create-an-app#step-2-configure-your-app-in-miro) by clicking **Edit in Manifest**. \
   In the app manifest editor, configure the app as follows <b> ⚠️ Note: you will need to change your sdkUri to be your app.html which is hosted in the `webassets` folder of your S3 bucket. Mine is just shown as an example </b> and then click save:

```yaml
# See https://developers.miro.com/docs/app-manifest on how to use this
appName: s3-modal-banner
sdkVersion: SDK_V2
sdkUri: >-
  https://s3-miro-terms-banner-12345.s3.amazonaws.com/webassets/app.html
scopes:
  - identity:read
```

3. Go back to your app home page, and under the `Permissions` section, you will see a blue button that says `Install app and get OAuth token`. Click that button. Then click on `Add` as shown in the video below. <b>In the video we install a different app, but the process is the same regardless of the app.</b>

> ⚠️ We recommend to install your app on a [developer team](https://developers.miro.com/docs/create-a-developer-team) while you are developing or testing apps.⚠️

https://github.com/miroapp/app-examples/assets/10428517/43922ea1-d619-4480-af23-029a1a4e67d8

4. Go to the team in which you installed the app, and open a board.
5. Once you open the board, the modal should appear within a few seconds.
6. If you click accept, you should see a checkmark and then you should not see the modal again when refreshing the page or opening a new board
   on that team.
7. You can also check your AWS S3 bucket and see that a new folder `users` has been added. The userID of the user which clicked on `accept` will
   be added to the `users` folder in AWS S3.

🎉 That's it. Great job! 🎉

# 🗂️ Folder structure <a name="folder"></a>

```
.
├── getSignedURL <-- Source code for the serverless backend.
│  └── app.js    // The code to add userID to S3 bucket once user accepts terms.
├── webassets <-- HTML and JavaScript files for the Miro app.
│  ├── app.html // The code which uses Miro WebSDK to open the modal for the user.
│  └── modal.html // The code which serves as the UI for the terms which the user will accept.
├── template.yaml <-- The yaml code used to generate AWS resources via AWS SAM.
```

# 🫱🏻‍🫲🏽 Contributing <a name="contributing"></a>

If you want to contribute to this example, or any other Miro Open Source project, please review [Miro's contributing guide](https://github.com/miroapp/app-examples/blob/main/CONTRIBUTING.md).

# 🪪 License <a name="license"></a>

[MIT License](https://github.com/miroapp/app-examples/blob/main/LICENSE).
