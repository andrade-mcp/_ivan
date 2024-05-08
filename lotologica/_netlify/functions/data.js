// PAYLOAD
// { "length": 133 }
// {"user": "user","password": "123"}


  exports.handler = async (event, context, callback) => {

    // Add CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*', // Replace * with the appropriate domain
        'Access-Control-Allow-Headers': 'Content-Type',
        "Accept": "application/json, text/plain, */*",
        'Content-Type': 'application/json'
    };

    let length = '';
    let error = '';
  

    
    if (event.httpMethod === 'POST') {
        try {
          const body = JSON.parse(event.body);
          if (body.user !== undefined) {
            user = body.user;
          } 
        } catch {
          error = 'A valid JSON must be specified'
        }
    } 
  
    if (!isNaN(length)) length = Number(length);
  
    if (error) {
      callback(new Error(error))
    } else {
      callback(null, {
          statusCode: 200,
          body: error ? error : JSON.stringify(body)
      })
    }
  }