import { Instagram, Youtube, Store, Dumbbell, Trophy, Users } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white bg-[url('/gym-texture.png')] bg-repeat">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0a0a0a] z-10" />
        <div className="relative z-20 space-y-12 max-w-4xl mx-auto">
          <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-8 border-yellow-600/30 shadow-2xl shadow-yellow-600/20">
            <Image
              src="/perfil.jpeg"
              alt="Bruxo Consultoria"
              width={192}
              height={192}
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-500 font-[impact] tracking-wider">
              BRUXO CONSULTORIA
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-xl md:text-2xl text-zinc-300 font-semibold">
              <span className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                Campeão Brasileiro
              </span>
              <span className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-500" />
                Sul Americano - WFF
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg text-zinc-400">
              <Users className="w-5 h-5 text-yellow-500" />
              Mais de 3.000 alunos atendidos
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 bg-black/40 backdrop-blur-sm border-y border-yellow-900/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            <SocialLink 
              href="https://www.youtube.com/@leonardo_bruxo" 
              icon={<Youtube className="w-6 h-6 text-red-500" />} 
              text="Canal do Bruxo" 
            />
            <SocialLink 
              href="https://api.whatsapp.com/send?phone=5547991294984&text=Olá,%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria" 
              icon={<Dumbbell className="w-6 h-6 text-green-500" />} 
              text="Minha Consultoria" 
            />
            <SocialLink 
              href="https://api.whatsapp.com/send?phone=595992815361&text=Ola%20vim%20do%20Instagram%20do%20BRUXO%20e%20gostaria%20de%20receber%20a%20tabela" 
              icon={<Store className="w-6 h-6 text-green-500" />} 
              text="Atomic Pharma Oficial" 
            />
            <SocialLink 
              href="https://www.instagram.com/b.r.u.x.o.leo/" 
              icon={<Instagram className="w-6 h-6 text-purple-500" />} 
              text="Meu Instagram" 
            />
            <SocialLink 
              href="https://www.tiktok.com/@b_r_u_x_o1" 
              icon={<Store className="w-6 h-6 text-cyan-500" />} 
              text="TikTok" 
            />
            <SocialLink 
              href="https://www.instagram.com/moda.surfbnu/" 
              icon={<Store className="w-6 h-6 text-blue-500" />} 
              text="Loja Moda Surf" 
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/gym-pattern.png')] opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 relative">
          <h2 className="text-4xl md:text-5xl font-[impact] text-center mb-16 text-yellow-500 tracking-wider">
            NOSSOS SERVIÇOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Consultoria Online"
              description="Treinamento personalizado e acompanhamento nutricional para alcançar seus objetivos"
              icon={<Dumbbell className="w-8 h-8 text-yellow-500" />}
            />
            <ServiceCard
              title="Personal Training"
              description="Treinos presenciais exclusivos com metodologia comprovada"
              icon={<Trophy className="w-8 h-8 text-yellow-500" />}
            />
            <ServiceCard
              title="Avaliação Física"
              description="Análise completa do seu corpo e definição de metas realistas"
              icon={<Users className="w-8 h-8 text-yellow-500" />}
            />
            <ServiceCard
              title="Planos Nutricionais"
              description="Dietas personalizadas baseadas no seu metabolismo e rotina"
              icon={<Store className="w-8 h-8 text-yellow-500" />}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center border-t border-yellow-900/20">
        <div className="space-y-2">
          <p className="text-zinc-500">© 2024 Bruxo Consultoria. Todos os direitos reservados.</p>
          <p className="text-zinc-600 text-sm">
            Desenvolvido por{" "}
            <a 
              href="https://instagram.com/douuglinha95" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-yellow-600 hover:text-yellow-500 transition-colors"
            >
              DGSolution
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

const SocialLink = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => (
  <a
    href={href}
    className="flex items-center gap-4 p-5 bg-zinc-900/80 backdrop-blur-sm rounded border border-yellow-900/20 hover:bg-zinc-800/80 transition-all hover:scale-[1.02] hover:border-yellow-600/30 group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="p-2 bg-black/50 rounded-full group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <span className="text-lg font-medium">{text}</span>
  </a>
);

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
  <div className="p-8 bg-zinc-900/80 backdrop-blur-sm rounded border border-yellow-900/20 hover:bg-zinc-800/80 transition-all hover:scale-[1.02] hover:border-yellow-600/30 group">
    <div className="p-3 bg-black/50 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-[impact] tracking-wide mb-3 text-yellow-500">{title}</h3>
    <p className="text-zinc-300">{description}</p>
  </div>
);
