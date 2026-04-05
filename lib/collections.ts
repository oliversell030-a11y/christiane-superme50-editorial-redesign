import { BookOpen, Brain, Heart, Moon } from 'lucide-react';
import type { RecipeCategory } from '@/lib/recipes';

export const homeManifest = [
  {
    title: 'Natürlich statt laut',
    description:
      'Keine hektischen Trendversprechen, sondern ruhige Impulse mit echter Alltagstauglichkeit.',
  },
  {
    title: 'Klein, aber wirksam',
    description:
      'Routinen, die leicht anfangen und genau dadurch über Wochen wirklich tragen.',
  },
  {
    title: 'Persönlich statt beliebig',
    description:
      'Die Seite soll sich wie eine kuratierte Stimme anfühlen und nicht wie ein Standard-Wellness-Baukasten.',
  },
];

export const homeThemes = [
  {
    href: '/schlaf',
    eyebrow: 'Schlaf & Entspannung',
    title: 'Ruhiger werden. Tiefer schlafen. Sanfter ankommen.',
    description:
      'Abendrituale, Kräuter und kleine Entlastungen für Nächte, in denen Kopf und Körper nicht gleichzeitig abschalten.',
    tone: 'dark',
  },
  {
    href: '/vitalitaet',
    eyebrow: 'Vitalität & Energie',
    title: 'Mehr Energie, ohne härter zu werden.',
    description:
      'Alltagstaugliche Ideen für Essen, Getränke und kleine Gewohnheiten, die wirklich Kraft zurückgeben.',
    tone: 'sage',
  },
  {
    href: '/beweglichkeit',
    eyebrow: 'Beweglichkeit',
    title: 'Geschmeidig bleiben.',
    description:
      'Sanfte Routinen für Gelenke, Rücken und die Art von Kraft, die dich im Alltag wirklich freier macht.',
    tone: 'soft',
  },
  {
    href: '/haut-haar',
    eyebrow: 'Haut, Haar & Nägel',
    title: 'Gepflegt, ruhig, strahlend.',
    description:
      'Schönheit als Form von Wohlgefühl und Selbstfürsorge, nicht als Druck und nicht als Anti-Aging-Kampf.',
    tone: 'cream',
  },
  {
    href: '/nervensystem',
    eyebrow: 'Nervensystem',
    title: 'Weniger innere Unruhe. Mehr bei dir.',
    description:
      'Atmung, Reizreduktion und Mikro-Pausen, die das System nach und nach aus dem Dauer-Modus holen.',
    tone: 'sage',
  },
];

export const recommendationCategories = [
  {
    id: 'buecher',
    title: 'Bücher & Lektüre',
    icon: BookOpen,
    items: [
      {
        title: 'Alltagstaugliche Gesundheitsratgeber',
        description:
          'Klare, gut lesbare Bücher über Schlaf, Hormone, Ernährung und innere Balance ohne unnötigen Alarmton.',
        href: 'https://www.thalia.de/',
      },
      {
        title: 'Rezepte für Frauen 50+',
        description:
          'Praktische Kochbücher mit einer freundlichen Mischung aus Genuss, Einfachheit und guter Struktur.',
      },
    ],
  },
  {
    id: 'tees',
    title: 'Tees & Nahrungsergänzung',
    icon: Moon,
    items: [
      {
        title: 'Beruhigende Abendtees',
        description:
          'Milde Kräutermischungen als ruhiger Abschluss des Tages, wenn Schlaf und Entspannung mehr Raum bekommen sollen.',
        href: 'https://www.yogi-tea.com/de/',
      },
      {
        title: 'Ausgewählte Mikronährstoffe',
        description:
          'Nicht wahllos, sondern bewusst und sparsam eingesetzt, wenn sie wirklich in den Alltag passen.',
      },
    ],
  },
  {
    id: 'alltag',
    title: 'Alltagshelfer',
    icon: Heart,
    items: [
      {
        title: 'Wärmflasche, Duft, Abendlicht',
        description:
          'Kleine Dinge, die einen Raum und damit oft auch den Körper schneller beruhigen als große Lösungen.',
      },
      {
        title: 'Sanfte Bewegungs-Tools',
        description:
          'Unaufgeregte Hilfen für Mobilität, Haltung und kleine Routinen zuhause.',
      },
    ],
  },
  {
    id: 'digital',
    title: 'Digitale Begleiter',
    icon: Brain,
    items: [
      {
        title: 'Geführte Atem- und Entspannungsübungen',
        description:
          'Kurze Formate, die nicht belehren, sondern dich freundlich wieder bei dir ankommen lassen.',
      },
      {
        title: 'Kursplattformen für gesundes Älterwerden',
        description:
          'Lernangebote in deinem Tempo, verständlich, motivierend und ohne übertriebene Selbstoptimierung.',
        href: 'https://www.udemy.com/',
      },
    ],
  },
];

