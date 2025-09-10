# Portfolio Project

This is a full-stack portfolio project with a Next.js frontend and FastAPI backend.

## Project Structure

- `client/` - Next.js frontend application
- `server/` - FastAPI backend application

## Setup and Running

### Frontend (Client)

1. Navigate to the client directory:
   ```
   cd client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Access the frontend at http://localhost:3000

### Backend (Server)

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Run the development server:
   ```
   python run.py
   ```
   or
   ```
   uvicorn main:app --reload
   ```

4. Access the API at http://localhost:8000
   - API Documentation: http://localhost:8000/docs

## Development

- Frontend is built with Next.js, React, and Tailwind CSS
- Backend is built with FastAPI and SQLAlchemy
- Database is SQLite (can be changed in the configuration)