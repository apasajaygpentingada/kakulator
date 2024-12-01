function kalikan(){
    const opran1 = document.getElementById("opran1").value;
    const opran2 = document.getElementById("opran2").value;
    const hasilElement = document.getElementById("hasil");

    //validasi input

    if (!opran1 || opran2) {
        hasilElement.textContent="Harap masukan kedua angka!";
        hasilElement.style.color="red";
        return;
    }

    //perhitungan
    const hasil = parseFloat(opran1) * parseFloat(opran2);

    //tampilkan hasil
    hasilElement.textContent='hasil: ${hasil}';
    hasilElement.style.color="green"
}