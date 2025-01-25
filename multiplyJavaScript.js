function printNumber() 
{
    let a=document.getElementById("number").value
    let b=document.getElementById("steps").value
    if(a>=10000)
    {
        window.alert("Number limit exceeded please try a small value");
        return
    }
    if(b>=500)
    {
        window.alert("Steps limit exceeded please try a small value");
        return
    }
    let output="";
    document.write(`<h1 style="text-align:center"><u>The Table:</u></h1>`)
    for(let i=1;i<=b;i++)
    {
        document.write(`<div style="text-align: center; font-size:30px">${a} x ${i} = ${a * i}</div>`)
    }    
}
