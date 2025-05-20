export class Message {
  interactionAt: number;
  interactionDuration: number;
  appType: string;
  appLevel: string;
  appMode: string;
  chartType: string;
  interactionType: string;
  participantId: string;
  data: object;
}

export class Insight {
  text: string;
  timestamp: string;
  group: string;
  participantId: string;
}