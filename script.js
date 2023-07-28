window.addEventListener("load",function(){

    let second=document.querySelector(".second"),
    
        minute=document.querySelector(".minute"),
    
        hour=document.querySelector(".hour"),
    
        secondAngle,minuteAngle,hourAngle;
    
    //To calculate angles first find out what the angle is per second or minute or hour
    
    /*For example get the angle for 1 second by doing (360/60) or 6 deg and now second will be rotated by 6 deg plus.formula for second  (angle=(360/60)*seconds you want it's angle;)
    concepts are same for minutes and hours
    */
    function clock(){
    
    let time=new Date()
    
    secondAngle=(360/60)*time.getSeconds();
    
    
    
    second.style="transform:rotate("+secondAngle+"deg)"
    
    minuteAngle=(360/60)*(time.getMinutes()+time.getSeconds()/60);
    
    minute.style="transform:rotate("+minuteAngle+"deg)"
    
    hourAngle=(360/12)*(time.getHours()+time.getMinutes()/60);
    
    hour.style="transform:rotate("+hourAngle+"deg)"
    
    setTimeout(clock,1000)
    
    }
    
    clock()
    
    })