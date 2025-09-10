from database import engine, Base, SessionLocal
from models.models import Project, Contact

# Create tables
Base.metadata.create_all(bind=engine)

# Create a database session
db = SessionLocal()

# Sample projects data
sample_projects = [
    {
        "title": "Portfolio Website",
        "description": "A personal portfolio website built with Next.js, Tailwind CSS, and FastAPI.",
        "image_url": "/images/projects/portfolio.png",
        "github_url": "https://github.com/username/portfolio",
        "live_url": "https://portfolio.example.com",
        "technologies": "Next.js,React,Tailwind CSS,FastAPI,SQLite",
        "category": "Web Development"
    },
    {
        "title": "E-commerce Platform",
        "description": "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
        "image_url": "/images/projects/ecommerce.png",
        "github_url": "https://github.com/username/ecommerce",
        "live_url": "https://ecommerce.example.com",
        "technologies": "React,Node.js,Express,MongoDB,Stripe",
        "category": "Web Development"
    },
    {
        "title": "Machine Learning Dashboard",
        "description": "A dashboard for visualizing machine learning model performance and predictions.",
        "image_url": "/images/projects/ml-dashboard.png",
        "github_url": "https://github.com/username/ml-dashboard",
        "live_url": "https://ml-dashboard.example.com",
        "technologies": "Python,Flask,TensorFlow,React,D3.js",
        "category": "Data Science"
    }
]

# Add sample projects to the database
for project_data in sample_projects:
    project = Project(**project_data)
    db.add(project)

# Commit changes
db.commit()

# Close the session
db.close()

print("Database initialized with sample data.")