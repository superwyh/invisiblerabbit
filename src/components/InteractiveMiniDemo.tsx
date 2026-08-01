import React, { useEffect, useRef, useState } from 'react';
import { Play, RefreshCw, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';

interface InteractiveMiniDemoProps {
  gameId: string;
  gameTitle: string;
  onClose?: () => void;
}

export const InteractiveMiniDemo: React.FC<InteractiveMiniDemoProps> = ({ gameId, gameTitle }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string>('点击开始体验游戏微内核 (Click to Start Interactive Teaser)');

  // Game 1: Silence of Tides - Beacon Ray Puzzle
  // Game 2: Monochrome Line - Vector Line Friction
  // Game 4: Orbit Gardener - Asteroid Flower Planter

  useEffect(() => {
    if (!isPlaying) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = 320);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || 600;
      height = canvas.height = 320;
    };
    window.addEventListener('resize', handleResize);

    // Game Specific States
    let angle = 0;
    let mirrorAngle = 0.5;
    let plants: { x: number; y: number; r: number; maxR: number; color: string }[] = [];
    let playerX = width / 2;
    let playerY = height / 2;
    let particles: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }[] = [];

    // Click handler on canvas
    const handleCanvasClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      if (gameId === 'silence-of-the-tides') {
        mirrorAngle = (mirrorAngle + Math.PI / 6) % (Math.PI * 2);
        setScore((prev) => prev + 10);
        setStatusMessage('调整反光镜角度 // Aligning Optical Mirror...');
      } else if (gameId === 'orbit-gardener') {
        // Plant a glowing alien flower on the asteroid
        const colors = ['#38bdf8', '#a855f7', '#f43f5e', '#34d399', '#fbbf24'];
        plants.push({
          x: clickX,
          y: clickY,
          r: 2,
          maxR: 12 + Math.random() * 10,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
        setScore((prev) => prev + 1);
        setStatusMessage(`发光花卉已播种 (${plants.length} 朵) // Bioluminescent flora planted`);
      } else {
        // Monochrome Line
        playerX = clickX;
        playerY = clickY;
        // spawn particles
        for (let i = 0; i < 12; i++) {
          particles.push({
            x: clickX,
            y: clickY,
            vx: (Math.random() - 0.5) * 6,
            vy: (Math.random() - 0.5) * 6,
            life: 1,
            maxLife: 20 + Math.random() * 20
          });
        }
        setScore((prev) => prev + 5);
        setStatusMessage('瞬移重力折线 // Kinetic Vector Dash!');
      }
    };

    canvas.addEventListener('click', handleCanvasClick);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Background
      ctx.fillStyle = '#09090b';
      ctx.fillRect(0, 0, width, height);

      // Grid effect
      ctx.strokeStyle = '#18181b';
      ctx.lineWidth = 1;
      const gridSize = 30;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      angle += 0.02;

      if (gameId === 'silence-of-the-tides') {
        // Lighthouse Ray & Target Beacon
        const beaconX = width * 0.2;
        const beaconY = height * 0.5;
        const mirrorX = width * 0.5;
        const mirrorY = height * 0.5;
        const targetX = width * 0.8;
        const targetY = height * 0.3 + Math.sin(angle) * 30;

        // Draw Lighthouse
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(beaconX, beaconY, 12, 0, Math.PI * 2);
        ctx.fill();

        // Ray to Mirror
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(beaconX, beaconY);
        ctx.lineTo(mirrorX, mirrorY);
        ctx.stroke();

        // Mirror
        ctx.save();
        ctx.translate(mirrorX, mirrorY);
        ctx.rotate(mirrorAngle);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 6;
        ctx.beginPath();
        ctx.moveTo(-25, 0);
        ctx.lineTo(25, 0);
        ctx.stroke();
        ctx.restore();

        // Reflected Ray
        const reflectedX = mirrorX + Math.cos(mirrorAngle * 2) * 200;
        const reflectedY = mirrorY + Math.sin(mirrorAngle * 2) * 200;
        ctx.strokeStyle = '#38bdf8';
        ctx.beginPath();
        ctx.moveTo(mirrorX, mirrorY);
        ctx.lineTo(reflectedX, reflectedY);
        ctx.stroke();

        // Target Receiver
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(targetX, targetY, 16, 0, Math.PI * 2);
        ctx.fill();

        // Text instruction
        ctx.fillStyle = '#a1a1aa';
        ctx.font = '12px "JetBrains Mono", monospace';
        ctx.fillText('点击画面旋转镜片，对准右侧绿色接收站', width * 0.2, height - 20);

      } else if (gameId === 'orbit-gardener') {
        // Rotating Planet
        const planetX = width / 2;
        const planetY = height / 2;
        const planetR = 60;

        ctx.fillStyle = '#27272a';
        ctx.beginPath();
        ctx.arc(planetX, planetY, planetR, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#3f3f46';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw plants
        plants.forEach((p) => {
          if (p.r < p.maxR) p.r += 0.2;
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.shadowBlur = 0;
        ctx.fillStyle = '#a1a1aa';
        ctx.font = '12px "JetBrains Mono", monospace';
        ctx.fillText('点击行星表面或太空，种植发光植物', 20, height - 20);

      } else {
        // Monochrome Line
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(playerX, playerY, 10, 0, Math.PI * 2);
        ctx.stroke();

        // Trail particles
        particles.forEach((p, idx) => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 1;
          ctx.fillStyle = `rgba(255, 255, 255, ${p.life / p.maxLife})`;
          ctx.fillRect(p.x, p.y, 3, 3);
        });
        particles = particles.filter((p) => p.life > 0);

        ctx.fillStyle = '#a1a1aa';
        ctx.font = '12px "JetBrains Mono", monospace';
        ctx.fillText('点击屏幕进行矢量重力冲刺', 20, height - 20);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) canvas.removeEventListener('click', handleCanvasClick);
    };
  }, [isPlaying, gameId]);

  return (
    <div className="bg-zinc-950 text-white rounded-xl overflow-hidden border border-zinc-800 p-4 my-6">
      <div className="flex items-center justify-between mb-3 border-b border-zinc-800 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono-code text-zinc-300 tracking-wider uppercase">
            Interactive Teaser // {gameTitle}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono-code text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-0.5 rounded-full">
            SCORE: {score}
          </span>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="text-zinc-400 hover:text-white p-1 transition-colors"
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {!isPlaying ? (
        <div className="h-64 bg-zinc-900/80 rounded-lg flex flex-col items-center justify-center p-6 text-center border border-dashed border-zinc-800">
          <p className="text-sm text-zinc-300 font-mono-code mb-4 max-w-md">
            可以在浏览器中即时操作的极简微内核演示，感受游戏核心机制与声音氛围。
          </p>
          <button
            onClick={() => setIsPlaying(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-zinc-950 font-medium text-sm rounded-lg hover:bg-zinc-200 transition-all shadow-md active:scale-95"
          >
            <Play className="w-4 h-4 fill-current" />
            启动微 Demo (Launch Demo)
          </button>
        </div>
      ) : (
        <div>
          <div className="relative w-full rounded-lg overflow-hidden bg-black border border-zinc-800">
            <canvas ref={canvasRef} className="w-full h-80 block cursor-crosshair" />
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 font-mono-code">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              {statusMessage}
            </span>
            <button
              onClick={() => {
                setScore(0);
                setStatusMessage('Reset');
              }}
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <RefreshCw className="w-3 h-3" /> 重置 (Reset)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
