import { HttpClient } from '@angular/common/http';
import { Component, inject, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  public text: { [key: string]: string } = {};
  
  reloadPage() {
    const privacySection = this.elRef.nativeElement.querySelector('#privacy-policy');
  
    if (privacySection) {
      privacySection.classList.add('hidden');
    }
  
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }
  
  openPrivacyPolicy(event: Event) {
    event.preventDefault();
    const section = this.elRef.nativeElement.querySelector('#privacy-policy');
    if (section) {
      section.classList.add('show');
    }
  }  

  constructor(private translationService: TranslationService, private elRef: ElementRef) {
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

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      console.log("Absenden:", this.contactData);
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log("Mail-Test aktiviert, Daten werden nicht gesendet.");
      console.log(this.contactData);
      ngForm.resetForm();
    }
  }

  checkEmptyField(field: keyof typeof this.contactData | "privacyPolicy") {
    if (field === "privacyPolicy") {
        if (!this.privacyPolicyAccepted) {
            document.getElementById("privacyPolicyError")!.style.display = "block";
        }
        return;
    }

    if (!this.contactData[field]) {
        if (field === "name") {
            this.placeholders.name = "Oops! It seems your name is missing";
        } else if (field === "email") {
            this.placeholders.email = "Hoppla! Your email is required";
        } else if (field === "message") {
            this.placeholders.message = "What do you need to develop?";
        } else if (field === "checkbox") {
            this.placeholders.checkbox = "Please accept the privacy policy.";
        }
        
        document.getElementById(field)?.classList.add("error");
    }
  }

  restorePlaceholder(field: keyof typeof this.contactData | "privacyPolicy") {
    if (field === "privacyPolicy") {
        document.getElementById("privacyPolicyError")!.style.display = "none";
        return;
    }

    if (field === "name") {
        this.placeholders.name = "Your name goes here";
    } else if (field === "email") {
        this.placeholders.email = "youremail@email.com";
    } else if (field === "message") {
        this.placeholders.message = "Enter a message...";
    }

    document.getElementById(field)?.classList.remove("error");
  }
}