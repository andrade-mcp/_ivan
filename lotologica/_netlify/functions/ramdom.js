// PAYLOAD
// { "length": 133 }



const generate = length => {
  let result = ''
  const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}
exports.handler = async (event, context, callback) => {
  let length = 5;
  let error = '';

  if (event.httpMethod === 'POST') {
      try {
        const body = JSON.parse(event.body);
        if (body.length !== undefined) {
            length = body.length;
        } 
      } catch {
        error = 'A valid JSON must be specified'
      }
  } else {
    length = event.path.split('/').reverse()[0];
  }

  if (!isNaN(length)) length = Number(length);

  if (error) {
    callback(new Error(error))
  } else {
    callback(null, {
        statusCode: 200,
        body: error ? error : generate(length)
    })
  }
}