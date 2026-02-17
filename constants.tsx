import { Publication, Talk, ArtPiece, Award } from './types';

export const PUBLICATIONS: Publication[] = [
  {
    id: 'aca20',
    title: "Can Pictograph Translation Technologies Facilitate Communication and Integration in Migration Settings?",
    authors: "Bram Bulté, Vincent Vandeghinste, Leen Sevens, Ineke Schuurman, Frank Van Eynde",
    year: 2021,
    venue: "Computational Linguistics in the Netherlands Journal, Vol. 11, p. 189-212",
    type: 'Academic',
    link: "https://www.clinjournal.org/clinj/article/view/136/142",
    abstract: "In this pilot study, we investigate the potential of pictograph translation technologies for facilitating communication and integration in the context of migration. We incorporate a new pictograph set in an existing text-to-pictograph translation system and carry out evaluations on three sets of authentic data (language classes, news articles, websites of local governments). We also evaluate whether a component targeting named entities can increase the coverage of the system. Our results show that, even though the pictograph translations can successfully represent parts of input sentences, conveying their full meaning proves to be a difficult task. We conclude that using the text-to-pictograph translation system as such in a migration context is not recommended. At the same time, we suggest other potential applications for the system in a migration context and point to potential improvements."  
  },   
  {
    id: 'other2',
    title: "Chatten Zonder Letters",
    authors: "Leen Sevens",
    year: 2019,
    venue: "EOS Wetenschap",
    type: 'Other',
    link: "https://www.eoswetenschap.eu/technologie/chatten-zonder-letters",
    abstract: "Niet kunnen lezen en schrijven, maar tóch mailen en chatten? Het Picto-systeem vertaalt tekst naar pictogrammen en omgekeerd zodat mensen met een verstandelijke beperking actief kunnen deelnemen aan de digitale maatschappij. \n \n Een mailtje sturen naar je collega, surfen naar de website van je favoriete krant, tweeten over de kanarie van de buren en nog snel even een app'je verzenden naar je beste vriendin. Tekst en digitale media zijn onlosmakelijk met elkaar verbonden. Toch zijn er in Europa naar schatting tussen de twee en de vijf miljoen mensen voor wie digitale communicatie gemakkelijker zou zijn als die niet via tekst, maar via pictogrammen zou verlopen. Voor hen ontwikkelden we Picto, een slim systeem voor automatische vertaling van geschreven tekst naar pictogrammen en omgekeerd."
  },
  {
    id: 'aca19',
    title: "Automating Lexical Simplification in Dutch",
    authors: "Bram Bulté, Vincent Vandeghinste, Leen Sevens, Ineke Schuurman, Frank Van Eynde",
    year: 2018,
    venue: "Computational Linguistics in the Netherlands Journal, Vol. 8, p. 24-48",
    type: 'Academic',
    link: "https://lirias.kuleuven.be/retrieve/29de3090-bf98-4568-8bda-f0328e3c47c2",
    abstract: "We discuss the design, development and evaluation of an automated lexical simplification tool for Dutch. A basic pipeline approach is used to perform both text adaptation and annotation. First, sentences are preprocessed and word sense disambiguation is performed. Then, the difficulty of each token is estimated by looking at their average age of acquisition and frequency in a corpus of simplified Dutch. We use Cornetto to find synonyms of words that have been identified as difficult and the SONAR500 corpus to perform reverse lemmatisation. Finally, we rely on a largescale language model to verify whether the selected replacement word fits the local context. In addition, the text is augmented with information from Wikipedia (word definitions and links). We tune and evaluate the system with sentences taken from the Flemish newspaper De Standaard. The results show that the system's adaptation component has low coverage, since it only correctly simplifies around one in five ‘difficult' words, but reasonable accuracy, with no grammatical errors being introduced in the text. The Wikipedia annotations have a broader coverage, but their potential for simplification needs to be further developed and more thoroughly evaluated."
  },
  {
    id: 'aca18',
    title: "Dutch Colour Terms",
    authors: "Frank Van Eynde, Vincent Vandeghinste, Leen Sevens, Ineke Schuurman",
    year: 2018,
    venue: "A Coat of Many Colours. Vriendenboek voor Dany Jaspers, p. 1-13",
    type: 'Academic',
    link: "https://dj60.be/wp-content/uploads/2018/01/vaneynde.pdf",
    abstract: "From a physical point of view all colours are equal, but our senses and our minds treat some as more equal than others. Red and blue, for instance, are generally felt to be basic, while crimson and indigo are not. The question why has occupied philosophers, artists, physicists and psychologists over the centuries. Among the most famous are Aristotle, Leonardo da Vinci, Isaac Newton, Wolfgang Goethe, Arthur Schopenhauer and Ludwig Wittgenstein. Linguists have also contributed to the debate, since the distinction between basic colours and other colours is also reflected in our languages."   
  },   
  {
    id: 'aca17',
    title: "Words Divide, Pictographs Unite: Pictograph Communication Technologies for People with an Intellectual Disability",
    authors: "Leen Sevens",
    year: 2018,
    venue: "PhD Thesis, LOT Publications",
    type: 'Academic',
    link: "https://lirias.kuleuven.be/retrieve/518329",
    abstract: "In order to improve the accessibility of the Internet for people with an intellectual disability (ID), we develop a set of tools that automatically translate Dutch natural language text into pictographs and vice versa, allowing people with limited literacy skills to read and write status updates, emails, and chat messages in online environments. \n \n For the conversion of texts into pictographs, we start from an existing system. We evaluate the baseline Text-to-Pictograph translation system using a combination of automated metrics, manual assessments, and user studies, and we propose three major improvements: We create a spelling correction tool for people with ID, we develop a syntactic simplification tool and a temporality detection module, and we implement a word sense disambiguation tool for improved semantic analysis. The added value of each of these components is evaluated in depth. \n \n Conversely, the Pictograph-to-Text translation tool provides help in constructing textual messages by allowing the user to input a series of pictographs, and translates these messages into natural language text. The challenge in Pictograph-to-Text translation is twofold. The first task concerns the development of an accessible interface that allows people with ID to find the pictographs of their choice. The second task is the actual development of the Pictograph-to-Text translation engine. We discuss a variety of approaches, including language modelling and (neural) machine translation techniques, toward the generation of rich natural language text from underspecified pictograph input."  
  },    
  {
    id: 'aca16',
    title: "Pictograph Translation Technologies for People with Limited Literacy",
    authors: "Vincent Vandeghinste, Leen Sevens, Ineke Schuurman",
    year: 2018,
    venue: "CLARIN Annual Conference Proceedings, p. 190-193",
    type: 'Academic',
    link: "https://core.ac.uk/download/pdf/572206779.pdf#page=197",
    abstract: "We present a set of Pictograph Translation Technologies, which automatically translates natural language text into pictographs, as well as pictograph sequences into natural language text. These translation technologies are combined with sentence simplification and an advanced spelling correction mechanism. The goal of these technologies is to enable people with a low level of literacy in a certain language to have access to information available in that language, and to allow these people to participate in online social life by writing natural language messages through pictographic input. The technologies and demonstration system will be added to the CLARIN infrastructure at the Dutch Language Institute in the course of this year, and have been presented on Tour De CLARIN."
  },  
  {
    id: 'aca15',
    title: "Less is More: A Rule-Based Syntactic Simplification Module for Improved Text-to-Pictograph Translation",
    authors: "Leen Sevens, Vincent Vandeghinste, Ineke Schuurman, Frank Van Eynde",
    year: 2018,
    venue: "Data and Knowledge Engineering, Vol. 117, p. 264-289",
    type: 'Academic',
    link: "https://www.academia.edu/download/89444091/j.datak.2018.05.00120220810-1-1n04lej.pdf",
    abstract: "In order to enable or facilitate online communication for people with an intellectual disability, the Text-to-Pictograph translation system automatically translates Dutch written text into a series of Sclera or Beta pictographs. The baseline system presents the reader with a more or less verbatim pictograph-per-word translation. As a result, long and complex input sentences lead to long and complex pictograph translations, leaving the end users confused and distracted. To overcome these problems, we developed a rule-based simplification system for Dutch Text-to-Pictograph translation. By using recursion and applying the simplification operations in a logical way, only one syntactic parse is needed per message. Promising results are obtained."
  },    
  {
    id: 'aca14',
    title: "Involving People with an Intellectual Disability in the Development of Pictograph Translation Technologies for Social Media Use",
    authors: "Leen Sevens, Vincent Vandeghinste, Ineke Schuurman, Frank Van Eynde",
    year: 2018,
    venue: "Language and the New (Instant) Media, p. 57-68, Presses Universitaires de Louvain",
    type: 'Academic',
    link: "https://pul.uclouvain.be/book/?GCOI=29303100157810",
    abstract: "This paper presents a pictograph interface for Pictograph-to-Text translation, which facilitates the construction of written text on social media platforms for users with Intellectual Disabilities. For the design of the interface, a user-centred approach was adopted. Results show that the target group can appreciate accessing social media through pictograph-based technologies."
  },  
  {
    id: 'childrensbook3',
    title: "Katwalk",
    authors: "An Brouns (author), Leen Sevens (illustrator)",
    year: 2017,
    venue: "Uitgeverij Het Punt",
    type: 'Children’s books',
    abstract: "Wat krijg je als je een moeder met een grenzeloze fantasie en een dochter met een passie voor tekenen samenbrengt? Juist! Een sprankelend kinderboek! Katwalk vertelt het verhaal over hun kat Celesse (ze bestaat echt!) die onverwacht in de modewereld wordt gedompeld. Een boek over vriendschap, doorzettingsvermogen, zelfvertrouwen en creativiteit."
  },
  {
    id: 'other1',
    title: "Kom Naar Buiten Met Je Doctoraatsonderzoek!",
    authors: "Leen Sevens",
    year: 2017,
    venue: "KU Leuven Blogt",
    type: 'Other',
    link: "https://kuleuvenblogt.be/2017/12/13/kom-naar-buiten-met-je-doctoraatsonderzoek/",
    abstract: "Op verbeelding staat geen grenzen, zelfs niet in in de academische wereld. Laat de wereld weten hoe gepassioneerd je bent door jouw onderzoeksproject met deze originele tips en ontdek zelf hoe aanstekelijk creativiteit daadwerkelijk kan zijn." 
  },  
  {
    id: 'aca13',
    title: "E-Including the Illiterate",
    authors: "Vincent Vandeghinste, Leen Sevens, Ineke Schuurman",
    year: 2017,
    venue: "IEEE Potentials, Vol. 36, p. 29-33",
    type: 'Academic',
    link: "https://ieeexplore.ieee.org/document/7814401",
    abstract: "In present-day society, we communicate over the Internet in several media forms. We put videos and images online, listen to music made by famous bands or by our friends, and read and write a lot of text. Never in the history of mankind have we produced more text than at this present moment, so being able to read and write is an important way of taking part in our society. We tend to forget that, even in our educated communities, not all people can read or write and there exist several degrees of literateness. People with reduced cognitive capacities and those migrating from cultures with a different language, or even a completely different writing system, are excluded from fully taking part in written online communication: they are e-excluded."
  },  
  {
    id: 'aca12',
    title: "Building an Accessible Pictograph Interface for Users with Intellectual Disabilities",
    authors: "Leen Sevens, Jo Daems, Annelies De Vliegher, Ineke Schuurman, Vincent Vandeghinste, Frank Van Eynde",
    year: 2017,
    venue: "Harnessing the Power of Technology to Improve Lives, p. 870-877",
    type: 'Academic',
    link: "https://ebooks.iospress.nl/publication/47371",
    abstract: "This paper presents a pictograph interface for Pictograph-to-Text translation, which facilitates the construction of written text on social media platforms for users with Intellectual Disabilities. For the design of the interface, a user-centred approach was adopted. Results show that the target group can appreciate accessing social media through pictograph-based technologies."
  },
  {
    id: 'aca11',
    title: "Simplified Text-to-Pictograph Translation for People with Intellectual Disabilities",
    authors: "Leen Sevens, Vincent Vandeghinste, Ineke Schuurman, Frank Van Eynde",
    year: 2017,
    venue: "Proceedings of the 22nd International Conference on Natural Language & Information Systems, p. 185-196, Springer International Publishing",
    type: 'Academic',
    link: "https://link.springer.com/content/pdf/10.1007/978-3-319-59569-6.pdf",
    abstract: "In order to enable or facilitate online communication for people with Intellectual Disabilities, the Text-to-Pictograph translation system automatically translates Dutch written text into a series of Sclera or Beta pictographs. The baseline system presents the reader with a more or less verbatim pictograph-per-word translation. As a result, long and complex input sentences lead to long and complex pictograph translations, leaving the end users confused and distracted. To overcome these problems, we developed a rule-based simplification system for Dutch Text-to-Pictograph translation. Our evaluations show a large improvement over the baseline."
  },
  {
    id: 'aca10',
    title: "Able to Read my Mail: An Accessible E-mail Client with Assistive Technology",
    authors: "Horacio Saggion, Daniel Ferrés, Leen Sevens, Ineke Schuurman",
    year: 2017,
    venue: "Proceedings of the 14th International Web4All Conference, p. 1-4, Association for Computing Machinery",
    type: 'Academic',
    link: "https://dl.acm.org/doi/epdf/10.1145/3058555.3058567",
    abstract: "The Able to Include project aims at improving the living conditions of people with intellectual or developmental disabilities (IDD) in key areas of society. One of its focus points concerns improving the integration of people with IDD in the workplace by introducing accessible Web-based tools. This paper describes one of the tools developed as result of the project: an e-mail client with text simplification and other assistive technologies which makes information transmitted over the Internet more understandable to people with IDD therefore facilitating their labor integration. The accessible Web e-mail client has been developed following a User-Centered Design and tested with people with IDD. The results so far are encouraging."
  },
  {
    id: 'aca9',
    title: "The CLIN27 Shared Task: Translating Historical Text to Contemporary Language for Improving Automatic Linguistic Annotation",
    authors: "Erik Tjong Kim Sang et al. (incl. Leen Sevens, Tom Vanallemeersch)",
    year: 2017,
    venue: "Computational Linguistics in the Netherlands Journal, Vol. 7, p. 53-64",
    type: 'Academic',
    link: "https://clinjournal.org/clinj/article/view/68/61",
    abstract: "The CLIN27 shared task evaluates the effect of translating historical text to modern text with the goal of improving the quality of the output of contemporary natural language processing tools applied to the text. We focus on improving part-of-speech tagging analysis of seventeenth-century Dutch. Eight teams took part in the shared task. The best results were obtained by teams employing character-based machine translation. The best system obtained an error reduction of 51% in comparison with the baseline of tagging unmodified text. This is close to the error reduction obtained by human translation (57%)."
  },
  {
    id: 'aca8',
    title: "Automated Spelling Correction for Dutch Internet Users with Intellectual Disabilities",
    authors: "Leen Sevens, Tom Vanallemeersch, Ineke Schuurman, Vincent Vandeghinste, Frank Van Eynde",
    year: 2016,
    venue: "Proceedings of 1st Workshop on Improving Social Inclusion using NLP: Tools and Resources, p. 11-19, ELRA Language Resources Association",
    type: 'Academic',
    link: "https://lirias.kuleuven.be/retrieve/390119",
    abstract: "We present the first version of an automated spelling correction system for Dutch Internet users with Intellectual Disabilities (ID). The normalization of ill-formed messages is an important preprocessing step before any conventional Natural Language Processing (NLP) process can be applied. As such, we describe the effects of automated correction of Dutch ID text within the larger framework of a Text-to-Pictograph translation system. The present study consists of two main parts. First, we thoroughly analyze email messages that have been written by users with cognitive disabilities in order to gain insights on how to develop solutions that are specifically tailored to their needs. We then present a new, generally applicable approach toward context-sensitive spelling correction, based on character-level fuzzy matching techniques. The resulting system shows significant improvements, although further research is still needed."
  },
  {
    id: 'aca7',
    title: "Improving Text-to-Pictograph Translation Through Word Sense Disambiguation",
    authors: "Leen Sevens, Gilles Jacobs, Vincent Vandeghinste, Ineke Schuurman, Frank Van Eynde",
    year: 2016,
    venue: "Proceedings of the 5th Joint Conference on Lexical and Computational Semantics, p. 131-135, Association for Computational Linguistics",
    type: 'Academic',
    link: "https://aclanthology.org/S16-2017.pdf",
    abstract: "We describe the implementation of a Word Sense Disambiguation (WSD) tool in a Dutch Text-to-Pictograph translation system, which converts textual messages into sequences of pictographic images. The system is used in an online platform for Augmentative and Alternative Communication (AAC). In the original translation process, the appropriate sense of a word was not disambiguated before converting it into a pictograph. This often resulted in incorrect translations. The implementation of a WSD tool provides a better semantic understanding of the input messages."
  },
  {
    id: 'aca6',
    title: "E-Inclusion of Functionally Illiterate Users by the use of Language Technology",
    authors: "Leen Sevens, John J. O' Flaherty, Ineke Schuurman, Vincent Vandeghinste, Frank Van Eynde",
    year: 2016,
    venue: "Proceedings of the 2nd Conference on Engineering4Society, Vol. 2, p. 91-95, Institute of Electrical and Electronics Engineers (IEEE)",
    type: 'Academic',
    link: "https://lirias.kuleuven.be/retrieve/1d85a7a1-386d-4e26-bac7-d409c7a0633c",
    abstract: "Social media websites have radically changed the way in which we access and share information. However, people with Intellectual Disabilities (ID) have very limited access to the currently available technological tools, such as email clients or Facebook. We describe how the Able to Include project is changing this situation, using various Natural Language Processing (NLP) technologies within the framework of a contextaware Accessibility Layer. More particularly, in this paper, we will focus on the set of tools that translate written text into pictographs and vice versa. Additionally, we will explain how the different pilot studies that are conducted within the project guide us in improving our technologies."
  },
  {
    id: 'aca5',
    title: "Towards Integrating People with Intellectual Disabilities in the Digital World",
    authors: "Jaime Medina Maestro, Horacio Saggion, Ineke Schuurman, Leen Sevens, John O'Flaherty, Annelies De Vliegher, Jo Daems",
    year: 2016,
    venue: "Proceedings of the 7th International Workshop on Intelligent Environments Supporting Healthcare and Well-being, p. 348-357",
    type: 'Academic',
    link: "http://ebooks.iospress.nl/volumearticle/45194",
    abstract: "Information and Communication Technologies have radically changed the way in which we access and share information. However, accessibility for all is still far from being a reality. People with Intellectual or Developmental Disabilities (IDD) currently have very limited access to the information society and, in particular, to social media websites. Even though the recent technological advances have provided valuable support for people with disabilities, the focus has in most cases been placed on sensory and physical impairments, while IDD is normally not on the agenda of technology developers. In this paper, we will describe how the Able to Include project is changing this situation, using various Natural Language Processing (NLP) techniques. We will also describe how the pilot studies guide us in improving our tools."
  },
  {
    id: 'aca4',
    title: "Translating Text into Pictographs",
    authors: "Vincent Vandeghinste, Ineke Schuurman, Leen Sevens, Frank Van Eynde",
    year: 2015,
    venue: "Natural Language Engineering, Vol. 23 (2), p. 217-244, Cambridge University Press",
    type: 'Academic',
    link: "https://lirias.kuleuven.be/retrieve/409217",
    abstract: "We describe and evaluate a text-to-pictograph translation system that is used in an online platform for Augmentative and Alternative Communication, which is intended for people who are not able to read and write, but who still want to communicate with the outside world. The system is set up to translate from Dutch into Sclera and Beta, two publicly available pictograph sets consisting of several thousands of pictographs each. We have linked large amounts of these pictographs to synsets or combinations of synsets of Cornetto, a lexical-semantic database for Dutch similar to WordNet. In the translation system, the Dutch input text undergoes shallow linguistic analysis and the synsets of the content words are looked up. The system looks for the nearest pictographs in the lexical-semantic database and displays the message into pictographs. We evaluated the system and results showed a large improvement over the baseline system which consisted of straightforward string-matching between the input text and the filenames of the pictographs. Our system provides a clear improvement in the communication possibilities of illiterate people. Nevertheless there is room for further improvement."
  },
  {
    id: 'aca3',
    title: "Extending a Dutch Text-to-Pictograph Converter to English and Spanish",
    authors: "Leen Sevens, Vincent Vandeghinste, Ineke Schuurman, Frank Van Eynde",
    year: 2015,
    venue: "Proceedings of the 6th Workshop on Speech and Language Processing for Assistive Technologies, p. 110-117, Association for Computational Linguistics",
    type: 'Academic',
    link: "https://aclanthology.org/W15-5119.pdf",
    abstract: "We describe how a Dutch Text-to-Pictograph translation system, designed to augment written text for people with Intellectual or Developmental Disabilities (IDD), was adapted in order to be usable for English and Spanish. The original system has a language-independent design. As far as the textual part is concerned, it is adaptable to all natural languages for which interlingual WordNet [1] links, lemmatizers and part-of-speech taggers are available. As far as the pictographic part is concerned, it can be modified for various pictographic languages. The evaluations show that our results are in line with the performance of the original Dutch system. Text-to-Pictograph translation has a wide application potential in the domain of Augmentative and Alternative Communication (AAC). The system will be released as an open source product."
  },
  {
    id: 'childrensbook2',
    title: "Dromeria: Lode",
    authors: "Marc Geyens (author), Leen Sevens (illustrator)",
    year: 2015,
    venue: "Uitgeverij Het Punt",
    type: 'Children’s books',
    link: "",
    abstract: "In Dromeria: Biggie hebben we al vele inwoners van Dromeria leren kennen. Nu is het de beurt aan de verstrooide postbode Lode!"
  },
  {
    id: 'aca2',
    title: "Natural Language Generation from Pictographs",
    authors: "Leen Sevens, Vincent Vandeghinste, Ineke Schuurman, Frank Van Eynde",
    year: 2015,
    venue: "Proceedings of the 15th European Workshop on Natural Language Generation, p. 71-75, Association for Computational Linguistics",
    type: 'Academic',
    link: "https://aclanthology.org/W15-4711.pdf",
    abstract: "We present a Pictograph-to-Text translation system for people with Intellectual or Developmental Disabilities (IDD). The system translates pictograph messages, consisting of one or more pictographs, into Dutch text using WordNet links and an ngram language model. We also provide several pictograph input methods assisting the users in selecting the appropriate pictographs."
  },
  {
    id: 'aca1',
    title: "Improving the Precision of Synset Links Between Cornetto and Princeton WordNet",
    authors: "Leen Sevens, Vincent Vandeghinste, Frank Van Eynde",
    year: 2014,
    venue: "Proceedings of the Workshop on Lexical and Grammatical Resources for Language Processing, p. 120-126, Association for Computational Linguistics",
    type: 'Academic',
    link: "https://lirias.kuleuven.be/retrieve/279457",
    abstract: "Knowledge-based multilingual language processing benefits from having access to correctly established relations between semantic lexicons, such as the links between different WordNets. WordNet linking is a process that can be sped up by the use of computational techniques. Manual evaluations of the partly automatically established synonym set (synset) relations between Dutch and English in Cornetto, a Dutch lexical-semantic database associated with the EuroWordNet grid, have confronted us with a worrisome amount of erroneous links. By extracting translations from various bilingual resources and automatically assigning a confidence score to every pre-established link, we reduce the error rate of the existing equivalence relations between both languages' synsets (section 2). We will apply this technique to reuse the connection of Sclera and Beta pictograph sets and Cornetto synsets to Princeton WordNet and other WordNets, allowing us to further extend an existing Dutch text-to-pictograph translation tool to other languages (section 3)."
  },
  {
    id: 'childrensbook1',
    title: "Dromeria: Biggie",
    authors: "Marc Geyens (author), Leen Sevens (illustrator)",
    year: 2013,
    venue: "Uitgeverij Het Punt",
    type: 'Children’s books',
    link: "",
    abstract: "In Dromeria woont Biggie samen met vele andere leuke dieren. Wil je weten wat daar allemaal gebeurt? Lees dan snel dit boekje en ontdek welke grappige streken Biggie nu weer uithaalt..."
  },
];

