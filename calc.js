function cal(a)
{
    document.getElementById("numpad").value+=a;
}

function xclr()
{
    document.getElementById("numpad").value='';
}

function xxclr()
{
   document.getElementById("numpad").value=document.getElementById("numpad").value.substring(0,document.getElementById("numpad").value.length-1);
}
function result()
{
    document.getElementById("numpad").value=eval(document.getElementById("numpad").value);
}