/**
 * All portfolio copy lives here, so content can be updated without
 * touching layout code.
 *
 * Unfinished content is marked with todo("…"). It renders as a yellow
 * highlight on the site so it is easy to spot. Run `npm run check:content`
 * to list everything still to fill in; it must report zero before the
 * redesign goes live.
 */

export type Todo = { todo: string };
export type Fill = string | Todo;

export const todo = (note: string): Todo => ({ todo: note });
export const isTodo = (value: Fill): value is Todo =>
  typeof value === "object" && value !== null && "todo" in value;

/* ------------------------------------------------------------------ */
/* Site                                                                */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Aduragbemi Aleem",
  role: "SEO, AEO & GEO Strategist",
  url: "https://adr-portfolio-omega.vercel.app",
  description:
    "SEO, AEO and GEO strategist helping tech and AI brands rank on Google and get cited by AI. Co-author of the Eng-PidginEdu NLP dataset.",
  email: "aduragbemialeem@gmail.com",
  location: "Lagos, Nigeria",
  yearsOfExperience: "8+" as Fill,
  /**
   * Path to the CV in /public. Set to null to hide every "Download CV" button.
   * To update the CV, replace public/Aduragbemi-Aleem-Resume.pdf with the new export.
   */
  cvPath: "/Aduragbemi-Aleem-Resume.pdf" as string | null,
};

export const links = {
  linkedin: "https://www.linkedin.com/in/aduragbemialeem",
  tiktok: "https://www.tiktok.com/@the_beanie_guy",
  instagram: "https://www.instagram.com/a_aduragbemi/",
  x: "https://x.com/Aduragbemi_AE",
  medium: "https://medium.com/@ADR-HUB",
  whatsappCall:
    "https://wa.me/2348109656603?text=Hi%20Aduragbemi%20Aleem,%20I'd%20like%20to%20book%20a%20discovery%20call.",
  whatsappSupport:
    "https://wa.me/2348109656603?text=Hi%20Aduragbemi%20Aleem!%20I%20want%20to%20support%20what%20you%20do.%20Can%20you%20tell%20me%20how%20I%20can%20help%3F",
};

/* ------------------------------------------------------------------ */
/* Home                                                                */
/* ------------------------------------------------------------------ */

export const proofPoints = [
  { label: "Currently", value: "Senior Content Manager, Ridima" },
  { label: "Currently", value: "SEO/AEO/GEO Manager, Rankova" },
  { label: "Recognition", value: "Top 50 Poster, Deep Learning Indaba 2026" },
];

export const pillars = [
  {
    title: "SEO strategy",
    text: "Keyword research, internal linking, technical SEO and content planning built around how buyers actually search.",
  },
  {
    title: "AI search (AEO/GEO)",
    text: "Content structured to be understood and cited by ChatGPT, Perplexity and Google AI Overviews.",
  },
  {
    title: "Technical content",
    text: "Turning complex fintech, Web3 and AI products into clear writing that ranks and converts.",
  },
];

export const sampleSources = [
  { label: "Ridima blog", href: "https://www.myridima.com/blogs" },
  { label: "Rankova blog", href: "https://rankovahq.com/blog/" },
  { label: "Medium", href: links.medium },
];

/* ------------------------------------------------------------------ */
/* Work                                                                */
/* ------------------------------------------------------------------ */

