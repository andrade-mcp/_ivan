exports.handler = async (event, context) => {
    if (event.httpMethod === 'GET') {

        return {
          statusCode: 200,
          body: '{"saldo":"R$ 19,00","saldoFloat":19}'
        };     

    }
  };