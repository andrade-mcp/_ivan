exports.handler = async (event, context, callback) => {
  
  
  let user = '';
  let password = '';


  if (event.httpMethod === 'POST') {
      try {
        const body = JSON.parse(event.body);

        if (body.length !== undefined) {          
          user = body.user;
          password = body.password;
        }
        
      } catch {
        error = 'A valid JSON must be specified'
      }
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Failed to process POST request' }),
    };
  }
  
  return {
    statusCode: 200,
    body: user + password,
  }; 
 
};

//{
//  "user": "user,
//  "password": "123"
//}