import { Publication, Talk, ArtPiece, Award } from './types';

export const PUBLICATIONS: Publication[] = [
  {
    id: '3',
    title: "Why We Must Reclaim Our Attention",
    authors: "Sevens, L.",
    year: 2024,
    venue: "The Sunday Times Magazine",
    type: 'Other',
    link: "#"
  },
  {
    id: '1',
    title: "Neuroplasticity in the Digital Age: A Longitudinal Study",
    authors: "Sevens, L., Doe, A., & Lee, K.",
    year: 2023,
    venue: "Journal of Cognitive Neuroscience",
    type: 'Academic',
    link: "#",
    abstract: "This paper explores the long-term effects of high-frequency digital interaction on synaptic pruning and the subsequent impact on cognitive load management in adult learners. Over a period of five years, we tracked 250 participants using a combination of fMRI imaging and cognitive behavioral assessments. Our findings suggest that constant switching between digital tasks—what we term 'hyper-fragmented attention'—leads to a measurable thinning of the prefrontal cortex in specific regions associated with executive function. However, we also observed remarkable resilience in participants who engaged in 'deep work' practices, suggesting that the brain's plasticity allows for significant recovery when cognitive hygiene is prioritized. The study further discusses the educational implications of these findings, arguing for a shift in curriculum design toward 'attentional stamina' as a core competency. We examine how the dopamine-driven feedback loops of modern social platforms interface with traditional learning models, creating a friction point that requires urgent pedagogical intervention. This research provides a foundational framework for understanding the biological cost of our digital lives and offers practical strategies for educators to foster neuro-cognitive health in an increasingly distracted world."
  },
  {
    id: '2',
    title: "The Intersection of Ethics and Artificial Intelligence in Modern Pedagogy",
    authors: "Sevens, L.",
    year: 2022,
    venue: "Educational Review Quarterly",
    type: 'Academic',
    link: "#",
    abstract: "An examination of the ethical implications of deploying generative AI tools within the classroom, focusing on equity, privacy, and the preservation of human-led mentorship."
  },
  {
    id: '4',
    title: "The Quiet Revolution of Community Art",
    authors: "Sevens, L.",
    year: 2021,
    venue: "Arts & Culture Today",
    type: 'Children’s books',
    link: "#",
    abstract: "A colorful journey through the impact of shared creative spaces on neighborhood resilience and childhood development."
  },
    {
    id: '5',
    title: "Test!",
    authors: "Sevens, L.",
    year: 2021,
    venue: "Arts & Culture Today",
    type: 'Children’s books',
    link: "#",
    abstract: "A test!"
  }
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
