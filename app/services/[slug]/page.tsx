import React from 'react';
import { getServiceBySlug } from '@/data/servicesData';
import { ServiceDetailClient } from '@/components/services/ServiceDetailClient';
import { notFound } from 'next/navigation';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}

// Generate static params for all services
export async function generateStaticParams() {
  const { servicesData } = await import('@/data/servicesData');
  
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} - Huzaifa Khan`,
    description: service.tagline,
    keywords: `${service.title}, ${service.category}, blockchain development, smart contracts, Web3`,
    openGraph: {
      title: `${service.title} - Professional Blockchain Development`,
      description: service.tagline,
      images: [service.heroImage],
    },
  };
}