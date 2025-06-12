import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { TarjetaComponent } from '../../common/custom components/tarjeta/tarjeta.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    TarjetaComponent, 
    //InputText,
    FormsModule,
    ButtonModule,
    PasswordModule,
    IconFieldModule,
    InputIconModule,
    //NgxMaskDirective,
    
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class profileComponent {

}