export const TALKS: Talk[] = [
  {
    id: 'host7',
    title: "The Big Blend V",
    event: "KU Leuven",
    date: "2026-03-13",
    location: "Leuven, Belgium",
    type: 'Hosting',
    description: "Co-organizer and panel moderator of the fifth edition of 'The Big Blend', an educational innovation event for and by the Humanities and Social Sciences Group. \n \n Looking for inspiration to innovate your teaching? How can we design interaction with and between students in our educational practice? How do you encourage reflection, discussion, and collaboration in the process? Which tools and support can you draw on to make this happen? And how do you evaluate it all? The fifth edition of 'The Big Blend' takes a closer look at several concrete practice-based examples, with plenty of room for feedback and interaction, as well as two energising networking moments.",
    link: "https://ghum.kuleuven.be/NL/onderwijs-hw/the-big-blend",
    imageUrl: "/website/host4.png"
  },
  {
    id: 'scicomm20',
    title: "Jury Member for Falling Walls Lab Leuven",
    event: "KU Leuven",
    date: "2026-03-11",
    location: "Leuven, Belgium",
    type: 'science communication',
    description: "Jury member for the Belgian preselections of the Falling Walls Lab competition at KU Leuven.",
    link: "https://www.kuleuven.be/communicatie/wetenschapscommunicatie/iedereen/falling-walls-lab-1/fallingwallslab"
  },
  {
    id: 'academictalk29',
    title: "GenAI en Begrijpelijke Taal",
    event: "Colloquium Begrijpelijke Rechtstaal",
    date: "2025-05-20",
    location: "Brussels, Belgium",
    type: 'Academic & Professional',
    description: "Three workshops in collaboration with An De Moor and Bert Keirsbilck. \n \n Tijdens deze sessie laten we zien hoe tools zoals Copilot en andere chatbots kunnen helpen bij het herschrijven van juridische documenten in een 'klare taal'. We presenteren voorbeelden van wollige juridische teksten en hun herschrijvingen in begrijpelijke rechtstaal, uitgevoerd door een jurist, studenten en GenAI. Daarnaast leren we je hoe je effectieve prompts kunt schrijven om het beste uit GenAI te halen en geven we je praktische voorbeelden mee. We sluiten af met een brainstormsessie over andere mogelijke toepassingen van GenAI voor juristen, waarbij we waardevolle tips delen.",
    imageUrl: "/website/academictalk15.jpg",
  },
  {
    id: 'scicomm19',
    title: "Jury Member for Falling Walls Lab Leuven",
    event: "KU Leuven",
    date: "2025-03-25",
    location: "Leuven, Belgium",
    type: 'science communication',
    description: "Jury member for the Belgian preselections of the Falling Walls Lab competition at KU Leuven.",
    imageUrl: "/website/scicomm15.jpg",
    gallery: ["/website/scicomm16.jpg"],
    link: "https://www.kuleuven.be/communicatie/wetenschapscommunicatie/iedereen/falling-walls-lab-1/fallingwallslab"
  },
  {
    id: 'academictalk28',
    title: "Closing Speech on the Future of Language Education in Times of GenAI",
    event: "Forumdag Taalbeleid Hoger Onderwijs",
    date: "2024-05-31",
    location: "Leuven, Belgium",
    type: 'Academic & Professional',
    description: "I gave the closing speech at the Forum Day on Language Policy in Higher Education (topic: 'Toward a High-Tech Language Policy?'), where I wrapped up and reflected on the day's main insights."
  },
  {
    id: 'scicomm18',
    title: "Jury Member for Falling Walls Lab Leuven",
    event: "KU Leuven",
    date: "2024-03-28",
    location: "Leuven, Belgium",
    type: 'science communication',
    description: "Jury member for the Belgian preselections of the Falling Walls Lab competition at KU Leuven.",
    imageUrl: "/website/scicomm14.png",
    link: "https://www.kuleuven.be/communicatie/wetenschapscommunicatie/iedereen/falling-walls-lab-1/fallingwallslab"
  },
  {
    id: 'host6',
    title: "The Big Blend IV",
    event: "KU Leuven",
    date: "2024-03-22",
    location: "Leuven, Belgium",
    type: 'Hosting',
    description: "Co-organizer and panel moderator of the fourth edition of 'The Big Blend', an educational innovation event for and by the Humanities and Social Sciences Group. \n \n What is the 'new' normal, and how does it differ — or not — from the 'old' normal? How can we foster interaction with and between students? How do you encourage reflection, discussion, and collaboration among students? Which tools and support can you use to facilitate this? And how do you evaluate it all? In this fourth edition of 'The Big Blend', we focused on several concrete case studies, with plenty of room for feedback and interaction, as well as two energising networking moments.",
    link: "https://ghum.kuleuven.be/NL/onderwijs-hw/the-big-blend-iv",
    imageUrl: "/website/host4.png"
  },
  {
    id: 'host5',
    title: "The Big Blend III",
    event: "KU Leuven",
    date: "2023-03-31",
    location: "Leuven, Belgium",
    type: 'Hosting',
    description: "Co-organizer and panel moderator of the third edition of 'The Big Blend', an educational innovation event for and by the Humanities and Social Sciences Group. \n \n What is the 'new' normal, and how does it differ — or not — from the 'old' normal? How can we foster interaction with and between students? How do you encourage reflection, discussion, and collaboration among students? Which tools and support can you use to facilitate this? And how do you evaluate it all? In this third edition of 'The Big Blend', we focused on several concrete case studies, with plenty of room for feedback and interaction, as well as two energising networking moments.",
    link: "https://ghum.kuleuven.be/NL/onderwijs-hw/the-big-blend-III",
    imageUrl: "/website/host4.png"
  },
  {
    id: 'scicomm17',
    title: "Jury Member for Falling Walls Lab Leuven",
    event: "KU Leuven",
    date: "2023-03-22",
    location: "Leuven, Belgium",
    type: 'science communication',
    description: "Jury member for the Belgian preselections of the Falling Walls Lab competition at KU Leuven.",
    imageUrl: "/website/scicomm13.jpg",
    link: "https://www.kuleuven.be/communicatie/wetenschapscommunicatie/iedereen/falling-walls-lab-1/fallingwallslab"
  },
   {
    id: 'media7',
    title: "Word je Docent Binnenkort een Robot?",
    event: "AI AI AI Podcast",
    date: "2023-02-13",
    location: "Remote",
    type: 'Media & Interviews',
    description: "Podcast description: 'We bekijken de rol van artificiële intelligentie in het hoger onderwijs van dichtbij. Mogen studenten hun pennen opbergen, want schrijven is verleden tijd? Moeten we terug naar examens met pen en papier? Kortom, staat er binnenkort een robot voor de aula?",
    link: "https://open.spotify.com/episode/0eyXI2q9sHt4H47aKPYSzZ",
    imageUrl: "/website/media3.jpg"
  },
  {
    id: 'scicomm15',
    title: "Jury Member for the 3 Minute Thesis competition",
    event: "KU Leuven",
    date: "2022-11-27",
    location: "Leuven, Belgium",
    type: 'science communication',
    description: "Jury member for the Belgian preselections of the '3 Minute Thesis' competition at KU Leuven, organized during 'Dag van de Wetenschap' (Science Day).",
    imageUrl: "/website/scicomm11.jpg"
  },
  {
    id: 'academictalk27',
    title: "Student vs. Docent: Feedback over de Toekomst van Blended Onderwijs in HW",
    event: "The Big Blend II (KU Leuven)",
    date: "2021-12-10",
    location: "Leuven, Belgium",
    type: 'Academic & Professional',
    description: "Event report: 'De immer bevlogen Leen Sevens gaf ons tijdens The Big Blend een inkijk in een grootscheepse bevraging bij ruim 3.000 studenten en 390 docenten die de stafmedewerker onderwijsinnovatie in deskundige banen leidde. Wat kunnen we zoal uit het onderzoek afleiden? Gezien de alomtegenwoordigheid van het coronavirus, hoeft het niet te verbazen dat slechts een bescheiden minderheid van de contactmomenten op de campus heeft plaatsgevonden. Tegelijkertijd valt de hoge interactiviteit hierbij op, in meerdere mate zelfs dan bij de vakken die volledig digitaal zijn verlopen. Wanneer we dan inzoomen op dat online onderwijs, kunnen de meeste elementen daarvan op veel bijval rekenen. Docenten geven hierbij weliswaar aan dat ze in de toekomst verkiezen om aan een fysiek publiek les te geven. Studenten raden op hun beurt de inzet van verouderde lesopnames ten stelligste af. Als het op digitale presentaties aankomt, merken ze dan weer op dat uiteenzettingen op de campus meer oefenkansen voor demonstratieskills bieden. Online onderwijs heeft met andere woorden voor- en nadelen. Studenten benadrukken vooral de flexibiliteit als pluspunt, maar tonen zich toch bezorgd om de studiebelasting en het gebrek aan sociaal contact. Voor docenten is de tijdsbelasting eveneens een aandachtspunt. Zij prijzen aan de andere kant de vele ervaringen met digitale tools en onderwijsdesign die ze hebben opgedaan.'",
    link: "https://www.kuleuven.be/onderwijs/learninglab/realisaties/the-big-blend-II"
  },
  {
    id: 'host4',
    title: "The Big Blend II",
    event: "KU Leuven",
    date: "2021-12-10",
    location: "Leuven, Belgium",
    type: 'Hosting',
    description: "Co-organizer of the second edition of 'The Big Blend', an educational innovation event for and by the Humanities and Social Sciences Group. \n \n The end of the working week had never been so enjoyable as on Friday, December 10, 2021, during The Big Blend II. On that day, several lecturers and support staff from the Group of Humanities gave around a hundred participants a stimulating boost of inspiration. They shared, among other things, how they used educational tools to engage in dialogue and interaction with students — and with each other.",
    link: "https://www.kuleuven.be/onderwijs/learninglab/realisaties/the-big-blend-II",
    imageUrl: "/website/host4.png"
  },
  {
    id: 'media6',
    title: "Speeddate met Leen Sevens: 'Ooit wil ik Klingon leren'",
    event: "Sonar (Magazine KU Leuven)",
    date: "2021-06-02",
    location: "Remote",
    type: 'Media & Interviews',
    description: "Article description: 'In een vorig leven was Leen Sevens onderzoeker in taaltechnologie. Vandaag gaat ze als stafmedewerker educatieve technologie bij de groepsdiensten van Humane Wetenschappen op zoek naar technologische oplossingen die nuttig zijn voor onze docenten en studenten. Maar ook Donald Duck, cosplay en exotische talen spelen een belangrijke rol in haar leven.'",
    link: "https://stories.kuleuven.be/nl/verhalen/speeddate-met-leen-sevens-ooit-wil-ik-klingon-leren",
    imageUrl: "/website/media2.jpg"
  },
  {
    id: 'academictalk26',
    title: "Feedback van Studenten over Afstandsonderwijs",
    event: "The Big Blend I (KU Leuven)",
    date: "2020-12-04",
    location: "Leuven, Belgium",
    type: 'Academic & Professional',
    description: "Event report: 'Hoe ervaren studenten blended onderwijs? Leen Sevens van de Groepsdiensten Humane Wetenschappen licht een tipje van de sluier van een grootscheepse studentenbevraging. Als het van hen afhangt, zal deze onderwijsvorm in de toekomst een rol van betekenis blijven spelen. Zelf koos Leen voor een gedurfde blend tussen een online livesessie en handgeschreven slides.'",
    link: "https://www.kuleuven.be/onderwijs/learninglab/realisaties/the-big-blend-terugblik"
  },
  {
    id: 'host3',
    title: "The Big Blend I",
    event: "KU Leuven",
    date: "2020-12-04",
    location: "Leuven, Belgium",
    type: 'Hosting',
    description: "Co-organizer the first edition of 'The Big Blend', an educational innovation event for and by the Humanities and Social Sciences Group. \n \n What happens when lecturers and support staff bring together their experiences and expertise in blended learning? The Big Blend, a dynamic online event featuring testimonials from across the Group of Humanities. More than 172 participants from 19 faculties and services joined the Microsoft Teams meeting on Friday, December 4, 2020, to be inspired by their colleagues.",
    link: "https://www.kuleuven.be/onderwijs/learninglab/realisaties/the-big-blend-terugblik",
    imageUrl: "/website/host4.png"
  },
  {
    id: 'scicomm11',
    title: "Praten met Prentjes",
    event: "Kinderuniversiteit",
    date: "2020-10-03",
    location: "Leuven, Belgium",
    type: 'science communication',
    description: "Kinderuniversiteit (Children's University) is an educational outreach initiative that introduces children to university life through engaging lectures, workshops, and hands-on activities, inspiring curiosity and a love for science and learning from an early age.",
    imageUrl: "/website/scicomm7.jpg",
    gallery: ["/website/scicomm8.jpg"] 
  },
  {
    id: 'academictalk24',
    title: "Words Divide, Pictographs Unite",
    event: "KU Leuven",
    date: "2019-11-14",
    location: "Antwerp, Belgium",
    type: 'Academic & Professional',
    description: "Guest lecture about pictograph translation technologies for the course 'Communicatiewetenschap' at the Faculty of Arts in Antwerp.",
    imageUrl: "/website/academictalk14.jpg"
  },
  {
    id: 'scicomm14',
    title: "Science Pitch about the Picto Translation Technology",
    event: "VRT Taalavond",
    date: "2019-10-10",
    location: "Antwerp, Belgium",
    type: 'science communication',
    description: "Invited speaker at the VRT Taalavond, where I presented my PhD Cup pitch and was interviewed by Marcel Vanthilt about accessibility in language.",
    imageUrl: "/website/scicomm9.jpg",
    gallery: ["/website/scicomm10.jpg"] 
  },
  {
    id: 'scicomm13',
    title: "Final Round Pitch: Chatten Zonder Letters",
    event: "De Vlaamse PhD Cup",
    date: "2019-10-06",
    location: "Brussels, Belgium",
    type: 'science communication',
    description: "Third Place in the final round the Flemish PhD Cup (Vlaamse PhD Cup), a science communication competition challenging researchers to present their doctoral research to a broad audience. Following a four-day media training, sixteen selected candidates advanced through semi-finals, with eight finalists competing in the final round.",
    imageUrl: "/website/award12.jpg",
  },
  {
    id: 'scicomm12',
    title: "Semi-final Pitch: Chatten Zonder Letters",
    event: "De Vlaamse PhD Cup",
    date: "2019-09-25",
    location: "Brussels, Belgium",
    type: 'science communication',
    description: "I was selected in the semi-final round of the Flemish PhD Cup (Vlaamse PhD Cup), a science communication competition challenging researchers to present their doctoral research to a broad audience. Following a four-day media training, sixteen selected candidates advanced through semi-finals, with eight finalists competing in the final round.",
    imageUrl: "/website/award13.png",
  },
  {
    id: 'academictalk25',
    title: "Praten met Prentjes",
    event: "KU Leuven",
    date: "2019-09-19",
    location: "Antwerp, Belgium",
    type: 'Academic & Professional',
    description: "Invited lecture on pictograph translation technologies to mark the opening of the new academic year for the BA in Applied Linguistics at the Faculty of Arts in Antwerp."
  },
  {
    id: 'scicomm10',
    title: "Picto Workshops for Children",
    event: "Ervaringsdagen",
    date: "2019-05-16",
    location: "Lanaken, Belgium",
    type: 'science communication',
    description: "The Ervaringsdagen (Experience Days) in Lanaken are educational awareness events, organised by the municipal Welfare Service and the Advisory Council for People with Disabilities, where children and adults take part in interactive workshops that simulate everyday experiences of living with a disability. Held at the Lanaken Cultural Centre, these activities aim to foster understanding, empathy, and inclusive attitudes.",
    imageUrl: "/website/scicomm2.jpg"
  },
  {
    id: 'academictalk23',
    title: "Public PhD Defense",
    event: "KU Leuven",
    date: "2018-12-14",
    location: "Leuven, Belgium",
    type: 'Academic & Professional',
    description: "Never in the history of mankind have we produced more text than at this present moment. Being able to read and write is an important way of taking part in our society. However, we tend to forget that, even in our educated communities, there exist several degrees of literacy. Written text on the Internet creates a barrier between people with and without an intellectual disability. As a result, people with reading and writing difficulties are e-excluded. Schools and day centres for people with an intellectual disability use specialised picture systems, called pictographs, that depict everyday activities and objects, to enable accessible written communication between children or adults with an intellectual disability and their environment. In my dissertation, I transfer these pictographs to social media platforms and email, by developing natural language processing tools that automatically translate natural language text into pictographs and vice versa for people with an intellectual disability, allowing them to read and write status updates, emails, and chat messages in online environments.",
    imageUrl: "/website/academictalk13.jpg"
  },
  {
    id: 'scicomm8',
    title: "Pictographs to the Rescue!",
    event: "Microbes & Booze",
    date: "2018-12-12",
    location: "Leuven, Belgium",
    type: 'science communication',
    description: "Presentation for the Microbes & Booze lecture series. The monthly ‘Microbes and Booze’ seminars stimulate strong interaction between different labs of the center in a very informal atmosphere."
  },
  {
    id: 'scicomm9',
    title: "Spelen met Taal en Computers",
    event: "Dag van de Wetenschap",
    date: "2018-11-25",
    location: "Leuven, Belgium",
    type: 'science communication',
    description: "Dag van de Wetenschap (Science Day) is an annual public outreach event in which universities, research institutions, and science organisations open their doors to the public, offering hands-on activities, demonstrations, workshops, and talks to make scientific research accessible, engaging, and relevant for a broad audience.",
    imageUrl: "/website/scicomm6.jpg"
  },
  {
    id: 'scicomm6',
    title: "Science Slam: Pictogramvertaaltechnologie voor Mensen met een Verstandelijke Beperking",
    event: "Boekenbeurs Antwerpen",
    date: "2018-11-08",
    location: "Antwerpen, Belgium",
    type: 'science communication',
    description: "Winner of KU Leuven's Science Slam at the Antwerp Book Fair (Boekenbeurs van Antwerpen), a science communication competition in which six researchers presented their work to a broad audience in an accessible and engaging way.",
    imageUrl: "/website/award6.jpg"
  },
  {
    id: 'scicomm7',
    title: "Science Pitch about the Picto Translation Technology",
    event: "VIP Opening Event @ Boekenbeurs Antwerpen",
    date: "2018-10-27",
    location: "Antwerpen, Belgium",
    type: 'science communication',
    description: "Speaker at the VIP opening event of the Antwerp Book Fair as a representative of KU Leuven.",
    imageUrl: "/website/scicomm5.jpg"
  },
  {
    id: 'host2',
    title: "The 2nd Workshop on Improving Social Inclusion: Tools and Resources (ISI-NLP)",
    event: "The 11th Language Resources and Evaluation Conference (LREC 2018)",
    date: "2018-05-07",
    location: "Miyazaki, Japan",
    type: 'Hosting',
    description: "I co-organized the second workshop on 'Improving Social Inclusion: Tools and Resources' (ISI-NLP, pronounce ['i:zi] NLP) organized as a pre-conference workshop (May 7) at the 11th Language Resources and Evaluation Conference (LREC 2018) in Miyazaki, Japan. \n \n Social media are an inherent part of life in the 21st century and should be accessible to anyone. People who are to some extent functionally illiterate are currently excluded from properly using social media such as Twitter, Facebook, and WhatsApp. In order to overcome this exclusion, we need NLP tools and resources adapted to the needs of, among others, people with intellectual and/or developmental disabilities, people with limited communication skills due to illness or accident, (deaf) people with a sign language as mother tongue, migrants wanting to socially integrate and communicate in a language they do not yet master, and elderly people with diminishing language skills. Which NLP techniques are used in order to allow these groups to be socially included and use social media? What do we need in order to build applications for these groups of users?",
    link: "https://www.ccl.kuleuven.be/ISINLP2/",
    imageUrl: "/website/host3.jpg"
  },
  {
    id: 'scicomm16',
    title: "Jury Member for Falling Walls Lab Leuven",
    event: "KU Leuven",
    date: "2018-03-29",
    location: "Leuven, Belgium",
    type: 'science communication',
    description: "Jury member for the Belgian preselections of the Falling Walls Lab competition at KU Leuven.",
    imageUrl: "/website/scicomm12.jpg",
    link: "https://www.kuleuven.be/communicatie/wetenschapscommunicatie/iedereen/falling-walls-lab-1/fallingwallslab"
  },
  {
    id: 'scicomm5',
    title: "The @rt of Effective #Science Communication: Do's and Don'ts",
    event: "Kulak Research Day",
    date: "2018-03-09",
    location: "Kortrijk, Belgium",
    type: 'science communication',
    description: "Invited talk for Kulak staff on practical techniques for communicating research clearly and effectively.",
    imageUrl: "/website/scicomm4.jpg"
  },
  {
    id: 'academictalk22',
    title: "Pictograph-to-Text Translation for Augmented and Alternative Communication",
    event: "Computational Linguistics in the Netherlands Conference (CLIN28)",
    date: "2018-01-26",
    location: "Nijmegen, The Netherlands",
    type: 'Academic & Professional',
    description: "Presentation in collaboration with Vincent Vandeghinste, Lyan Verwimp, Ineke Schuurman, Frank Van Eynde, and Patrick Wambacq, presented by me. In today's digital age, people with limited reading and writing skills have trouble partaking in online activities. Not being able to access or use information technology is a major form of social exclusion. We present a Pictograph-to-Text translation system for people with an intellectual disability. It provides help in constructing Dutch textual messages, by allowing the user to input a series of pictographs, and translates these messages into natural language text. \n \n The main challenge in translating from pictograph languages to natural language text is the fact that a pictograph-for-word correspondence will almost never provide an acceptable output. Pictographs are underspecified, both semantically and grammatically. In the second place, the pictograph input to translation could be ambiguous and unpredictable with respect to pictograph order. Our baseline system for Pictograph-to-Text translation (Sevens et al. 2015) generates natural language from pictographs using language models and does not use any grammatical information in the translation process. When a pictograph is selected, its connected WordNet synset is retrieved, and from this synset, the system retrieves all the synonyms it contains. For each of these synonyms, reverse lemmatisation is applied. The reverse lemmatiser retrieves the full inflectional paradigm of each lemma. Each of these surface forms is a hypothesis for the language model. We propose two types of language models. In our n-gram-based approach, the system performs beam search decoding on an n-gram language model (n≤5), trained with the CMU toolkit (Clarkson & Rosenfeld 1997) on a Dutch corpus of over 1100M tokens. In our Long Short-Term Memory-based approach, we train a language model with Tensorflow (Abadi et al. 2016) on the Flemish part of the CGN corpus (3.8M tokens) (Oostdijk et al. 2002) and re-rank the natural language hypotheses. The evaluations of the baseline system show that using language models for finding the most likely combination of textual representations is already an improvement over the initial baseline (i.e., pictograph file names), but there is ample room for improvement. \n \n In recent experiments, we apply machine translation techniques. Since a parallel corpus of pictograph sequences and well-formed written Dutch text is not available, we explore different approaches toward the creation of a suitable parallel corpus. In our first approach, we automatically translate a large corpus of monolingual Dutch SoNaR subtitles (27.6M tokens) (Oostdijk et al. 2013) into pictographs using the Text-to-Pictograph translation tool (Vandeghinste et al. 2015). In our second approach, we lemmatise the subtitle corpus, and remove all words that are not content words, thus creating a source language corpus that resembles pictograph input. Our phrase-based statistical machine translation approach toward Pictograph-to-Text translation uses the Moses decoder (Koehn et al. 2007), while our neural machine translation approach makes use of the open-source system OpenNMT (Klein et al. 2017). We build different models using a variety of training conditions, including factored models that include part-of-speech and lemma information, and evaluate all systems using automated metrics and human evaluations (adequacy, fluency, and ranking). Our first experiments indicate that the machine translation approaches outperform the baseline system."
  },
  {
    id: 'media4',
    title: "Lanakense Ontwikkelt Pictogrammentaal en Geeft Mensen met een Mentale Beperking een Stem",
    event: "TV Limburg",
    date: "2018-01-14",
    location: "Remote",
    type: 'Media & Interviews',
    description: "Interview description: 'Een technologie waarmee tekst voor mensen met een beperking kan omgezet worden naar pictogrammen en omgekeerd. Het is het doctoraatsproject van Leen Sevens uit Lanaken. Ze hoopt op die manier sociale media en het internet vlotter toegankelijk te maken voor mensen met een beperking. Het project gaat niet onopgemerkt voorbij, want de Lanakense won er al een internationale competitie mee voor jonge onderzoekers die maatschappelijke vernieuwing teweeg brengen.'",
    link: "https://www.tvl.be/nieuws/lanakense-ontwikkelt-pictogrammentaal-en-geeft-mensen-met-een-mentale-beperking-een-stem-54241"
  },
  {
    id: 'media3',
    title: "Interview for Nieuwe Feiten",
    event: "Radio 1",
    date: "2018-01-08",
    location: "Remote",
    type: 'Media & Interviews',
    description: "Interview for the radio programme Nieuwe Feiten (Radio 1), hosted by Lieven Vandenhaute. During the broadcast, Frank Deboosere, Xavier Taverne and Martine Tanghe experimented with the Picto system and took on a playful 'Picto exam' in the corridors of the VRT.",
    link: "http://www.ccl.kuleuven.be/~leen/NieuweFeitenPicto.wav"
  },
  {
    id: 'academictalk21',
    title: "Taaltechnologie ontwikkelen voor en met mensen met een verstandelijke beperking",
    event: "COM@Modem Dag",
    date: "2017-11-30",
    location: "Geel, Belgium",
    type: 'Academic & Professional',
    description: "Presentation in collaboration with Vincent Vandeghinste, Ineke Schuurman, and Frank Van Eynde, presented by me. The Com@Modem Dag is an annual event (Thomas More University of Applied Sciences) focused on Augmentative and Alternative Communication (AAC) for people with speech, writing, or reading difficulties.",
    imageUrl: "/website/academictalk12.jpg"
  },
  {
    id: 'media2',
    title: "Lanakense Vindt Systeem uit dat Tekst Vertaalt naar Pictogrammen",
    event: "Het Belang van Limburg",
    date: "2017-11-10",
    location: "Remote",
    type: 'Media & Interviews',
    description: "Article description: 'Leen Sevens (25) uit Lanaken heeft een vertaalsysteem uitgevonden dat tekst kan omzetten in pictogrammen en vice versa. Daarmee wil de doctoraatsstudente het internet en sociale media toegankelijker maken voor mensen met een verstandelijke beperking. 'Maar het systeem zou bijvoorbeeld ook gebruikt kunnen worden om te kunnen communiceren met vluchtelingen die nog geen Nederlands kunnen', zegt de Lanakense.",
    imageUrl: "/website/media1.jpg"
  },
  {
    id: 'scicomm4',
    title: "Breaking the Wall of Illiteracy",
    event: "Falling Walls Lab Berlin",
    date: "2017-11-08",
    location: "Berlin, Germany",
    type: 'science communication',
    description: "Presentation for the Falling Walls Lab international finale in Berlin. A hundred candidates presented their innovative and groundbreaking research in 3 minutes to a jury and audience.",
    imageUrl: "/website/scicomm3.jpg"
  },
  {
    id: 'academictalk20',
    title: "E-Inclusion Through Pictographs",
    event: "LT Industry Summit",
    date: "2017-10-10",
    location: "Brussels, Belgium",
    type: 'Academic & Professional',
    description: "Presentation in collaboration with Vincent Vandeghinste, Ineke Schuurman, and Frank Van Eynde, presented by me. Social media websites have radically changed the way in which we access and share information. However, people with Intellectual Disabilities (ID) have very limited access to the currently available technological tools, such as email clients or Facebook. We describe how the Able to Include project is changing this situation, using various Natural Language Processing (NLP) technologies within the framework of a contextaware Accessibility Layer. More particularly, in this paper, we will focus on the set of tools that translate written text into pictographs and vice versa. Additionally, we will explain how the different pilot studies that are conducted within the project guide us in improving our technologies."
  },
  {
    id: 'academictalk19',
    title: "Building an Accessible Pictograph Interface for Users with Intellectual Disabilities",
    event: "Association for the Advancement of Assistive Technology in Europe Conference (AAATE 2017)",
    date: "2017-09-14",
    location: "Sheffield, UK",
    type: 'Academic & Professional',
    description: "We present a pictograph interface for Pictograph-to-Text translation, which facilitates the construction of written text on social media platforms for users with Intellectual Disabilities. For the design of the interface, a user-centred approach was adopted. Results show that the target group can appreciate accessing social media through pictograph-based technologies.",
    imageUrl: "/website/academictalk10.jpg"
  },
  {
    id: 'scicomm3',
    title: "What We Learn with Pleasure, We Never Forget",
    event: "Let's Talk Science",
    date: "2017-07-06",
    location: "Ghent, Belgium",
    type: 'Academic & Professional',
    description: "Let's Talk Science is all about science communication and communicative competences. Every year, around the beginning of July, PhD researchers and postdocs of all Flemish universities and researchers of the Council of the Flemish Universities of Applied Sciences and Arts get the chance to delve into the world of science communication. In this plenary session, I testified about my experiences with science communication. By sharing examples and best practices, I illustrated how you can use science communication to the benefit of your current research and future career."
  },
  {
    id: 'academictalk18',
    title: "Simplified Text-to-Pictograph Translation for People with Intellectual Disabilities",
    event: "International Conference on Applications of Natural Language to Information Systems (NLDB 2017)",
    date: "2017-06-22",
    location: "Liège, Belgium",
    type: 'Academic & Professional',
    description: "In order to enable or facilitate online communication for people with Intellectual Disabilities, the Text-to-Pictograph translation system automatically translates Dutch written text into a series of Sclera or Beta pictographs. The baseline system presents the reader with a more or less verbatim pictograph-per-word translation. As a result, long and complex input sentences lead to long and complex pictograph translations, leaving the end users confused and distracted. To overcome these problems, we developed a rule-based simplification system for Dutch Text-to-Pictograph translation. Our evaluations show a large improvement over the baseline.",
  },
  {
    id: 'media1',
    title: "Computational Linguist Leen Sevens Talks To Durtti About Her Groundbreaking Pictograph Translation Technology",
    event: "Durtti",
    date: "2017-05-31",
    location: "Remote",
    type: 'Media & Interviews',
    description: "Article description: 'Leen Sevens is continually pushing extraordinary boundaries in her research at the Centre for Computational Linguistics (KU Leuven). The many benefits of her pioneering work will undoubtedly transform those with cognitive learning difficulties, including the rapidly increasing number of migrating populations who are having to quickly learn a new language. Durtti wants to understand some of the development challenges Leen has faced to date, and more importantly, how she has overcome them.'",
    link: "http://web.archive.org/web/20190621201347/http://www.durtti.com:80/computational-linguist-leen-sevens-talks-to-durtti-about-her-groundbreaking-pictograph-translation-technology/"
  },
  {
    id: 'academictalk17',
    title: "E-Inclusion Through Pictographs",
    event: "Uitreiking Pioniersprijs en Maatschappijprijs Groep Humane Wetenschappen",
    date: "2017-05-22",
    location: "Leuven, Belgium",
    type: 'Academic & Professional',
    description: "Presentation in collaboration with Vincent Vandeghinste, Ineke Schuurman, and Frank Van Eynde, presented by me. The Picto technology received a honorary mention for the Humanities and Social Sciences Group's 'Pioniersprijs'. The Pioniersprijs is awarded to a researcher or research group in the Humanities and Social Sciences Group who has initiated and conducted research that is scientifically innovative and opens a completely new avenue of research. The main aim is to celebrate researchers who have ventured outside the confines of the established research in their domain.",
    imageUrl: "/website/award14.jpg"
  },
    {
    id: 'academictalk16',
    title: "Make it Simple, But Significant: Improved Text-to-Pictograph Translation for People with Intellectual Disabilities",
    event: "Nordic Network on Disability Research Conference (NNDR14)",
    date: "2017-05-03",
    location: "Örebro, Sweden",
    type: 'Academic & Professional',
    description: "Presentation in collaboration with Vincent Vandeghinste, Ineke Schuurman, and Frank Van Eynde, presented by me. In order to enable or facilitate online communication for people with Intellectual Disabilities, the Text-to-Pictograph translation system automatically translates Dutch, English, and Spanish written text into a series of Sclera or Beta pictographs. Our baseline system presents the reader with a more or less verbatim pictograph-per-word translation, without changing the order of the pictographs, and not removing any redundant information in the output pictograph sequence. As a result, long and complex input sentences lead to long and complex pictograph translations, which often leave our end users confused and distracted. \n \n In order to formulate a set of objectives for pictograph output simplification, we study a number of guidelines and inspiration sources: the Chinese writing system, easy-to-read news messages for people with Intellectual Disabilities, and the “Klare Taal” checklist for clear language. We build an inventory of syntactic phenomena to be treated by the simplification module and introduce deep linguistic analysis into the translation process. The simplification module splits long and complex sentences into several shorter units, and deletes pictographs that do not contribute to the essence of the message. This leads to shorter, clearer, and more consistent pictograph conversions. \n \n We perform automated evaluations using gold standard simplifications. The system does not perform any unnecessary syntactic simplification operations and high accuracy scores were obtained. \n \n Applying syntactic simplification for Text-to-Pictograph translation is a complex, yet necessary step toward making our system more user-friendly and usable. Simplification systems are ideally tested with the intended users. Future evaluations within the framework of the European Able to Include project will involve human judgements. We expect these experiments to reveal the merits and disadvantages of our proposed solutions.",
    imageUrl: "/website/academictalk9.jpg",
  },
  {
    id: 'academictalk15',
    title: "Unity is Strength: How User Feedback Influences Technical Decisions in the Able to Include Project",
    event: "Nordic Network on Disability Research Conference (NNDR14)",
    date: "2017-05-03",
    location: "Örebro, Sweden",
    type: 'Academic & Professional',
    description: "Poster in collaboration with Ineke Schuurman, Annelies De Vliegher, and Jo Daems, presented by me. People with Intellectual Disabilities (ID) currently have very limited access to the information society and social media websites. Not being able to access or use information technology is a major form of social exclusion. The Able to Include project aims to overcome this problem by developing a set of technologies that can improve the daily lives of people with ID. One such technology is the Picto translation system, which translates Dutch, English, and Spanish written text into a series of Sclera or Beta pictographs, and vice versa. At the time of developing the Picto system, a number of technical decisions had to be made. In order to create a truly useful tool that is tailored toward the target group, the end users' feedback turned out to be indispensable. \n \n Within the project, three types of pilot studies are carried out. One concerns 'Leisure within the Information Society', another one 'Mobility', and the third one 'Labour Integration'. These pilots allow, through the interaction with real users, for a permanent adjustment of the project, especially of the tools and resources involved. \n \n The results of the Flemish pilot studies are used to adapt and improve the Dutch Picto translation technology. Testing is a particularly long process, especially since it requires very small steps to be taken. However, we found that, if that time is spent meaningfully and a solid methodology is adopted, the feedback that is given by the end users can be exceptionally valuable. For instance, they thought the initial pictograph output was too long and complex, so a simplification module was added. There are many examples of how the users' opinions influence our technical decisions. \n \n The users are enthusiastic about being part of the project. They are eager to learn more about the technologies and positive about accessing Facebook through them. After all, they are the experts, and when new technologies are developed for them, they should, ideally, be involved from the very start.", 
    imageUrl: "/website/academictalk8.jpg",
  },
  {
    id: 'scicomm1',
    title: "Breaking the Wall of Illiteracy",
    event: "Falling Walls Lab Leuven",
    date: "2017-03-15",
    location: "Leuven, Belgium",
    type: 'science communication',
    description: "Presentation for the Falling Walls Lab competition in Leuven. Fifteen candidates presented their innovative and groundbreaking research in 3 minutes to a jury and audience. The jury as well as the audience declared a winner. 'Breaking the Wall of Illiteracy' won the Jury's First Prize and the Audience Award.",
    imageUrl: "award4.jpg",
    gallery: ["/website/award5.jpg", "/website/scicomm1.jpg"]
  },
  {
    id: 'academictalk14',
    title: "Text-to-Pictograph Translation and Vice Versa for People with Intellectual Disabilities",
    event: "Séminaires du CENTAL",
    date: "2017-02-24",
    location: "Louvain-la-Neuve, Belgium",
    type: 'Academic & Professional',
    description: "Presentation in collaboration with Vincent Vandeghinste, Ineke Schuurman, and Frank Van Eynde, presented by me. We describe, demonstrate and evaluate a Text-to-Pictograph translation system that is used in an online platform for Augmentative and Alternative Communication (AAC), which is intended for people who are not able to read and write, but who still want to communicate with the outside world (Vandeghinste et al., 2015). The system is set up to translate from Dutch, English and Spanish text into Sclera and Beta, two publicly available pictograph sets consisting of several thousands of pictographs each. We have linked large amounts of these pictographs to synsets or combinations of synsets in WordNets, lexical-semantic databases. We also describe the other direction and how it works to generate text from sequences of pictographs (Sevens et al., 2015).",
    link: "https://cental.uclouvain.be/team/seminaires/seminaire2016-2017/2017.02.24_sevens_slides.pdf"
  },
  {
    id: 'academictalk13',
    title: "De Meerwaarde van Pictogrammen en Klare Taal in een Juridische Context",
    event: "Op.Recht.Mechelen: Justitie en Management",
    date: "2017-02-10",
    location: "Mechelen, Belgium",
    type: 'Academic & Professional',
    description: "On 10 February 2017, the Op.Recht.Mechelen conference 'Better Management of Justice: Also Better for the Citizen?' was held in Mechelen, Belgium, as part of the city's Op.Recht.Mechelen festival focusing on law and justice. The event brought together legal experts, policymakers and academics to discuss how reforms in the management of the justice system could improve its performance and benefit society."
  },
  {
    id: 'host8',
    title: "Computational Linguistics in the Netherlands Conference (CLIN27)",
    event: "KU Leuven",
    date: "2017-02-10",
    location: "Leuven, Belgium",
    type: 'Hosting',
    description: "Co-organizer of the 27th Computational Linguistics in the Netherlands Conference (CLIN27) in Leuven.",
    link: "https://www.ccl.kuleuven.be/CLIN27/",
  },
  {
    id: 'academictalk12',
    title: "Syntactic Simplification for Improved Text-to-Pictograph Translation",
    event: "Computational Linguistics in the Netherlands Conference (CLIN27)",
    date: "2017-02-10",
    location: "Leuven, Belgium",
    type: 'Academic & Professional',
    description: "Presentation in collaboration with Vincent Vandeghinste, Ineke Schuurman, and Frank Van Eynde, presented by me. In order to enable or facilitate online communication for people with Intellectual Disabilities, the Text-to-Pictograph translation system automatically translates Dutch written text into a series of Sclera or Beta pictographs. The baseline system presents the reader with a more or less verbatim pictograph-per-word translation, without changing the order of the pictographs, and not removing any redundant information in the output pictograph sequence. As a result, long and complex input sentences lead to long and complex pictograph translations, which often leave the end users confused and distracted. \n \n We build an inventory of syntactic phenomena to be treated by the simplification module and introduce deep linguistic analysis into the translation process, using the Alpino parser for preprocessing. The Chinese writing system, easy-to-read news messages for people with Intellectual Disabilities, and the 'Klare Taal' checklist for clear language serve as an inspiration source. The simplification module splits long and complex sentences into several shorter units, and deletes pictographs that do not contribute to the essence of the message. This leads to shorter, clearer, and more consistent pictograph conversions. \n \n We perform automated evaluations of the simplification module using gold standard simplifications. The system does not apply any unnecessary simplification operations and high accuracy scores are obtained. \n \n Applying syntactic simplification for Text-to-Pictograph translation is a complex, yet necessary step toward making our system more user-friendly and usable. Future evaluations will involve human judgments. ", 
  },
  {
    id: 'academictalk11',
    title: "E-Inclusion of Functionally Illiterate Users by the use of Language Technology",
    event: "Engineering4Society",
    date: "2016-09-16",
    location: "Leuven, Belgium",
    type: 'Academic & Professional',
    description: "Presentation in collaboration with Ineke Schuurman, John O'Flaherty, Vincent Vandeghinste, and Frank Van Eynde, presented by me. Social media websites have radically changed the way in which we access and share information. However, people with Intellectual Disabilities (ID) have very limited access to the currently available technological tools, such as email clients or Facebook. We describe how the Able to Include project is changing this situation, using various Natural Language Processing (NLP) technologies within the framework of a contextaware Accessibility Layer. More particularly, in this paper, we will focus on the set of tools that translate written text into pictographs and vice versa. Additionally, we will explain how the different pilot studies that are conducted within the project guide us in improving our technologies."
  },
  {
    id: 'academictalk10',
    title: "Pictographs to the Rescue! Social Media for Functionally Illiterate Users",
    event: "Lancaster Disability Studies Conference",
    date: "2016-09-06",
    location: "Lancaster, UK",
    type: 'Academic & Professional',
    description: "Presentation in collaboration with Ineke Schuurman, John O'Flaherty, Vincent Vandeghinste, and Frank Van Eynde, presented by me. In order to be included in today's society, it is becoming increasingly important to be able to use the current available technological tools. The number of apps is growing exponentially, but very few are really accessible to people with Intellectual Disabilities (ID). However, users indicated very clearly their desire to interact with their friends and family on social media. The Able-to-Include project seeks to improve the lives of people with ID. Able-to-Include is creating a context-aware Accessibility Layer based on three key technologies that can improve the daily tasks of people with ID and help them interact with the Information Society. These technologies are a text simplifier, pictograph translation technologies, and text-to-speech funtionalities. The integration of this Accessibility Layer with existing ICT tools will be tested in different pilots in Spain, Belgium, and the UK. Within the Able-to-Include project, KU Leuven is responsible for the development of the Text-to-Pictograph and Pictograph-to-Text translation tools. The Text-to-Pictograph translation tool translates Dutch, English, and Spanish text into a series of Sclera or Beta pictographs. Additional to a shallow source language analysis, we use WordNets to link pictographs to groups of synonyms and retrieve appropriate or semantically related pictographs in the translation process. The system allows social media text to be converted into pictographs with a single tap. The Pictograph-to-Text translation system provides help in constructing Dutch, English, and Spanish textual messages by allowing the user to introduce a series of pictographs and translates these messages into natural language using WordNet synsets and a trigram language model. So far, we have developed two different input methods. When using social media websites, users have access to the Accessibility Layer to construct pictograph messages using a pictograph hierarchy and a pictograph predictor. Their messages will be converted to text, which can be posted on the website.", 
    imageUrl: "/website/academictalk7.jpg"
  },
 {
    id: 'academictalk9',
    title: "Improving Text-to-Pictograph Translation Through Word Sense Disambiguation",
    event: "The 5th Joint Conference on Lexical and Computational Semantics (*SEM)",
    date: "2016-08-11",
    location: "Berlin, Germany",
    type: 'Academic & Professional',
    description: "Poster in collaboration with Gilles Jacobs, Vincent Vandeghinste, Ineke Schuurman, and Frank Van Eynde, presented by me. We describe the implementation of a Word Sense Disambiguation (WSD) tool in a Dutch Text-to-Pictograph translation system, which converts textual messages into sequences of pictographic images. The system is used in an online platform for Augmentative and Alternative Communication (AAC). In the original translation process, the appropriate sense of a word was not disambiguated before converting it into a pictograph. This often resulted in incorrect translations. The implementation of a WSD tool provides a better semantic understanding of the input messages.",
    imageUrl: "/website/academictalk6.png"
  },
  {
    id: 'host1',
    title: "The 1st Workshop on Improving Social Inclusion: Tools and Resources (ISI-NLP)",
    event: "The 10th Language Resources and Evaluation Conference (LREC 2016)",
    date: "2016-05-23",
    location: "Portoroz, Slovenia",
    type: 'Hosting',
    description: "I co-organized the first workshop on 'Improving Social Inclusion: Tools and Resources' (ISI-NLP, pronounce ['i:zi] NLP) organized as a pre-conference workshop (May 23) at the 10th Language Resources and Evaluation Conference (LREC 2016) in Portoroz, Slovenia. \n \n Social media are an inherent part of life in the 21st century and should be accessible to anyone. People who are to some extent functionally illiterate are currently excluded from properly using social media such as Twitter, Facebook, and WhatsApp. In order to overcome this exclusion, we need NLP tools and resources adapted to the needs of, among others, people with intellectual and/or developmental disabilities, people with limited communication skills due to illness or accident, (deaf) people with a sign language as mother tongue, migrants wanting to socially integrate and communicate in a language they do not yet master, and elderly people with diminishing language skills. Which NLP techniques are used in order to allow these groups to be socially included and use social media? What do we need in order to build applications for these groups of users?",
    link: "https://www.ccl.kuleuven.be/ISINLP/",
    imageUrl: "/website/host1.jpg" 
  },
  {
    id: 'academictalk8',
    title: "Automated Spelling Correction for Dutch Internet Users with Intellectual Disabilities",
    event: "The 10th Language Resources and Evaluation Conference (LREC 2016)",
    date: "2016-05-23",
    location: "Portoroz, Slovenia",
    type: 'Academic & Professional',
    description: "Presentation in collaboration with Tom Vanallemeersch, Ineke Schuurman, Vincent Vandeghinste, and Frank Van Eynde, presented by me. We present the first version of an automated spelling correction system for Dutch Internet users with Intellectual Disabilities (ID). The normalization of ill-formed messages is an important preprocess- ing step before any conventional Natural Language Processing (NLP) process can be applied. As such, we describe the effects of automated correction of Dutch ID text within the larger framework of a Text-to-Pictograph translation system. The present study consists of two main parts. First, we thoroughly analyze email messages that have been written by users with cognitive disabilities in or- der to gain insights on how to develop solutions that are specifically tailored to their needs. We then present a new, generally applicable approach toward context-sensitive spelling correction, based on character-level fuzzy matching techniques. The resulting system shows significant improvements, although further research is still needed.",
    imageUrl: "/website/host2.jpg"
  },
  {
    id: 'media5',
    title: "Vertaalprogramma Zet Tekst om in Pictogrammen en Omgekeerd",
    event: "Campuskrant KU Leuven",
    date: "2016-03-23",
    location: "Remote",
    type: 'Media & Interviews',
    description: "Article description: 'Naar schatting twee tot vijf miljoen mensen in Europa zouden makkelijker communiceren als dat via een ander medium dan tekst kan verlopen. 'Denk daarbij bijvoorbeeld aan mensen met het syndroom van Down, afasie of een ernstige verstandelijke beperking. Pictogrammen kunnen hen een belangrijke uitweg bieden', zegt linguïste Leen Sevens van het Centrum voor Computerlinguïstiek (CCL).'",
    link: "https://museos2015.wordpress.com/wp-content/uploads/2015/11/campuskrant.pdf"
  },
  {
    id: 'academictalk7',
    title: "Natural Language Generation from Pictographs",
    event: "Computational Linguistics in the Netherlands Conference (CLIN26)",
    date: "2015-12-18",
    location: "Amsterdam, The Netherlands",
    type: 'Academic & Professional',
    description: "Poster in collaboration with Ineke Schuurman, Vincent Vandeghinste, and Frank Van Eynde, presented by me. This poster addresses the challenge of translating sequences of pictographs (often used in Augmentative and Alternative Communication, or AAC) into grammatically correct natural language. The researchers focus on bridging the gap between symbol-based communication—which often lacks formal grammar—and spoken language. The poster details a method for generating natural language sentences from these pictographs, designed to assist individuals with communication disabilities or to facilitate communication in specific contexts, such as translation for refugees.",
    imageUrl: "/website/academictalk4.png"
  },
  {
    id: 'scicomm2',
    title: "Praten met Prentjes",
    event: "The Big Draw Belgium",
    date: "2015-10-08",
    location: "Leuven, Belgium",
    type: 'science communication',
    description: "I hosted a workshop on pictograph communications for an audience of people with an intellectual disability. The Big Draw Belgium is part of an international movement that celebrates drawing as a universal tool for creativity, thinking, and connection. Each year it brings together schools, museums, artists, libraries, and communities across Belgium to host workshops, urban sketching sessions, exhibitions, and participatory drawing events, making drawing accessible and fun for people of all ages and backgrounds."
  },
  {
    id: 'academictalk5',
    title: "Extending a Dutch Text-to-Pictograph Converter to English and Spanish",
    event: "LOT Summer School",
    date: "2015-06-21",
    location: "Leuven, Belgium",
    type: 'Academic & Professional',
    description: "Poster in collaboration with Vincent Vandeghinste, Ineke Schuurman, and Frank Van Eynde, presented by me. The Able-To-Include project aims to improve the living conditions of people with Intellectual or Developmental Disabilities. As failure to access or use ICT (email, social media) is considered a major form of social and economic exclusion, the goal is to build an 'accessibility layer' that is based on three key technologies, automatic translation from pictographs to text being one of them. We describe how our original Dutch Text2Picto system has been modified in order to be useable for English and Spanish. The design of the tool is such that it is as language-independent as possible, not only for the (natural) source language, but also for the (pictographic) target language, with the exception of some language-specific phenomena. As far as the 'text' part of the tool is concerned, it is adaptable to all (alphabetical) languages, and as far as the 'picto' part is concerned, it is adaptable to various pictographic languages that were specifically designed for Augmentative and Alternative Communication purposes, such as the Sclera and Beta sets. Sclera and Beta pictographs being linked to groupings of synonyms (synsets), rather than to individual words, WordNets and their (often problematic) mutual relations play a central role in the process of creating multilingual text-to-pictograph translation tools. In particular, the highly erroneous, partly automatically established relations between Dutch and English in the Cornetto database urged us to devise an algorithm for automatically assigning confidence scores to synset links.",
    imageUrl: "/website/award8.jpg",
    gallery: ["/website/academictalk5.png"]  
  },
  {
    id: 'academictalk4',
    title: "Automatic Translation with Pictographs to Serve People with IDD",
    event: "Nordic Network on Disability Research Conference (NNDR13)",
    date: "2015-05-08",
    location: "Bryggen, Norway",
    type: 'Academic & Professional',
    description: "Presentation in collaboration with Ineke Schuurman, Vincent Vandeghinste, and Frank Van Eynde, presented by me. Technology can improve life of people with disabilities considerably. For people with intellectual or developmental disabilities (IDD), social exclusion is a problem, as they can not do like their peers, use ICT (email, social media), especially when they are unable to write or read well. Therefore the European project Able-To-Include (CIF-framework) aims to improve their living conditions in this respect. Its goal is to build an ICT 'accessibility layer' that is based on three key technologies: automatic text simplification, text-to-speech, and text-to-pictograph translation (including pictograph-to-text and pictograph-to-pictograph translation). For the latter, we are currently serving three natural languages (Dutch, English and Spanish), and two pictographic languages (Beta and Sclera), but the tools are in se language-independent. New languages can be added relatively easily, provided that the necessary linguistic tools and resources (such as a part-of-speech tagger, a lemmatizer and lexical-semantic database à la WordNet) are available. The same holds for pictographic languages, the main condition being that there is a facility to express 'verbs'. \n \n We evaluate the system by automatic techniques drawn from the field of machine translation, but we also rely on comments by our users, i.e. people with IDD and their care givers, in order to refine the tool. \n \n Our tool contributes to the e-inclusion of people with intellectual disabilities. Moreover, augmenting written text with pictographic images allows organizations and companies to easily reach out to a large group of people that previously had none or only very limited access to digital written content.",
    imageUrl: "/website/academictalk2.jpg",
  },
  {
    id: 'academictalk3',
    title: "Text-To-Pictograph Translation for Six Language Pairs",
    event: "Computational Linguistics in the Netherlands Conference (CLIN25)",
    date: "2015-02-06",
    location: "Antwerp; Belgium",
    type: 'Academic & Professional',
    description: "Presentation in collaboration with Vincent Vandeghinste, Ineke Schuurman, and Frank Van Eynde, presented by me. The Able-To-Include project aims to improve the living conditions of people with Intellectual or Developmental Disabilities. As failure to access or use ICT (email, social media) is considered a major form of social and economic exclusion, the goal is to build an 'accessibility layer' that is based on three key technologies, automatic translation from pictographs to text being one of them. We describe how our original Dutch Text2Picto system has been modified in order to be useable for English and Spanish. The design of the tool is such that it is as language-independent as possible, not only for the (natural) source language, but also for the (pictographic) target language, with the exception of some language-specific phenomena. As far as the 'text' part of the tool is concerned, it is adaptable to all (alphabetical) languages, and as far as the 'picto' part is concerned, it is adaptable to various pictographic languages that were specifically designed for Augmentative and Alternative Communication purposes, such as the Sclera and Beta sets. Sclera and Beta pictographs being linked to groupings of synonyms (synsets), rather than to individual words, WordNets and their (often problematic) mutual relations play a central role in the process of creating multilingual text-to-pictograph translation tools. In particular, the highly erroneous, partly automatically established relations between Dutch and English in the Cornetto database urged us to devise an algorithm for automatically assigning confidence scores to synset links."
  },
  {
    id: 'academictalk1',
    title: "Improving the Precision of Synset Links Between Cornetto and Princeton WordNet",
    event: "The Workshop on Lexical and Grammatical Resources for Language Processing",
    date: "2014-09-24",
    location: "Dublin, Ireland",
    type: 'Academic & Professional',
    description: "Poster presentation in collaboration with Vincent Vandeghinste and Frank Van Eynde, presented by me. Knowledge-based multilingual language processing benefits from having access to correctly established relations between semantic lexicons, such as the links between different WordNets. WordNet linking is a process that can be sped up by the use of computational techniques. Manual evaluations of the partly automatically established synonym set (synset) relations between Dutch and English in Cornetto, a Dutch lexical-semantic database associated with the EuroWordNet grid, have confronted us with a worrisome amount of erroneous links. By extracting translations from various bilingual resources and automatically assigning a confidence score to every pre-established link, we reduce the error rate of the existing equivalence relations between both languages' synsets (section 2). We will apply this technique to reuse the connection of Sclera and Beta pictograph sets and Cornetto synsets to Princeton WordNet and other WordNets, allowing us to further extend an existing Dutch text-to-pictograph translation tool to other languages (section 3).",
    imageUrl: "/website/academictalk1.jpg"
  }
];

