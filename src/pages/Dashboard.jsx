import { SpeedDial } from '../components/FabSpeedDial';

const stats = [
  { label: 'Total Foto', value: '12.4K', delta: '+12%', tone: 'primary' },
  { label: 'Creator Aktif', value: '3.2K', delta: '+4%', tone: 'accent' },
  { label: 'Engagement', value: '82%', delta: '+9%', tone: 'secondary' },
];

const engagementBreakdown = [
  { label: 'Like', value: '1.2K', height: 84 },
  { label: 'Simpan', value: '986', height: 65 },
  { label: 'Bagikan', value: '612', height: 48 },
  { label: 'Komentar', value: '302', height: 32 },
];

const quickActions = [
  { icon: '📸', label: 'Upload Foto' },
  { icon: '🎬', label: 'Buat Story' },
  { icon: '🗓️', label: 'Jadwalkan' },
];

const spotlightCreators = [
  {
    name: 'Naira Laksmi',
    handle: '@nairashoots',
    color: 'sunset',
    followers: '98K',
    focus: 'Street & Lifestyle',
  },
  {
    name: 'Rivaldo Hart',
    handle: '@rivaldohart',
    color: 'aqua',
    followers: '76K',
    focus: 'Night Portrait',
  },
  {
    name: 'Mika Adi',
    handle: '@mika.frame',
    color: 'violet',
    followers: '51K',
    focus: 'Editorial Fashion',
  },
];

const activityFeed = [
  {
    title: 'Mentoring Mingguan',
    detail: '12 creator baru mengikuti sesi editing minimalis.',
    time: '10 menit lalu',
  },
  {
    title: 'Koleksi “City Neon”',
    detail: 'Terjual 24 preset tone malam dengan rating 4.9.',
    time: '1 jam lalu',
  },
  {
    title: 'Challenge #FrameSunrise',
    detail: '156 foto diunggah dalam 6 jam pertama.',
    time: '3 jam lalu',
  },
];

const feedCollections = [
  { title: 'Street Bloom', author: 'Naira', tag: 'Urban', tone: 'sunset' },
  { title: 'Night Pulse', author: 'Rivaldo', tag: 'Lowlight', tone: 'violet' },
  { title: 'Cozy Flatlay', author: 'Maya', tag: 'Product', tone: 'mint' },
  { title: 'City Reflections', author: 'Kavin', tag: 'Architecture', tone: 'aqua' },
  { title: 'Portrait Mood', author: 'Mika', tag: 'People', tone: 'sand' },
  { title: 'Nordic Calm', author: 'Kayra', tag: 'Minimal', tone: 'cloud' },
];

const onboardingSteps = [
  {
    title: '1. Buat Profil',
    detail: 'Isi portofolio ringkas dan highlight gaya foto favorit Anda.',
  },
  {
    title: '2. Unggah 6 Foto',
    detail: 'Gunakan template grid 3 kolom untuk menjaga ritme feed.',
  },
  {
    title: '3. Aktifkan Showcase',
    detail: 'Pilih layout carousel atau masonry untuk halaman utama.',
  },
];

