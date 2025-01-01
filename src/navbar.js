const navbar = `<div id="nav">
 <div id="nav_content">
 <img id="logo_img" src = "accessories/logo.png"></img>
 <h5 href= "index.html">WE CARE</h5>
 </div>
 <div id="nav_links">
 <a href="medicines.html">MEDICINES</a>
  <a href="labtests.html">LAB TESTS</a>
 <a href="consultdoctors.html">CONSULT DOCTORS</a>
 </div>
 <div id="nav_innerContent">
   <a href="index.html">Sign Up</a>
  <a href="index.html">Login</a>
 <a href="cart.html">Cart</a>
   <a href="index.html">Help</a>
 </div>
</div>
<div id="search_nav">
<input type="text" id="search" placeholder= "Search for Medicines and Health Products">
<button>Quick Order </button>
</div>`

document.getElementById("navbar").innerHTML = navbar;