export const AWARDS: Award[] = [
  {
    id: 'award8',
    title: "Third Place in the Flemish PhD Cup",
    organization: "Scimingo",
    year: 2019,
    description: "Third Place in the Flemish PhD Cup (Vlaamse PhD Cup), a science communication competition challenging researchers to present their doctoral research to a broad audience. Following a four-day media training, sixteen selected candidates advanced through semi-finals, with eight finalists competing in the final round.",
    imageUrl: "/website/award13.png",
    gallery: ["/website/award12.jpg"]
  },
  {
    id: 'award7',
    title: "Annual Science Communication Award",
    organization: "Koninklijke Vlaamse Academie van België & Jonge Academie",
    year: 2019,
    description: "The Annual Science Communication Award, presented by the Royal Flemish Academy of Belgium for Science and the Arts and the Young Academy, honors researchers with exceptional contributions to science communication, highlighting concrete and impactful public engagement projects.",
    imageUrl: "/website/award10.jpg"
  },
   {
    id: 'award6',
    title: "KU Leuven Science Slam Winner",
    organization: "KU Leuven",
    year: 2018,
    description: "Winner of KU Leuven's Science Slam at the Antwerp Book Fair (Boekenbeurs van Antwerpen), a science communication competition in which six researchers presented their work to a broad audience in an accessible and engaging way.",
    imageUrl: "/website/award6.jpg"
  },
  {
    id: 'award9',
    title: "Honorary mention for the Pioniersprijs of the Humanities and Social Sciences Group",
    organization: "KU Leuven",
    year: 2017,
    description: "The Picto technology, developed in collaboration with Vincent Vandeghinste and Ineke Schuurman, received a honorary mention for the Humanities and Social Sciences Group's 'Pioniersprijs'. The Pioniersprijs is awarded to a researcher or research group in the Humanities and Social Sciences Group who has initiated and conducted research that is scientifically innovative and opens a completely new avenue of research. The main aim is to celebrate researchers who have ventured outside the confines of the established research in their domain.",
    imageUrl: "/website/award14.jpg"
  },
  {
    id: 'award5',
    title: "Mediawijs Award",
    organization: "Mediawijs",
    year: 2017,
    description: "The Able-to-Include project received the Mediawijs award for best smart media production, awarded to the CCL research group (Leen Sevens, Ineke Schuurman, Vincent Vandeghinste) at KU Leuven and Thomas More Kempen (Jo Daems, Annelies De Vliegher) for their co-creation project on accessible social media using pictograph-based communication.",
    imageUrl: "/website/award2.png"
  },
  {
    id: 'award4',
    title: "Best Communication Paper Award",
    organization: "Web4All Conference",
    year: 2017,
    description: "Best Communication Paper Award for 'Able to Read my Mail: An Accessible E-mail Client with Assistive Technology' (Horacio Saggion, Daniel Ferrés, Leen Sevens, Ineke Schuurman) at the 14th International Web for All Conference.",
    imageUrl: "/website/award15.jpg",
  },
  {
    id: 'award3',
    title: "Falling Walls Lab KU Leuven - Jury's First Prize & Audience Award",
    organization: "KU Leuven",
    year: 2017,
    description: "First Prize (Jury) and Audience Award at a science pitch competition for 'Breaking the Wall of Illiteracy', awarded among fifteen researchers, followed by representation of KU Leuven at the international finale in Berlin.",
    imageUrl: "/website/award3.jpg",
    gallery: ["/website/award4.jpg", "/website/award5.jpg", "/website/award1.jpg"]
  },
  {
    id: 'award2',
    title: "Language Industry Award",
    organization: "De Taalsector",
    year: 2016,
    description: "Text2Picto was honored with the Language Industry Award for best language service. The tool was developed in collaboration with Vincent Vandeghinste, Ineke Schuurman, and Frank Van Eynde.",
    imageUrl: "/website/award7.jpg"
  },
  {
    id: 'award1',
    title: "Best Poster Award",
    organization: "LOT Summer School",
    year: 2015,
    description: "Best Poster Award for 'Extending a Dutch Text-to-Pictograph Converter to English and Spanish'. The tool was developed in collaboration with Vincent Vandeghinste, Ineke Schuurman, and Frank Van Eynde.",
    imageUrl: "/website/award8.jpg",
    gallery: ["/website/academictalk5.png"] 
  }
];

