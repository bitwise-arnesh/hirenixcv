import os
from app.services.resume_service import analyze_resume

UPLOAD_DIR = "uploads"

async def process_resume(file):
    if not os.path.exists(UPLOAD_DIR):
        os.makedirs(UPLOAD_DIR)

    file_path = f"{UPLOAD_DIR}/{file.filename}"

    with open(file_path, "wb") as f:
        f.write(await file.read())

    result = analyze_resume(file_path)

    return result