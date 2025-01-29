import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

function App() {
  const [summary, setSummary] = useState(null);
  const [extractedText, setExtractedText] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSummary(response.data.summary);
      setExtractedText(response.data.extracted_text);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-5">Automated PDF Summarizer</h1>
      <Dropzone onDrop={handleDrop} accept=".pdf" maxFiles={1}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="p-6 border-2 border-dashed border-blue-400 bg-white rounded-md cursor-pointer">
            <input {...getInputProps()} />
            <p>Drag & drop a PDF here, or click to select one</p>
          </div>
        )}
      </Dropzone>
      {loading && <p className="mt-4">Processing...</p>}
      {summary && (
        <div className="mt-6 p-4 bg-white rounded-md shadow-md w-3/4">
          <h2 className="text-xl font-bold">Extracted Text</h2>
          <p className="text-sm text-gray-600 mt-2">{extractedText}</p>
          <h2 className="text-xl font-bold mt-4">Summary</h2>
          <p className="mt-2">{summary}</p>
        </div>
      )}
    </div>
  );
}

export default App;
