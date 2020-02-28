exports.handler = async (event) => {
    const expense = JSON.parse(event.body);
    const receipt = {
        id: event.pathParameters.id,
        issuer: expense.issuer,
        expenseDate: new Date(expense.expenseDate),
        description: expense.description,
        amount: expense.amount,
        currency: expense.currency,
        location: expense.location
    }


    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(receipt),
    };

    return response;
};
