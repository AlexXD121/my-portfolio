from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List
from pydantic import BaseModel, EmailStr
from datetime import datetime

from database import get_db
from models.models import Contact

router = APIRouter(prefix="/contact", tags=["Contact"])

# Pydantic models for request/response
class ContactBase(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactCreate(ContactBase):
    pass

class ContactResponse(ContactBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

# Submit contact form
@router.post("/", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def create_contact(contact: ContactCreate, db: Session = Depends(get_db)):
    db_contact = Contact(**contact.dict())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact

# Get all contacts (admin only in a real app)
@router.get("/", response_model=List[ContactResponse])
def get_contacts(db: Session = Depends(get_db)):
    # In a real app, add authentication here
    contacts = db.query(Contact).all()
    return contacts