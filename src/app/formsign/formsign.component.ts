import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit,  ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';

const REGEX_ONLY_LETTERS=new RegExp('[A-Za-z]');
const REGEX_ONLY_DIGITS= new RegExp('[0-9]');
const REGEX_ONLY_SYMBOLS= new RegExp('[^A-Za-z0-9]');

@Component({
  selector: 'app-formsign',
  templateUrl: './formsign.component.html',
  styleUrl: './formsign.component.css'
})
export class FormsignComponent implements OnInit{
  @Input() weak: HTMLLabelElement;
  signUpForm: FormGroup;
  

  constructor(@Inject(DOCUMENT) private document:Document){
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.signUpForm=new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(8), this.enoughSymbols.bind(this)] ),
     
    })
  }

  enoughSymbols(control: FormControl):{[valid:string]:boolean}|null{
    
  let weakId= this.document.getElementById('weak');
   let mediumId= this.document.getElementById('medium');
   let strongId= this.document.getElementById('strong');

   const SYMBOLS=REGEX_ONLY_SYMBOLS.test(control.value);
   const DIGITS=REGEX_ONLY_DIGITS.test(control.value);
   const LETTERS=REGEX_ONLY_LETTERS.test(control.value);
   console.log(SYMBOLS)

   let sizePassword='';


   if(weakId)weakId.classList.remove('redClass');
   if(mediumId&&weakId){
    weakId.classList.remove('yellowClass');
    mediumId.classList.remove('yellowClass');}
    if(mediumId&&weakId&&strongId){
      weakId.classList.remove('greenClass');
    mediumId.classList.remove('greenClass');
    strongId.classList.remove('greenClass');
    
    weakId.classList.remove('redClass');
    mediumId.classList.remove('redClass');
    strongId.classList.remove('redClass');
    
    }
   if(control.value.length<8&&control.value.length>=1){
    if(weakId&&mediumId&&strongId) {
          mediumId.classList.add('redClass');
      weakId.classList.add('redClass')
      strongId.classList.add('redClass')};

    return null;
    
   }
 
    if(SYMBOLS||DIGITS||LETTERS){
      
      sizePassword='LOW';
    }
    if(SYMBOLS&&DIGITS||LETTERS&&DIGITS || SYMBOLS&&LETTERS){
    
      sizePassword='MEDIUM';
    }
    if(SYMBOLS&&DIGITS&&LETTERS){
    
      sizePassword='STRONG';
      
    }






   
   

  
  
    switch(sizePassword){
      
    case 'LOW': {
     
     if(weakId) weakId.classList.add('redClass') ;
    
     return {'valid':true};
    }
    case 'MEDIUM': {
     
      if(weakId&&mediumId) {
      mediumId.classList.add('yellowClass');
      weakId.classList.add('yellowClass')}
     
      
      return {'valid':true};
     }  
     case 'STRONG': {
     
      if(weakId&&mediumId&&strongId) {
      mediumId.classList.add('greenClass');
      weakId.classList.add('greenClass')
      strongId.classList.add('greenClass')};
      return {'valid':true};
      } 
     
      
    
      
     
    }
 
  
    return null;
    }
   
  

}
