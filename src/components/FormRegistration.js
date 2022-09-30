import React from 'react';
import { NavLink } from 'react-router-dom';
import InputRegister from './InputRegister';
import OptionInputRegister from './OptionInputRegister';

const FormRegistration = () => {
    return (
        <>
            <form action="" >

                <div >
                    <h1 className='mb-3'>Personal Detail</h1>
                    <div className="sm:grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                        <InputRegister label="Nama lengkap" placeholder="Masukan Nama Lengkap" type="text" />
                        <InputRegister label="Tanggal lahir" placeholder="Masukan Nama Lengkap" type="date" />
                        <InputRegister label="Email" placeholder="Masukan Email" type="email" />
                        <InputRegister label="Nomor Handphone" placeholder="Masukan Nomor HP" type="number" />
                        <OptionInputRegister label="Jenis Kelamin" placeholder="Jenis Kelamin"
                            value={
                                [
                                    { text: 'Laki - Laki' },
                                    { text: 'Perempuan' },
                                ]

                            } />
                        <InputRegister label="Agama" placeholder="Masukan Agama" type="text" />
                    </div>

                </div>

                <div className="">
                    <h1 className='mb-3'>Indentitas Mahasiswa</h1>
                    <div className="sm:grid gap-2 sm:grid-cols-2 lg:grid-cols-3">

                        <InputRegister label="Nomor Induk Mahasiswa" placeholder="Masukan NIM" type="text" />
                        <InputRegister label="Fakultas" placeholder="Masukan Fakultas" type="text" />
                        <InputRegister label="Program studi" placeholder="Masukan Program Studi" type="text" />

                        <OptionInputRegister label="Kelas" placeholder="Kelas"
                            value={
                                [
                                    { text: 'Reguler' },
                                    { text: 'Karyawan' },
                                ]
                            } />
                        <OptionInputRegister label="Jenjang" placeholder="Jenjang"
                            value={
                                [
                                    { text: 'D3' },
                                    { text: 'S1' },
                                    { text: 'S2' },
                                ]
                            } />
                        <InputRegister label="Semester" placeholder="Masukan Semester saat ini" type="text" />
                    </div>
                </div>
                <div className=" flex flex-row-reverse">
                    <button className='px-3 py-2 bg-blue-600 text-white rounded-lg '>Kirim</button>
                    <NavLink className="px-3 py-2 bg-red-500 mr-3 text-white rounded-lg " to={'/'}>Batal</NavLink>
                </div>
            </form>
        </>
    );
}

export default FormRegistration;
