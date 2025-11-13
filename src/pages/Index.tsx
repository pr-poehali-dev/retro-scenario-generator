import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

export default function Index() {
  const [prompt, setPrompt] = useState('');
  const [script, setScript] = useState('');
  const [storyboardMode, setStoryboardMode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [scenes, setScenes] = useState<Array<{title: string, description: string}>>([]);

  const generateScript = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const mockScript = `ИНТ. КОСМИЧЕСКИЙ КОРАБЛЬ - ДЕНЬ

Капитан АЛЕКС (35) сидит в кресле командира. 
Красные огни тревоги мигают по всему мосту.

АЛЕКС
Статус двигателей?

ИНЖЕНЕР МАРИЯ подбегает к консоли.

МАРИЯ
Критический перегрев реактора. 
У нас две минуты до отказа системы.

АЛЕКС
(решительно)
Переключаем на резервное питание.
Всем приготовиться к экстренному выходу.

Корабль содрогается от взрыва.`;

      setScript(mockScript);
      
      setScenes([
        { title: 'Сцена 1: Мостик корабля', description: 'Капитан за пультом управления, красные огни тревоги' },
        { title: 'Сцена 2: Тревога', description: 'Инженер бежит к консоли, паника на лицах' },
        { title: 'Сцена 3: Решение', description: 'Капитан отдает команду, напряженный момент' },
        { title: 'Сцена 4: Взрыв', description: 'Корабль трясет, искры летят из панелей' }
      ]);
      
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div 
      className="min-h-screen w-full relative flex items-center justify-center p-8"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/projects/298a291d-8fb1-4b7e-a977-37389bce7f84/files/8bdbace0-45c6-4917-905d-56b11bfbcbc6.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--room-bg))]/20 to-[hsl(var(--room-bg))]/40" />
      
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center gap-6">
        <div className="relative bg-gradient-to-br from-[#e8e4d9] via-[#d4cfc4] to-[#c9c4b8] p-12 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.3)] border-[6px] border-[#a39d8f] w-full">
          <div className="absolute top-6 left-6 flex gap-3">
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-inner" />
            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 shadow-inner" />
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 h-3 bg-gradient-to-b from-[#a39d8f] to-[#8a857a] rounded-full shadow-inner" />
          
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#8a857a] text-[10px] font-mono tracking-wider">
            IBM 5150
          </div>
          
          <div className="relative bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] p-3 rounded-lg border-[8px] border-[#4a4a4a] shadow-[inset_0_0_30px_rgba(0,0,0,0.9),0_0_40px_rgba(0,255,65,0.15)]">
            <div className="flex items-center justify-between px-2 py-1 mb-2">
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(255,0,0,0.6)] animate-pulse" />
                <div className="text-[hsl(var(--crt-green))]/60 text-[10px] font-mono">PWR</div>
              </div>
              <div className="text-[hsl(var(--crt-green))]/40 text-[10px] font-mono tracking-widest">SCREENPLAY.EXE</div>
            </div>
            <div className="absolute inset-3 bg-gradient-radial from-transparent via-[hsl(var(--crt-green))]/5 to-transparent pointer-events-none rounded" />
          </div>

          <div className="crt-screen scanlines flicker p-6 rounded-sm shadow-[inset_0_0_40px_rgba(0,0,0,0.9)] min-h-[600px] relative border-2 border-black/50">
            <div className="absolute top-4 right-4 flex items-center gap-3 bg-[hsl(var(--crt-bg))]/80 p-3 rounded border border-[hsl(var(--crt-green))]/30">
              <Label htmlFor="storyboard-mode" className="text-[hsl(var(--crt-green))] text-sm">
                РЕЖИМ РАСКАДРОВКИ
              </Label>
              <Switch 
                id="storyboard-mode"
                checked={storyboardMode}
                onCheckedChange={setStoryboardMode}
                className="data-[state=checked]:bg-[hsl(var(--crt-green))]"
              />
            </div>

            <div className="space-y-6 mt-12">
              <div>
                <Label className="text-[hsl(var(--crt-green))] mb-2 block text-sm">
                  &gt; ВВЕДИТЕ ИДЕЮ СЦЕНАРИЯ_
                </Label>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Космический корабль в опасности..."
                  className="bg-[hsl(var(--crt-bg))] border-[hsl(var(--crt-green))]/40 text-[hsl(var(--crt-green))] placeholder:text-[hsl(var(--crt-green))]/40 min-h-[100px] font-mono resize-none"
                />
              </div>

              <Button
                onClick={generateScript}
                disabled={isGenerating || !prompt}
                className="bg-[hsl(var(--crt-green))] text-black hover:bg-[hsl(var(--crt-green))]/80 font-mono uppercase tracking-wider"
              >
                {isGenerating ? (
                  <>
                    <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                    ГЕНЕРАЦИЯ...
                  </>
                ) : (
                  <>
                    <Icon name="Sparkles" className="mr-2 h-4 w-4" />
                    СГЕНЕРИРОВАТЬ
                  </>
                )}
              </Button>

              {script && (
                <div className="space-y-4 animate-in fade-in duration-500">
                  {!storyboardMode ? (
                    <div className="bg-[hsl(var(--crt-bg))]/50 border border-[hsl(var(--crt-green))]/30 p-4 rounded">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon name="FileText" className="h-5 w-5 text-[hsl(var(--crt-green))]" />
                        <span className="text-[hsl(var(--crt-green))] font-mono text-sm">
                          СЦЕНАРИЙ.TXT
                        </span>
                      </div>
                      <pre className="text-[hsl(var(--crt-green))] whitespace-pre-wrap font-mono text-sm leading-relaxed">
                        {script}
                      </pre>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <Icon name="Film" className="h-5 w-5 text-[hsl(var(--crt-green))]" />
                        <span className="text-[hsl(var(--crt-green))] font-mono text-sm">
                          РАСКАДРОВКА.DAT
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {scenes.map((scene, idx) => (
                          <Card 
                            key={idx}
                            className="bg-[hsl(var(--crt-bg))]/50 border-[hsl(var(--crt-green))]/30 p-4 space-y-2"
                          >
                            <div className="aspect-video bg-[hsl(var(--crt-bg))] border border-[hsl(var(--crt-green))]/20 rounded flex items-center justify-center">
                              <Icon name="Image" className="h-8 w-8 text-[hsl(var(--crt-green))]/40" />
                            </div>
                            <h3 className="text-[hsl(var(--crt-green))] font-mono text-xs font-semibold">
                              {scene.title}
                            </h3>
                            <p className="text-[hsl(var(--crt-green))]/70 font-mono text-xs leading-relaxed">
                              {scene.description}
                            </p>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-3 flex justify-center">
            <div className="text-[hsl(var(--crt-green))]/30 text-[9px] font-mono text-center tracking-wider">
              SCREENPLAY GENERATOR v1.0 © 1985
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-4xl">
          <div className="bg-gradient-to-br from-[#e8e4d9] via-[#d4cfc4] to-[#c9c4b8] p-6 pt-8 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] border-4 border-[#a39d8f]">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[#8a857a] text-[9px] font-mono tracking-wider">
              MODEL M KEYBOARD
            </div>
            
            <div className="grid grid-cols-15 gap-1.5">
              {['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'].map((key) => (
                <div key={key} className="col-span-1 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-1.5 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">
                  {key}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-15 gap-1.5 mt-3">
              {['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Back'].map((key) => (
                <div key={key} className={`${key === 'Back' ? 'col-span-2' : 'col-span-1'} bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center`}>
                  {key}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-15 gap-1.5 mt-1.5">
              <div className="col-span-1 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">Tab</div>
              {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']'].map((key) => (
                <div key={key} className="col-span-1 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">
                  {key}
                </div>
              ))}
              <div className="col-span-2 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">\</div>
            </div>
            
            <div className="grid grid-cols-15 gap-1.5 mt-1.5">
              <div className="col-span-2 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">Caps</div>
              {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"].map((key) => (
                <div key={key} className="col-span-1 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">
                  {key}
                </div>
              ))}
              <div className="col-span-2 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">Enter</div>
            </div>
            
            <div className="grid grid-cols-15 gap-1.5 mt-1.5">
              <div className="col-span-2 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">Shift</div>
              {['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/'].map((key) => (
                <div key={key} className="col-span-1 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">
                  {key}
                </div>
              ))}
              <div className="col-span-3 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">Shift</div>
            </div>
            
            <div className="grid grid-cols-15 gap-1.5 mt-1.5">
              <div className="col-span-2 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">Ctrl</div>
              <div className="col-span-2 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">Alt</div>
              <div className="col-span-7 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center"></div>
              <div className="col-span-2 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">Alt</div>
              <div className="col-span-2 bg-gradient-to-b from-[#4a4a4a] to-[#2a2a2a] text-[#d4d4d4] text-[9px] font-mono px-2 py-2 rounded shadow-[0_2px_0_#1a1a1a,inset_0_1px_0_#6a6a6a] text-center">Ctrl</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}