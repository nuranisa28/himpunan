function ftampil(){
  /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;

  for (i = 0; i < dropdown.length; i++) {
    console.log(dropdown.length);
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
  }
}

function dafis(){
  let dafis = document.getElementById("dafis");
  let main = document.getElementById("main");

  if (dafis.className.indexOf("dafis-hilang") == -1){
    dafis.className += "dafis-hilang";
    main.className = main.className.replace("main","main-penuh");
  } else{
    dafis.className = dafis.className.replace("dafis-hilang","");
    main.className = main.className.replace("main-penuh","main");
  }
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

//top button
// When the user scrolls down 20px from the top of the document,we will show the button
window.onscroll = function(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("js-top").style.display = "block";
  } else{
    document.getElementById("js-top").style.display = "none";
  }
};

function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 30);
    } else clearTimeout(scrollAnimation);
}

/*pertanyaan*/
function bukaTanya(evt, nmrTanya) {
  var i, pertanya, nomortanya;
  pertanya = document.getElementsByClassName("pertanya");
  for (i = 0; i < pertanya.length; i++) {
    pertanya[i].style.display = "none";
  }
  nomortanya = document.getElementsByClassName("nomortanya");
  for (i = 0; i < nomortanya.length; i++) {
    nomortanya[i].className = nomortanya[i].className.replace(" tmblAktif", "");
  }
  document.getElementById(nmrTanya).style.display = "block";
  evt.currentTarget.className += " tmblAktif";
}

/*buka soal*/
function bukaSoal(evt, nmrSoal) {
  var i, soal, nomorsoal;
  //isi soal
  soal = document.getElementsByClassName("soal");
  for (i = 0; i < soal.length; i++) {
    soal[i].style.display = "none";
  }
  //nomor soal
  nomorsoal = document.getElementsByClassName("nomorsoal");
  for (i = 0; i < nomorsoal.length; i++) {
    nomorsoal[i].className = nomorsoal[i].className.replace(" nmrAktif", "");
  }
  document.getElementById(nmrSoal).style.display = "block";
  evt.currentTarget.className += " nmrAktif";
}

function tjk1(tjk1) {
  var x = document.getElementById(tjk1);

  if (x.className.indexOf("hilang") == -1) {
    x.className += " hilang";
  } else {
    x.className = x.className.replace("hilang", "");
  }
}

/*buka soal*/
function bukaSoal2(evt, nmrSoal) {
  var i, soal, nomorsoal;
  //isi soal
  soal = document.getElementsByClassName("soall");
  for (i = 0; i < soal.length; i++) {
    soal[i].style.display = "none";
  }
  //nomor soal
  nomorsoal = document.getElementsByClassName("nomorsoal2");
  for (i = 0; i < nomorsoal.length; i++) {
    nomorsoal[i].className = nomorsoal[i].className.replace(" nmrAktif", "");
  }
  document.getElementById(nmrSoal).style.display = "block";
  evt.currentTarget.className += " nmrAktif";
}

function cek11(){
  var himp = document.getElementById("jwb11");
  var ang = document.getElementById("jwb12");
  var anggota = [1, 2, 3, 4, 5];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value;
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==5){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon11').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek11').className += " hilang";
      document.getElementById("lanjut11").className = document.getElementById("lanjut11").className.replace('hilang','');
    } else{
      document.getElementById('icon11').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang11').className = document.getElementById('ulang11').className.replace('hilang','');
    }
}

function ulang11(){
  for(var i=1; i<=2; i++){
    document.getElementById('jwb1'+i).value= "";
    document.getElementById('jwb1'+i).className = document.getElementById('jwb1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon11').innerHTML = "";
  document.getElementById('ulang11').className += ' hilang';
}

function cek12(){
  var himp = document.getElementById("jwb13");
  var ang = document.getElementById("jwb14");
  var anggota = [2,3,5];
  var benar = 0;
  var ada = 0;

  if(himp.value=="A"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value;
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==3){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon12').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek12').className += " hilang";
      document.getElementById("lanjut12").className = document.getElementById("lanjut12").className.replace('hilang','');
    } else{
      document.getElementById('icon12').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang12').className = document.getElementById('ulang12').className.replace('hilang','');
    }
}

