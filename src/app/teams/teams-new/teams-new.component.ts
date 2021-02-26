import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teams-new',
  templateUrl: './teams-new.component.html',
})
export class TeamsNewComponent implements OnInit {

  formulario!: FormGroup;
  crearFormulario(){
    this.formulario = this.formBuilder.group({
 
      name: ['', [Validators.required,
        Validators.minLength(5),
        Validators.pattern('.*[a-zA-Z].*')]],
        nameField: ['', [Validators.required,
          Validators.minLength(5),
          Validators.pattern('.*[a-zA-Z].*')]],
      partidos: [0, Validators.min(10)],
      identificador: ['', [Validators.required,
      Validators.minLength(2),
     ]],
    });
  }

  constructor(private formBuilder: FormBuilder) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }
  crear() {

  }

}
