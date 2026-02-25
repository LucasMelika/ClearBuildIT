import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DocumentIcon, CheckIcon } from '@heroicons/react/24/outline';

const resources = [
  {
    id: 1,
    title: 'Web Development Checklist 2024',
    description: 'Volledige checklist voor het opzetten van professionele web projecten',
    category: 'Guide',
    format: 'PDF',
    image: '✅',
    topics: ['Planning', 'Design', 'Development', 'Testing', 'Deployment', 'Maintenance'],
    download: '#'
  },
  {
    id: 2,
    title: 'React Performance Optimization Guide',
    description: 'Stap-voor-stap gids om je React apps sneller te maken',
    category: 'Tutorial',
    format: 'Article',
    image: '⚡',
    topics: ['Code Splitting', 'Lazy Loading', 'Memoization', 'Bundle Optimization'],
    download: '#'
  },
  {
    id: 3,
    title: 'Node.js Security Checklist',
    description: 'Zorg dat je Node.js applicatie veilig is tegen common threats',
    category: 'Checklist',
    format: 'PDF',
    image: '🔒',
    topics: ['Authentication', 'Input Validation', 'Database Security', 'API Protection'],
    download: '#'
  },
  {
    id: 4,
    title: 'Database Design Best Practices',
    description: 'Leer hoe je schaalbare, efficiënte databases ontwerpt',
    category: 'Guide',
    format: 'Video',
    image: '🗄️',
    topics: ['Schema Design', 'Indexing', 'Query Optimization', 'Scaling'],
    download: '#'
  },
  {
    id: 5,
    title: 'Deployment & DevOps Quick Start',
    description: 'Zet jouw app snel live met moderne DevOps practices',
    category: 'Tutorial',
    format: 'Article',
    image: '🚀',
    topics: ['CI/CD', 'Docker', 'Kubernetes', 'Monitoring'],
    download: '#'
  },
  {
    id: 6,
    title: 'SaaS Architecture Whitepaper',
    description: 'Alles wat je moet weten over het bouwen van schaalbare SaaS platforms',
    category: 'Whitepaper',
    format: 'PDF',
    image: '📊',
    topics: ['Multi-tenancy', 'Scalability', 'Security', 'Best Practices'],
    download: '#'
  },
  {
    id: 7,
    title: 'API Design Best Practices',
    description: 'Ontwerp REST APIs die schaalbaar zijn en gemakkelijk te onderhouden',
    category: 'Guide',
    format: 'Article',
    image: '🔌',
    topics: ['REST Conventions', 'Versioning', 'Error Handling', 'Documentation'],
    download: '#'
  },
  {
    id: 8,
    title: 'Testing Strategy for Modern Apps',
    description: 'Uitgebreide gids over unit testing, integration testing en E2E testing',
    category: 'Tutorial',
    format: 'Video',
    image: '🧪',
    topics: ['Unit Tests', 'Integration Tests', 'E2E Tests', 'Coverage'],
    download: '#'
  }
];

const categories = ['Alle', 'Guide', 'Tutorial', 'Checklist', 'Whitepaper'];

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = React.useState('Alle');

  const filteredResources = selectedCategory === 'Alle'
    ? resources
    : resources.filter(r => r.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Resources & Guides - ClearBuildIT | Free Downloads</title>
        <meta name="description" content="Gratis resources, guides en checklists voor web development. PDFs, tutorials en best practices." />
        <meta name="keywords" content="resources, guides, web development, checklists, tutorials, best practices" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-3">Resources & Guides</h1>
            <p className="text-lg text-purple-100">Gratis downloads en tutorials voor developers</p>
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
                    ? 'bg-purple-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Resources Grid */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <div
                key={resource.id}
                className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Image */}
                <div className="h-32 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-5xl">
                  {resource.image}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded">
                      {resource.category}
                    </span>
                    <span className="text-xs text-neutral-500 flex items-center gap-1">
                      <DocumentIcon className="w-3 h-3" />
                      {resource.format}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{resource.title}</h3>
                  <p className="text-sm text-neutral-600 mb-4 flex-1">{resource.description}</p>

                  {/* Topics */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {resource.topics.map((topic, idx) => (
                        <span key={idx} className="px-2 py-1 bg-neutral-100 text-neutral-700 text-xs rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Download Button */}
                  <a
                    href={resource.download}
                    className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center text-sm"
                  >
                    Download nu
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600">Geen resources in deze categorie.</p>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="bg-purple-50 border-t border-purple-200 py-12">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">📬 Ontvang tips in je mailbox</h3>
            <p className="text-neutral-600 mb-6">Geen spam, puur waardevolle web development tips en resources.</p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="jouw@email.com"
                className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg text-sm focus:outline-none focus:border-purple-600"
              />
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
