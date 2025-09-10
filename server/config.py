import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Environment variables
DEBUG = os.getenv("DEBUG", "False").lower() in ("true", "1", "t")
SECRET_KEY = os.getenv("SECRET_KEY", "default_secret_key")
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./portfolio.db")