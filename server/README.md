# Portfolio Backend API

This is the FastAPI backend for the portfolio website.

## Setup

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run the server:
   ```
   uvicorn main:app --reload
   ```

3. Access the API documentation:
   - Swagger UI: http://localhost:8000/docs
   - ReDoc: http://localhost:8000/redoc

## API Endpoints

### Projects
- `GET /projects` - Get all projects
- `GET /projects/{project_id}` - Get project by ID
- `POST /projects` - Create a new project
- `PUT /projects/{project_id}` - Update a project
- `DELETE /projects/{project_id}` - Delete a project

### Contact
- `POST /contact` - Submit a contact form
- `GET /contact` - Get all contact submissions (admin only)

## Environment Variables

Create a `.env` file with the following variables:

```
DEBUG=True
SECRET_KEY=your_secret_key_here
DATABASE_URL=sqlite:///./portfolio.db
```