import { Component, OnInit } from '@angular/core';
import { ConfigurationEncrypted } from '../configuration-encrypted';
import { ConfigurationService } from '../configuration.service';
import { AngularFireAction, DatabaseSnapshot } from '@angular/fire/database';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {
  encryptedConfigs: AngularFireAction<DatabaseSnapshot<ConfigurationEncrypted>>[];

  constructor(private configService: ConfigurationService) { }

  ngOnInit() {
  }

  getConfigs(groupLabel: string): void {
    this.configService.getConfigurationsByGroupLabel(groupLabel).subscribe(configs => this.encryptedConfigs = configs);
  }
}
