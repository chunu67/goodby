const images = document.querySelectorAll("span");

flowers=['https://www.pexels.com/search/flowers/','https://unsplash.com/images/nature/flower','https://burst.shopify.com/flowers']


images.forEach((image, index) => {
  image.addEventListener("click",e => {
	//window.location.href = e.path[0].childNodes[0].currentSrc ;
	//images[0].childNodes[0].currentSrc;
   	console.log(e.path[0].childNodes[0].currentSrc);
	//console.log(e);

  });
  image.addEventListener('mouseover', e => {
	setTimeout(function(){
    anime({
      targets: images,
      autoplay: true,
      opacity: [
      { value: .5, easing: "easeOutSine", duration: 600 },
      { value: 1, easing: "easeInOutQuad", duration: 900 }],

      filter: [
      { value: "blur(5px) grayscale(100%)", easing: "easeOutSine", duration: 700 },
      { value: "blur(0px) grayscale(0%)", easing: "easeInOutQuad", duration: 1000 }],

      borderRadius: [
      { value: "50%", easing: "easeOutSine", duration: 700 },
      { value: "0%", easing: "easeInOutQuad", duration: 1000 }],

      scale: [
      { value: 0.5, easing: "easeOutSine", duration: 600 },
      { value: 1, easing: "easeInOutQuad", duration: 1100 }],

      delay: anime.stagger(200, { grid: [5, 5], from: index }) });
	},2000);
  });
});


//window.onload = () => document.querySelector('h1').remove();





//window.onload = () => document.getElementById('remove').remove();
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.onerror = function () {
      this.style.display = "none";
    };
   img.onload = function () {
        setTimeout(function () { 
	document.getElementById('remove').remove();
	}, 5000);
   };
  });
});
