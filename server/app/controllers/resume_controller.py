import os
from app.services.resume_service import analyze_resume, match_job_description
from app.utils.pdf_parser import extract_text

UPLOAD_DIR = "uploads"

async def process_resume(file, job_description: str = ""):
    if not os.path.exists(UPLOAD_DIR):
        os.makedirs(UPLOAD_DIR)

    file_path = f"{UPLOAD_DIR}/{file.filename}"

    # Save uploaded file
    with open(file_path, "wb") as f:
        f.write(await file.read())

    # Extract resume text
    text = extract_text(file_path)

    # ATS + Suggestions
    result = analyze_resume(file_path)

    #  Job Description Matching
    if job_description:
        jd_result = match_job_description(text, job_description)
        result.update(jd_result)

    return result