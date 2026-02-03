import { Publication, Talk, ArtPiece, Award } from './types';

export const PUBLICATIONS: Publication[] = [
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
