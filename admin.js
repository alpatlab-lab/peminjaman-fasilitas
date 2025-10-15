// Data dummy peminjaman
const daftarPeminjaman = [
  { nama: 'Rina', fasilitas: 'Proyektor', tanggal: '2025-10-17', status: 'Menunggu' },
  { nama: 'Budi', fasilitas: 'Lapangan', tanggal: '2025-10-18', status: 'Disetujui' },
  { nama: 'Tina', fasilitas: 'Ruang Kelas', tanggal: '2025-10-20', status: 'Menunggu' }
];

function renderTabel() {
  const tbody = document.querySelector('#tabelPeminjaman tbody');
  tbody.innerHTML = ''; // Bersihkan isi lama

  daftarPeminjaman.forEach((pinjam, index) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${pinjam.nama}</td>
      <td>${pinjam.fasilitas}</td>
      <td>${pinjam.tanggal}</td>
      <td>${pinjam.status}</td>
      <td>
        ${pinjam.status === 'Menunggu' ? `
          <button onclick="setujui(${index})">Setujui</button>
          <button onclick="tolak(${index})">Tolak</button>
        ` : '-'}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function setujui(index) {
  daftarPeminjaman[index].status = 'Disetujui';
  renderTabel();
}

function tolak(index) {
  daftarPeminjaman[index].status = 'Ditolak';
  renderTabel();
}

// Jalankan saat halaman dimuat
renderTabel();
