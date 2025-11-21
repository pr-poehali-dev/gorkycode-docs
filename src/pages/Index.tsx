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

  const stats = [
    { label: 'Документов в базе', value: '12,847', icon: 'FileText', color: 'text-primary' },
    { label: 'Отчетов создано', value: '3,421', icon: 'FileCheck', color: 'text-green-600' },
    { label: 'НПА в системе', value: '2,156', icon: 'Scale', color: 'text-blue-600' },
    { label: 'Активных задач', value: '127', icon: 'ClipboardList', color: 'text-orange-600' },
  ];

  const recentDocuments = [
    { id: 1, title: 'Постановление №245 от 15.11.2025', type: 'НПА', status: 'На согласовании', date: '15.11.2025' },
    { id: 2, title: 'Ответ на обращение гражданина Иванова И.И.', type: 'Письмо', status: 'Завершено', date: '14.11.2025' },
    { id: 3, title: 'Аналитическая записка по вопросу благоустройства', type: 'Записка', status: 'В работе', date: '13.11.2025' },
    { id: 4, title: 'Служебное письмо в МинФин', type: 'Письмо', status: 'Завершено', date: '12.11.2025' },
  ];

  const reportTemplates = [
    { id: 1, name: 'Ответ на обращение гражданина', description: 'Стандартный шаблон ответа на обращение', category: 'Письма' },
    { id: 2, name: 'Постановление администрации', description: 'НПА с учетом всех требований законодательства', category: 'НПА' },
    { id: 3, name: 'Аналитическая записка', description: 'Отчет с анализом ситуации и предложениями', category: 'Записки' },
    { id: 4, name: 'Служебная записка', description: 'Внутренний документ для коммуникации', category: 'Записки' },
  ];

  const documentTypes = ['Все типы', 'НПА', 'Письма', 'Записки', 'Поручения', 'Решения'];

  const StatusBadge = ({ status }: { status: string }) => {
    const variants: Record<string, string> = {
      'На согласовании': 'bg-orange-100 text-orange-700',
      'В работе': 'bg-blue-100 text-blue-700',
      'Завершено': 'bg-green-100 text-green-700',
    };
    return <Badge className={variants[status] || 'bg-gray-100 text-gray-700'}>{status}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-sidebar">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="FileStack" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">GORKYCODE 2025</h1>
                <p className="text-sm text-gray-300">База документов администрации</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-white hover:bg-sidebar-accent">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="ghost" className="text-white hover:bg-sidebar-accent">
                <Icon name="Settings" size={20} />
              </Button>
              <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                АИ
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 max-w-4xl">
            <TabsTrigger value="home">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="create">
              <Icon name="FilePlus" size={16} className="mr-2" />
              Создать отчет
            </TabsTrigger>
            <TabsTrigger value="database">
              <Icon name="Database" size={16} className="mr-2" />
              База документов
            </TabsTrigger>
            <TabsTrigger value="search">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск по теме
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

          <TabsContent value="home" className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </CardTitle>
                    <Icon name={stat.icon as any} className={stat.color} size={20} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" size={20} />
                  Недавние документы
                </CardTitle>
                <CardDescription>Последние обновления в системе</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Название документа</TableHead>
                      <TableHead>Тип</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Дата</TableHead>
                      <TableHead className="text-right">Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentDocuments.map((doc) => (
                      <TableRow key={doc.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{doc.title}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{doc.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <StatusBadge status={doc.status} />
                        </TableCell>
                        <TableCell className="text-muted-foreground">{doc.date}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Icon name="Eye" size={16} />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
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
  );
};

export default Index;
