import React, { useState } from 'react';
import { crew, staterooms, tripMeta } from '../data/tripData';

// ── Stateroom Card ───────────────────────────────────────────
function StatroomCard({ room }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="card card-padded" style={{ marginBottom: '12px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '12px',
      }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '36px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}>
            {room.room}
          </div>
          <div style={{
            fontSize: '12px',
            color: 'var(--text-tertiary)',
            marginTop: '2px',
          }}>
            Deck {room.deck} · Norwegian Gem
          </div>
        </div>
        <div style={{
          background: 'var(--bg-overlay)',
          borderRadius: '8px',
          padding: '6px 10px',
          fontSize: '13px',
          fontWeight: '500',
          color: 'var(--ocean-bright)',
        }}>
          🛳 Deck {room.deck}
        </div>
      </div>

      {/* Occupants */}
      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '12px',
      }}>
        {room.occupants.map(name => {
          const member = crew.find(c => c.name === name);
          return (
            <div key={name} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'var(--bg-overlay)',
              borderRadius: '20px',
              padding: '4px 10px 4px 4px',
            }}>
              <div className={`crew-avatar avatar-${member?.color || 'navy'}`}
                style={{ width: '28px', height: '28px', fontSize: '12px' }}>
                {name[0]}
              </div>
              <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-primary)' }}>
                {name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Confirmation number - tap to reveal */}
      <div
        onClick={() => setRevealed(!revealed)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 12px',
          background: 'var(--bg-overlay)',
          borderRadius: '8px',
          cursor: 'pointer',
          border: '1px solid var(--border)',
        }}
      >
        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          NCL Confirmation
        </span>
        <span style={{
          fontSize: '13px',
          fontWeight: '600',
          color: revealed ? 'var(--ocean-bright)' : 'var(--text-tertiary)',
          fontFamily: revealed ? 'monospace' : 'inherit',
          letterSpacing: revealed ? '0.08em' : 0,
          filter: revealed ? 'none' : 'blur(5px)',
          transition: 'all 0.3s ease',
          userSelect: revealed ? 'all' : 'none',
        }}>
          {revealed ? room.confirmation : '••••••••'}
        </span>
      </div>
      {!revealed && (
        <div style={{
          fontSize: '11px',
          color: 'var(--text-tertiary)',
          textAlign: 'center',
          marginTop: '4px',
        }}>
          Tap to reveal confirmation number
        </div>
      )}
    </div>
  );
}

// ── Crew Card ────────────────────────────────────────────────
function CrewCard({ member }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '14px 0',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className={`crew-avatar avatar-${member.color}`}>
        {member.name[0]}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{
          fontWeight: '600',
          fontSize: '15px',
          color: 'var(--text-primary)',
          marginBottom: '2px',
        }}>
          {member.name}
        </div>
        <div style={{
          fontSize: '12px',
          color: 'var(--text-secondary)',
        }}>
          {member.role}
        </div>
      </div>
      <div style={{
        fontSize: '12px',
        fontWeight: '600',
        color: 'var(--ocean-bright)',
        background: 'rgba(58,143,191,0.1)',
        padding: '4px 8px',
        borderRadius: '6px',
      }}>
        {member.stateroom}
      </div>
    </div>
  );
}

