var nowDate = new Date();
var hours = nowDate.getHours();
if(hours<=12)
{
    document.getElementById("time").innerHTML = nowDate.getFullYear() + "/" + (nowDate.getMonth()+1) + "/" + nowDate.getDate() + "&nbsp;&nbsp;&nbsp;AM&nbsp;"+hours+":"+nowDate.getMinutes();
}
else{
    document.getElementById("time").innerHTML = nowDate.getFullYear() + "/" + (nowDate.getMonth()+1) + "/" + nowDate.getDate() + "&nbsp;&nbsp;&nbsp;PM&nbsp;"+hours+":"+nowDate.getMinutes();
}
