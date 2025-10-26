import fs from 'fs';
const content = `import { Link, useParams } from 'react-router-dom';
import { templateSections } from '../data/templateSections';
import { SpeedDial } from '../components/FabSpeedDial';

const buttonPalettes = [
  { label: 'Primary', className: 'sm-button sm-button--primary sm-button--lg' },
  { label: 'Secondary', className: 'sm-button sm-button--secondary sm-button--lg' },
  { label: 'Accent', className: 'sm-button sm-button--accent sm-button--lg' },
  { label: 'Outline', className: 'sm-button sm-button--outline sm-button--lg' },
  { label: 'Ghost', className: 'sm-button sm-button--ghost sm-button--lg' },
];

const gradientButtons = [
  {
    label: 'Sunrise',
    className: 'sm-button sm-button--lg',
    style: { background: 'linear-gradient(135deg, #f97316, #fb7185)', color: '#fff' },
  },
  {
    label: 'Aqua',
    className: 'sm-button sm-button--lg',
    style: { background: 'linear-gradient(135deg, #22d3ee, #6366f1)', color: '#0b1025' },
  },
  {
    label: 'Forest',
    className: 'sm-button sm-button--lg',
    style: { background: 'linear-gradient(135deg, #4ade80, #22c55e)', color: '#052e16' },
  },
  {
    label: 'Night',
    className: 'sm-button sm-button--lg',
    style: { background: 'linear-gradient(135deg, #0ea5e9, #312e81)', color: '#f8fafc' },
  },
];

const segmentedActions = ['Galeri', 'Preset', 'Story'];

const ButtonShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Variasi tombol FrameFlow mencakup warna utama, gradien, ikon, group segmented, dan kontrol switch.
    </p>
    <div>
      <p className="sm-heading-sm">Palet Aksi</p>
      <div className="sm-button-row">
        {buttonPalettes.map((button) => (
          <button key={button.label} className={button.className}>
            {button.label}
          </button>
        ))}
      </div>
    </div>
    <div>
      <p className="sm-heading-sm">Gradien &amp; Icon</p>
      <div className="sm-button-row">
        {gradientButtons.map((button) => (
          <button key={button.label} className={button.className} style={button.style}>
            {button.label}
          </button>
        ))}
        <button className="sm-button sm-button--icon sm-button--primary sm-button--lg">
          ❤️ <span>Sukai</span>
        </button>
        <button className="sm-button sm-button--icon sm-button--outline sm-button--lg">
          🔗 <span>Bagikan</span>
        </button>
      </div>
    </div>
    <div>
      <p className="sm-heading-sm">Segmented Group</p>
      <div
        className="sm-button-row"
        style={{ background: 'rgba(99,102,241,0.08)', padding: '0.4rem', borderRadius: '999px' }}
      >
        {segmentedActions.map((item, index) => (
          <button
            key={item}
            className={`sm-button sm-button--sm ${index === 0 ? 'sm-button--primary' : 'sm-button--ghost'}`}
            style={{ borderRadius: '999px' }}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
    <div>
      <p className="sm-heading-sm">Switch &amp; Checkbox</p>
      <div className="sm-control-grid">
        <label className="sm-control sm-control--checkbox sm-control--primary">
          <input type="checkbox" defaultChecked />
          <span className="sm-control__decor" />
          <span className="sm-control__label">Checklist Aktif</span>
        </label>
        <label className="sm-control sm-control--checkbox sm-control--soft">
          <input type="checkbox" />
          <span className="sm-control__decor" />
          <span className="sm-control__label">Checklist Soft</span>
        </label>
        <label className="sm-toggle">
          <input className="sm-toggle__input" type="checkbox" defaultChecked />
          <span className="sm-toggle__track">
            <span className="sm-toggle__thumb" />
          </span>
          <span className="sm-toggle__label">Live Preview</span>
        </label>
        <label className="sm-toggle sm-toggle--outline">
          <input className="sm-toggle__input" type="checkbox" />
          <span className="sm-toggle__track">
            <span className="sm-toggle__thumb" />
          </span>
          <span className="sm-toggle__label">Mode Malam</span>
        </label>
      </div>
    </div>
  </div>
);

const NavbarShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Contoh navbar solid, glass, tab underline, hingga layout split yang memuat tombol aksi.
    </p>
    <nav className="sm-navbar sm-navbar--solid">
      <div className="sm-navbar__brand">FrameFlow</div>
      <ul className="sm-navbar__links">
        <li>
          <span className="sm-nav-chip is-active">Beranda</span>
        </li>
        <li>
          <span className="sm-nav-chip">Eksplor</span>
        </li>
        <li>
          <span className="sm-nav-chip">Creator</span>
        </li>
      </ul>
      <button className="sm-button sm-button--primary sm-button--sm">Upload</button>
    </nav>
    <nav className="sm-navbar sm-navbar--glass">
      <div className="sm-navbar__brand">FrameFlow</div>
      <ul className="sm-navbar__links">
        <li>
          <span className="sm-nav-link-light">Feed</span>
        </li>
        <li>
          <span className="sm-nav-link-light">Story</span>
        </li>
        <li>
          <span className="sm-nav-link-light">Live</span>
        </li>
      </ul>
      <div className="sm-navbar__actions">
        <button className="sm-button sm-button--ghost sm-button--sm">Masuk</button>
        <button className="sm-button sm-button--accent sm-button--sm">Daftar</button>
      </div>
    </nav>
    <nav className="sm-navbar sm-navbar--underline">
      <div className="sm-navbar__brand">FrameFlow</div>
      <div className="sm-navbar__tabs">
        <button className="sm-navbar__tab is-active">Highlights</button>
        <button className="sm-navbar__tab">Collections</button>
        <button className="sm-navbar__tab">Mentor</button>
      </div>
      <button className="sm-button sm-button--ghost sm-button--sm">Upgrade</button>
    </nav>
    <nav className="sm-navbar" style={{ background: 'rgba(15,23,42,0.92)', color: '#fff' }}>
      <div className="sm-navbar__brand">FrameFlow</div>
      <div className="sm-navbar__actions">
        <button className="sm-button sm-button--icon sm-button--ghost sm-button--sm">
          ☰ <span>Menu</span>
        </button>
        <button className="sm-button sm-button--ghost sm-button--sm">Notifikasi</button>
        <button className="sm-button sm-button--primary sm-button--sm">Profil</button>
      </div>
    </nav>
  </div>
);

const PlaceholderShowcase = () => (
  <div className="sm-stack sm-gap-lg">
    <p className="sm-showcase-intro">
      Placeholder skeleton untuk kartu, avatar timeline, dan ring progress.
    </p>
    <div className="sm-grid sm-grid--cols-3">
      <div className="sm-placeholder-card">
        <div className="sm-skeleton sm-skeleton--media" />
        <div className="sm-stack sm-gap-sm">
          <span className="sm-skeleton sm-skeleton--text sm-skeleton--lg" />
          <span className="sm-skeleton sm-skeleton--text" />
          <span className="sm-skeleton sm-skeleton--text sm-skeleton--sm" />
        </div>
      </div>
      <div className="sm-placeholder-card">
        <div className="sm-placeholder-avatar">
          <span className="sm-skeleton sm-skeleton--avatar" />
          <div className="sm-stack sm-gap-xs sm-flex-1">
            <span className="sm-skeleton sm-skeleton--text" />
            <span className="sm-skeleton sm-skeleton--text sm-skeleton--sm" />
          </div>
        </div>
        <span className="sm-skeleton sm-skeleton--text sm-skeleton--lg" />
        <span className="sm-skeleton sm-skeleton--text" />
        <span className="sm-skeleton sm-skeleton--text sm-skeleton--sm" />
      </div>
      <div className="sm-placeholder-card sm-placeholder-card--dark">
        <div className="sm-skeleton sm-skeleton--media" />
        <div className="sm-stack sm-gap-sm">
          <span className="sm-skeleton sm-skeleton--text sm-skeleton--contrast" />
          <span className="sm-skeleton sm-skeleton--text sm-skeleton--contrast sm-skeleton--sm" />
        </div>
        <span className="sm-skeleton sm-skeleton--text sm-skeleton--contrast" />
      </div>
    </div>
    <div className="sm-placeholder-card">
      <p className="sm-heading-sm">Timeline Loading</p>
      <div className="sm-stack sm-gap-sm">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="sm-placeholder-avatar">
            <span className="sm-skeleton sm-skeleton--avatar" />
            <div className="sm-stack sm-gap-xs sm-flex-1">
              <span className="sm-skeleton sm-skeleton--text sm-skeleton--lg" />
              <span className="sm-skeleton sm-skeleton--text sm-skeleton--sm" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ChartShowcase = () => (
  <div className="sm-stack sm-gap-lg">
    <p className="sm-showcase-intro">
      Visualisasi data siap pakai untuk metrik sosial: bar, line spark, donut, dan radial.
    </p>
    <div className="sm-grid sm-grid--cols-3 sm-grid--auto">
      <div className="sm-card sm-card--soft">
        <h3 className="sm-heading-sm">Bar Chart Engagement</h3>
        <div className="sm-chart sm-chart--bar">
          <div className="sm-chart__bar" style={{ height: '84%' }} data-label="Like" data-value="1.2K" />
          <div className="sm-chart__bar" style{{ height: '65%' }} data-label="Simpan" data-value="986" />
          <div className="sm-chart__bar" style={{ height: '48%' }} data-label="Bagikan" data-value="612" />
          <div className="sm-chart__bar" style={{ height: '32%' }} data-label="Komentar" data-value="302" />
        </div>
      </div>
      <div className="sm-card sm-card--soft">
        <h3 className="sm-heading-sm">Trend Mingguan</h3>
        <div className="sm-chart sm-chart--line">
          <div className="sm-chart__line" />
        </div>
        <div className="sm-pill sm-pill--outline">Interaksi mingguan</div>
      </div>
      <div className="sm-card sm-card--soft">
        <h3 className="sm-heading-sm">Donut Audience</h3>
        <div className="sm-chart sm-chart--donut">
          <span className="sm-chart__label">
            Community
            <br />
            Segmen
          </span>
        </div>
        <div className="sm-chart-legend">
          <span className="sm-legend sm-legend--primary">Creator 45%</span>
          <span className="sm-legend sm-legend--accent">Brand 26%</span>
          <span className="sm-legend sm-legend--secondary">Fans 29%</span>
        </div>
      </div>
    </div>
  </div>
);

// ... truncated for brevity

const showcaseMap = {
  buttons: ButtonShowcase,
  navbar: NavbarShowcase,
  placeholders: PlaceholderShowcase,
  charts: ChartShowcase,
  layouts: LayoutShowcase,
  fonts: FontShowcase,
  containers: ContainerShowcase,
  icons: IconShowcase,
  dropdowns: DropdownShowcase,
  forms: FormShowcase,
  tables: TableShowcase,
  fabs: FabShowcase,
};

const renderShowcase = (id) => {
  const Component = showcaseMap[id];
  return Component ? <Component /> : null;
};

export const TemplatePage = () => {
  const { sectionId } = useParams();
  const activeSection = templateSections.find((section) => section.id === sectionId);

  return (
    <div className="sm-page">
      {!activeSection ? (
        <>
          <header className="sm-page__header">
            <div>
              <p className="sm-meta">FrameFlow Design System</p>
              <h1 className="sm-page__title">Template Style Guide</h1>
              <p className="sm-page__descriptor">
                Pilih kategori untuk melihat semua class, warna, dan layout yang siap dipakai.
              </p>
            </div>
          </header>
          <div className="sm-grid sm-grid--cards">
            {templateSections.map((section) => (
              <Link
                key={section.id}
                to={`/template/${section.id}`}
                className="sm-card sm-card--soft sm-card--hover sm-card--link"
              >
                <span className="sm-card__emoji">{section.emoji}</span>
                <h3 className="sm-heading-sm">{section.label}</h3>
                <p className="sm-text-muted">{section.description}</p>
                <span className="sm-link-arrow">Buka ›</span>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <>
          <header className="sm-page__header">
            <div>
              <nav className="sm-breadcrumb">
                <Link to="/template" className="sm-link">
                  Template
                </Link>
                <span>›</span>
                <span>{activeSection.label}</span>
              </nav>
              <h1 className="sm-page__title">
                {activeSection.emoji} {activeSection.label}
              </h1>
              <p className="sm-page__descriptor">{activeSection.description}</p>
            </div>
            <div className="sm-button-row">
              <Link to="/template" className="sm-button sm-button--ghost sm-button--sm">
                ‹ Semua Kategori
              </Link>
              <button className="sm-button sm-button--accent sm-button--sm">Salin Class</button>
            </div>
          </header>
          <div className="sm-showcase">{renderShowcase(activeSection.id)}</div>
        </>
      )}
    </div>
  );
};

export default TemplatePage;
`;

fs.writeFileSync('src/pages/Template.jsx', content, 'utf8');
