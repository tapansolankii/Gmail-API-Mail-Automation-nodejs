  const CLIENT_ID = 'xxxxxxxxxxx'
  const CLEINT_SECRET = 'xxxxxxx';
  const REDIRECT_URI = 'xxxxxxx';
  const REFRESH_TOKEN = 'xxxxxxx';
var axios = require('axios');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
setInterval(function(){ 
var config2 = {
  method: 'get',
  url: 'https://script.google.com/macros/s/AKfycbzgfpKEpxKYUvjvoIGbCCPqBM4nQ7OvSLPHC7TWpKslIWd4NgciLSaGNE6p3kFt_azx/exec?action=getUser',
  headers: { 
    'Cookie': 'NID=511=VxXq6TKWzp-4tGAxp2Hn7PZ42hp1Qq4X_pcoh2vRIGH3zf9XaDG6Xl-nbiDThg7mACrtkVM1C2TsdYCQzNA1WmFOK8Amgv94tZLOkpGdV3AAve3HsbkPA5v8AL4TACw84oRbhzICoxbp4v6PMsnJe6E1JuDeTW0GJIGRTiHDOjo'
  }
};


var data = JSON.stringify({
  "filters": {
    "consigner": [
      "SHPL- KOLKATA AIRPORT- SIEMENS HEALTHCARE PVT.LTD.",
      "SHPL- CHENNAI SEAPORT- SIEMENS HEALTHCARE PVT.LTD.",
      "SHPL- DELHI AIRPORT- SIEMENS HEALTHCARE PVT.LTD.",
      "SHPL - APML BHIWANDI- SIEMENS HEALTHCARE PVT LTD",
      "SHPL- BANGALORE AIRPORT- SIEMENS HEALTHCARE PVT.LTD.",
      "SHPL-APML CHENNAI- SIEMENS HEALTHCARE PVT.LTD.",
      "SHPL-KOLKATA WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.",
      "SHPL-BANGALORE WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.",
      "SHPL-CHENNAI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.",
      "SHPL-DELHI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.",
      "SHPL - NAVA SHEVA- SIEMENS HEALTHCARE PVT LTD",
      "SHPL- KOLKATA SEAPORT- SIEMENS HEALTHCARE PVT.LTD.",
      "SHPL- CHENNAI AIRPORT- SIEMENS HEALTHCARE PVT.LTD",
      "SHPL - BGR WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD",
      "SHPL-APML BANGALORE- SIEMENS HEALTHCARE PVT.LTD.",
      "SHPL - APML CHOWK - SIEMENS HEALTHCARE PVT LTD",
      "SHPL - MUMBAI AIRPORT - SIEMENS HEALTHCARE PVT LTD",
      "SHPL - PRESS METAL COMPANY - SIEMENS HEALTHCARE PVT. LTD.",
      "SHPL - RAJLAXMI LOGISTICS PARK- SIEMENS HEALTHCARE PVT LTD"
    ],
    "status": [
      "OPEN"
    ]
  },
  "limit": 100
});

var config1 = {
  method: 'post',
  url: 'https://apis.fretron.com/automate/autoapi/run/255ab0db-70ed-4933-a0cc-b30b67b70955',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ3OTg0MjYsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiNDA1MmFiMjQtMDU0My00Y2Q0LWI1MTctOWU3OGVmZWU0ZmVkIiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.zY0sqVbgvbLMGVDu9MVpDqs90S4odkOvq6vgv4Zhz_Q', 
    'Content-Type': 'application/json'
  },
  data : data
};
// var data1;
// data1 = data1.filter(obj => obj.OrderNo === 'FRSO0001788');
// data1 = response.data.data.filter(obj => obj.orderNumber === 'FRSO0001788');
var data;
var data1
var ticketArray1=[];
axios(config1)
.then(function (response) {
  //  console.log(response.data);
  data=response.data.data.map(x=>(x.orderNumber));
  for(let i=0;i<data.length;i++){
    ticketArray1.push(data[i])
    
 }
//  console.log(ticketArray1,"allllllll")
 
 axios(config2)
    .then(function (response) {
      array2=[]
      

      for(var j=0;j<response.data.length;j++){
        array2.push(response.data[j].DATA)
      }
      // console.log(array2,"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
     
      var array3 = ticketArray1.filter(function(obj) { return array2.indexOf(obj) == -1; });  
      // console.log(array3,"yehehhheheheh")

      for(let j=0;j<array3.length;j++){
        var data555 = JSON.stringify({
          "DATA": array3[j],
          "status":"resolved"
        });
        console.log(array3[j],"wtf")
        
        
         
        ///////////////////////////////// console.log(array3,"ewdnbefbueb")

        var data = JSON.stringify({
          "filters": {
            "consigner": [
              "SHPL- KOLKATA AIRPORT- SIEMENS HEALTHCARE PVT.LTD.",
              "SHPL- CHENNAI SEAPORT- SIEMENS HEALTHCARE PVT.LTD.",
              "SHPL- DELHI AIRPORT- SIEMENS HEALTHCARE PVT.LTD.",
              "SHPL - APML BHIWANDI- SIEMENS HEALTHCARE PVT LTD",
              "SHPL- BANGALORE AIRPORT- SIEMENS HEALTHCARE PVT.LTD.",
              "SHPL-APML CHENNAI- SIEMENS HEALTHCARE PVT.LTD.",
              "SHPL-KOLKATA WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.",
              "SHPL-BANGALORE WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.",
              "SHPL-CHENNAI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.",
              "SHPL-DELHI WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD.",
              "SHPL - NAVA SHEVA- SIEMENS HEALTHCARE PVT LTD",
              "SHPL- KOLKATA SEAPORT- SIEMENS HEALTHCARE PVT.LTD.",
              "SHPL- CHENNAI AIRPORT- SIEMENS HEALTHCARE PVT.LTD",
              "SHPL - BGR WAREHOUSE- SIEMENS HEALTHCARE PVT.LTD",
              "SHPL-APML BANGALORE- SIEMENS HEALTHCARE PVT.LTD.",
              "SHPL - APML CHOWK - SIEMENS HEALTHCARE PVT LTD",
              "SHPL - MUMBAI AIRPORT - SIEMENS HEALTHCARE PVT LTD",
              "SHPL - PRESS METAL COMPANY - SIEMENS HEALTHCARE PVT. LTD.",
              "SHPL - RAJLAXMI LOGISTICS PARK- SIEMENS HEALTHCARE PVT LTD"
            ],
            "status": [
              "OPEN"
            ]
          },
          "limit": 20
        });
        
        var config5 = {
          method: 'post',
          url: 'https://apis.fretron.com/automate/autoapi/run/255ab0db-70ed-4933-a0cc-b30b67b70955',
          headers: { 
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ3OTg0MjYsInVzZXJJZCI6ImE0MmU1MzljLTg4ZjMtNDJjZi1hMWU3LWQxM2UwYjYwODMzZCIsImVtYWlsIjoic3lzdGVtX2ludGVncmF0aW9uQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiOTAwMDAwMDAwMCIsIm9yZ0lkIjoiNDA1MmFiMjQtMDU0My00Y2Q0LWI1MTctOWU3OGVmZWU0ZmVkIiwibmFtZSI6IlN5c3RlbSBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.zY0sqVbgvbLMGVDu9MVpDqs90S4odkOvq6vgv4Zhz_Q', 
            'Content-Type': 'application/json'
          },
          data : data
        };
        axios(config5)
        .then(function (response) {
          var data1;
         data1 = response.data.data.filter(obj => obj.orderNumber === array3[j])[0];
        //  console.log(data1);
         var orderNumber = data1.orderNumber;/////////////////////////orderNumber
         var b = data1.orderDate;
         var orderdate = prettyDate(new Date(b));////////////////////////////////OrderDATE

         var externalId = data1.externalId////////////////////////////////EXternal ID

         var objects = data1.lineItems
        //  console.log(data1)
        const dataArray = [];
         for (const element of objects) {
          a=(`Consigner:- ${element.consigner.name} , Load Type:-${element.allowedLoadTypes[0].name}, Expexted Pick date :-${prettyDate(new Date(element.expectedPickupDate))} `);
          
          dataArray.push(a +"\n");

         }
         console.log(dataArray,"aaayyayaaaaa???")
         console.log(orderdate,externalId,orderNumber,"naaaaaammmmm")





        ///////////////Misc.Fields//////////////////////////////////////////
        var ab= data1.customFields[2].value//////////////////////////pincode
        var cd =data1.customFields[1].value/////////////////////////phone number
        var ef =data1.customFields[0].value//////////////////////////NAME
        var gh =data1.customFields[3].value//////////////////////////S.O Number
        var ij =data1.customFields[4].value//////////////////////////Order Mode
        
        console.log(ab,cd,ef,gh,ij,"yehhhh data hai")
         
         
         //////////////////////////////////////MAIL POST///////////////////////////////////////////////////////////////////////////////

        

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
                tls : { rejectUnauthorized: false }////////////////<------- dont add this code on cloud pc
              });
              // const maillist=["tapan.solanki70@gmail.com","apmlintern@gmail.com"]
              const mailOptions = {
                from: 'APML<data.science@agarwalpackers.com>',
                cc:'',
                to: 'tapan.solanki70@gmail.com',
                subject: 'Order-SHPL:-'+orderNumber,
                text: ' ORDER SHPL',
                html:'<head><title>AGARWAL PACKERS AND MOVERS LTD.!</title><link rel="stylesheet" href="styles.css" />  </head>'+
                        '<body><h2> Dear Sir,</h2><p>Please find the below Order Details :- </p>'+
                        '<h5>'+
                        '<table style="width:100%;  border: 1px solid black;border-collapse: collapse;">'+
                        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">Order Date</td><td>'+orderdate+'</td>+</tr>'+
                        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">Order Number</td><td >'+orderNumber+'</td> </tr>'+
                        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">ID</td>    <td>'+externalId+'</td>  </tr> '+
                        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">Order By Name</td>    <td>'+ef+'</tr> '+
                        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">Order By Contact No.</td>    <td>'+cd+'</td>  </tr> '+
                        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">S.O Number / WBS Number</td>    <td>'+gh+'</td></tr>'+
                        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">Order Mode</td>    <td>'+ij+'</td></tr>'+
                        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">pincode</td>    <td>'+ab+'</td></tr></table>'+
                        '<br> <p><b>LINE ITEMS INFO:</b></p>    <ul>   <li>'+dataArray+' </li></ul> '+
                        '<br> <footer>   Thanks and regards, <br>APML Team </footer>    </body>'
              };

              const result = await transport.sendMail(mailOptions);
              return result;
            } catch (error) 
            {
              return error;
            }
          }
          
          sendMail()
          .then((result) => console.log('Email sent...', result))
          .catch((error) => console.log(error.message));
        }) 
        .catch(function (error) {
          console.log(error);
        });
      ////////////////////////////////////////////MAIL POST ENDS//////////////////////////////////////////////// })
        
        var config1 = {
          method: 'post',
          url: 'https://script.google.com/macros/s/AKfycbzgfpKEpxKYUvjvoIGbCCPqBM4nQ7OvSLPHC7TWpKslIWd4NgciLSaGNE6p3kFt_azx/exec?action=addUser',
          headers: { 
            'Content-Type': 'application/json', 
            'Cookie': 'NID=511=VxXq6TKWzp-4tGAxp2Hn7PZ42hp1Qq4X_pcoh2vRIGH3zf9XaDG6Xl-nbiDThg7mACrtkVM1C2TsdYCQzNA1WmFOK8Amgv94tZLOkpGdV3AAve3HsbkPA5v8AL4TACw84oRbhzICoxbp4v6PMsnJe6E1JuDeTW0GJIGRTiHDOjo'
          },
          data : data555
        };
        axios(config1)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
    
        })

  
  .catch(function (error) {
    console.log(error);
  });
// })/////////////////////////////////////
}




function prettyDate(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getUTCMonth()] + ' ' + date.getUTCDate() + ', ' + date.getUTCFullYear();
}
  console.log("Oooo Yeaaa!");}
    )})
  }, 30000);