function ulang12(){
  for(var i=3; i<=4; i++){
    document.getElementById('jwb1'+i).value= "";
    document.getElementById('jwb1'+i).className = document.getElementById('jwb1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon12').innerHTML = "";
  document.getElementById('ulang12').className += ' hilang';
}

var salah1a, salah1b, salah1c, salah1d=0;
let jawaban1 = document.querySelectorAll('.jwb1');
var p1a = document.getElementById("p1a").innerText;
var p1b = document.getElementById("p1b").innerText;
var p1c = document.getElementById("p1c").innerText;
var p1d = document.getElementById("p1d").innerText;
var tb1a = document.getElementById("tb1a");
var tb1b = document.getElementById("tb1b");
var tb1c = document.getElementById("tb1c");
var tb1d = document.getElementById("tb1d");

for(let i=0; i < jawaban1.length; i++){

  jawaban1[i].addEventListener("dragend", function() {

    if(i==0){
      // tahap 1
      if(tb1a.innerText==p1a){
        document.getElementById("icon1a").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar1").innerHTML = "<img src='../venn/1.png' class='gambar3'>";
        document.getElementById("tahap12").className = document.getElementById("tahap12").className.replace("hilang", "");
      } else{
        if(tb1a.innerText==p1b){
          salah1a=2;
        } else if (tb1a.innerText==p1c){
          salah1a=3;
        } else{
          salah1a=4;
        }
        document.getElementById("icon1a").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol1a").innerHTML = "<button class='cekulang' onclick='ulang1a()'><b>Ulang</b></button>"
      }
    }

    if(i==1){
      //tahap 2
      if(tb1b.innerText==p1b){
        document.getElementById("icon1b").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar1").innerHTML = "<img src='../venn/s1a.png' class='gambar3'>";
        document.getElementById("tahap13").className = document.getElementById("tahap13").className.replace("hilang", "");
      } else{
        if(tb1b.innerText==p1a){
          salah1b=1;
        } else if (tb1b.innerText==p1c){
          salah1b=3;
        } else{
          salah1b=4;
        }
        document.getElementById("icon1b").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol1b").innerHTML = "<button class='cekulang' onclick='ulang1b()'><b>Ulang</b></button>"
      }
    }

    if(i==2){
      //tahap 3
      if(tb1c.innerText==p1c){
        document.getElementById("icon1c").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar1").innerHTML = "<img src='../venn/s1b.png' class='gambar3'>";
        document.getElementById("tahap14").className = document.getElementById("tahap14").className.replace("hilang", "");
      } else{
        if(tb1c.innerText==p1a){
          salah1c=1;
        } else if (tb1c.innerText==p1b){
          salah1c=2;
        } else{
          salah1d=4;
        }
        document.getElementById("icon1c").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol1c").innerHTML = "<button class='cekulang' onclick='ulang1c()'><b>Ulang</b></button>"
      }
    }

    if(i==3){
      //tahap 4
      if(tb1d.innerText==p1d){
        document.getElementById("icon1d").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar1").innerHTML = "<img src='../venn/s1c.png' class='gambar3'>";
        document.getElementById("ket1").innerHTML = "<img src='../img/true.png' width='35px'>";
        document.getElementById("lanjut13").className = document.getElementById("lanjut13").className.replace('hilang','');
        document.getElementById("tab1a").className += " hilang";
        document.getElementById("tab1b").className += " hilang";
        document.getElementById("tab1c").className += " hilang";
        document.getElementById("kiri1").className += " tinggi2";
        document.getElementById("kanan1").className += " tinggi2";
      } else{
        if(tb1d.innerText==p1a){
          salah1d=1;
        } else if (tb1d.innerText==p1b){
          salah1d=2;
        } else{
          salah1d=3;
        }
        document.getElementById("icon1d").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol1d").innerHTML = "<button class='cekulang' onclick='ulang1d()'><b>Ulang</b></button>"
      }
    }

  })
}
function ulang1a(){
  document.getElementById("tb1a").innerText = "";
  document.getElementById("icon1a").innerHTML ="";
  document.getElementById("tombol1a").innerHTML = "";
  if(salah1a==2){
    document.getElementById("pil1b").innerHTML = "<span class='pilihan' id='p1b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan A dengan lingkaran/kurva tertutup</span>";
  } else if (salah1a==3){
    document.getElementById("pil1c").innerHTML = "<span class='pilihan' id='p1c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan A dengan noktah/titik di dalam lingkaran</span>";
  } else{
    document.getElementById("pil1d").innerHTML = "<span class='pilihan' id='p1d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan A di luar lingkaran</span>";
  }
}
function ulang1b(){
  document.getElementById("tb1b").innerText = "";
  document.getElementById("icon1b").innerHTML ="";
  document.getElementById("tombol1b").innerHTML = "";
  if(salah1b==1){
    document.getElementById("pil1a").innerHTML = "<span class='pilihan' id='p1a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah1b==3){
    document.getElementById("pil1c").innerHTML = "<span class='pilihan' id='p1c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan A dengan noktah/titik di dalam lingkaran</span>";
  } else{
    document.getElementById("pil1d").innerHTML = "<span class='pilihan' id='p1d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan A di luar lingkaran</span>";
  }
}
function ulang1c(){
  document.getElementById("tb1c").innerText = "";
  document.getElementById("icon1c").innerHTML ="";
  document.getElementById("tombol1c").innerHTML = "";
  if(salah1c==1){
    document.getElementById("pil1a").innerHTML = "<span class='pilihan' id='p1a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah1c==2){
    document.getElementById("pil1b").innerHTML = "<span class='pilihan' id='p1b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan A dengan lingkaran/kurva tertutup</span>";
  } else{
    document.getElementById("pil1d").innerHTML = "<span class='pilihan' id='p1d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan A di luar lingkaran</span>";
  }
}
function ulang1d(){
  document.getElementById("tb1d").innerText = "";
  document.getElementById("icon1d").innerHTML ="";
  document.getElementById("tombol1d").innerHTML = "";
  if(salah1d==1){
    document.getElementById("pil1a").innerHTML = "<span class='pilihan' id='p1a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah1d==2){
    document.getElementById("pil1b").innerHTML = "<span class='pilihan' id='p1b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan A dengan lingkaran/kurva tertutup</span>";
  } else{
    document.getElementById("pil1c").innerHTML = "<span class='pilihan' id='p1c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan A dengan noktah/titik di dalam lingkaran</span>";
  }
}


////////////////////////////////////////


function cek21(){
  var himp = document.getElementById("jwb21");
  var ang = document.getElementById("jwb22");
  var anggota = [-3, -2, -1, 0, 1, 2, 3];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value;
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==7){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon21').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek21').className += " hilang";
      document.getElementById("lanjut21").className = document.getElementById("lanjut21").className.replace('hilang','');
    } else{
      document.getElementById('icon21').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang21').className = document.getElementById('ulang21').className.replace('hilang','');
    }
}

function ulang21(){
  for(var i=1; i<=2; i++){
    document.getElementById('jwb2'+i).value= "";
    document.getElementById('jwb2'+i).className = document.getElementById('jwb2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon21').innerHTML = "";
  document.getElementById('ulang21').className += ' hilang';
}

function cek22(){
  var himp = document.getElementById("jwb23");
  var ang = document.getElementById("jwb24");
  var anggota = [0, 1, 2];
  var benar = 0;
  var ada = 0;

  if(himp.value=="B"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value;
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==3){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon22').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek22').className += " hilang";
      document.getElementById("lanjut22").className = document.getElementById("lanjut22").className.replace('hilang','');
    } else{
      document.getElementById('icon22').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang22').className = document.getElementById('ulang22').className.replace('hilang','');
    }
}

