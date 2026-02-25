
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiBell, FiUserPlus, FiEye, FiDownload, FiCheckCircle } from 'react-icons/fi';
import LoadingSkeleton from '../components/LoadingSkeleton';

const TABS = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'rapporten', label: 'Rapporten' },
  { key: 'gebruikers', label: 'Gebruikers' },
  { key: 'instellingen', label: 'Instellingen' },
];

function DashboardView({ onShowNotification }) {
  // Demo data for the chart
  const chartData = [
    { month: 'Jul', value: 400 },
    { month: 'Aug', value: 600 },
    { month: 'Sep', value: 900 },
    { month: 'Okt', value: 1200 },
    { month: 'Nov', value: 1600 },
    { month: 'Dec', value: 1800 },
  ];
  const [hoverIndex, setHoverIndex] = React.useState(null);
  const [hoverPos, setHoverPos] = React.useState({ x: 0, y: 0 });
  // Calculate points for smooth SVG polyline
  const maxValue = Math.max(...chartData.map(d => d.value));
  const minValue = Math.min(...chartData.map(d => d.value));
  const getY = v => 120 - ((v - minValue) / (maxValue - minValue)) * 100;
  const points = chartData.map((d, i) => `${20 + i * 36},${getY(d.value)}`).join(' ');
  return (
    <>
      {/* Statistieken cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-start border-l-4 border-blue-400">
          <span className="text-xs text-neutral-500 mb-1">Actieve gebruikers</span>
          <span className="text-2xl font-bold text-blue-700">1.245</span>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-start border-l-4 border-green-400">
          <span className="text-xs text-neutral-500 mb-1">Uptime</span>
          <span className="text-2xl font-bold text-green-700">98%</span>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow flex flex-col items-start border-l-4 border-purple-400">
          <span className="text-xs text-neutral-500 mb-1">Omzet deze maand</span>
          <span className="text-2xl font-bold text-purple-700">€ 12.500</span>
        </div>
      </div>
      {/* Grafiek */}
      <div className="bg-white rounded-2xl p-6 shadow mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-neutral-700">Gebruikersgroei</span>
          <span className="text-xs text-neutral-500">Laatste 6 maanden</span>
        </div>
        <div className="w-full h-48 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-lg relative overflow-hidden">
          <svg viewBox="0 0 240 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
            <polyline points={points} fill="none" stroke="#2563eb" strokeWidth="4" strokeLinejoin="round" />
            {chartData.map((d, i) => (
              <circle
                key={i}
                cx={20 + i * 36}
                cy={getY(d.value)}
                r={6}
                fill={hoverIndex === i ? '#1d4ed8' : '#2563eb'}
                className="transition-all duration-200 cursor-pointer"
                onMouseEnter={e => {
                  setHoverIndex(i);
                  const rect = e.target.ownerSVGElement.getBoundingClientRect();
                  setHoverPos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                  });
                }}
                onMouseMove={e => {
                  const rect = e.target.ownerSVGElement.getBoundingClientRect();
                  setHoverPos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                  });
                }}
                onMouseLeave={() => setHoverIndex(null)}
              />
            ))}
          </svg>
          {/* Hover info */}
          {hoverIndex !== null && (
            <div
              className="absolute z-10 px-4 py-2 rounded-lg shadow-lg bg-white border text-sm text-blue-700 animate-fade-in"
              style={{
                left: `${hoverPos.x + 12}px`,
                top: `${hoverPos.y - 10}px`,
                minWidth: '120px',
                pointerEvents: 'none',
                transform: 'translate(-50%, -100%)',
              }}
            >
              <div className="font-bold">{chartData[hoverIndex].month} 2025</div>
              <div>Gebruikers: <span className="font-semibold">{chartData[hoverIndex].value}</span></div>
              <div className="text-xs text-neutral-500 mt-1">Demo dashboard info</div>
            </div>
          )}
          {/* Maand labels */}
          <div className="absolute bottom-2 left-0 w-full flex justify-between px-6 text-xs text-blue-900 font-semibold pointer-events-none">
            {chartData.map((d, i) => (
              <span key={i} style={{ minWidth: 36, textAlign: 'center' }}>{d.month}</span>
            ))}
          </div>
        </div>
      </div>
      {/* Tabel */}
      <div className="bg-white rounded-2xl p-6 shadow">
        <div className="font-semibold text-neutral-700 mb-2 flex items-center justify-between">
          <span>Laatste activiteiten</span>
          <button
            className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
            onClick={() => onShowNotification('Nieuwe activiteit toegevoegd!')}
          >
            <FiBell className="inline" /> Demo notificatie
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-neutral-500 text-left">
              <th className="py-1">Gebruiker</th>
              <th className="py-1">Actie</th>
              <th className="py-1">Datum</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-1">J. de Vries</td>
              <td className="py-1">Ingelogd</td>
              <td className="py-1">8 dec 2025</td>
            </tr>
            <tr>
              <td className="py-1">A. Bakker</td>
              <td className="py-1">Rapport gedownload</td>
              <td className="py-1">8 dec 2025</td>
            </tr>
            <tr>
              <td className="py-1">M. Janssen</td>
              <td className="py-1">Account aangemaakt</td>
              <td className="py-1">7 dec 2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function RapportenView({ onShowReport }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow mb-8">
      <div className="font-semibold text-neutral-700 mb-2 flex items-center justify-between">
        <span>Rapporten overzicht</span>
        <button
          className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
          onClick={() => onShowReport('Q4 2025 Omzetrapport')}
        >
          <FiEye className="inline" /> Bekijk rapport
        </button>
      </div>
      <ul className="divide-y divide-blue-100">
        <li className="py-3 flex justify-between items-center">
          <span className="font-medium text-blue-700">Q4 2025 Omzetrapport</span>
          <button className="px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200" onClick={() => onShowReport('Q4 2025 Omzetrapport')}><FiDownload className="inline mr-1" />Download</button>
        </li>
        <li className="py-3 flex justify-between items-center">
          <span className="font-medium text-blue-700">Gebruikersgroei Analyse</span>
          <button className="px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200" onClick={() => onShowReport('Gebruikersgroei Analyse')}><FiDownload className="inline mr-1" />Download</button>
        </li>
        <li className="py-3 flex justify-between items-center">
          <span className="font-medium text-blue-700">Systeemstatus</span>
          <button className="px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200" onClick={() => onShowReport('Systeemstatus')}><FiDownload className="inline mr-1" />Download</button>
        </li>
      </ul>
    </div>
  );
}

