import { Injectable } from '@angular/core';
import { Contact } from '../contacts/models/contact';
import { CONTACTS } from '../contacts/data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private contacts: Contact[] = CONTACTS
  private currentId: number = this.contacts.length
  
  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id)
    if(!contact) {
      return null
    }
    return contact
  }

  public getAllContacts(): Contact[] {
    return this.contacts
  }

  public addContact(contact: Contact) {
    this.currentId++
    this.contacts.push({...contact, id: this.currentId})
  }

  public editContact(contact: Contact, id: number) {
    console.log(contact)
    console.log(id)
    this.contacts = this.contacts.map(item => item.id === id ? contact : item)
    console.log(this.contacts)
  }
 
}