function ulang22(){
  for(var i=3; i<=4; i++){
    document.getElementById('jwb2'+i).value= "";
    document.getElementById('jwb2'+i).className = document.getElementById('jwb2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon22').innerHTML = "";
  document.getElementById('ulang22').className += ' hilang';
}

var salah2a, salah2b, salah2c, salah2d=0;
let jawaban2 = document.querySelectorAll('.jwb2');
var p2a = document.getElementById("p2a").innerText;
var p2b = document.getElementById("p2b").innerText;
var p2c = document.getElementById("p2c").innerText;
var p2d = document.getElementById("p2d").innerText;
var tb2a = document.getElementById("tb2a");
var tb2b = document.getElementById("tb2b");
var tb2c = document.getElementById("tb2c");
var tb2d = document.getElementById("tb2d");

for(let i=0; i < jawaban2.length; i++){

  jawaban2[i].addEventListener("dragend", function() {

    if(i==0){
      // tahap 1
      if(tb2a.innerText==p2a){
        document.getElementById("icon2a").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar2").innerHTML = "<img src='../venn/1.png' class='gambar3'>";
        document.getElementById("tahap22").className = document.getElementById("tahap22").className.replace("hilang", "");
      } else{
        if(tb2a.innerText==p2b){
          salah2a=2;
        } else if (tb2a.innerText==p2c){
          salah2a=3;
        } else{
          salah2a=4;
        }
        document.getElementById("icon2a").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol2a").innerHTML = "<button class='cekulang' onclick='ulang2a()'><b>Ulang</b></button>"
      }
    }

    if(i==1){
      //tahap 2
      if(tb2b.innerText==p2b){
        document.getElementById("icon2b").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar2").innerHTML = "<img src='../venn/s2a.png' class='gambar3'>";
        document.getElementById("tahap23").className = document.getElementById("tahap23").className.replace("hilang", "");
      } else{
        if(tb2b.innerText==p2a){
          salah2b=1;
        } else if (tb2b.innerText==p2c){
          salah2b=3;
        } else{
          salah2b=4;
        }
        document.getElementById("icon2b").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol2b").innerHTML = "<button class='cekulang' onclick='ulang2b()'><b>Ulang</b></button>"
      }
    }

    if(i==2){
      //tahap 3
      if(tb2c.innerText==p2c){
        document.getElementById("icon2c").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar2").innerHTML = "<img src='../venn/s2b.png' class='gambar3'>";
        document.getElementById("tahap24").className = document.getElementById("tahap24").className.replace("hilang", "");
      } else{
        if(tb2c.innerText==p2a){
          salah2c=1;
        } else if (tb2c.innerText==p2b){
          salah2c=2;
        } else{
          salah2d=4;
        }
        document.getElementById("icon2c").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol2c").innerHTML = "<button class='cekulang' onclick='ulang2c()'><b>Ulang</b></button>"
      }
    }

    if(i==3){
      //tahap 4
      if(tb2d.innerText==p2d){
        document.getElementById("icon2d").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar2").innerHTML = "<img src='../venn/s2c.png' class='gambar3'>";
        document.getElementById("ket2").innerHTML = "<img src='../img/true.png' width='35px'>";
        document.getElementById("lanjut23").className = document.getElementById("lanjut23").className.replace('hilang','');
        document.getElementById("tab2a").className += " hilang";
        document.getElementById("tab2b").className += " hilang";
        document.getElementById("tab2c").className += " hilang";
        document.getElementById("kiri2").className += " tinggi2";
        document.getElementById("kanan2").className += " tinggi2";
      } else{
        if(tb2d.innerText==p2a){
          salah2d=1;
        } else if (tb2d.innerText==p2b){
          salah2d=2;
        } else{
          salah2d=3;
        }
        document.getElementById("icon2d").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol2d").innerHTML = "<button class='cekulang' onclick='ulang2d()'><b>Ulang</b></button>"
      }
    }

  })
}
function ulang2a(){
  document.getElementById("tb2a").innerText = "";
  document.getElementById("icon2a").innerHTML ="";
  document.getElementById("tombol2a").innerHTML = "";
  if(salah2a==2){
    document.getElementById("pil2b").innerHTML = "<span class='pilihan' id='p2b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan B dengan lingkaran/kurva tertutup</span>";
  } else if (salah2a==3){
    document.getElementById("pil2c").innerHTML = "<span class='pilihan' id='p2c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan B dengan noktah/titik di dalam lingkaran</span>";
  } else{
    document.getElementById("pil2d").innerHTML = "<span class='pilihan' id='p2d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan B di luar lingkaran</span>";
  }
}
function ulang2b(){
  document.getElementById("tb2b").innerText = "";
  document.getElementById("icon2b").innerHTML ="";
  document.getElementById("tombol2b").innerHTML = "";
  if(salah2b==1){
    document.getElementById("pil2a").innerHTML = "<span class='pilihan' id='p2a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah2b==3){
    document.getElementById("pil2c").innerHTML = "<span class='pilihan' id='p2c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan B dengan noktah/titik di dalam lingkaran</span>";
  } else{
    document.getElementById("pil2d").innerHTML = "<span class='pilihan' id='p2d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan B di luar lingkaran</span>";
  }
}
function ulang2c(){
  document.getElementById("tb2c").innerText = "";
  document.getElementById("icon2c").innerHTML ="";
  document.getElementById("tombol2c").innerHTML = "";
  if(salah2c==1){
    document.getElementById("pil2a").innerHTML = "<span class='pilihan' id='p2a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah2c==2){
    document.getElementById("pil2b").innerHTML = "<span class='pilihan' id='p2b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan B dengan lingkaran/kurva tertutup</span>";
  } else{
    document.getElementById("pil2d").innerHTML = "<span class='pilihan' id='p2d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan B di luar lingkaran</span>";
  }
}
function ulang2d(){
  document.getElementById("tb2d").innerText = "";
  document.getElementById("icon2d").innerHTML ="";
  document.getElementById("tombol2d").innerHTML = "";
  if(salah2d==1){
    document.getElementById("pil2a").innerHTML = "<span class='pilihan' id='p2a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah2d==2){
    document.getElementById("pil2b").innerHTML = "<span class='pilihan' id='p2b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan B dengan lingkaran/kurva tertutup</span>";
  } else{
    document.getElementById("pil2c").innerHTML = "<span class='pilihan' id='p2c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan B dengan noktah/titik di dalam lingkaran</span>";
  }
}


////////////////////


function cek31(){
  var himp = document.getElementById("jwb31");
  var ang = document.getElementById("jwb32");
  var anggota = ['b', 'a', 'n', 'j', 'r', 'm', 's', 'i'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==8){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon31').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek31').className += " hilang";
      document.getElementById("lanjut31").className = document.getElementById("lanjut31").className.replace('hilang','');
    } else{
      document.getElementById('icon31').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang31').className = document.getElementById('ulang31').className.replace('hilang','');
    }
}