export type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  /** Short version for the Home page card. */
  summary: Fill[];
  context: Fill;
  stats?: { value: string; label: string }[];
  did: string[];
  sideTitle: string;
  side: Fill[];
  extraTitle?: string;
  extra?: string;
  links?: { label: string; href: string; primary?: boolean }[];
  /** Shown as a dashed "coming soon" card while true. */
  pending?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "eng-pidginedu",
    eyebrow: "NLP research · TAG Ecosystem · Oct 2025 – Present",
    title: "Eng-PidginEdu: an English–Nigerian Pidgin educational translation dataset",
    summary: [
      "Helped build the data pipeline behind an English–Nigerian Pidgin translation dataset of 26,232 validated sentence pairs. Recognised at Deep Learning Indaba 2026 and WiML @ ICML 2026.",
    ],
    context:
      "Nigerian Pidgin has tens of millions of speakers but very little NLP data, especially for educational and technical content. The team set out to build a dataset that could train a translation model for students.",
    stats: [
      { value: "26,232", label: "validated sentence pairs" },
      { value: "1.09M", label: "tokens" },
      { value: "13,634", label: "glossary entries" },
      { value: "8", label: "academic subjects" },
    ],
    did: [
      "Collected educational source material and used Python to extract text from PDFs",
      "Cleaned and prepared raw text for machine translation",
      "Ran batch translations with the Davlan/mT5 English–Pidgin model, managing multi-hour jobs within GPU limits",
      "Reviewed and corrected model output as part of the human-in-the-loop quality control process",
      "Documented the full pipeline as a repeatable guide and presented it to the TAG community",
    ],
    sideTitle: "Recognition",
    side: [
      "Top 50 Poster Award, Deep Learning Indaba 2026",
      "Poster accepted, WiML Symposium @ ICML 2026, Seoul",
    ],
    extraTitle: "What it taught me",
    extra:
      "Model output is not ground truth. Getting language data right takes human review, and that is the same instinct I bring to content written for AI search.",
    links: [
      { label: "View poster", href: "https://www.tagecosystemai.com/dli-poster.jpg", primary: true },
      { label: "Dataset on Hugging Face", href: "https://huggingface.co/datasets/coderGit/Eng_PidginEdu" },
      {
        label: "My write-up",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7501192298739802112/",
      },
    ],
  },
  {
    id: "ridima",
    eyebrow: "SEO content · Ridima · Feb 2024 – Present",
    title: "SEO and AI-search content for a gift card and bill payment platform",
    summary: [
      "SEO content strategy for a gift card, crypto and bill payment platform. Ridima is now named among the top gift card apps in Nigeria in Google's AI Mode.",
    ],
    context:
      "Ridima is a gift card trading platform in Nigeria and Ghana that also handles bill payments, including DSTV, airtime, data and electricity. I lead its SEO content strategy.",
    did: [
      "Built the content plan around high-intent keywords",
      "Set up internal linking to strengthen topical authority",
      "Wrote educational articles on gift cards, crypto and bill payments, structured for both Google and AI answer engines",
      "Repurposed long-form articles into social and newsletter content",
    ],
    sideTitle: "Results",
    side: [
      "Named among the top four gift card trading apps in Nigeria in Google AI Mode's answer to “best gift card trading app in Nigeria” (October 2026)",
      "Moved Ridima from page four to the top result on Google for its positioning line, “One platform for your gift card, bills, and crypto needs”, within a year",
    ],
    links: [{ label: "Read the blog", href: "https://www.myridima.com/blogs" }],
  },
  {
    id: "web3",
    eyebrow: "Technical writing · Freelance · 2018 – 2024",
    title: "Launch content for Web3 and SaaS products",
    summary: [
      "Whitepapers, landing pages and launch content explaining tokenomics and roadmaps for ETFSwap, WallitIQ and other projects.",
    ],
    context:
      "Early-stage products needed to explain complex mechanics, such as tokenomics, roadmaps and product value, to people deciding whether to trust them.",
    did: [
      "Wrote whitepapers, landing pages and blog posts for ETFSwap, WallitIQ and other Web3 projects",
      "Wrote SEO articles and website copy for Cr3st, BidX and ConvertedIn",
    ],
    sideTitle: "Formats",
    side: ["Whitepapers · landing pages · launch blog posts · SEO articles · website copy"],
  },
];

// Rankova goes first on the Work page: it has the strongest SEO numbers.
caseStudies.unshift({
  id: "rankova",
  eyebrow: "SEO & AI search · Rankova · Apr 2026 – Present",
  title: "Growing Rankova's blog from zero",
  summary: [
    "Grew the company blog from zero to 5,000+ monthly organic visitors, with 10+ articles on Google's first page.",
  ],
  context:
    "Rankova's company blog started with no organic traffic. I own its SEO and AI-search content, from keyword research to reporting.",
  stats: [
    { value: "5,000+", label: "monthly organic visitors, from zero" },
    { value: "10+", label: "articles on Google's first page" },
  ],
  did: [
    "Ran keyword research in Ahrefs and Google Keyword Planner to find high-intent, low-competition topics",
    "Audited content regularly to find underperforming pages, gaps and quick wins",
    "Wrote meta descriptions, heading structures and internal links for every article",
    "Structured content for answer engines and generative AI search (AEO and GEO)",
    "Tracked performance in Google Search Console and Google Analytics, reporting on traffic, rankings and click-through rate",
    "Repurposed articles into social and newsletter content",
  ],
  sideTitle: "Results",
  side: [
    "Grew the blog from zero to 5,000+ monthly organic visitors",
    "10+ articles ranking on Google's first page",
  ],
  links: [{ label: "Read the blog", href: "https://rankovahq.com/blog/" }],
});

