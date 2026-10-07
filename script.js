function jalankanHitungMundur() {
  setInterval(() => {
    const sekarang = new Date();
    const tahunSekarang = sekarang.getFullYear();
    
    let waktuTarget = new Date(`Nov 25, ${tahunSekarang} 00:00:00`).getTime();
    const waktuSekarang = sekarang.getTime();

    /*JIKA tanggal 25 Nov tahun ini sudah lewat, otomatis target ganti ke 25 Nov tahun depan*/
    if (waktuTarget - waktuSekarang < 0) {
      waktuTarget = new Date(`Nov 25, ${tahunSekarang + 1} 00:00:00`).getTime();
    }

    const selisih = waktuTarget - waktuSekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((selisih % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = String(hari).padStart(2, '0');
    document.getElementById('hours').innerText = String(jam).padStart(2, '0');
    document.getElementById('minutes').innerText = String(menit).padStart(2, '0');
    document.getElementById('seconds').innerText = String(detik).padStart(2, '0');
    document.getElementById('seconds').innerText = String(detik).padStart(2, '0');
  }, 1000);
}

jalankanHitungMundur();
