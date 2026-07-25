import React, { useState, useEffect, useRef } from 'react';
import { ports } from '../data/tripData';

const tagClassMap = {
  'Active':        'tag-active',
  'Historical':    'tag-history',
  'City':          'tag-city',
  'Tour included': 'tag-tour',
  'On foot':       'tag-walk',
  'Water':         'tag-water',
};

// ── Weather Widget ───────────────────────────────────────────
function WeatherWidget({ city, isoDate }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const coords = {
      'Salerno':  { lat: 40.68, lon: 14.76 },
      'Catania':  { lat: 37.50, lon: 15.09 },
      'Corfu':    { lat: 39.62, lon: 19.92 },
      'Kotor':    { lat: 42.42, lon: 18.77 },
      'Split':    { lat: 43.51, lon: 16.44 },
      'Trieste':  { lat: 45.65, lon: 13.77 },
    };

    const c = coords[city];
    if (!c) { setLoading(false); return; }

    // Only fetch within a reasonable forecast window (16 days)
    const portDate = new Date(isoDate);
    const now = new Date();
    const diffDays = Math.ceil((portDate - now) / (1000 * 60 * 60 * 24));

    if (diffDays > 16 || diffDays < -1) {
      setLoading(false);
      return;
    }

    const dateStr = isoDate;
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${c.lat}&longitude=${c.lon}&daily=temperature_2m_max,temperature_2m_min,weathercode,precipitation_probability_max&temperature_unit=fahrenheit&timezone=auto&start_date=${dateStr}&end_date=${dateStr}`
    )
      .then(r => r.json())
      .then(data => {
        if (data.daily?.temperature_2m_max?.[0]) {
          setWeather({
            high: Math.round(data.daily.temperature_2m_max[0]),
            low:  Math.round(data.daily.temperature_2m_min[0]),
            code: data.daily.weathercode[0],
            rain: data.daily.precipitation_probability_max[0],
          });
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [city, isoDate]);

  const getWeatherEmoji = (code) => {
    if (code === 0) return '☀️';
    if (code <= 2) return '⛅';
    if (code <= 3) return '☁️';
    if (code <= 67) return '🌧️';
    if (code <= 77) return '🌨️';
    return '⛈️';
  };

  if (loading) {
    return (
      <div style={{
        background: 'var(--bg-overlay)',
        borderRadius: '10px',
        padding: '12px',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}>
        <div className="skeleton" style={{ width: '32px', height: '32px', borderRadius: '6px' }} />
        <div>
          <div className="skeleton" style={{ width: '80px', height: '14px', marginBottom: '4px' }} />
          <div className="skeleton" style={{ width: '120px', height: '12px' }} />
        </div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div style={{
        background: 'var(--bg-overlay)',
        borderRadius: '10px',
        padding: '12px',
        marginBottom: '16px',
        fontSize: '13px',
        color: 'var(--text-tertiary)',
        fontStyle: 'italic',
      }}>
        🌤 Weather forecast available closer to your port date
      </div>
    );
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(58,143,191,0.12), rgba(58,143,191,0.06))',
      border: '1px solid rgba(58,143,191,0.2)',
      borderRadius: '10px',
      padding: '12px 16px',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    }}>
      <span style={{ fontSize: '32px' }}>{getWeatherEmoji(weather.code)}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: '600', fontSize: '14px', color: 'var(--text-primary)' }}>
          {weather.high}°F / {weather.low}°F
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          {weather.rain}% chance of rain · {city}
        </div>
      </div>
      <div style={{
        fontSize: '10px',
        color: 'var(--text-tertiary)',
        textAlign: 'right',
        lineHeight: 1.4,
      }}>
        Forecast<br />for port day
      </div>
    </div>
  );
}

// ── Port Detail View ─────────────────────────────────────────
function PortDetail({ port, onBack }) {
  return (
    <div className="animate-fade-in">
      {/* Hero image */}
      <div style={{
        position: 'relative',
        height: '240px',
        background: 'var(--ocean-deep)',
        overflow: 'hidden',
      }}>
        <img
          src={port.heroImage}
          alt={port.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.85,
          }}
          onError={e => { e.target.style.display = 'none'; }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,22,40,0.3), rgba(10,22,40,0.7))',
        }} />

        {/* Back button */}
        <button
          onClick={onBack}
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: 'rgba(10,22,40,0.6)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '20px',
            padding: '6px 14px',
            color: '#FFFFFF',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontFamily: 'var(--font-body)',
          }}
        >
          ← Back
        </button>

        {/* Port title overlay */}
        <div style={{
          position: 'absolute',
          bottom: '16px',
          left: '20px',
          right: '20px',
        }}>
          <div style={{
            fontSize: '28px',
            marginBottom: '2px',
          }}>
            {port.flag}
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '32px',
            color: '#FFFFFF',
            fontWeight: '400',
            lineHeight: 1.1,
          }}>
            {port.name}
          </div>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>
            {port.country} · {port.date}
          </div>
        </div>
      </div>

      {/* Detail content */}
      <div className="page-container">
        <div style={{ paddingTop: '20px' }}>

          {/* Time badges */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <div style={{
              background: 'var(--ocean-navy)',
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: '5px 12px',
              fontSize: '13px',
              fontWeight: '500',
            }}>
              Arrives {port.arrives}
            </div>
            <div style={{
              background: 'var(--ocean-navy)',
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: '5px 12px',
              fontSize: '13px',
              fontWeight: '500',
            }}>
              Departs {port.departs}
            </div>
            <div style={{
              background: 'rgba(212,168,67,0.15)',
              color: 'var(--gold)',
              borderRadius: '20px',
              padding: '5px 12px',
              fontSize: '13px',
              fontWeight: '500',
              border: '1px solid rgba(212,168,67,0.3)',
            }}>
              ⏱ {port.hoursAshore}
            </div>
          </div>

          {/* Intro */}
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            marginBottom: '16px',
          }}>
            {port.intro}
          </p>

          {/* Weather */}
          <WeatherWidget city={port.weatherCity} isoDate={port.isoDate} />

          {/* Transport */}
          <div style={{ marginBottom: '20px' }}>
            <div className="text-eyebrow" style={{ marginBottom: '10px' }}>Getting around</div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {port.transport.map((t, i) => (
                <div key={i} className="transport-chip">{t}</div>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div style={{ marginBottom: '20px' }}>
            <div className="text-eyebrow" style={{ marginBottom: '12px' }}>Things to do</div>
            {port.activities.map((act, i) => (
              <div key={i} className="card card-padded" style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <span style={{ fontSize: '24px', flexShrink: 0 }}>{act.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontWeight: '600',
                      fontSize: '15px',
                      color: 'var(--text-primary)',
                      marginBottom: '4px',
                    }}>
                      {act.name}
                    </div>
                    <div style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '8px',
                    }}>
                      {act.desc}
                    </div>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {act.tags.map(tag => (
                        <span key={tag} className={`tag ${tagClassMap[tag] || 'tag-city'}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tip */}
          <div className="tip-box" style={{ marginBottom: '32px' }}>
            <div className="tip-box-label">Tip for the group</div>
            <div className="tip-box-text">{port.tip}</div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Port Card (scroll strip) ─────────────────────────────────
