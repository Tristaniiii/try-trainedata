// my-datat/utils/ocr.js.
import { TesseractWorker } from 'tesseract.js';

const { TesseractWorker } = require('tesseract.js');

const worker = new TesseractWorker();

worker.loadLanguage('eng'); // Change to the desired language code
worker.load('tesseract-lang-data/eng.traineddata'); // Replace 'path/to/' with the actual path to your language data files

async function performOCR(file) {
    const { data: { text } } = await worker.recognize(file);
    return text;
}

module.exports = { 
    performOCR,
};
const { performOCR } = require('./utils/ocr'); // Adjust the path as needed

async function processImage() {
    const recognizedText = await performOCR('path/to/your/image.png'); // Replace with the path to your image file
    console.log('Recognized text:', recognizedText);
}

processImage();
