function DanhSachNhanVien(){
    //thuộc tính
    this.mangNV = [];
    //phương thức
    this.themNV = function(nv){
        //thêm phần tử nv vào mảng
    this.mangNV.push(nv);
    }
    this.timViTri = function(userNV){
        var viTri = -1;
        viTri = this.mangNV.findIndex(function(nv){
            return userNV == nv.taiKhoan
        })
        return viTri;
    }
    this.xoaNV = function(userNV){
        var viTri = this.timViTri(userNV);
        if(viTri != -1){
            this.mangNV.splice(viTri, 1);
        }
    }
    this.capnhatNV = function(nvCapNhat){
        var viTri = this.timViTri(nvCapNhat.taiKhoan);
        if(viTri > -1){
            dsnv.mangNV[viTri] = nvCapNhat;
        }
    }
}