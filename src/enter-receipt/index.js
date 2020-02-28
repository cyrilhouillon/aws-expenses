const AWS = require('aws-sdk');
const uuid = require('uuid/v4');

exports.handler = async (event) => {
    console.log("bonjour!");
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const expense = JSON.parse(event.body);
    console.log("requete parsée!");
    const receipt = {
        expenseId: uuid(),
        issuer: expense.issuer,
        expanseDate: new Date().toISOString(),
        description: expense.description,
        amount: expense.amount,
        currency: expense.currency,
        location: expense.location
    }
    console.log("objet créé!");
    await dynamoDb.put({
        TableName: "expenses",
        Item: receipt
    }).promise();
    console.log("put !");

    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(receipt),
    };

    return response;
};
