from fastapi import APIRouter, UploadFile, File
from app.controllers.resume_controller import process_resume

router = APIRouter()

@router.post("/upload")
async def upload_resume(file: UploadFile = File(...)):
    return await process_resume(file)