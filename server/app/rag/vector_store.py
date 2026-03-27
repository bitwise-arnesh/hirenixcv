from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter  # ✅ FIXED
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import FAISS

import os

# Path where FAISS index will be stored
FAISS_PATH = "faiss_index"


def create_vector_store(pdf_path: str):
    # 1. Load PDF
    loader = PyPDFLoader(pdf_path)
    documents = loader.load()

    # 2. Split into chunks
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=50
    )
    docs = text_splitter.split_documents(documents)

    # 3. Create embeddings using Ollama
    embeddings = OllamaEmbeddings(model="llama3")

    # 4. Store in FAISS
    vectorstore = FAISS.from_documents(docs, embeddings)

    # 5. Save locally
    vectorstore.save_local(FAISS_PATH)

    return "Vector store created successfully!"


def load_vector_store():
    embeddings = OllamaEmbeddings(model="llama3")

    if not os.path.exists(FAISS_PATH):
        return None

    vectorstore = FAISS.load_local(
        FAISS_PATH,
        embeddings,
        allow_dangerous_deserialization=True
    )
    return vectorstore