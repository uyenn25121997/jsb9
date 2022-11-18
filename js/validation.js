function Validation() {
    this.checkEmpty = function (valInput, msgErr, spanID) {
        if (valInput.trim() == "") {
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }
        document.getElementById(spanID).style.display = "none";
        document.getElementById(spanID).innerHTML = "";
        return true;
    };


    this.checkIDTK = function (valInput, msgErr, spanID, mangNV) {
        var isExist = mangNV.some(function (nv) {
            return nv.taiKhoan === valInput;
        });
        if (isExist) {
            document.getElementById(spanID).innerHTML = msgErr;
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        return true;
    };
    this.checkID = function (valInput, msgErr, spanID) {
        var pattern = /[0-9a-zA-Z]{6,}/

        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }

    this.checkName = function (valInput, msgErr, spanID) {

        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/

        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        return false;
    }

    this.checkEmail = function (valInput, msgErr, spanID) {
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkPass = function (valInput, msgErr, spanID) {
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,12}$/;

        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkDate = function (valInput, msgErr, spanID) {
        var pattern = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/

        if (valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkSalary = function (valInput, msgErr, spanID) {
        var pattern = /^(\d{7,8}(\.\d{7,8})?)$/

        if (valInput >= 1000000 && valInput <= 20000000 && valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

    this.checkDropDown = function (seclectID, msgErr, spanID) {
        var index = document.getElementById(seclectID).selectedIndex;
        if (index == 0) {
            document.getElementById(spanID).innerHTML = msgErr;
            document.getElementById(spanID).style.display = "block";
            return false;
        }
        document.getElementById(spanID).innerHTML = "";
        document.getElementById(spanID).style.display = "none";
        return true;
    }

    this.checkHourWork = function (valInput, msgErr, spanID) {
        var pattern = /^(\d{2,3}(\.\d{1,2})?)$/

        if (valInput >= 80 && valInput <= 200 && valInput.match(pattern)) {
            document.getElementById(spanID).innerHTML = "";
            document.getElementById(spanID).style.display = "none";
            return true;
        }
        document.getElementById(spanID).innerHTML = msgErr;
        document.getElementById(spanID).style.display = "block";
        return false;
    }

}