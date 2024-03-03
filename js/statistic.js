// import html2canvas from 'html2canvas';
// window.html2canvas = html2canvas;
function showTab(tabNumber) {
    // Ẩn tất cả các nội dung
    document.getElementById("content1").classList.add("hidden");
    document.getElementById("content2").classList.add("hidden");

    document.getElementById("tab1").classList.add("tabHidden");
    document.getElementById("tab2").classList.add("tabHidden");

    // Hiển thị nội dung của tab được chọn
    document.getElementById("content" + tabNumber).classList.remove("hidden");
    document.getElementById("tab" + tabNumber).classList.remove("tabHidden");

}


var studentData = [
    { maSinhVien: 'B21DCCN001', tenSinhVien: 'Nguyen Van A', chuyenNganh: 'CNTT', khoa: 'Khoa 2021', tyLeThamGia: '7/8', tyLeDat: '70%', gpa: '3.5' },
    { maSinhVien: 'B22DCCN001', tenSinhVien: 'Nguyen Van B', chuyenNganh: 'CNTT', khoa: 'Khoa 2022', tyLeThamGia: '9/9', tyLeDat: '90%', gpa: '3.83' },
    { maSinhVien: 'B21DCCN001', tenSinhVien: 'Nguyen Van A', chuyenNganh: 'CNTT', khoa: 'Khoa 2021', tyLeThamGia: '7/8', tyLeDat: '70%', gpa: '3.5' },
    // Thêm dữ liệu sinh viên khác tương tự ở đây
];

// Hàm để hiển thị dữ liệu vào bảng
function showStudentData() {
    var tableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';

    var sttCounter = 1;

    studentData.forEach(function (student) {
        var row = tableBody.insertRow();
        var cellIndex = row.insertCell(0);
        var cellMaSinhVien = row.insertCell(1);
        var cellTenSinhVien = row.insertCell(2);
        var cellChuyenNganh = row.insertCell(3);
        var cellKhoa = row.insertCell(4);
        var cellTyLeThamGia = row.insertCell(5);
        var cellTyLeDat = row.insertCell(6);
        var cellGPA = row.insertCell(7);

        // Thêm số thứ tự tự động
        cellIndex.innerHTML = sttCounter++;
        cellMaSinhVien.innerHTML = student.maSinhVien;
        cellTenSinhVien.innerHTML = student.tenSinhVien;
        cellChuyenNganh.innerHTML = student.chuyenNganh;
        cellKhoa.innerHTML = student.khoa;
        cellTyLeThamGia.innerHTML = student.tyLeThamGia;
        cellTyLeDat.innerHTML = student.tyLeDat;
        // Tạo một thẻ a để tạo liên kết
        var linkElement = document.createElement('a');
        linkElement.href = '#';  // Đặt href tùy thuộc vào đường dẫn bạn muốn chuyển hướng
        linkElement.className = 'gpa-link';
        linkElement.innerHTML = student.gpa;

        // Thêm sự kiện onclick để gọi hàm showGradeDetails và truyền giá trị GPA
        linkElement.onclick = function () {
            showGradeDetails(student.gpa);
        };
        
        // Thêm thẻ a vào cellGPA
        cellGPA.appendChild(linkElement);

    });
}
function showGradeDetails(gpa) {
    window.location.href = 'grade-details.html?gpa=' + gpa;
}

document.addEventListener('DOMContentLoaded', showStudentData);

var examData = [
    { kyThi: 'Luyen Tap', ngayThi: '01/03/2024', caThi: '9:00', maSinhVien: 'B21DCCN001', tenSinhVien: 'Nguyen Van A', monThi: 'CSDL', diem: '8.5' },
    { kyThi: 'Giua Ky', ngayThi: '02/03/2024', caThi: '14:00', maSinhVien: 'B22DCCN001', tenSinhVien: 'Nguyen Van B', monThi: 'KTMT', diem: '9.2' },

];

function showExamData() {
    var tableBody = document.getElementById('examTable').getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';

    var sttCounter = 1;

    examData.forEach(function (exam) {
        var row = tableBody.insertRow();
        var cellIndex = row.insertCell(0);
        var cellKyThi = row.insertCell(1); // Thêm ô kỳ thi ở đây
        var cellNgayThi = row.insertCell(2);
        var cellCaThi = row.insertCell(3);
        var cellMaSinhVien = row.insertCell(4);
        var cellTenSinhVien = row.insertCell(5);
        var cellMonThi = row.insertCell(6);
        var cellDiem = row.insertCell(7); // Dịch chuyển số ô tiếp theo lên

        // Thêm số thứ tự tự động
        cellIndex.innerHTML = sttCounter++;
        cellKyThi.innerHTML = exam.kyThi; // Thêm dữ liệu kỳ thi
        cellNgayThi.innerHTML = exam.ngayThi;
        cellCaThi.innerHTML = exam.caThi;
        cellMaSinhVien.innerHTML = exam.maSinhVien;
        cellTenSinhVien.innerHTML = exam.tenSinhVien;
        cellMonThi.innerHTML = exam.monThi;
        cellDiem.innerHTML = exam.diem;
    });
}

