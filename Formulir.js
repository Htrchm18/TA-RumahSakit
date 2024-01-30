import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

const Formulir = ({ nama, deskripsi, penyakit, tanggalLahir, dokter, diagnosa, obat, handleChange, handleSubmit, id }) => {
    return (
        <div className="mt-5">
            <Row>
                <Col>
                <h4>{id ? "Edit Data" : "Tambah Data"}</h4>
                <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nama">
                    <Form.Label>Nama Pasien</Form.Label>
                    <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="deskripsi">
                    <Form.Label>Tanggal Lahir</Form.Label>
                    <Form.Control as="text" rows="3" name="date" value={Date} onChange={(event) => handleChange(event)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="nama">
                    <Form.Label>Nama Penyakit</Form.Label>
                    <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="nama">
                    <Form.Label>Nama Dokter</Form.Label>
                    <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="nama">
                    <Form.Label>Diagnosa Dokter</Form.Label>
                    <Form.Control type="textarea" name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="nama">
                    <Form.Label>Obat</Form.Label>
                    <Form.Control type="text" name="nama" value={nama} onChange={(event) => handleChange(event)}/>
                </Form.Group>
                <button variant="primary" type="submit">Simpan</button>
                </Form>
            </Col>
        </Row>
    </div>
    )
}

export default Formulir;