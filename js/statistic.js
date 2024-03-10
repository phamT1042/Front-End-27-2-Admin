import amiriHex from './font/amiriFont.js'
window.showTab = function(tabNumber) {
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
];

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

        cellIndex.innerHTML = sttCounter++;
        cellMaSinhVien.innerHTML = student.maSinhVien;
        cellTenSinhVien.innerHTML = student.tenSinhVien;
        cellChuyenNganh.innerHTML = student.chuyenNganh;
        cellKhoa.innerHTML = student.khoa;
        cellTyLeThamGia.innerHTML = student.tyLeThamGia;
        cellTyLeDat.innerHTML = student.tyLeDat;
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
    { kyThi: 'Luyen Tap', monThi: 'CSDL', diem: '8.5', tyle: '90.00%' },
    { kyThi: 'Giua Ky', monThi: 'KTMT', diem: '6.7', tyle: '65.20%' },

];

function showExamData() {
    var tableBody = document.getElementById('examTable').getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';

    var sttCounter = 1;

    examData.forEach(function (exam) {
        var row = tableBody.insertRow();
        var cellIndex = row.insertCell(0);
        var cellKyThi = row.insertCell(1);
        var cellMonThi = row.insertCell(2);
        var cellDiem = row.insertCell(3);
        var celltyle = row.insertCell(4);

        // Thêm số thứ tự tự động
        cellIndex.innerHTML = sttCounter++;
        cellKyThi.innerHTML = exam.kyThi;
        cellDiem.innerHTML = exam.diem;
        celltyle.innerHTML = exam.tyle;

        var linkElement = document.createElement('a');
        linkElement.href = 'chart.html';  // Đặt href tùy thuộc vào đường dẫn bạn muốn chuyển hướng
        linkElement.className = 'gpa-link';
        linkElement.innerHTML = exam.monThi;

        // Thêm sự kiện onclick để gọi hàm showGradeDetails và truyền giá trị GPA
        linkElement.onclick = function () {
            showGradeDetails(exam.monThi);
        };

        // Thêm thẻ a vào cellGPA
        cellMonThi.appendChild(linkElement);
    });
}

// Gọi hàm hiển thị dữ liệu cho bảng "Danh sách Ca Thi"
document.addEventListener('DOMContentLoaded', showExamData);
window.toggleFilterDropdown = function(filterId) {
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

window.toggleFilterDropdownex = function(filterId) {
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
    var filterDropdowns1 = document.querySelectorAll('#filterDropdownClass, #filterDropdownLevel');
    filterDropdowns1.forEach(function (filterDropdown) {
        var filterButton = filterDropdown.parentElement.querySelector('.filterbtn');

        if (!filterButton.contains(event.target) && !filterDropdown.contains(event.target)) {
            filterDropdown.style.display = "none";
        }
    });

    var filterDropdowns2 = document.querySelectorAll('#filterDropdownTestex, #filterDropdownClassex, #filterDropdownLevelex, #filterDropdownStateex');
    filterDropdowns2.forEach(function (filterDropdown) {
        var filterButton = filterDropdown.parentElement.querySelector('.filterbtn');

        if (!filterButton.contains(event.target) && !filterDropdown.contains(event.target)) {
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
const toggleExportDropdown = function() {
    const exportDropdown = document.getElementById('exportDropdown');
    exportDropdown.classList.toggle('show');
}

window.exportToCSV = function(tableId, filename) {
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

window.exportToPDF = function(tableId, filename) {
    const element = document.getElementById(tableId);

    const amiriFont = amiriHex

    var pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addFileToVFS("Amiri-Regular.ttf", amiriFont);
    pdf.addFont("Amiri-Regular.ttf", "Amiri", "normal");
    pdf.setFont("Amiri");

    pdf.setFontSize(12);
    if (tableId === 'studentTable') {
        pdf.text('Kết quả thi của sinh viên', 70, 10);
    }
    else if (tableId === 'examTable') {
        pdf.text('Kết quả các kỳ thi', 80, 10);
    }
    else if (tableId === 'gradeTable') {
        pdf.text('Kết quả thi của sinh viên A', 70, 10);
    }
    else {
        pdf.text('Kết quả kỳ thi luyện tập CSDL', 65, 10);
    }

    html2canvas(element).then(table => {
        var imgData = table.toDataURL('image/png');
        var imgProps = pdf.getImageProperties(imgData);
        var pdfWidth = 200;
        var pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 5, 15, pdfWidth, pdfHeight);
        pdf.save(filename);
    });
}