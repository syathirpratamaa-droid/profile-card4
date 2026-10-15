
const followBtn = document.getElementById("followBtn");
const contactBtn = document.getElementById("contactBtn");

// Tombol Follow Me
followBtn.addEventListener("click", function() {
    if (followBtn.innerText === "Follow Me") {
        followBtn.innerText = "Following ✓";
        followBtn.style.backgroundColor = "#16805d";
        followBtn.style.borderColor = "#16805d";
    } else {
        followBtn.innerText = "Follow Me";
        followBtn.style.backgroundColor = "#b32626";
        followBtn.style.borderColor = "#b32626";
    }
});

// Tombol Contact
contactBtn.addEventListener("click", function() {
    const nomorWA = "6285891253814";

    const pesan = "WOYYY BASITH JIGEL";
    const linkWA = "https://wa.me/" + nomorWA
        + "?text=" + encodeURIComponent(pesan);

    window.open(linkWA, "_blank");
});
