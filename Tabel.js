import React from 'react';
import { Table } from 'react-bootstrap';

// Define sample data directly within the component
const data = [
  { id: 1, nama: 'John Doe', tanggalLahir: '1990-01-01',gender: 'Laki-laki' ,namaPenyakit: 'Flu', namaDokter: 'Dr. Smith', diagnosa: 'Common cold', obat: 'Paracetamol' },
  { id: 2, nama: 'Jane Doe', tanggalLahir: '1995-05-23',gender: 'Laki-laki' ,namaPenyakit: 'Headache', namaDokter: 'Dr. Lee', diagnosa: 'Tension headache', obat: 'Ibuprofen' },
  // Add more data as needed
];

const Tabel = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Nama Pasien</th>
          <th>Tanggal Lahir</th>
          <th>Gender</th>
          <th>Nama Penyakit</th>
          <th>Nama Dokter</th>
          <th>Diagnosa</th>
          <th>Obat</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={row.id}>
            <td>{index + 1}</td>
            <td>{row.nama}</td>
            <td>{row.tanggalLahir}</td>
            <td>{row.gender}</td>
            <td>{row.namaPenyakit}</td>
            <td>{row.namaDokter}</td>
            <td>{row.diagnosa}</td>
            <td>{row.obat}</td>
            <td>
            <button className="btn btn-warning">Edit</button>
            <button className="btn btn-danger mr-1">Hapus</button>
            </td> 
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Tabel;
