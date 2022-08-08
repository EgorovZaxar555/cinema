var timeVar='';
body = document.querySelector('body');
button = document.querySelector('button');

my_blok = document.querySelector('#my_blok');

button.onclick = function()
{
    if(my_blok.style.display == "block")
    {
        my_blok.style = "display: none";
    }
    else
    {
        my_blok.style = "display: block"; timeVar = 1;
    }
}
body.onclick = function()
{
    if(!timeVar)
    {
        my_blok.style = "display: none";
    }
    if(timeVar) { setTimeout(function(){ timeVar=''; }, 100);}
}