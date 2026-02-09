const CLIENT_ID = 'xxxxxxxxxxx'
const CLEINT_SECRET = process.env.CLIENT_SECRET || 'xxxxxxx';
const REDIRECT_URI = process.env.REDIRECT_URI || 'xxxxxxx';
const REFRESH_TOKEN = process.env.REFRESH_TOKEN || 'xxxxxxx';
var axios = require('axios');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
setInterval(function(){ 
var config = {
  method: 'get',
  url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Claim Intimation"],"status.keyword":["Open"]}',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w'
  }
};


var config2 = {
  method: 'get',
  url: 'https://script.google.com/a/macros/agarwalpackers.com/s/AKfycbzcPyNO8p3ragrcs4PrXUc1fUmEzk28tx5cmm4MIUZjbEL_kzKHDEv9Hw8b9Gq01BzT-w/exec?action=getUser',
  headers: { 
    'Cookie': 'NID=511=VxXq6TKWzp-4tGAxp2Hn7PZ42hp1Qq4X_pcoh2vRIGH3zf9XaDG6Xl-nbiDThg7mACrtkVM1C2TsdYCQzNA1WmFOK8Amgv94tZLOkpGdV3AAve3HsbkPA5v8AL4TACw84oRbhzICoxbp4v6PMsnJe6E1JuDeTW0GJIGRTiHDOjo'
  }
};
var data;
var ticketArray1=[];
    axios(config)
.then(function (response) {
  

  data=response.data.map(x=>({  customFields:x.customFields.map(x=>({fieldKey:x.fieldKey,value:x.value})),      
                                CreatedAt:x.createdAt,
                                Ticket:x.issueNo
                            }));
                          



   for(let i=0;i<data.length;i++){
      ticketArray1.push(data[i].Ticket)
   }
   axios(config2)
    .then(function (response) {
      array2=[]
      for(var j=0;j<response.data.length;j++){
        array2.push(response.data[j].DATA)
      }
      
      var array3 = ticketArray1.filter(function(obj) { return array2.indexOf(obj) == -1; });  
        
      // console.log(array3)
      for(let j=0;j<array3.length;j++){
        var data = JSON.stringify({
          "DATA": array3[j],
          "status":"resolved"
        });
        var config4 = {
          method: 'get',
          url: 'https://apis.fretron.com/shipment-view/issues/issues?size=3000&filters={"issueType.keyword":["Claim Intimation"],"issueNo.keyword":["'+ array3[j]+'"],"status.keyword":["Open"]}',
          headers: { 
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NDkyNDgyODksInVzZXJJZCI6ImNlZWMxMzkwLWUyZjUtNDZkMC1iOTBlLWNiN2NkNDEwNzU3MiIsImVtYWlsIjoiaW50ZWdyYXRpb25AYXBtbC5jb20iLCJtb2JpbGVOdW1iZXIiOiI5MDAwMDAwMDA0Iiwib3JnSWQiOiI0MDUyYWIyNC0wNTQzLTRjZDQtYjUxNy05ZTc4ZWZlZTRmZWQiLCJuYW1lIjoiQVBNTCBJbnRlZ3JhdGlvbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.WV8p9lLMRft2DfrzikLpp_zSJIwrBEp0U2Oy4IWkp6w'
          }
        };
        
        axios(config4)
        .then(function (response) {
          var variData=response.data.map(x=>({  customFields:x.customFields.map(x=>({fieldKey:x.fieldKey,value:x.value})), }))
          console.log(variData[0].customFields);
          // 'Claim Form along with Claim Bill '
          var a =variData[0].customFields[10].value.split('"downloadUrl":')[1].split(',"updates"')[0]

          // 'Declaration Certificate/Mail received from customer'
          var b =variData[0].customFields[11].value.split('"downloadUrl":')[1].split(',"updates"')[0]

          // 'Inventory Sheet'
          var c=variData[0].customFields[12].value.split('"downloadUrl":')[1].split(',"updates"')[0]

          // 'Proof of Delivery'
          var d=variData[0].customFields[13].value.split('"downloadUrl":')[1].split(',"updates"')[0]

          // 'Photographs of damaged/claimed items'
          var e=variData[0].customFields[14].value.split('"downloadUrl":')[1].split(',"updates"')[0]

          // 'Estimate & Quotations '
          var f=variData[0].customFields[15].value.split('"downloadUrl":')[1].split(',"updates"')[0]
        //  ----------------------
        // 'Date of Loss & Time'
        
        var ab=variData[0].customFields[4].value
        var datetime = ab;

function prettyDate(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[date.getUTCMonth()] + ' ' + date.getUTCDate() + ', ' + date.getUTCFullYear();
}

console.log(prettyDate(new Date(+datetime)));
          
        // 'Loss Location'
        var bc=variData[0].customFields[5].value

        // 'Loss Description'
        var cd=variData[0].customFields[6].value

        // "Contact Person's Name at location'
        var de=variData[0].customFields[7].value

        // 'Contact No.'
        var ef=variData[0].customFields[8].value
        
        // 'Estimated Loss Amount'
        var fg=variData[0].customFields[9].value

        // 'Name of the Customers'
        var gg=variData[0].customFields[0].value


        // --------------------------------------------------------
        // GC NUMBER
          var aa=variData[0].customFields[1].value
          console.log(aa)

          // 'GC DATE',
          var bb=variData[0].customFields[2].value
          ddtime=bb

          console.log(prettyDate(new Date(+ddtime)));

          // 'Survey By'
          var cc=variData[0].customFields[3].value
          console.log(cc)










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
      tls: {
        rejectUnauthorized: false
    }
    });
    const maillist=[
"clclaims@raghnall.co.in",
"quotes@raghnall.co.in"
    ]
    const mailOptions = {
      from: 'APML<data.science@agarwalpackers.com>',
      cc:'<associate.india@agarwalpackers.com> ',
      to: maillist,
      subject: 'Claim Intimation-'+aa ,
      text: ' 1Claim Intimation',
      html:'<head><title>AGARWAL PACKERS AND MOVERS LTD.!</title><link rel="stylesheet" href="styles.css" />  </head>'+
        '<body><h2> Dear Sir,</h2><p>Please find the below claim intimation and register the claim for customer :- '+gg+ '</p>'+
        '<h5> (To download the document please click on the link )</h5><p>This is an in transit Damage </p>'+
        '<table style="width:100%;  border: 1px solid black;border-collapse: collapse;">'+
        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">Date of Loss & Time</td><td>'+prettyDate(new Date(+datetime))+'</td></tr>'+
        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">Loss Location</td><td >'+bc+'</td> </tr>'+
        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">Loss Description</td>    <td>'+cd+'</td>  </tr> '+
        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">Contact Persons Name at location</td>    <td>'+de+'</td>  </tr>'+
        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">Contact No.</td>    <td>'+ef+'</td>  </tr> '+
        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">Estimated Loss Amount</td>    <td>'+fg+'</td></tr>'+
        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">GC Date</td>    <td>'+prettyDate(new Date(+ddtime))+'</td></tr>'+
        '<tr style="border: 1px solid black;border-collapse: collapse;"><td style="border: 1px solid black;border-collapse: collapse;">Survey By</td>    <td>'+cc+'</td></tr></table>'+
        '<br> <p>List of Documents :</p>    <ul>  <li>Declaration Certificate/Mail received from customer <a href='+a+'>Link </a></li>  <li>Claim Form along with Claim Bill ( claim bill on letter head will be required on claim above 1 Lac) <a href='+b+'>Link </a></li>  <li>Inventory Sheet  <a href='+c+'>Link </a></li>  <li>Proof of Delivery  <a href='+d+'>Link </a></li>  <li>Photographs of damaged/claimed items  <a href='+e+'>Link </a></li>  <li>Estimate & Quotations shared by customer in respect with the amount claimed  <a href='+f+'>Link </a></li></ul> '+
        '<br> <footer>   Thanks and regards, <br>APML Team </footer>    </body>'

      // attachments: [{
      //   filename: 'image.jpg',
      //   path: './utils/image.jpg',
      //   cid: 'image' //my mistake was putting "cid:logo@cid" here! 
  //  }]
     
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

        }) 
        .catch(function (error) {
          console.log(error);
        });
        var config1 = {
          method: 'post',
          url: 'https://script.google.com/a/macros/agarwalpackers.com/s/AKfycbzcPyNO8p3ragrcs4PrXUc1fUmEzk28tx5cmm4MIUZjbEL_kzKHDEv9Hw8b9Gq01BzT-w/exec?action=addUser',
          headers: { 
            'Content-Type': 'application/json', 
            'Cookie': 'NID=511=VxXq6TKWzp-4tGAxp2Hn7PZ42hp1Qq4X_pcoh2vRIGH3zf9XaDG6Xl-nbiDThg7mACrtkVM1C2TsdYCQzNA1WmFOK8Amgv94tZLOkpGdV3AAve3HsbkPA5v8AL4TACw84oRbhzICoxbp4v6PMsnJe6E1JuDeTW0GJIGRTiHDOjo'
          },
          data : data
        };
        
        axios(config1)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
    
        })
        .catch(function (error) {
          console.log(error);
        });
       }
    })
    .catch(function (error) {
      console.log(error);
    });
   
   

})
.catch(function (error) {
  console.log(error);
});

function GetFullName(_a) {
  var countFrom = new Date(_a).getTime();
  this.now = new Date();
  this.b = new Date(countFrom);
  this.distance = this.now - this.b;

  var secondsInADay = 60 * 60 * 1000 * 24,
    secondsInAHour = 60 * 60 * 1000;

  let days = Math.floor((this.distance / secondsInADay) * 1);
  let hours = Math.floor(
    ((this.distance % secondsInADay) / secondsInAHour) * 1
  );
  let mins = Math.floor(
    (((this.distance % secondsInADay) % secondsInAHour) / (60 * 1000)) * 1
  );
  let secs = Math.floor(
    ((((this.distance % secondsInADay) % secondsInAHour) % (60 * 1000)) /
      1000) *
      1
  );
  let xyz = days + 'd ' + hours + 'h ' + mins + 'm ' + secs + 's ';
  return xyz;
}
console.log("Oooo Yeaaa!",Date.now());
}, 30000);
