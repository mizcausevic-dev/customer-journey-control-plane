export type SignalCard = {
  label: string;
  value: string;
  note: string;
  state: "stable" | "watch" | "critical";
};

export type JourneyMetric = {
  stage: string;
  accounts: number;
  conversion: number;
  intervention: string;
};

export type TrendPoint = {
  period: string;
  engaged: number;
  activated: number;
  retained: number;
};

export type AlertCard = {
  title: string;
  severity: "high" | "medium" | "low";
  reason: string;
  nextAction: string;
};

export type SegmentRow = {
  segment: string;
  source: string;
  health: string;
  expansion: string;
  risk: string;
};

export type Playbook = {
  title: string;
  owner: string;
  window: string;
  summary: string;
};
