exports.handler = async (event) => {
    const receipts = [{
        issuer: "Cyrille",
        expenseDate: new Date(),
        description: "Formation",
        amount: 300,
        currency: "EUR",
        location: "Paris"
    }]


    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify(receipts)
    };

    return response;
};
