"use client"

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  instructor: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollection = collection(db, 'courses');
      const coursesSnapshot = await getDocs(coursesCollection);
      const coursesList = coursesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Course));
      setCourses(coursesList);
    };

    fetchCourses();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Cursos disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>Por {course.instructor}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{course.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-lg font-semibold">${course.price}</span>
              <Button asChild>
                <Link href={`/courses/${course.id}`}>Ver detalles</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}