// Gọi hàm hiển thị dữ liệu cho bảng "Danh sách Ca Thi"
document.addEventListener('DOMContentLoaded', showExamData);
function toggleFilterDropdown(filterId) {
    var filterDropdown = document.getElementById('filterDropdown' + filterId);
    filterDropdown.style.display = 'block';

    var filterItems = filterDropdown.querySelectorAll('a');
    filterItems.forEach(function (link) {
        link.addEventListener('click', function () {
            var searchFilter = link.textContent.toLowerCase();
            filterDropdown.style.display = 'none';

            var examTable = document.getElementById('studentTable');
            var rows = examTable.getElementsByTagName('tr');

            for (var i = 1; i < rows.length; i++) {
                var cells = rows[i].getElementsByTagName('td');
                var rowText = '';

                for (var j = 0; j < cells.length; j++) {
                    rowText += cells[j].innerText.toLowerCase() + '  ';
                }

                if (searchFilter === '') {
                    rows[i].style.display = '';
                } else {
                    if (rowText.indexOf(searchFilter) > -1) {
                        rows[i].style.display = '';
                    } else {
                        rows[i].style.display = 'none';
                    }
                }
            }
        });
    });
}

function toggleFilterDropdownex(filterId) {
    var filterDropdown = document.getElementById('filterDropdown' + filterId);
    filterDropdown.style.display = 'block';

    var filterItems = filterDropdown.querySelectorAll('a');
    filterItems.forEach(function (link) {
        link.addEventListener('click', function () {
            var searchFilter = link.textContent.toLowerCase();
            filterDropdown.style.display = 'none';

            var examTable = document.getElementById('examTable');
            var rows = examTable.getElementsByTagName('tr');

            for (var i = 1; i < rows.length; i++) {
                var cells = rows[i].getElementsByTagName('td');
                var rowText = '';

                for (var j = 0; j < cells.length; j++) {
                    rowText += cells[j].innerText.toLowerCase() + '  ';
                }

                if (searchFilter === '') {
                    rows[i].style.display = '';
                } else {
                    if (rowText.indexOf(searchFilter) > -1) {
                        rows[i].style.display = '';
                    } else {
                        rows[i].style.display = 'none';
                    }
                }
            }
        });
    });
}
window.onclick = function (event) {
    var filterDropdowns = document.querySelectorAll('.filter-dropdown-content');
    filterDropdowns.forEach(function (filterDropdown) {
        var filterButton = filterDropdown.parentElement.querySelector('.filterbtn');

        if (!filterButton.contains(event.target)) {
            filterDropdown.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("showAllBtn").addEventListener("click", function () {
        var currentTab = document.querySelector(".tabs .tab:not(.tabHidden)");
        showAllItems(currentTab);
    });
});

function showAllItems(tab) {
    var contentId = tab.id.replace("tab", "content");
    var content = document.getElementById(contentId);
    var rows = content.querySelectorAll("tbody tr");

    rows.forEach(function (row) {
        row.style.display = "";
    });
}
function toggleExportDropdown() {
    const exportDropdown = document.getElementById('exportDropdown');
    exportDropdown.classList.toggle('show');
}

function exportToCSV(tableId, filename) {
    const table = document.getElementById(tableId);
    const rows = table.querySelectorAll('tr');

    let csvContent = 'data:text/csv;charset=utf-8,';

    rows.forEach((row, index) => {
        const rowData = [];
        const cols = row.querySelectorAll('td, th');

        cols.forEach((col) => {
            rowData.push(col.innerText);
        });

        csvContent += rowData.join(',') + '\r\n';
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', filename + '.csv');
    document.body.appendChild(link);
    link.click();
}
document.getElementById('exportCSVStudentBtn').addEventListener('click', function () {
    exportToCSV('studentTable', 'DanhSachSinhVien');
});
document.getElementById('exportCSVExamBtn').addEventListener('click', function () {
    exportToCSV('examTable', 'DanhSachCaThi');
});

function exportToPDF(tableId, filename) {
    const element = document.getElementById(tableId);

    html2pdf(element, {
        margin: 10,
        filename: filename + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    });
}

// Gọi hàm xuất PDF khi click vào nút
document.getElementById('exportPDFStudentBtn').addEventListener('click', function () {
    exportToPDF('studentTable', 'DanhSachSinhVien');
});

document.getElementById('exportPDFExamBtn').addEventListener('click', function () {
    exportToPDF('examTable', 'DanhSachCaThi');
});
