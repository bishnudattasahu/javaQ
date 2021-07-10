<script type='text/javascript'>
     
//<![CDATA[ 
     var acc = document.getElementsByClassName("acc");
     var i;
    for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var pnl = this.nextElementSibling;
    if (pnl.style.display === "block") {
      pnl.style.display = "none";
    } else {
      pnl.style.display = "block";
    }
  });
}
    //]]>
 
</script>
