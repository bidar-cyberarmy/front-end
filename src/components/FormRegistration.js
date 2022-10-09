import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import axios from "axios";

const FormRegistration = () => {
  const [fullname, setFullName] = useState("");
  const [valueDate, setValueDate] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [gender, setGender] = useState("");
  const [nim, setNim] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [prodi, setProdi] = useState("");
  const [kelas, setKelas] = useState("");
  const [jenjang, setJenjang] = useState("");
  const [semester, setSemester] = useState(1);
  const [agama, setAgama] = useState("");
  const [alamatAsli, setAlamatAsli] = useState("");
  const [alamatSekarang, setAlamatSekarang] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kabupaten, setKabupaten] = useState("");
  const [divisi, setDivisi] = useState("");

  const [modal, setModal] = useState("");

  const user = {
    full_name: fullname,
    email: email,
    phone_number: phone,
    gender: {
      name: gender,
    },
    religion: agama,
    student: {
      nim: nim,
      faculty: fakultas,
      study_program: prodi,
      class: {
        name: kelas,
      },
      level: {
        name: jenjang,
      },
      semester: semester,
    },
    original_address: alamatAsli,
    residence_address: alamatSekarang,
    province: provinsi,
    city_or_district: kabupaten,
    bdca_family: {
      division: {
        name: divisi,
      },
    },
  };
  const postUser = (e) => {
    e.preventDefault();
    axios
      .post("https://cyberarmy-backend.herokuapp.com/api/auth/register", {
        user: user,
      })
      .then((res) => {
        return setModal("modal-open");
      });
  };

  return (
    <>
      <div className={`modal ${modal}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Berhasil</h3>
          <p className="py-4">
            Anda Berhasil daftar silakan klik button di bawah ini untuk masuk
            grup whatsapp
          </p>
          <div className="modal-action">
            <label
              htmlFor="my-modal"
              onClick={() =>
                (window.location.href =
                  "https://chat.whatsapp.com/BNfFdSkgKAdGhA89C0aDcg")
              }
              className="btn"
            >
              Oke
            </label>
          </div>
        </div>
      </div>
      <form action="" onSubmit={postUser}>
        <div>
          <h1 className="mb-3">Personal Detail</h1>
          <div className="sm:grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <div className="mb-3">
              <TextField
                value={fullname}
                name="fullName"
                type="text"
                label="Nama Lengkap"
                variant={"filled"}
                className={"w-full"}
                onChange={(val) => setFullName(val.target.value)}
              />
            </div>
            <FormControl
              fullWidth
              variant={"filled"}
              style={{ marginBottom: "12px" }}
            >
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  value={valueDate}
                  renderInput={(params) => (
                    <TextField {...params} variant={"filled"} />
                  )}
                  onChange={(newValue) => {
                    setValueDate(newValue);
                  }}
                />
              </LocalizationProvider>
            </FormControl>

            <div className="mb-3">
              <TextField
                name="email"
                type="email"
                value={email}
                label="Alamat Email"
                variant={"filled"}
                className={"w-full"}
                onChange={(val) => setEmail(val.target.value)}
              />
            </div>
            <div className="mb-3">
              <TextField
                name="phone"
                type="number"
                value={phone}
                label="Nomor Hp"
                variant={"filled"}
                className={"w-full"}
                onChange={(val) => setPhone(val.target.value)}
              />
            </div>
            <div className="">
              <FormControl fullWidth>
                <InputLabel id="gender">Jenis Kelamin</InputLabel>
                <Select
                  value={gender}
                  labelId="gender"
                  variant="filled"
                  name="gender"
                  label="Jenis Kelamin"
                  onChange={(val) => setGender(val.target.value)}
                >
                  <MenuItem value={"Male"}>Laki - Laki</MenuItem>
                  <MenuItem value={"Female"}>Perempuan</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="mb-3">
              <TextField
                name="agama"
                type="text"
                label="Agama"
                variant={"filled"}
                className={"w-full"}
                value={agama}
                onChange={(val) => setAgama(val.target.value)}
              />
            </div>

            <div className="mb-3">
              <TextField
                name="alamatAsli"
                type="text"
                label="Alamat Asli"
                variant={"filled"}
                className={"w-full"}
                value={alamatAsli}
                onChange={(val) => setAlamatAsli(val.target.value)}
              />
            </div>
            <div className="mb-3">
              <TextField
                name="alamatSekarang"
                type="text"
                label="Alamat sekarang"
                variant={"filled"}
                className={"w-full"}
                value={alamatSekarang}
                onChange={(val) => setAlamatSekarang(val.target.value)}
              />
            </div>

            <div className="mb-3">
              <TextField
                name="provinsi"
                type="text"
                label="Provinsi"
                variant={"filled"}
                className={"w-full"}
                value={provinsi}
                onChange={(val) => setProvinsi(val.target.value)}
              />
            </div>

            <div className="mb-3">
              <TextField
                name="kabupaten"
                type="text"
                label="Kabupaten"
                variant={"filled"}
                className={"w-full"}
                value={kabupaten}
                onChange={(val) => setKabupaten(val.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="mb-3">Indentitas Mahasiswa</h1>
          <div className="sm:grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <div className="mb-3">
              <TextField
                name="nim"
                type="text"
                label="NIM"
                variant={"filled"}
                className={"w-full"}
                value={nim}
                onChange={(val) => setNim(val.target.value)}
              />
            </div>
            <div className="mb-3">
              <TextField
                name="fakultas"
                type="text"
                label="Fakultas"
                variant={"filled"}
                className={"w-full"}
                value={fakultas}
                onChange={(val) => setFakultas(val.target.value)}
              />
            </div>
            <div className="mb-3">
              <TextField
                name="prodi"
                type="text"
                label="Program Studi"
                variant={"filled"}
                className={"w-full"}
                value={prodi}
                onChange={(val) => setProdi(val.target.value)}
              />
            </div>

            <div className="">
              <FormControl fullWidth>
                <InputLabel id="kelas">Kelas</InputLabel>
                <Select
                  labelId="kelas"
                  variant="filled"
                  name="kelas"
                  label="Kelas"
                  value={kelas}
                  onChange={(val) => setKelas(val.target.value)}
                >
                  <MenuItem value={"Reguler"}>Reguler</MenuItem>
                  <MenuItem value={"Karyawan"}>Karyawan</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="">
              <FormControl fullWidth>
                <InputLabel id="jenjang">Jenjang</InputLabel>
                <Select
                  labelId="jenjang"
                  variant="filled"
                  name="jenjang"
                  label="Jenjang"
                  value={jenjang}
                  onChange={(val) => setJenjang(val.target.value)}
                >
                  {/* <MenuItem value={"D3"}>D3</MenuItem> */}
                  <MenuItem value={"S1"}>S1</MenuItem>
                  <MenuItem value={"S2"}>S2</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="mb-3">
              <TextField
                name="semester"
                type="number"
                label="Semester"
                variant={"filled"}
                className={"w-full"}
                value={semester}
                onChange={(val) => setSemester(val.target.value)}
              />
            </div>
            <div className="">
              <FormControl fullWidth>
                <InputLabel id="divisi">Divisi</InputLabel>
                <Select
                  labelId="divisi"
                  variant="filled"
                  name="divisi"
                  label="Divisi"
                  value={divisi}
                  onChange={(val) => setDivisi(val.target.value)}
                >
                  <MenuItem value={"Multimedia"}>Multimedia</MenuItem>
                  <MenuItem value={"Software"}>Software</MenuItem>
                  <MenuItem value={"IT Security"}>IT Security</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <div className=" flex flex-row-reverse">
          <button
            type="submit"
            className="px-3 py-2 bg-blue-600 text-white rounded-lg "
          >
            Kirim
          </button>
          <NavLink
            className="px-3 py-2 bg-red-500 mr-3 text-white rounded-lg "
            to={"/"}
          >
            Batal
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default FormRegistration;
