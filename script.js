document.getElementById('formPeminjaman').addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  const nama = data.get('nama');
  const fasilitas = data.get('fasilitas');
  const tanggal = data.get('tanggal');

  console.log({ nama, fasilitas, tanggal });
  alert("Data berhasil dikirim!");
});
