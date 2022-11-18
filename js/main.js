//Global

const dsnv = new DanhSachNhanVien();
const validation = new Validation();

function getELE(id) {
  return document.getElementById(id);
}

function setLocalStorage() {
  localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
  if (localStorage.getItem("DSNV") != null) {
    dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
    hienThiLenTable(dsnv.mangNV);
  }
}
getLocalStorage();

//taiKhoan,hoTen,email, matKhau, ngayLam,chucVu, gioLam
function themNhanVien() {
  var taiKhoan = getELE("tknv").value;
  var hoTen = getELE("name").value;
  var email = getELE("email").value;
  var matKhau = getELE("password").value;
  var ngayLam = getELE("datepicker").value;
  var luongCB = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gioLam = getELE("gioLam").value;

  // console.log(taiKhoan,hoTen,email, matKhau, ngayLam,luongCB, chucVu, gioLam)

  var isValid = true;

  isValid &= validation.checkEmpty(taiKhoan,"Tài khoản không được để trống", "tbTKNV") &&
  validation.checkIDTK(taiKhoan,"Tài khoản không được trùng", "tbTKNV", dsnv.mangNV) &&
  validation.checkID(taiKhoan,"Tài khoản không đúng định dạng","tbTKNV")

  isValid &= validation.checkEmpty(hoTen, "Tên sinh viên không được để trống", "tbTen") &&
  validation.checkName(hoTen, "Tên sinh viên không đúng định dạng","tbTen");


isValid &= validation.checkEmail(email, "Email không đúng định dạng", "tbEmail")
isValid &= validation.checkPass(matKhau, "Mật khẩu phải có ít nhất 1 chữ thường- 1 chữ hoa- số- kí tự đặc biệt", "tbMatKhau")
isValid &= validation.checkDate(ngayLam, "Ngày làm không đúng định dạng","tbNgay")
isValid &= validation.checkSalary(luongCB, "Lương cơ bản không đúng định dạng","tbLuongCB")
isValid &= validation.checkDropDown("chucvu", "Vui lòng chọn chức vụ", "tbChucVu")
isValid &= validation.checkHourWork(gioLam, "Giờ làm trong khoảng 80-200h", "tbGioLam")

  if (isValid) {
    var nv = new NhanVien(taiKhoan,hoTen,email,matKhau,ngayLam,Number(luongCB),chucVu,Number(gioLam));
    nv.tongLuong();
    nv.xepLoai();
    // console.log(nv);

    //Thêm vào mảng nv
    dsnv.themNV(nv);
    // console.log(dsnv.mangNV);

    //Hiển thị lên table
    hienThiLenTable(dsnv.mangNV);
    setLocalStorage();
    hienThiLenTable(dsnv.mangNV);
    document.querySelector("#btnDong").click();
  }


}



function hienThiLenTable(mang) {
  //nv: tung doi tuong nv
  var content = "";
  mang.map(function (nv) {
    // console.log(nv);
    content += `<tr>
        <td>${nv.taiKhoan}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tongLuong}</td>
        <td>${nv.xepLoai}</td>
        <td class="d-flex">
            <button class="btn btn-danger mr-2" onclick="xoaNhanVien('${nv.taiKhoan}')"><i class="fa-solid fa-trash"></i></button>
            <button class="btn btn-success" id="btnView" data-toggle="modal" data-target="#myModal" onclick="xemNhanVien('${nv.taiKhoan}')"><i class="fa-solid fa-eye"></i></button>
        </td>
        </tr>`;
  });
  getELE("tableDanhSach").innerHTML = content;
}

function xoaNhanVien(userNV) {
  dsnv.xoaNV(userNV);
  setLocalStorage();
  getLocalStorage();
}

function xemNhanVien(userNVXem) {
  var viTri = dsnv.timViTri(userNVXem);
  if (viTri > -1) {
    getELE("tknv").value = dsnv.mangNV[viTri].taiKhoan;
    getELE("tknv").disabled = true;

    getELE("name").value = dsnv.mangNV[viTri].hoTen;
    getELE("email").value = dsnv.mangNV[viTri].email;
    getELE("password").value = dsnv.mangNV[viTri].matKhau;
    getELE("datepicker").value = dsnv.mangNV[viTri].ngayLam;
    getELE("luongCB").value = dsnv.mangNV[viTri].luongCB;
    getELE("chucvu").value = dsnv.mangNV[viTri].chucVu;
    getELE("gioLam").value = dsnv.mangNV[viTri].gioLam;
  }
}

function capNhatNhanVien() {
  var taiKhoan = getELE("tknv").value;
  var hoTen = getELE("name").value;
  var email = getELE("email").value;
  var matKhau = getELE("password").value;
  var ngayLam = getELE("datepicker").value;
  var luongCB = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gioLam = getELE("gioLam").value;

  taiKhoan = taiKhoan.replace(/\s/g, "");

  var isValid = true;


  isValid &= validation.checkEmpty(hoTen, "Tên sinh viên không được để trống", "tbTen") &&
  validation.checkName(hoTen, "Tên sinh viên không đúng định dạng","tbTen");


isValid &= validation.checkEmail(email, "Email không đúng định dạng", "tbEmail")
isValid &= validation.checkPass(matKhau, "Mật khẩu phải có ít nhất 1 chữ thường- 1 chữ hoa- số- kí tự đặc biệt", "tbMatKhau")
isValid &= validation.checkDate(ngayLam, "Ngày làm không đúng định dạng","tbNgay")
isValid &= validation.checkSalary(luongCB, "Lương cơ bản không đúng định dạng","tbLuongCB")
isValid &= validation.checkDropDown("chucvu", "Vui lòng chọn chức vụ", "tbChucVu")
isValid &= validation.checkHourWork(gioLam, "Giờ làm trong khoảng 80-200h", "tbGioLam")



if (isValid) {
  var nvCapNhat = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    Number(luongCB),
    chucVu,
    Number(gioLam)
  );

  nvCapNhat.tongLuong();
  nvCapNhat.xepLoai();

  dsnv.capnhatNV(nvCapNhat);
  setLocalStorage();
  getLocalStorage();
  hienThiLenTable(dsnv.mangNV);
  document.querySelector("#btnDong").click();
}
}

function resetForm() {
  getELE("formQLNV").reset();
  getELE("tknv").disabled = false;

  getELE("tbTKNV").style.display = "none";
  getELE("tbTen").style.display = "none";
  getELE("tbEmail").style.display = "none";
  getELE("tbMatKhau").style.display = "none";
  getELE("tbNgay").style.display = "none";
  getELE("tbLuongCB").style.display = "none";
  getELE("tbChucVu").style.display = "none";
  getELE("tbGioLam").style.display = "none";
}

function timKiemNhanVien() {
  var inputSearch = document.querySelector("#searchName").value;
  var nvSearch = dsnv.mangNV.filter((nv) => {
    return nv.taiKhoan
      .toUpperCase()
      .includes(inputSearch.toUpperCase().replace(/\s/g, ""));
  });
  // console.log(nvSearch);
  return hienThiLenTable(nvSearch);
}

function timKiemXepLoai() {
  var inputSearch = document.querySelector("#searchRank").value;

  var rankSearch =  dsnv.mangNV.filter((nv) => {
    return nv.xepLoai
      .toUpperCase()
      .includes(inputSearch.toUpperCase())
  })
  return hienThiLenTable(rankSearch);

}