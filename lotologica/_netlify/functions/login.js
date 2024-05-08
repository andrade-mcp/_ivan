exports.handler = async (event, context) => {
    if (event.httpMethod === 'POST') {

        return {
          statusCode: 200,
          body: '{"codigo":1,"mensagem":"Logado com sucesso, redirecionando...","url":"\/painel"}'
        };     

    }
  };