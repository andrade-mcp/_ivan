//  Declare spreadsheet and values to append
const spreadsheetId = "SECRET";

//  build data for a POST request
const baseUrl = "https://pushtogsheet.herokuapp.com";
const query = `SECRET`;
const url = new URL(
  `/proxy/google-sheets/${spreadsheetId}/values/A1:append?${query}`,
  baseUrl
);

module.exports.handler = async (event, context) => {
  try {
    const dataHanlder = event.body;
    const data = await JSON.parse(dataHanlder);
    const {
      firstName,
      lastName,
      email,
      company,
      empRange,
      phone,
      leadCountry,
      signupType,
      timezone,
      utmSource,
      utmMedium,
      utmCampaign,
      utmTerm,
      utmContent,
    } = data;
    const excelArray = [
      [
        firstName,
        lastName,
        email,
        company,
        phone,
        empRange,
        timezone,
        leadCountry,
        signupType,
        utmSource,
        utmMedium,
        utmCampaign,
        utmTerm,
        utmContent,
      ],
    ];
    const excelString = await JSON.stringify({ values: excelArray });
    const config = {
      headers: {
        "Pizzly-Auth-Id": "SECRET",
        // "Content-Type": "text/plain",
      },
    };
    const res = axios.post(url.href, excelString, config);
    console.log("POST request status code", res.status);
  } catch (error) {
    console.log(error);
  }
};