export const recipes = [
  {
    slug: '5-natuerliche-schlaftrunks',
    category: 'Schlaf' as RecipeCategory,
    title: '5 natürliche Schlaftrunks für ruhige Abende',
    description:
      'Wärmende Getränke mit Kräutern und sanften Gewürzen, die den Übergang in die Nacht spürbar weicher machen.',
    image: '/images/posts/rosmarin-heilkraut-ab-50.jpg',
  },
  {
    slug: '100-gramm-formel',
    category: 'Vitalität' as RecipeCategory,
    title: 'Die 100-Gramm-Formel für entspannte Mahlzeiten',
    description:
      'Ein einfaches Küchenprinzip, das Struktur gibt, satt macht und ohne komplizierte Regeln auskommt.',
    image: '/media/hero-bg.jpg',
  },
  {
    slug: 'kraeutertee-fuer-balance',
    category: 'Balance' as RecipeCategory,
    title: 'Kräutertees für Klarheit, Ruhe und einen freundlichen Rhythmus',
    description:
      'Drei unkomplizierte Mischungen für Momente, in denen der Tag sanfter werden darf.',
    image: '/images/posts/rosmarin-heilkraut-ab-50-2.jpg',
  },
  {
    slug: 'hautfreundliche-kuechenroutine',
    category: 'Haut' as RecipeCategory,
    title: 'Eine hautfreundliche Küchenroutine mit guten Fetten und viel Farbe',
    description:
      'Kein Diätplan, sondern eine ruhige Auswahl an Zutaten, die Pflege auch von innen denken.',
    image: '/images/posts/rosmarin-heilkraut-ab-50.jpg',
  },
];

