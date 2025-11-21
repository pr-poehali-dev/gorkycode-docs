import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  const features = [
    { 
      title: 'Создать отчет', 
      description: 'Сгенерируйте документ с помощью ИИ', 
      icon: 'FilePlus', 
      action: () => setActiveTab('create')
    },
    { 
      title: 'Найти документы', 
      description: 'Поиск по всей базе документов', 
      icon: 'Search', 
      action: () => setActiveTab('search')
    },
    { 
      title: 'Примеры отчетов', 
      description: 'Посмотрите готовые примеры', 
      icon: 'FolderOpen', 
      action: () => setActiveTab('examples')
    },
    { 
      title: 'База документов', 
      description: 'Доступ ко всем документам', 
      icon: 'Database', 
      action: () => setActiveTab('database')
    },
  ];

  const reportTemplates = [
    { id: 1, name: 'Ответ на обращение гражданина', description: 'Стандартный шаблон ответа на обращение', category: 'Письма' },
    { id: 2, name: 'Постановление администрации', description: 'НПА с учетом всех требований законодательства', category: 'НПА' },
    { id: 3, name: 'Аналитическая записка', description: 'Отчет с анализом ситуации и предложениями', category: 'Записки' },
    { id: 4, name: 'Служебная записка', description: 'Внутренний документ для коммуникации', category: 'Записки' },
  ];

  const documentTypes = ['Все типы', 'НПА', 'Письма', 'Записки', 'Поручения', 'Решения'];



  return (
    <div className="min-h-screen bg-background relative">
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/600482ac-ffd2-42b9-9b04-a01fdd8838a6/files/9e5cff94-609d-48d5-be7a-4e510a48a226.jpg)' }}
      />
      <div className="relative z-10">
      <div className="bg-gradient-to-r from-primary via-blue-600 to-primary">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                <Icon name="Sparkles" className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">GORKYCODE 2025</h1>
                <p className="text-sm text-blue-100">ИИ-помощник для работы с документами</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" className="text-white hover:bg-white/20 backdrop-blur-sm">
                <Icon name="Github" size={20} className="mr-2" />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {activeTab !== 'home' && (
            <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto">
              <TabsTrigger value="create">
                <Icon name="FilePlus" size={16} className="mr-2" />
                Создать
              </TabsTrigger>
              <TabsTrigger value="database">
                <Icon name="Database" size={16} className="mr-2" />
                База
              </TabsTrigger>
              <TabsTrigger value="search">
                <Icon name="Search" size={16} className="mr-2" />
                Поиск
              </TabsTrigger>
              <TabsTrigger value="examples">
                <Icon name="FolderOpen" size={16} className="mr-2" />
                Примеры
              </TabsTrigger>
              <TabsTrigger value="generator">
                <Icon name="Sparkles" size={16} className="mr-2" />
                Генератор
              </TabsTrigger>
            </TabsList>
          )}

          <TabsContent value="home" className="space-y-12 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent rounded-3xl blur-3xl" />
              <div className="text-center max-w-4xl mx-auto space-y-6 py-12 relative">
                <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">Нижегородская область</span>
                </div>
                <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-3xl mb-6 shadow-2xl">
                  <Icon name="Sparkles" className="text-primary animate-pulse" size={56} />
                </div>
                <h2 className="text-6xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent leading-tight">
                  База документов 
                  <br />
                  с ИИ-помощником
                </h2>
                <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Создавайте отчеты, ищите документы и получайте готовые примеры. 
                  Искусственный интеллект автоматически подберет нужные ссылки на НПА и проверит корректность.
                </p>
                <div className="flex items-center justify-center gap-8 pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary">12K+</div>
                    <div className="text-sm text-muted-foreground mt-1">Документов</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600">2K+</div>
                    <div className="text-sm text-muted-foreground mt-1">НПА</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600">3K+</div>
                    <div className="text-sm text-muted-foreground mt-1">Отчетов</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl hover:scale-105 hover:border-primary transition-all cursor-pointer group relative overflow-hidden"
                  onClick={feature.action}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name={feature.icon as any} className="text-primary" size={28} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                        <CardDescription className="text-base">{feature.description}</CardDescription>
                      </div>
                      <Icon name="ArrowRight" className="text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" size={24} />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Card className="max-w-5xl mx-auto bg-gradient-to-br from-primary/10 via-blue-500/5 to-primary/10 border-primary/30 shadow-xl">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name="Lightbulb" className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Возможности ИИ-помощника</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" className="text-primary" size={16} />
                        </div>
                        <span>Автоматический подбор ссылок на действующие НПА</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" className="text-primary" size={16} />
                        </div>
                        <span>Проверка документов на противоречия и корректность формулировок</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" className="text-primary" size={16} />
                        </div>
                        <span>Поиск связанных документов и контекста по теме</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" className="text-primary" size={16} />
                        </div>
                        <span>Генерация документов по стандартам делопроизводства</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-6">
              <Button 
                size="lg" 
                className="text-xl px-16 py-8 rounded-3xl shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all bg-gradient-to-r from-primary via-blue-600 to-primary hover:from-primary/90 hover:via-blue-600/90 hover:to-primary/90 font-bold" 
                onClick={() => setActiveTab('create')}
              >
                <Icon name="Sparkles" size={28} className="mr-3" />
                Начать работу
              </Button>
              <p className="text-sm text-muted-foreground">
                Бесплатно и без регистрации
              </p>
            </div>
          </TabsContent>

          <TabsContent value="create" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FilePlus" size={24} />
                  Создание нового отчета
                </CardTitle>
                <CardDescription>Выберите шаблон или создайте документ с нуля</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Тип документа</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип документа" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="npa">НПА</SelectItem>
                      <SelectItem value="letter">Служебное письмо</SelectItem>
                      <SelectItem value="response">Ответ гражданину</SelectItem>
                      <SelectItem value="note">Аналитическая записка</SelectItem>
                      <SelectItem value="order">Поручение</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Название документа</label>
                  <Input placeholder="Введите название документа" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Содержание</label>
                  <Textarea 
                    placeholder="Опишите суть документа, система автоматически подберет нужные ссылки на НПА и проверит корректность..."
                    rows={8}
                  />
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1">
                    <Icon name="Sparkles" size={18} className="mr-2" />
                    Сгенерировать с помощью ИИ
                  </Button>
                  <Button variant="outline">
                    <Icon name="Save" size={18} className="mr-2" />
                    Сохранить черновик
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Шаблоны отчетов</CardTitle>
                <CardDescription>Используйте готовые шаблоны для быстрого создания</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reportTemplates.map((template) => (
                    <Card key={template.id} className="hover:border-primary transition-colors cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-base">{template.name}</CardTitle>
                            <CardDescription className="mt-1">{template.description}</CardDescription>
                          </div>
                          <Badge variant="secondary">{template.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" className="w-full">
                          <Icon name="Copy" size={16} className="mr-2" />
                          Использовать шаблон
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="database" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Database" size={24} />
                  База документов
                </CardTitle>
                <CardDescription>Все документы администрации в одном месте</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <Input 
                      placeholder="Поиск по названию, содержанию, номеру документа..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {documentTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button>
                    <Icon name="Search" size={18} />
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="border-primary/20 hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon name="Scale" className="text-primary" size={20} />
                        НПА
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary">2,156</div>
                      <p className="text-sm text-muted-foreground mt-1">Нормативных правовых актов</p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-500/20 hover:border-blue-500 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon name="Mail" className="text-blue-600" size={20} />
                        Письма
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600">5,823</div>
                      <p className="text-sm text-muted-foreground mt-1">Служебных писем</p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-500/20 hover:border-green-500 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Icon name="FileText" className="text-green-600" size={20} />
                        Прочее
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-600">4,868</div>
                      <p className="text-sm text-muted-foreground mt-1">Других документов</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Search" size={24} />
                  Поиск документов по теме
                </CardTitle>
                <CardDescription>Найдите все связанные документы по ключевым словам или теме</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Тема или ключевые слова</label>
                  <Input placeholder="Например: благоустройство, бюджет, жилищная политика..." />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Дополнительные фильтры</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Период" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="week">Последняя неделя</SelectItem>
                        <SelectItem value="month">Последний месяц</SelectItem>
                        <SelectItem value="year">Последний год</SelectItem>
                        <SelectItem value="all">Все время</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Департамент" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Все департаменты</SelectItem>
                        <SelectItem value="finance">Финансы</SelectItem>
                        <SelectItem value="urban">Градостроительство</SelectItem>
                        <SelectItem value="social">Социальная политика</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Статус" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Любой статус</SelectItem>
                        <SelectItem value="active">Действующие</SelectItem>
                        <SelectItem value="draft">Черновики</SelectItem>
                        <SelectItem value="archived">Архивные</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full">
                  <Icon name="Search" size={18} className="mr-2" />
                  Найти документы
                </Button>

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon name="Lightbulb" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-medium">Интеллектуальный поиск</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Система автоматически найдет не только прямые совпадения, но и связанные документы, 
                        ссылки на НПА, и документы по смежным темам
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FolderOpen" size={24} />
                  Примеры готовых отчетов
                </CardTitle>
                <CardDescription>Изучите примеры документов для быстрого старта</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: 'Постановление о благоустройстве территории', type: 'НПА', rating: 5 },
                    { title: 'Ответ на обращение о ремонте дороги', type: 'Письмо', rating: 5 },
                    { title: 'Аналитическая записка по бюджету', type: 'Записка', rating: 4 },
                    { title: 'Служебная записка о проведении мероприятия', type: 'Записка', rating: 5 },
                  ].map((example, index) => (
                    <Card key={index} className="hover:border-primary transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold">{example.title}</h3>
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="secondary">{example.type}</Badge>
                              <div className="flex items-center gap-1">
                                {[...Array(example.rating)].map((_, i) => (
                                  <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                                ))}
                              </div>
                            </div>
                          </div>
                          <Button variant="outline">
                            <Icon name="Eye" size={16} className="mr-2" />
                            Просмотр
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="generator" className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" size={24} />
                  Генератор примеров отчетов
                </CardTitle>
                <CardDescription>Создайте пример документа с помощью ИИ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Что вы хотите создать?</label>
                  <Textarea 
                    placeholder="Опишите задачу простыми словами, например: 'Создай пример постановления о запрете парковки на улице Ленина'"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Тип документа</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Автоматически" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="auto">Автоматически</SelectItem>
                        <SelectItem value="npa">НПА</SelectItem>
                        <SelectItem value="letter">Письмо</SelectItem>
                        <SelectItem value="note">Записка</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Стиль изложения</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Официальный" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="official">Официальный</SelectItem>
                        <SelectItem value="formal">Формальный</SelectItem>
                        <SelectItem value="brief">Краткий</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="Wand2" size={20} className="mr-2" />
                  Сгенерировать пример
                </Button>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Icon name="Zap" className="text-primary" size={18} />
                    Возможности генератора:
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 mt-0.5" size={16} />
                      Автоматический подбор ссылок на НПА
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 mt-0.5" size={16} />
                      Проверка на противоречия с действующими документами
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 mt-0.5" size={16} />
                      Соответствие требованиям делопроизводства
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-green-600 mt-0.5" size={16} />
                      Учет связанных документов и контекста
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      </div>
    </div>
  );
};

export default Index;