function GebruikersView({ onShowUser, onAddUser }) {
  const users = [
    { name: 'J. de Vries', role: 'Admin', status: 'Actief' },
    { name: 'A. Bakker', role: 'Gebruiker', status: 'Actief' },
    { name: 'M. Janssen', role: 'Gast', status: 'Geblokkeerd' },
  ];
  return (
    <div className="bg-white rounded-2xl p-6 shadow mb-8">
      <div className="font-semibold text-neutral-700 mb-2 flex items-center justify-between">
        <span>Gebruikersbeheer</span>
        <button className="flex items-center gap-1 text-blue-600 hover:underline text-sm" onClick={onAddUser}><FiUserPlus className="inline" /> Nieuwe gebruiker</button>
      </div>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-neutral-500 text-left">
            <th className="py-1">Naam</th>
            <th className="py-1">Rol</th>
            <th className="py-1">Status</th>
            <th className="py-1">Acties</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr className={"border-t"} key={user.name}>
              <td className="py-1">{user.name}</td>
              <td className="py-1">{user.role}</td>
              <td className={"py-1 " + (user.status === 'Actief' ? 'text-green-600' : 'text-red-500')}>{user.status}</td>
              <td className="py-1"><button className="text-blue-600 hover:underline flex items-center gap-1" onClick={() => onShowUser(user)}><FiEye className="inline" />Bekijk</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function InstellingenView({ onSave }) {
  const [saved, setSaved] = useState(false);
  const [theme, setTheme] = useState('light');
  const [showPw, setShowPw] = useState(false);
  return (
    <div className="bg-white rounded-2xl p-8 shadow mb-8 max-w-xl">
      <div className="font-semibold text-neutral-700 text-xl mb-4 flex items-center gap-2">
        <FiUserPlus className="text-blue-600" /> Instellingen
      </div>
      <form className="space-y-6" onSubmit={e => { e.preventDefault(); setSaved(true); onSave && onSave(); setTimeout(() => setSaved(false), 2000); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Bedrijfsnaam</label>
            <input className="w-full border rounded px-3 py-2" defaultValue="DemoApp BV" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">E-mailadres</label>
            <input className="w-full border rounded px-3 py-2" type="email" defaultValue="demo@demoapp.nl" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Notificaties</label>
            <select className="w-full border rounded px-3 py-2">
              <option>Alle</option>
              <option>Alleen belangrijk</option>
              <option>Uit</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Thema</label>
            <select className="w-full border rounded px-3 py-2" value={theme} onChange={e => setTheme(e.target.value)}>
              <option value="light">Licht</option>
              <option value="dark">Donker</option>
              <option value="system">Systeem</option>
            </select>
          </div>
        </div>
        <div className="border-t pt-6 mt-2">
          <label className="block text-sm font-medium mb-1">Wachtwoord wijzigen</label>
          <div className="flex gap-2 items-center">
            <input className="w-full border rounded px-3 py-2" type={showPw ? 'text' : 'password'} placeholder="Nieuw wachtwoord" />
            <button type="button" className="text-blue-600 text-sm" onClick={() => setShowPw(v => !v)}>{showPw ? 'Verberg' : 'Toon'}</button>
          </div>
        </div>
        <button type="submit" className="w-full md:w-auto px-6 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow">Opslaan</button>
        {saved && <div className="flex items-center gap-2 text-green-600 mt-2"><FiCheckCircle /> Instellingen opgeslagen (demo)</div>}
      </form>
    </div>
  );
}

export default function WebAppDemo() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notification, setNotification] = useState(null);
  const [showUserModal, setShowUserModal] = useState(false);
  const [userModalData, setUserModalData] = useState(null);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [editUserData, setEditUserData] = useState(null);
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportModalData, setReportModalData] = useState(null);

  let Content;
  if (activeTab === 'dashboard') Content = <DashboardView onShowNotification={msg => { setNotification(msg); setTimeout(() => setNotification(null), 2000); }} />;
  else if (activeTab === 'rapporten') Content = <RapportenView onShowReport={name => { setReportModalData(name); setShowReportModal(true); }} />;
  else if (activeTab === 'gebruikers') Content = <GebruikersView onShowUser={user => { setUserModalData(user); setShowUserModal(true); }} onAddUser={() => setShowAddUserModal(true)} />;
  else if (activeTab === 'instellingen') Content = <InstellingenView onSave={() => { setNotification('Instellingen opgeslagen!'); setTimeout(() => setNotification(null), 2000); }} />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-60 bg-white border-r border-blue-100 shadow-lg py-8 px-6">
        <div className="text-2xl font-extrabold text-blue-700 mb-10 tracking-tight">DemoApp</div>
        <nav className="flex flex-col gap-2">
          {TABS.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={
                'px-3 py-2 rounded-lg text-left font-semibold ' +
                (activeTab === tab.key
                  ? 'text-blue-700 bg-blue-100'
                  : 'text-neutral-700 hover:bg-blue-50')
              }
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-10 text-xs text-neutral-400">© 2025 DemoApp</div>
      </aside>
      {/* Main dashboard */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-blue-100 flex items-center px-6 shadow-sm">
          <div className="text-lg font-bold text-blue-700">{TABS.find(t => t.key === activeTab)?.label}</div>
          <div className="ml-auto flex items-center gap-4">
            <button className="relative" onClick={() => setNotification('Je hebt geen nieuwe notificaties (demo)')}> <FiBell className="w-6 h-6 text-blue-600" /> </button>
            <span className="text-sm text-neutral-500">Welkom, Demo User</span>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-8 h-8 rounded-full border" />
          </div>
        </header>
        {/* Content */}
        <main className="flex-1 p-4 md:p-10 bg-transparent">
          {Content}
        </main>
        {/* Notification Toast */}
        {notification && (
          <div className="fixed bottom-6 right-6 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-fade-in">
            <FiBell className="w-5 h-5" />
            <span>{notification}</span>
          </div>
        )}
        {/* User Modal */}
        {showUserModal && userModalData && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md relative">
              <button className="absolute top-3 right-3 text-neutral-400 hover:text-blue-600 text-2xl" onClick={() => setShowUserModal(false)}>&times;</button>
              <div className="text-xl font-bold mb-2">Gebruiker details</div>
              <div className="mb-2"><span className="font-semibold">Naam:</span> {userModalData.name}</div>
              <div className="mb-2"><span className="font-semibold">Rol:</span> {userModalData.role}</div>
              <div className="mb-2"><span className="font-semibold">Status:</span> {userModalData.status}</div>
              <div className="mt-4 flex gap-2">
                <button className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700" onClick={() => { setEditUserData(userModalData); setShowEditUserModal(true); setShowUserModal(false); }}>Bewerk</button>
                <button className="px-4 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700" onClick={() => { setNotification('Gebruiker verwijderd (demo)'); setShowUserModal(false); }}>Verwijder</button>
              </div>
            </div>
          </div>
        )}
        {/* Edit User Modal */}
        {showEditUserModal && editUserData && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md relative">
              <button className="absolute top-3 right-3 text-neutral-400 hover:text-blue-600 text-2xl" onClick={() => setShowEditUserModal(false)}>&times;</button>
              <div className="text-xl font-bold mb-4">Gebruiker bewerken</div>
              <form className="space-y-4" onSubmit={e => { e.preventDefault(); setNotification('Gebruiker bijgewerkt (demo)'); setShowEditUserModal(false); }}>
                <div>
                  <label className="block text-sm font-medium mb-1">Naam</label>
                  <input className="w-full border rounded px-3 py-2" defaultValue={editUserData.name} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Rol</label>
                  <select className="w-full border rounded px-3 py-2" defaultValue={editUserData.role}>
                    <option>Gebruiker</option>
                    <option>Admin</option>
                    <option>Gast</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Status</label>
                  <select className="w-full border rounded px-3 py-2" defaultValue={editUserData.status}>
                    <option>Actief</option>
                    <option>Geblokkeerd</option>
                  </select>
                </div>
                <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Opslaan</button>
              </form>
            </div>
          </div>
        )}
        {/* Add User Modal */}
        {showAddUserModal && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-md relative">
              <button className="absolute top-3 right-3 text-neutral-400 hover:text-blue-600 text-2xl" onClick={() => setShowAddUserModal(false)}>&times;</button>
              <div className="text-xl font-bold mb-4">Nieuwe gebruiker toevoegen</div>
              <form onSubmit={e => { e.preventDefault(); setNotification('Gebruiker toegevoegd (demo)'); setShowAddUserModal(false); }} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Naam</label>
                  <input className="w-full border rounded px-3 py-2" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Rollen</label>
                  <select className="w-full border rounded px-3 py-2">
                    <option>Gebruiker</option>
                    <option>Admin</option>
                    <option>Gast</option>
                  </select>
                </div>
                <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Toevoegen</button>
              </form>
            </div>
          </div>
        )}
        {/* Report Modal */}
        {showReportModal && reportModalData && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 shadow-lg w-full max-w-lg relative">
              <button className="absolute top-3 right-3 text-neutral-400 hover:text-blue-600 text-2xl" onClick={() => setShowReportModal(false)}>&times;</button>
              <div className="text-xl font-bold mb-2">{reportModalData}</div>
              <div className="mb-4 text-neutral-600">Dit is een voorbeeld van een rapportage. In een echte app zou hier een PDF of downloadbare rapportage verschijnen.</div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700" onClick={() => { setNotification('Rapport gedownload (demo)'); setShowReportModal(false); }}><FiDownload className="inline mr-1" /> Download</button>
                <button className="px-4 py-2 rounded bg-neutral-200 text-neutral-700 font-semibold hover:bg-neutral-300" onClick={() => setShowReportModal(false)}>Sluiten</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
