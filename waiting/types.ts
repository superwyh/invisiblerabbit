export interface GameState {
  sanity: number;
  evidence: number;
  chaos: number;
  turn: number;
}

export interface Message {
  id: string;
  sender: string; // 'System' | 'Character' | 'Inner Monologue'
  text: string;
  type: 'dialogue' | 'action' | 'system';
}

export interface TimelineData {
  id: 'past' | 'present' | 'future';
  title: string;
  year: string;
  characterName: string;
  avatarUrl: string;
  messages: Message[];
  status: 'Active' | 'Locked' | 'Paradox';
}

export interface Choice {
  id: string;
  text: string;
  cost?: {
    sanity?: number;
    evidence?: number;
    chaos?: number;
  };
  effectDescription?: string;
}

export interface ScenarioStep {
  id: number;
  messages: {
    past: Message[];
    present: Message[];
    future: Message[];
  };
  choices: Choice[];
}