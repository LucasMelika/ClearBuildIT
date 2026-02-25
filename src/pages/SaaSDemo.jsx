

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaChartBar, FaFileInvoice, FaExchangeAlt, FaUsers, FaCog, FaFileAlt, FaTimes, FaBell } from 'react-icons/fa';
import LoadingSkeleton from '../components/LoadingSkeleton';



const TABS = [
  { key: 'dashboard', label: 'Dashboard', icon: <FaChartBar /> },
  { key: 'facturen', label: 'Facturen', icon: <FaFileInvoice /> },
  { key: 'transacties', label: 'Transacties', icon: <FaExchangeAlt /> },
  { key: 'klanten', label: 'Klanten', icon: <FaUsers /> },
  { key: 'rapportages', label: 'Rapportages', icon: <FaFileAlt /> },
  { key: 'instellingen', label: 'Instellingen', icon: <FaCog /> },
];

export default function SaaSDemo() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) return <LoadingSkeleton />;
  
  return <SaaSDemoContent />;
}

function SaaSDemoContent() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notification, setNotification] = useState(null);

  // Demo notificatie functie voor child components
  const showDemoNotification = msg => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 2000);
  };

  function DashboardView() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Boekhouding Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start border-l-4 border-green-400">
          <span className="text-xs text-neutral-500 mb-1">Openstaande facturen</span>
          <span className="text-2xl font-bold text-green-700">5</span>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start border-l-4 border-blue-400">
          <span className="text-xs text-neutral-500 mb-1">Laatste omzet</span>
          <span className="text-2xl font-bold text-blue-700">€ 3.200</span>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start border-l-4 border-purple-400">
          <span className="text-xs text-neutral-500 mb-1">Te ontvangen</span>
          <span className="text-2xl font-bold text-purple-700">€ 1.100</span>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="font-semibold text-neutral-700 mb-2">Laatste transacties</div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-neutral-500 text-left">
              <th className="py-1">Datum</th>
              <th className="py-1">Omschrijving</th>
              <th className="py-1">Bedrag</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-1">8 dec 2025</td>
              <td className="py-1">Factuur #1023 betaald</td>
              <td className="py-1 text-green-700">+€ 1.200</td>
            </tr>
            <tr>
              <td className="py-1">7 dec 2025</td>
              <td className="py-1">Inkoop kantoorartikelen</td>
              <td className="py-1 text-red-500">-€ 150</td>
            </tr>
            <tr>
              <td className="py-1">6 dec 2025</td>
              <td className="py-1">Factuur #1022 verstuurd</td>
              <td className="py-1 text-green-700">+€ 800</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FacturenView() {
  const [showModal, setShowModal] = useState(false);
  const [showInvoice, setShowInvoice] = useState(null); // null of factuurnr
  const invoiceData = {
    '#1023': {
      nummer: '#1023', klant: 'Acme BV', bedrag: '€ 1.200', status: 'Betaald', datum: '1 dec 2025', vervaldatum: '15 dec 2025',
      regels: [
        { omschrijving: 'Consultancy uren', aantal: 8, prijs: '€ 150', totaal: '€ 1.200' }
      ]
    },
    '#1022': {
      nummer: '#1022', klant: 'BetaTech', bedrag: '€ 800', status: 'Openstaand', datum: '2 dec 2025', vervaldatum: '16 dec 2025',
      regels: [
        { omschrijving: 'Webapplicatie', aantal: 1, prijs: '€ 800', totaal: '€ 800' }
      ]
    },
    '#1021': {
      nummer: '#1021', klant: 'Delta NV', bedrag: '€ 1.100', status: 'Te laat', datum: '10 nov 2025', vervaldatum: '24 nov 2025',
      regels: [
        { omschrijving: 'Onderhoud', aantal: 2, prijs: '€ 550', totaal: '€ 1.100' }
      ]
    }
  };
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Facturen</h2>
      <div className="bg-white rounded-2xl shadow p-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-neutral-500 text-left">
              <th>Factuurnr</th>
              <th>Klant</th>
              <th>Bedrag</th>
              <th>Status</th>
              <th>Actie</th>
            </tr>
          </thead>
          <tbody>
            {Object.values(invoiceData).map(inv => (
              <tr className="border-t" key={inv.nummer}>
                <td>{inv.nummer}</td>
                <td>{inv.klant}</td>
                <td>{inv.bedrag}</td>
                <td><span className={
                  inv.status === 'Betaald' ? 'text-green-700 font-semibold' :
                  inv.status === 'Openstaand' ? 'text-yellow-600 font-semibold' :
                  'text-red-600 font-semibold'}>{inv.status}</span></td>
                <td><button className="text-blue-600 hover:underline" onClick={() => setShowInvoice(inv.nummer)}>Bekijk</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-6 px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700" onClick={() => setShowModal(true)}>Nieuwe factuur</button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-600" onClick={() => setShowModal(false)}><FaTimes /></button>
            <h3 className="text-xl font-bold mb-4 text-green-700">Nieuwe factuur aanmaken</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Klant</label>
                <input className="w-full border rounded px-3 py-2" placeholder="Klantnaam" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Bedrag</label>
                <input className="w-full border rounded px-3 py-2" placeholder="€ 0,00" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Omschrijving</label>
                <input className="w-full border rounded px-3 py-2" placeholder="Omschrijving" />
              </div>
              <button type="button" className="w-full px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700" onClick={() => setShowModal(false)}>Factuur aanmaken (demo)</button>
            </form>
          </div>
        </div>
      )}
      {showInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative">
            <button className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-600" onClick={() => setShowInvoice(null)}><FaTimes /></button>
            <h3 className="text-xl font-bold mb-4 text-green-700">Factuurvoorbeeld {invoiceData[showInvoice].nummer}</h3>
            <div className="mb-2 text-neutral-700 flex flex-col md:flex-row md:justify-between">
              <div>
                <div className="font-semibold">{invoiceData[showInvoice].klant}</div>
                <div className="text-sm">Factuurdatum: {invoiceData[showInvoice].datum}</div>
                <div className="text-sm">Vervaldatum: {invoiceData[showInvoice].vervaldatum}</div>
              </div>
              <div className="mt-2 md:mt-0">
                <div className="text-sm">Status: <span className={
                  invoiceData[showInvoice].status === 'Betaald' ? 'text-green-700 font-semibold' :
                  invoiceData[showInvoice].status === 'Openstaand' ? 'text-yellow-600 font-semibold' :
                  'text-red-600 font-semibold'}>{invoiceData[showInvoice].status}</span></div>
                <div className="text-sm font-bold">Totaal: {invoiceData[showInvoice].bedrag}</div>
              </div>
            </div>
            <table className="w-full text-sm my-4">
              <thead>
                <tr className="text-neutral-500 text-left">
                  <th>Omschrijving</th>
                  <th>Aantal</th>
                  <th>Prijs</th>
                  <th>Totaal</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData[showInvoice].regels.map((regel, i) => (
                  <tr key={i} className="border-t">
                    <td>{regel.omschrijving}</td>
                    <td>{regel.aantal}</td>
                    <td>{regel.prijs}</td>
                    <td>{regel.totaal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right mt-4">
              <button className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700" onClick={() => setShowInvoice(null)}>Sluiten</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TransactiesView() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Transacties</h2>
      <div className="bg-white rounded-2xl shadow p-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-neutral-500 text-left">
              <th>Datum</th>
              <th>Omschrijving</th>
              <th>Bedrag</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td>8 dec 2025</td>
              <td>Factuur #1023 betaald</td>
              <td className="text-green-700">+€ 1.200</td>
            </tr>
            <tr>
              <td>7 dec 2025</td>
              <td>Inkoop kantoorartikelen</td>
              <td className="text-red-500">-€ 150</td>
            </tr>
            <tr>
              <td>6 dec 2025</td>
              <td>Factuur #1022 verstuurd</td>
              <td className="text-green-700">+€ 800</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function KlantenView() {
  const [showModal, setShowModal] = useState(false);
  const [showKlant, setShowKlant] = useState(null);
  const klanten = [
    { naam: 'Jan de Vries', email: 'jan@acme.nl', bedrijf: 'Acme BV' },
    { naam: 'Anna Bakker', email: 'anna@betatech.com', bedrijf: 'BetaTech' },
    { naam: 'Sam Willems', email: 'sam@delta.com', bedrijf: 'Delta NV' },
  ];
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Klanten</h2>
      <div className="bg-white rounded-2xl shadow p-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-neutral-500 text-left">
              <th>Naam</th>
              <th>Email</th>
              <th>Bedrijf</th>
              <th>Actie</th>
            </tr>
          </thead>
          <tbody>
            {klanten.map((klant, i) => (
              <tr className="border-t" key={klant.email}>
                <td>{klant.naam}</td>
                <td>{klant.email}</td>
                <td>{klant.bedrijf}</td>
                <td><button className="text-blue-600 hover:underline" onClick={() => setShowKlant(klant)}>Bekijk</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="mt-6 px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700" onClick={() => setShowModal(true)}>Nieuwe klant</button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-600" onClick={() => setShowModal(false)}><FaTimes /></button>
            <h3 className="text-xl font-bold mb-4 text-green-700">Nieuwe klant toevoegen</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Naam</label>
                <input className="w-full border rounded px-3 py-2" placeholder="Naam" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input className="w-full border rounded px-3 py-2" placeholder="Email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Bedrijf</label>
                <input className="w-full border rounded px-3 py-2" placeholder="Bedrijfsnaam" />
              </div>
              <button type="button" className="w-full px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700" onClick={() => setShowModal(false)}>Klant toevoegen (demo)</button>
            </form>
          </div>
        </div>
      )}
      {showKlant && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-600" onClick={() => setShowKlant(null)}><FaTimes /></button>
            <h3 className="text-xl font-bold mb-4 text-green-700">Klantpagina (demo)</h3>
            <div className="mb-2"><span className="font-semibold">Naam:</span> {showKlant.naam}</div>
            <div className="mb-2"><span className="font-semibold">Email:</span> {showKlant.email}</div>
            <div className="mb-2"><span className="font-semibold">Bedrijf:</span> {showKlant.bedrijf}</div>
            <div className="mt-4 text-right">
              <button className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700" onClick={() => setShowKlant(null)}>Sluiten</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
function RapportagesView() {
  const [showExport, setShowExport] = useState(false);
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Rapportages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="font-semibold text-neutral-700 mb-2">Omzet per maand</div>
          <div className="w-full h-32 bg-gradient-to-r from-green-100 via-green-200 to-green-100 rounded-lg relative overflow-hidden mb-2">
            <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
              <polyline points="0,50 30,40 60,30 90,35 120,20 150,15 200,10" fill="none" stroke="#22c55e" strokeWidth="3" />
            </svg>
          </div>
          <div className="text-sm text-neutral-500">Totaal: € 19.500</div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="font-semibold text-neutral-700 mb-2">Kosten per maand</div>
          <div className="w-full h-32 bg-gradient-to-r from-red-100 via-red-200 to-red-100 rounded-lg relative overflow-hidden mb-2">
            <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
              <polyline points="0,40 30,30 60,35 90,25 120,30 150,20 200,25" fill="none" stroke="#ef4444" strokeWidth="3" />
            </svg>
          </div>
          <div className="text-sm text-neutral-500">Totaal: € 7.200</div>
        </div>
      </div>
      <button className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700" onClick={() => setShowExport(true)}>Exporteer rapportage</button>
      {showExport && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-600" onClick={() => setShowExport(false)}><FaTimes /></button>
            <h3 className="text-xl font-bold mb-4 text-green-700">Rapportage exporteren</h3>
            <div className="mb-4 text-neutral-700">De rapportage is als voorbeeld geëxporteerd.<br/>Download: <span className="underline text-blue-600 cursor-pointer">rapportage-demo.pdf</span></div>
            <button className="w-full px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700" onClick={() => setShowExport(false)}>Sluiten</button>
          </div>
        </div>
      )}
    </div>
  );
}

function InstellingenView() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Instellingen</h2>
      <form className="space-y-4" onSubmit={e => { e.preventDefault(); setSaved(true); setTimeout(() => setSaved(false), 2000); }}>
        <div>
          <label className="block text-sm font-medium mb-1">Bedrijfsnaam</label>
          <input className="w-full border rounded px-3 py-2" defaultValue="Boekhouding Demo BV" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">BTW-nummer</label>
          <input className="w-full border rounded px-3 py-2" defaultValue="NL123456789B01" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Bankkoppeling</label>
          <select className="w-full border rounded px-3 py-2">
            <option>ING</option>
            <option>Rabobank</option>
            <option>ABN AMRO</option>
            <option>Knab</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Gebruikersbeheer</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Alleen beheerder</option>
            <option>Beheerder & medewerkers</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Thema</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Licht</option>
            <option>Donker</option>
          </select>
        </div>
        <button type="submit" className="px-4 py-2 rounded bg-green-600 text-white font-semibold hover:bg-green-700">Opslaan</button>
        {saved && <div className="text-green-700 font-semibold mt-2">Instellingen opgeslagen (demo)</div>}
      </form>
    </div>
  );
}

  let Content;
  if (activeTab === 'dashboard') Content = <DashboardView onShowNotification={showDemoNotification} />;
  else if (activeTab === 'facturen') Content = <FacturenView onShowNotification={showDemoNotification} />;
  else if (activeTab === 'transacties') Content = <TransactiesView onShowNotification={showDemoNotification} />;
  else if (activeTab === 'klanten') Content = <KlantenView onShowNotification={showDemoNotification} />;
  else if (activeTab === 'rapportages') Content = <RapportagesView onShowNotification={showDemoNotification} />;
  else if (activeTab === 'instellingen') Content = <InstellingenView onShowNotification={showDemoNotification} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex flex-col">
      {/* Horizontale navbar */}
      <nav className="w-full bg-white border-b border-green-100 shadow flex items-center px-4 md:px-10 h-16 z-10">
        <div className="text-xl font-extrabold text-green-700 tracking-tight mr-8">Boekhouding Demo</div>
        <div className="flex gap-2 md:gap-4 flex-1">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={
                'flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition ' +
                (activeTab === tab.key
                  ? 'text-green-700 bg-green-100 shadow'
                  : 'text-neutral-700 hover:bg-green-50')
              }
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-4">
          <button className="relative" onClick={() => showDemoNotification('Je hebt geen nieuwe notificaties (demo)')}><FaBell className="w-6 h-6 text-green-600" /></button>
          <span className="text-sm text-neutral-500 hidden md:inline">Welkom, Boekhouding User</span>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-8 h-8 rounded-full border" />
        </div>
      </nav>
      {/* Content */}
      <main className="flex-1 p-4 md:p-10 bg-transparent">
        {Content}
      </main>
      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-fade-in">
          <FaBell className="w-5 h-5" />
          <span>{notification}</span>
        </div>
      )}
    </div>
  );
}

