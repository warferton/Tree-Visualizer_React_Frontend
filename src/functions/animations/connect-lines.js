//default settings obj
var settings = {
    strokeColor : '#999',
    strokeWidth : 2,
    opacity : 1,
    fill : 'none',
    animate : true,
    animationDirection : 'right',
    animationDuration : 0.75
}

//create settings obj
// var settings = {}

//get position of a certain html element
function getPosition(element){
    var rect = element.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    return rect;
}

//rewriting settings obj.'s properties to user defined ones
//one property per iteration => 
//@param prop: property , 
//@param val: user defined property
function setSettings(prop, val){
    settings[prop] = val;
}


//get 2 html elements and draw lines connecting them
function draw(element1, element2){
    var el1 = document.getElementById(element1);
    var el2 = document.getElementById(element2);

    if(el1.children && el2.children){
        var svgheight, p, svgleft, svgtop, svgwidth;

        //get position of the elements
        var el1pos = getPosition(el1);
        var el2pos = getPosition(el2);

        //get width and height of the elements simulating 
        //jQuery's outerHeight() and outerWidth() functions
        var el1H = el1.style.height + el1.style.paddingTop + el1.style.paddingBottom 
                    + el1.style.marginTop + el1.style.marginBottom + el1.style.borderWidth;
        var el1W = el1.style.width + el1.style.paddingLeft + el1.style.paddingRight
                    + el1.style.marginLeft + el1.style.marginRight + el1.style.borderWidth;

        var el2H = el2.style.height + el2.style.paddingTop + el2.style.paddingBottom 
                    + el2.style.marginTop + el2.style.marginBottom + el2.style.borderWidth;
        var el2W = el2.style.width + el2.style.paddingLeft + el2.style.paddingRight
                    + el2.style.marginLeft + el2.style.marginRight + el2.style.borderWidth;
        if(el1W == 0){
            el1W = 103.5
        }
        svgleft = Math.round(el1pos.left + el1W);
        console.log(el1.style.width);
        svgwidth = Math.round(el2pos.left - svgleft);

        var cpt;

        //Determine which element is higher/lower=>
        //get middle of y of the elements and determine which is lower/higher
        //CASE: el1 is higher than el2 =>
        if((el2pos.top + (el2H/2)) <= (el1pos.top + (el1H/2))){
            log("low to high");
            
            //get height distance between elements to determine height of the <svg/>
            svgheight = Math.round((el1pos.top + el1H/2) - (el2pos.top + el2H/2));
            //get top point of the svg element?
            svgtop = Math.round(el2pos.top + el2H/2) - settings.strokeWidth;
            //path's 'C' property
            cpt = Math.round(svgwidth * Math.min(svgheight/300, 1));
            //path's 'd' property 
            p = "M0," + (svgheight + settings.strokeWidth) + "C" + cpt + "," 
                + (svgheight + settings.strokeWidth) + " "
                + (svgwidth - cpt) + "," + settings.strokeWidth + " " 
                + svgwidth + "," + settings.strokeWidth;

        }
        //CASE: el2 is higher than el1 =>
        else{
            console.log("high to low");

            svgheight = Math.round((el2pos.top + el2H/2) - (el1pos.top + el1H/2));
            svgtop = Math.round((el1pos.top + el1H/2) - settings.strokeWidth);
            cpt = Math.round((svgwidth * Math.min(svgheight/300, 1)));

            p = "M0," + settings.strokeWidth + " C" + cpt  + ",0 " 
                + (svgwidth - cpt) + "," + (svgheight + settings.strokeWidth) 
                + " " + svgwidth + "," + (svgheight + settings.strokeWidth);
        }

        //if there is already element w/ #ropebag get it into var | 
		//else create a new div with id ropebag inside <body/> and retrieve it
        var ropebag 
        if(document.getElementById("ropebag") != null){
            console.log("is the rope")
            ropebag = document.getElementById("ropebag");
        } 
        else{
            console.log("created");
            document.body.innerHTML += ("<div id='ropebag' />");
            ropebag = document.getElementById("ropebag");
        }

        //get <svg/> and <path/> elements from w3.org
		var svgnode = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
		var newpath = document.createElementNS('http://www.w3.org/2000/svg', "path");

        //setting line color
        var color = settings.strokeColor;   
        newpath.setAttributeNS(null, "d", p);
        newpath.setAttributeNS(null, "stroke", color);
        newpath.setAttributeNS(null, "stroke-width", settings.strokeWidth);
        newpath.setAttributeNS(null, "opacity", settings.opacity);
        newpath.setAttributeNS(null, "fill", settings.fill);

        //adding line to <svg/> element's children 
        svgnode.appendChild(newpath);

        //setting <svg/> styles
        svgnode.style.left = svgleft;
        svgnode.style.top = svgtop + 22;
        svgnode.style.position = "absolute";
        svgnode.style.width = svgwidth;
        svgnode.style.height = svgheight + settings.strokeWidth * 2;
        svgnode.style.minHeight = '20px';


        //adding <svg/> element to the #ropebag container
        ropebag.appendChild(svgnode);

        //if there's and animate prop in settings obj. do ->
        if(settings.animate){
            var pl = newpath.getTotalLength();

            // Set up the starting positions
            newpath.style.strokeDasharray = pl + ' ' + pl;
            //animation start from right
            if(settings.animationDirection == "right"){
                newpath.style.strokeDashoffset = pl;
            }
            //animation end from left
            else{
                newpath.style.strokeDashoffset = -pl;
            }

            //idk wtf this do in that form, but the animation doesn't play without it
            newpath.getBoundingClientRect();

            newpath.style.transition = newpath.style.WebkitTransition = "stroke-dashoffset" 
                                    + settings.animationDuration + "s ease-in-out";
            //offset from the destination element( 0 == touching)
            newpath.style.strokeDashoffset = '0';

        }
    }
}

//clear up function
function clear(){
    var parent = document.getElementById('ropebag');
    while(parent.firstChild)
    {
        parent.removeChild(parent.firstChild);
    }
}

// // Redraw upon resizing the window
// window.onresize(()=>{
//     clear();
//     var query = document.querySelectAll()
// })





//To get position relative to another element, here ==> <body/>

// var bodyRect = document.body.getBoundingClientRect(),
//     elemRect = element.getBoundingClientRect(),
//     offset   = elemRect.top - bodyRect.top;

// alert('Element is ' + offset + ' vertical pixels from <body>');

