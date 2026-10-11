const canvas = document.getElementById("memeCanvas");
const ctx = canvas.getContext("2d", { alpha: false });
// Source - https://stackoverflow.com/a/42769179
// Posted by m87, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-12, License - CC BY-SA 3.0

const imageLoader = document.getElementById("imageLoader");
imageLoader.addEventListener("change", handleImage, false);

var f = new FontFace('Impact', 'url(impact.ttf)');

var img = new Image();
// img.crossOrigin = "Anonymous";
img.src = "default.jpg";
f.load().then(function(font) {
    document.fonts.add(font);
// default image
img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(this, 0, 0);
    drawText();
};

});
// user loaded image
function handleImage() {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function (event) {
            img.src = event.target.result;
            img.onload = function () {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
                drawText();
            };
        };
        reader.readAsDataURL(this.files[0]);
    }
}

function downloadMeme() {
    let dataURL = canvas.toDataURL("image/png");

    // Create a dummy link text
    let a = document.createElement("a");
    // Set the link to the image so that when clicked, the image begins downloading
    a.href = dataURL;
    // Specify the image filename
    a.download = "meme.png";
    // Click on the link to set off download
    a.click();

}

// Source - https://stackoverflow.com/a/74595545
// Posted by human bean
// Retrieved 2026-07-12, License - CC BY-SA 4.0

let inputText = document.getElementById("inputText");
inputText.addEventListener("input", drawMeme, false);
inputText.value = `А МНЄ ЗДРАВЫ ДОБРЫ СОН\nDUŽE DRAŽE ČIM\n\nПРИСПЄТИ ИЗДЄЛАТИ\nVELMI VAŽNU RABOTU`;
// let button = document.getElementById("blin");
// button.addEventListener("click", (e) => {
//     inputText.value += blin.innerText;
//     drawMeme()
// });

// Font size slider
// Source - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_rangeslider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var memeFontSize;
var memeMarginTop;

slider.oninput = function () {
    output.innerHTML = " = " + this.value + "%";
    x = this.value / 100;
    memeMarginTop = memeFontSize * 0.88;
    drawMeme();
};
slider.value = 100;
slider.oninput();

// Draw MEME

function drawText() {
    memeFontSize = (canvas.height / 10) * x;
    memeMarginTop = memeFontSize * 1.12;

    ctx.font = `${memeFontSize}px Impact`;
    ctx.fillStyle = "white";
    ctx.lineWidth = memeFontSize / 30;
    ctx.textAlign = "center";

    // Вот это самое хитроумное что мне пришло в голову

    let textTop = inputText.value.split("\n\n")[0].split("\n");
    let textBottom = inputText.value.split("\n\n")[1].split("\n").reverse();

    for (line = 0; line < textTop.length; line++) {
        ctx.fillText(
            textTop[line],
            canvas.width / 2,
            memeMarginTop * (line + 1),
                     canvas.width,
        );
        ctx.strokeText(
            textTop[line],
            canvas.width / 2,
            memeMarginTop * (line + 1),
                       canvas.width,
        );
    }
    for (line = 0; line < textBottom.length; line++) {
        ctx.fillText(
            textBottom[line],
            canvas.width / 2,
            canvas.height - memeMarginTop * (line + 0.15),
                     canvas.width,
        );
        ctx.strokeText(
            textBottom[line],
            canvas.width / 2,
            canvas.height - memeMarginTop * (line + 0.15),
                       canvas.width,
        );
    }
}

function drawMeme() {
    ctx.drawImage(img, 0, 0);
    drawText();
}
