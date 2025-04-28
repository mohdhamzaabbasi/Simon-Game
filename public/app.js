let head=document.querySelector("#head2");
let box1=document.querySelector("#box1");
let box2=document.querySelector("#box2");
let box3=document.querySelector("#box3");
let box4=document.querySelector("#box4");
let flag=0;
let system="";
let user="";
let level=0
function flsh(x)
{
    if(x==1)
    {
        box1.style.backgroundColor="white";
        setTimeout(() => {
            box1.style.backgroundColor="red";
          }, "100");
    }
    else if(x==2)
    {
        box2.style.backgroundColor="white";
        setTimeout(() => {
            box2.style.backgroundColor="green";
          }, "100");
    }
    else if(x==3)
    {
        box3.style.backgroundColor="white";
        setTimeout(() => {
            box3.style.backgroundColor="blue";
          }, "100");
    }
    else
    {
        box4.style.backgroundColor="white";
        setTimeout(() => {
            box4.style.backgroundColor="yellow";
          }, "100");
    }
}
document.addEventListener("keypress",function ()
{
    if(flag==0)
    {
        let k=Math.floor((Math.random() * 4) + 1);
        flsh(k);
        flag++;
        system=system+k;
        console.log(system);
        level++;
        head.innerHTML=`Level ${level}`;
    }
});
function gameover()
{
    if(flag!=0)
    {
        let b=document.querySelector("body");
        b.style.backgroundColor="red";
        setTimeout(() => {
            b.style.backgroundColor="white";
        }, "200");
        head.innerHTML=`Game Over <br> Score = ${level} <br> Press any key to restart.`;
        level=0;
        flag=0;
        user="";
        system="";
    }
}
function levelup()
{
    setTimeout(() => {
        level++;
        head.innerHTML=`Level ${level}`;
        let k=Math.floor((Math.random() * 4) + 1);
        user="";
        flsh(k);
        flag++;
        system=system+k;
    },500);
}
box1.addEventListener("click",function(){
    flsh(1);
    if(flag!=0)
    {
        user=user+1;
        let len=user.length;
        let sys=system.substring(0,len);
        if(user!=sys)
        {
            gameover();
        }
        if(len==system.length)
        {
            levelup();
        }
    }
});
box2.addEventListener("click",function(){
    flsh(2);
    if(flag!=0)
    {
        user=user+2;
        let len=user.length;
        let sys=system.substring(0,len);
        if(user!=sys)
        {
            gameover();
        }
        if(len==system.length)
        {
            levelup();
        }
    }
});
box3.addEventListener("click",function(){
    flsh(3);
    if(flag!=0)
    {
        user=user+3;
        let len=user.length;
        let sys=system.substring(0,len);
        if(user!=sys)
        {
            gameover();
        }
        if(len==system.length)
        {
            levelup();
        }
    }
});
box4.addEventListener("click",function(){
    flsh(4);
    if(flag!=0)
    {
        user=user+4;
        let len=user.length;
        let sys=system.substring(0,len);
        if(user!=sys)
        {
            gameover();
        }
        if(len==system.length)
        {
            levelup();
        }
    }
});
