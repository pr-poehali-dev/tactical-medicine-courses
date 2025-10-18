import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const courses = [
    {
      title: 'ТСМП Базовый',
      duration: '40 часов',
      level: 'Начальный',
      description: 'Основы тактической медицины для новичков. Первая помощь в боевых условиях.',
      price: '25 000 ₽',
      icon: 'Heart'
    },
    {
      title: 'ТСМП Продвинутый',
      duration: '80 часов',
      level: 'Продвинутый',
      description: 'Углубленное изучение методов стабилизации и эвакуации раненых.',
      price: '45 000 ₽',
      icon: 'Activity'
    },
    {
      title: 'Инструктор ТСМП',
      duration: '120 часов',
      level: 'Профессиональный',
      description: 'Подготовка преподавателей тактической медицины.',
      price: '85 000 ₽',
      icon: 'Award'
    }
  ];

  const instructors = [
    {
      name: 'Алексей Соколов',
      rank: 'Полковник медицинской службы',
      experience: '15 лет',
      courses: 'ТСМП Базовый, Продвинутый',
      certifications: 'TCCC, PHTLS, TECC'
    },
    {
      name: 'Дмитрий Волков',
      rank: 'Майор медицинской службы',
      experience: '12 лет',
      courses: 'Инструктор ТСМП, ТСМП Продвинутый',
      certifications: 'TCCC-MP, ACLS, PALS'
    },
    {
      name: 'Михаил Петров',
      rank: 'Капитан медицинской службы',
      experience: '8 лет',
      courses: 'ТСМП Базовый',
      certifications: 'TCCC, BLS, ITLS'
    }
  ];

  const schedule = [
    {
      course: 'ТСМП Базовый',
      dates: '15-19 ноября 2025',
      time: '09:00-18:00',
      location: 'Москва, Учебный центр',
      seats: '12 мест'
    },
    {
      course: 'ТСМП Продвинутый',
      dates: '22 ноября - 3 декабря 2025',
      time: '09:00-18:00',
      location: 'Москва, Учебный центр',
      seats: '8 мест'
    },
    {
      course: 'Инструктор ТСМП',
      dates: '6 декабря 2025 - 15 января 2026',
      time: '09:00-18:00',
      location: 'Москва, Учебный центр',
      seats: '6 мест'
    }
  ];

  const blogPosts = [
    {
      title: 'Новые стандарты TCCC 2025',
      date: '10 октября 2025',
      excerpt: 'Обзор обновленных протоколов тактической медицины.',
      category: 'Стандарты'
    },
    {
      title: 'Применение турникетов: ошибки и решения',
      date: '5 октября 2025',
      excerpt: 'Разбор типичных ошибок при наложении жгутов в полевых условиях.',
      category: 'Практика'
    },
    {
      title: 'Психологическая подготовка медика',
      date: '1 октября 2025',
      excerpt: 'Как сохранить хладнокровие при оказании помощи под огнем.',
      category: 'Подготовка'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Cross" className="text-accent" size={32} />
              <h1 className="text-2xl font-bold text-primary-foreground">ТАКТИЧЕСКАЯ МЕДИЦИНА</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['home', 'courses', 'instructors', 'schedule', 'certification', 'blog', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === section ? 'text-accent' : 'text-primary-foreground'
                  }`}
                >
                  {section === 'home' && 'ГЛАВНАЯ'}
                  {section === 'courses' && 'КУРСЫ'}
                  {section === 'instructors' && 'ИНСТРУКТОРЫ'}
                  {section === 'schedule' && 'РАСПИСАНИЕ'}
                  {section === 'certification' && 'СЕРТИФИКАЦИЯ'}
                  {section === 'blog' && 'БЛОГ'}
                  {section === 'contacts' && 'КОНТАКТЫ'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">Профессиональная подготовка</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              КУРСЫ ТАКТИЧЕСКОЙ<br />МЕДИЦИНЫ
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Обучение по международным стандартам TCCC. Подготовка специалистов для работы в экстремальных условиях.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={() => scrollToSection('courses')}>
                <Icon name="BookOpen" className="mr-2" size={20} />
                Выбрать курс
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Icon name="Shield" className="text-accent mb-2" size={40} />
                <CardTitle>Международные стандарты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Обучение по программам TCCC, TECC, PHTLS</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Icon name="Users" className="text-accent mb-2" size={40} />
                <CardTitle>Опытные инструкторы</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Действующие военные медики и хирурги</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-accent transition-colors">
              <CardHeader>
                <Icon name="Award" className="text-accent mb-2" size={40} />
                <CardTitle>Официальная сертификация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Признанные государством документы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Программы обучения</Badge>
            <h2 className="text-4xl font-bold mb-4">НАШИ КУРСЫ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите программу, соответствующую вашему уровню подготовки
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-lg">
                <CardHeader>
                  <Icon name={course.icon as any} className="text-accent mb-4" size={48} />
                  <Badge className="w-fit mb-2">{course.level}</Badge>
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-accent">{course.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Icon name="Clock" size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="instructors" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наша команда</Badge>
            <h2 className="text-4xl font-bold mb-4">ИНСТРУКТОРЫ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессионалы с боевым опытом и медицинским образованием
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {instructors.map((instructor, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all">
                <CardHeader>
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <Icon name="User" className="text-accent" size={40} />
                  </div>
                  <CardTitle className="text-xl">{instructor.name}</CardTitle>
                  <CardDescription className="font-semibold">{instructor.rank}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Briefcase" className="text-accent mt-1" size={16} />
                    <div>
                      <p className="text-sm font-semibold">Опыт</p>
                      <p className="text-sm text-muted-foreground">{instructor.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="BookOpen" className="text-accent mt-1" size={16} />
                    <div>
                      <p className="text-sm font-semibold">Курсы</p>
                      <p className="text-sm text-muted-foreground">{instructor.courses}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Award" className="text-accent mt-1" size={16} />
                    <div>
                      <p className="text-sm font-semibold">Сертификации</p>
                      <p className="text-sm text-muted-foreground">{instructor.certifications}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Ближайшие группы</Badge>
            <h2 className="text-4xl font-bold mb-4">РАСПИСАНИЕ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Запись открыта. Количество мест ограничено
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {schedule.map((item, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{item.course}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Icon name="Calendar" size={16} className="text-accent" />
                          <span>{item.dates}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Clock" size={16} className="text-accent" />
                          <span>{item.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="MapPin" size={16} className="text-accent" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary">{item.seats}</Badge>
                      <Button className="bg-accent hover:bg-accent/90">Записаться</Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certification" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Документы</Badge>
            <h2 className="text-4xl font-bold mb-4">СЕРТИФИКАЦИЯ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              По окончании курса вы получаете официальные документы
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <Icon name="FileCheck" className="text-accent mb-4" size={48} />
                <CardTitle>Сертификат о прохождении курса</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Официальный документ установленного образца, подтверждающий квалификацию
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Соответствие стандартам TCCC</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Признание государственными структурами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Срок действия 3 года</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardHeader>
                <Icon name="GraduationCap" className="text-accent mb-4" size={48} />
                <CardTitle>Удостоверение инструктора</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Для курса "Инструктор ТСМП" - право на преподавание
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Право проводить обучение</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Методические материалы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1" size={16} />
                    <span>Поддержка ассоциации</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Полезные материалы</Badge>
            <h2 className="text-4xl font-bold mb-4">БЛОГ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Статьи, новости и обновления из мира тактической медицины
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-lg cursor-pointer">
                <CardHeader>
                  <Badge className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="text-xl hover:text-accent transition-colors">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="w-full">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Свяжитесь с нами</Badge>
            <h2 className="text-4xl font-bold mb-4">КОНТАКТЫ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ответим на все ваши вопросы о курсах и обучении
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-68</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@tacmed.ru</p>
                    <p className="text-muted-foreground">training@tacmed.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    <p className="text-muted-foreground">Учебный центр, корпус 2</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-accent mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 09:00 - 18:00</p>
                    <p className="text-muted-foreground">Сб-Вс: по записи</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Форма обратной связи</CardTitle>
                <CardDescription>Оставьте заявку, и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Телефон" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div>
                    <Textarea placeholder="Сообщение" rows={4} />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    <Icon name="Send" className="mr-2" size={16} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Cross" className="text-accent" size={24} />
                <h3 className="text-lg font-bold">ТАКТИЧЕСКАЯ МЕДИЦИНА</h3>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Профессиональное обучение по международным стандартам
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Курсы</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>ТСМП Базовый</li>
                <li>ТСМП Продвинутый</li>
                <li>Инструктор ТСМП</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Информация</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>О центре</li>
                <li>Лицензии</li>
                <li>Отзывы</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="bg-transparent border-primary-foreground/20 hover:border-accent">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="bg-transparent border-primary-foreground/20 hover:border-accent">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2025 Тактическая медицина. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
