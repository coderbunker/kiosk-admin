import { Injectable } from '@angular/core';
import { ConfigurationEncrypted } from './configuration-encrypted';
import { AngularFireDatabase, AngularFireAction, DatabaseSnapshot } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Configuration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(private db: AngularFireDatabase) { }

  getConfigurationsByGroupLabel(groupLabel: string) : Observable<AngularFireAction<DatabaseSnapshot<ConfigurationEncrypted>>[]> {
    return this.db.list<ConfigurationEncrypted>('configurations', ref => ref.orderByChild('groupLabel').equalTo(groupLabel)).snapshotChanges();
  }

  getConfigurationById(uuid: string): Observable<ConfigurationEncrypted> {
    return this.db.object<ConfigurationEncrypted>('configurations/' + uuid).valueChanges();
  }

  save(config: ConfigurationEncrypted, uuid: string): void {
    this.db.object('configurations/' + uuid).update({ configuration: config.configuration});
  }
}
