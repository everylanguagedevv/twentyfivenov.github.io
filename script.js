const celebrateButton = document.querySelector('#celebrate');
const colors = ['#ff6b51', '#ffd166', '#b9ead9', '#8fd3ff'];

    celebrateButton.addEventListener('click', () => {
      for (let index = 0; index < 42; index += 1) {
        const piece = document.createElement('span');
        piece.className = 'confetti drop';
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.background = colors[index % colors.length];
        piece.style.animationDelay = `${Math.random() * .35}s`;
        piece.style.transform = `rotate(${Math.random() * 90}deg)`;
        document.body.appendChild(piece);
        piece.addEventListener('animationend', () => piece.remove());
      }
      celebrateButton.innerHTML = '<span aria-hidden="true">&#10084;</span> Yahhh, ketahuan! sksks';
    }, { once: true });

function jalankanHitungMundur() {
  function hitung() {
    const sekarang = new Date();
    const tahunSekarang = sekarang.getFullYear();
    
    let waktuTarget = new Date(`Nov 25, ${tahunSekarang} 00:00:00`).getTime();
    const waktuSekarang = sekarang.getTime();

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
  }

  hitung();
  setInterval(hitung, 1000);
}

jalankanHitungMundur();
