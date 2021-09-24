/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

1. Type Error adalah Error ketika tipe data tidak sesuai seperti yang diharapkan
2. Reference Error adalah Error ketika menggunakan suatu nilai yang belum dideklarasikan
3. Range Error adalah Error ketika menggunakan suatu nilai yang diluar rentang/batas yang ditentukan
4. Syntax Error adalah Error karena kesalahan penulisan sintaks

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

1. Error
2. Reference Error
3. Karena salaryWithVar dan salaryWithConst belum dideklarasikan terlebih dahulu

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
