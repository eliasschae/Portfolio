import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translations = {
    en: {
      about: 'About me',
      skills: 'Skills',
      projects: 'Projects',
      checkMyWork: 'Check my work',
      contactMe: 'Contact me',
      availableRemoteWork: 'Available for remote work',
      frontendDeveloper: 'Frontend Developer',
      basedInParaguay: 'Based in Paraguay',
      openToWork: 'Open to work',
      whoIAm: 'Who I Am',
      aboutMeDescription: 'Hi, I’m a german speaking Frontend Developer based in Paraguay. Motivated by the limitless opportunities within IT, I am excited about crafting visually captivating and intuitive websites and applications.',
      workEnvironment: 'Flexible in terms of working environments, I can work effectively both on-site in Paraguay and remotely.',
      personalChallenges: 'I am open-minded and always looking for personal challenges to constantly improve my knowledge and skills.',
      problemSolving: 'In my profession, programming isn’t just about writing code; it’s a creative form of problem-solving. I take pride in my ability to distill complex technical challenges into simple, user-friendly solutions. This way, I help you achieve your goals and bring your visions to life.',
      technologies: 'Technologies',
      skillSet: 'Skill Set',
      skillDescription: 'My journey has involved working on diverse projects, employing a range of frontend technologies and concepts. I am open to embracing new technologies and methodologies to continuously enhance my skills and stay ahead in the ever-evolving landscape of web development.',
      youNeed: 'You need',
      anotherSkill: 'another skill?',
      contactMee: 'Feel free to contact me. I look forward to expanding on my previous knowledge.',
      letsTalk: "Let's Talk",
      growthMindset: 'Growth mindset',
      portfolio: 'Portfolio',
      featuredProjects: 'Featured Projects',
      portfolioDescription: 'Explore a selection of my work here - Interact with projects to see my skills in action.',
      contactMem: 'Contact me',
      letsWorkTogether: "Let's work together",
      gotAProblem: 'Got a problem to solve?',
      contactDescription: 'Contact me through this form, I am interested in hearing from you, knowing your ideas and contributing to your projects with my work.',
      needAFrontendDeveloper: 'Need a Frontend developer?',
      letsTalke: "Let’s talk!",
      whatsYourName: "What's your name?",
      whatsYourEmail: "What's your email?",
      howCanIHelp: 'How can I help you?',
      privacyPolicyAgreement: "I've read the",
      privacyPolicy: 'privacy policy',
      privacyPolicyConsent: 'and agree to the processing of my data as outlined.',
      acceptPrivacyPolicy: 'Please accept the privacy policy.',
      sayHello: 'Say Hello ;)',
      whatproject: 'What is this project about?',
      taskManagerDescription: "Task manager inspired by the Kanban System. Create and\n organize tasks using drag and drop functions, assign\n users and categories.",
      taskManagerDescription2: "A simple Jump-and-Run game based on an object-oriented approach. Help Sharkie find coins\n and poison bottles to fight against the killer whale.",
      taskManagerDescription3: "This App is a Slack Clone App. It revolutionizes team\n communication and collaboration with its intuitive\n interface, real-time messaging, and robust channel\n organization."
    },

    de: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      checkMyWork: 'Sieh dir meine Arbeit an',
      contactMe: 'Kontaktiere mich',
      availableRemoteWork: 'Verfügbar für Remote-Arbeit',
      frontendDeveloper: 'Frontend-Entwickler',
      basedInParaguay: 'Wohnhaft in Paraguay',
      openToWork: 'Offen für Arbeit',
      whoIAm: 'Wer ich bin',
      aboutMeDescription: 'Hallo, ich bin ein deutschsprachiger Frontend-Entwickler mit Sitz in Paraguay. Angetrieben von den unbegrenzten Möglichkeiten der IT, begeistert mich die Gestaltung visuell ansprechender und intuitiver Websites und Anwendungen.',
      workEnvironment: 'Ich bin flexibel in Bezug auf Arbeitsumgebungen und kann sowohl vor Ort in Paraguay als auch remote effektiv arbeiten.',
      personalChallenges: 'Ich bin aufgeschlossen und stets auf der Suche nach persönlichen Herausforderungen, um mein Wissen und meine Fähigkeiten kontinuierlich zu verbessern.',
      problemSolving: 'In meinem Beruf geht es beim Programmieren nicht nur um das Schreiben von Code, sondern um kreatives Problemlösen. Ich bin stolz darauf, komplexe technische Herausforderungen in einfache, benutzerfreundliche Lösungen zu verwandeln. So helfe ich dir, deine Ziele zu erreichen und deine Visionen zum Leben zu erwecken.',
      technologies: 'Technologien',
      skillSet: 'Fähigkeiten',
      skillDescription: 'Meine Reise hat mich durch verschiedene Projekte geführt, bei denen ich eine Vielzahl von Frontend-Technologien und Konzepten eingesetzt habe. Ich bin offen für neue Technologien und Methoden, um meine Fähigkeiten kontinuierlich zu verbessern und in der sich ständig weiterentwickelnden Welt der Webentwicklung immer einen Schritt voraus zu sein.',
      youNeed: 'Du brauchst',
      anotherSkill: 'eine weitere Fähigkeit?',
      contactMee: 'Zögere nicht, mich zu kontaktieren. Ich freue mich darauf, mein Wissen weiter auszubauen.',
      letsTalk: 'Lass uns reden',
      growthMindset: 'Wachstums mindset',
      portfolio: 'Portfolio',
      featuredProjects: 'Ausgewählte Projekte',
      portfolioDescription: 'Erkunde hier eine Auswahl meiner Arbeiten – Interagiere mit den Projekten, um meine Fähigkeiten in Aktion zu sehen.',
      contactMem: 'Kontakt aufnehmen',
      letsWorkTogether: 'Lass uns zusammenarbeiten',
      gotAProblem: 'Hast du ein Problem zu lösen?',
      contactDescription: 'Kontaktiere mich über dieses Formular, ich bin daran interessiert, von dir zu hören, deine Ideen kennenzulernen und mit meiner Arbeit zu deinen Projekten beizutragen.',
      needAFrontendDeveloper: 'Brauchst du einen Frontend-Entwickler?',
      letsTalke: 'Lass uns reden!',
      whatsYourName: 'Wie heißt du?',
      whatsYourEmail: 'Wie lautet deine E-Mail?',
      howCanIHelp: 'Wie kann ich dir helfen?',
      privacyPolicyAgreement: 'Ich habe die',
      privacyPolicy: 'Datenschutzrichtlinie',
      privacyPolicyConsent: 'gelesen und stimme der Verarbeitung meiner Daten zu, wie beschrieben.',
      acceptPrivacyPolicy: 'Bitte akzeptiere die Datenschutzrichtlinie.',
      sayHello: 'Sag Hallo ;)',
      whatproject: 'Worum geht es in diesem Projekt?',
      taskManagerDescription: "Task-Manager inspiriert vom Kanban-System. Erstelle und\n organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise\n Benutzer und Kategorien zu.",
      taskManagerDescription2: "Ein einfaches Jump-and-Run-Spiel basierend auf einem objektorientierten Ansatz. Hilf Sharkie,\n Münzen und Giftflaschen zu finden, um gegen den Killerwal zu kämpfen.",
      taskManagerDescription3: "Diese App ist eine Slack-ähnliche Anwendung. Sie revolutioniert die Teamkommunikation und Zusammenarbeit durch ihre intuitive Benutzeroberfläche, Echtzeit-Nachrichtenübermittlung und eine robuste Kanalorganisation."
    }
  };  

  private currentLangKey = 'selectedLanguage';
  private savedLang = (localStorage.getItem(this.currentLangKey) as 'en' | 'de') || 'en';
  private currentLanguage = new BehaviorSubject<string>(this.savedLang);
  public language$ = this.currentLanguage.asObservable();

  private currentText = new BehaviorSubject<{ [key: string]: string }>(this.translations[this.savedLang]);
  public text$ = this.currentText.asObservable();
  
  switchLanguage(lang: 'en' | 'de') {
    localStorage.setItem(this.currentLangKey, lang);
    this.currentLanguage.next(lang);
    this.currentText.next(this.translations[lang]);
  }  
}