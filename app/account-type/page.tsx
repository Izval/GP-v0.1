"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const accountTypes = [
  { id: 'player', label: 'Jugador' },
  { id: 'organization', label: 'Organización' },
  { id: 'investor', label: 'Inversionista' },
  { id: 'professional', label: 'Profesional' },
  { id: 'enthusiast', label: 'Entusiasta' },
];

export default function AccountTypePage() {
  const [selectedType, setSelectedType] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedType) {
      console.log("Selected account type:", selectedType);
      router.push('/courses');
    } else {
      console.error("Please select an account type");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Elige tu tipo de cuenta</CardTitle>
          <CardDescription>Selecciona el tipo de cuenta que mejor se adapte a ti</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <RadioGroup onValueChange={setSelectedType} className="space-y-4">
              {accountTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={type.id} id={type.id} />
                  <Label htmlFor={type.id}>{type.label}</Label>
                </div>
              ))}
            </RadioGroup>
            <Button type="submit" className="w-full mt-6">Continuar</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}