import { HttpClient } from '@angular/common/http';
import { Component, inject, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm, Validators } from '@angular/forms';
import { TranslationService } from '../services/translation.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  public text: { [key: string]: string } = {};

  emailInvalid: boolean = false;
  formSubmitted: boolean = false; 
  showSuccessMessage = false;

  checkEmailValidity() {
    const emailRegex = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/;
    this.emailInvalid = !emailRegex.test(this.contactData.email);
    const errorElement = document.getElementById('emailError');
    if (errorElement) {
        errorElement.style.display = this.emailInvalid ? 'block' : 'none';
    }
  }

  constructor(
    private translationService: TranslationService,
    private elRef: ElementRef,
  ) {
    this.translationService.text$.subscribe((text) => {
      this.text = text;
    });
  }
  
    ngAfterViewInit(): void {
      const elements = this.elRef.nativeElement.querySelectorAll('.hidden-left, .hidden-right');
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
  
      elements.forEach((el: Element) => observer.observe(el));
    }
  
  switchLanguage(language: 'en' | 'de') {
    this.translationService.switchLanguage(language);
  }

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
  };

  privacyPolicyAccepted = false;

  placeholders = {
    name: "Your name goes here",
    email: "youremail@email.com",
    message: "Enter a message...",
    checkbox: "Please accept the privacy policy.",
  };

  mailTest = false;

  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  validateField(field: 'name' | 'message') {
    const value = this.contactData[field];
    const element = document.getElementById(field);
    const errorElement = document.getElementById(`${field}Error`);

    if (!value) {
        this.checkEmptyField(field);
        if (errorElement) errorElement.style.display = 'none';
    } else if (value.trim().length < 4) {
        element?.classList.add('error');
        if (errorElement) errorElement.style.display = 'block';
        this.restorePlaceholder(field); 
    } else {
        element?.classList.remove('error');
        if (errorElement) errorElement.style.display = 'none';
        this.restorePlaceholder(field);
    }
  }

  validateEmailField() {
    if (!this.contactData.email) {
        this.checkEmptyField('email');
        const errorElement = document.getElementById('emailError');
        if (errorElement) errorElement.style.display = 'none';
    } else {
        this.checkEmailValidity();
        const errorElement = document.getElementById('emailError');
        if (errorElement) {
            errorElement.style.display = this.emailInvalid ? 'block' : 'none';
            errorElement.textContent = this.emailInvalid 
                ? this.text['invalidEmailError'] 
                : this.text['emailRequiredError'];
        }
        this.restorePlaceholder('email');
    }
  }

  onSubmit(ngForm: NgForm) {
  this.formSubmitted = true;
  this.checkEmailValidity();
  this.validateField('name');
  this.validateField('message');

  if (!this.privacyPolicyAccepted) {
    console.log("Absendeversuch: Datenschutzrichtlinie nicht akzeptiert.");
    return;
  }

  if (ngForm.form.valid && !this.emailInvalid &&
      this.contactData.name.trim().length >= 4 &&
      this.contactData.message.trim().length >= 4) {
    

    if (!this.mailTest) {
      
    } else {
      
    }

    
    ngForm.resetForm();
    this.formSubmitted = false;
    this.privacyPolicyAccepted = false;
    this.showSuccessMessage = true;

    
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);

    } else {
      
    }
  }
  
  onPrivacyPolicyChange() {
    
  }

  checkEmptyField(field: keyof typeof this.contactData | "privacyPolicy") {
      if (field === "privacyPolicy") {
          return;
      }

      if (!this.contactData[field]) {
          if (field === "name") {
              this.placeholders.name = "Oops! It seems your name is missing";
          } else if (field === "email") {
              this.placeholders.email = "Hoppla! Your email is required";
              this.emailInvalid = true; 
          } else if (field === "message") {
              this.placeholders.message = "What do you need to develop?";
          } 
          
          document.getElementById(field)?.classList.add("error");
      } else if (field === "email") {
          this.checkEmailValidity(); 
      }
  }

  restorePlaceholder(field: keyof typeof this.contactData | "privacyPolicy") {
    if (field === "privacyPolicy") {
       
        return;
    }

    if (field === "name") {
        this.placeholders.name = "Your name goes here";
    } else if (field === "email") {
        this.placeholders.email = "youremail@email.com";
        this.emailInvalid = false; 
    } else if (field === "message") {
        this.placeholders.message = "Enter a message...";
    }

    document.getElementById(field)?.classList.remove("error");
  }

  isFormValid(): boolean {
    const name = typeof this.contactData.name === 'string' ? this.contactData.name.trim() : '';
    const email = typeof this.contactData.email === 'string' ? this.contactData.email.trim() : '';
    const message = typeof this.contactData.message === 'string' ? this.contactData.message.trim() : '';

    return (
      name.length >= 4 &&
      message.length >= 4 &&
      email !== '' &&
      !this.emailInvalid &&
      this.privacyPolicyAccepted
    );
  }

}