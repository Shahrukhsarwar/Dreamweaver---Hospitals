{/* <script>

window.addEventListener("scroll", function () 
  let btn = document.getElementById("scrollTopBtn");

  if (!btn) return; // safety check

  if (document.documentElement.scrollTop  200) {
    btn.style.display = "block"
  } else {
    btn.style.display = "none"
  }
);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

</script>    */}

<script>

window.addEventListener("scroll", function () 
  let btn = document.getElementById("scrollTopBtn");

  if (!btn) return;

  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition  200) 
    btn.style.display = "block"
   else {
    btn.style.display = "none"
  
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

</script>







