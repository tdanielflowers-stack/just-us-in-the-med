import React, { useState, useEffect } from 'react';
import { packingList, needToKnow } from '../data/tripData';

// ── Packing List ─────────────────────────────────────────────
function PackingListSection() {
  const [checked, setChecked] = useState({});
  const [openCategory, setOpenCategory] = useState(packingList.categories[0].name);

  // Persist checked state in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('justus-packing');
      if (saved) setChecked(JSON.parse(saved));
    } catch {}
  }, []);

  const toggle = (key) => {
    const next = { ...checked, [key]: !checked[key] };
    setChecked(next);
    try { localStorage.setItem('justus-packing', JSON.stringify(next)); } catch {}
  };

  const totalItems = packingList.categories.reduce((sum, c) => sum + c.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const pct = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

  return (
    <div>
      {/* Progress */}
      <div className="card card-padded" style={{ marginBottom: '16px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '8px',
        }}>
          <div style={{ fontWeight: '600', fontSize: '15px', color: 'var(--text-primary)' }}>
            Packing progress
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>
            {checkedCount} / {totalItems}
          </div>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
        {pct === 100 && (
          <div style={{
            marginTop: '10px',
            fontSize: '14px',
            color: 'var(--success)',
            fontWeight: '600',
            textAlign: 'center',
          }}>
            ✅ You're ready to go!
          </div>
        )}
      </div>

      {/* Categories */}
      {packingList.categories.map(category => {
        const catChecked = category.items.filter((_, i) =>
          checked[`${category.name}-${i}`]
        ).length;
        const isOpen = openCategory === category.name;

        return (
          <div key={category.name} className="card" style={{ marginBottom: '10px', overflow: 'hidden' }}>
            <button
              onClick={() => setOpenCategory(isOpen ? null : category.name)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
              }}
            >
              <span style={{ fontSize: '20px' }}>{category.icon}</span>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{
                  fontWeight: '600',
                  fontSize: '14px',
                  color: 'var(--text-primary)',
                }}>
                  {category.name}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginTop: '1px' }}>
                  {catChecked}/{category.items.length} packed
                </div>
              </div>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--bg-overlay)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                color: 'var(--text-tertiary)',
                transform: isOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease',
                flexShrink: 0,
              }}>
                ⌄
              </div>
            </button>

            {isOpen && (
              <div style={{
                padding: '0 16px 16px',
                borderTop: '1px solid var(--border)',
              }}
              className="animate-fade-in"
              >
                {category.items.map((item, i) => {
                  const key = `${category.name}-${i}`;
                  const isChecked = !!checked[key];
                  return (
                    <div
                      key={i}
                      className="check-item"
                      onClick={() => toggle(key)}
                    >
                      <div className={`check-box ${isChecked ? 'checked' : ''}`}>
                        {isChecked && (
                          <span style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: '700' }}>✓</span>
                        )}
                      </div>
                      <span className={`check-label ${isChecked ? 'checked' : ''}`}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Need to Know Card ────────────────────────────────────────
function NeedToKnowCard({ item }) {
  const [open, setOpen] = useState(false);

  const priorityConfig = {
    high:   { label: '🔴 Must read', class: 'badge-high' },
    medium: { label: '🟡 Good to know', class: 'badge-medium' },
    low:    { label: '🟢 Nice to know', class: 'badge-low' },
  };
  const p = priorityConfig[item.priority] || priorityConfig.medium;

  return (
    <div className="card" style={{ marginBottom: '10px', overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-start',
          padding: '16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-body)',
          textAlign: 'left',
        }}
      >
        <span style={{ fontSize: '22px', flexShrink: 0 }}>{item.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{
            fontWeight: '600',
            fontSize: '14px',
            color: 'var(--text-primary)',
            marginBottom: '4px',
          }}>
            {item.title}
          </div>
          <span className={`tag ${p.class}`} style={{ fontSize: '10px' }}>
            {p.label}
          </span>
        </div>
        <span style={{
          fontSize: '16px',
          color: 'var(--text-tertiary)',
          transform: open ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.2s ease',
          flexShrink: 0,
          marginTop: '2px',
        }}>
          ⌄
        </span>
      </button>

      {open && (
        <div
          className="animate-fade-in"
          style={{
            padding: '0 16px 16px',
            borderTop: '1px solid var(--border)',
          }}
        >
          <div style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            whiteSpace: 'pre-line',
            paddingTop: '12px',
          }}>
            {item.content}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main Need to Know Page ───────────────────────────────────
export default function NeedToKnow() {
  const [tab, setTab] = useState('packing');

  const highPriority = needToKnow.filter(i => i.priority === 'high');
  const otherItems = needToKnow.filter(i => i.priority !== 'high');

  return (
    <div className="page-container">
      <div style={{ paddingTop: '28px' }}>

        <div style={{ marginBottom: '24px' }}>
          <div className="text-eyebrow" style={{ marginBottom: '4px' }}>Before you go</div>
          <h1 className="display-md" style={{ color: 'var(--text-primary)' }}>
            Need to <em style={{ fontStyle: 'italic', color: 'var(--ocean-bright)' }}>Know</em>
          </h1>
        </div>

        {/* Sub tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '24px',
          background: 'var(--bg-overlay)',
          padding: '4px',
          borderRadius: '10px',
        }}>
          {[
            { id: 'packing', label: '🧳 Packing List' },
            { id: 'info',    label: '❓ Key Info' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1,
                padding: '9px 8px',
                borderRadius: '8px',
                border: 'none',
                background: tab === t.id ? 'var(--bg-card)' : 'transparent',
                color: tab === t.id ? 'var(--text-primary)' : 'var(--text-tertiary)',
                fontSize: '13px',
                fontWeight: tab === t.id ? '600' : '400',
                cursor: 'pointer',
                boxShadow: tab === t.id ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.2s ease',
                fontFamily: 'var(--font-body)',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Packing tab */}
        {tab === 'packing' && (
          <div className="animate-fade-in">
            <p style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '20px',
            }}>
              Curated for this trip — Mediterranean September, cruise life, cobblestones, churches, and 11 nights abroad. Check items off as you pack. Your progress is saved on this device.
            </p>
            <PackingListSection />
          </div>
        )}

        {/* Info tab */}
        {tab === 'info' && (
          <div className="animate-fade-in">

            {/* Must reads first */}
            {highPriority.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <div className="text-eyebrow" style={{ marginBottom: '12px', color: '#C62828' }}>
                  🔴 Read these first
                </div>
                {highPriority.map((item, i) => (
                  <NeedToKnowCard key={i} item={item} />
                ))}
              </div>
            )}

            {/* Other items */}
            <div className="text-eyebrow" style={{ marginBottom: '12px' }}>
              Good to know
            </div>
            {otherItems.map((item, i) => (
              <NeedToKnowCard key={i} item={item} />
            ))}

            {/* Daniel & Becca tip */}
            <div style={{
              marginTop: '20px',
              background: 'linear-gradient(135deg, var(--ocean-navy), var(--ocean-deep))',
              borderRadius: '16px',
              padding: '20px',
            }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>✉️</div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                color: '#FFFFFF',
                marginBottom: '8px',
              }}>
                A note from Daniel & Becca
              </div>
              <div style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
              }}>
                We've been to many of these places before and we're so excited to share them with all of you for the first time. The most important thing isn't the schedule or the logistics — it's that we're all doing this together. If something doesn't go exactly to plan, that's the adventure. We'll figure it out as a family, just like we always have.
                {'\n\n'}
                See you in Rome. 🍋
              </div>
            </div>

          </div>
        )}

        <div style={{ height: '32px' }} />
      </div>
    </div>
  );
}