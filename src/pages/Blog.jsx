import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalendarIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const articles = [
  {
    id: 1,
    title: 'React 19: Wat zijn de belangrijkste verbeteringen?',
    excerpt: 'Ontdek de nieuwe features in React 19 en hoe je deze kunt gebruiken in je projecten.',
    category: 'Frontend',
    author: 'Lucas Melika',
    date: '2024-02-20',
    readTime: '8 min',
    image: '⚛️',
    content: 'React 19 brengt aanzienlijke verbeteringen in performance...'
  },
  {
    id: 2,
    title: 'Node.js best practices voor productie-ready applicaties',
    excerpt: 'Leer hoe je veilige, schaalbare Node.js applicaties bouwt die klaar zijn voor productie.',
    category: 'Backend',
    author: 'Lucas Melika',
    date: '2024-02-15',
    readTime: '12 min',
    image: '🟢',
    content: 'Node.js is populair, maar vereist voorzichtigheid in productie...'
  },
  {
    id: 3,
    title: 'Database optimalisatie: PostgreSQL tips & tricks',
    excerpt: 'Verbeter je query performance en reduceer load met deze PostgreSQL optimalisatiestrategieën.',
    category: 'Database',
    author: 'Lucas Melika',
    date: '2024-02-10',
    readTime: '10 min',
    image: '🗄️',
    content: 'Een goed geoptimaliseerde database is cruciaal voor snelle applicaties...'
  },
  {
    id: 4,
    title: 'SaaS security: Hoe bescherm je klantdata?',
    excerpt: 'Essentieel security checklist voor SaaS platforms met encryption, auth, en compliance.',
    category: 'Security',
    author: 'Lucas Melika',
    date: '2024-02-05',
    readTime: '11 min',
    image: '🔒',
    content: 'Klantdata bescherming is je topprioriteit in SaaS...'
  },
  {
    id: 5,
    title: 'Docker & Kubernetes: Containerisatie voor beginners',
    excerpt: 'Leer de basics van Docker en Kubernetes en hoe je applicaties ervan kunt profiteren.',
    category: 'DevOps',
    author: 'Lucas Melika',
    date: '2024-01-30',
    readTime: '9 min',
    image: '🐳',
    content: 'Containers revolutioneren hoe we software deployeren...'
  },
  {
    id: 6,
    title: 'API design patterns: REST vs GraphQL vs gRPC',
    excerpt: 'Vergelijk de voordelen en nadelen van populaire API architecturen.',
    category: 'Architecture',
    author: 'Lucas Melika',
    date: '2024-01-25',
    readTime: '13 min',
    image: '🔌',
    content: 'Het kiezen van de juiste API architecture is cruciaal...'
  }
];

const categories = ['Alle', 'Frontend', 'Backend', 'Database', 'Security', 'DevOps', 'Architecture'];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Alle');

  const filteredArticles = selectedCategory === 'Alle' 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog - ClearBuildIT | Web Development Tips & Tutorials</title>
        <meta name="description" content="Lees ons blog over React, Node.js, security en meer. Tips, best practices en tutorials voor developers." />
        <meta name="keywords" content="blog, web development, React, Node.js, JavaScript, tutorials" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-3">Blog & Resources</h1>
            <p className="text-lg text-green-100">Web development tips, tutorials en best practices</p>
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-green-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <article
                key={article.id}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center text-6xl">
                  {article.image}
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-neutral-500">{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100 pt-3">
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('nl-NL')}
                    </span>
                    <button className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-1">
                      Lees meer <ArrowRightIcon className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">Geen artikelen in deze categorie.</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
