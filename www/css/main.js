// JavaScript Document
window.onload = function () {
 
    var slideMenuButton = document.getElementById('slide-menu-button');
    slideMenuButton.onclick = function (e) {
        var cl = document.body.classList;
        if (cl.contains('side-nav')) {
            cl.remove('side-nav');
        } else {
            cl.add('side-nav');
        }
    };
 
}
