//your JS code here. If required.
<!DOCTYPE html>
 
<html>
 
<head>
	<link rel="stylesheet" href="styles.css">
</head>
 
<body>  <div id="sizeInfo"><h1></h1></div>
	<!-- the entire body must be written by student -->
    <script type="text/javascript" src="./script.js">
</script>
 
</body>
 
</html>
 
-----------------
 
JS
 
 
---
//your JS code here. If required.
  let height=this.innerHeight;
    let width=this.innerWidth;
   let div=document.getElementById("sizeInfo");
    let h=div.firstChild;
    h.innerText="Width: "+width+" and Height: "+height;  
window.addEventListener("resize",function(){
    let height=this.innerHeight;
    let width=this.innerWidth;
   let div=document.getElementById("sizeInfo");
    let h=div.firstChild;
 
    h.innerText="Width: "+width+" and Height: "+height; 
  
  })