// ── Ship Facts ───────────────────────────────────────────────
function ShipFacts() {
  const facts = [
    { icon: '📏', value: '965 ft', label: 'Length' },
    { icon: '👥', value: '2,394', label: 'Capacity' },
    { icon: '🏢', value: '16', label: 'Decks' },
    { icon: '🍽', value: '10+', label: 'Restaurants' },
    { icon: '🎭', value: '2007', label: 'Built' },
    { icon: '⚓', value: 'NCL', label: 'Line' },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '10px',
    }}>
      {facts.map(f => (
        <div key={f.label} style={{
          background: 'linear-gradient(135deg, var(--ocean-navy), var(--ocean-deep))',
          borderRadius: '12px',
          padding: '14px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '20px', marginBottom: '4px' }}>{f.icon}</div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '18px',
            fontWeight: '600',
            color: '#FFFFFF',
            lineHeight: 1,
          }}>
            {f.value}
          </div>
          <div style={{
            fontSize: '10px',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '3px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          }}>
            {f.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main Voyage Page ─────────────────────────────────────────
export default function Voyage() {
  const [tab, setTab] = useState('crew');

  return (
    <div className="page-container">
      <div style={{ paddingTop: '28px' }}>

        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <div className="text-eyebrow" style={{ marginBottom: '4px' }}>Norwegian Gem</div>
          <h1 className="display-md" style={{ color: 'var(--text-primary)' }}>
            Our <em style={{ fontStyle: 'italic', color: 'var(--ocean-bright)' }}>Voyage</em>
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
            { id: 'crew',       label: '👨‍👩‍👧‍👦 The Crew' },
            { id: 'staterooms', label: '🛏 Staterooms' },
            { id: 'ship',       label: '🛳 The Ship' },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{
                flex: 1,
                padding: '8px 4px',
                borderRadius: '8px',
                border: 'none',
                background: tab === t.id ? 'var(--bg-card)' : 'transparent',
                color: tab === t.id ? 'var(--text-primary)' : 'var(--text-tertiary)',
                fontSize: '12px',
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

        {/* Crew tab */}
        {tab === 'crew' && (
          <div className="animate-fade-in">
            <div style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
              lineHeight: 1.6,
            }}>
              From North Carolina to Europe 🌊
            </div>
            <div className="card card-padded">
              {crew.map(member => (
                <CrewCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        )}

        {/* Staterooms tab */}
        {tab === 'staterooms' && (
          <div className="animate-fade-in">
            <div style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
              lineHeight: 1.6,
            }}>
              Five staterooms across Decks 8 and 9. Tap any confirmation number to reveal it.
            </div>
            {staterooms.map(room => (
              <StatroomCard key={room.room} room={room} />
            ))}
          </div>
        )}

        {/* Ship tab */}
        {tab === 'ship' && (
          <div className="animate-fade-in">
            <div style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
              lineHeight: 1.6,
            }}>
              Norwegian Gem launched in 2007 and is one of NCL's most beloved mid-size ships. Freestyle cruising means no fixed dining times, no formal dress codes — just go when you feel like it.
            </div>

            <ShipFacts />

            <div style={{ marginTop: '20px' }} className="card card-padded">
              <div style={{
                fontWeight: '600',
                fontSize: '15px',
                color: 'var(--text-primary)',
                marginBottom: '12px',
              }}>
                🌊 What to expect on board
              </div>
              {[
                { icon: '🍽', title: 'Freestyle dining', desc: 'Multiple restaurants, no assigned times. The Grand Pacific and Magenta are the main dining rooms. Cagney\'s Steakhouse and La Cucina are specialty options (extra fee).' },
                { icon: '🍹', title: 'Drinks packages', desc: 'NCL offers beverage packages — check your booking to see what\'s included. The pool bar and atrium bar are central meeting spots.' },
                { icon: '🎭', title: 'Entertainment', desc: 'Live shows, trivia, deck parties, and a casino. Check the NCL app each morning for the day\'s schedule.' },
                { icon: '🏊', title: 'Pool & spa', desc: 'Main pool deck, hot tubs, and a full spa. Pool deck gets busy on sea days — stake your spot early.' },
                { icon: '💳', title: 'Onboard account', desc: 'Your cruise card is your room key and onboard payment method. All charges go to your account and are settled at the end of the cruise.' },
              ].map(item => (
                <div key={item.title} style={{
                  display: 'flex',
                  gap: '12px',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text-primary)', marginBottom: '3px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ height: '32px' }} />
      </div>
    </div>
  );
}