function PortCard({ port, isActive, onClick }) {
  const now = new Date();
  const portDate = new Date(port.isoDate);
  const isToday = portDate.toDateString() === now.toDateString();
  const isPast = portDate < now;

  return (
    <div
      onClick={onClick}
      style={{
        width: '160px',
        height: '200px',
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        flexShrink: 0,
        border: isActive ? '2px solid var(--ocean-bright)' : '2px solid transparent',
        transition: 'all 0.2s ease',
        opacity: isPast && !isToday ? 0.65 : 1,
      }}
    >
      {/* Background image */}
      <img
        src={port.heroImage}
        alt={port.name}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(10,22,40,0.1) 0%, rgba(10,22,40,0.75) 100%)',
      }} />

      {/* Today badge */}
      {isToday && (
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'var(--gold)',
          color: 'var(--ocean-deep)',
          borderRadius: '20px',
          padding: '3px 8px',
          fontSize: '10px',
          fontWeight: '700',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}>
          Today
        </div>
      )}

      {/* Content */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '12px',
      }}>
        <div style={{ fontSize: '20px', marginBottom: '3px' }}>{port.flag}</div>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '18px',
          color: '#FFFFFF',
          lineHeight: 1.1,
          marginBottom: '2px',
        }}>
          {port.name}
        </div>
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.65)' }}>
          {port.date.split(',')[1]?.trim()}
        </div>
        <div style={{
          fontSize: '10px',
          color: 'var(--gold-light)',
          marginTop: '3px',
          fontWeight: '500',
        }}>
          {port.hoursAshore}
        </div>
      </div>
    </div>
  );
}

