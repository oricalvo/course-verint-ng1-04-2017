import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContactService {
  contacts: Contact[];

  constructor(private http: Http) {
  }

  loadAll(): Promise<Contact[]> {
    return this.http.get("assets/contacts.json").toPromise().then(res => res.json());
  }
}

export interface Contact {
  id: number;
  name: string;
}

