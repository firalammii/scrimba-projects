const modal = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalText = document.getElementById("modal-text");

const modalChoiceBtns = document.getElementById('modal-choice-btns');

setTimeout(function () {
    modal.style.display = 'inline';
}, 1500);

modalCloseBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

const acceptBtn = document.getElementById("accept-btn");
acceptBtn.addEventListener("submit", function (event) {
    event.preventDefault();
    modalText.innerHTML =
        `<div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="uploadText">
                Uploading your data to the dark web...
            </p>
        </div>`;
    setTimeout(function () {
        document.getElementById("uploadText").innerText = "Making our sales...";

    }, 1500);
    setTimeout(function () {
        document.getElementById("modal-inner").innerHTML =
            `<h2>Thanks you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div> `;

    }, 3000);
    setTimeout(function () {
        modal.style.display = "none";
    }, 4500);
    modalCloseBtn.disabled = false;
});

