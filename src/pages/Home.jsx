import React, { useState, useEffect } from 'react';
import HeroSlider from '../components/HeroSlider';
import { tripMeta, ports } from '../data/tripData';

// ── Countdown Timer ──────────────────────────────────────────
function Countdown() {
  const [timeLeft, setTimeLeft] = useState(null);
  const [phase, setPhase] = useState('pre'); // pre | cruise | post

  useEffect(() => {
    function tick() {
      const now = new Date();
      const embark = new Date(tripMeta.embarkDate);
      const depart = new Date(tripMeta.departureDate);
      const returnD = new Date(tripMeta.returnDate);

      if (now >= returnD) {
        setPhase('post');
        return;
      }

      if (now >= embark) {
        setPhase('cruise');
        return;
      }

      const diff = depart - now;
      const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (phase === 'post') return null;

  if (phase === 'cruise') {
    return (
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '13px',
          fontWeight: '600',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--gold-light)',
          marginBottom: '6px',
        }}>
          We're sailing! 🎉
        </div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(28px, 7vw, 44px)',
          color: '#FFFFFF',
          fontStyle: 'italic',
        }}>
          Just Us in the Med
        </div>
      </div>
    );
  }

  if (!timeLeft) return null;

  const units = [
    { value: timeLeft.days,    label: 'days' },
    { value: timeLeft.hours,   label: 'hrs' },
    { value: timeLeft.minutes, label: 'min' },
    { value: timeLeft.seconds, label: 'sec' },
  ];

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.6)',
        marginBottom: '12px',
      }}>
        Until the adventure begins
      </div>
      <div style={{
        display: 'flex',
        gap: '8px',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
        {units.map(({ value, label }) => (
          <div key={label} style={{ textAlign: 'center' }}>
            <div style={{
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '10px',
              padding: '10px 14px',
              minWidth: '60px',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(26px, 7vw, 40px)',
                fontWeight: '600',
                color: '#FFFFFF',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
              }}>
                {String(value).padStart(2, '0')}
              </div>
            </div>
            <div style={{
              fontSize: '10px',
              fontWeight: '500',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '5px',
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Trip Progress Bar ────────────────────────────────────────
function TripProgress() {
  const start  = new Date(tripMeta.departureDate);
  const end    = new Date(tripMeta.returnDate);
  const now    = new Date();

  let pct = 0;
  let label = '';
  let sublabel = '';

  if (now < start) {
    pct = 0;
    const daysUntil = Math.ceil((start - now) / (1000 * 60 * 60 * 24));
    label = 'Trip hasn\'t started yet';
    sublabel = `${daysUntil} days to go`;
  } else if (now > end) {
    pct = 100;
    label = 'Trip complete';
    sublabel = 'What a journey 🎉';
  } else {
    pct = Math.round(((now - start) / (end - start)) * 100);
    label = `${pct}% of the journey complete`;

    // Find today's port
    const todayPort = ports.find(p => {
      const d = new Date(p.isoDate);
      return d.toDateString() === now.toDateString();
    });
    sublabel = todayPort
      ? `Today: ${todayPort.name} ${todayPort.flag}`
      : 'Adventure in progress';
  }

  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: '8px',
      }}>
        <span style={{
          fontSize: '13px',
          fontWeight: '500',
          color: 'var(--text-primary)',
        }}>
          {label}
        </span>
        <span style={{
          fontSize: '12px',
          color: 'var(--text-tertiary)',
        }}>
          {sublabel}
        </span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${pct}%` }}
        />
      </div>

      {/* Port milestones */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '8px',
        position: 'relative',
      }}>
        {ports.map((port, i) => {
          const portDate = new Date(port.isoDate);
          const isPast = now > portDate;
          const isToday = portDate.toDateString() === now.toDateString();
          return (
            <div key={port.id} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3px',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: isToday
                  ? 'var(--gold)'
                  : isPast
                    ? 'var(--ocean-bright)'
                    : 'var(--border-strong)',
                border: isToday ? '2px solid var(--gold-light)' : 'none',
                transition: 'all 0.3s ease',
              }} />
              <span style={{
                fontSize: '9px',
                color: isToday ? 'var(--gold)' : isPast ? 'var(--ocean-bright)' : 'var(--text-tertiary)',
                fontWeight: isToday ? '600' : '400',
                whiteSpace: 'nowrap',
              }}>
                {port.flag}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Today's Port Card ────────────────────────────────────────
function TodayCard({ onExplore }) {
  const now = new Date();
  const embark = new Date(tripMeta.embarkDate);
  const returnD = new Date(tripMeta.returnDate);

  if (now < embark || now > returnD) return null;

  const todayPort = ports.find(p => {
    const d = new Date(p.isoDate);
    return d.toDateString() === now.toDateString();
  });

  if (!todayPort) return null;

  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text-eyebrow)',
        marginBottom: '10px',
      }}>
        📍 Today's Adventure
      </div>
      <div
        className="card"
        style={{
          background: 'linear-gradient(135deg, var(--ocean-navy), var(--ocean-mid))',
          border: 'none',
          padding: '20px',
          cursor: 'pointer',
        }}
        onClick={() => onExplore(todayPort.id)}
      >
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}>
          <div>
            <div style={{
              fontSize: '32px',
              lineHeight: 1,
              marginBottom: '6px',
            }}>
              {todayPort.flag}
            </div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '28px',
              color: '#FFFFFF',
              lineHeight: 1.1,
              marginBottom: '4px',
            }}>
              {todayPort.name}
            </div>
            <div style={{
              fontSize: '13px',
              color: 'rgba(255,255,255,0.65)',
            }}>
              {todayPort.country}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.5)',
              marginBottom: '4px',
            }}>
              Ashore
            </div>
            <div style={{
              fontSize: '13px',
              fontWeight: '500',
              color: 'var(--gold-light)',
            }}>
              {todayPort.arrives} – {todayPort.departs}
            </div>
            <div style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.45)',
              marginTop: '2px',
            }}>
              {todayPort.hoursAshore}
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '14px',
          padding: '10px 12px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '8px',
          fontSize: '13px',
          color: 'rgba(255,255,255,0.8)',
          fontStyle: 'italic',
        }}>
          {todayPort.tagline}
        </div>

        <div style={{
          marginTop: '12px',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          Tap to explore this port →
        </div>
      </div>
    </div>
  );
}

// ── Quick Stats ──────────────────────────────────────────────
function QuickStats() {
  const stats = [
    { value: '11', label: 'Crew', icon: '👨‍👩‍👧‍👦' },
    { value: '6',  label: 'Ports', icon: '⚓' },
    { value: '5',  label: 'Countries', icon: '🌍' },
    { value: '8',  label: 'Nights at sea', icon: '🌊' },
  ];

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '10px',
      padding: '0 20px',
    }}>
      {stats.map(s => (
        <div
          key={s.label}
          className="card"
          style={{ padding: '14px 8px', textAlign: 'center' }}
        >
          <div style={{ fontSize: '20px', marginBottom: '4px' }}>{s.icon}</div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '24px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            lineHeight: 1,
          }}>
            {s.value}
          </div>
          <div style={{
            fontSize: '10px',
            color: 'var(--text-tertiary)',
            marginTop: '3px',
            fontWeight: '500',
          }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Upcoming Ports Strip ─────────────────────────────────────
function UpcomingPorts({ onExplore }) {
  const now = new Date();
  const upcoming = ports;

  

  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--text-tertiary)',
        marginBottom: '12px',
      }}>
        Coming up
      </div>
      <div className="scroll-x">
        {upcoming.map(port => (
          <div
            key={port.id}
            onClick={() => onExplore(port.id)}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '14px 16px',
              width: '150px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '6px' }}>{port.flag}</div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '17px',
              color: 'var(--text-primary)',
              marginBottom: '3px',
            }}>
              {port.name}
            </div>
            <div style={{
              fontSize: '11px',
              color: 'var(--text-tertiary)',
            }}>
              {port.date.split(',')[1]?.trim() || port.date}
            </div>
            <div style={{
              fontSize: '11px',
              color: 'var(--ocean-bright)',
              marginTop: '4px',
              fontWeight: '500',
            }}>
              {port.hoursAshore}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Home Page ───────────────────────────────────────────
export default function Home({ onNavigate }) {
  const handleExplore = (portId) => {
    onNavigate('explore', portId);
  };

  return (
    <div>
      {/* Hero */}
      <HeroSlider>
  <div style={{
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '0 24px 100px',
  }}>
    {/* Title block */}
    <div style={{ marginBottom: '28px', textAlign: 'center' }}>
      <div style={{
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.55)',
        marginBottom: '8px',
      }}>
        Family Trip · September 2026
      </div>
      <h1 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(38px, 10vw, 64px)',
        fontWeight: '400',
        color: '#FFFFFF',
        lineHeight: 1.05,
        letterSpacing: '-0.01em',
        marginBottom: '6px',
      }}>
        Just Us<br />
        <em style={{ color: 'var(--gold-light)' }}>in the Med</em>
      </h1>
      <div style={{
        fontSize: '14px',
        color: 'rgba(255,255,255,0.55)',
        fontStyle: 'italic',
      }}>
        The whole crew. The Mediterranean. A lot of gelato.
      </div>
    </div>

    {/* Countdown */}
    <Countdown />
  </div>
</HeroSlider>

      {/* Page content */}
      <div style={{ paddingTop: '28px', display: 'flex', flexDirection: 'column', gap: '28px', paddingBottom: '100px' }}>

        {/* Trip progress */}
        <div>
          <div style={{
            fontSize: '11px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--text-tertiary)',
            marginBottom: '12px',
            padding: '0 20px',
          }}>
            Our voyage
          </div>
          <TripProgress />
        </div>

        {/* Today's port (only shows during cruise) */}
        <TodayCard onExplore={handleExplore} />

        {/* Stats */}
        <QuickStats />

        {/* Upcoming ports */}
        <UpcomingPorts onExplore={handleExplore} />

        {/* NCL App nudge */}
        <div style={{ padding: '0 20px' }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--ocean-navy), var(--ocean-deep))',
            borderRadius: '16px',
            padding: '20px',
            display: 'flex',
            gap: '14px',
            alignItems: 'flex-start',
          }}>
            <div style={{ fontSize: '28px', flexShrink: 0 }}>📱</div>
            <div>
              <div style={{
                fontWeight: '600',
                fontSize: '14px',
                color: '#FFFFFF',
                marginBottom: '4px',
              }}>
                Download the NCL app
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.5,
              }}>
                Once on board, the Norwegian app is your daily hub — dining, schedules, messaging the group. Download it before you fly.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}