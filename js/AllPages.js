function menu()
{
    var val = document.getElementById('menuOption').value;
    if (val=='open')
    {
        document.getElementById("menu").style.display = 'flex';
        document.getElementById('menuOption').style.backgroundImage = "url('./assests/images/close.png')";
        document.getElementById('menuOption').setAttribute('value', 'close');
    }
    else
    {
        document.getElementById("menu").style.display = 'none';
        document.getElementById('menuOption').style.backgroundImage = "url('./assests/images/menu.png')";
        document.getElementById('menuOption').setAttribute('value', 'open');
    }
}