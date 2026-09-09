let count = 0; // Inisialisasi count ke 0

function increaseCount() {
    count++; // Menambah count sebesar 1
    displayCount(); // Menampilkan nilai count terbaru
    checkCountValue(); // Memeriksa milestone
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML = count; // Memperbarui tampilan di HTML
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

// Practice Task: Fungsi untuk mereset count
function resetCount() {
    count = 0;
    displayCount();
    alert("Followers count has been reset.");
}