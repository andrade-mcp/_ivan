// api.js

exports.handler = async (event, context) => {

    // Add CORS headers
    const headers = {
      'Access-Control-Allow-Origin': '*', // Replace * with the appropriate domain
      'Access-Control-Allow-Headers': 'Content-Type',
    };
    
    if (event.httpMethod === 'POST') {
      try {
        // Parse the incoming JSON payload from the request body
        //const requestBody = JSON.parse(event.body);
  
        // Process the GET request as needed
        const data = require('./data/db.json');
  
        // Return a success response
        return {
          statusCode: 200,
          body: JSON.stringify(data),
        };
      } catch (error) {
        // Return an error response if there was an issue processing the request
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Failed to process POST request' }),
        };
      }
    }
  };