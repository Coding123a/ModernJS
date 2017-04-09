var mJS = {
	
	version : "1.0", 
	developer : "Prabhakar Kandel",
	say : function(msg,command,color = "black"){
	
	
	if (command === "write"){
		
		
		document.write(msg);
	}
	else if (command === "notify"){
		
		
		alert(msg);
		
	}
	else if (command === "format"){
		document.write('<font face = "arial" size = "10px"> <center> '+ msg + '</center> </font>')
	}
	
},
submit : function(form,func){
	if (typeof(func === "function")){
        form.addEventListener("submit",func());
        return true;
	}else{
		return false;
	}
},
attr : function(elementt,atr,val){
   elementt.setAttribute(atr,val);
},
hide: function(elementt){
		if (typeof(elementt) === null){
	    console.log("The element doesnot exist");
   }else{
	elementt.style.display = "none";

   }
},
show : function (elementt){
	if (typeof(elementt) === null){
	console.log("The element doesnot exist");
}else{
	elementt.style.display = "inline-block";

}
},

ready : function(execode){
	if (typeof(execode) === "function"){
	window.addEventListener("load",execode,false);

   return true;
   }else{
	return false;
   }
},
openOut : function(elementt){
	elementt.setAttribute("target","_blank")
},
click : function(elementt,execode){
  if (typeof(execode) === "function"){
    elementt.addEventListener("click",execode,false);
    return true;
  }else{
	return false;
  }
},
select : function (info){
	
	var element;
	if (info.charAt(0) == "#"){
		element = info.split("#")[1];
		return document.getElementById(element);
        
	}else if(info.charAt(0) == "."){
		element = info.split(".")[1];
		return document.getElementsByClassName(element);
    }else{
    	element = info;
    	return document.getElementsByTagName(element);

    }
	
   },
   removeChild : function(main_element,child){
      main_element.removeChild(child);
   },
   ajax : function(ajaxObject){
     var xmlHttp = new XMLHttpRequest();
     if (typeof(ajaxObject === "object")){
        xmlHttp.open(ajaxObject.method,ajaxObject.path,ajaxObject.asynch);
        xmlHttp.onreadystatechange = function(){
        	if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
        		if (ajaxObject.datatype === "JSON"){
        			res = JSON.parse(xmlHttp.responseText);
        			return res;
        		}else{
        			xmlHttp.responseText;
        		}
        	}
        }
     }else{
     	return "Must be an object"
     }

   },
   create : function(parent,child,text = "No text"){
     var el = document.createElement(child);
     if (parent === "body"){
     	var txt = document.createTextNode(text);       
		el.appendChild(txt);
        document.body.appendChild(el);
     }else{
     var txt = document.createTextNode(text);       
	 el.appendChild(txt);
     parent.appendChild(el);
 }
   },
   
   userBrowser :  function (){
   	  var ba = ["Chrome","Firefox","Safari","Opera","MSIE","Trident","Edge"];
   	  var a,ua = navigator.userAgent;
   	  for (i in ba){
           if (ua.indexOf(ba[i]) > -1){
           	   a = ba[i];
           	   break;
           }

       }
      
   
      return a;


   	  },
	   addClass : function (realvalue,classn){
		   realvalue.classList.add(classn);
	   },
	   insert : function (htmle,pos,data){
		   var position;
		  if (pos == "bb"){
			  position = "beforebegin";
		  }else if(pos == "ab"){
			  position = "afterbegin";
		  }else if (pos == "be"){
			  position = "beforeend";
		  }else if (pos == "ae"){
			  position = "afterend";
		  }
		  htmle.insertAdjacentHTML(position, data);   
	   }
};
var _ = Object.create(mJS);
