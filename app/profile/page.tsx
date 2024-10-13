"use client"

import { useAuth } from '@/hooks/useAuth';
import { AuthWrapper } from '@/components/AuthWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <AuthWrapper>
      <div className="container mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>Perfil de Entusiasta</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <strong>Nombre:</strong> {user?.displayName}
              </div>
              <div>
                <strong>Email:</strong> {user?.email}
              </div>
              <div>
                <strong>Tipo de cuenta:</strong> Entusiasta
              </div>
              <div>
                <strong>Intereses:</strong> Gaming, E-sports, Streaming
              </div>
              <div>
                <strong>Cursos inscritos:</strong>
                <ul className="list-disc list-inside">
                  <li>Estrategias avanzadas en Fortnite</li>
                  <li>Domina League of Legends</li>
                </ul>
              </div>
              <div>
                <strong>Progreso general:</strong> 60%
              </div>
              <Button asChild>
                <Link href="/courses">Explorar más cursos</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AuthWrapper>
  );
}