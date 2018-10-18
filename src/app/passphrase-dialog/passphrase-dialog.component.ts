import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-passphrase-dialog',
  templateUrl: './passphrase-dialog.component.html',
  styleUrls: ['./passphrase-dialog.component.css']
})
export class PassphraseDialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<PassphraseDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onCloseConfirm(passphrase: string) {
    this.thisDialogRef.close(new PassphraseDialogResult(true, passphrase));
  }

  onCloseCancel() {
    this.thisDialogRef.close(new PassphraseDialogResult(false));
  }
}

export class PassphraseDialogResult {

  constructor(public isConfirmed: boolean, public passphrase?: string) {}
}