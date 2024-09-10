

$(document).ready(function () {
    /*$("#show-login-form").click(function () {
        $("#registration-form").hide();
        $("#to-registration-form").show();
        $("#login-form").show();
        $("#to-login-form").hide();

    });*/
    


    

    $("#register-form").submit(function (e) {
        e.preventDefault(); // Ngăn chặn gửi form

         

         
        //$("#registration-form").hide();
        //$("#login-form").show();
        //$("#registration-form").hide();
        //$("#to-login-form").hide();
        const rusername = $("#register-username").val();
        const remail = $("#register-email").val();
        //const password = $("#register-password").val();
        $("#registration-success").show();
        $("#display-username").text(rusername);
        $("#display-email").text(remail);
        

    });
    
    $("#login-form").submit(function (e) {
        e.preventDefault(); // Ngăn chặn gửi form

       
        const username = $("#login-username").val();
        $("#login-success").show();
        
        $("#display-username1").text(username);
        
        
        
        

    });
});
const registrationform =document.getElementById('registration-form');
    const toregistrationform =document.getElementById('to-registration-form');
    const loginform =document.getElementById('login-form');
    const tologinform =document.getElementById('to-login-form');

   
    function showloginform(){
        //toregistrationform.setAttribute("style","transform: translateX(100%);")    
        //loginform.setAttribute("style","transform: translateX(-100%); ");
        registrationform.setAttribute("style","opacity: 0;");
        tologinform.setAttribute("style","opacity: 0;");
        
            registrationform.style.display='none';
        tologinform.style.display='none';
        
       
        toregistrationform.style.display='block';
            loginform.style.display='block';
            
          setTimeout(function(){
            toregistrationform.setAttribute("style","transform: translateX(0%);opacity: 1;")    
        loginform.setAttribute("style","transform: translateX(0%);opacity: 1; ");
          })
        
        
        
               
            
            
    }
   
   function showregistrationform (){
    //registrationform.setAttribute("style","transform: translateX(100%);opacity: 0;display: none;")    
        //tologinform.setAttribute("style","transform: translateX(-100%);opacity: 0;display: none;");
    toregistrationform.setAttribute("style","transform: translateX(100%);opacity: 0.2;")    
    loginform.setAttribute("style","transform: translateX(-100%);opacity: 0.2; ");
    toregistrationform.style.display='none';
    loginform.style.display='none';
         
    //registrationform.style.display='block';
    //tologinform.style.display='block';
    registrationform.setAttribute("style","transform: translateX(100%);opacity: 0.2;display: block;")    
        tologinform.setAttribute("style","transform: translateX(-100%);opacity: 0.2;display: block;");
    setTimeout(() => {
        registrationform.setAttribute("style","transition: transform 2s ease,opacity 2s linear ;transform: translateX(0%);")    
        tologinform.setAttribute("style","transition: transform 2s ease,opacity 2s linear ;transform: translateX(0%); ");
    },);
        


    };
    function showloginform1(){
        registrationform.style.display='none';
        loginform.style.display="block";
        loginform.setAttribute("style","transform: translateX(0%);opacity: 1")
        
        
    }
    function showregistrationform1(){
        loginform.style.display="none";
        registrationform.style.display='block';
    };
    /*function aaaaaa(){
        loginform.style.display='none'
    }*/

const addqc = document.getElementById('addqc');
const addqc1 = document.getElementById('addqc1');

function closead1(){
    addqc.style.display='none'
}
function closead2(){
    addqc1.style.display='none'
}

