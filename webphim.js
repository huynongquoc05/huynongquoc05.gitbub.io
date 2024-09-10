
    
    const qcclickContent = document.getElementById('qcclick');
    

    window.onload = function() {
        qcclickContent.style.display = 'block';
        
        
        
    };
    function closead(){
        qcclickContent.style.display = 'none';
    };

   /* qcclickLink.addEventListener('click',function(){
        qcclickContent.style.display = 'none';
    });*/

   

    const dropulContent = document.getElementById('dropul');
    const onoffContent = document.getElementById('onoff');
    dropulContent.setAttribute("style","transform: scaleY(0);;transform-origin: top;");
    dropulContent.style.display='none';
    

    let check = 1;
    onoffContent.addEventListener('click',function(){
        if(check==1){
            dropulContent.style.display='block';
            setTimeout(function () {
 
                dropulContent.setAttribute("style","transform: scaleY(1);transform-origin: top;");
              }, 0); // 2000 mili giây (2 giây)    
           
           check-=1;
        } else {
            dropulContent.setAttribute("style","transform: scaleY(0);;transform-origin: top;");
            setTimeout(function () {
 
                dropulContent.style.display='none'
              }, 1000); // 20
             check+=1;
        }
        //check = !check;
    });

    const qcbottom = document.getElementById('qcbottom');
    function closeqcbottom() {
        qcbottom.style.display='none';
        
    }

    const IMG1=document.getElementById('IMG1');
    const IMG2=document.getElementById('IMG2');
    const IMG3=document.getElementById('IMG3');
    const IMG4=document.getElementById('IMG4');
    
    IMG1.style.display='inline';
    IMG2.style.display='none';
    IMG3.style.display='none';
    IMG4.style.display='none';
    
    const intervalTime = 5000; 
    function transform(IMG1_id,IMG2_id){
        IMG1_id.style.display = 'none';
        IMG2_id.style.display = 'inline';
        IMG2_id.setAttribute("style", "transform: translateX(0%)");
    }
    
    function animateAndRepeat() {
        setTimeout(() => {
            IMG1.setAttribute("style", "transform: translateX(-200%)");
            setTimeout(() => {
                // IMG1.style.display = 'none';
                // IMG2.style.display = 'inline';
                // IMG2.setAttribute("style", "transform: translateX(0%)");
                transform(IMG1,IMG2);
                setTimeout(() => {
                    IMG2.setAttribute("style", "transform: translateX(-200%)");
                    setTimeout(() => {
                    //   IMG2.style.display = 'none';
                    //   IMG3.style.display = 'inline';
                    //   IMG3.setAttribute("style", "transform: translateX(0%)");
                    transform(IMG2,IMG3);
                      setTimeout(() => {
                        IMG3.setAttribute("style", "transform: translateX(-200%)");
                        setTimeout(() => {
                            // IMG3.style.display = 'none';
                            // IMG4.style.display = 'inline';
                            // IMG4.setAttribute("style", "transform: translateX(0%)");
                            transform(IMG3,IMG4);
                            setTimeout(() => {
                                IMG4.setAttribute("style", "transform: translateX(-200%)"); 
                                setTimeout(() => {
                                    // IMG4.style.display = 'none';
                                    // IMG1.style.display='inline';
                                    // IMG1.setAttribute("style", "transform: translateX(0%)");
                                    transform(IMG4,IMG1);
                                },500);
                                
                            }, intervalTime);
                        }, 500);
                      }, intervalTime);
                    }, 500);
                  }, intervalTime);
            }, 500);
      
        }, intervalTime);
      
    }
    
   
    animateAndRepeat();
    setInterval(animateAndRepeat, 4*intervalTime + 2000);
   
        
    
    
    
    
    

    
    