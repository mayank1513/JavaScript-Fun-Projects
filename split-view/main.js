var splitHorizontal = true;

document.getElementById('divider').addEventListener('mousedown', function(e){
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
})
mouseMove = function(e){
    if(splitHorizontal){
        split1 = document.getElementById('split1');
        document.getElementById('divider').style.left = e.clientX + 'px';
        split1.style.width =  e.clientX - 0.02*window.innerWidth + 'px';
        split2.style.left = e.clientX + 0.01*window.innerWidth + 'px';
        split2.style.right = 0.02*window.innerWidth + 'px';
        split2.style.width = 'auto';
    } else{
        split1 = document.getElementById('split1');
        document.getElementById('divider').style.top = e.clientY + 'px';
        split1.style.height =  e.clientY - 0.02*window.innerHeight + 'px';
        split2.style.top = e.clientY + 0.01*window.innerHeight + 'px';
        split2.style.bottom = 0.02*window.innerHeight + 'px';
        split2.style.height = 'auto';
    }
}
mouseUp = function(e){
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseup', mouseUp);
}
function toggle(){
    splitHorizontal = !splitHorizontal;
    if(splitHorizontal){
        document.getElementById('split1').
        setAttribute('style',"position: fixed;"+
        "top: 2%; left: 2%;height: 96%;"+
        "width: 47.5%;border: 1px solid gray;"+ 
        "border-radius: 5px;");

        document.getElementById('divider').
        setAttribute('style',"position: fixed;"+
        "top: 2%; height: 96%; left: 49.5%;"+
        "cursor: col-resize;"+
        "width: 1%;");
        
        document.getElementById('split2').
        setAttribute('style',"position: fixed;"+
        "top: 2%; left: 50.5%;height: 96%;"+
        "width: 47.5%;border: 1px solid gray;"+ 
        "border-radius: 5px;");
    } else{
        document.getElementById('split1').
        setAttribute('style',"position: fixed;"+
        "top: 2%; left: 2%;height: 47.5%;"+
        "width: 96%;border: 1px solid gray;"+ 
        "border-radius: 5px;");

        document.getElementById('divider').
        setAttribute('style',"position: fixed;"+
        "cursor: row-resize;"+
        "top: 49.5%; height: 1%;left: 2%;"+
        "width: 96%;");
        
        document.getElementById('split2').
        setAttribute('style',"position: fixed;"+
        "top: 50.5%; left: 2%;height: 47.5%;"+
        "width: 96%;border: 1px solid gray;"+ 
        "border-radius: 5px;");
    }
}