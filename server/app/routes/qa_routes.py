from fastapi import APIRouter
from pydantic import BaseModel
from app.rag.qa_chain import ask_question

router = APIRouter()


class QuestionRequest(BaseModel):
    question: str


@router.post("/ask")
def ask(req: QuestionRequest):
    answer = ask_question(req.question)
    return {"answer": answer}