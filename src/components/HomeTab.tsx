import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TabsContent } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Feature {
  title: string;
  description: string;
  icon: string;
  action: () => void;
}

interface HomeTabProps {
  features: Feature[];
  setActiveTab: (tab: string) => void;
}

const HomeTab = ({ features, setActiveTab }: HomeTabProps) => {
  return (
    <TabsContent value="home" className="space-y-8 animate-fade-in">
      <div className="text-center max-w-3xl mx-auto space-y-4 py-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-4">
          <Icon name="Sparkles" className="text-primary" size={40} />
        </div>
        <h2 className="text-4xl font-bold">База документов с ИИ-помощником</h2>
        <p className="text-xl text-muted-foreground">
          Создавайте отчеты, ищите документы и получайте готовые примеры. 
          Искусственный интеллект автоматически подберет нужные ссылки на НПА и проверит корректность.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer group"
            onClick={feature.action}
          >
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon name={feature.icon as any} className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </div>
                <Icon name="ArrowRight" className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card className="max-w-4xl mx-auto bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Lightbulb" className="text-primary" size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">Возможности ИИ-помощника</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Автоматический подбор ссылок на действующие НПА</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Проверка документов на противоречия и корректность формулировок</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Поиск связанных документов и контекста по теме</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <span>Генерация документов по стандартам делопроизводства</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button size="lg" className="text-lg px-8" onClick={() => setActiveTab('create')}>
          <Icon name="Sparkles" size={20} className="mr-2" />
          Начать работу
        </Button>
      </div>
    </TabsContent>
  );
};

export default HomeTab;
