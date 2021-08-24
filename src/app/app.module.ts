import { StoreServiceService } from './shared/store-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoresListComponent } from './stores-list/stores-list.component';
import { QRCodeComponent } from './QR-code/QR-code.component';
import{HttpClientModule} from '@angular/common/http';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { BarcodeGeneratorAllModule,QRCodeGeneratorAllModule,DataMatrixGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';



@NgModule({
  declarations: [		
    AppComponent,
      StoresListComponent,
      QRCodeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxQRCodeModule,
    BarcodeGeneratorAllModule, 
    QRCodeGeneratorAllModule,
    DataMatrixGeneratorAllModule
    
  ],
  providers: [StoreServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
