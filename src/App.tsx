/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MuktaHeader } from './components/MuktaHeader';
import { MuktaKuralPortal } from './components/MuktaKuralPortal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPaal, setSelectedPaal] = useState<string>('all');
  const [selectedAthigaram, setSelectedAthigaram] = useState<string>('கடவுள் வாழ்த்து');
  const [showSavedOnly, setShowSavedOnly] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Persistent bookmarks in localStorage as specified in template
  const [savedKurals, setSavedKurals] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem('saved_kurals');
      return stored ? JSON.parse(stored) : [1];
    } catch {
      return [1];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('saved_kurals', JSON.stringify(savedKurals));
    } catch (e) {
      console.error(e);
    }
  }, [savedKurals]);

  const toggleBookmark = (num: number) => {
    setSavedKurals(prev => {
      const exists = prev.includes(num);
      const updated = exists ? prev.filter(n => n !== num) : [...prev, num];
      showToast(exists ? `குறள் #${num} சேமிப்பிலிருந்து நீக்கப்பட்டது` : `குறள் #${num} சேமிக்கப்பட்டது!`);
      return updated;
    });
  };

  const handleToggleSavedFilter = () => {
    setShowSavedOnly(prev => !prev);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedPaal('all');
    setSelectedAthigaram('கடவுள் வாழ்த்து');
    setShowSavedOnly(false);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#1e293b] font-mukta pb-10 selection:bg-[#f59e0b] selection:text-[#0f172a] overflow-x-clip w-full max-w-full">
      {/* 1. Header with Mega Menu, Mobile Drawer, and Saved Count Badge */}
      <MuktaHeader
        savedCount={savedKurals.length}
        showSavedOnly={showSavedOnly}
        selectedAthigaram={selectedAthigaram}
        onToggleSavedFilter={handleToggleSavedFilter}
        onSelectAthigaram={(name) => {
          setSelectedAthigaram(name);
          setShowSavedOnly(false);
        }}
        onSelectPaal={(name) => {
          setSelectedPaal(name);
          if (name === 'அறத்துப்பால்') setSelectedAthigaram('கடவுள் வாழ்த்து');
          else if (name === 'பொருட்பால்') setSelectedAthigaram('இறைமாட்சி');
          else if (name === 'காமத்துப்பால்') setSelectedAthigaram('தகையணங்குறுத்தல்');
          else setSelectedAthigaram('கடவுள் வாழ்த்து');
          setShowSavedOnly(false);
        }}
      />

      {/* Main Content Area: Pure Thirukkural Portal with Complete 133 Chapters Pages */}
      <main className="flex-1">
        <MuktaKuralPortal
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedPaal={selectedPaal}
          setSelectedPaal={setSelectedPaal}
          selectedAthigaram={selectedAthigaram}
          setSelectedAthigaram={setSelectedAthigaram}
          savedKurals={savedKurals}
          onToggleBookmark={toggleBookmark}
          showSavedOnly={showSavedOnly}
          onClearFilters={handleClearFilters}
          onCopySuccess={showToast}
        />
      </main>



      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0f172a] text-white px-4 py-3 rounded-xl shadow-2xl border-l-4 border-[#f59e0b] flex items-center gap-2.5 text-xs sm:text-sm animate-fade-in">
          <span className="material-symbols-outlined text-[20px] text-[#f59e0b] shrink-0 leading-none select-none">
            check_circle
          </span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
