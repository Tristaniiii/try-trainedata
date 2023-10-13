// your-ocr-project/pages/index.js
import React, { useState } from 'react';
import { performOCR } from '../utils/ocr'; // Adjust the path as needed

function OCRComponent() {
    const [recognizedText, setRecognizedText] = useState('');

    async function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const text = await performOCR(file);
            setRecognizedText(text);
        }
    }

    return (
        <div>
            <input type="file" onChange={handleFileUpload} />
            <pre>{recognizedText}</pre>
        </div>
    );
}

export default OCRComponent;
