import { catsData } from "./data.js";

const radioInputsContainer = document.getElementById("radio-inputs-container");
const catPictureDisplayer = document.getElementById("cat-picture-displayer");
const isGifOnlySelected = document.getElementById("checkbox");
const showCatBtn = document.getElementById("show-cat-btn");
// const returnBtn = document.getElementById("return-btn").addEventListener('click', () => {
// 
// });

renderRadioInputs();

catPictureDisplayer.addEventListener("click", closePictureDisplayer);
function closePictureDisplayer () {
    catPictureDisplayer.style.display = "none";
}

showCatBtn.addEventListener('click', handleShowCatBtn);
function handleShowCatBtn () {
    const isRadioSelected = document.querySelector('input[type="radio"]:checked');
    const singleCatObject = returnSingleCatObject();
    if (isRadioSelected && singleCatObject) {
        catPictureDisplayer.classList.remove("cat-picture-displayer");
        catPictureDisplayer.classList.add("imageviewer");
        catPictureDisplayer.style.display = "flex";
        const imageViewer = document.getElementById("image-viewer");

        document.getElementById("paragraphes").style.display = "none"; // change the styles

        const singleCatObject = returnSingleCatObject();

        imageViewer.innerHTML = `
                <img class ="image" src="./images/${singleCatObject.image}" alt="${singleCatObject.alt}" height="400px" width="400px">
            `;
    }
}
function returnSingleCatObject () {
    const isRadioSelected = document.querySelector('input[type="radio"]:checked');

    if (isGifOnlySelected.checked && isRadioSelected) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value;
        const selectedCats = catsData.filter((cat) => cat.emotionTags.includes(selectedEmotion) && cat.isGif);
        if (selectedCats.length === 1)
            return selectedCats[0];
        else
            return selectedCats[Math.floor(Math.random() * selectedCats.length)];

    }
    else if (isRadioSelected) {

        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value;
        const selectedCats = catsData.filter((cat) => cat.emotionTags.includes(selectedEmotion));
        if (selectedCats.length === 1)
            return selectedCats;
        else
            return selectedCats[Math.floor(Math.random() * selectedCats.length)];

    }
}


function renderRadioInputs () {
    const uniqueEmotions = getUniqueEmotionsArray();
    let radioInputs = ``;
    for (let emtags of uniqueEmotions)
        radioInputs +=
            `   <div class="inputs">
                    <label for="${emtags}">${emtags}</label>
                    <input type="radio" id= ${emtags} name="emotions" value="${emtags}">
                    </div>
            `;

    radioInputsContainer.innerHTML = radioInputs;
}
function getUniqueEmotionsArray () {
    const uniqueEmotions = [];
    for (let cat of catsData) {
        for (let emtags of cat.emotionTags) {
            if (!uniqueEmotions.includes(emtags))
                uniqueEmotions.push(emtags);
        }
    }
    return uniqueEmotions;
}

