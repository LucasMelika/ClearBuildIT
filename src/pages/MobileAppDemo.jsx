
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaUserFriends, FaCalendarAlt, FaPlus, FaRegClock, FaChevronLeft, FaChevronRight, FaHome, FaCalendarCheck, FaClock, FaUserAlt, FaEllipsisH } from 'react-icons/fa';
import LoadingSkeleton from '../components/LoadingSkeleton';

// Demo Mobile App dashboard UI, geen site-header/footer
export default function MobileAppDemo() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) return <LoadingSkeleton />;
  
  return <MobileAppDemoContent />;
}

function MobileAppDemoContent() {
  // Demo state
  const [role, setRole] = useState('admin'); // 'admin' of 'medewerker'
  const [tab, setTab] = useState('home');
  const [selectedMedewerker, setSelectedMedewerker] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [selectedShift, setSelectedShift] = useState(null);
  const [showLeave, setShowLeave] = useState(false);
  const [showLeaveList, setShowLeaveList] = useState(false);
  const [notification, setNotification] = useState(null);
  const [weekIndex, setWeekIndex] = useState(0); // 0 = huidige week
  
  // Demo data
  const medewerkers = [
    { naam: 'Jan de Vries', kleur: 'bg-blue-500', email: 'jan@bedrijf.nl', telefoon: '06-12345678' },
    { naam: 'Anna Bakker', kleur: 'bg-green-500', email: 'anna@bedrijf.nl', telefoon: '06-23456789' },
    { naam: 'Sam Willems', kleur: 'bg-purple-500', email: 'sam@bedrijf.nl', telefoon: '06-34567890' },
  ];

  // Demo: ingelogde medewerker is Jan de Vries (index 0)
  const medewerkerIndex = 0;
  const medewerker = medewerkers[medewerkerIndex];
  const week = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];

  // Demo shifts per week
  const allShifts = [
    [ // week 0
      { dag: 0, tijd: '09:00-17:00', medewerker: 0 },
      { dag: 1, tijd: '12:00-20:00', medewerker: 1 },
      { dag: 2, tijd: '08:00-16:00', medewerker: 2 },
      { dag: 4, tijd: '10:00-18:00', medewerker: 0 },
      { dag: 5, tijd: '09:00-13:00', medewerker: 1 },
    ],
    [ // week 1
      { dag: 0, tijd: '10:00-18:00', medewerker: 1 },
      { dag: 2, tijd: '09:00-17:00', medewerker: 2 },
      { dag: 3, tijd: '08:00-16:00', medewerker: 0 },
      { dag: 6, tijd: '12:00-20:00', medewerker: 2 },
    ],
    [ // week 2
      { dag: 1, tijd: '09:00-17:00', medewerker: 2 },
      { dag: 2, tijd: '12:00-20:00', medewerker: 0 },
      { dag: 4, tijd: '08:00-16:00', medewerker: 1 },
      { dag: 5, tijd: '10:00-18:00', medewerker: 2 },
    ],
  ];

  const shifts = allShifts[weekIndex] || [];
  const leaveRequests = [
    { naam: 'Anna Bakker', datum: '12 dec 2025', status: 'Goedgekeurd' },
    { naam: 'Sam Willems', datum: '15 dec 2025', status: 'In behandeling' },
  ];

  // iPhone 17 Pro Max sim layout
  return (
    <>
      <Helmet>
        <title>Mobile App Demo · Shift Planner | ClearBuildIT</title>
        <meta name="description" content="Interactieve demo van onze mobile app op iPhone 17 Pro Max. React Native apps met native-gevoel en realtime sync." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
        <div className="relative w-[393px] h-[852px] rounded-[55px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] border-[14px] border-slate-900 bg-black flex flex-col items-center overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-[40px] z-10 shadow-[inset_0_0_8px_rgba(0,0,0,0.9)]" />
          
          {/* Status Bar */}
          <div className="absolute top-[16px] left-0 right-0 flex justify-between items-center px-8 z-10 text-white text-xs font-semibold">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <div className="flex gap-[2px]">
                <div className="w-[3px] h-[10px] bg-white rounded-full"></div>
                <div className="w-[3px] h-[12px] bg-white rounded-full"></div>
                <div className="w-[3px] h-[14px] bg-white rounded-full"></div>
                <div className="w-[3px] h-[16px] bg-white rounded-full"></div>
              </div>
              <svg className="w-6 h-3" viewBox="0 0 24 12" fill="white">
                <rect x="0" y="0" width="14" height="12" rx="2"/>
                <rect x="20" y="3" width="3" height="6" rx="1" opacity="0.4"/>
              </svg>
            </div>
          </div>
          
          {/* App content */}
          <div className="flex-1 w-full bg-gradient-to-b from-white via-blue-50 to-white flex flex-col pt-16 pb-8 relative overflow-y-auto">
            {/* Role switch */}
            <div className="flex justify-center items-center gap-2 mb-4">
              <button className={`px-3 py-1 rounded-full text-xs font-semibold shadow ${role==='admin'?'bg-blue-500 text-white':'bg-blue-100 text-blue-700 border border-blue-200'}`} onClick={()=>{setRole('admin');setTab('home');}}>Admin</button>
              <button className={`px-3 py-1 rounded-full text-xs font-semibold shadow ${role==='medewerker'?'bg-blue-500 text-white':'bg-blue-100 text-blue-700 border border-blue-200'}`} onClick={()=>{setRole('medewerker');setTab('home');}}>Medewerker</button>
            </div>
            
            {/* Topbar */}
            <div className="flex items-center px-4 py-2 border-b border-blue-100 bg-white/90">
              <FaCalendarAlt className="text-blue-400 mr-2" />
              <span className="font-bold text-lg text-blue-700 flex-1 tracking-wide">Demo Planner</span>
              <button className="ml-auto text-blue-500 text-xl hover:bg-blue-100 rounded-full p-1 transition" onClick={() => setShowAdd(true)} title="Nieuwe shift"><FaPlus /></button>
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-y-auto">
              {/* HOME TAB - Admin */}
              {tab==='home' && role==='admin' && (
                <div className="p-0 md:p-4 bg-white min-h-full rounded-b-2xl flex flex-col gap-6">
                  <div className="px-4 pt-6 pb-2">
                    <div className="text-2xl font-bold text-blue-700 mb-1">Welkom, Admin!</div>
                    <div className="text-sm text-blue-400">Overzicht van je team en acties</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div className="bg-blue-50 rounded-xl p-4 shadow flex flex-col items-center">
                      <FaUserFriends className="text-blue-500 text-2xl mb-2" />
                      <div className="text-lg font-bold text-blue-700">{medewerkers.length}</div>
                      <div className="text-xs text-blue-400">Medewerkers</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 shadow flex flex-col items-center">
                      <FaCalendarCheck className="text-blue-500 text-2xl mb-2" />
                      <div className="text-lg font-bold text-blue-700">{shifts.length}</div>
                      <div className="text-xs text-blue-400">Diensten deze week</div>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="font-semibold text-blue-700 mb-2">Snelle acties</div>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 transition flex items-center justify-center gap-2" onClick={() => setTab('rooster')}>
                        <FaCalendarAlt /> Bekijk Rooster
                      </button>
                      <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 transition flex items-center justify-center gap-2" onClick={() => setTab('medewerkers')}>
                        <FaUserFriends /> Medewerkers
                      </button>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="font-semibold text-blue-700 mb-2">Recente verlofaanvragen</div>
                    {leaveRequests.map((req, idx) => (
                      <div key={idx} className="bg-blue-50 rounded-lg p-3 mb-2 flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-blue-700 text-sm">{req.naam}</div>
                          <div className="text-xs text-blue-400">{req.datum}</div>
                        </div>
                        <div className={`text-xs font-semibold px-2 py-1 rounded ${req.status === 'Goedgekeurd' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                          {req.status}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* HOME TAB - Medewerker */}
              {tab==='home' && role==='medewerker' && (
                <div className="p-0 md:p-4 bg-white min-h-full rounded-b-2xl flex flex-col gap-6">
                  <div className="px-4 pt-6 pb-2">
                    <div className="text-2xl font-bold text-blue-700 mb-1">Welkom, {medewerker.naam.split(' ')[0]}!</div>
                    <div className="text-sm text-blue-400">Jouw week in één oogopslag</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div className="bg-blue-50 rounded-xl p-4 shadow flex flex-col items-center">
                      <FaClock className="text-blue-500 text-2xl mb-2" />
                      <div className="text-lg font-bold text-blue-700">{shifts.filter(s=>s.medewerker===medewerkerIndex).length}</div>
                      <div className="text-xs text-blue-400">Diensten deze week</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 shadow flex flex-col items-center">
                      <FaUserAlt className="text-blue-500 text-2xl mb-2" />
                      <div className="text-lg font-bold text-blue-700">18</div>
                      <div className="text-xs text-blue-400">Verlofdagen over</div>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="font-semibold text-blue-700 mb-2">Snelle acties</div>
                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 transition flex items-center justify-center gap-2" onClick={() => setTab('rooster')}>
                        <FaCalendarAlt /> Mijn Rooster
                      </button>
                      <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg shadow hover:bg-blue-600 transition flex items-center justify-center gap-2" onClick={() => setShowLeave(true)}>
                        <FaUserAlt /> Vraag Verlof
                      </button>
                    </div>
                  </div>
                  <div className="px-4 mt-6">
                    <div className="font-semibold text-blue-700 mb-2">Eerstvolgende dienst</div>
                    {(() => {
                      const nextShift = shifts.find(s => s.medewerker === medewerkerIndex);
                      if (!nextShift) return <div className="bg-blue-50 rounded-xl p-4 text-blue-300 text-sm shadow">Geen diensten deze week</div>;
                      return (
                        <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-3 shadow border border-blue-100 min-h-[56px]">
                          <div className="flex flex-col items-center w-12">
                            <span className="text-2xl font-bold text-blue-700">{week[nextShift.dag]}</span>
                            <span className="text-xs text-blue-400">{nextShift.tijd.split('-')[0]}</span>
                          </div>
                          <div className="flex-1 flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <FaRegClock className="text-blue-400 text-xs" />
                              <span className="text-sm font-semibold text-blue-700">{nextShift.tijd}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              )}

              {/* ROOSTER TAB */}
              {tab==='rooster' && (
                <div className="p-0 md:p-4 bg-white min-h-full rounded-b-2xl">
                  <div className="flex items-center justify-between px-4 pt-4 pb-2">
                    <button className="text-blue-400 hover:bg-blue-50 rounded-full p-2 transition" onClick={() => setWeekIndex(Math.max(0, weekIndex - 1))}><FaChevronLeft /></button>
                    <div className="flex flex-col items-center">
                      <span className="text-sm font-semibold text-blue-700">Week {weekIndex}</span>
                      <span className="text-xs text-blue-400">
                        {weekIndex === 0 ? 'Deze week' : weekIndex === 1 ? 'Volgende week' : `Over ${weekIndex} weken`}
                      </span>
                    </div>
                    <button className="text-blue-400 hover:bg-blue-50 rounded-full p-2 transition" onClick={() => setWeekIndex(Math.min(allShifts.length - 1, weekIndex + 1))}><FaChevronRight /></button>
                  </div>
                  <div className="mt-2 px-2 md:px-6">
                    <div className="text-lg font-bold text-blue-700 mb-2 tracking-wide">{role === 'admin' ? 'Alle diensten' : 'Jouw diensten'}</div>
                    <div className="flex flex-col gap-4">
                      {shifts.filter(s => role === 'admin' || s.medewerker === medewerkerIndex).length === 0 ? (
                        <div className="bg-blue-50 rounded-xl p-6 text-center text-blue-300 text-sm shadow">Geen diensten deze week</div>
                      ) : (
                        shifts
                          .filter(s => role === 'admin' || s.medewerker === medewerkerIndex)
                          .map((s, idx) => {
                            const m = medewerkers[s.medewerker];
                            return (
                              <div key={idx} className="bg-white rounded-xl px-3 py-2 flex items-center gap-3 shadow border border-blue-100 min-h-[56px]">
                                <div className="flex flex-col items-center w-12">
                                  <span className="text-2xl font-bold text-blue-700">{week[s.dag]}</span>
                                  <span className="text-xs text-blue-400">{s.tijd.split('-')[0]}</span>
                                </div>
                                <div className="flex-1 flex flex-col gap-0.5">
                                  <div className="flex items-center gap-2">
                                    <FaRegClock className="text-blue-400 text-xs" />
                                    <span className="text-sm font-semibold text-blue-700">{s.tijd}</span>
                                  </div>
                                  {role === 'admin' && <span className="text-xs text-blue-400">{m.naam}</span>}
                                </div>
                                {role === 'admin' && <div className={`w-8 h-8 rounded-full ${m.kleur} flex items-center justify-center text-white font-bold text-sm shadow`}>{m.naam[0]}</div>}
                              </div>
                            );
                          })
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* MEDEWERKERS TAB */}
              {tab==='medewerkers' && role==='admin' && (
                <div className="p-0 md:p-4 bg-[#f6f7fa] min-h-full rounded-b-2xl">
                  {selectedMedewerker === null ? (
                    <>
                      <div className="font-semibold text-blue-700 mb-2 text-lg px-2 md:px-6">Medewerkers</div>
                      {medewerkers.map((m, i) => (
                        <div key={i} className="bg-white mx-2 md:mx-6 mb-3 px-4 py-3 rounded-xl flex items-center gap-3 shadow hover:shadow-md transition cursor-pointer border border-blue-100" onClick={() => setSelectedMedewerker(i)}>
                          <div className={`w-10 h-10 rounded-full ${m.kleur} flex items-center justify-center text-white font-bold text-lg shadow`}>{m.naam[0]}</div>
                          <div className="flex-1">
                            <div className="font-semibold text-blue-800">{m.naam}</div>
                            <div className="text-xs text-blue-400">{shifts.filter(s => s.medewerker === i).length} diensten deze week</div>
                          </div>
                          <FaChevronRight className="text-blue-300" />
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2 mb-4 px-2 md:px-6">
                        <button className="text-blue-400 hover:bg-blue-100 rounded-full p-2 transition" onClick={() => setSelectedMedewerker(null)}><FaChevronLeft /></button>
                        <span className="font-semibold text-blue-700 text-lg">Details</span>
                      </div>
                      <div className="bg-white mx-2 md:mx-6 mb-4 px-4 py-4 rounded-xl shadow border border-blue-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-full ${medewerkers[selectedMedewerker].kleur} flex items-center justify-center text-white font-bold text-xl shadow`}>{medewerkers[selectedMedewerker].naam[0]}</div>
                          <div>
                            <div className="font-bold text-blue-800 text-lg">{medewerkers[selectedMedewerker].naam}</div>
                            <div className="text-xs text-blue-400">{medewerkers[selectedMedewerker].email}</div>
                          </div>
                        </div>
                        <div className="text-sm text-blue-700 mb-1"><strong>Telefoon:</strong> {medewerkers[selectedMedewerker].telefoon}</div>
                        <div className="text-sm text-blue-700 mb-1"><strong>Diensten deze week:</strong> {shifts.filter(s => s.medewerker === selectedMedewerker).length}</div>
                      </div>
                      <div className="px-2 md:px-6">
                        <div className="font-semibold text-blue-700 mb-2">Diensten deze week</div>
                        {shifts.filter(s => s.medewerker === selectedMedewerker).length === 0 ? (
                          <div className="bg-white p-4 rounded-xl shadow text-sm text-blue-300 text-center border border-blue-100">Geen diensten deze week</div>
                        ) : (
                          shifts.filter(s => s.medewerker === selectedMedewerker).map((s, idx) => (
                            <div key={idx} className="bg-white rounded-xl px-3 py-2 flex items-center gap-3 shadow mb-2 border border-blue-100 min-h-[56px]">
                              <div className="flex flex-col items-center w-12">
                                <span className="text-2xl font-bold text-blue-700">{week[s.dag]}</span>
                                <span className="text-xs text-blue-400">{s.tijd.split('-')[0]}</span>
                              </div>
                              <div className="flex-1 flex flex-col gap-0.5">
                                <div className="flex items-center gap-2">
                                  <FaRegClock className="text-blue-400 text-xs" />
                                  <span className="text-sm font-semibold text-blue-700">{s.tijd}</span>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* VERLOF TAB */}
              {tab==='verlof' && (
                <div className="p-4 bg-[#f6f7fa] min-h-full rounded-b-2xl">
                  <div className="font-semibold text-blue-700 mb-2 text-lg">Verlof</div>
                  {role === 'medewerker' ? (
                    <div className="bg-white px-4 py-4 rounded-xl shadow border border-blue-100">
                      <div className="text-sm text-blue-700 mb-2">Je hebt <strong>18 verlofdagen</strong> over.</div>
                      <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition" onClick={() => setShowLeave(true)}>Verlof aanvragen</button>
                    </div>
                  ) : (
                    <>
                      <div className="bg-white px-4 py-3 rounded-xl shadow mb-3 border border-blue-100">
                        <div className="text-sm font-semibold text-blue-700 mb-1">Anna Bakker</div>
                        <div className="text-xs text-blue-400">12 dec 2025</div>
                        <div className="mt-1 text-xs font-semibold text-green-700">Goedgekeurd</div>
                      </div>
                      <div className="bg-white px-4 py-3 rounded-xl shadow mb-3 border border-blue-100">
                        <div className="text-sm font-semibold text-blue-700 mb-1">Sam Willems</div>
                        <div className="text-xs text-blue-400">15 dec 2025</div>
                        <div className="mt-1 text-xs font-semibold text-yellow-700">In behandeling</div>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* MEER TAB */}
              {tab==='meer' && (
                <div className="p-4 bg-[#f6f7fa] min-h-full rounded-b-2xl">
                  <div className="font-semibold text-blue-700 mb-2 text-lg">Meer</div>
                  <div className="bg-white px-4 py-3 rounded-xl shadow mb-3 border border-blue-100 cursor-pointer hover:shadow-md transition">
                    <div className="text-sm font-semibold text-blue-700">Profiel</div>
                  </div>
                  <div className="bg-white px-4 py-3 rounded-xl shadow mb-3 border border-blue-100 cursor-pointer hover:shadow-md transition">
                    <div className="text-sm font-semibold text-blue-700">Instellingen</div>
                  </div>
                  <div className="bg-white px-4 py-3 rounded-xl shadow mb-3 border border-blue-100 cursor-pointer hover:shadow-md transition">
                    <div className="text-sm font-semibold text-blue-700">Uitloggen</div>
                  </div>
                </div>
              )}

              {/* Notification */}
              {notification && (
                <div className="fixed bottom-6 right-6 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-fade-in">
                  <span>{notification}</span>
                </div>
              )}
            </div>

            {/* Bottom nav bar */}
            <nav className="absolute bottom-0 left-0 w-full h-16 bg-white/95 backdrop-blur-xl border-t border-blue-100 flex items-center justify-around z-20 pb-2">
              <button className={`flex flex-col items-center flex-1 focus:outline-none transition-all ${tab==='home'?'text-blue-600':'text-gray-400'}`} onClick={()=>setTab('home')}>
                <FaHome size={22} />
                <span className="text-[10px] mt-1 font-medium">Home</span>
              </button>
              <button className={`flex flex-col items-center flex-1 focus:outline-none transition-all ${tab==='rooster'?'text-blue-600':'text-gray-400'}`} onClick={()=>setTab('rooster')}>
                <FaCalendarCheck size={22} />
                <span className="text-[10px] mt-1 font-medium">Rooster</span>
              </button>
              {role === 'admin' && (
                <button className={`flex flex-col items-center flex-1 focus:outline-none transition-all ${tab==='medewerkers'?'text-blue-600':'text-gray-400'}`} onClick={()=>setTab('medewerkers')}>
                  <FaUserFriends size={22} />
                  <span className="text-[10px] mt-1 font-medium">Team</span>
                </button>
              )}
              <button className={`flex flex-col items-center flex-1 focus:outline-none transition-all ${tab==='verlof'?'text-blue-600':'text-gray-400'}`} onClick={()=>setTab('verlof')}>
                <FaCalendarAlt size={22} />
                <span className="text-[10px] mt-1 font-medium">Verlof</span>
              </button>
              <button className={`flex flex-col items-center flex-1 focus:outline-none transition-all ${tab==='meer'?'text-blue-600':'text-gray-400'}`} onClick={()=>setTab('meer')}>
                <FaEllipsisH size={22} />
                <span className="text-[10px] mt-1 font-medium">Meer</span>
              </button>
            </nav>
          </div>
          
          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-white rounded-full z-30"></div>
        </div>
      </div>
    </>
  );
}
