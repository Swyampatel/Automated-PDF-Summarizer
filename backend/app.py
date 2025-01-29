from flask import Flask, request, jsonify
from flask_cors import CORS
import fitz  # PyMuPDF
from transformers import pipeline

app = Flask(__name__)
CORS(app)

# Load the summarization model
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

def extract_text_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    text = ""
    for page in doc:
        text += page.get_text("text") + "\n"
    return text

@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    filepath = f"./uploads/{file.filename}"
    file.save(filepath)

    # Extract text from PDF
    text = extract_text_from_pdf(filepath)

    # Summarize text (limit input size to 1024 tokens to avoid truncation issues)
    summary = summarizer(text[:1024], max_length=300, min_length=50, do_sample=False)[0]["summary_text"]

    return jsonify({"summary": summary, "extracted_text": text})

if __name__ == "__main__":
    app.run(debug=True)
    