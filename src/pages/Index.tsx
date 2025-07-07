import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Eye" size={32} className="text-white" />
              <h1 className="text-2xl font-bold tracking-wide">IRIS</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="hover:text-coral-500 transition-colors"
              >
                О бренде
              </a>
              <a
                href="#catalog"
                className="hover:text-coral-500 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#contact"
                className="hover:text-coral-500 transition-colors"
              >
                Контакты
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              ВИДЕТЬ
              <br />
              <span className="text-coral-500">КРАСОТУ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Дизайнерские свечи в форме глаза. Уникальные произведения
              искусства, которые освещают ваш мир.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-coral-500 hover:bg-coral-600 text-black font-semibold px-8 py-4 text-lg"
              >
                Смотреть каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-8">О бренде</h3>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              IRIS — это больше, чем просто свечи. Это философия видения красоты
              в каждом моменте. Каждая свеча создается вручную в форме глаза,
              символизируя внимательность к деталям и способность видеть
              прекрасное в обычном.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Icon
                  name="Eye"
                  size={48}
                  className="text-coral-500 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">
                  Уникальный дизайн
                </h4>
                <p className="text-gray-400">
                  Каждая свеча — произведение искусства в форме глаза
                </p>
              </div>
              <div className="text-center">
                <Icon
                  name="Palette"
                  size={48}
                  className="text-golden-500 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Яркие цвета</h4>
                <p className="text-gray-400">
                  Насыщенные оттенки, которые привлекают внимание
                </p>
              </div>
              <div className="text-center">
                <Icon
                  name="Sparkles"
                  size={48}
                  className="text-coral-500 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold mb-2">Ручная работа</h4>
                <p className="text-gray-400">
                  Каждая свеча создается с особой заботой и вниманием
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Каталог
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for candle cards */}
            <Card className="bg-gray-800 border-gray-700 hover:border-coral-500 transition-colors">
              <CardHeader>
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/img/617d8f3e-3b8c-4844-b40a-97c088abf8db.jpg"
                    alt="Коралловый взгляд - свеча в форме глаза"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-white">Коралловый взгляд</CardTitle>
                <CardDescription className="text-gray-400">
                  Яркая свеча кораллового цвета
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white mb-4">₽2,500</p>
                <Button className="w-full bg-coral-500 hover:bg-coral-600 text-black">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-golden-500 transition-colors">
              <CardHeader>
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/img/3fd78879-32df-43c5-8f23-ae95e3f5b8a0.jpg"
                    alt="Золотое сияние - свеча в форме глаза"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-white">Золотое сияние</CardTitle>
                <CardDescription className="text-gray-400">
                  Элегантная золотая свеча
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white mb-4">₽2,800</p>
                <Button className="w-full bg-golden-500 hover:bg-golden-600 text-black">
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-colors">
              <CardHeader>
                <div className="aspect-square rounded-lg mb-4 overflow-hidden">
                  <img
                    src="/img/9899f798-51f0-4c81-aa84-fc17b7af10ec.jpg"
                    alt="Фиолетовая мистика - свеча в форме глаза"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-white">Фиолетовая мистика</CardTitle>
                <CardDescription className="text-gray-400">
                  Загадочная фиолетовая свеча
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-white mb-4">₽2,600</p>
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Контакты
            </h3>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-center">
                  Свяжитесь с нами
                </CardTitle>
                <CardDescription className="text-gray-400 text-center">
                  Готовы создать для вас уникальную свечу
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white block mb-2">Имя</label>
                    <Input
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-white block mb-2">Email</label>
                    <Input
                      className="bg-gray-700 border-gray-600 text-white"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-white block mb-2">Сообщение</label>
                  <Textarea
                    className="bg-gray-700 border-gray-600 text-white"
                    placeholder="Расскажите о своем заказе..."
                  />
                </div>
                <Button className="w-full bg-coral-500 hover:bg-coral-600 text-black text-lg py-3">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Eye" size={24} className="text-coral-500" />
            <span className="text-xl font-bold">IRIS</span>
          </div>
          <p className="text-gray-400">© 2024 IRIS. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
