function printPdf(guid){
	sWidth = 640;
	sHeight = 480;
	sInfo = "http://pmg.hukumonline.n1/printpdf/"+guid
	win = window.open(sInfo,'win','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=' + sWidth +',height=' + sHeight+';');
}
function printEDoc(guid){
	sWidth = 700;
	sHeight = 500;
	sLeft = 300;
	sTop = 200;
	sInfo = "http://pmg.hukumonline.n1/printedoc/"+guid
	win = window.open(sInfo,'win','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=' + sWidth +',height=' + sHeight+',left=' + sLeft+',top=' + sTop+';');
}
function sendEMail(guid){
	sWidth = 700;
	sHeight = 500;
	sLeft = 300;
	sTop = 200;
	sInfo = "http://pmg.hukumonline.n1/sendmail/"+guid
	win = window.open(sInfo,'win','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=' + sWidth +',height=' + sHeight+',left=' + sLeft+',top=' + sTop+';');
}
