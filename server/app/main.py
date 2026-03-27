from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.resume_routes import router as resume_router
from app.routes.qa_routes import router as qa_router

app = FastAPI()

# CORS (for frontend connection)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Resume routes (existing)
app.include_router(resume_router, prefix="/api/resume")

# QA routes (NEW)
app.include_router(qa_router, prefix="/api/qa")