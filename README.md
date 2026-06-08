# HirenixCV – AI-Powered Resume Intelligence Platform

<div align="center">

# 🚀 HirenixCV

### Transform Resumes into Career Insights with Generative AI

An end-to-end AI-powered Resume Intelligence Platform that leverages **Retrieval-Augmented Generation (RAG)**, **Large Language Models (LLMs)**, and **ATS Analysis** to help candidates optimize resumes, gain actionable feedback, and interact with their resumes through natural language.

---

![Python](https://img.shields.io/badge/Python-3.11+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)
![React](https://img.shields.io/badge/React-Frontend-61DAFB)
![LangChain](https://img.shields.io/badge/LangChain-RAG-orange)
![Ollama](https://img.shields.io/badge/Ollama-Local%20LLM-black)
![License](https://img.shields.io/badge/License-MIT-yellow)

</div>

---

# 📌 Overview

Hiring processes increasingly rely on Applicant Tracking Systems (ATS) and AI-driven candidate screening. Many qualified candidates fail to progress due to poorly optimized resumes, missing keywords, or lack of alignment with job descriptions.

**HirenixCV** addresses these challenges by combining ATS analysis, resume optimization, and conversational AI into a single platform.

The system enables users to:

* Upload resumes in PDF format
* Analyze resume quality through ATS scoring
* Receive AI-generated improvement suggestions
* Ask questions about their resume
* Interact with resume content using Retrieval-Augmented Generation (RAG)
* Prepare for interviews using resume-aware insights

---

# ✨ Key Features

## 1. ATS Resume Analysis

* Automated ATS score generation
* Resume content evaluation
* Structural assessment
* Keyword coverage analysis
* Instant feedback generation

## 2. Resume Optimization

* AI-powered improvement suggestions
* Resume enhancement recommendations
* Content refinement guidance
* ATS-friendly formatting insights

## 3. Resume Q&A (RAG)

Ask questions such as:

> What are my strongest technical skills?

> What projects are most relevant for Data Science roles?

> Summarize my profile in 100 words.

> What are the gaps in my resume?

The system retrieves relevant resume sections and generates contextual answers.

## 4. Local LLM Integration

* Fully local inference
* No OpenAI API required
* Privacy-focused architecture
* Reduced operational cost

## 5. Interactive User Experience

* Modern React frontend
* FastAPI backend APIs
* Real-time processing
* Seamless file upload workflow

---

# 🏗️ System Architecture

```text
                ┌──────────────────┐
                │      User        │
                └────────┬─────────┘
                         │
                         ▼
                ┌──────────────────┐
                │ React Frontend   │
                └────────┬─────────┘
                         │ API Calls
                         ▼
                ┌──────────────────┐
                │ FastAPI Backend  │
                └────────┬─────────┘
                         │
      ┌──────────────────┼──────────────────┐
      ▼                  ▼                  ▼

 PDF Parsing       ATS Analysis        RAG Pipeline

      ▼                  ▼                  ▼

 Resume Text      Score Engine      LangChain

                                            ▼

                                   Vector Store

                                            ▼

                                      Ollama LLM

                                            ▼

                                  AI Generated Response
```

---

# 🛠️ Technology Stack

## Frontend

* React.js
* React Router
* JavaScript
* CSS

## Backend

* FastAPI
* Python

## AI & NLP

* LangChain
* Ollama
* Retrieval-Augmented Generation (RAG)

## Document Processing

* PyPDF
* PDF Text Extraction

## Development Tools

* Git
* GitHub
* VS Code

---

# 📂 Project Structure

```bash
HirenixCV/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── backend/
│   ├── api/
│   ├── services/
│   ├── rag/
│   ├── resume_parser/
│   └── main.py
│
├── uploads/
│
├── screenshots/
│
├── requirements.txt
│
└── README.md
```

---

# ⚙️ Workflow

## Step 1

User uploads a resume in PDF format.

## Step 2

Backend extracts text using PDF parsing utilities.

## Step 3

Resume content is analyzed for ATS scoring.

## Step 4

Resume is converted into searchable chunks.

## Step 5

Embeddings are generated and indexed.

## Step 6

User submits a natural language query.

## Step 7

Retriever fetches relevant resume context.

## Step 8

LLM generates a contextual response.

## Step 9

Response is displayed on the frontend.


---

# 🎯 Use Cases

### Students

* Improve resume quality
* Prepare for internships
* Optimize ATS performance

### Job Seekers

* Analyze resume effectiveness
* Improve interview readiness
* Identify skill gaps

### Career Coaches

* Review resumes efficiently
* Generate personalized feedback



---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/HirenixCV.git
```

## Backend Setup

```bash
cd backend

pip install -r requirements.txt

uvicorn main:app --reload
```

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

# 🔥 Learning Outcomes

Through this project:

* Built an end-to-end AI application
* Implemented Retrieval-Augmented Generation (RAG)
* Integrated local LLMs using Ollama
* Developed REST APIs with FastAPI
* Built responsive frontend interfaces using React
* Worked with PDF parsing and document intelligence systems
* Gained practical experience in Generative AI workflows

---

\g, consider giving it a star.
