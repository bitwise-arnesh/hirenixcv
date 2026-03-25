from app.utils.pdf_parser import extract_text

def analyze_resume(file_path):
    text = extract_text(file_path)

    # Dummy logic
    score = min(len(text) // 50, 100)

    feedback = "Good resume " if score > 60 else "Needs improvement "

    return {
        "score": score,
        "feedback": feedback
    }