from app.utils.pdf_parser import extract_text

def analyze_resume(file_path):
    text = extract_text(file_path)

    # Score logic
    score = min(len(text) // 50, 100)

    feedback = "Good resume" if score > 60 else "Needs improvement"

    # 🔥 NEW: Suggestions logic
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