const inputFile1 = document.querySelector('#upload-1');
const inputBlock1 = document.querySelector('.block__form-card-upload-1');
const inputFile2 = document.querySelector('#upload-2');
const inputBlock2 = document.querySelector('.block__form-card-upload-2');

inputFile1.addEventListener('change', () => {
    const checkImage = document.querySelector('.block__form-card-upload-1 > .check-image')
    if (inputFile1.value) {
        inputBlock1.classList.add('upload-success');
        checkImage.classList.add('check-image-active');
    } else {
        inputBlock1.classList.remove('upload-success');
        checkImage.classList.remove('check-image-active');
    }
});
inputFile2.addEventListener('change', () => {
    const checkImage = document.querySelector('.block__form-card-upload-2 > .check-image')
    if (inputFile2.value) {
        inputBlock2.classList.add('upload-success');
        checkImage.classList.add('check-image-active');
    } else {
        inputBlock2.classList.remove('upload-success');
        checkImage.classList.remove('check-image-active');
    }
});

const boxDownload = document.querySelectorAll('.block__form-card-download');

boxDownload.forEach(box => {
    box.addEventListener('click', () => {
        const boxDownloadLink = box.querySelector('.block__form-card-download > a');
        document.location.href = boxDownloadLink.href;
    });
});