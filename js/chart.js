import amiriHex from './font/amiriFont.js'

var chartData = [
    { msv: 'B21DCCN001', tensv: 'Nguyen Van A', diem: '8.0', tt: '05/01/2024 15:00' },
    { msv: 'B21DCCN002', tensv: 'Nguyen Van B', diem: '7.0', tt: '05/01/2024 15:05' },
    { msv: 'B21DCCN003', tensv: 'Nguyen Van C', diem: '7.0', tt: '05/01/2024 15:01' },
    { msv: 'B21DCCN004', tensv: 'Nguyen Van D', diem: '9.0', tt: '05/01/2024 15:02' },
    { msv: 'B21DCCN005', tensv: 'Nguyen Van E', diem: '6.0', tt: '05/01/2024 16:00' },
    { msv: 'B21DCCN006', tensv: 'Nguyen Van F', diem: '4.0', tt: '05/01/2024 15:02' },
    { msv: 'B21DCCN007', tensv: 'Nguyen Van G', diem: '3.0', tt: '05/01/2024 15:02' },
    { msv: 'B21DCCN008', tensv: 'Nguyen Van H', diem: '0.0', tt: 'Khong tham gia' },
    { msv: 'B21DCCN009', tensv: 'Nguyen Van I', diem: '2.0', tt: '05/01/2024 15:00' },
    { msv: 'B21DCCN010', tensv: 'Nguyen Van K', diem: '4.0', tt: '05/01/2024 15:04' },
    { msv: 'B21DCCN011', tensv: 'Nguyen Van L', diem: '1.0', tt: '05/01/2024 15:03' },
    { msv: 'B21DCCN012', tensv: 'Nguyen Van M', diem: '5.0', tt: '05/01/2024 15:03' },
    { msv: 'B21DCCN013', tensv: 'Nguyen Van N', diem: '2.0', tt: '05/01/2024 15:04' },
    { msv: 'B21DCCN014', tensv: 'Nguyen Van J', diem: '9.0', tt: '05/01/2024 15:03' },
    { msv: 'B21DCCN015', tensv: 'Nguyen Van K', diem: '10.0', tt: '05/01/2024 16:00' },
    { msv: 'B21DCCN016', tensv: 'Nguyen Van O', diem: '3.0', tt: '05/01/2024 16:01' },
    { msv: 'B21DCCN017', tensv: 'Nguyen Van P', diem: '4.0', tt: '05/01/2024 16:03' },
    { msv: 'B21DCCN018', tensv: 'Nguyen Van Q', diem: '5.0', tt: '05/01/2024 16:02' },
    { msv: 'B21DCCN019', tensv: 'Nguyen Van W', diem: '0.0', tt: 'Khong tham gia' },
    { msv: 'B21DCCN020', tensv: 'Nguyen Van Z', diem: '6.0', tt: '05/01/2024 16:02' },
    { msv: 'B21DCCN021', tensv: 'Nguyen Van X', diem: '6.0', tt: '05/01/2024 16:02' },
    { msv: 'B21DCCN022', tensv: 'Nguyen Van V', diem: '8.0', tt: '05/01/2024 16:04' },
    { msv: 'B21DCCN023', tensv: 'Nguyen Van I', diem: '0.0', tt: 'Khong tham gia' },
    { msv: 'B21DCCN024', tensv: 'Nguyen Van R', diem: '1.0', tt: '05/01/2024 16:05' },
    { msv: 'B21DCCN025', tensv: 'Nguyen Van Y', diem: '2.0', tt: '05/01/2024 16:02' },
    { msv: 'B21DCCN026', tensv: 'Nguyen Van Z', diem: '4.0', tt: '05/01/2024 16:01' },


];

function updateChartDataset() {
    var diemValues = chartData.map(function (chart) {
        return parseFloat(chart.diem);
    });

    var diemCounts = {};
    diemValues.forEach(function (diem) {
        diemCounts[diem] = (diemCounts[diem] || 0) + 1;
    });

    var data = {
        labels: Object.keys(diemCounts),
        datasets: [{
            label: 'Số lượng sinh viên',
            data: Object.values(diemCounts),
            backgroundColor: '#bb2019',
            borderWidth: 1
        }]
    };

    var options = {
        scales: {
            y: {
                beginAtZero: true,
                max: Math.max(...Object.values(diemCounts)) + 1
            }
        }
    };

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

document.addEventListener('DOMContentLoaded', showChartData);

function updatePieChart() {

    var totalStudents = chartData.length;
    var passedStudents = chartData.filter(function (chart) {
        return parseFloat(chart.diem) >= 5;
    }).length;
    var failedStudents = totalStudents - passedStudents;

    // Tạo dataset cho biểu đồ tròn
    var data = {
        labels: ['Đạt', 'Không đạt'],
        datasets: [{
            data: [passedStudents, failedStudents],
            backgroundColor: ['#bb2019', 'rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
        }]
    };

    var options = {};

    var ctx = document.getElementById('myPieChart').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
}
var isAscending = true; // Theo dõi trạng thái sắp xếp
function sort() {
    chartData.sort(function (a, b) {
        return isAscending ? b.diem - a.diem : a.diem - b.diem;
    });

    isAscending = !isAscending;

    showChartData();
}

function showChartData() {
    var tableBody = document.getElementById('chartTable').getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';

    var sttCounter = 1;

    chartData.forEach(function (chart) {
        var row = tableBody.insertRow();
        var cellIndex = row.insertCell(0);
        var cellmsv = row.insertCell(1);
        var celltensv = row.insertCell(2);
        var cellDiem = row.insertCell(3);
        var celltt = row.insertCell(4);

        // Thêm số thứ tự tự động
        cellIndex.innerHTML = sttCounter++;
        cellmsv.innerHTML = chart.msv;
        celltensv.innerHTML = chart.tensv;
        cellDiem.innerHTML = chart.diem;
        celltt.innerHTML = chart.tt;
    });

    updateChartDataset();

    updatePieChart();
}

window.exportChartPDF = function() {
    const amiriFont = amiriHex

    var pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addFileToVFS("Amiri-Regular.ttf", amiriFont);
    pdf.addFont("Amiri-Regular.ttf", "Amiri", "normal");
    pdf.setFont("Amiri");
    pdf.setFontSize(12);
    pdf.text('Thống kê kỳ thi luyện tập CSDL', 70, 10);

    html2canvas(document.querySelector("#myChart"))
    .then(canva => {
        var imgData = canva.toDataURL('image/png');
        var imgProps = pdf.getImageProperties(imgData);
        var pdfWidth = 125;
        var pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 40, 15, pdfWidth, pdfHeight);
    })
    .then(() => {
        return html2canvas(document.querySelector("#myPieChart"));
    })
    .then(canva => {
        var imgData = canva.toDataURL('image/png');
        var imgProps = pdf.getImageProperties(imgData);
        var pdfWidth = 150;
        var pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, 'PNG', 30, 145, pdfWidth, pdfHeight);
        pdf.save('Thống kê kết quả.pdf');
    })
}
