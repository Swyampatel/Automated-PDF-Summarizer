# PDF Summarizer

## Overview

This project is an **Automated PDF Summarizer** that extracts and summarizes key points from uploaded PDF documents using **AI and NLP**. The application consists of a **Flask backend** and a **React frontend**, designed to process PDFs, extract text, summarize content, and present it in a clean UI.

## Key Features

- **PDF Upload & Extraction**: Uses `PyMuPDF` to extract text from uploaded PDFs.
- **AI-Powered Summarization**: Implements **Hugging Face Transformers** to generate concise summaries.
- **User-Friendly Interface**: Built with **React.js & Tailwind CSS** for an intuitive experience.
- **Backend API**: Flask API handles PDF processing and communicates with the frontend.
- **Deployment Ready**: Can be hosted on **AWS, Heroku, or any cloud provider**.

## What I Learned

### Technical Skills

- **Natural Language Processing (NLP)**: Worked with transformer models for text summarization.
- **Backend Development**: Implemented REST API using Flask.
- **Frontend Development**: Built a responsive UI with React.js and Tailwind CSS.
- **File Handling**: Learned how to handle PDF uploads, extraction, and text processing.
- **Cloud Deployment**: Configured the project for easy deployment.

### Problem-Solving

- **Optimizing Large PDFs**: Managed memory efficiently when handling large files.
- **Improving Summarization**: Fine-tuned models to generate better summaries.
- **CORS Handling**: Resolved API request issues between frontend and backend.

## How It Works

### Backend

1. Users upload a PDF file.
2. Flask extracts text using `PyMuPDF`.
3. The extracted text is passed to a **Hugging Face Transformer model**.
4. A summarized version of the text is returned.

### Frontend

1. Users select and upload a PDF.
2. The processed summary is displayed in a clean UI.

## How to Run the Project

### Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Mac/Linux
   venv\Scripts\activate  # For Windows
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the server:
   ```bash
   python app.py
   ```

### Frontend

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Flask, PyMuPDF, Hugging Face Transformers
- **Tools**: Python, JavaScript, Node.js

## Future Enhancements

- **Add support for multiple PDF uploads**.
- **Implement OCR for image-based PDFs**.
- **Improve summarization accuracy using fine-tuned models**.

## Conclusion

This project highlights my expertise in **AI, NLP, full-stack development, and cloud deployment**. It demonstrates my ability to **integrate AI models into real-world applications** while handling challenges like **file processing, API communication, and frontend design**.

---

**Looking for opportunities in AI and Full-Stack Development! 🚀**