// ── Main Explore Page ────────────────────────────────────────
export default function Explore({ initialPortId }) {
  const [selectedPort, setSelectedPort] = useState(
    initialPortId ? ports.find(p => p.id === initialPortId) : null
  );
  const scrollRef = useRef(null);

  useEffect(() => {
    if (initialPortId) {
      const port = ports.find(p => p.id === initialPortId);
      if (port) setSelectedPort(port);
    }
  }, [initialPortId]);

  if (selectedPort) {
    return (
      <PortDetail
        port={selectedPort}
        onBack={() => setSelectedPort(null)}
      />
    );
  }

  return (
    <div>
      <div className="page-container">
        <div style={{ paddingTop: '28px', marginBottom: '20px' }}>
          <div className="text-eyebrow" style={{ marginBottom: '4px' }}>Sep 7–12 · Six ports</div>
          <h1 className="display-md" style={{ color: 'var(--text-primary)' }}>
            Explore the <em style={{ fontStyle: 'italic', color: 'var(--ocean-bright)' }}>Ports</em>
          </h1>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            marginTop: '8px',
            lineHeight: 1.6,
          }}>
            No rental cars. Everything here works for a group of 11 — on foot, by transit, or with a tour that handles the transport.
          </p>
        </div>
      </div>

      {/* Horizontal scroll strip - full bleed */}
      <div style={{ paddingLeft: '20px', marginBottom: '28px' }}>
        <div className="scroll-x" ref={scrollRef} style={{ paddingRight: '20px' }}>
          {ports.map(port => (
            <PortCard
              key={port.id}
              port={port}
              isActive={selectedPort?.id === port.id}
              onClick={() => setSelectedPort(port)}
            />
          ))}
        </div>
      </div>

      {/* Port list */}
      <div className="page-container">
        <div className="text-eyebrow" style={{ marginBottom: '12px' }}>All ports</div>
        {ports.map(port => {
          const portDate = new Date(port.isoDate);
          const now = new Date();
          const isToday = portDate.toDateString() === now.toDateString();

          return (
            <div
              key={port.id}
              onClick={() => setSelectedPort(port)}
              className="card"
              style={{
                marginBottom: '10px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: isToday ? '1px solid var(--gold)' : '1px solid var(--border)',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px',
              }}>
                <div style={{ fontSize: '32px' }}>{port.flag}</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '20px',
                    color: 'var(--text-primary)',
                    marginBottom: '2px',
                  }}>
                    {port.name}
                    {isToday && (
                      <span style={{
                        marginLeft: '8px',
                        fontSize: '10px',
                        fontFamily: 'var(--font-body)',
                        fontWeight: '700',
                        background: 'var(--gold)',
                        color: 'var(--ocean-deep)',
                        padding: '2px 7px',
                        borderRadius: '20px',
                        verticalAlign: 'middle',
                      }}>TODAY</span>
                    )}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {port.country} · {port.date}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--text-tertiary)',
                    marginTop: '2px',
                    fontStyle: 'italic',
                  }}>
                    {port.tagline}
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '500',
                    color: 'var(--ocean-bright)',
                  }}>
                    {port.hoursAshore}
                  </div>
                  <div style={{
                    fontSize: '11px',
                    color: 'var(--text-tertiary)',
                    marginTop: '2px',
                  }}>
                    {port.arrives}–{port.departs}
                  </div>
                  <div style={{
                    fontSize: '18px',
                    color: 'var(--text-tertiary)',
                    marginTop: '4px',
                  }}>
                    →
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div style={{ height: '32px' }} />
      </div>
    </div>
  );
}