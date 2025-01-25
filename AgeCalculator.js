    function fun()
    {
        let date=parseInt(document.getElementById("v1").value);
        let month=parseInt(document.getElementById("v2").value);
        let year=parseInt(document.getElementById("v3").value);
        const today=new Date();
        const tdate=today.getDate();
        const tmonth=today.getMonth()+1;
        const tyear=today.getFullYear();
        let ansdate=tdate-date;
        let ansmonth=tmonth-month;
        let ansyear=tyear-year;
        if(ansmonth<0)
        {
            ansyear--;
            ansmonth+=12;
        }
        if(ansdate<0)
        {
            ansmonth--;
            ansdate+=30;
        }
        if(date>31||date<=0||month>12||month<=0||year<1925)
        alert("Enter the valid date of birth");
        else if((year>tyear)||((year==tyear)&&(month>tmonth))||((year==tyear)&&(month==tmonth)&&(date>tdate)))
        alert("Enter the valid date of birth");
        else
        document.getElementById("ans").innerHTML="You age is "+ansyear+" years "+ansmonth+" months and "+ansdate+" days ";
    }