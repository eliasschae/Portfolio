import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public translations = {
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
      taskManagerDescription3: "This App is a Slack Clone App. It revolutionizes team\n communication and collaboration with its intuitive\n interface, real-time messaging, and robust channel\n organization.",
      minLengthError: "Please enter at least 4 characters",
      emailRequiredError: "Hoppla! Your email is required",
      privacypolicy: "Privacy Policy",
      lastupdated: "Last updated: April 30, 2025",
      tablecontents: "Table of Contents",
      controller: "Controller",
      processingOverview: "Processing Overview",
      legalBases: "Relevant Legal Bases",
      securityMeasures: "Security Measures",
      dataSubjectRights: "Data Subject Rights",
      contactManagement: "Contact & Inquiry Management",
      pluginsEmbedded: "Plugins & Embedded Content",
      Controller: "Controller",
      processingoverview: "Processing Overview",
      overviewText: "The following overview summarizes the types of data processed and the purposes of processing, and refers to the data subjects.",
      dataTypes: "Types of processed data",
      inventoryData: "Inventory data",
      contactData: "Contact data",
      contentData: "Content data",
      usageData: "Usage data",
      metaData: "Meta, communication and process data",
      affectedCategories: "Categories of affected persons",
      communicationPartners: "Communication partners",
      users: "Users",
      processingPurposes: "Purposes of processing",
      communication: "Communication",
      orgAdminProcesses: "Organizational and administrative procedures",
      feedback: "Feedback",
      serviceProvision: "Provision of our online services and user experience",
      legalbases: "Relevant legal bases",
      securitymeasures: "Security measures",
      securityMeasuresText: "In accordance with legal requirements and taking into account the state of the art, implementation costs, the nature, scope, context and purposes of processing, as well as the varying likelihood and severity of risks to the rights and freedoms of natural persons, we implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.",
      securityDetailsText: "The measures include, in particular, ensuring the confidentiality, integrity and availability of data by controlling physical and electronic access to the data, as well as access concerning them, input, transfer, availability and segregation. Furthermore, we have established procedures to ensure the exercise of data subject rights, data deletion, and responses to data breaches. Additionally, we consider the protection of personal data already during the development or selection of hardware, software and processes in accordance with the principle of data protection by design and by default.",
      tlsSecurityText: "Securing online connections through TLS/SSL encryption technology (HTTPS): To protect user data transmitted through our online services from unauthorized access, we implement TLS/SSL encryption technology. Secure Sockets Layer (SSL) and Transport Layer Security (TLS) are the cornerstones of secure data transmission on the internet. These technologies encrypt information transmitted between the website or app and the user's browser (or between two servers), protecting the data from unauthorized access. TLS, as the more advanced and secure version of SSL, ensures that all data transmissions meet the highest security standards. When a website is secured by an SSL/TLS certificate, this is indicated by HTTPS in the URL. This serves as an indicator to users that their data is being transmitted securely and encrypted.",
      dataSubjectrights: "Rights of Data Subjects",
      dataSubjectRightsIntro: "Your rights under the GDPR: As a data subject, you have various rights under the GDPR, particularly arising from Articles 15 to 21 of the GDPR:",
      rightToObject: "Right to object: You have the right to object, on grounds relating to your particular situation, at any time to processing of your personal data which is based on Article 6(1)(e) or (f) GDPR, including profiling based on those provisions. Where your personal data are processed for direct marketing purposes, you have the right to object at any time to processing of your personal data for such marketing, which includes profiling to the extent that it is related to such direct marketing.",
      rightToWithdraw: "Right to withdraw consent: You have the right to withdraw your given consent at any time.",
      rightToAccess: "Right of access: You have the right to obtain confirmation as to whether personal data concerning you are being processed, and to access such data along with further information and a copy of the data in accordance with legal requirements.",
      rightToRectification: "Right to rectification: In accordance with legal requirements, you have the right to request the completion or correction of inaccurate personal data concerning you.",
      rightToErasure: "Right to erasure and restriction of processing: In accordance with legal requirements, you have the right to request the immediate deletion of personal data concerning you, or alternatively to request restriction of processing of the data.",
      rightToDataPortability: "Right to data portability: You have the right to receive personal data concerning you, which you have provided to us, in a structured, commonly used and machine-readable format in accordance with legal requirements, or to demand their transmission to another controller.",
      rightToLodgeComplaint: "Right to lodge a complaint: Without prejudice to any other administrative or judicial remedy, you have the right to lodge a complaint with a supervisory authority, particularly in the Member State of your habitual residence, place of work or place of the alleged infringement if you consider that the processing of personal data relating to you infringes the GDPR.",
      contactmanagement: "Contact & Inquiry Management",
      contactProcessingText: "When contacting us (e.g., via mail, contact form, email, phone or social media) and in the context of existing user and business relationships, the information of the inquiring persons will be processed to the extent necessary to respond to contact requests and any requested actions.",
      processedDataTypes: "Types of processed data:",
      inventorydata: "Inventory data (e.g., full name, residential address, contact information, customer number, etc.)",
      contactdata: "Contact data (e.g., postal and email addresses or phone numbers)",
      contentdata: "Content data (e.g., textual or visual messages and posts along with related information such as authorship details or creation time)",
      usagedata: "Usage data (e.g., page views and duration, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features)",
      metadata: "Meta, communication and process data (e.g., IP addresses, timestamps, identification numbers, involved persons)",
      affectedPersons: "Affected persons:",
      communicationpartners: "Communication partners",
      processingpurposes: "Purposes of processing:",
      purposesList: "Communication; organizational and administrative procedures; feedback (e.g., collecting feedback via online form); provision of our online services and user experience",
      retentionDeletion: "Retention and deletion:",
      retentionInfo: "Deletion according to information in the 'General information on data retention and deletion' section",
      Legalbases: "Legal bases:",
      legalBasesList: "Legitimate interests (Article 6(1)(f) GDPR). Contract fulfillment and pre-contractual inquiries (Article 6(1)(b) GDPR).",
      procedures: "Further information on processing activities, procedures, and services:",
      contactFormInfo: "Contact form: When contacting us via our contact form, email or other communication channels, we process the personal data provided to respond to and handle the respective request. This typically includes information such as name, contact details, and any other information shared with us that is necessary for proper processing. We use this data exclusively for the specified purpose of contact and communication;",
      legalBasesContact: "Legal bases: Contract fulfillment and pre-contractual inquiries (Article 6(1)(b) GDPR), Legitimate interests (Article 6(1)(f) GDPR).",
      pluginsembedded: "Plugins and Embedded Functions and Content",
      pluginsDescription: "We integrate functional and content elements into our online offering that are obtained from the servers of their respective providers (hereinafter referred to as 'third-party providers'). These may include, for example, graphics, videos, or maps (hereinafter uniformly referred to as 'content').",
      embeddingRequirement: "The integration always requires that these third-party providers process users' IP addresses, as they could not deliver the content to browsers without the IP address. The IP address is therefore necessary for displaying this content or functionality. We strive to only use content from providers who use the IP address solely for content delivery.",
      pixelTagsExplanation: "Third parties may also use so-called pixel tags (invisible graphics, also known as 'web beacons') for statistical or marketing purposes. The 'pixel tags' can be used to evaluate information such as visitor traffic on this website's pages. The pseudonymous information may also be stored in cookies on users' devices and may contain technical information about the browser and operating system, referring websites, visit time, and other details about the use of our online offering, as well as be combined with such information from other sources.",
      legalBasisNote: "Notes on legal bases: If we ask users for their consent to use third-party providers, the legal basis for data processing is permission. Otherwise, user data is processed based on our legitimate interests (i.e., interest in efficient, economical, and recipient-friendly services). In this context, we would also like to draw your attention to the information on the use of cookies in this privacy policy.",
      processeddataTypes: "Types of processed data:",
      usageDataDetails: "Usage data (e.g., page views and duration, click paths, usage intensity and frequency, device types and operating systems used, interactions with content and features)",
      metaDataDetails: "Meta, communication and process data (e.g., IP addresses, timestamps, identification numbers, involved persons)",
      affectedpersons: "Affected persons:",
      usersDetails: "Users (e.g., website visitors, users of online services)",
      Processingpurposes: "Purposes of processing:",
      serviceprovision: "Provision of our online services and user experience",
      retentiondeletion: "Retention and deletion:",
      deletionPolicy: "Deletion according to information in the 'General information on data retention and deletion' section",
      cookieStorage: "Storage of cookies for up to 2 years (Unless otherwise specified, cookies and similar storage methods may be stored on users' devices for a period of two years.)",
      LegalBases: "Legal bases:",
      consentBasis: "Consent (Article 6(1)(a) GDPR)",
      legitimateInterestsBasis: "Legitimate interests (Article 6(1)(f) GDPR)",
      additionalProcessingInfo: "Additional information about processing procedures and services:",
      googleFontsTitle: "Google Fonts (retrieved from Google server):",
      googleFontsDescription: "Retrieval of fonts (and symbols) for the purpose of technically secure, maintenance-free and efficient use of fonts and symbols with regard to currency and loading times, their uniform display and consideration of possible licensing restrictions. The user's IP address is communicated to the font provider so that the fonts can be made available in the user's browser. In addition, technical data (language settings, screen resolution, operating system, hardware used) is transmitted that is necessary for the provision of fonts depending on the devices used and the technical environment. This data may be processed on a server of the font provider in the USA.",
      googleFontsProcess: "When visiting our online offering, users' browsers send HTTP requests to the Google Fonts Web API (i.e., a software interface for retrieving fonts). The Google Fonts Web API provides users with the Cascading Style Sheets (CSS) from Google Fonts and then the fonts specified in the CSS. These HTTP requests include (1) the IP address used by the respective user to access the internet, (2) the requested URL on the Google server, and (3) the HTTP headers, including the User-Agent, which describes the browser and operating system versions of website visitors, as well as the referrer URL (i.e., the webpage on which the Google font is to be displayed). IP addresses are neither logged nor stored on Google servers and are not analyzed. The Google Fonts Web API logs details of HTTP requests (requested URL, User-Agent and referrer URL). Access to this data is restricted and strictly controlled.",
      googleFontsLogging: "The requested URL identifies the font families for which the user wants to load fonts. This data is logged so Google can determine how often a particular font family is requested. The Google Fonts Web API requires the User-Agent to adapt the font that is generated for the particular browser type. The User-Agent is primarily logged for debugging and used to generate aggregated usage statistics measuring the popularity of font families. These aggregated usage statistics are published on the Google Fonts 'Analytics' page. Finally, the referrer URL is logged so the data can be used for production maintenance and to generate an aggregate report on the top integrations based on the number of font requests.",
      googleFontsPrivacy: "Google states that it does not use any of the information collected by Google Fonts to create end-user profiles or serve targeted ads;",
      serviceProvider: "Service provider:",
      googleAddress: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland;",
      legalBAses: "Legal bases:",
      legitimateInterests: "Legitimate interests (Article 6(1)(f) GDPR);",
      website: "Website:",
      PrivacyPolicy: "Privacy policy:",
      thirdCountryTransfer: "Third country transfer basis:",
      dpf: "Data Privacy Framework (DPF)",
      moreInfo: "More information:",
      CreatedPri: "Created with the free privacy policy generator by Dr. Thomas Schwenke",
      backBu: "Back to main",
      messageSentSuccess: 'Message sent successfully!',
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
      taskManagerDescription3: "Diese App ist eine Slack-ähnliche Anwendung. Sie revolutioniert die Teamkommunikation und Zusammenarbeit durch ihre intuitive Benutzeroberfläche, Echtzeit-Nachrichtenübermittlung und eine robuste Kanalorganisation.",
      minLengthError: "Mindestens 4 Zeichen erforderlich.",
      emailRequiredError: "Hoppla! Ihre E-Mail-Adresse ist erforderlich.",
      privacypolicy: "Datenschutzerklärung",
      lastupdated: "Stand: 30. April 2025",
      tablecontents: "Inhaltsübersicht",
      controller: "Verantwortlicher",
      processingOverview: "Übersicht der Verarbeitungen",
      legalBases: "Maßgebliche Rechtsgrundlagen",
      securityMeasures: "Sicherheitsmaßnahmen",
      dataSubjectRights: "Rechte der betroffenen Personen",
      contactManagement: "Kontakt- und Anfrageverwaltung",
      pluginsEmbedded: "Plug-ins und eingebettete Funktionen sowie Inhalte",
      Controller: "Verantwortlicher",
      processingoverview: "Übersicht der Verarbeitungen",
      overviewText: "Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.",
      dataTypes: "Arten der verarbeiteten Daten",
      inventoryData: "Bestandsdaten",
      contactData: "Kontaktdaten",
      contentData: "Inhaltsdaten",
      usageData: "Nutzungsdaten",
      metaData: "Meta-, Kommunikations- und Verfahrensdaten",
      affectedCategories: "Kategorien betroffener Personen",
      communicationPartners: "Kommunikationspartner",
      users: "Nutzer",
      processingPurposes: "Zwecke der Verarbeitung",
      communication: "Kommunikation",
      orgAdminProcesses: "Organisations- und Verwaltungsverfahren",
      feedback: "Feedback",
      serviceProvision: "Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit",
      legalbases: "Maßgebliche Rechtsgrundlagen",
      securitymeasures: "Sicherheitsmaßnahmen",
      securityMeasuresText: "Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.",
      securityDetailsText: "Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.",
      tlsSecurityText: "Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS): Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Secure Sockets Layer (SSL) und Transport Layer Security (TLS) sind die Eckpfeiler der sicheren Datenübertragung im Internet. Diese Technologien verschlüsseln die Informationen, die zwischen der Website oder App und dem Browser des Nutzers (oder zwischen zwei Servern) übertragen werden, wodurch die Daten vor unbefugtem Zugriff geschützt sind. TLS, als die weiterentwickelte und sicherere Version von SSL, gewährleistet, dass alle Datenübertragungen den höchsten Sicherheitsstandards entsprechen. Wenn eine Website durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch die Anzeige von HTTPS in der URL signalisiert. Dies dient als ein Indikator für die Nutzer, dass ihre Daten sicher und verschlüsselt übertragen werden.",
      dataSubjectrights: "Rechte der betroffenen Personen",
      dataSubjectRightsIntro: "Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:",
      rightToObject: "Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.",
      rightToWithdraw: "Widerrufsrecht bei Einwilligungen: Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.",
      rightToAccess: "Auskunftsrecht: Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.",
      rightToRectification: "Recht auf Berichtigung: Sie haben entsprechend den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.",
      rightToErasure: "Recht auf Löschung und Einschränkung der Verarbeitung: Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.",
      rightToDataPortability: "Recht auf Datenübertragbarkeit: Sie haben das Recht, Sie betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern.",
      rightToLodgeComplaint: "Beschwerde bei Aufsichtsbehörde: Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.",
      contactmanagement: "Kontakt- und Anfrageverwaltung",
      contactProcessingText: "Bei der Kontaktaufnahme mit uns (z. B. per Post, Kontaktformular, E-Mail, Telefon oder via soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.",
      processedDataTypes: "Verarbeitete Datenarten:",
      inventorydata: "Bestandsdaten (z. B. der vollständige Name, Wohnadresse, Kontaktinformationen, Kundennummer, etc.)",
      contactdata: "Kontaktdaten (z. B. Post- und E-Mail-Adressen oder Telefonnummern)",
      contentdata: "Inhaltsdaten (z. B. textliche oder bildliche Nachrichten und Beiträge sowie die sie betreffenden Informationen, wie z. B. Angaben zur Autorenschaft oder Zeitpunkt der Erstellung)",
      usagedata: "Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen)",
      metadata: "Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen)",
      affectedPersons: "Betroffene Personen:",
      communicationpartners: "Kommunikationspartner",
      processingpurposes: "Zwecke der Verarbeitung:",
      purposesList: "Kommunikation; Organisations- und Verwaltungsverfahren; Feedback (z. B. Sammeln von Feedback via Online-Formular). Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit",
      retentionDeletion: "Aufbewahrung und Löschung:",
      retentionInfo: "Löschung entsprechend Angaben im Abschnitt 'Allgemeine Informationen zur Datenspeicherung und Löschung'",
      Legalbases: "Rechtsgrundlagen:",
      legalBasesList: "Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO). Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO).",
      procedures: "Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:",
      contactFormInfo: "Kontaktformular: Bei Kontaktaufnahme über unser Kontaktformular, per E-Mail oder anderen Kommunikationswegen, verarbeiten wir die uns übermittelten personenbezogenen Daten zur Beantwortung und Bearbeitung des jeweiligen Anliegens. Dies umfasst in der Regel Angaben wie Name, Kontaktinformationen und gegebenenfalls weitere Informationen, die uns mitgeteilt werden und zur angemessenen Bearbeitung erforderlich sind. Wir nutzen diese Daten ausschließlich für den angegebenen Zweck der Kontaktaufnahme und Kommunikation;",
      legalBasesContact: "<br>Rechtsgrundlagen: Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO).",
      pluginsembedded: "Plug-ins und eingebettete Funktionen sowie Inhalte",
      pluginsDescription: "Wir binden Funktions- und Inhaltselemente in unser Onlineangebot ein, die von den Servern ihrer jeweiligen Anbieter (nachfolgend als „Drittanbieter\" bezeichnet) bezogen werden. Dabei kann es sich zum Beispiel um Grafiken, Videos oder Stadtpläne handeln (nachfolgend einheitlich als „Inhalte\" bezeichnet).",
      embeddingRequirement: "Die Einbindung setzt immer voraus, dass die Drittanbieter dieser Inhalte die IP-Adresse der Nutzer verarbeiten, da sie ohne IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte oder Funktionen erforderlich. Wir bemühen uns, nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte anzuwenden.",
      pixelTagsExplanation: "Drittanbieter können ferner sogenannte Pixel-Tags (unsichtbare Grafiken, auch als „Web Beacons\" bezeichnet) für statistische oder Marketingzwecke einsetzen. Durch die „Pixel-Tags\" können Informationen, wie etwa der Besucherverkehr auf den Seiten dieser Website, ausgewertet werden. Die pseudonymen Informationen können darüber hinaus in Cookies auf dem Gerät der Nutzer gespeichert werden und unter anderem technische Auskünfte zum Browser und zum Betriebssystem, zu verweisenden Websites, zur Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebots enthalten, aber auch mit solchen Informationen aus anderen Quellen verbunden werden.",
      legalBasisNote: "Hinweise zu Rechtsgrundlagen: Sofern wir die Nutzer um ihre Einwilligung in den Einsatz der Drittanbieter bitten, stellt die Rechtsgrundlage der Datenverarbeitung die Erlaubnis dar. Ansonsten werden die Nutzerdaten auf Grundlage unserer berechtigten Interessen (d. h. Interesse an effizienten, wirtschaftlichen und empfängerfreundlichen Leistungen) verarbeitet. In diesem Zusammenhang möchten wir Sie auch auf die Informationen zur Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.",
      processeddataTypes: "Verarbeitete Datenarten:",
      usageDataDetails: "Nutzungsdaten (z. B. Seitenaufrufe und Verweildauer, Klickpfade, Nutzungsintensität und -frequenz, verwendete Gerätetypen und Betriebssysteme, Interaktionen mit Inhalten und Funktionen)",
      metaDataDetails: "Meta-, Kommunikations- und Verfahrensdaten (z. B. IP-Adressen, Zeitangaben, Identifikationsnummern, beteiligte Personen)",
      affectedpersons: "Betroffene Personen:",
      usersDetails: "Nutzer (z. B. Webseitenbesucher, Nutzer von Onlinediensten)",
      Processingpurposes: "Zwecke der Verarbeitung:",
      serviceprovision: "Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit",
      retentiondeletion: "Aufbewahrung und Löschung:",
      deletionPolicy: "Löschung entsprechend Angaben im Abschnitt 'Allgemeine Informationen zur Datenspeicherung und Löschung'",
      cookieStorage: "Speicherung von Cookies von bis zu 2 Jahren (Sofern nicht anders angegeben, können Cookies und ähnliche Speichermethoden für einen Zeitraum von zwei Jahren auf den Geräten der Nutzer gespeichert werden.)",
      LegalBases: "Rechtsgrundlagen:",
      consentBasis: "Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)",
      legitimateInterestsBasis: "Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)",
      additionalProcessingInfo: "Weitere Hinweise zu Verarbeitungsprozessen, Verfahren und Diensten:",
      googleFontsTitle: "Google Fonts (Bezug vom Google Server):",
      googleFontsDescription: "Bezug von Schriften (und Symbolen) zum Zwecke einer technisch sicheren, wartungsfreien und effizienten Nutzung von Schriften und Symbolen im Hinblick auf Aktualität und Ladezeiten, deren einheitliche Darstellung und Berücksichtigung möglicher lizenzrechtlicher Beschränkungen. Dem Anbieter der Schriftarten wird die IP-Adresse des Nutzers mitgeteilt, damit die Schriftarten im Browser des Nutzers zur Verfügung gestellt werden können. Darüber hinaus werden technische Daten (Spracheinstellungen, Bildschirmauflösung, Betriebssystem, verwendete Hardware) übermittelt, die für die Bereitstellung der Schriften in Abhängigkeit von den verwendeten Geräten und der technischen Umgebung notwendig sind. Diese Daten können auf einem Server des Anbieters der Schriftarten in den USA verarbeitet werden.",
      googleFontsProcess: "Beim Besuch unseres Onlineangebotes senden die Browser der Nutzer ihre Browser HTTP-Anfragen an die Google Fonts Web API (d. h. eine Softwareschnittstelle für den Abruf der Schriftarten). Die Google Fonts Web API stellt den Nutzern die Cascading Style Sheets (CSS) von Google Fonts und danach die in der CCS angegebenen Schriftarten zur Verfügung. Zu diesen HTTP-Anfragen gehören (1) die vom jeweiligen Nutzer für den Zugriff auf das Internet verwendete IP-Adresse, (2) die angeforderte URL auf dem Google-Server und (3) die HTTP-Header, einschließlich des User-Agents, der die Browser- und Betriebssystemversionen der Websitebesucher beschreibt, sowie die Verweis-URL (d. h. die Webseite, auf der die Google-Schriftart angezeigt werden soll). IP-Adressen werden weder auf Google-Servern protokolliert noch gespeichert und sie werden nicht analysiert. Die Google Fonts Web API protokolliert Details der HTTP-Anfragen (angeforderte URL, User-Agent und Verweis-URL). Der Zugriff auf diese Daten ist eingeschränkt und streng kontrolliert.",
      googleFontsLogging: "Die angeforderte URL identifiziert die Schriftfamilien, für die der Nutzer Schriftarten laden möchte. Diese Daten werden protokolliert, damit Google bestimmen kann, wie oft eine bestimmte Schriftfamilie angefordert wird. Bei der Google Fonts Web API muss der User-Agent die Schriftart anpassen, die für den jeweiligen Browsertyp generiert wird. Der User-Agent wird in erster Linie zum Debugging protokolliert und verwendet, um aggregierte Nutzungsstatistiken zu generieren, mit denen die Beliebtheit von Schriftfamilien gemessen wird. Diese zusammengefassten Nutzungsstatistiken werden auf der Seite „Analysen\" von Google Fonts veröffentlicht. Schließlich wird die Verweis-URL protokolliert, sodass die Daten für die Wartung der Produktion verwendet und ein aggregierter Bericht zu den Top-Integrationen basierend auf der Anzahl der Schriftartenanfragen generiert werden kann.",
      googleFontsPrivacy: "Google verwendet laut eigener Auskunft keine der von Google Fonts erfassten Informationen, um Profile von Endnutzern zu erstellen oder zielgerichtete Anzeigen zu schalten;",
      serviceProvider: "Dienstanbieter:",
      googleAddress: "Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland;",
      legalBAses: "Rechtsgrundlagen:",
      legitimateInterests: "Berechtigte Interessen (Art. 6 Abs. 1 lit. f) DSGVO);",
      website: "Website:",
      PrivacyPolicy: "Datenschutzerklärung:",
      thirdCountryTransfer: "Grundlage Drittlandtransfers:",
      dpf: "Data Privacy Framework (DPF)",
      moreInfo: "Weitere Informationen:",
      CreatedPri: "Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke",
      backBu: "Zurück zum Hauptmenü",
      messageSentSuccess: 'Nachricht wurde erfolgreich gesendet!',
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