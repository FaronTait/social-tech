import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DataBaseService {

  private basePath = '/sessionData';
  public items: any;
  public item: any;
  constructor(private db: AngularFireDatabase) { }

  public saveSessionData(data) {
    const obj = this.db.database.ref(this.basePath);
    obj.push(JSON.parse(data));
  }
}