export const DashboardPage = () => {
  return (
    <div className="sm-page">
      <header className="sm-page__header">
        <div>
          <p className="sm-meta">Selamat datang kembali, FrameFlow Crew</p>
          <h1 className="sm-page__title">Dashboard Demo Style</h1>
          <p className="sm-page__descriptor">
            Semua komponen, class, dan utilitas yang kita siapkan bisa dicoba langsung
            lewat data dummy di sini.
          </p>
        </div>
        <div className="sm-button-row">
          <button className="sm-button sm-button--primary sm-button--lg">
            + Unggah Koleksi
          </button>
          <button className="sm-button sm-button--ghost sm-button--lg">
            Lihat Rencana Demo
          </button>
        </div>
      </header>

      <section className="sm-section">
        <h2 className="sm-section__title">Ringkasan Komunitas</h2>
        <div className="sm-grid sm-grid--cols-3">
          {stats.map((item) => (
            <article key={item.label} className={`sm-card sm-card--stat is-${item.tone}`}>
              <header className="sm-card__header">
                <p className="sm-meta">{item.label}</p>
                <span className="sm-pill sm-pill--soft">{item.delta}</span>
              </header>
              <div className="sm-card__body">
                <p className="sm-stat__value">{item.value}</p>
                <p className="sm-stat__hint">7 hari terakhir</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sm-section">
        <div className="sm-section__header">
          <h2 className="sm-section__title">Sesi Onboarding</h2>
          <div className="sm-badge-stack">
            <span className="sm-pill sm-pill--glow">Alur Registrasi</span>
            <span className="sm-pill sm-pill--outline">Demo Form</span>
            <span className="sm-pill sm-pill--outline">Progress Step</span>
          </div>
        </div>
        <div className="sm-grid sm-grid--cols-3 sm-grid--auto">
          {onboardingSteps.map((step) => (
            <article key={step.title} className="sm-card sm-card--soft sm-card--hover">
              <header className="sm-card__header">
                <h3 className="sm-heading-sm">{step.title}</h3>
              </header>
              <p className="sm-card__body sm-text-muted">{step.detail}</p>
              <footer className="sm-card__footer">
                <button className="sm-button sm-button--text">Lihat contoh</button>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="sm-section">
        <div className="sm-section__header">
          <h2 className="sm-section__title">Insight Chart</h2>
          <span className="sm-pill sm-pill--outline">Referensi Template Chart</span>
        </div>
        <div className="sm-grid sm-grid--cols-2 sm-grid--auto">
          <article className="sm-card sm-card--soft">
            <h3 className="sm-heading-sm">Engagement Breakdown</h3>
            <div className="sm-chart sm-chart--bar">
              {engagementBreakdown.map((item) => (
                <div
                  key={item.label}
                  className="sm-chart__bar"
                  style={{ height: `${item.height}%` }}
                  data-label={item.label}
                  data-value={item.value}
                />
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="sm-section">
        <div className="sm-section__header">
          <h2 className="sm-section__title">Feed Koleksi Foto</h2>
          <button className="sm-button sm-button--outline sm-button--icon">
            🎞️ <span>Atur Layout</span>
          </button>
        </div>
        <div className="sm-photo-grid">
          {feedCollections.map((collection) => (
            <article
              key={collection.title}
              className={`sm-photo-card sm-photo-card--${collection.tone}`}
            >
              <div className="sm-photo-card__media" />
              <div className="sm-photo-card__body">
                <p className="sm-heading-sm">{collection.title}</p>
                <p className="sm-text-muted">
                  oleh {collection.author} •{' '}
                  <span className="sm-pill sm-pill--soft">{collection.tag}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sm-section">
        <div className="sm-section__header">
          <h2 className="sm-section__title">Creator Spotlight</h2>
          <button className="sm-button sm-button--ghost sm-button--icon">
            ⭐ <span>Filter Badge</span>
          </button>
        </div>
        <div className="sm-grid sm-grid--cols-3">
          {spotlightCreators.map((creator) => (
            <article
              key={creator.handle}
              className={`sm-card sm-card--profile sm-card--blend-${creator.color}`}
            >
              <header className="sm-card__header sm-flex-between">
                <div className="sm-flex sm-gap-sm">
                  <span className={`sm-avatar sm-avatar--${creator.color}`}>{creator.name[0]}</span>
                  <div>
                    <p className="sm-heading-sm">{creator.name}</p>
                    <p className="sm-text-muted">{creator.handle}</p>
                  </div>
                </div>
                <span className="sm-pill sm-pill--outline">{creator.followers}</span>
              </header>
              <p className="sm-card__body sm-text-muted">{creator.focus}</p>
              <footer className="sm-card__footer sm-flex-between">
                <button className="sm-button sm-button--primary sm-button--sm">
                  Ikuti
                </button>
                <button className="sm-button sm-button--ghost sm-button--sm">
                  Kirim Pesan
                </button>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="sm-section">
        <div className="sm-section__header">
          <h2 className="sm-section__title">Aktivitas Terbaru</h2>
          <span className="sm-pill sm-pill--soft sm-pill--pulse">Live</span>
        </div>
        <div className="sm-activity-feed">
          {activityFeed.map((item) => (
            <article key={item.title} className="sm-activity">
              <span className="sm-activity__dot" />
              <div>
                <p className="sm-heading-sm">{item.title}</p>
                <p className="sm-text-muted">{item.detail}</p>
              </div>
              <span className="sm-meta">{item.time}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="sm-section">
        <div className="sm-grid sm-grid--cols-2 sm-grid--center">
          <div className="sm-card sm-card--glass sm-auth-card">
            <header className="sm-card__header sm-flex-between">
              <h2 className="sm-section__title">Demo Form Login</h2>
              <span className="sm-pill sm-pill--outline">Auth Style</span>
            </header>
            <form className="sm-form sm-stack sm-gap-md">
              <label className="sm-field">
                <span className="sm-label">Email</span>
                <input className="sm-input" type="email" placeholder="creators@frameflow.com" />
              </label>
              <label className="sm-field">
                <span className="sm-label">Password</span>
                <input className="sm-input" type="password" placeholder="Minimal 8 karakter" />
              </label>
              <div className="sm-flex-between sm-align-center">
                <label className="sm-checkbox">
                  <input type="checkbox" /> <span>Ingat saya</span>
                </label>
                <button className="sm-button sm-button--text sm-button--sm">
                  Lupa password?
                </button>
              </div>
              <button className="sm-button sm-button--primary sm-button--lg" type="button">
                Masuk ke Studio
              </button>
            </form>
          </div>
          <div className="sm-card sm-card--soft sm-card--hover">
            <header className="sm-card__header">
              <h2 className="sm-section__title">Tabel Audit Style</h2>
              <p className="sm-text-muted">Gunakan class tabel untuk daftar presensi atau koleksi.</p>
            </header>
            <div className="sm-table-wrapper">
              <table className="sm-table sm-table--striped">
                <thead>
                  <tr>
                    <th>Paket</th>
                    <th>Creator</th>
                    <th>Status</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Preset Neon</td>
                    <td>Naira</td>
                    <td>
                      <span className="sm-pill sm-pill--soft">Publish</span>
                    </td>
                    <td>
                      <button className="sm-button sm-button--ghost sm-button--sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Story Filter</td>
                    <td>Mika</td>
                    <td>
                      <span className="sm-pill sm-pill--outline">Draft</span>
                    </td>
                    <td>
                      <button className="sm-button sm-button--ghost sm-button--sm">Detail</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Photo Walk</td>
                    <td>Rivaldo</td>
                    <td>
                      <span className="sm-pill sm-pill--soft">Penuh</span>
                    </td>
                    <td>
                      <button className="sm-button sm-button--ghost sm-button--sm">Detail</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <SpeedDial
        className="sm-speed-dial-floating"
        items={quickActions}
        variant="accent"
      />
    </div>
  );
};

export default DashboardPage;
