const nodemailer=require('nodemailer');

const msg ={
    from: "tapan.solanki70@gmail.com",
    to:"tapan.solanki07@gmail.com",
    subject:"test",
    text:"testing"
};
nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:"tapan.solanki70@gmail.com",
        pass:"695942"

    },
    port: 465,
    host: 'smtp.gmail.com'

    
})
.sendMail(msg ,(err )=>{
    if(err){
    return console.log(err);
    }else{
        return console.log('Email sent');
    }
})
////convert to Functions for sendmail loop
// sendMail() {
//     try {
//       const accessToken =  oAuth2Client.getAccessToken();
  
//       const transport = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           type: 'OAuth2',
//           user: 'tapan.solanki70@gmail.com',
//           clientId: CLIENT_ID,
//           clientSecret: CLEINT_SECRET,
//           refreshToken: REFRESH_TOKEN,
//           accessToken: accessToken,
//         },
//          tls : { rejectUnauthorized: false }////////////////<------- don't add this code on cloud pc specific emails only for virus protection
//       });
//       const mailOptions = {
//         from: '<tapan.solanki70@gmail.com>',
//         cc: cc,
//         to: email,
//         subject: subject,
//         text: ' <Text>',
//         html:''
//       };
 
//       const result =  transport.sendMail(mailOptions);
//       return result;
//     } catch (error) 
//     {
//       return error;
//     }
//   }