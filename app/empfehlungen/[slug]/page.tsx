'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ChevronDown, ExternalLink } from 'lucide-react';
import { solisProducts } from '@/lib/collections';

export default function SolisProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = solisProducts.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const heroImage = product.images[product.images.length - 1] || product.images[0];

  return (
    <>
      <section className="pt-8 md:pt-10">
        <div className="mx-auto w-[min(1120px,calc(100%-24px))] md:w-[min(1120px,calc(100%-40px))]">
          <Link
            href="/empfehlungen"
            className="mb-6 inline-flex items-center gap-2 text-[0.76rem] uppercase tracking-[0.16em] text-goldAccent transition-colors hover:text-textPrimary"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Zurück zu Empfehlungen
          </Link>

          <div className="relative w-full aspect-[21/9] overflow-hidden rounded-[2rem]">
            <Image
              src={heroImage}
              alt={product.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F1] via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto -mt-16 max-w-4xl rounded-[2rem] bg-[#FAF6F1] px-8 py-10 md:px-12 md:py-14">
            <span className="eyebrow">Solis Superfoods</span>
            <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1] tracking-[-0.04em] text-goldAccent">
              {product.title}
            </h1>
            <p className="mt-4 text-base leading-8 text-textMuted">
              {product.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {['Vegan', 'Glutenfrei', '30 Portionen'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-goldAccent/30 px-3 py-1 text-[0.7rem] uppercase tracking-[0.12em] text-textMuted"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-goldAccent px-6 py-3 text-[0.76rem] uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
              >
                Im Shop ansehen
                <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              {product.images.map((image, index) => (
                <button
                  key={`${product.slug}-${index}`}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-square overflow-hidden rounded-[1.4rem]"
                >
                  <Image
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto w-[min(760px,calc(100%-24px))] md:w-[min(760px,calc(100%-40px))]">
          <div className="rounded-[2rem] bg-[#FAF6F1] px-8 py-10">
            <div className="article-rich">
              {product.content?.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <button
              type="button"
              onClick={() => setDetailsOpen(!detailsOpen)}
              className="flex w-full items-center justify-between rounded-[1.5rem] border border-line/60 bg-surface/80 p-5 shadow-panel transition-colors hover:bg-surface"
            >
              <span className="text-[0.76rem] uppercase tracking-[0.16em] text-goldAccent">
                Zutaten & Nährwerte
              </span>
              <ChevronDown
                className={`h-5 w-5 text-goldAccent transition-transform ${detailsOpen ? 'rotate-180' : ''}`}
                strokeWidth={1.5}
              />
            </button>
            {detailsOpen && (
              <div className="mt-1 whitespace-pre-line rounded-b-[1.5rem] border border-t-0 border-goldAccent/20 bg-surface/60 p-5 text-sm leading-7 text-textMuted">
                {product.details}
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedImage ? (
        <button
          type="button"
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-6"
        >
          <div className="relative h-full max-h-[88vh] w-full max-w-5xl">
            <Image
              src={selectedImage}
              alt={product.title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </button>
      ) : null}
    </>
  );
}
