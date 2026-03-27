from langchain_community.llms import Ollama
from app.rag.vector_store import load_vector_store


def ask_question(question: str):
    vectorstore = load_vector_store()

    if vectorstore is None:
        return "No resume data found. Please upload a resume first."

    retriever = vectorstore.as_retriever()

    # ✅ FIX: use invoke instead of deprecated method
    docs = retriever.invoke(question)

    context = "\n\n".join([doc.page_content for doc in docs])

    llm = Ollama(model="llama3")

    prompt = f"""
    You are a helpful assistant.
    Answer the question based only on the resume content below.

    Resume:
    {context}

    Question:
    {question}
    """

    response = llm.invoke(prompt)

    return response