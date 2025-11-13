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
      
      <div className="relative z-10 w-full max-w-5xl">
        <div className="bg-gradient-to-b from-gray-400 via-gray-300 to-gray-400 p-8 rounded-lg shadow-2xl border-4 border-gray-500">
          <div className="bg-gray-800 p-4 rounded-t-sm border-2 border-gray-900 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-gray-400 text-xs font-mono">SCREENPLAY.EXE</div>
            </div>
          </div>

          <div className="crt-screen scanlines flicker p-6 rounded-sm shadow-inner min-h-[600px] relative">
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

          <div className="bg-gray-800 p-2 rounded-b-sm border-2 border-t-0 border-gray-900 mt-4">
            <div className="text-[hsl(var(--crt-green))] text-xs font-mono text-center">
              SCREENPLAY GENERATOR v1.0 © 1985
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
