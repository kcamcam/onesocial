function socialfn(e,t){var u=document.getElementById("social-radio");u.name="social_medium["+e+"]",""!=t?u.value=t+"":"medium"==e?(u.value="",u.placeholder="Enter a new  medium username (include the @)"):(u.value="",u.placeholder="Enter a new "+e+" username"),"youtube"==e||"googleplus"==e||"linkedin"==e?$(".input-group-text").text("/"):"bitcoin"==e||"ethereum"==e?$(".input-group-text").text("#"):$(".input-group-text").text("@")}