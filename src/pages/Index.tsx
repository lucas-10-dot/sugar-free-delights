import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Check, Gift, Heart, Sparkles, Clock, DollarSign, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-desserts.jpg";
import ebookMockup from "@/assets/ebook-mockup.png";

const Index = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <Badge className="inline-flex bg-accent text-accent-foreground">
                <Sparkles className="w-3 h-3 mr-1" />
                Oferta Especial
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Descubra <span className="text-primary">150 receitas</span> de sobremesas{" "}
                <span className="text-secondary">sem açúcar</span> deliciosas!
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Coma o que ama sem culpa — sabor, saúde e praticidade em um só lugar 💚
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Gift className="w-5 h-5 text-secondary" />
                  <span className="font-semibold">+ 150 receitas natalinas de presente 🎄</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="font-semibold">+ 4 bônus exclusivos</span>
                </div>
              </div>
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full md:w-auto"
                onClick={scrollToOffer}
              >
                Quero Minhas Receitas Agora!
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Sobremesas deliciosas sem açúcar" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl hidden md:block">
                <img src={ebookMockup} alt="eBook 150 Receitas" className="w-48" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para Quem É */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pra Quem É Esse eBook</h2>
            <p className="text-lg text-muted-foreground">Este eBook foi feito pra você que:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Ama doces, mas quer cuidar da saúde",
              "Quer opções práticas e baratas pro dia a dia",
              "Vive na correria e precisa de receitas rápidas",
              "Tem diabetes, pré-diabetes ou quer prevenir doenças",
              "Ou simplesmente quer comer bem sem abrir mão do sabor 🍮",
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por Que Cortar o Açúcar */}
      <section className="py-16 bg-destructive/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Por Que Cortar o Açúcar
            </h2>
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-destructive">🍫</span> O excesso de açúcar causa:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Cansaço constante",
                    "Inchaço e ganho de peso",
                    "Problemas de pressão e colesterol",
                    "Queda de energia e mau humor",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-destructive">✗</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
              <p className="text-lg md:text-xl font-semibold">
                💚 Com este eBook, você vai aprender a adoçar a vida de forma natural e saudável!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Que Você Vai Encontrar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            O Que Você Vai Encontrar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { icon: Star, text: "150 receitas testadas e aprovadas" },
              { icon: Heart, text: "Ingredientes simples e acessíveis" },
              { icon: Clock, text: "Tempos de preparo e porções certinhas" },
              { icon: Sparkles, text: "Sobremesas deliciosas, sem culpa e com sabor de verdade" },
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <p className="font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bônus */}
          <div className="bg-gradient-to-br from-accent/20 to-secondary/20 p-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              🎁 E Não Para Por Aí! Você Também Leva 5 Presentes Especiais:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { title: "150 Receitas Natalinas", desc: "Pra uma ceia saudável e deliciosa", icon: "🎄" },
                { title: "50 Receitas Salgadas Saudáveis", desc: "Opções práticas pro dia a dia", icon: "🍽️" },
                { title: "50 Receitas Rápidas", desc: "Perfeitas pra quem vive na correria", icon: "⚡" },
                { title: "51 Sucos Naturais Detox", desc: "Energia e bem-estar em cada copo", icon: "🥤" },
                { title: "Guia de Substitutos", desc: "Aprenda a adoçar de forma natural", icon: "📘" },
              ].map((bonus, idx) => (
                <Card key={idx} className="bg-white">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{bonus.icon}</div>
                    <h4 className="font-bold mb-2">{bonus.title}</h4>
                    <p className="text-sm text-muted-foreground">{bonus.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            🌟 Depois de Ter Esse eBook, Você Vai:
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Comer bem sem culpa",
              "Ter mais energia e disposição",
              "Cuidar da saúde sem abrir mão do prazer",
              "Economizar tempo e dinheiro",
              "Surpreender sua família com receitas incríveis",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-6 rounded-lg shadow-md">
                <Check className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            💬 O Que Quem Já Tem Está Dizendo
          </h2>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {[
                  {
                    text: "Comprei achando que seria só mais um eBook, mas me surpreendi! As receitas são práticas e muito gostosas. Hoje faço sobremesa sem medo de engordar ou subir a glicose. 💚",
                    author: "Maria L., 52 anos"
                  },
                  {
                    text: "Meu marido é diabético e sempre ficava triste sem poder comer doce. Agora ele come feliz e sem culpa! As receitas são deliciosas e fáceis de fazer. 🍰",
                    author: "Ana Paula S., 45 anos"
                  },
                  {
                    text: "Eu não sabia que era possível fazer doces tão gostosos sem açúcar! Perdi 8kg em 3 meses e continuo comendo sobremesa todo dia. Maravilhoso! ✨",
                    author: "Carla M., 38 anos"
                  },
                  {
                    text: "As receitas natalinas foram um sucesso total na família! Todo mundo adorou e ninguém sentiu diferença. Vale cada centavo! 🎄",
                    author: "Roberto F., 61 anos"
                  },
                  {
                    text: "Sou mãe de 3 filhos e estava preocupada com o consumo de açúcar deles. Agora faço essas receitas e eles amam! Inclusive os vizinhos pedem pra provar. 😍",
                    author: "Juliana R., 34 anos"
                  },
                  {
                    text: "Tinha pré-diabetes e o médico mandou cortar o açúcar. Achei que ia sofrer, mas com essas receitas está sendo tranquilo! Já melhorou muito minha glicemia. 💪",
                    author: "Marcos T., 56 anos"
                  },
                  {
                    text: "Melhor investimento que fiz! São tantas receitas que faço uma diferente a cada semana. Minha família está adorando essa mudança. 🥰",
                    author: "Fernanda C., 42 anos"
                  }
                ].map((testimonial, idx) => (
                  <CarouselItem key={idx}>
                    <Card className="border-2 border-primary/20">
                      <CardContent className="p-8">
                        <div className="flex gap-1 mb-4 justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                          ))}
                        </div>
                        <blockquote className="text-lg italic text-center mb-4">
                          "{testimonial.text}"
                        </blockquote>
                        <p className="text-center font-semibold text-muted-foreground">
                          — {testimonial.author}
                        </p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Oferta Final */}
      <section id="offer" className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              💰 Oferta Especial
            </h2>
            <Card className="border-4 border-primary shadow-2xl">
              <CardContent className="p-8 md:p-12 text-center">
                <div className="mb-8">
                  <p className="text-lg mb-4">Tudo isso por apenas</p>
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl text-muted-foreground line-through">R$ 97,00</span>
                    <Badge className="bg-destructive text-destructive-foreground text-lg px-4 py-2">
                      85% OFF
                    </Badge>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                    R$ 15,00
                  </div>
                  <p className="text-muted-foreground">
                    Menos do que uma sobremesa fora de casa 🍩
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Acesso imediato após o pagamento</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Check className="w-5 h-5 text-primary" />
                    <span>100% seguro e com garantia de 7 dias</span>
                  </div>
                </div>

                <Button 
                  variant="cta" 
                  size="xl" 
                  className="w-full md:w-auto mb-4"
                >
                  🟩 Quero Minhas Receitas Sem Açúcar Agora!
                </Button>

                <p className="text-sm text-muted-foreground">
                  Pagamento 100% seguro via Pix ou Cartão
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-6">🔒 Garantia e Segurança</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, text: "Pagamento 100% seguro (Pix ou cartão)" },
                { icon: Check, text: "Acesso automático enviado por e-mail" },
                { icon: Heart, text: "Garantia de 7 dias — se não amar, devolvemos seu dinheiro" },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <item.icon className="w-10 h-10 text-primary" />
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">🧁 Receitas Zero Açúcar</h3>
          <p className="mb-6">Transformando saúde em sabor todos os dias</p>
          <div className="space-y-2 text-sm">
            <p>📩 Dúvidas? Fale conosco pelo WhatsApp</p>
            <p className="text-background/80">© 2024 Receitas Zero Açúcar e Salgadas Saudáveis</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
