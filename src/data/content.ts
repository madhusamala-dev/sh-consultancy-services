import { ServiceItem, QualificationItem, ValueProposition, TimelineStep } from '../types';

export const CONTACT_INFO = {
  consultantName: "Dr. V. Bhagya Raju",
  companyName: "SH Consultancy Services",
  subtitle: "Academic Excellence & Institutional Advisory",
  phone: "+91 99853 27001",
  phoneRaw: "+919985327001",
  email: "drvbhagyaraju@shconsultancyservices.in",
  address: "South Entrance Portion, Plot No. 136, First Floor, HIG Phase-IV, Gateway Colony, Vanasthalipuram, Hayathnagar Mandal, Ranga Reddy District, Telangana – 500070, India.",
  shortAddress: "Vanasthalipuram, Hyderabad, Telangana – 500070",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Plot+No.+136,+HIG+Phase-IV,+Gateway+Colony,+Vanasthalipuram,+Hyderabad,+Telangana+500070",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15234.341399435017!2d78.5630!3d17.3325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f7c00000001%3A0x6b8017c6ef19f9bb!2sVanasthalipuram%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
};

export const QUALIFICATIONS: QualificationItem[] = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    institution: "Osmania University (OU)",
    abbreviation: "OU, Hyderabad",
    badge: "Undergraduate Foundation"
  },
  {
    degree: "Master of Technology (M.Tech.)",
    institution: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    abbreviation: "JNTUH",
    badge: "Postgraduate Specialization"
  },
  {
    degree: "Doctor of Philosophy (Ph.D.)",
    institution: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    abbreviation: "JNTUH",
    badge: "Doctoral Research"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "nba",
    serviceKey: "NBA Accreditation",
    title: "NBA Accreditation Consultancy",
    shortTitle: "NBA Accreditation",
    description: "Strategic guidance for NBA accreditation preparation, outcome-based education, program-level assessment, CO-PO mapping, attainment analysis, documentation, and continuous improvement.",
    iconName: "Award",
    ctaText: "Explore NBA Consultancy",
    highlights: [
      "Outcome-Based Education (OBE) Implementation",
      "Course Outcome (CO) & Program Outcome (PO) Attainment",
      "Program-Level Self Assessment Report (SAR) Curation",
      "Evaluation Matrix & Continuous Quality Improvement"
    ]
  },
  {
    id: "naac",
    serviceKey: "NAAC Accreditation",
    title: "NAAC Accreditation Consultancy",
    shortTitle: "NAAC Accreditation",
    description: "Support for institutional accreditation preparation, criterion-wise documentation, evidence management, institutional quality processes, self-study reporting, and assessment readiness.",
    iconName: "GraduationCap",
    ctaText: "Explore NAAC Consultancy",
    highlights: [
      "Criterion 1 to 7 Documentation & Evidentiary Audit",
      "Self Study Report (SSR) & IIQA Preparation Readiness",
      "Institutional Quality Assurance Cell (IQAC) Framework",
      "Quantitative & Qualitative Metric Validation"
    ]
  },
  {
    id: "nirf",
    serviceKey: "NIRF Ranking",
    title: "NIRF Ranking Consultancy",
    shortTitle: "NIRF Ranking",
    description: "Guidance on institutional ranking strategy, data preparation, ranking metrics, submission readiness, performance analysis, and continuous improvement.",
    iconName: "TrendingUp",
    ctaText: "Explore NIRF Consultancy",
    highlights: [
      "Teaching, Learning & Resources (TLR) Optimization",
      "Research & Professional Practice (RP) Data Structuring",
      "Graduation Outcomes (GO) & Outreach Evidence",
      "Institutional Data Consistency & Metric Gap Analysis"
    ]
  },
  {
    id: "projects",
    serviceKey: "Consultancy Projects",
    title: "Consultancy Projects",
    shortTitle: "Consultancy Projects",
    description: "Support for planning, structuring, developing, and managing academic and institutional consultancy projects aligned with institutional goals.",
    iconName: "Briefcase",
    ctaText: "Discuss a Project",
    highlights: [
      "Academic & Institutional Project Structuring",
      "R&D and Industry Collaboration Advisory",
      "Consultancy Revenue & Project Governance Models",
      "Capacity Building & Faculty Enablement"
    ]
  },
  {
    id: "deemed",
    serviceKey: "Deemed University Establishment",
    title: "Deemed University Establishment",
    shortTitle: "Deemed University",
    description: "Strategic advisory support for institutions exploring deemed-to-be university status, including process planning, documentation coordination, institutional readiness, and regulatory requirement mapping.",
    iconName: "Building2",
    ctaText: "Discuss University Planning",
    highlights: [
      "UGC Deemed-to-be University Regulations Alignment",
      "Institutional Eligibility & Readiness Assessment",
      "Statutory Governance & Infrastructure Mapping",
      "Comprehensive DPR & Compliance Documentation"
    ]
  },
  {
    id: "private",
    serviceKey: "Private University Establishment",
    title: "Private University Establishment",
    shortTitle: "Private University",
    description: "Guidance for organizations exploring private university establishment, including preliminary feasibility, planning, documentation, regulatory process coordination, and institutional development.",
    iconName: "Landmark",
    ctaText: "Discuss Your Vision",
    highlights: [
      "State University Act & Regulatory Pathway Advisory",
      "Feasibility Study & Academic Master Planning",
      "Corpus, Infrastructure & Statutory Compliance Support",
      "End-to-End Institutional Development Roadmap"
    ]
  }
];

export const VALUE_PROPOSITIONS: ValueProposition[] = [
  {
    title: "Structured Guidance",
    description: "Clear, organized, and methodical approaches to navigate intricate institutional guidelines and regulatory frameworks.",
    icon: "Compass"
  },
  {
    title: "Outcome-Oriented Planning",
    description: "Strategic advisory directly aligned with your institution's distinctive mission, vision, and quantifiable growth benchmarks.",
    icon: "Target"
  },
  {
    title: "Evidence-Based Preparation",
    description: "Rigorous emphasis on factual documentation quality, data integrity, evidentiary verification, and assessment readiness.",
    icon: "FileCheck"
  },
  {
    title: "Institution-Focused Advisory",
    description: "Consultancy tailored to the individual context, history, and development priorities of each college or university.",
    icon: "ShieldCheck"
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: "01",
    title: "Initial Consultation",
    description: "Understand the institution's objectives, governance framework, challenges, and specific development aspirations."
  },
  {
    step: "02",
    title: "Readiness Assessment",
    description: "Identify applicable regulatory requirements, review existing institutional documentation, and conduct metric gap analysis."
  },
  {
    step: "03",
    title: "Strategic Roadmap",
    description: "Define strategic priorities, operational responsibilities, milestones, required evidentiary deliverables, and strict timelines."
  },
  {
    step: "04",
    title: "Implementation Support",
    description: "Assist with rigorous documentation, data structuring, process streamlining, IQAC alignment, and iterative review."
  },
  {
    step: "05",
    title: "Review & Continuous Improvement",
    description: "Conduct thorough pre-submission quality audits, readiness dry runs, and institutional frameworks for sustainable excellence."
  }
];
