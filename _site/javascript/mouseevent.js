function cat_mouse_over(e)
{
	var targ
	if (!e) var e = window.event
	if (e.target) targ = e.target
	else if (e.srcElement) targ = e.srcElement
	if (targ.nodeType == 3) // defeat Safari bug
		targ = targ.parentNode
	id = targ.id
	$("#id").css("background-color","#000000")
}

function title_mouse_click(e)
{
	var targ
	if (!e) var e = window.event
	if (e.target) targ = e.target
	else if (e.srcElement) targ = e.srcElement
	if (targ.nodeType == 3) // defeat Safari bug
		targ = targ.parentNode
	var id = targ.id
	var htmlstr = id
	open(htmlstr)
}



