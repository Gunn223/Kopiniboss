// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
// if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

// document.getElementById("navbar").style.background = "rgba(0,0,0,0.3)";
// } else{
//     document.getElementById("navbar").style.background ="#ffff";
// }
// }

const produk = [
    ["Redvelvet ipsum dolor sit amet consectetur adipisicing elit. Sit velit totam voluptatum optio, maiores temporibus consequatur necessitatibus. Asperiores, rerum minus."],
    ["thaitea ipsum dolor sit amet consectetur adipisicing elit. Sit velit totam voluptatum optio, maiores temporibus consequatur necessitatibus. Asperiores, rerum minus."],
    ["Straberi Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit totam voluptatum optio, maiores temporibus consequatur necessitatibus. Asperiores, rerum minus."]];

    const thaitea   = document.getElementById('img-thaitea');
    const redvelvet = document.getElementById('img-redvelvet');
    const straberi = document.getElementById('img-straberi');

    const imgmain = document.getElementById('img-main');
    const overflo = document.getElementById('flex-overflo');
 
    const h1ourcoffe = document.getElementById('h1-ourcoffe');
    const pourcoffe = document.getElementById('p-ourcoffe');

    thaitea.onclick = ubahtextthaitea;
    function ubahtextthaitea(){
    imgmain.setAttribute('src','asset/image/thai-tea.png');
    pourcoffe.innerHTML = produk[1],[0];
    h1ourcoffe.innerHTML = "Thai-Tea";
 }

    redvelvet.onclick = ubahtextredvelvet;
    function ubahtextredvelvet(){
    imgmain.setAttribute('src','asset/image/red-velvet-removebg-preview.png');
    pourcoffe.innerHTML = produk[0],[0];
    h1ourcoffe.innerHTML = "Red-VelVet";
 }
    straberi.onclick = ubahtextstraberi;
    function ubahtextstraberi(){
    imgmain.setAttribute('src','asset/image/straberi-removebg-preview.png');
    pourcoffe.innerHTML = produk[2],[0];
    h1ourcoffe.innerHTML = "Starberi";
 }

//  mengatur responsive pada saat ukuran 576
const lebarlayar = window.screen.availWidth;

if(lebarlayar < 576){
    h1ourcoffe.classList.add('text-center');
    overflo.setAttribute('class' ,'d-flex overflow-auto mt-3 col-12');
    straberi.setAttribute('class','mx-3 border');
}