export const solisProducts = [
  {
    slug: 'green-medley',
    title: 'Solis Green Medley',
    images: ['/images/shop/solis-green-medley.jpg', '/images/shop/solis-green-medley-pulver.jpg', '/images/shop/solis-green-medley-drink.jpg'],
    href: 'https://ww1.lifeplus.com/de/de/product-details/5369/solis-green-medley',
    description: '27 nährstoffreiche Zutaten aus grünem Blattgemüse, Adaptogenen und Pflanzenextrakten. Bio, vegan, glutenfrei.',
    organic: true,
    content: `Nährstoffreiches grünes Blattgemüse, Adaptogene und erfrischende Pflanzenextrakte, das natürliche Aroma gefriergetrockneter Früchte aus biologischem Anbau: Green Medley ist für jeden das Richtige.

Reine starke Pflanzenkraft für Vitalität und natürliches Wohlbefinden
Green Medley ist eine starke Kombination natürlich nährstoffdichter Inhaltstoffe. Jeder der 27 Inhaltsstoffe wurde sorgfältig ausgewählt, um nicht nur maximale Nährstoffe, sondern auch deren optimales Zusammenspiel in einem frischen, leicht gesüßten Pulver zu erzielen. Dieses adaptogene Bio-Superfood voller natürlicher Vitamine, Mineralstoffe, Phytonährstoffe und Antioxidantien überzeugt in jeder Hinsicht.

Tipp:
Falls Sie nährstoffreiches grünes Blattgemüse noch nicht kennen, beginnen Sie mit ¼ bis zu 1/2 Messlöffel und erhöhen Sie die Menge dann im Laufe der Zeit.

Über Solis von Lifeplus
Unsere Solis Superfoods sind nach der Leben spendenden Sonne benannt und stehen für mehr Gesundheit und Wellness. Sie helfen Ihnen, sich natürlich ausgeglichen und in bester Form zu fühlen – eine Superfood-Synthese für ein Supergefühl. Wir verwenden nur die hochwertigsten, ethisch einwandfreien Inhaltsstoffe und keine künstlichen Süßstoffe für unsere reinen einzigartigen Mischungen aus biologischem Anbau. Damit unterstützen wir auch die Gemeinden in den Anbaugebieten. Das ist die reinste Kraft der Pflanzen!`,
    details: `Art.-Nr. 5369 / 171 g — 30 Portionen

Durchschnittsgehalt pro Portion (5,7 g):
Chlorella-Alge 660 mg, Moringa-Blattpulver 660 mg, Spirulina-Alge 660 mg, Himbeer-Fruchtpulver 540 mg, Maca-Wurzelpulver 300 mg, Spinat-Blattpulver 300 mg, Aloe Vera-Blattpulver 240 mg, Grünkohl-Blattpulver 240 mg, Brunnenkresse-Blattpulver 240 mg, Zitronenfruchtpulver 210 mg, Ananas-Fruchtpulver 180 mg, Klettenlabkraut 150 mg, Ackerschachtelhalm 150 mg, Löwenzahn-Blattpulver 120 mg, Gotu Kola 120 mg, Rosenwurz-Wurzelpulver 120 mg, Brokkolisprossenpulver 114 mg, Knotentangpulver 60 mg, Schisandra-Beere 60 mg, Ingwerpulver 30 mg, Mariendistelsamen 30 mg, Hagebutten-Fruchtpulver 30 mg, Zitronengras-Blattpulver 18 mg, Petersilie-Blattpulver 18 mg.

Verzehrsempfehlung: Einmal täglich einen gestrichenen 15-cc-Messlöffel (5,7 g) in 120–180 ml Wasser oder ein anderes Getränk einrühren.

Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene und abwechslungsreiche Ernährung und gesunde Lebensweise. Die angegebene empfohlene tägliche Verzehrsmenge darf nicht überschritten werden.`,
  },
  {
    slug: 'golden-milk',
    title: 'Solis Golden Milk',
    images: ['/images/shop/solis-golden-milk.jpg', '/images/shop/solis-golden-milk-pulver.jpg', '/images/shop/solis-golden-milk-drink.jpg', '/images/shop/solis-golden-milk-glas.jpg'],
    href: 'https://ww1.lifeplus.com/de/de/product-details/5379/solis-golden-milk',
    description: 'Ayurvedisch inspiriert: Kurkuma, Ashwagandha, Shiitake und wärmende Gewürze in Kokosmilch. Vegan, glutenfrei.',
    organic: false,
    content: `Ein klassisches ayurvedisches Rezept ist die Inspiration für Solis Golden Milk, ein wärmendes, aromatisches Getränk, das Ihnen hilft, sich entspannt, erfrischt und allem gewachsen zu fühlen.

Solis Golden Milk bietet durch die Kombination aus Kurkuma, KSM-66®-Ashwagandha, Glycin, Shiitake, Ingwerwurzel und einer Vielzahl synergetischer Gewürze den einzigartigen Geschmack, der beruhigend, wärmend und entspannend wirkt. Die Basis aus Kokosmilchpulver erhöht die synergetischen und sättigenden Effekte und die Bioverfügbarkeit.

Um dieses dynamische Superfood optimal zu genießen, verrühren Sie einen Messlöffel Solis Golden Milk mit warmer pflanzlicher oder herkömmlicher Milch (oder verwenden Sie einen Milchaufschäumer). Das Ergebnis ist jedes Mal ein duftendes Geschmackserlebnis. Solis Golden Milk enthält einen Hauch Stevia, schmeckt jedoch nicht süß. Sie können daher ganz nach Ihrem Geschmack Ihr bevorzugtes Süßungsmittel hinzugeben, z. B. Honig.

Oder mischen Sie Solis Golden Milk-Pulver in Milchshakes, Smoothies, Currys, Joghurts, Dressings oder Dips. Ob herzhaft oder süß: Ihrer kulinarischen Kreativität sind keine Grenzen gesetzt.

Solis Golden Milk kann zu erholsamem Schlaf beitragen, aber auch den ganzen Tag hindurch für einen köstlichen Moment der Entspannung sorgen.

*Solis Golden Milk enthält Kurkuma und kann daher Kleidung und andere Oberflächen verfärben.

Solis Golden Milk ist das einzige Solis Superfood-Pulverprodukt ohne „Bio"-Kennzeichnung. Der Grund dafür: Produkte, die Aminosäuren enthalten, sind von der „Bio"-Zertifizierung ausgeschlossen. Dies gilt unabhängig vom Anteil der Aminosäuren am Produkt und ungeachtet der Tatsache, dass Aminosäuren von Natur aus in Lebensmitteln und im menschlichen Körper vorkommen. Da die Aminosäure Glycin eine wichtige Komponente von Solis Golden Milk ist, haben wir beschlossen, auf die „Bio"-Zertifizierung zu verzichten, um diesen Inhaltsstoff im Produkt zu behalten.

Informationen zu Solis Superfoods von Lifeplus
Unsere Solis Superfoods sind nach der Leben spendenden Sonne benannt und stehen für Gesundheit und Wellness. Sie helfen Ihnen, sich natürlich ausgeglichen und in bester Form zu fühlen – eine Superfood-Synthese für ein Supergefühl. Wir verwenden nur die hochwertigsten, ethisch einwandfreien Inhaltsstoffe und keine künstlichen Süßstoffe: Das ist die reinste Kraft der Pflanzen.

Glutenfrei

Enthält 182g`,
    details: `Art.-Nr. 5379 / 182 g — 30 Portionen

Durchschnittsgehalt pro Portion (6,0 g):
Kokosmilchpulver 1800 mg, Gelbwurz-Wurzelpulver 1200 mg, Glycin 900 mg, Lúcuma-Fruchtpulver 900 mg, Shiitake-Pilzpulver 474 mg, Ashwagandha-Wurzelextrakt 300 mg, Zimtrindenpulver 240 mg, Ingwerwurzelpulver 120 mg, Kardamomsamenpulver 60 mg, Muskatsamenpulver 30 mg, Schwarzes Pfefferpulver 3 mg.

Verzehrsempfehlung: Einmal täglich einen gestrichenen 15-cc-Messlöffel (6,0 g) in 120–180 ml warme Milch oder Milchalternative einrühren.

Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene und abwechslungsreiche Ernährung und gesunde Lebensweise. Die angegebene empfohlene tägliche Verzehrsmenge darf nicht überschritten werden.`,
  },
  {
    slug: 'cacao-boost',
    title: 'Solis Cacao Boost',
    images: ['/images/shop/solis-cacao-boost.jpg', '/images/shop/solis-cacao-boost-pulver.jpg', '/images/shop/solis-cacao-boost-tasse.jpg'],
    href: 'https://ww1.lifeplus.com/de/de/product-details/5371/solis-cacao-boost',
    description: 'Bio-Rohkakao mit Maca, Reishi und Chaga. Schokoladig, nahrhaft, ohne Zucker. Bio, vegan, glutenfrei.',
    organic: true,
    content: `Aufgrund ihrer hohen Nährstoffdichte zählen Rohkakao, Maca und Reishi-Pilze zu den besten Superfoods. In dieser Mischung kombinieren wir köstlichen Bio-Rohkakao aus Ecuador mit Adaptogenen, Reishi-Pilzen, Maca sowie Zimt und Lúcuma zu einem köstlichen und vielseitigen Superfood.

Wenn Sie den Geschmack von Schokolade gerne ohne den ganzen zusätzlichen Zucker genießen, können Sie dieses Verlangen stillen, indem Sie das Pulver mit warmem Wasser, warmer Milch (oder Milchalternative) oder einfach mit Ihrem Lifeplus Daily mischen. Das schmeckt der ganzen Familie!

Probieren Sie Solis Cacao Boost gleich heute und ganz wie Sie es möchten, um Ihren Gaumen zu beglücken und das Verlangen nach Schokolade zu stillen!

Über Solis von Lifeplus
Unsere Solis Superfoods sind nach der Leben spendenden Sonne benannt und stehen für mehr Gesundheit und Wellness. Sie helfen Ihnen, sich natürlich ausgeglichen und in bester Form zu fühlen – eine Superfood-Synthese für ein Supergefühl. Wir verwenden nur die hochwertigsten, ethisch einwandfreien Inhaltsstoffe und keine künstlichen Süßstoffe für unsere reinen einzigartigen Mischungen aus biologischem Anbau. Damit unterstützen wir auch die Gemeinden in den Anbaugebieten. Das ist die reinste Kraft der Pflanzen!`,
    details: `Art.-Nr. 5371 / 210 g — 30 Portionen

Durchschnittsgehalt pro Portion (7,0 g):
Rohkakaopulver 2800 mg, Maca-Wurzelpulver 1260 mg, Chagapilz-Pulver 980 mg, Reishipilz-Pulver 980 mg, Lucuma-Fruchtpulver 700 mg, Zimtrindenpulver 280 mg.

Verzehrsempfehlung: Einmal täglich einen gestrichenen 15-cc-Messlöffel (7,0 g) in 120–180 ml heißes Wasser, Milch oder Milchalternative einrühren.

Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene und abwechslungsreiche Ernährung und gesunde Lebensweise. Die angegebene empfohlene tägliche Verzehrsmenge darf nicht überschritten werden.`,
  },
  {
    slug: 'purple-flash',
    title: 'Solis Purple Flash',
    images: ['/images/shop/solis-purple-flash.jpg', '/images/shop/solis-purple-flash-pulver.jpg', '/images/shop/solis-purple-flash-drink.jpg'],
    href: 'https://ww1.lifeplus.com/de/de/product-details/5370/solis-purple-flash',
    description: 'Geballte Beerenkraft: Aronia, Açaí, Heidelbeere, Maqui, Granatapfel und mehr. Bio, vegan, glutenfrei.',
    organic: true,
    content: `Vollgepackt mit Beeren aus nährstoffreichem Boden und natürlich auftretenden Vitaminen und Mineralstoffen: Purple Flash ist ein natürlich gutes Superfood-Pulver.

Starten Sie durch – mit idealen Antioxidantien
Purple Flash Superfood-Pulver kombiniert eine einzigartige, köstliche Mischung aus einigen der nährstoffreichsten Superfrüchte – Aroniabeere, Açai-Beere, Blaubeere, Maqui-Beere, Granatapfel, Brombeere, schwarze Johannisbeere, schwarzer Holunder, Traubensaftpulver und die erstaunliche Baobab-Frucht aus Afrika.

Superfrüchte sind nährstoffdicht, fördern das gesunde Erscheinungsbild und das Wohlbefinden und unterstützen die Gesundheit in allen Lebensabschnitten. Beeren stehen auf der Liste der Superfrüchte oft ganz oben, denn sie haben einen hohen Gehalt an Antioxidantien, wie an ihren intensiven Farben und dem zumeist süßen Geschmack zu erkennen ist.

Purple Flash enthält keine Süßstoffe oder künstlichen Aromen. Der ganze Geschmack kommt von den gefriergetrockneten Beeren, die in der Mischung enthalten sind. Purple Flash ist super und gibt Ihrer Routine ganz unkompliziert einen Energieschub. Mischen Sie es einfach mit Wasser, Lifeplus Daily, Smoothies oder sogar Jogurt! Nahrhaft für Erwachsene und für Kinder.

Starten Sie durch mit Purple Flash – alle Vorteile einiger der nährstoffdichtesten Früchte der Welt, einfach in einem Teelöffel.

Über Solis von Lifeplus
Unsere Solis Superfoods sind nach der Leben spendenden Sonne benannt und stehen für mehr Gesundheit und Wellness. Sie helfen Ihnen, sich natürlich ausgeglichen und in bester Form zu fühlen – eine Superfood-Synthese für ein Supergefühl. Wir verwenden nur die hochwertigsten, ethisch einwandfreien Inhaltsstoffe und keine künstlichen Süßstoffe für unsere reinen einzigartigen Mischungen aus biologischem Anbau. Damit unterstützen wir auch die Gemeinden in den Anbaugebieten. Das ist die reinste Kraft der Pflanzen!

Glutenfrei

Enthält 192 g`,
    details: `Art.-Nr. 5370 / 192 g — 30 Portionen

Durchschnittsgehalt pro Portion (6,4 g):
Heidelbeerpulver 1450 mg, Aroniabeerenpulver 870 mg, Granatapfel-Pulver 870 mg, Schwarze Johannisbeere 580 mg, Holunder-Saftpulver 580 mg, Maqui-Beerenpulver 580 mg, Löwenmähnenpilz-Pulver 300 mg, Açaí-Beerenpulver 290 mg, Baobab-Fruchtfleischpulver 290 mg, Brombeerpulver 290 mg, Traubensaftpulver 290 mg.

Verzehrsempfehlung: Einmal täglich einen gestrichenen 15-cc-Messlöffel (6,4 g) in 120–180 ml Wasser oder ein anderes Getränk einrühren.

Nahrungsergänzungsmittel sind kein Ersatz für eine ausgewogene und abwechslungsreiche Ernährung und gesunde Lebensweise. Die angegebene empfohlene tägliche Verzehrsmenge darf nicht überschritten werden.`,
  },
];
