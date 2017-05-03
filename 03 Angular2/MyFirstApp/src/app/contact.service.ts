export class ContactService {
  contacts: Contact[];

  constructor() {
    this.contacts = [
      {id: 1, name: 'Ori'},
      {id: 2, name: 'Roni'},
      {id: 3, name: 'Udi'},
    ];
  }
}

export interface Contact {
  id: number;
  name: string;
}

