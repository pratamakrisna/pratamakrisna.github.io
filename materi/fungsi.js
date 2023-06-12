function redirectToInstagram() {
  window.location.href = "https://www.instagram.com/bangkrisna_"; // Ganti dengan URL Instagram Anda
}

function validateForm(event) {
  event.preventDefault();
  var namaField = document.getElementById("nama");
  var nama = namaField.value;

  // Ganti dengan nama yang diharapkan
  if (nama === "bangkrisna_") {
    window.location.href =
      "https://drive.google.com/file/d/1Okd5O5lM1Lpu2mu_4X6UCITMRfhKOOVE/view?usp=drive_link"; // Ganti dengan URL landing page selanjutnya
  } else {
    alert("Pasti Ga Follow!");
  }
}
