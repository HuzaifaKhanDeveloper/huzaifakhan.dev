'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ServiceDetail } from './ServiceDetail';
import { ServiceData } from '@/data/servicesData';

interface ServiceDetailClientProps {
  service: ServiceData;
}

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push('/services');
  };

  return (
    <ServiceDetail 
      service={service} 
      onBack={handleBack}
    />
  );
} 