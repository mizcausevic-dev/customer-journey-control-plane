import type {
  AlertCard,
  JourneyMetric,
  Playbook,
  SegmentRow,
  SignalCard,
  TrendPoint
} from "./types";

export const signalCards: SignalCard[] = [
  {
    label: "Activated accounts",
    value: "418",
    note: "+12% quarter-over-quarter",
    state: "stable"
  },
  {
    label: "Journey friction",
    value: "3",
    note: "Three stages above intervention threshold",
    state: "watch"
  },
  {
    label: "Expansion-ready",
    value: "86",
    note: "High-fit accounts eligible this sprint",
    state: "stable"
  },
  {
    label: "Churn watchlist",
    value: "24",
    note: "Nine require executive follow-up",
    state: "critical"
  }
];

export const journeyMetrics: JourneyMetric[] = [
  { stage: "Acquisition", accounts: 1260, conversion: 42, intervention: "Creative + offer fit" },
  { stage: "Activation", accounts: 530, conversion: 61, intervention: "Onboarding sequencing" },
  { stage: "Adoption", accounts: 324, conversion: 74, intervention: "Feature uptake plays" },
  { stage: "Expansion", accounts: 112, conversion: 39, intervention: "Exec sponsorship + pricing" },
  { stage: "Renewal", accounts: 94, conversion: 88, intervention: "Success playbooks" }
];

export const trendPoints: TrendPoint[] = [
  { period: "Jan", engaged: 71, activated: 44, retained: 81 },
  { period: "Feb", engaged: 74, activated: 48, retained: 83 },
  { period: "Mar", engaged: 76, activated: 52, retained: 85 },
  { period: "Apr", engaged: 81, activated: 58, retained: 87 },
  { period: "May", engaged: 84, activated: 63, retained: 89 }
];

export const alerts: AlertCard[] = [
  {
    title: "Mid-market product-qualified leads are stalling before activation",
    severity: "high",
    reason: "Onboarding sequence is too slow for accounts without dedicated success coverage.",
    nextAction: "Launch self-serve activation motion within 7 days."
  },
  {
    title: "Expansion-ready enterprise accounts are under-contacted",
    severity: "medium",
    reason: "Exec sponsor outreach is lagging high-intent usage signals.",
    nextAction: "Route to growth and CS leadership this week."
  },
  {
    title: "Renewal-risk cluster tied to low-feature adoption cohort",
    severity: "medium",
    reason: "Customers using only one module show weaker retention behavior.",
    nextAction: "Trigger multi-module enablement playbook."
  }
];

export const segments: SegmentRow[] = [
  {
    segment: "Enterprise platform teams",
    source: "Partner + outbound",
    health: "Strong",
    expansion: "High",
    risk: "Low"
  },
  {
    segment: "Mid-market growth ops",
    source: "Organic + webinar",
    health: "Mixed",
    expansion: "Medium",
    risk: "Medium"
  },
  {
    segment: "Digital experience leaders",
    source: "Paid + content",
    health: "Improving",
    expansion: "High",
    risk: "Low"
  },
  {
    segment: "Cloud infrastructure buyers",
    source: "Partner referral",
    health: "Watch",
    expansion: "Medium",
    risk: "High"
  }
];

export const playbooks: Playbook[] = [
  {
    title: "Activation recovery sprint",
    owner: "Growth operations",
    window: "Next 7 days",
    summary: "Accelerate onboarding for high-intent but low-touch cohorts with guided milestone nudges."
  },
  {
    title: "Expansion readiness council",
    owner: "Revenue leadership",
    window: "This sprint",
    summary: "Move high-fit accounts into executive sponsorship and pricing review before interest cools."
  },
  {
    title: "Renewal rescue motion",
    owner: "Customer success",
    window: "30 days",
    summary: "Combine low adoption, support noise, and renewal proximity into one intervention path."
  }
];
