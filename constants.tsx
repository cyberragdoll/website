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
    year: 2017,
    venue: "EOS Wetenschap",
    type: 'Others',
    link: "https://www.eoswetenschap.eu/technologie/chatten-zonder-letters",
    abstract: "Niet kunnen lezen en schrijven, maar tóch mailen en chatten? Het Picto-systeem vertaalt tekst naar pictogrammen en omgekeerd zodat mensen met een verstandelijke beperking actief kunnen deelnemen aan de digitale maatschappij. \n Een mailtje sturen naar je collega, surfen naar de website van je favoriete krant, tweeten over de kanarie van de buren en nog snel even een app’je verzenden naar je beste vriendin. Tekst en digitale media zijn onlosmakelijk met elkaar verbonden. Toch zijn er in Europa naar schatting tussen de twee en de vijf miljoen mensen voor wie digitale communicatie gemakkelijker zou zijn als die niet via tekst, maar via pictogrammen zou verlopen. Voor hen ontwikkelden we Picto, een slim systeem voor automatische vertaling van geschreven tekst naar pictogrammen en omgekeerd."
  },
  {
    id: 'aca19',
    title: "Automating Lexical Simplification in Dutch",
    authors: "Bram Bulté, Vincent Vandeghinste, Leen Sevens, Ineke Schuurman, Frank Van Eynde",
    year: 2018,
    venue: "Computational Linguistics in the Netherlands Journal, Vol. 8, p. 24-48",
    type: 'Academic',
    link: "https://lirias.kuleuven.be/retrieve/29de3090-bf98-4568-8bda-f0328e3c47c2",
    abstract: "We discuss the design, development and evaluation of an automated lexical simplification tool for Dutch. A basic pipeline approach is used to perform both text adaptation and annotation. First, sentences are preprocessed and word sense disambiguation is performed. Then, the difficulty of each token is estimated by looking at their average age of acquisition and frequency in a corpus of simplified Dutch. We use Cornetto to find synonyms of words that have been identified as difficult and the SONAR500 corpus to perform reverse lemmatisation. Finally, we rely on a largescale language model to verify whether the selected replacement word fits the local context. In addition, the text is augmented with information from Wikipedia (word definitions and links). We tune and evaluate the system with sentences taken from the Flemish newspaper De Standaard. The results show that the system’s adaptation component has low coverage, since it only correctly simplifies around one in five ‘difficult’ words, but reasonable accuracy, with no grammatical errors being introduced in the text. The Wikipedia annotations have a broader coverage, but their potential for simplification needs to be further developed and more thoroughly evaluated."
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
    venue: "PhD Thesis. LOT Publications",
    type: 'Academic',
    link: "https://core.ac.uk/download/pdf/572206779.pdf#page=197",
    abstract: "In order to improve the accessibility of the Internet for people with an intellectual disability (ID), we develop a set of tools that automatically translate Dutch natural language text into pictographs and vice versa, allowing people with limited literacy skills to read and write status updates, emails, and chat messages in online environments. \n For the conversion of texts into pictographs, we start from an existing system. We evaluate the baseline Text-to-Pictograph translation system using a combination of automated metrics, manual assessments, and user studies, and we propose three major improvements: We create a spelling correction tool for people with ID, we develop a syntactic simplification tool and a temporality detection module, and we implement a word sense disambiguation tool for improved semantic analysis. The added value of each of these components is evaluated in depth. \n Conversely, the Pictograph-to-Text translation tool provides help in constructing textual messages by allowing the user to input a series of pictographs, and translates these messages into natural language text. The challenge in Pictograph-to-Text translation is twofold. The first task concerns the development of an accessible interface that allows people with ID to find the pictographs of their choice. The second task is the actual development of the Pictograph-to-Text translation engine. We discuss a variety of approaches, including language modelling and (neural) machine translation techniques, toward the generation of rich natural language text from underspecified pictograph input."  
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
    link: "",
    abstract: "Wat krijg je als je een moeder met een grenzeloze fantasie en een dochter met een passie voor tekenen samenbrengt? Juist! Een sprankelend kinderboek! Katwalk vertelt het verhaal over hun kat Celesse (ze bestaat echt!) die onverwacht in de modewereld wordt gedompeld. Een boek over vriendschap, doorzettingsvermogen, zelfvertrouwen en creativiteit."
  },
  {
    id: 'other1',
    title: "Kom Naar Buiten Met Je Doctoraatsonderzoek!",
    authors: "Leen Sevens",
    year: 2017,
    venue: "KU Leuven Blogt",
    type: 'Others',
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
    authors: "Erik Tjong Kim Sang, Marcel Bollmann, Remko Boschker, Francisco Casacuberta, Feike Dietz, Stefanie Dipper, Miguel Domingo, Rob van der Goot, Marjo van Koppen, Nikola Ljubević, Robert Östling, Florian Petran, Eva Pettersson, Yves Scherrer, Marijn Schraagen, Leen Sevens, Jörg Tiedemann, Tom Vanallemeersch, Kalliopi Zervanou",
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
    abstract: "Knowledge-based multilingual language processing benefits from having access to correctly established relations between semantic lexicons, such as the links between different WordNets. WordNet linking is a process that can be sped up by the use of computational techniques. Manual evaluations of the partly automatically established synonym set (synset) relations between Dutch and English in Cornetto, a Dutch lexical-semantic database associated with the EuroWordNet grid, have confronted us with a worrisome amount of erroneous links. By extracting translations from various bilingual resources and automatically assigning a confidence score to every pre-established link, we reduce the error rate of the existing equivalence relations between both languages’ synsets (section 2). We will apply this technique to reuse the connection of Sclera and Beta pictograph sets and Cornetto synsets to Princeton WordNet and other WordNets, allowing us to further extend an existing Dutch text-to-pictograph translation tool to other languages (section 3)."
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
    id: '6',
    title: "Future Architectures: AI and the Human Spirit",
    event: "World Education Forum 2026",
    date: "2026-05-10",
    location: "Geneva, Switzerland",
    type: 'Academic & Professional',
    description: "An upcoming keynote exploring the long-term convergence of generative tools and cognitive development. This session will delve deep into the philosophical and practical challenges of integrating large language models into higher education ecosystems. We will address the 'Post-Knowledge' era, where the value of information retrieval is superseded by the ability to synthesize disparate data points into coherent, creative solutions. The talk covers: (1) The evolution of the teacher-student relationship in the age of persistent AI tutors; (2) The psychological impact of 'automated creativity' on developing minds; and (3) Policy frameworks for ensuring that AI serves as a scaffold for human intelligence rather than a replacement for it. I will share early data from our longitudinal studies at KU Leuven, highlighting unexpected ways students are already co-authoring their educational journeys with AI. The presentation concludes with a call to action for institutions to redesign assessment models that value the process of inquiry as much as the final output. We will also explore the potential for AI to bridge accessibility gaps, provided that the underlying algorithms are audited for cultural and linguistic biases. This keynote is designed to be both a warning and a celebration of our shared technological future.",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
    gallery: ["https://images.unsplash.com/photo-1540575861501-7ad0582371f3?auto=format&fit=crop&q=80&w=1200"]
  },
  {
    id: '1',
    title: "The Future of Human Intelligence",
    event: "TEDx London",
    date: "2024-03-15",
    location: "London, UK",
    type: 'science communication',
    description: "A deep dive into how our cognitive architectures are shifting in response to ubiquitous AI.",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74dea327912?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: '2',
    title: "Visual Narrative in Scientific Communication",
    event: "International Design Symposium",
    date: "2023-11-20",
    location: "Berlin, Germany",
    type: 'Academic & Professional',
    description: "Bridging the gap between data-heavy research and intuitive visual storytelling.",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: '3',
    title: "AI in the Newsroom: Ethics and Impact",
    event: "BBC Radio 4 Interview",
    date: "2025-06-12",
    location: "Remote",
    type: 'Media & Interviews',
    description: "Discussing the role of generative AI in modern journalism and public trust.",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: '4',
    title: "Curation as a Bridge Between Worlds",
    event: "Art + Science Expo",
    date: "2025-08-20",
    location: "Brussels, Belgium",
    type: 'Hosting',
    description: "Hosting a panel on how interdisciplinary exhibits can spark public curiosity.",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1531058021387-49351d42721a?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: '5',
    title: "Generative AI in Higher Education",
    event: "KU Leuven Faculty Seminar",
    date: "2024-01-10",
    location: "Leuven, Belgium",
    type: 'Academic & Professional',
    description: "Practical strategies for educators to integrate AI tools responsibly in the classroom.",
    link: "#",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&q=80&w=1200"
  }
];

export const AWARDS: Award[] = [
  {
    id: 'a1',
    title: "Distinguished Researcher Award",
    organization: "Global Neuroscience Society",
    year: 2023,
    description: "Awarded for pioneering work in digital-induced neuroplasticity.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'a2',
    title: "Emerging Artist Grant",
    organization: "Metropolitan Arts Council",
    year: 2021,
    description: "Support for the 'Binary Sunset' digital painting series.",
    imageUrl: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 'a3',
    title: "Best Keynote Speaker",
    organization: "London Tech Week",
    year: 2019,
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200"
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
