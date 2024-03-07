var gradeData = [
    { kyhoc: 'Giua ky', tenMon: 'CSDL', times: '2', diemhe10: '6.0', diemhe4: '2.5', diemhechu: 'C+' },
    { kyhoc: 'Cuoi ky', tenMon: 'MMT', times: '1', diemhe10: '7.3', diemhe4: '3.0', diemhechu: 'B' },
    { kyhoc: 'Luyen tap', tenMon: 'CNXHKH', times: '1', diemhe10: '9.0', diemhe4: '4.0', diemhechu: 'A+' },
];

function showGradeData() {
    var tableBody = document.getElementById('gradeTable').getElementsByTagName('tbody')[0];

    tableBody.innerHTML = '';

    var sttCounter = 1;

    gradeData.forEach(function (grade) {
        var row = tableBody.insertRow();
        var cellIndex = row.insertCell(0);
        var cellkyhoc = row.insertCell(1);
        var celltenMon = row.insertCell(2);
        var celltimes = row.insertCell(3);
        var celldiemhe10 = row.insertCell(4);
        var celldiemhe4 = row.insertCell(5);
        var celldiemhechu = row.insertCell(6);

        // Thêm số thứ tự tự động
        cellIndex.innerHTML = sttCounter++;
        cellkyhoc.innerHTML = grade.kyhoc;
        celltenMon.innerHTML = grade.tenMon;
        celltimes.innerHTML = grade.times;
        celldiemhe10.innerHTML = grade.diemhe10;
        celldiemhe4.innerHTML = grade.diemhe4;
        celldiemhechu.innerHTML = grade.diemhechu;
    });
}

document.addEventListener('DOMContentLoaded', showGradeData);

document.addEventListener('DOMContentLoaded', function () {
    // Dữ liệu mẫu từ gradeData
    var subjectNames = gradeData.map(function (grade) {
        return grade.tenMon;
    });

    var diemHe10 = gradeData.map(function (grade) {
        return parseFloat(grade.diemhe10);
    });

    // Lấy context của canvas
    var ctx = document.getElementById('myChart').getContext('2d');

    // Vẽ biểu đồ cột
    var colors = ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(255, 205, 86, 0.2)'];

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: subjectNames,
            datasets: [{
                label: 'Điểm',
                data: diemHe10,
                backgroundColor: colors,
                borderColor: colors.map(color => color.replace('0.2', '1')), // Tạo mảng màu sắc cho đường biên
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10
                }
            },
        }
    });
});