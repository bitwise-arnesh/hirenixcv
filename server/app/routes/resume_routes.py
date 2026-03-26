from fastapi import APIRouter, UploadFile, File, Form
from app.controllers.resume_controller import process_resume

router = APIRouter()

@router.post("/upload")
async def upload_resume(
    file: UploadFile = File(...),
    job_description: str = Form("")
):
    return await process_resume(file, job_description)