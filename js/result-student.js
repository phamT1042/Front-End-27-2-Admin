import amiriHex from './font/amiriFont.js'

var students = [
    {
        name: 'Văn A',
        code: 'B21DCCN001',
        exams: [
            {
                name: 'Kiểm tra giữa kì môn triết học Mác Lênin',
                score: 5,
                status: 'Hoàn thành',
                time: '10:00 AM 12/03/2024',
                questions: [
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'B'
                    },
                    {
                        question: 'Vì sao đứng im mang tính tương đối?',
                        correctAnswer: 'C',
                        studentAnswer: 'C'
                    }
                ]
            },
            {
                name: 'Kiểm tra cuối kì môn Mạng máy tính',
                score: 10,
                status: 'Hoàn thành',
                time: '2:00 PM 12/03/2024',
                questions: [
                    {
                        question: 'Protocol nào được sử dụng cho mạng Internet:',
                        correctAnswer: 'D',
                        studentAnswer: 'D'
                    },
                    {
                        question: 'Tầng Network (cụ thể trong tầng IP) chịu trách nhiệm:',
                        correctAnswer: 'B',
                        studentAnswer: 'B'
                    }
                ]
            }
        ]
    },
    {
        name: 'Thị B',
        code: 'B21DCCN002',
        exams: [
            {
                name: 'Kiểm tra giữa kì môn triết học Mác Lênin',
                score: 10,
                status: 'Hoàn thành',
                time: '10:00 AM 12/03/2024',
                questions: [
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Vì sao đứng im mang tính tương đối?',
                        correctAnswer: 'C',
                        studentAnswer: 'C'
                    }
                ]
            },
            {
                name: 'Kiểm tra cuối kì môn Lịch sử đảng',
                score: 10,
                status: 'Hoàn thành',
                time: '3:00 PM 12/03/2024',
                questions: [
                    {
                        question: 'Mâu thuẫn cơ bản và chủ yếu ở Việt Nam đầu thế kỷ XX là mâu thuẫn nào?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Đặc điểm ra đời của giai cấp công nhân Việt Nam như thế nào?',
                        correctAnswer: 'C',
                        studentAnswer: 'C'
                    }
                ]
            }
        ]
    },
    {
        name: 'Văn C',
        code: 'B21DCCN003',
        exams: [
            {
                name: 'Kiểm tra giữa kì môn triết học Mác Lênin',
                score: 10,
                status: 'Hoàn thành',
                time: '10:00 AM 12/03/2024',
                questions: [
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Vì sao đứng im mang tính tương đối?',
                        correctAnswer: 'C',
                        studentAnswer: 'C'
                    }
                ]
            },
            {
                name: 'Kiểm tra giữa kì môn triết học Mác Lênin',
                score: 10,
                status: 'Hoàn thành',
                time: '10:00 AM 12/03/2024',
                questions: [
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Vì sao đứng im mang tính tương đối?',
                        correctAnswer: 'C',
                        studentAnswer: 'C'
                    }
                ]
            },
            {
                name: 'Kiểm tra giữa kì môn triết học Mác Lênin',
                score: 10,
                status: 'Hoàn thành',
                time: '10:00 AM 12/03/2024',
                questions: [
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Vì sao đứng im mang tính tương đối?',
                        correctAnswer: 'C',
                        studentAnswer: 'C'
                    }
                ]
            },
            {
                name: 'Kiểm tra giữa kì môn triết học Mác Lênin',
                score: 10,
                status: 'Hoàn thành',
                time: '10:00 AM 12/03/2024',
                questions: [
                    {
                        question: 'Triết học Mác - Lênin là gì?',
                        correctAnswer: 'A',
                        studentAnswer: 'A'
                    },
                    {
                        question: 'Vì sao đứng im mang tính tương đối?',
                        correctAnswer: 'C',
                        studentAnswer: 'C'
                    }
                ]
            },
            {
                name: 'Kiểm tra cuối kì môn Mạng máy tính',
                score: 10,
                status: 'Hoàn thành',
                time: '2:00 PM 12/03/2024',
                questions: [
                    {
                        question: 'Protocol nào được sử dụng cho mạng Internet:',
                        correctAnswer: 'D',
                        studentAnswer: 'D'
                    },
                    {
                        question: 'Tầng Network (cụ thể trong tầng IP) chịu trách nhiệm:',
                        correctAnswer: 'B',
                        studentAnswer: 'B'
                    }
                ]
            }
        ]
    }
];

