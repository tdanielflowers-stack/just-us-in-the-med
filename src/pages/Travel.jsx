import React, { useState } from 'react';
import { travelGroups, romeDays } from '../data/tripData';

const typeConfig = {
  flight: { icon: '✈️', color: 'var(--ocean-bright)', label: 'Flight' },
  train:  { icon: '🚆', color: 'var(--success)',       label: 'Train'  },
  bus:    { icon: '🚌', color: 'var(--terra)',          label: 'Bus'    },
  ship:   { icon: '🛳', color: 'var(--ocean-navy)',     label: 'Ship'   },
  hotel:  { icon: '🏨', color: 'var(--gold)',           label: 'Hotel'  },
};

// ── Leg Card ─────────────────────────────────────────────────
function LegCard({ leg }) {
  const config = typeConfig[leg.type] || typeConfig.flight;

  if (leg.type === 'hotel') {
    return (
      <div className="card card-padded" style={{ marginBottom: '10px' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: `rgba(212,168,67,0.12)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            flexShrink: 0,
          }}>
            {config.icon}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: '10px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '4px',
            }}>
              Hotel
            </div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              color: 'var(--text-primary)',
              marginBottom: '4px',
              lineHeight: 1.2,
            }}>
              {leg.label}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '2px' }}>
              📍 {leg.address}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '2px' }}>
              Check-in: {leg.checkin}
            </div>
            {leg.checkout && (
              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '2px' }}>
                Check-out: {leg.checkout}
              </div>
            )}
            <div style={{ fontSize: '13px', color: 'var(--ocean-bright)', marginTop: '4px' }}>
              📞 {leg.phone}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card card-padded" style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          background: `rgba(58,143,191,0.1)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
          flexShrink: 0,
          marginTop: '2px',
        }}>
          {config.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '6px',
          }}>
            <div>
              <div style={{
                fontSize: '10px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: config.color,
                marginBottom: '3px',
              }}>
                {config.label} · {leg.carrier}
              </div>
              <div style={{
                fontWeight: '600',
                fontSize: '14px',
                color: 'var(--text-primary)',
              }}>
                {leg.label}
              </div>
            </div>
          </div>

          {/* Route display for flights */}
          {(leg.from && leg.to) && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              margin: '8px 0',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                }}>
                  {leg.from}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                  {leg.departs}
                </div>
              </div>
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2px',
              }}>
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: 'var(--border-strong)',
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    right: '-4px',
                    top: '-6px',
                    fontSize: '10px',
                    color: 'var(--text-tertiary)',
                  }}>▶</span>
                </div>
                <div style={{
                  fontSize: '10px',
                  color: 'var(--text-tertiary)',
                  fontStyle: 'italic',
                }}>
                  {config.icon}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '24px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                }}>
                  {leg.to}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-tertiary)', marginTop: '2px' }}>
                  {leg.arrives}
                </div>
              </div>
            </div>
          )}

          {leg.note && (
            <div style={{
              fontSize: '12px',
              color: 'var(--text-secondary)',
              background: 'var(--bg-overlay)',
              borderRadius: '6px',
              padding: '6px 10px',
              marginTop: '6px',
              lineHeight: 1.5,
            }}>
              💡 {leg.note}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Travel Group Section ─────────────────────────────────────
function TravelGroupSection({ group }) {
  const [open, setOpen] = useState(true);

  const colorMap = {
    terra:  { bg: 'rgba(196,98,45,0.1)',   text: 'var(--terra)' },
    aegean: { bg: 'rgba(58,143,191,0.1)',  text: 'var(--ocean-bright)' },
    ship:   { bg: 'rgba(28,58,94,0.15)',   text: 'var(--ocean-navy)' },
  };
  const colors = colorMap[group.color] || colorMap.aegean;

  return (
    <div style={{ marginBottom: '24px' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 16px',
          background: colors.bg,
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          marginBottom: open ? '12px' : '0',
          fontFamily: 'var(--font-body)',
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <div style={{
            fontWeight: '600',
            fontSize: '14px',
            color: colors.text,
            marginBottom: '2px',
          }}>
            {group.label}
          </div>
          <div style={{
            fontSize: '12px',
            color: 'var(--text-secondary)',
            lineHeight: 1.4,
          }}>
            {group.who}
          </div>
        </div>
        <span style={{
          fontSize: '16px',
          color: 'var(--text-tertiary)',
          transform: open ? 'rotate(180deg)' : 'none',
          transition: 'transform 0.2s ease',
        }}>
          ⌄
        </span>
      </button>

      {open && (
        <div className="animate-fade-in">
          {group.legs.map((leg, i) => (
            <LegCard key={i} leg={leg} />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Rome Days ────────────────────────────────────────────────
function RomeDaysSection() {
  return (
    <div style={{ marginBottom: '24px' }}>
      <div className="text-eyebrow" style={{ marginBottom: '12px' }}>Pre-cruise · Rome</div>

      {romeDays.map((day, i) => (
        <div key={i} className="card card-padded" style={{ marginBottom: '12px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '10px',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                color: 'var(--text-primary)',
                marginBottom: '2px',
              }}>
                {day.date}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                {day.label}
              </div>
            </div>
            <span style={{
              fontSize: '10px',
              fontWeight: '600',
              padding: '4px 8px',
              borderRadius: '20px',
              background: 'rgba(212,168,67,0.12)',
              color: 'var(--gold)',
              border: '1px solid rgba(212,168,67,0.25)',
              whiteSpace: 'nowrap',
            }}>
              ⏳ Coming soon
            </span>
          </div>

          <div style={{
            fontSize: '12px',
            fontWeight: '600',
            color: day.who === 'All 11' ? 'var(--success)' : 'var(--terra)',
            marginBottom: '8px',
          }}>
            {day.who === 'All 11' ? '👨‍👩‍👧‍👦 All 11 together' : '✈️ Group B only'}
          </div>

          {day.coordinatorNote && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(212,168,67,0.08), rgba(212,168,67,0.04))',
              border: '1px solid rgba(212,168,67,0.2)',
              borderRadius: '8px',
              padding: '10px 12px',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '10px',
              fontStyle: 'italic',
            }}>
              {day.coordinatorNote}
            </div>
          )}

          {day.knownItems.length > 0 && (
            <div>
              <div style={{
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-tertiary)',
                marginBottom: '6px',
              }}>
                What we know so far
              </div>
              {day.knownItems.map((item, j) => (
                <div key={j} style={{
                  display: 'flex',
                  gap: '8px',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  padding: '5px 0',
                  borderBottom: j < day.knownItems.length - 1 ? '1px solid var(--border)' : 'none',
                  lineHeight: 1.5,
                }}>
                  <span style={{ color: 'var(--ocean-bright)', flexShrink: 0 }}>•</span>
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Main Travel Page ─────────────────────────────────────────
export default function Travel() {
  return (
    <div className="page-container">
      <div style={{ paddingTop: '28px' }}>

        <div style={{ marginBottom: '24px' }}>
          <div className="text-eyebrow" style={{ marginBottom: '4px' }}>Getting there & back</div>
          <h1 className="display-md" style={{ color: 'var(--text-primary)' }}>
            Travel <em style={{ fontStyle: 'italic', color: 'var(--ocean-bright)' }}>Details</em>
          </h1>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            marginTop: '8px',
            lineHeight: 1.6,
          }}>
            Two groups, two flight paths, one destination. Every leg is here.
          </p>
        </div>

        <RomeDaysSection />

        <div className="text-eyebrow" style={{ marginBottom: '16px' }}>All travel legs</div>

        {travelGroups.map(group => (
          <TravelGroupSection key={group.id} group={group} />
        ))}

        <div style={{ height: '32px' }} />
      </div>
    </div>
  );
}