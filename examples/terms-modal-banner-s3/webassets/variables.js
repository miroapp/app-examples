/* variables.js */
/* eslint-disable no-unused-vars */

var MODAL_URL =
  "https://s3-miro-terms-banner-horea2-125b5310d8ef.s3.amazonaws.com/webassets/modal.html"; // keep the single quotes around the value (e.g. 'https://miro-terms-banner-021ba44a2fc7.s3.eu-central-1.amazonaws.com/webassets/modal.html';)

var S3_RECORD_TERMS_ACCEPTANCE_ENDPOINT_URL =
  "https://p4mgnq49fb.execute-api.us-east-1.amazonaws.com"; // keep the single quotes around the value (e.g. 'https://e4g624kyue.execute-api.eu-central-1.amazonaws.com';)

var S3_BUCKET_BASE_URL =
  "https://s3-miro-terms-banner-horea2-125b5310d8ef.s3.us-east-1.amazonaws.com"; // keep the single quotes around the value (e.g. 'https://miro-terms-banner-021ba44a2fc7.s3.eu-central-1.amazonaws.com';)

var SECONDS_TO_WAIT = 3; // Enter value as number (not string) - Enter value as number (not string) - This is the interval in seconds the app will check if the current user has accepted the terms modal. With the default value (3) the app will check every 3 seconds if the user has accepted the modal until the terms modal has been successfully accepted

var MODAL_WITH = 590; // Enter value as number (not string) - Width of the modal pop-up in pixels - Adjust as desired

var MODAL_HEIGHT = 300; // Enter value as number (not string) - Height of the modal pop-up in pixels - Adjusted as desired
