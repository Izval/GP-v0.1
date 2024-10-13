import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gradient-to-b from-background to-secondary">
      <h1 className="text-4xl font-bold mb-6">Bienvenido a GamePath</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Descubre cursos de gaming impartidos por expertos y mejora tus habilidades
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/auth">Iniciar sesión</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/courses">Explorar cursos</Link>
        </Button>
      </div>
    </div>
  );
}