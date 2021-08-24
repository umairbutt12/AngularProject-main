import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-QR-code',
  templateUrl: './QR-code.component.html',
  styleUrls: ['./QR-code.component.css']
})
export class QRCodeComponent implements OnInit {
  title = 'QR-codes';
  name='Angular '+ VERSION.major;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel=NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'http://192.168.0.102:4200/product';

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
