/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

1.  Javascript punya 3 scope yaitu Block Scope, Function Scope dan Global Scope

2.  -Global scope : Variabel yang bisa akses dimanapun dalam suatu file dan dideklarasi diluarblock

    -Local scope : Variable yang tidak bisa diakses diluar function dan dideklarasi didalam function

    -Block scope : Variable yang tidak bisa diakses diluar {} (curly braces) da, dideklarasi didalam {}

3.  // GLOBAL SCOPE
    let kelereng = 'merah';
    function mainKelereng() {
    // LOCAL SCOPE
    let kelereng = 'hijau';
    console.log(kelereng); // 'hijau'
    if(true) {
    // BLOCK SCOPE
    kelereng = 'biru';
    console.log(kelereng); // 'biru'
    }
    console.log(kelereng); // 'biru'
    }
    console.log(kelereng); // 'merah'

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

1.Yang akan tampil adalah "Mariah"
2.Karena yang kita console.log adalah function(printFirstName) bukan variabel name

const name = "John Watson";

function printFirstName(name) {
return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
