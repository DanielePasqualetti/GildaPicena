import { Component } from '@angular/core';
import { ISocio } from '../interfacce/ISocio';
import { SociService } from '../services/soci.service';

@Component({
  selector: 'app-soci',
  templateUrl: './soci.component.html',
  styleUrls: ['./soci.component.scss'],
})
export class SociComponent {
  soci: Partial<ISocio[]> = [];
  nuovoSocio: Partial<ISocio> = {};

  constructor(private svc: SociService) {}

  ngOnInit() {
    this.getSoci();
  }

  getSoci() {
    this.svc.getSoci().subscribe((soci) => {
      this.soci = soci;
    });
  }

  aggiungiSocio() {}
}