// Work page order: SEO results first, then research, then writing.
const workOrder = ["rankova", "ridima", "eng-pidginedu", "web3"];
caseStudies.sort((a, b) => workOrder.indexOf(a.id) - workOrder.indexOf(b.id));

/** The three case studies featured on the Home page, in order. */
export const featuredCaseIds = ["rankova", "ridima", "eng-pidginedu"];

export const homeCardEyebrows: Record<string, string> = {
  rankova: "SEO & AI search · Rankova",
  "eng-pidginedu": "NLP research · TAG Ecosystem",
  ridima: "SEO content · Ridima",
  web3: "Technical writing · Web3",
};

export const homeCardTitles: Record<string, string> = {
  rankova: "Rankova blog growth",
  "eng-pidginedu": "Eng-PidginEdu dataset",
  ridima: "Ridima: cited by Google AI Mode",
  web3: "Web3 launch content",
};

export const writingSamples: { title: Fill; source: string; href: Fill }[] = [
  {
    title: "Crypto Adoption Around the World: Bahamas",
    source: "uPay blog",
    href: "https://blog.upay.com/crypto-adoption/bahamas/",
  },
  {
    title: "Crypto Adoption: Central African Republic",
    source: "uPay blog",
    href: "https://blog.upay.com/crypto-adoption/central-african-republic/",
  },
  {
    title: "A Sneak Peek into Machine Learning",
    source: "Medium",
    href: "https://medium.com/@ADR-HUB/a-sneak-peek-into-machine-learning-db389ddb8a41",
  },
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const experience: { dates: string; role: Fill; org: string; text: string }[] = [
  {
    dates: "Apr 2026 – Present",
    role: "SEO/AEO/GEO Manager",
    org: "Rankova",
    text: "Grew the company blog from zero to 5,000+ monthly organic visitors, with 10+ articles on Google's first page.",
  },
  {
    dates: "Oct 2025 – Present",
    role: "NLP Data & Research Contributor",
    org: "TAG Ecosystem",
    text: "Co-author, Eng-PidginEdu dataset. Top 50 Poster, Deep Learning Indaba 2026.",
  },
  {
    dates: "Feb 2024 – Present",
    role: "Senior Content Manager",
    org: "Ridima",
    text: "SEO content strategy for a gift card and bill payment platform; named among the top gift card apps in Nigeria in Google AI Mode.",
  },
  {
    dates: "Jul 2024 – Jun 2026",
    role: "Convener",
    org: "ADR Hub",
    text: "Led content and SEO for client projects; trained and mentored writers.",
  },
  {
    dates: "Sep 2024 – Dec 2024",
    role: "Content Manager",
    org: "uPay",
    text: "SEO articles, on-page optimisation and content repurposing.",
  },
  {
    dates: "Feb 2018 – Jul 2024",
    role: "Freelance Technical Writer",
    org: "Self-employed",
    text: "Whitepapers, landing pages and SEO content for Web3 and SaaS clients.",
  },
];

export const skills = [
  {
    title: "SEO",
    text: "Keyword research · competitor analysis · content audits · internal linking · on-page and technical SEO",
  },
  {
    title: "Tools",
    text: "Google Search Console · Google Analytics · Ahrefs · Google Keyword Planner · Surfer SEO · Frase · NeuronWriter",
  },
  {
    title: "AI search",
    text: "Answer engine optimisation (AEO) · generative engine optimisation (GEO)",
  },
  {
    title: "Content",
    text: "Content strategy · technical writing · editorial planning · mentoring writers",
  },
  {
    title: "Technical",
    text: "Python · PDF text extraction · data cleaning for NLP · Hugging Face",
  },
];

export const education = {
  degree: "BSc Botany / Plant Biology",
  school: "Obafemi Awolowo University · 2014 – 2018",
};

export const certifications = [
  "AWS Educate Machine Learning Foundations",
  "Introducing Generative AI with AWS",
  "Introduction to Artificial Intelligence",
];

export const languages: Fill[] = ["English · French (elementary: A1 completed, A2 in progress)"];
