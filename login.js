// Cek login sebelum render tabel
if (sessionStorage.getItem('isLoggedIn') !== 'true') {
  alert('Silakan login terlebih dahulu!');
  window.location.href = 'login.html';
}
