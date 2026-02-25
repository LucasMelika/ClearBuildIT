
import React, { useState } from 'react';
import { FaUserFriends, FaCalendarAlt, FaPlus, FaRegClock, FaChevronLeft, FaChevronRight, FaHome, FaCalendarCheck, FaClock, FaUserAlt, FaEllipsisH } from 'react-icons/fa';

// Demo Mobile App dashboard UI, geen site-header/footer
export default function MobileAppDemo() {
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
  // iPhone sim layout
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="relative w-[370px] h-[760px] rounded-[40px] shadow-2xl border-4 border-neutral-200 bg-white flex flex-col items-center overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-neutral-900 rounded-b-2xl z-10" style={{marginTop:2}} />
          
          {/* App content */}
          <div className="flex-1 w-full bg-gradient-to-b from-white via-blue-50 to-white flex flex-col pt-8 pb-8 relative overflow-y-auto">
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
          {/* Tabs verwijderd, navigatie via bottom navbar */}
          {/* Main content */}
          <div className="flex-1 overflow-y-auto">
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
                    {/* ...existing code... */}
            {tab==='home' && role==='medewerker' && (
              <div className="p-0 md:p-4 bg-white min-h-full rounded-b-2xl flex flex-col gap-6">
                <div className="px-4 pt-6 pb-2">
                  <div className="text-2xl font-bold text-blue-700 mb-1">Welkom, {medewerker.naam.split(' ')[0]}!</div>
                  <div className="text-sm text-blue-400">Jouw week in één oogopslag</div>
                </div>
                <div className="grid grid-cols-2 gap-4 px-4">
                  <div className="bg-blue-50 rounded-xl p-4 shadow flex flex-col items-center">
                    <FaCalendarCheck className="text-blue-500 text-2xl mb-2" />
                    <div className="text-lg font-bold text-blue-700">{shifts.filter(s=>s.medewerker===medewerkerIndex).length}</div>
                    <div className="text-xs text-blue-400">Diensten deze week</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 shadow flex flex-col items-center">
                    <FaCalendarAlt className="text-blue-500 text-2xl mb-2" />
                    <div className="text-lg font-bold text-blue-700">18</div>
                    <div className="text-xs text-blue-400">Verlofdagen over</div>
                  </div>
                </div>
                <div className="px-4">
                  <div className="font-semibold text-blue-700 mb-2">Snelle acties</div>
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 rounded bg-blue-500 text-white font-semibold shadow hover:bg-blue-600" onClick={()=>setTab('rooster')}><FaCalendarCheck className="inline mr-2"/>Bekijk rooster</button>
                    <button className="flex-1 px-4 py-2 rounded bg-blue-100 text-blue-700 font-semibold shadow hover:bg-blue-200" onClick={()=>setTab('verlof')}><FaCalendarAlt className="inline mr-2"/>Verlof aanvragen</button>
                  </div>
                </div>
                <div className="px-4 mt-6">
                  <div className="font-semibold text-blue-700 mb-2">Eerstvolgende dienst</div>
                  {(() => {
                    const nextShift = shifts.filter(s=>s.medewerker===medewerkerIndex)[0];
                    if (!nextShift) return <div className="bg-blue-50 rounded-xl p-4 text-blue-300 text-sm shadow">Geen diensten deze week</div>;
                    return (
                      <div className="bg-white rounded-xl px-3 py-2 flex items-center gap-3 shadow border border-blue-100 min-h-[56px]">
                        <div className="flex flex-col items-center w-12">
                          <span className="text-sm font-bold text-blue-700 lowercase">{week[nextShift.dag]}</span>
                          <span className="text-[11px] text-blue-400">8 dec.</span>
                        </div>
                        <div className="flex-1 flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-base font-bold text-blue-900 tracking-wide">{nextShift.tijd.split('-')[0]}</span>
                            <span className="text-blue-400 font-bold">-</span>
                            <span className="text-base font-bold text-blue-900 tracking-wide">{nextShift.tijd.split('-')[1]}</span>
                          </div>
                          <span className="text-xs text-blue-400">ICT desk</span>
                          <span className="mt-1 inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">ICT desk</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>
            )}
                    {/* ...existing code... */}
            {tab==='rooster' && role==='medewerker' && (
              <div className="p-0 md:p-4 bg-white min-h-full rounded-b-2xl">
                <div className="flex items-center justify-between px-4 pt-4 pb-2">
                  <button className="p-1 text-neutral-400 bg-blue-50 rounded-full" style={{fontSize: '16px'}} onClick={()=>setWeekIndex(i=>i>0?i-1:0)} disabled={weekIndex===0}><FaChevronLeft size={16}/></button>
                  <div className="flex flex-col items-center">
                    <span className="font-semibold text-blue-600 text-base">Week {50+weekIndex}</span>
                    <span className="text-xs text-neutral-400">8 dec. - 14 dec.</span>
                  </div>
                  <button className="p-1 text-neutral-400 bg-blue-50 rounded-full" style={{fontSize: '16px'}} onClick={()=>setWeekIndex(i=>i<allShifts.length-1?i+1:i)} disabled={weekIndex===allShifts.length-1}><FaChevronRight size={16}/></button>
                </div>
                {/* Lijstweergave voor medewerker */}
                <div className="mt-2 px-2 md:px-6">
                  <div className="text-lg font-bold text-blue-700 mb-2 tracking-wide">Jouw diensten</div>
                  <div className="flex flex-col gap-4">
                    {shifts.length === 0 && (
                      <div className="bg-blue-50 rounded-xl p-6 text-center text-blue-300 text-sm shadow">Geen diensten deze week</div>
                    )}
                    {shifts.map((s, idx) => {
                      const [start, end] = s.tijd.split('-');
                      return (
                        <div key={idx} className="bg-white rounded-xl px-3 py-2 flex items-center gap-3 shadow border border-blue-100 min-h-[56px]">
                          <div className="flex flex-col items-center w-12">
                            <span className="text-sm font-bold text-blue-700 lowercase">{week[s.dag]}</span>
                            <span className="text-[11px] text-blue-400">8 dec.</span>
                          </div>
                          <div className="flex-1 flex flex-col gap-0.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base font-bold text-blue-900 tracking-wide">{start}</span>
                              <span className="text-blue-400 font-bold">-</span>
                              <span className="text-base font-bold text-blue-900 tracking-wide">{end}</span>
                            </div>
                            <span className="text-xs text-blue-400">ICT desk</span>
                            <span className="mt-1 inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded-full">ICT desk</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {tab==='medewerkers' && (
              <div className="p-0 md:p-4 bg-[#f6f7fa] min-h-full rounded-b-2xl">
                {role==='admin' ? (
                  <>
                    <div className="font-semibold text-blue-700 mb-2 text-lg px-2 md:px-6">Medewerkers</div>
                    <ul className="space-y-3 px-2 md:px-6">
                      {medewerkers.map((m,i)=>(
                        <li key={i} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow border border-blue-100 cursor-pointer hover:bg-blue-50 transition" onClick={()=>setSelectedMedewerker(i)}>
                          <div className={`w-10 h-10 rounded-full ${m.kleur} flex items-center justify-center text-white font-bold text-lg shadow`}>{m.naam[0]}</div>
                          <div className="flex-1">
                            <div className="font-semibold text-blue-800">{m.naam}</div>
                            <div className="text-xs text-neutral-400">{i===0?'Manager':'Medewerker'}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {/* Medewerker rooster modal */}
                    {selectedMedewerker!==null && (
                      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs relative border border-blue-100">
                          <button className="absolute top-3 right-3 text-neutral-400 hover:text-blue-600 text-2xl" onClick={()=>setSelectedMedewerker(null)}>&times;</button>
                          <div className="text-lg font-bold mb-2 text-blue-700">Rooster van {medewerkers[selectedMedewerker].naam}</div>
                          <ul className="divide-y divide-blue-50 mb-4">
                            {allShifts[weekIndex].filter(s=>s.medewerker===selectedMedewerker).length === 0 ? (
                              <li className="py-4 text-blue-300 text-center">Geen diensten deze week</li>
                            ) : (
                              allShifts[weekIndex].filter(s=>s.medewerker===selectedMedewerker).map((s,idx)=>(
                                <li key={idx} className="py-2 flex items-center gap-3">
                                  <span className="text-blue-700 font-semibold w-10">{week[s.dag]}</span>
                                  <span className="flex-1 text-blue-900 font-bold">{s.tijd}</span>
                                  <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded">B-pier</span>
                                </li>
                              ))
                            )}
                          </ul>
                          <button className="w-full px-4 py-2 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600" onClick={()=>{setShowAdd(true);setSelectedMedewerker(null);}}>Inplannen</button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="font-semibold text-blue-700 mb-4 text-lg px-2 md:px-6">Jouw profiel</div>
                    <div className="bg-white rounded-2xl shadow-lg px-6 py-6 flex flex-col items-center gap-4 border border-blue-100 mx-2 md:mx-6">
                      <div className={`w-20 h-20 rounded-full ${medewerker.kleur} flex items-center justify-center text-white font-bold text-4xl shadow-md border-4 border-white -mt-12`} style={{marginBottom: '-1.5rem'}}> {medewerker.naam[0]} </div>
                      <div className="flex flex-col items-center">
                        <div className="font-bold text-blue-800 text-xl mb-1">{medewerker.naam}</div>
                        <div className="text-xs text-blue-400 mb-2">Medewerker</div>
                        <div className="flex flex-col gap-1 text-sm">
                          <div><span className="font-semibold text-neutral-500">E-mail:</span> <span className="text-neutral-700">{medewerker.email}</span></div>
                          <div><span className="font-semibold text-neutral-500">Telefoon:</span> <span className="text-neutral-700">{medewerker.telefoon}</span></div>
                        </div>
                      </div>
                      <button className="mt-4 px-5 py-2 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Profiel bewerken (demo)</button>
                    </div>
                  </>
                )}
              </div>
            )}
            {tab==='verlof' && (
              <div className="p-0 md:p-4 bg-[#f6f7fa] min-h-full rounded-b-2xl">
                <div className="flex items-center justify-between mb-2 px-2 md:px-6 pt-4">
                  <span className="font-semibold text-blue-700 text-lg">Verlofaanvragen</span>
                  {role==='medewerker' && <button className="px-3 py-1 rounded bg-blue-600 text-white text-xs font-semibold shadow hover:bg-blue-700" onClick={()=>setShowLeave(true)}>Verlof aanvragen</button>}
                  {role==='admin' && <button className="px-3 py-1 rounded bg-blue-100 text-blue-700 text-xs font-semibold hover:bg-blue-200" onClick={()=>setShowLeaveList(true)}>Bekijk aanvragen</button>}
                </div>
                {role==='medewerker' && (
                  <div className="bg-white rounded-xl p-4 text-sm text-blue-700 shadow border border-blue-100 mx-2 md:mx-6">Je hebt 18 verlofdagen over.</div>
                )}
                {role==='admin' && (
                  <div className="bg-white rounded-xl p-4 text-sm text-blue-700 shadow border border-blue-100 mx-2 md:mx-6">Er zijn {leaveRequests.length} openstaande/verwerkte aanvragen.</div>
                )}
              </div>
            )}
          </div>
          {/* Add shift modal */}
          {showAdd && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs relative border border-blue-100">
                <button className="absolute top-3 right-3 text-neutral-400 hover:text-blue-600 text-2xl" onClick={()=>setShowAdd(false)}>&times;</button>
                <div className="text-lg font-bold mb-2 text-blue-700">Nieuwe shift toevoegen</div>
                <form className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">Dag</label>
                    <select className="w-full border rounded px-2 py-1">
                      {week.map((d,i)=>(<option key={i}>{d}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Tijd</label>
                    <input className="w-full border rounded px-2 py-1" placeholder="09:00-17:00" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Medewerker</label>
                    <select className="w-full border rounded px-2 py-1">
                      {medewerkers.map((m,i)=>(<option key={i}>{m.naam}</option>))}
                    </select>
                  </div>
                  <button type="button" className="w-full px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700" onClick={()=>{setShowAdd(false);setNotification('Shift toegevoegd (demo)')}}>Toevoegen (demo)</button>
                </form>
              </div>
            </div>
          )}
          {/* Verlof aanvragen modal */}
          {showLeave && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs relative border border-blue-100">
                <button className="absolute top-3 right-3 text-neutral-400 hover:text-blue-600 text-2xl" onClick={()=>setShowLeave(false)}>&times;</button>
                <div className="text-lg font-bold mb-2 text-blue-700">Verlof aanvragen</div>
                <form className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium mb-1">Datum</label>
                    <input className="w-full border rounded px-2 py-1" type="date" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1">Reden</label>
                    <input className="w-full border rounded px-2 py-1" placeholder="Reden van verlof" />
                  </div>
                  <button type="button" className="w-full px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700" onClick={()=>{setShowLeave(false);setNotification('Verlofaanvraag ingediend (demo)')}}>Aanvragen (demo)</button>
                </form>
              </div>
            </div>
          )}
          {/* Verlofaanvragen lijst admin */}
          {showLeaveList && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs relative border border-blue-100">
                <button className="absolute top-3 right-3 text-neutral-400 hover:text-blue-600 text-2xl" onClick={()=>setShowLeaveList(false)}>&times;</button>
                <div className="text-lg font-bold mb-2 text-blue-700">Verlofaanvragen</div>
                <ul className="divide-y divide-blue-100">
                  {leaveRequests.map((req,i)=>(
                    <li key={i} className="py-2">
                      <div className="font-semibold text-blue-700">{req.naam}</div>
                      <div className="text-xs text-neutral-500">{req.datum}</div>
                      <div className={`text-xs font-semibold mt-1 ${req.status==='Goedgekeurd'?'text-green-600':req.status==='In behandeling'?'text-yellow-600':'text-red-600'}`}>{req.status}</div>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-right">
                  <button className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700" onClick={()=>setShowLeaveList(false)}>Sluiten</button>
                </div>
              </div>
            </div>
          )}
          {/* Shift details modal */}
          {selectedShift && (
            <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xs relative border border-blue-100">
                <button className="absolute top-3 right-3 text-neutral-400 hover:text-blue-600 text-2xl" onClick={()=>setSelectedShift(null)}>&times;</button>
                <div className="text-lg font-bold mb-2 text-blue-700">Shift details</div>
                <div className="mb-2"><span className="font-semibold">Dag:</span> {week[selectedShift.dag]}</div>
                <div className="mb-2"><span className="font-semibold">Tijd:</span> {selectedShift.tijd}</div>
                <div className="mb-2"><span className="font-semibold">Medewerker:</span> {selectedShift.naam}</div>
                <div className="mt-4 text-right">
                  <button className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700" onClick={()=>setSelectedShift(null)}>Sluiten</button>
                </div>
              </div>
            </div>
          )}
          {/* Notification Toast */}
          {notification && (
            <div className="fixed bottom-6 right-6 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-fade-in">
              <span>{notification}</span>
            </div>
          )}
        </div>
        {/* Bottom nav bar */}
        <nav className="absolute bottom-0 left-0 w-full h-14 bg-white border-t border-blue-100 flex items-center justify-around z-20">
          <button className={`flex flex-col items-center flex-1 focus:outline-none ${tab==='home'?'text-blue-700':'text-blue-400'}`} onClick={()=>setTab('home')}>
            <FaHome size={20} />
            <span className="text-[11px] mt-0.5">Home</span>
          </button>
          {role==='medewerker' && (
            <button className={`flex flex-col items-center flex-1 focus:outline-none ${tab==='rooster'?'text-blue-700':'text-blue-400'}`} onClick={()=>setTab('rooster')}>
              <FaCalendarCheck size={20} />
              <span className="text-[11px] mt-0.5">Rooster</span>
            </button>
          )}
          <button className={`flex flex-col items-center flex-1 focus:outline-none ${tab==='medewerkers'?'text-blue-700':'text-blue-400'}`} onClick={()=>setTab('medewerkers')}>
            <FaUserFriends size={20} />
            <span className="text-[11px] mt-0.5">Medewerkers</span>
          </button>
          <button className={`flex flex-col items-center flex-1 focus:outline-none ${tab==='verlof'?'text-blue-700':'text-blue-400'}`} onClick={()=>setTab('verlof')}>
            <FaCalendarAlt size={20} />
            <span className="text-[11px] mt-0.5">Verlof</span>
          </button>
          <button className={`flex flex-col items-center flex-1 focus:outline-none ${tab==='meer'?'text-blue-700':'text-blue-400'}`} onClick={()=>setTab('meer')}>
            <FaEllipsisH size={20} />
            <span className="text-[11px] mt-0.5">Meer</span>
          </button>
        </nav>
      </div>
      </div>
    </div>
    </>
  );
}