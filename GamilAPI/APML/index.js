const nodemailer = require('nodemailer');
const { google } = require('googleapis');
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Claim Intimation"],"status.keyword":["Open"]}',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w'
  }
};
var data;
axios(config)
.then(function (response) {

  data=response;
})
.catch(function (error) {
  console.log(error);
});
// These id's and secrets should come from .env file.

require('dotenv').config();
const CLIENT_ID = 'xxxxxxxxxxx'
const CLEINT_SECRET = 'xxxxxxx';
const REDIRECT_URI = 'xxxxxxx';
const REFRESH_TOKEN = 'xxxxxxx';

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'data.science@agarwalpackers.com',
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: 'HELLO<data.science@agarwalpackers.com>',
      to: 'tapan.solanki70@gmail.com',
      subject: 'Hello from gmail using API',
      text: 'Hello from gmail email using API',
      html: '<h1>Dear Sir,<br>Please find the below claim intimation and register the claim.<br><table>This is an in transit Damage </h1><img src="https://storage.googleapis.com/fretron-document-bucket/uploads/4052ab24-0543-4cd4-b517-9e78efee4fed/fa410ec7-55af-4f7c-860c-9f8877822f89@AADHAR.jpg?GoogleAccessId=cloud-storage-service@fretron-206223.iam.gserviceaccount.com&Expires=2515125261&Signature=aE%2FVeW%2BwvONbzAT5se%2BxTfWM8%2BrolgDHlfy5%2Fo2nDUZ%2B6ZpARuy2ul1TRl5aIwORA%2Fa7LfawXmUV0jovU1khwjtOBbzJcYPcJJIT8n9MFtuAgOMc2qh1zBVm4vKnOz0FCdvCWbGiVtWEvGINpDnBGv6WDHE0yAZcdgC5pWZSKIzvOSeqxUJ1KkzF6H94K4GRakohPOyJInjwZZgnVQtn1CHwAr7A5xx7sbXKmNU9k48DSeacyfZJ1bE0CvC2rxDiFH5kOgnpz4Tg19JLlM%2FLcY2VZhWXB%2B3MGAWa%2BFzuRSB6e2LyKbFGEkOXd74LcAvQIi1kjxkuAbjobAG7qGl5UA%3D%3D">',
      attachments: [{
        filename: 'image.jpg',
        path: './utils/image.jpg',
        cid: 'image' //my mistake was putting "cid:logo@cid" here! 
   }]
     
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));