function ulang31(){
  for(var i=1; i<=2; i++){
    document.getElementById('jwb3'+i).value= "";
    document.getElementById('jwb3'+i).className = document.getElementById('jwb3'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon31').innerHTML = "";
  document.getElementById('ulang31').className += ' hilang';
}

function cek32(){
  var himp = document.getElementById("jwb33");
  var ang = document.getElementById("jwb34");
  var anggota = ['a', 'i'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="C"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==2){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon32').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek32').className += " hilang";
      document.getElementById("lanjut32").className = document.getElementById("lanjut32").className.replace('hilang','');
    } else{
      document.getElementById('icon32').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang32').className = document.getElementById('ulang32').className.replace('hilang','');
    }
}

function ulang32(){
  for(var i=3; i<=4; i++){
    document.getElementById('jwb3'+i).value= "";
    document.getElementById('jwb3'+i).className = document.getElementById('jwb3'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon32').innerHTML = "";
  document.getElementById('ulang32').className += ' hilang';
}

var salah3a, salah3b, salah3c, salah3d=0;
let jawaban3 = document.querySelectorAll('.jwb3');
var p3a = document.getElementById("p3a").innerText;
var p3b = document.getElementById("p3b").innerText;
var p3c = document.getElementById("p3c").innerText;
var p3d = document.getElementById("p3d").innerText;
var tb3a = document.getElementById("tb3a");
var tb3b = document.getElementById("tb3b");
var tb3c = document.getElementById("tb3c");
var tb3d = document.getElementById("tb3d");

for(let i=0; i < jawaban3.length; i++){

  jawaban3[i].addEventListener("dragend", function() {

    if(i==0){
      // tahap 1
      if(tb3a.innerText==p3a){
        document.getElementById("icon3a").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar3").innerHTML = "<img src='../venn/1.png' class='gambar3'>";
        document.getElementById("tahap32").className = document.getElementById("tahap32").className.replace("hilang", "");
      } else{
        if(tb3a.innerText==p3b){
          salah3a=2;
        } else if (tb3a.innerText==p3c){
          salah3a=3;
        } else{
          salah3a=4;
        }
        document.getElementById("icon3a").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol3a").innerHTML = "<button class='cekulang' onclick='ulang3a()'><b>Ulang</b></button>"
      }
    }

    if(i==1){
      //tahap 2
      if(tb3b.innerText==p3b){
        document.getElementById("icon3b").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar3").innerHTML = "<img src='../venn/s3a.png' class='gambar3'>";
        document.getElementById("tahap33").className = document.getElementById("tahap33").className.replace("hilang", "");
      } else{
        if(tb3b.innerText==p3a){
          salah3b=1;
        } else if (tb3b.innerText==p3c){
          salah3b=3;
        } else{
          salah3b=4;
        }
        document.getElementById("icon3b").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol3b").innerHTML = "<button class='cekulang' onclick='ulang3b()'><b>Ulang</b></button>"
      }
    }

    if(i==2){
      //tahap 3
      if(tb3c.innerText==p3c){
        document.getElementById("icon3c").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar3").innerHTML = "<img src='../venn/s3b.png' class='gambar3'>";
        document.getElementById("tahap34").className = document.getElementById("tahap34").className.replace("hilang", "");
      } else{
        if(tb3c.innerText==p3a){
          salah3c=1;
        } else if (tb3c.innerText==p3b){
          salah3c=2;
        } else{
          salah3d=4;
        }
        document.getElementById("icon3c").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol3c").innerHTML = "<button class='cekulang' onclick='ulang3c()'><b>Ulang</b></button>"
      }
    }

    if(i==3){
      //tahap 4
      if(tb3d.innerText==p3d){
        document.getElementById("icon3d").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar3").innerHTML = "<img src='../venn/s3c.png' class='gambar3'>";
        document.getElementById("ket3").innerHTML = "<img src='../img/true.png' width='35px'>";
        document.getElementById("lanjut33").className = document.getElementById("lanjut33").className.replace('hilang','');
        document.getElementById("tab3a").className += " hilang";
        document.getElementById("tab3b").className += " hilang";
        document.getElementById("tab3c").className += " hilang";
        document.getElementById("kiri3").className += " tinggi2";
        document.getElementById("kanan3").className += " tinggi2";
      } else{
        if(tb3d.innerText==p3a){
          salah3d=1;
        } else if (tb3d.innerText==p3b){
          salah3d=2;
        } else{
          salah3d=3;
        }
        document.getElementById("icon3d").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol3d").innerHTML = "<button class='cekulang' onclick='ulang3d()'><b>Ulang</b></button>"
      }
    }

  })
}
function ulang3a(){
  document.getElementById("tb3a").innerText = "";
  document.getElementById("icon3a").innerHTML ="";
  document.getElementById("tombol3a").innerHTML = "";
  if(salah3a==2){
    document.getElementById("pil3b").innerHTML = "<span class='pilihan' id='p3b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan C dengan lingkaran/kurva tertutup</span>";
  } else if (salah3a==3){
    document.getElementById("pil3c").innerHTML = "<span class='pilihan' id='p3c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan C dengan noktah/titik di dalam lingkaran</span>";
  } else{
    document.getElementById("pil3d").innerHTML = "<span class='pilihan' id='p3d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan C di luar lingkaran</span>";
  }
}
function ulang3b(){
  document.getElementById("tb3b").innerText = "";
  document.getElementById("icon3b").innerHTML ="";
  document.getElementById("tombol3b").innerHTML = "";
  if(salah3b==1){
    document.getElementById("pil3a").innerHTML = "<span class='pilihan' id='p3a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah3b==3){
    document.getElementById("pil3c").innerHTML = "<span class='pilihan' id='p3c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan C dengan noktah/titik di dalam lingkaran</span>";
  } else{
    document.getElementById("pil3d").innerHTML = "<span class='pilihan' id='p3d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan C di luar lingkaran</span>";
  }
}
function ulang3c(){
  document.getElementById("tb3c").innerText = "";
  document.getElementById("icon3c").innerHTML ="";
  document.getElementById("tombol3c").innerHTML = "";
  if(salah3c==1){
    document.getElementById("pil3a").innerHTML = "<span class='pilihan' id='p3a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah3c==2){
    document.getElementById("pil3b").innerHTML = "<span class='pilihan' id='p3b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan C dengan lingkaran/kurva tertutup</span>";
  } else{
    document.getElementById("pil3d").innerHTML = "<span class='pilihan' id='p3d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan C di luar lingkaran</span>";
  }
}
function ulang3d(){
  document.getElementById("tb3d").innerText = "";
  document.getElementById("icon3d").innerHTML ="";
  document.getElementById("tombol3d").innerHTML = "";
  if(salah3d==1){
    document.getElementById("pil3a").innerHTML = "<span class='pilihan' id='p3a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah3d==2){
    document.getElementById("pil3b").innerHTML = "<span class='pilihan' id='p3b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan C dengan lingkaran/kurva tertutup</span>";
  } else{
    document.getElementById("pil3c").innerHTML = "<span class='pilihan' id='p3c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan C dengan noktah/titik di dalam lingkaran</span>";
  }
}


//////////////////////////////


function cek41(){
  var himp = document.getElementById("jwb41");
  var ang = document.getElementById("jwb42");
  var anggota = ['merah', 'jingga', 'kuning', 'hijau', 'biru', 'nila', 'ungu'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==7){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon41').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek41').className += " hilang";
      document.getElementById("lanjut41").className = document.getElementById("lanjut41").className.replace('hilang','');
    } else{
      document.getElementById('icon41').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang41').className = document.getElementById('ulang41').className.replace('hilang','');
    }
}

function ulang41(){
  for(var i=1; i<=2; i++){
    document.getElementById('jwb4'+i).value= "";
    document.getElementById('jwb4'+i).className = document.getElementById('jwb4'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon41').innerHTML = "";
  document.getElementById('ulang41').className += ' hilang';
}

function cek42(){
  var himp = document.getElementById("jwb43");
  var ang = document.getElementById("jwb44");
  var anggota = ['merah', 'kuning', 'hijau'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="D"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==3){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon42').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek42').className += " hilang";
      document.getElementById("lanjut42").className = document.getElementById("lanjut42").className.replace('hilang','');
    } else{
      document.getElementById('icon42').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang42').className = document.getElementById('ulang42').className.replace('hilang','');
    }
}

function ulang42(){
  for(var i=3; i<=4; i++){
    document.getElementById('jwb4'+i).value= "";
    document.getElementById('jwb4'+i).className = document.getElementById('jwb4'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon42').innerHTML = "";
  document.getElementById('ulang42').className += ' hilang';
}

var salah4a, salah4b, salah4c, salah4d=0;
let jawaban4 = document.querySelectorAll('.jwb4');
var p4a = document.getElementById("p4a").innerText;
var p4b = document.getElementById("p4b").innerText;
var p4c = document.getElementById("p4c").innerText;
var p4d = document.getElementById("p4d").innerText;
var tb4a = document.getElementById("tb4a");
var tb4b = document.getElementById("tb4b");
var tb4c = document.getElementById("tb4c");
var tb4d = document.getElementById("tb4d");

for(let i=0; i < jawaban4.length; i++){

  jawaban4[i].addEventListener("dragend", function() {

    if(i==0){
      // tahap 1
      if(tb4a.innerText==p4a){
        document.getElementById("icon4a").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar4").innerHTML = "<img src='../venn/1.png' class='gambar3'>";
        document.getElementById("tahap42").className = document.getElementById("tahap42").className.replace("hilang", "");
      } else{
        if(tb4a.innerText==p4b){
          salah4a=2;
        } else if (tb4a.innerText==p4c){
          salah4a=3;
        } else{
          salah4a=4;
        }
        document.getElementById("icon4a").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol4a").innerHTML = "<button class='cekulang' onclick='ulang4a()'><b>Ulang</b></button>"
      }
    }

    if(i==1){
      //tahap 2
      if(tb4b.innerText==p4b){
        document.getElementById("icon4b").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar4").innerHTML = "<img src='../venn/s4a.png' class='gambar3'>";
        document.getElementById("tahap43").className = document.getElementById("tahap43").className.replace("hilang", "");
      } else{
        if(tb4b.innerText==p4a){
          salah4b=1;
        } else if (tb4b.innerText==p4c){
          salah4b=3;
        } else{
          salah4b=4;
        }
        document.getElementById("icon4b").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol4b").innerHTML = "<button class='cekulang' onclick='ulang4b()'><b>Ulang</b></button>"
      }
    }

    if(i==2){
      //tahap 3
      if(tb4c.innerText==p4c){
        document.getElementById("icon4c").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar4").innerHTML = "<img src='../venn/s4b.png' class='gambar3'>";
        document.getElementById("tahap44").className = document.getElementById("tahap44").className.replace("hilang", "");
      } else{
        if(tb4c.innerText==p4a){
          salah4c=1;
        } else if (tb4c.innerText==p4b){
          salah4c=2;
        } else{
          salah4d=4;
        }
        document.getElementById("icon4c").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol4c").innerHTML = "<button class='cekulang' onclick='ulang4c()'><b>Ulang</b></button>"
      }
    }

    if(i==3){
      //tahap 4
      if(tb4d.innerText==p4d){
        document.getElementById("icon4d").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar4").innerHTML = "<img src='../venn/s4c.png' class='gambar3'>";
        document.getElementById("ket4").innerHTML = "<img src='../img/true.png' width='35px'>";
        document.getElementById("lanjut43").className = document.getElementById("lanjut43").className.replace('hilang','');
        document.getElementById("tab4a").className += " hilang";
        document.getElementById("tab4b").className += " hilang";
        document.getElementById("tab4c").className += " hilang";
        document.getElementById("kiri4").className += " tinggi2";
        document.getElementById("kanan4").className += " tinggi2";
      } else{
        if(tb4d.innerText==p4a){
          salah4d=1;
        } else if (tb4d.innerText==p4b){
          salah4d=2;
        } else{
          salah4d=3;
        }
        document.getElementById("icon4d").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol4d").innerHTML = "<button class='cekulang' onclick='ulang4d()'><b>Ulang</b></button>"
      }
    }

  })
}
function ulang4a(){
  document.getElementById("tb4a").innerText = "";
  document.getElementById("icon4a").innerHTML ="";
  document.getElementById("tombol4a").innerHTML = "";
  if(salah4a==2){
    document.getElementById("pil4b").innerHTML = "<span class='pilihan' id='p4b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan D dengan lingkaran/kurva tertutup</span>";
  } else if (salah4a==3){
    document.getElementById("pil4c").innerHTML = "<span class='pilihan' id='p4c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan D dengan noktah/titik di dalam lingkaran</span>";
  } else{
    document.getElementById("pil4d").innerHTML = "<span class='pilihan' id='p4d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan D di luar lingkaran</span>";
  }
}
function ulang4b(){
  document.getElementById("tb4b").innerText = "";
  document.getElementById("icon4b").innerHTML ="";
  document.getElementById("tombol4b").innerHTML = "";
  if(salah4b==1){
    document.getElementById("pil4a").innerHTML = "<span class='pilihan' id='p4a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah4b==3){
    document.getElementById("pil4c").innerHTML = "<span class='pilihan' id='p4c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan D dengan noktah/titik di dalam lingkaran</span>";
  } else{
    document.getElementById("pil4d").innerHTML = "<span class='pilihan' id='p4d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan D di luar lingkaran</span>";
  }
}
function ulang4c(){
  document.getElementById("tb4c").innerText = "";
  document.getElementById("icon4c").innerHTML ="";
  document.getElementById("tombol4c").innerHTML = "";
  if(salah4c==1){
    document.getElementById("pil4a").innerHTML = "<span class='pilihan' id='p4a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah4c==2){
    document.getElementById("pil4b").innerHTML = "<span class='pilihan' id='p4b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan D dengan lingkaran/kurva tertutup</span>";
  } else{
    document.getElementById("pil4d").innerHTML = "<span class='pilihan' id='p4d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan D di luar lingkaran</span>";
  }
}
function ulang4d(){
  document.getElementById("tb4d").innerText = "";
  document.getElementById("icon4d").innerHTML ="";
  document.getElementById("tombol4d").innerHTML = "";
  if(salah4d==1){
    document.getElementById("pil4a").innerHTML = "<span class='pilihan' id='p4a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah4d==2){
    document.getElementById("pil4b").innerHTML = "<span class='pilihan' id='p4b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan D dengan lingkaran/kurva tertutup</span>";
  } else{
    document.getElementById("pil4c").innerHTML = "<span class='pilihan' id='p4c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan D dengan noktah/titik di dalam lingkaran</span>";
  }
}


///////////////////////////


function cek51(){
  var himp = document.getElementById("jwb51");
  var ang = document.getElementById("jwb52");
  var anggota = [1, 2, 3, 4, 5, 6, 7, 8];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value;
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==8){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon51').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek51').className += " hilang";
      document.getElementById("lanjut51").className = document.getElementById("lanjut51").className.replace('hilang','');
    } else{
      document.getElementById('icon51').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang51').className = document.getElementById('ulang51').className.replace('hilang','');
    }
}

function ulang51(){
  for(var i=1; i<=2; i++){
    document.getElementById('jwb5'+i).value= "";
    document.getElementById('jwb5'+i).className = document.getElementById('jwb5'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon51').innerHTML = "";
  document.getElementById('ulang51').className += ' hilang';
}

function cek52(){
  var himp = document.getElementById("jwb53");
  var ang = document.getElementById("jwb54");
  var anggota = [1, 3, 5, 7];
  var benar = 0;
  var ada = 0;

  if(himp.value=="E"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==4){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('icon52').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cek52').className += " hilang";
      document.getElementById("lanjut52").className = document.getElementById("lanjut52").className.replace('hilang','');
    } else{
      document.getElementById('icon52').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulang52').className = document.getElementById('ulang52').className.replace('hilang','');
    }
}

function ulang52(){
  for(var i=3; i<=4; i++){
    document.getElementById('jwb5'+i).value= "";
    document.getElementById('jwb5'+i).className = document.getElementById('jwb5'+i).className.replace('boxmerah', "");
  }
  document.getElementById('icon52').innerHTML = "";
  document.getElementById('ulang52').className += ' hilang';
}

var salah5a, salah5b, salah5c, salah5d=0;
let jawaban5 = document.querySelectorAll('.jwb5');
var p5a = document.getElementById("p5a").innerText;
var p5b = document.getElementById("p5b").innerText;
var p5c = document.getElementById("p5c").innerText;
var p5d = document.getElementById("p5d").innerText;
var tb5a = document.getElementById("tb5a");
var tb5b = document.getElementById("tb5b");
var tb5c = document.getElementById("tb5c");
var tb5d = document.getElementById("tb5d");

for(let i=0; i < jawaban5.length; i++){

  jawaban5[i].addEventListener("dragend", function() {

    if(i==0){
      // tahap 1
      if(tb5a.innerText==p5a){
        document.getElementById("icon5a").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar5").innerHTML = "<img src='../venn/1.png' class='gambar3'>";
        document.getElementById("tahap52").className = document.getElementById("tahap52").className.replace("hilang", "");
      } else{
        if(tb5a.innerText==p5b){
          salah5a=2;
        } else if (tb5a.innerText==p5c){
          salah5a=3;
        } else{
          salah5a=4;
        }
        document.getElementById("icon5a").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol5a").innerHTML = "<button class='cekulang' onclick='ulang5a()'><b>Ulang</b></button>"
      }
    }

    if(i==1){
      //tahap 2
      if(tb5b.innerText==p5b){
        document.getElementById("icon5b").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar5").innerHTML = "<img src='../venn/s5a.png' class='gambar3'>";
        document.getElementById("tahap53").className = document.getElementById("tahap53").className.replace("hilang", "");
      } else{
        if(tb5b.innerText==p5a){
          salah5b=1;
        } else if (tb5b.innerText==p5c){
          salah5b=3;
        } else{
          salah5b=4;
        }
        document.getElementById("icon5b").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol5b").innerHTML = "<button class='cekulang' onclick='ulang5b()'><b>Ulang</b></button>"
      }
    }

    if(i==2){
      //tahap 3
      if(tb5c.innerText==p5c){
        document.getElementById("icon5c").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar5").innerHTML = "<img src='../venn/s5b.png' class='gambar3'>";
        document.getElementById("tahap54").className = document.getElementById("tahap54").className.replace("hilang", "");
      } else{
        if(tb5c.innerText==p5a){
          salah5c=1;
        } else if (tb5c.innerText==p5b){
          salah5c=2;
        } else{
          salah5d=4;
        }
        document.getElementById("icon5c").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol5c").innerHTML = "<button class='cekulang' onclick='ulang5c()'><b>Ulang</b></button>"
      }
    }

    if(i==3){
      //tahap 4
      if(tb5d.innerText==p5d){
        document.getElementById("icon5d").innerHTML = "<img src='../img/true.png' width='15px'>";
        document.getElementById("gambar5").innerHTML = "<img src='../venn/s5c.png' class='gambar3'>";
        document.getElementById("ket5").innerHTML = "<img src='../img/true.png' width='35px'>";
        document.getElementById("lanjut53").className = document.getElementById("lanjut53").className.replace('hilang','');
        document.getElementById("tab5a").className += " hilang";
        document.getElementById("tab5b").className += " hilang";
        document.getElementById("tab5c").className += " hilang";
        document.getElementById("kiri5").className += " tinggi2";
        document.getElementById("kanan5").className += " tinggi2";
      } else{
        if(tb5d.innerText==p5a){
          salah5d=1;
        } else if (tb5d.innerText==p5b){
          salah5d=2;
        } else{
          salah5d=3;
        }
        document.getElementById("icon5d").innerHTML = "<img src='../img/false.png' width='15px'>";
        document.getElementById("tombol5d").innerHTML = "<button class='cekulang' onclick='ulang5d()'><b>Ulang</b></button>"
      }
    }

  })
}
function ulang5a(){
  document.getElementById("tb5a").innerText = "";
  document.getElementById("icon5a").innerHTML ="";
  document.getElementById("tombol5a").innerHTML = "";
  if(salah5a==2){
    document.getElementById("pil5b").innerHTML = "<span class='pilihan' id='p5b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan E dengan lingkaran/kurva tertutup</span>";
  } else if (salah5a==3){
    document.getElementById("pil5c").innerHTML = "<span class='pilihan' id='p5c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan E dengan noktah/titik di dalam lingkaran</span>";
  } else{
    document.getElementById("pil5d").innerHTML = "<span class='pilihan' id='p5d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan E di luar lingkaran</span>";
  }
}
function ulang5b(){
  document.getElementById("tb5b").innerText = "";
  document.getElementById("icon5b").innerHTML ="";
  document.getElementById("tombol5b").innerHTML = "";
  if(salah5b==1){
    document.getElementById("pil5a").innerHTML = "<span class='pilihan' id='p5a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah5b==3){
    document.getElementById("pil5c").innerHTML = "<span class='pilihan' id='p5c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan E dengan noktah/titik di dalam lingkaran</span>";
  } else{
    document.getElementById("pil5d").innerHTML = "<span class='pilihan' id='p5d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan E di luar lingkaran</span>";
  }
}
function ulang5c(){
  document.getElementById("tb5c").innerText = "";
  document.getElementById("icon5c").innerHTML ="";
  document.getElementById("tombol5c").innerHTML = "";
  if(salah5c==1){
    document.getElementById("pil5a").innerHTML = "<span class='pilihan' id='p5a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah5c==2){
    document.getElementById("pil5b").innerHTML = "<span class='pilihan' id='p5b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan E dengan lingkaran/kurva tertutup</span>";
  } else{
    document.getElementById("pil5d").innerHTML = "<span class='pilihan' id='p5d' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan S yang bukan merupakan anggota himpunan E di luar lingkaran</span>";
  }
}
function ulang5d(){
  document.getElementById("tb5d").innerText = "";
  document.getElementById("icon5d").innerHTML ="";
  document.getElementById("tombol5d").innerHTML = "";
  if(salah5d==1){
    document.getElementById("pil5a").innerHTML = "<span class='pilihan' id='p5a' draggable='true' ondragstart='drag(event)'>Buatlah persegi panjang dan notasi S pada sudut kiri atas</span>";
  } else if (salah5d==2){
    document.getElementById("pil5b").innerHTML = "<span class='pilihan' id='p5b' draggable='true' ondragstart='drag(event)'>Gambarkan himpunan E dengan lingkaran/kurva tertutup</span>";
  } else{
    document.getElementById("pil5c").innerHTML = "<span class='pilihan' id='p4c' draggable='true' ondragstart='drag(event)'>Tuliskan anggota himpunan E dengan noktah/titik di dalam lingkaran</span>";
  }
}

//////////////////////////////

function cekk11(){
  var himp = document.getElementById("jawab11");
  var ang = document.getElementById("jawab12");
  var anggota = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value;
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==9){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon11').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk11').className += " hilang";
      document.getElementById("lanjutt11").className = document.getElementById("lanjutt11").className.replace('hilang','');
    } else{
      document.getElementById('ikon11').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg11').className = document.getElementById('ulangg11').className.replace('hilang','');
    }
}

function ulangg11(){
  for(var i=1; i<=2; i++){
    document.getElementById('jawab1'+i).value= "";
    document.getElementById('jawab1'+i).className = document.getElementById('jawab1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon11').innerHTML = "";
  document.getElementById('ulangg11').className += ' hilang';
}

function cekk12(){
  var himp = document.getElementById("jawab13");
  var ang = document.getElementById("jawab14");
  var anggota = [1, 2, 3, 4, 5];
  var benar = 0;
  var ada = 0;

  if(himp.value=="J"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value;
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==5){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon12').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk12').className += " hilang";
      document.getElementById("lanjutt12").className = document.getElementById("lanjutt12").className.replace('hilang','');
    } else{
      document.getElementById('ikon12').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg12').className = document.getElementById('ulangg12').className.replace('hilang','');
    }
}

function ulangg12(){
  for(var i=3; i<=4; i++){
    document.getElementById('jawab1'+i).value= "";
    document.getElementById('jawab1'+i).className = document.getElementById('jawab1'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon12').innerHTML = "";
  document.getElementById('ulangg12').className += ' hilang';
}

/////////////////////

function cekk21(){
  var himp = document.getElementById("jawab21");
  var ang = document.getElementById("jawab22");
  var anggota = ['h', 'a', 'r', 'i'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==4){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon21').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk21').className += " hilang";
      document.getElementById("lanjutt21").className = document.getElementById("lanjutt21").className.replace('hilang','');
    } else{
      document.getElementById('ikon21').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg21').className = document.getElementById('ulangg21').className.replace('hilang','');
    }
}

function ulangg21(){
  for(var i=1; i<=2; i++){
    document.getElementById('jawab2'+i).value= "";
    document.getElementById('jawab2'+i).className = document.getElementById('jawab2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon21').innerHTML = "";
  document.getElementById('ulangg21').className += ' hilang';
}

function cekk22(){
  var himp = document.getElementById("jawab23");
  var ang = document.getElementById("jawab24");
  var anggota = ['h', 'a', 'i'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="K"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==3){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon22').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk22').className += " hilang";
      document.getElementById("lanjutt22").className = document.getElementById("lanjutt22").className.replace('hilang','');
    } else{
      document.getElementById('ikon22').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg22').className = document.getElementById('ulangg22').className.replace('hilang','');
    }
}

function ulangg22(){
  for(var i=3; i<=4; i++){
    document.getElementById('jawab2'+i).value= "";
    document.getElementById('jawab2'+i).className = document.getElementById('jawab2'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon22').innerHTML = "";
  document.getElementById('ulangg22').className += ' hilang';
}

/////////////////////////

function cekk31(){
  var himp = document.getElementById("jawab31");
  var ang = document.getElementById("jawab32");
  var anggota = ['h', 'i', 'm', 'p', 'u', 'n', 'a'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==7){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon31').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk31').className += " hilang";
      document.getElementById("lanjutt31").className = document.getElementById("lanjutt31").className.replace('hilang','');
    } else{
      document.getElementById('ikon31').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg31').className = document.getElementById('ulangg31').className.replace('hilang','');
    }
}

function ulangg31(){
  for(var i=1; i<=2; i++){
    document.getElementById('jawab3'+i).value= "";
    document.getElementById('jawab3'+i).className = document.getElementById('jawab3'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon31').innerHTML = "";
  document.getElementById('ulangg31').className += ' hilang';
}

function cekk32(){
  var himp = document.getElementById("jawab33");
  var ang = document.getElementById("jawab34");
  var anggota = ['h', 'i', 'm'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="L"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==3){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon32').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk32').className += " hilang";
      document.getElementById("lanjutt32").className = document.getElementById("lanjutt32").className.replace('hilang','');
    } else{
      document.getElementById('ikon32').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg32').className = document.getElementById('ulangg32').className.replace('hilang','');
    }
}

function ulangg32(){
  for(var i=3; i<=4; i++){
    document.getElementById('jawab3'+i).value= "";
    document.getElementById('jawab3'+i).className = document.getElementById('jawab3'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon32').innerHTML = "";
  document.getElementById('ulangg32').className += ' hilang';
}

///////////////////////

function cekk41(){
  var himp = document.getElementById("jawab41");
  var ang = document.getElementById("jawab42");
  var anggota = ['s', 'u', 'n', 'g', 'a', 'i'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==6){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon41').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk41').className += " hilang";
      document.getElementById("lanjutt41").className = document.getElementById("lanjutt41").className.replace('hilang','');
    } else{
      document.getElementById('ikon41').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg41').className = document.getElementById('ulangg41').className.replace('hilang','');
    }
}

function ulangg41(){
  for(var i=1; i<=2; i++){
    document.getElementById('jawab4'+i).value= "";
    document.getElementById('jawab4'+i).className = document.getElementById('jawab4'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon41').innerHTML = "";
  document.getElementById('ulangg41').className += ' hilang';
}

function cekk42(){
  var himp = document.getElementById("jawab43");
  var ang = document.getElementById("jawab44");
  var anggota = ['s', 'u'];
  var benar = 0;
  var ada = 0;

  if(himp.value=="M"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value.toLowerCase();
  ang2 = ang2.replace(/\s+/g, '');
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==2){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon42').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk42').className += " hilang";
      document.getElementById("lanjutt42").className = document.getElementById("lanjutt42").className.replace('hilang','');
    } else{
      document.getElementById('ikon42').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg42').className = document.getElementById('ulangg42').className.replace('hilang','');
    }
}

function ulangg42(){
  for(var i=3; i<=4; i++){
    document.getElementById('jawab4'+i).value= "";
    document.getElementById('jawab4'+i).className = document.getElementById('jawab4'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon42').innerHTML = "";
  document.getElementById('ulangg42').className += ' hilang';
}

///////////////////////////

function cekk51(){
  var himp = document.getElementById("jawab51");
  var ang = document.getElementById("jawab52");
  var anggota = [1, 2, 3, 4, 5, 6, 7];
  var benar = 0;
  var ada = 0;

  if(himp.value=="S"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value;
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==7){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon51').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk51').className += " hilang";
      document.getElementById("lanjutt51").className = document.getElementById("lanjutt51").className.replace('hilang','');
    } else{
      document.getElementById('ikon51').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg51').className = document.getElementById('ulangg51').className.replace('hilang','');
    }
}

function ulangg51(){
  for(var i=1; i<=2; i++){
    document.getElementById('jawab5'+i).value= "";
    document.getElementById('jawab5'+i).className = document.getElementById('jawab5'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon51').innerHTML = "";
  document.getElementById('ulangg51').className += ' hilang';
}

function cekk52(){
  var himp = document.getElementById("jawab53");
  var ang = document.getElementById("jawab54");
  var anggota = [2, 3, 5, 7];
  var benar = 0;
  var ada = 0;

  if(himp.value=="N"){
    benar += 1;
  } else{
    himp.className += " boxmerah";
  }

  var ang2 = ang.value;
  ang2 = ang2.split(',');
  for(var j=0; j<anggota.length; j++){
    for(var k=0; k<ang2.length; k++){
      if(anggota[j]==ang2[k]){
        ada+=1;
        anggota[j]="";
      }
    }
  }
  if(ada==4){
    benar+=1;
  } else{
    ang.className += " boxmerah";
  }

  if(benar==2){
      document.getElementById('ikon52').innerHTML = "<img src='../img/true.png' width='15px'>";
      document.getElementById('cekk52').className += " hilang";
      document.getElementById("lanjutt52").className = document.getElementById("lanjutt52").className.replace('hilang','');
    } else{
      document.getElementById('ikon52').innerHTML = "<img src='../img/false.png' width='15px'>";
      document.getElementById('ulangg52').className = document.getElementById('ulangg52').className.replace('hilang','');
    }
}

function ulangg52(){
  for(var i=3; i<=4; i++){
    document.getElementById('jawab5'+i).value= "";
    document.getElementById('jawab5'+i).className = document.getElementById('jawab5'+i).className.replace('boxmerah', "");
  }
  document.getElementById('ikon52').innerHTML = "";
  document.getElementById('ulangg52').className += ' hilang';
}