export const ART_PIECES: ArtPiece[] = [
  // Digital art (8 pieces)
  { id: 'i1', title: "The Weaver of Thoughts", medium: "Digital Art", year: 2024, category: 'Digital art', thumbnailUrl: "https://picsum.photos/seed/da1/500/600", imageUrl: "https://picsum.photos/seed/da1/1500/1800", description: "A whimsical depiction of how ideas interconnect in the human mind." },
  { id: 'i2', title: "Starlight Library", medium: "Digital Painting", year: 2023, category: 'Digital art', thumbnailUrl: "https://picsum.photos/seed/da2/500/600", imageUrl: "https://picsum.photos/seed/da2/1500/1800", description: "Imagining a place where books contain the essence of distant stars." },
  { id: 'i3', title: "Midnight Tea", medium: "Digital Art", year: 2024, category: 'Digital art', thumbnailUrl: "https://picsum.photos/seed/da3/500/600", imageUrl: "https://picsum.photos/seed/da3/1500/1800", description: "The quiet comfort of a late-night creative session." },
  { id: 'i4', title: "Bloom of Logic", medium: "Digital Mixed Media", year: 2023, category: 'Digital art', thumbnailUrl: "https://picsum.photos/seed/da4/500/600", imageUrl: "https://picsum.photos/seed/da4/1500/1800", description: "A fusion of organic growth and mathematical patterns." },
  { id: 'i5', title: "Whispering Woods", medium: "Digital Gouache", year: 2022, category: 'Digital art', thumbnailUrl: "https://picsum.photos/seed/da5/500/600", imageUrl: "https://picsum.photos/seed/da5/1500/1800", description: "Inspired by traditional folklore and childhood wonder." },
  { id: 'i6', title: "The Cloud Architect", medium: "Digital Art", year: 2024, category: 'Digital art', thumbnailUrl: "https://picsum.photos/seed/da6/500/600", imageUrl: "https://picsum.photos/seed/da6/1500/1800", description: "A character study for a story about a girl who designs weather." },
  { id: 'i7', title: "Clockwork Heart", medium: "Digital Ink", year: 2021, category: 'Digital art', thumbnailUrl: "https://picsum.photos/seed/da7/500/600", imageUrl: "https://picsum.photos/seed/da7/1500/1800", description: "Exploring the mechanical nature of routine and emotion." },
  { id: 'i8', title: "Lunar Guardian", medium: "Digital Art", year: 2024, category: 'Digital art', thumbnailUrl: "https://picsum.photos/seed/da8/500/600", imageUrl: "https://picsum.photos/seed/da8/1500/1800", description: "Concept art for a children's book about the phases of the moon." },

  // Painting (8 pieces)
  { id: 'p1', title: "Fractured Silence", medium: "Oil on Canvas", year: 2023, category: 'Painting', thumbnailUrl: "https://picsum.photos/seed/pt1/600/500", imageUrl: "https://picsum.photos/seed/pt1/1600/1300", description: "An exploration of memory loss and the reconstruction of identity." },
  { id: 'p2', title: "Binary Sunset", medium: "Acrylic on Canvas", year: 2024, category: 'Painting', thumbnailUrl: "https://picsum.photos/seed/pt2/600/500", imageUrl: "https://picsum.photos/seed/pt2/1600/1300", description: "The horizon where traditional landscape meets glitch aesthetics." },
  { id: 'p3', title: "Ethereal Connectivity", medium: "Mixed Media Painting", year: 2022, category: 'Painting', thumbnailUrl: "https://picsum.photos/seed/pt3/600/500", imageUrl: "https://picsum.photos/seed/pt3/1600/1300", description: "Representing the invisible web of human interactions." },
  { id: 'p4', title: "Syntactic Structure", medium: "Oil on Linen", year: 2021, category: 'Painting', thumbnailUrl: "https://picsum.photos/seed/pt4/600/500", imageUrl: "https://picsum.photos/seed/pt4/1600/1300", description: "The physical weight of spoken words translated into abstract form." },
  { id: 'p5', title: "Morning Mist at the Coast", medium: "Oil on Board", year: 2023, category: 'Painting', thumbnailUrl: "https://picsum.photos/seed/pt5/600/500", imageUrl: "https://picsum.photos/seed/pt5/1600/1300", description: "Atmospheric study of light and humidity." },
  { id: 'p6', title: "Neon Pulse", medium: "Acrylic & Spray Paint", year: 2024, category: 'Painting', thumbnailUrl: "https://picsum.photos/seed/pt6/600/500", imageUrl: "https://picsum.photos/seed/pt6/1600/1300", description: "The energy of a city that never sleeps." },
  { id: 'p7', title: "Echoes of Summer", medium: "Watercolor", year: 2022, category: 'Painting', thumbnailUrl: "https://picsum.photos/seed/pt7/600/500", imageUrl: "https://picsum.photos/seed/pt7/1600/1300", description: "Fleeting moments of warmth and leisure." },
  { id: 'p8', title: "Coastal Drift", medium: "Acrylic on Canvas", year: 2024, category: 'Painting', thumbnailUrl: "https://picsum.photos/seed/pt8/600/500", imageUrl: "https://picsum.photos/seed/pt8/1600/1300", description: "A study in color fields and seaside movement." },

  // Urban sketching (8 pieces)
  { id: 'u1', title: "Rainy Afternoon in Ghent", medium: "Ink & Watercolor Sketch", year: 2024, category: 'Urban sketching', thumbnailUrl: "https://picsum.photos/seed/urb1/500/600", imageUrl: "https://picsum.photos/seed/urb1/1500/1800", description: "Captured during a sudden downpour near the Belfry." },
  { id: 'u2', title: "Morning Coffee at Oude Markt", medium: "Pen & Wash", year: 2023, category: 'Urban sketching', thumbnailUrl: "https://picsum.photos/seed/urb2/500/600", imageUrl: "https://picsum.photos/seed/urb2/1500/1800", description: "Leuven's liveliest square during a rare quiet hour." },
  { id: 'u3', title: "Lisbon Rooftops", medium: "Colored Pencils", year: 2023, category: 'Urban sketching', thumbnailUrl: "https://picsum.photos/seed/urb3/500/600", imageUrl: "https://picsum.photos/seed/urb3/1500/1800", description: "Sketching the terracotta tiles under the Atlantic sun." },
  { id: 'u4', title: "Antwerp Central Station", medium: "Ink on Paper", year: 2022, category: 'Urban sketching', thumbnailUrl: "https://picsum.photos/seed/urb4/500/600", imageUrl: "https://picsum.photos/seed/urb4/1500/1800", description: "The cathedral of railways, sketched in 40 minutes." },
  { id: 'u5', title: "London Fog near the Thames", medium: "Watercolor Sketch", year: 2024, category: 'Urban sketching', thumbnailUrl: "https://picsum.photos/seed/urb5/500/600", imageUrl: "https://picsum.photos/seed/urb5/1500/1800", description: "Atmospheric study of the South Bank." },
  { id: 'u6', title: "Small Corner in Brussels", medium: "Marker Sketch", year: 2022, category: 'Urban sketching', thumbnailUrl: "https://picsum.photos/seed/urb6/500/600", imageUrl: "https://picsum.photos/seed/urb6/1500/1800", description: "Finding beauty in everyday urban decay." },
  { id: 'u7', title: "The Red Tram", medium: "Mixed Media Sketch", year: 2023, category: 'Urban sketching', thumbnailUrl: "https://picsum.photos/seed/urb7/500/600", imageUrl: "https://picsum.photos/seed/urb7/1500/1800", description: "Lisbon's iconic transport navigating a steep hill." },
  { id: 'u8', title: "Amsterdam Canals", medium: "Ink & Watercolor", year: 2023, category: 'Urban sketching', thumbnailUrl: "https://picsum.photos/seed/urb8/500/600", imageUrl: "https://picsum.photos/seed/urb8/1500/1800", description: "The rhythm of narrow houses and water." },

  // Comics (8 pieces)
  { id: 'c1', title: "The Scientist's Dilemma", medium: "Digital Comic Panel", year: 2024, category: 'Comics', thumbnailUrl: "https://picsum.photos/seed/com1/500/700", imageUrl: "https://picsum.photos/seed/com1/1500/2100", description: "A short story about the ethical weight of innovation." },
  { id: 'c2', title: "Conversations with My Coffee", medium: "Ink & Marker Strip", year: 2023, category: 'Comics', thumbnailUrl: "https://picsum.photos/seed/com2/500/700", imageUrl: "https://picsum.photos/seed/com2/1500/2100", description: "A humorous take on morning productivity (or lack thereof)." },
  { id: 'c3', title: "Lost in Translation", medium: "Digital Comic Panel", year: 2024, category: 'Comics', thumbnailUrl: "https://picsum.photos/seed/com3/500/700", imageUrl: "https://picsum.photos/seed/com3/1500/2100", description: "Exploring linguistic nuances through visual metaphors." },
  { id: 'c4', title: "The Tiny Explorer", medium: "Gouache Comic Strip", year: 2022, category: 'Comics', thumbnailUrl: "https://picsum.photos/seed/com4/500/700", imageUrl: "https://picsum.photos/seed/com4/1500/2100", description: "A wordless adventure of an ant in a garden." },
  { id: 'c5', title: "Algorithm Dreams", medium: "Digital Comic Panel", year: 2023, category: 'Comics', thumbnailUrl: "https://picsum.photos/seed/com5/500/700", imageUrl: "https://picsum.photos/seed/com5/1500/2100", description: "What do neural networks think about at night?" },
  { id: 'c6', title: "The Librarian of Shadows", medium: "Ink Comic Strip", year: 2021, category: 'Comics', thumbnailUrl: "https://picsum.photos/seed/com6/500/700", imageUrl: "https://picsum.photos/seed/com6/1500/2100", description: "A dark academia inspired short story." },
  { id: 'c7', title: "City of Ink", medium: "Digital Comic Panel", year: 2024, category: 'Comics', thumbnailUrl: "https://picsum.photos/seed/com7/500/700", imageUrl: "https://picsum.photos/seed/com7/1500/2100", description: "A detective story set in a world made of blueprints." },
  { id: 'c8', title: "The Final Page", medium: "Mixed Media Comic", year: 2024, category: 'Comics', thumbnailUrl: "https://picsum.photos/seed/com8/500/700", imageUrl: "https://picsum.photos/seed/com8/1500/2100", description: "The feeling of closing a book you never wanted to end." },
];
