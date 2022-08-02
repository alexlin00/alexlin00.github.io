//https://www.sanwebcorner.com/2016/07/load-pdfs-in-iframe-onclick-button.html
//https://stackoverflow.com/questions/20235772/is-it-possible-to-open-a-new-window-and-embed-iframe-in-to-this

function openPdf() {
// var omyFrame = document.getElementById("myFrame");
// omyFrame.style.display="block";
// omyFrame.src = "docs/AL_Resume21.pdf";
var win = window.open();
win.document.write('<iframe width="100%" height="100%" src="https://www.dropbox.com/s/nx4o47bpmkl7cwc/AL_Resume2022_6242022.pdf?raw=1" frameborder="0" allowfullscreen></iframe>')
}
