function replaceName() {
    let name;
    do {
        name = prompt("Please enter your name");
    } while (!name); // Loop until a valid name is entered
    document.getElementById("userName").innerHTML = name;
}

// Call replaceName function when the page loads
window.onload = replaceName;

document.addEventListener('DOMContentLoaded', function() {
    const banners = document.querySelectorAll('.banner-item');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showBanner(index) {
        banners.forEach((banner, i) => {
            if (i === index) {
                banner.classList.add('active');
            } else {
                banner.classList.remove('active');
            }
        });
    }

    function nextBanner() {
        currentIndex = (currentIndex + 1) % banners.length;
        showBanner(currentIndex);
    }

    function prevBanner() {
        currentIndex = (currentIndex - 1 + banners.length) % banners.length;
        showBanner(currentIndex);
    }

    prevBtn.addEventListener('click', prevBanner);
    nextBtn.addEventListener('click', nextBanner);

    showBanner(currentIndex); // Show the first banner initially
});

function validateForm() {
    // Reset errors
    document.getElementById('nameError').innerText = "";
    document.getElementById('dobError').innerText = "";
    document.getElementById('genderError').innerText = "";
    document.getElementById('messageError').innerText = "";
    document.getElementById('result').innerText = "";

    // Get form values
    const name = document.getElementById('nameInput').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    let valid = true;

    // Validate name
    if (!name || !name.trim()) {
        document.getElementById('nameError').innerText = "Nama harus diisi.";
        valid = false;
    }

    // Validate dob
    if (!dob) {
        document.getElementById('dobError').innerText = "Tanggal lahir harus diisi.";
        valid = false;
    }

    // Validate gender
    if (!gender) {
        document.getElementById('genderError').innerText = "Jenis kelamin harus dipilih.";
        valid = false;
    }

    // Validate message
    if (!message || !message.trim()) {
        document.getElementById('messageError').innerText = "Pesan harus diisi.";
        valid = false;
    }

    // If valid, display result
    if (valid) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<p><strong>Nama:</strong> ${name}</p>
                               <p><strong>Tanggal Lahir:</strong> ${dob}</p>
                               <p><strong>Jenis Kelamin:</strong> ${gender}</p>
                               <p><strong>Pesan:</strong> ${message}</p>`;
    }
}
