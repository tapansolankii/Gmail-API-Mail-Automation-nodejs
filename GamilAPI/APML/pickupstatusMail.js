  const CLIENT_ID = 'xxxxxxxxxxx'
  const CLEINT_SECRET = 'xxxxxxx';
  const REDIRECT_URI = 'xxxxxxx';
  const REFRESH_TOKEN = 'xxxxxxx';

    var axios = require('axios');
    const nodemailer = require('nodemailer');
    const { google } = require('googleapis');
    var array10=[]
    var axios = require("axios");
    
    var data = JSON.stringify({
        filters: {
          consigner: [
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
            "SHPL - RAJLAXMI LOGISTICS PARK- SIEMENS HEALTHCARE PVT LTD",
          ],
        },
        limit: 1000,
      });
      
      var config = {
        method: "post",
        url: "https://apis.fretron.com/automate/autoapi/run/255ab0db-70ed-4933-a0cc-b30b67b70955",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ2MDI2MDIsInVzZXJJZCI6Ijc3N2Q5YzIwLTEyNWYtNDhhZS04MWZjLTUzZWI2ZWM3MjZmZSIsImVtYWlsIjoiZGF0YS5zY2llbmNlQGFnYXJ3YWxwYWNrZXJzLmNvbSIsIm1vYmlsZU51bWJlciI6IjgyOTE4NDk1NjUiLCJvcmdJZCI6IjQwNTJhYjI0LTA1NDMtNGNkNC1iNTE3LTllNzhlZmVlNGZlZCIsIm5hbWUiOiJQcml5YWVzaCBQYXRlbCIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.cJR4aISn0MMed1zPQqPxkMsZTn0_9N0W9n1D5mCzLMw",
        },
        data: data,
      };
    axios(config)
      .then(function (response) {
        for (var j = 0; j < response.data.data.length; j++) {
          
            if (response.data.data[j].orderDate > 1670586444000) {
                const a = response.data.data[j].orderNumber;
              // var abc=response.data.data[j].lineItems[0] // array4.push(abc)
            
              const combined = [];
              const combined1 = [];
              // console.log(response.data)
              for (var i = 0; i < response.data.data[j].lineItems.length; i++) {
                var listofitems = response.data.data[j].lineItems[i];
               
               
                  combined.push(listofitems.freightUnitLineItemIds.join(","));
             
              }
              var object ={
                ordernumber:a ,
                uuid:combined
              }
    
              
              array10.push(object);
            }
    
            
          }
        //   console.log(convert(array10),"aaaaaaaaaaaaaaaaaaaaaaaaa")

          const ALL123 = convert(array10)
          const filteredArray = [];

          ALL123.forEach(item => {
        if (item.uuid !== '') {
            filteredArray.push(item);
        }
        });

        ///console.log(filteredArray,"aaaaaaaaaaaaaaaaaaaaa");

        
            function convert(arr) {
                const result = [];
                for (const obj of arr) {
                  const ordernumber = obj.ordernumber;
                  for (const uuid of obj.uuid) {
                    result.push({ ordernumber, uuid });
                  }
                }
                return result;
              }
        //
            //   console.log(ALL123,"aaaaaaaaaaaaaaaaaa");
////-----------------------------------------------------------------------------
    
    
    
    
          
    var axios = require("axios");
    var data1 = JSON.stringify({
      filters: {
        shipmentStatus: ["Planned", "Created"],
        origin:["Navi Mumbai","Mumbai"]
      },
    });
    var config1 = {
      method: "get",
      url: "https://apis.fretron.com/automate/autoapi/run/67953f4a-fb2d-4548-a86f-7b4ce2d710d2",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjQ2MDI2MDIsInVzZXJJZCI6Ijc3N2Q5YzIwLTEyNWYtNDhhZS04MWZjLTUzZWI2ZWM3MjZmZSIsImVtYWlsIjoiZGF0YS5zY2llbmNlQGFnYXJ3YWxwYWNrZXJzLmNvbSIsIm1vYmlsZU51bWJlciI6IjgyOTE4NDk1NjUiLCJvcmdJZCI6IjQwNTJhYjI0LTA1NDMtNGNkNC1iNTE3LTllNzhlZmVlNGZlZCIsIm5hbWUiOiJQcml5YWVzaCBQYXRlbCIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.cJR4aISn0MMed1zPQqPxkMsZTn0_9N0W9n1D5mCzLMw",
        "Content-Type": "application/json",
      },
      data: data1,
    };
    array6 = [];
    array7 = [];
    array8 = [];
    array9 = [];
    array2 = [];
    const abcd = [];
    axios(config1)
      .then(function (response) {
        // console.log(response.data.data[0],"aaaaaaaaaaaaa")
        for (var i = 0; i < response.data.data.length; i++) {
          if (
            response.data.data[i].freightUnitLineItemId != null &&
        response.data.data[i].shipmentTrackingStatus == "At Pickup Point"
          ) {
             
            var myObject = {
              uuid: response.data.data[i].freightUnitLineItemId,
              VehicleNumber: response.data.data[i].fleetInfo.vehicle.vehicleRegistrationNumber,
              DriverName:response.data.data[i].fleetInfo.driver.name,
              drivernumber: response.data.data[i].fleetInfo.driver.mobileNumber,
              DLNumber:response.data.data[i].fleetInfo.driver.dlNumber,
              DLexpiry: new Date(
                response.data.data[i].fleetInfo.driver.dlExpiryTime
              ).toLocaleString(),
    
    
            
            //   location: response.data.data[i].currentLocation.address,
            //   shipmentdate: new Date(
            //     response.data.data[i].creationTime
            //   ).toLocaleString(),
             
              
            };
            array7.push(myObject);
          }
        }
      //console.log(array7, "aaaaaaaaaaa");
    
//   ---------------------------------------------------------------------------------

const result = filteredArray.map(bItem => {
    const aItem = array7.find(item => item.uuid === bItem.uuid);
    return { ...aItem, ordernumber: bItem.ordernumber };
  }).filter(item => item.uuid);
  
  //console.log(result,"aaaaaaaaaaaaaaaaaaaaaaaaaa");

//-----------------------------------------------------------------------------------------
    

var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://script.googleusercontent.com/macros/echo?user_content_key=9t-4IyJRgitcfNKre1bBwDs_1NftctXd607fhMKZXFOO-ba7w5tLB_OdRhUd0pqZ5gwIXIN6vnIIVhvEesFw1AKEfvDHSup-OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa8ZnkRz1hHvwvN_L0stYgkj5QVIT0M8CLg09POLm8DFCnK2Cy7zD9WgMxK7A1D3Ni3bf50M0B0l4-k0SCk4uDJ_y0w2ZjL8X_gtBHn44AOQP7QRqXbtzmPo&lib=MgNibBlMOVQ1OtnYJJbGKzepGJ8Ie7zte',
  headers: { }
};

axios(config)
.then(function (response) {
 
  array2=[]
  for(var j=0;j<response.data.length;j++){
      array2.push(response.data[j].DATA)
    }
     //console.log(array2,"matchingggggggggggggggg------")


//-------------------------unique from google sheet----------------------------
const UNIQUE = [];

result.forEach(item => {
  if (!array2.includes(item.uuid)) {
    UNIQUE.push(item);
  }
});

console.log(UNIQUE,"aaaaaaaaaaggggggggggggayaa");//----------------finallllllll----------------------------
    
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://script.googleusercontent.com/macros/echo?user_content_key=bgDnieKjkfbIJnmVREaakxC5hE3QCCaKs-XBf6IBbYyCvHf4OXeEjtuaehL7u3btV1fyPu9lJBlMZnaQfwTQXuqOKU6_jkwam5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBN0nMjz_rDb_8-lmSu39l6Q5aUKJZiiu7MWLbiVAKbcrGv94aYkUGxKjlLXo9dYPX-2vWmjA6Zd_YV8479z000dLehj-ZH_okALmaJ23tE4XbV8qGEgaIE&lib=MgNibBlMOVQ1OtnYJJbGKzepGJ8Ie7zte',
  headers: { }
};

axios(config)
.then(function(response) {
    
    arraygoogle=[]
    for(var j=0;j<response.data.length;j++){
        arraygoogle.push(response.data[j])
      }
      console.log(arraygoogle,"aaaaaaaaaaaaaaaaaaaaaaaaaaa")

//===========================================================
 const result = UNIQUE.map(item => ({...item, ...arraygoogle.find(x => x.DATA === item.ordernumber) || {}}));

 console.log(result,"finally");




 for(var j=0;j<result.length;j++){
    var Ordernumber=result[j].ordernumber;
    var cc=result[j].cc;
    var email=result[j].email;
    var subject=result[j].status;
    var uuid=result[j].uuid;
  
    var VehicleNumber = result[j].VehicleNumber;
    var DriverName = result[j].DriverName;
    var drivernumber = result[j].drivernumber;
    var DLNumber = result[j].DLNumber;
    var DLexpiry = result[j].DLexpiry;

  






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
         const accessToken =  oAuth2Client.getAccessToken();
     
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
         const mailOptions = {
           from: 'APML<data.science@agarwalpackers.com>',
           cc: cc,
           to: email,
           subject: subject,
           text: ' Update SHPL',
           html:'<body>'+VehicleNumber+DriverName+drivernumber+DLNumber+DLexpiry+'</body>',
           // '<body style="background-color:grey"><table align="center" border="0" cellpadding="0" cellspacing="0" width="550" bgcolor="white"style="border:2px solid black"><tbody><tr><td align="center"><table align="center" border="0" cellpadding="0" cellspacing="0" class="col-550" width="550"><tbody><tr><td align="center" style="background-color: #7c7c7c; height: 50px;"><img src="https://www.agarwalpackers.com/images/agarwal-packers-logo.png" alt="AGARWAL PACKERS AND MOVERS LTD. logo" /><a href="#" style="text-decoration: none;"><p style="color:white; font-weight:bold;">SHPL APML ORDER ALERTS</p></a></td></tr></tbody></table></td></tr><tr style="height: 300px;"><td align="center" style="border: none; border-bottom: 2px solid #4cb96b; padding-right: 20px;padding-left:20px"><p style="font-weight: bolder;font-size: 42px; letter-spacing: 0.025em; color:black;"><h5><table>'+dataArray+'</table></h5></p></td></tr></tbody></table></body>'             
         };
    
         const result =  transport.sendMail(mailOptions);
         return result;
       } catch (error) 
       {
         return error;
       }
     }
     sendMail()     
     .then(function (response) {
      var datasend123 = JSON.stringify({
        "DATA": uuid,
        "status":"resolved"
      });
      var configcheckdata = {
        method: 'post',
        url: 'https://script.google.com/macros/s/AKfycbwmVo9b7TDqxSMTEjehjjhj8szuMYygVvwhBQQ4R8IZ0vQKUiBhkrZZ8dY3oupa36LO/exec?action=addUser2',
        headers: { 
          'Content-Type': 'application/json', 
          'Cookie': 'NID=511=VxXq6TKWzp-4tGAxp2Hn7PZ42hp1Qq4X_pcoh2vRIGH3zf9XaDG6Xl-nbiDThg7mACrtkVM1C2TsdYCQzNA1WmFOK8Amgv94tZLOkpGdV3AAve3HsbkPA5v8AL4TACw84oRbhzICoxbp4v6PMsnJe6E1JuDeTW0GJIGRTiHDOjo'
        },
        data : datasend123
      };
      axios(configcheckdata)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
          console.log(response.status,"gaya check meh")
      })





        console.log("gaya maillllll")})
     .catch(function (error) {
      console.log(error);
    });
    

         







 }

// //============================EMAIL =============================================================


    
    
    
    



















    

    
// //============================EMAIL =============================================================

})
.catch(function (error) {
    console.log(error);
  });

})
  
.catch(function (error) {
  console.log(error);
});




    
    
 
    
    
    
    
    
  
    
   
  
    
    })
    
    
    
    
    
    
    })
    
    
    
    
    .catch(function (error) {
      console.log(error);
    });
 
