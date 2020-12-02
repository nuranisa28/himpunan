//untuk memasukkan nilai ke variabel localstorage
// localStorage.setItem("skkuis1",0);
// localStorage.setItem("skkuis2",0);
// localStorage.setItem("skkuis3",0);
// localStorage.setItem("skkuis4",0);
// localStorage.setItem("skkuis5",0);

//untuk menghapus variabel dari localstorage
// localStorage.removeItem("skkuis1");
// localStorage.removeItem("skkuis2");
// localStorage.removeItem("skkuis3");
// localStorage.removeItem("skkuis4");
// localStorage.removeItem("skkuis5");

//untuk menghapus semua variabel dari localstorage
// localStorage.clear();

console.log(localStorage);

/*subbab 2*/
function sbb21(){
    var skor = localStorage.getItem("skkuis1");
    // var skor = 75;
    if (skor>=75){
      window.location.href='../../materi2_1/1/materi2_1(1).html';
    } else{
      alert('Maaf, Anda belum bisa membuka materi ini!');
    }
}
function sbb22(){
    var skor = localStorage.getItem("skkuis1");
    // var skor = 75;
    if (skor>=75){
      window.location.href='../../materi2_2/1/materi2_2(1).html';
    } else{
      alert('Maaf, Anda belum bisa membuka materi ini!');
    }
}
function kuis2(){
    var skor = localStorage.getItem("skkuis1");
    // var skor = 75;
    if (skor>=75){
      window.location.href='../../kuiss2/kuis_2.html';
    } else{
      alert('Maaf, Anda belum bisa membuka kuis ini!');
    }
}

/*subbab 3*/
function sbb31(){
  var skor = localStorage.getItem("skkuis2");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../materi3_1/1/materi3_1(1).html';
  } else{
    alert('Maaf, Anda belum bisa membuka materi ini!');
  }
}
function sbb32(){
  var skor = localStorage.getItem("skkuis2");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../materi3_2/1/materi3_2(1).html';
  } else{
    alert('Maaf, Anda belum bisa membuka materi ini!');
  }
}
function sbb33(){
  var skor = localStorage.getItem("skkuis2");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../materi3_3/1/materi3_3(1).html';
  } else{
    alert('Maaf, Anda belum bisa membuka materi ini!');
  }
}
function sbb34(){
  var skor = localStorage.getItem("skkuis2");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../materi3_4/1/materi3_4(1).html';
  } else{
    alert('Maaf, Anda belum bisa membuka materi ini!');
  }
}
function kuis3(){
  var skor = localStorage.getItem("skkuis2");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../kuis3/kuis3.html';
  } else{
    alert('Maaf, Anda belum bisa membuka kuis ini!');
  }
}

/*subbab 4*/
function sbb41(){
  var skor = localStorage.getItem("skkuis3");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../materi4_1/1/materi4_1(1).html';
  } else{
    alert('Maaf, Anda belum bisa membuka materi ini!');
  }
}
function sbb42(){
  var skor = localStorage.getItem("skkuis3");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../materi4_2/1/materi4_2(1).html';
  } else{
    alert('Maaf, Anda belum bisa membuka materi ini!');
  }
}
function sbb43(){
  var skor = localStorage.getItem("skkuis3");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../materi4_3/1/materi4_3(1).html';
  } else{
    alert('Maaf, Anda belum bisa membuka materi ini!');
  }
}
function kuis4(){
  var skor = localStorage.getItem("skkuis3");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../kuis4/kuis4.html';
  } else{
    alert('Maaf, Anda belum bisa membuka kuis ini!');
  }
}

/*subbab 5*/
function sbb51(){
  var skor = localStorage.getItem("skkuis4");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../materi5_1/1/materi5_1(1).html';
  } else{
    alert('Maaf, Anda belum bisa membuka materi ini!');
  }
}
function kuis5(){
  var skor = localStorage.getItem("skkuis4");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../kuis5/kuis5.html';
  } else{
    alert('Maaf, Anda belum bisa membuka kuis ini!');
  }
}

/*latihan*/
function latihan(){
  var skor = localStorage.getItem("skkuis5");
  // var skor = 75;
  if (skor>=75){
    window.location.href='../../formatif/tesformatif.html';
  } else{
    alert('Maaf, Anda belum bisa membuka latihan ini!');
  }
}