document.querySelector(".btn1").addEventListener("click",facebook)
function facebook(){
    window.open("https://www.facebook.com/login.php?skip_api_login=1&api_key=224322077663587&kid_directed_site=0&app_id=224322077663587&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.9%2Fdialog%2Foauth%2F%3Fclient_id%3D224322077663587%26response_type%3Dtoken%26redirect_uri%3Dhttps%253A%252F%252Fwww.mentimeter.com%252F%26state%3D%257B%2522client_id%2522%253A%2522224322077663587%2522%252C%2522network%2522%253A%2522facebook%2522%252C%2522display%2522%253A%2522popup%2522%252C%2522callback%2522%253A%2522_hellojs_4xyd65v3%2522%252C%2522state%2522%253A%2522%2522%252C%2522redirect_uri%2522%253A%2522https%253A%252F%252Fwww.mentimeter.com%252F%2522%252C%2522scope%2522%253A%2522email%2522%257D%26scope%3Demail%26display%3Dpopup%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3De551fc91-918e-4e40-9532-1edd240c0d78%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.mentimeter.com%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522client_id%2522%253A%2522224322077663587%2522%252C%2522network%2522%253A%2522facebook%2522%252C%2522display%2522%253A%2522popup%2522%252C%2522callback%2522%253A%2522_hellojs_4xyd65v3%2522%252C%2522state%2522%253A%2522%2522%252C%2522redirect_uri%2522%253A%2522https%253A%252F%252Fwww.mentimeter.com%252F%2522%252C%2522scope%2522%253A%2522email%2522%257D%23_%3D_&display=popup&locale=en_GB&pl_dbl=0","_blank")   
}
document.querySelector(".btn2").addEventListener("click",google)
function google(){
    window.open("https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=1062856113874-c1aibdvpemt0gd2i236kl0l4dr2ft189.apps.googleusercontent.com&response_type=token&redirect_uri=https%3A%2F%2Fwww.mentimeter.com%2F&state=%7B%22client_id%22%3A%221062856113874-c1aibdvpemt0gd2i236kl0l4dr2ft189.apps.googleusercontent.com%22%2C%22network%22%3A%22google%22%2C%22display%22%3A%22popup%22%2C%22callback%22%3A%22_hellojs_61622q54%22%2C%22state%22%3A%22%22%2C%22redirect_uri%22%3A%22https%3A%2F%2Fwww.mentimeter.com%2F%22%2C%22scope%22%3A%22email%22%7D&scope=email&flowName=GeneralOAuthFlow","_blank")
}
document.querySelector(".forgot").style.cursor="pointer"
document.querySelector(".forgot").addEventListener("click",forgot)
function forgot(){
    window.open("https://www.mentimeter.com/auth/reset_passwords","_self")
}
document.querySelector(".sso").style.cursor="pointer"
document.querySelector(".sso").addEventListener("click",sso)
function sso(){
    window.open("https://www.mentimeter.com/auth/saml?continue=/app")
}

// document.querySelector(".sign-up").style.cursor="pointer"
// document.querySelector(".sign-up").addEventListener("click",signup)
// function signup{
//     window.open("signup.html")
// }
