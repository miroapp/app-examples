/* Example of expected payload for the POST request: { "id": "Miro_User_ID" } */

const AWS = require("aws-sdk");

exports.handler = async (event) => {
  const dynamoDB = new AWS.DynamoDB.DocumentClient();
  const tableName = process.env.TABLE_NAME;
  const apiPayload = JSON.parse(event.body);

  const onlyLettersAndNumbers = function (str) {
    return /^[A-Za-z0-9]*$/.test(str);
  };

  const responseHeaders = {
    "Access-Control-Allow-Headers": "Content-Type,Accept,Cache-Control,Pragma",
    "Access-Control-Allow-Origin": "*", // Replace wildcard (*) with your S3 bucket base URL (visible in your AWS SAML CLI Outputs) - See step 2.13 of the PDF guide https://drive.google.com/file/d/13fdsfiTGCBRWSmAv_7BuMBsWfg4_OWlO/view?usp=sharing
    "Access-Control-Allow-Methods": "OPTIONS,POST", // Allow only POST request
    "Content-Type": "application/json",
  };

  if (Object.getOwnPropertyDescriptor(apiPayload, "id")) {
    const userId = apiPayload.id.toString();
    const isValidUserId = onlyLettersAndNumbers(userId);

    if (!isValidUserId || !userId) {
      /* Returning a 409 error if the value of the "id" parameter posted contains characters other than a string with only letters and numbers */
      return {
        statusCode: 409,
        headers: responseHeaders,
        body: JSON.stringify({ error: "Invalid Data" }),
      };
    }

    const params = {
      TableName: tableName,
      Key: { id: userId },
      UpdateExpression: "set hasAcceptedTerms = :hasAcceptedTerms",
      ExpressionAttributeValues: {
        ":hasAcceptedTerms": "yes",
      },
      ReturnValues: "UPDATED_NEW",
    };

    try {
      await dynamoDB.update(params).promise();
      return {
        statusCode: 200,
        //body: JSON.stringify(result.Attributes)
        headers: responseHeaders,
        body: JSON.stringify({ result: "success" }),
      };
    } catch (error) {
      console.error("Error updating item:", error);

      /* Returning a 500 error for any other errors */
      return {
        statusCode: 500,
        headers: responseHeaders,
        body: JSON.stringify({ error: "Internal Server Error" }),
      };
    }
  } else {
    /* Returning a 500 error if the "id" parameter was not passed in the posted payload */
    return {
      statusCode: 415,
      headers: responseHeaders,
      body: JSON.stringify({ error: "Invalid Request" }),
    };
  }
};
