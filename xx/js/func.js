var svgns = "http://www.w3.org/2000/svg";
var Msvg = document.getElementById("main");
var x1, x2, y1, y2;
var t = 0;

function prCoo() {
    //        ele = document.getElementById("rc");
    if (t == 0) {
        x1 = event.clientX ;     // Get the horizontal coordinate
        y1 = event.clientY - 80;     // Get the vertical coordinate
        var coor = "X1 coords: " + x1 + ", Y1 coords: " + y1;
        //           ele.innerHTML= coor;

        t = 1;
    }

    else if (t == 1) {
        t = 0;
        x2 = event.clientX ;     // Get the horizontal coordinate
        y2 = event.clientY - 80;     // Get the vertical coordinate
        var coor = "X2 coords: " + x2 + ", Y2 coords: " + y2;
        //           ele.innerHTML= coor;
        //create line
        Li = document.createElementNS(svgns, "line");
        Li.setAttributeNS(null, "x1", x1);
        Li.setAttributeNS(null, "y1", y1);
        Li.setAttributeNS(null, "x2", x2);
        Li.setAttributeNS(null, "y2", y2);
        Li.setAttributeNS(null, "style", "stroke:rgb(0,0,0);stroke-width:2");
        Msvg.appendChild(Li);
    }
}

/// draw inputes
for (i = 0; i < 12; i++) {
    y_val = 21 + 4.8 * i;
    y_val_str = y_val.toString() + "%";
    NImage = document.createElementNS(svgns, "image");
    NImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", "image/in0.jpg");
    NImage.setAttributeNS(null, "height", "13%");
    NImage.setAttributeNS(null, "x", y_val_str);
    NImage.setAttributeNS(null, "y", "69%");
    NImage.setAttributeNS(null, "z-index", "1");

    //        var set = document.createElementNS(svgns, "set");
    //        set.setAttributeNS(null, "attributeName", "href");
    //        set.setAttributeNS(null, "to", "image/in1.jpg");
    //        set.setAttributeNS(null, "begin", "click");
    //        NImage.appendChild(set);
    NImage.addEventListener("click", changeEle, false);
    Msvg.appendChild(NImage);
}
function changeEle(evt) {
    tar = evt.target;
    if (tar.getAttributeNS("http://www.w3.org/1999/xlink", "href").localeCompare("image/in0.jpg") == 0)
        tar.setAttributeNS("http://www.w3.org/1999/xlink", "href", "image/in1.jpg");
    else
        tar.setAttributeNS("http://www.w3.org/1999/xlink", "href", "image/in0.jpg");

}
//draw dots
for (i = 0; i < 29; i++) {
    x_val = 22 + 2 * i;
    x_val_str = x_val.toString() + "%";
    for (j = 0; j < 23; j++) {
        y_val = 1 + 3 * j;
        y_val_str = y_val.toString() + "%";
        Dot = document.createElementNS(svgns, "circle");
        Dot.setAttributeNS(null, "r", "2");
        Dot.setAttributeNS(null, "cx", x_val_str);
        Dot.setAttributeNS(null, "cy", y_val_str);
        Dot.setAttributeNS(null, "style", "stroke: black; fill: black;");

        Dot.addEventListener("click", prCoo, false);

        Msvg.appendChild(Dot);
    }
}
for (i = 0; i < 6; i++) {
    x_val = 80 + 4 * i;
    x_val_str = x_val.toString() + "%";
    for (j = 0; j < 2; j++) {
        y_val = 0 + 10 * j;
        y_val_str = y_val.toString() + "%";
        NImage = document.createElementNS(svgns, "image");
        NImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", "image/outon.png");
        NImage.setAttributeNS(null, "height", "7%");
        NImage.setAttributeNS(null, "x", x_val_str);
        NImage.setAttributeNS(null, "y", y_val_str);
        //            NImage.setAttributeNS(null,"z-index","1");       
        Msvg.appendChild(NImage);
    }
}

for (j = 0; j < 10; j++) {
    y_val = 18 + 4.8 * j;
    y_val_str = y_val.toString() + "%";
    NImage = document.createElementNS(svgns, "image");
    NImage.setAttributeNS("http://www.w3.org/1999/xlink", "href", "image/outlit.png");
    NImage.setAttributeNS(null, "height", "5%");
    NImage.setAttributeNS(null, "x", "79.7%");
    NImage.setAttributeNS(null, "y", y_val_str);
    //            NImage.setAttributeNS(null,"z-index","1");       
    Msvg.appendChild(NImage);
}

//function changeimg(element){
//    
//    element.setAttributeNS("http://www.w3.org/1999/xlink","href","image/in1.jpg");
//}



