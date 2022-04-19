const axios = require("axios");
const fs = require("fs");
const localServerHost = require("../config/localServerHost");
const Token = require("../models/Token");

const requestWithTokenAndData = async (url, body) => {
  try {
    const data = readAccessToken();

    isBlank(data);

    const result = await axios.post(localServerHost + url, body, {
      headers: {
        authorization: data.accessToken,
      },
    });

    return result;
  } catch (error) {
    try {
      const token = new Token();
      const getToken = await token.tokenIssue();
      writeAccessToken({ accessToken: getToken });
      const data = readAccessToken();
      const result = await axios.post(localServerHost + url, body, {
        headers: {
          authorization: data.accessToken,
        },
      });

      return result;
    } catch (error) {
      console.log(error);
    }
  }
};

function isBlank(dataBuffer) {
  const data = JSON.stringify(dataBuffer);
  if (data === "" || data == "{}") {
    const writeJson = {
      accessToken: "@#$%^&*()_",
    };
    writeAccessToken(writeJson);
    console.log(writeJson);
  }
}

function readAccessToken() {
  return JSON.parse(fs.readFileSync(__dirname + "/accessToken.json", "utf8"));
}

function writeAccessToken(data) {
  fs.writeFileSync(__dirname + "/accessToken.json", JSON.stringify(data));
}

module.exports = requestWithTokenAndData;
