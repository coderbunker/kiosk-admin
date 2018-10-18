import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material';
import { PassphraseDialogComponent } from '../passphrase-dialog/passphrase-dialog.component';
import {Location} from '@angular/common';
import { Configuration } from '../configuration';
import { ConfigurationService } from '../configuration.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationEncryptor } from '../ConfigurationEncryptor';


@Component({
  selector: 'app-configuration-detail',
  templateUrl: './configuration-detail.component.html',
  styleUrls: ['./configuration-detail.component.css']
})
export class ConfigurationDetailComponent implements OnInit {
  configuration: Configuration;
  passphrase: string;

  constructor(private route: ActivatedRoute, public dialog: MatDialog, private router: Router,  private configService: ConfigurationService) {
  }

  ngOnInit() {
    setTimeout(() => this.openDialog());
  }

  openDialog(text:string = ''): void {
    const dialogRef = this.dialog.open(PassphraseDialogComponent, {
      width: '250px',
      disableClose: true,
      data: text
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.isConfirmed) {
        this.passphrase = result.passphrase;
        this.load();
      } else {
       this.back();
      }
    });
  }
  
  load(): void {
    this.configService.getConfigurationById(this.route.snapshot.paramMap.get('id')).subscribe(config => {
      try {
        this.configuration = new ConfigurationEncryptor().decrypt(config, this.passphrase);
      } catch(e) {
        this.openDialog('Wrong passphrase');
      }
    });
  }

  back(): void {
    this.router.navigate(['/configurations']);
  }

  save(): void {
    var encrypted = new ConfigurationEncryptor().encrypt(this.configuration, this.passphrase);
    this.configService.save(encrypted, this.configuration.uuid);
    this.back();
  }
}
