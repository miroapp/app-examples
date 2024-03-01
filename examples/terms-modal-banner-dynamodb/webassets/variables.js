/* variables.js */
/* eslint-disable no-unused-vars */

var MODAL_URL = 'replace with your "modal.html" URL from AWS S3'; // keep the single quotes around the value (e.g. 'https://miro-terms-banner-021ba44a2fc7.s3.eu-central-1.amazonaws.com/webassets/modal.html';)

var API_ENDPOINT_BASE_URL =
  'replace with the value of "ApiBaseURL" from your AWS SAM CLI Output'; // keep the single quotes around the value (e.g. 'https://e4g624kyue.execute-api.eu-central-1.amazonaws.com';)

var SECONDS_TO_WAIT = 3; // Enter value as number (not string) - Enter value as number (not string) - This is the interval in seconds the app will check if the current user has accepted the terms modal. With the default value (3) the app will check every 3 seconds if the user has accepted the modal until the terms modal has been successfully accepted

var MODAL_WITH = 590; // Enter value as number (not string) - Width of the modal pop-up in pixels - Adjust as desired

var MODAL_HEIGHT = 300; // Enter value as number (not string) - Height of the modal pop-up in pixels - Adjusted as desired