function searchStudent() {
    var input = document.getElementById('student-input').value;
    var resultsDiv = document.getElementById('student-results');
    resultsDiv.innerHTML = '';

    students.forEach(function (student) {
        if (input.length != 0 && (student.name.toLowerCase().includes(input.toLowerCase()) || student.code.toLowerCase().includes(input.toLowerCase()))) {
            var studentDiv = document.createElement('div');
            studentDiv.classList.add('student-element');
            studentDiv.innerHTML = `<h2> ${student.name} - ${student.code} </h2>`

            student.exams.forEach(function (exam) {
                var examDiv = document.createElement('div');
                examDiv.innerHTML =
                    `
                        <div class='exam-title'>
                            <h3 class='exam-name'> ${exam.name} </h3>
                            <button onclick="showDetails('${student.code}', '${exam.name}')"> Chi tiết </button>
                        </div>
                        <p> Điểm: ${exam.score}</p>
                        <p>Trạng thái: ${exam.status}</p>
                        <p>Thời gian tham gia: ${exam.time}</p>
                        
                    `
                studentDiv.appendChild(examDiv);
            });

            var exportButton = document.createElement('button');
            exportButton.innerHTML = 'In kết quả';
            exportButton.classList.add('export-button')
            exportButton.onclick = function () { exportReport(student.code); };
            studentDiv.appendChild(exportButton);

            resultsDiv.appendChild(studentDiv);
        }
    });
}

window.showDetails = function(studentCode, examName) {
    var examDetails = document.getElementById('exam-details');

    const student = students.find(s => s.code === studentCode);
    const exam = student.exams.find(e => e.name === examName);

    examDetails.innerHTML =
        `
            <h3 style="text-align: center"> ${exam.name} </h3> <br>
            Sinh viên: ${student.name} - ${student.code} <br> <br>
        `

    examDetails.innerHTML += exam.questions.map((q, index) => {
        let isCorrect = q.studentAnswer === q.correctAnswer;
        return `
                <strong> Câu ${index + 1}: </strong> ${q.question} <br>
                Đáp án chọn: ${q.studentAnswer} <br> 
                <span style="color: ${isCorrect ? 'green' : 'red'}"> Đáp án đúng: ${q.correctAnswer}</span> <br> <br>
            `;
    }).join('\n');

    var modal = document.querySelector('.modal');
    modal.classList.remove('hidden')
    var overlay = document.querySelector('.overlay');
    overlay.classList.remove('hidden')
}

window.closeModal = function() {
    var modal = document.querySelector('.modal');
    modal.classList.add('hidden')
    var overlay = document.querySelector('.overlay')
    overlay.classList.add('hidden')
}

function exportReport(studentCode) {
    var student = students.find(s => s.code === studentCode);
    var doc = new jsPDF();

    const amiriFont = amiriHex

    doc.addFileToVFS("Amiri-Regular.ttf", amiriFont);
    doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
    doc.setFont("Amiri");

    doc.setFontSize(12);
    doc.text(`Kết quả các bài thi của ${student.name} - ${student.code}`, 10, 10);

    var y = 20
    student.exams.forEach(function (exam, i) {
        doc.text('Kỳ thi: ' + exam.name, 10, y);
        y += 10
        doc.text('Điểm: ' + exam.score, 20, y);
        y += 10
        doc.text('Trạng thái: ' + exam.status, 20, y);
        y += 10
        doc.text('Thời gian tham gia: ' + exam.time, 20, y);
        y += 10
    });

    doc.save(student.name + '.pdf');
}

document.getElementById('button-search').addEventListener('click', searchStudent)