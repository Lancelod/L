function ul_mouse_over(e)
{
	var targ
	if (!e) var e = window.event
	if (e.target) targ = e.target
	else if (e.srcElement) targ = e.srcElement
	if (targ.nodeType == 3) // defeat Safari bug
		targ = targ.parentNode
	var id = targ.id
	var passageid = id.replace("li","")
	var htmlstr = "passage_"+passageid+".html"
	$("#content_if").attr("src",htmlstr)
	//document.getElementById("content").innerHTML=htmlstr
}

function ul_mouse_out(e)
{
	var targ
	if (!e) var e = window.event
	if (e.target) targ = e.target
	else if (e.srcElement) targ = e.srcElement
	if (targ.nodeType == 3) // defeat Safari bug
		targ = targ.parentNode
	var id = targ.id
	var passageid = id.replace("li","")
	var htmlstr = "passage_"+passageid+".html"
	$("#content_if").attr("src",htmlstr)
	//document.getElementById("content").innerHTML=htmlstr
}