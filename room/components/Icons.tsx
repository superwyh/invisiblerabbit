import React from 'react';
import { Headphones, Brain, Scroll, Drama, AudioWaveform, FileDigit, LucideProps } from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
}

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'headphones': return <Headphones {...props} />;
    case 'brain': return <Brain {...props} />;
    case 'scroll': return <Scroll {...props} />;
    case 'mask': return <Drama {...props} />;
    case 'waves': return <AudioWaveform {...props} />;
    case 'file-digit': return <FileDigit {...props} />;
    default: return <Headphones {...props} />;
  }
};