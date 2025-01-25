document.getElementById("password").addEventListener("click",fun);  
function fun(){
    document.getElementById("rules").innerHTML="<b>The password must contain</b>"; 
    document.getElementById("first").innerHTML="<b>1. A captial letter</b>"; 
    document.getElementById("second").innerHTML="<b>2. A small letter</b>"; 
    document.getElementById("third").innerHTML="<b>3. A Number</b>"; 
    document.getElementById("fourth").innerHTML="<b>4. Minimum 8 Charcters</b>";    
}  
function final()
{
    let a=0,b=0,c=0,d=0;
    let pass=document.getElementById("password").value;
    let n=pass.length;
    if(n>=8)
    d=1;
    for (let i=0;i<n;i++) 
    {
        if('A'<=pass[i] && 'Z'>=pass[i])
        a=1;
        else if('a'<=pass[i] && 'z'>=pass[i])
        b=1;
        else if('0'<=pass[i] && '9'>=pass[i])
        c=1;
    }
    var a1=document.getElementById("first");
    var a2=document.getElementById("second");
    var a3=document.getElementById("third");
    var a4=document.getElementById("fourth");
    if(a==1)
    a1.style.color="green"; 
    if(b==1)
    a2.style.color="green";
    if(c==1)
    a3.style.color="green";
    if(d==1)
    a4.style.color="green";
}