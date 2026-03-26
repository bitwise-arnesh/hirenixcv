from app.utils.pdf_parser import extract_text

# 🔹 ATS + Suggestions
def analyze_resume(file_path):
    text = extract_text(file_path)

    # Score logic
    score = min(len(text) // 50, 100)

    feedback = "Good resume" if score > 60 else "Needs improvement"

    # Suggestions
    suggestions = []

    if "python" not in text.lower():
        suggestions.append("Add Python skill")

    if "project" not in text.lower():
        suggestions.append("Include projects section")

    if "experience" not in text.lower():
        suggestions.append("Add work experience section")

    if len(text) < 500:
        suggestions.append("Increase resume content")

    return {
        "score": score,
        "feedback": feedback,
        "suggestions": suggestions
    }


# 🔥 NEW: Job Description Matching
def match_job_description(resume_text, job_description):
    resume_words = set(resume_text.lower().split())
    jd_words = set(job_description.lower().split())

    common = resume_words & jd_words
    missing = jd_words - resume_words

    # Match score calculation
    if len(jd_words) == 0:
        score = 0
    else:
        score = int((len(common) / len(jd_words)) * 100)

    return {
        "match_score": score,
        "missing_skills": list(missing)[:10]  # limit to 10
    }