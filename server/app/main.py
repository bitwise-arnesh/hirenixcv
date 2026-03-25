from fastapi import FastAPI
from app.routes import resume_routes

app = FastAPI()

app.include_router(resume_routes.router, prefix="/api/resume")

@app.get("/")
def root():
    return {"message": "Backend running "}