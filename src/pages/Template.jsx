import { Link, useParams } from 'react-router-dom';
import { templateSections } from '../data/templateSections';
import { SpeedDial } from '../components/FabSpeedDial';

const ClassTag = ({ value }) => <span className="sm-class-tag">{value}</span>;

const ClassGroup = ({ values }) => (
  <div className="sm-class-group">
    {values.map((value) => (
      <ClassTag key={value} value={value} />
    ))}
  </div>
);

const buttonPalettes = [
  { label: 'Primary', className: 'sm-button sm-button--primary sm-button--lg' },
  { label: 'Secondary', className: 'sm-button sm-button--secondary sm-button--lg' },
  { label: 'Accent', className: 'sm-button sm-button--accent sm-button--lg sm-button--raise' },
  { label: 'Outline', className: 'sm-button sm-button--outline sm-button--lg sm-button--underline' },
  { label: 'Ghost', className: 'sm-button sm-button--ghost sm-button--lg sm-button--beam' },
];

const gradientButtons = [
  {
    label: 'Sunrise',
    className: 'sm-button sm-button--lg sm-button--pill',
    style: { background: 'linear-gradient(135deg, #f97316, #fb7185)', color: '#fff' },
  },
  {
    label: 'Aqua',
    className: 'sm-button sm-button--lg sm-button--pill',
    style: { background: 'linear-gradient(135deg, #22d3ee, #6366f1)', color: '#0b1025' },
  },
  {
    label: 'Forest',
    className: 'sm-button sm-button--lg sm-button--pill',
    style: { background: 'linear-gradient(135deg, #4ade80, #16a34a)', color: '#052e16' },
  },
  {
    label: 'Night',
    className: 'sm-button sm-button--lg sm-button--pill',
    style: { background: 'linear-gradient(135deg, #0ea5e9, #312e81)', color: '#e0f2fe' },
  },
];

const iconButtons = [
  {
    label: 'Sukai',
    icon: '\u2764\uFE0F',
    className: 'sm-button sm-button--icon sm-button--primary sm-button--lg sm-button--raise',
  },
  {
    label: 'Bagikan',
    icon: '\uD83D\uDCE4',
    className: 'sm-button sm-button--icon sm-button--outline sm-button--lg sm-button--beam',
  },
  {
    label: 'Simpan',
    icon: '\uD83D\uDCCC',
    className: 'sm-button sm-button--icon sm-button--ghost sm-button--lg',
  },
  {
    label: 'Komentar',
    icon: '\uD83D\uDCAC',
    className: 'sm-button sm-button--icon sm-button--secondary sm-button--lg sm-button--pulse',
  },
];

const filterChips = [
  { label: 'Semua', tone: 'soft', active: true },
  { label: 'Trending', tone: 'glow' },
  { label: 'Mentor', tone: 'outline' },
  { label: 'Event', tone: 'soft' },
  { label: 'Premium', tone: 'glow' },
];

const checkboxControls = [
  { className: 'sm-control sm-control--primary', label: 'Checklist Aktif', checked: true },
  { className: 'sm-control sm-control--soft', label: 'Checklist Soft', checked: false },
];

const toggleControls = [
  { className: 'sm-toggle', label: 'Live Preview', checked: true },
  { className: 'sm-toggle sm-toggle--outline', label: 'Mode Malam', checked: false },
];

const segmentedActions = ['Galeri', 'Preset', 'Story'];

const bottomNavItems = [
  { icon: '\uD83C\uDFE0', label: 'Feed', active: true },
  { icon: '\uD83D\uDD0D', label: 'Cari' },
  { icon: '\u2795', label: 'Tambah' },
  { icon: '\uD83D\uDC8C', label: 'Inbox' },
  { icon: '\uD83D\uDC64', label: 'Profil' },
];

const layoutPreviews = [
  {
    id: 'grid',
    title: 'Feed Grid 3 Kolom',
    description: 'Gunakan grid responsif untuk menampilkan koleksi foto komunitas.',
  },
  {
    id: 'split',
    title: 'Split Highlight',
    description: 'Perlihatkan hero besar di kiri dengan ringkasan insight di sisi kanan.',
  },
  {
    id: 'story',
    title: 'Story Carousel',
    description: 'Carousel dengan mask bulat dan caption minimalis ala highlight story.',
  },
];

const fontSamples = [
  {
    id: 'display',
    title: 'Display 48px',
    description: 'Untuk hero banner atau highlight campaign besar.',
    className: 'sm-font-sample sm-font-sample--display',
    text: 'FrameFlow Stories',
    meta: 'Heading 1 Â· SemiBold',
  },
  {
    id: 'title',
    title: 'Title 32px',
    description: 'Cocok untuk judul section di dashboard.',
    className: 'sm-font-sample sm-font-sample--title',
    text: 'Eksplorasi Kreator',
    meta: 'Heading 2 Â· Bold',
  },
  {
    id: 'body',
    title: 'Body 16px',
    description: 'Digunakan pada deskripsi konten, caption, atau tooltip.',
    className: 'sm-font-sample sm-font-sample--body',
    text: 'Kolaborasi photo walk, preset, serta mentoring untuk semua kreator baru.',
    meta: 'Body Â· Regular',
  },
  {
    id: 'mono',
    title: 'Kode 14px',
    description: 'Gunakan untuk badge teknis seperti ID sesi atau token share.',
    className: 'sm-font-sample sm-font-sample--mono',
    text: 'FF-SESSION-1024',
    meta: 'Mono Â· Medium',
  },
];

const iconTiles = [
  { emoji: '\uD83D\uDCF8', label: 'Kamera', tone: 'accent' },
  { emoji: '\uD83C\uDF9E\uFE0F', label: 'Storyboard', tone: 'soft' },
  { emoji: '?', label: 'Sorotan', tone: 'glow' },
  { emoji: '\uD83D\uDCC5', label: 'Jadwal', tone: 'outline' },
  { emoji: '\uD83E\uDDFA', label: 'Eksplor', tone: 'accent' },
  { emoji: '\uD83D\uDC8C', label: 'Inbox', tone: 'soft' },
  { emoji: '\uD83D\uDD25', label: 'Trending', tone: 'glow' },
  { emoji: '\uD83D\uDEE0\uFE0F', label: 'Tools', tone: 'outline' },
  { emoji: '\uD83D\uDD14\uFE0F', label: 'Notifikasi', tone: 'accent' },
];

const fabDialItems = [
  { icon: '\uD83D\uDCE4', label: 'Upload Foto' },
  { icon: '\uD83E\uDE84', label: 'Buat Story' },
  { icon: '\uD83D\uDDD3\uFE0F', label: 'Jadwalkan' },
];

const formFilterOptions = ['Semua', 'Favorit', 'Terjadwal', 'Draft'];

const tableProjects = [
  { name: 'Sunrise Alley', owner: 'Naira', status: 'Publish', views: '4.2K' },
  { name: 'City Reflection', owner: 'Rivaldo', status: 'Draft', views: '1.9K' },
  { name: 'Morning Brew', owner: 'Mika', status: 'Review', views: '2.7K' },
];

const tableSummaries = [
  { label: 'Total Campaign', value: '24' },
  { label: 'Kreator Aktif', value: '126' },
  { label: 'Preset Terjual', value: '312' },
];
const ButtonShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Variasi tombol FrameFlow mencakup warna utama, gradien, ikon, segmented group, hingga kontrol
      checkbox dan toggle.
    </p>
    <div>
      <p className="sm-heading-sm">Palet Aksi</p>
      <div className="sm-button-row">
        {buttonPalettes.map((button) => (
          <div key={button.label} className="sm-demo-item">
            <button type="button" className={button.className}>
              {button.label}
            </button>
            <ClassTag value={button.className} />
          </div>
        ))}
      </div>
    </div>
    <div>
      <p className="sm-heading-sm">Gradien &amp; Ikon</p>
      <div className="sm-button-row">
        {gradientButtons.map((button) => (
          <div key={button.label} className="sm-demo-item">
            <button type="button" className={button.className} style={button.style}>
              {button.label}
            </button>
            <ClassTag value={button.className} />
          </div>
        ))}
        {iconButtons.map((button) => (
          <div key={button.label} className="sm-demo-item">
            <button type="button" className={button.className}>
              <span aria-hidden>{button.icon}</span>
              <span>{button.label}</span>
            </button>
            <ClassTag value={button.className} />
          </div>
        ))}
      </div>
    </div>
    <div>
      <p className="sm-heading-sm">Segmented Group</p>
      <div
        className="sm-button-row"
        style={{ background: 'rgba(99,102,241,0.08)', padding: '0.4rem', borderRadius: '999px' }}
      >
        {segmentedActions.map((item, index) => {
          const buttonClass = `sm-button sm-button--sm ${
            index === 0 ? 'sm-button--primary' : 'sm-button--ghost'
          }`;
          return (
            <div key={item} className="sm-demo-item">
              <button
                type="button"
                className={buttonClass}
                style={{ borderRadius: '999px' }}
              >
                {item}
              </button>
              <ClassTag value={buttonClass} />
            </div>
          );
        })}
      </div>
    </div>
    <div>
      <p className="sm-heading-sm">Filter Chips</p>
      <div className="sm-pill-group">
        {filterChips.map((chip) => {
          const toneClass =
            chip.tone === 'outline'
              ? 'sm-pill--outline'
              : chip.tone === 'glow'
              ? 'sm-pill--glow'
              : 'sm-pill--soft';
          const pillClass = `sm-pill ${toneClass}${chip.active ? ' is-active' : ''}`;
          return (
            <div key={chip.label} className="sm-demo-item sm-demo-item--inline">
              <span className={pillClass}>{chip.label}</span>
              <ClassTag value={pillClass.trim()} />
            </div>
          );
        })}
      </div>
    </div>
    <div>
      <p className="sm-heading-sm">Checkbox &amp; Toggle</p>
      <div className="sm-control-grid">
        {checkboxControls.map((control) => (
          <div key={control.label} className="sm-demo-item">
            <label className={control.className}>
              <input type="checkbox" defaultChecked={control.checked} />
              <span className="sm-control__decor" />
              <span className="sm-control__label">{control.label}</span>
            </label>
            <ClassTag value={control.className} />
          </div>
        ))}
        {toggleControls.map((control) => (
          <div key={control.label} className="sm-demo-item">
            <label className={control.className}>
              <input className="sm-toggle__input" type="checkbox" defaultChecked={control.checked} />
              <span className="sm-toggle__track">
                <span className="sm-toggle__thumb" />
              </span>
              <span className="sm-toggle__label">{control.label}</span>
            </label>
            <ClassTag value={control.className} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const NavbarShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Contoh navbar solid, glass blur, tab underline, layout split, hingga bottom navigation mobile.
    </p>
    <div className="sm-stack sm-gap-lg">
      <div className="sm-sample-block">
        <ClassGroup
          values={[
            'sm-navbar sm-navbar--solid',
            'sm-nav-chip',
            'sm-button sm-button--primary sm-button--sm',
          ]}
        />
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
          <button className="sm-button sm-button--primary sm-button--sm" type="button">
            Upload
          </button>
        </nav>
      </div>
      <div className="sm-sample-block">
        <ClassGroup
          values={[
            'sm-navbar sm-navbar--glass',
            'sm-nav-link-light',
            'sm-button sm-button--ghost sm-button--sm',
            'sm-button sm-button--accent sm-button--sm',
          ]}
        />
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
            <button className="sm-button sm-button--ghost sm-button--sm" type="button">
              Masuk
            </button>
            <button className="sm-button sm-button--accent sm-button--sm" type="button">
              Daftar
            </button>
          </div>
        </nav>
      </div>
      <div className="sm-sample-block">
        <ClassGroup
          values={[
            'sm-navbar sm-navbar--underline',
            'sm-navbar__tab',
            'sm-button sm-button--ghost sm-button--sm',
          ]}
        />
        <nav className="sm-navbar sm-navbar--underline">
          <div className="sm-navbar__brand">FrameFlow</div>
          <div className="sm-navbar__tabs">
            <button className="sm-navbar__tab is-active" type="button">
              Highlights
            </button>
            <button className="sm-navbar__tab" type="button">
              Collections
            </button>
            <button className="sm-navbar__tab" type="button">
              Mentor
            </button>
          </div>
          <button className="sm-button sm-button--ghost sm-button--sm" type="button">
            Upgrade
          </button>
        </nav>
      </div>
      <div className="sm-sample-block">
        <ClassGroup
          values={[
            'sm-navbar sm-navbar--split',
            'sm-button sm-button--icon sm-button--ghost sm-button--sm',
            'sm-button sm-button--primary sm-button--sm',
          ]}
        />
        <nav className="sm-navbar sm-navbar--split">
          <div className="sm-navbar__brand">FrameFlow</div>
          <div className="sm-navbar__center">
            <button className="sm-button sm-button--icon sm-button--ghost sm-button--sm" type="button">
              <span aria-hidden>☰</span>
              <span>Menu</span>
            </button>
            <button className="sm-button sm-button--ghost sm-button--sm" type="button">
              Notifikasi
            </button>
          </div>
          <div className="sm-navbar__actions">
            <button className="sm-button sm-button--ghost sm-button--sm" type="button">
              Masuk
            </button>
            <button className="sm-button sm-button--primary sm-button--sm" type="button">
              Daftar
            </button>
          </div>
        </nav>
      </div>
      <div className="sm-sample-block">
        <ClassGroup
          values={[
            'sm-navbar sm-navbar--floating',
            'sm-navbar__search',
            'sm-button sm-button--accent sm-button--sm',
          ]}
        />
        <nav className="sm-navbar sm-navbar--floating">
          <div className="sm-navbar__brand">FrameFlow</div>
          <div className="sm-navbar__search">
            <span aria-hidden>🔍</span>
            <input type="text" placeholder="Cari preset, event, atau kreator" />
          </div>
          <div className="sm-navbar__actions">
            <button className="sm-button sm-button--ghost sm-button--sm" type="button">
              Masuk
            </button>
            <button className="sm-button sm-button--accent sm-button--sm" type="button">
              Daftar
            </button>
          </div>
        </nav>
      </div>
      <div className="sm-sample-block">
        <ClassGroup values={['sm-bottom-nav', 'sm-bottom-nav__item', 'sm-bottom-nav__icon']} />
        <div className="sm-bottom-nav">
          {bottomNavItems.map((item) => (
            <button
              key={item.label}
              className={item.active ? 'sm-bottom-nav__item is-active' : 'sm-bottom-nav__item'}
              type="button"
            >
              <span className="sm-bottom-nav__icon" aria-hidden>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const PlaceholderShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Placeholder skeleton untuk kartu feed, avatar, timeline story, hingga progress upload.
    </p>
    <div className="sm-grid sm-grid--cols-3">
      <div className="sm-placeholder-card">
        <ClassGroup
          values={[
            'sm-placeholder-card',
            'sm-skeleton sm-skeleton--media',
            'sm-skeleton sm-skeleton--text',
            'sm-skeleton sm-skeleton--text sm-skeleton--lg',
          ]}
        />
        <div className="sm-skeleton sm-skeleton--media" />
        <div className="sm-stack sm-gap-sm">
          <span className="sm-skeleton sm-skeleton--text sm-skeleton--lg" />
          <span className="sm-skeleton sm-skeleton--text" />
          <span className="sm-skeleton sm-skeleton--text sm-skeleton--sm" />
        </div>
      </div>
      <div className="sm-placeholder-card">
        <ClassGroup
          values={[
            'sm-placeholder-card',
            'sm-placeholder-avatar',
            'sm-skeleton sm-skeleton--avatar',
            'sm-skeleton sm-skeleton--text',
          ]}
        />
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
        <ClassGroup
          values={[
            'sm-placeholder-card sm-placeholder-card--dark',
            'sm-skeleton sm-skeleton--media',
            'sm-skeleton sm-skeleton--text sm-skeleton--contrast',
          ]}
        />
        <div className="sm-skeleton sm-skeleton--media" />
        <div className="sm-stack sm-gap-sm">
          <span className="sm-skeleton sm-skeleton--text sm-skeleton--contrast" />
          <span className="sm-skeleton sm-skeleton--text sm-skeleton--contrast sm-skeleton--sm" />
        </div>
        <span className="sm-skeleton sm-skeleton--text sm-skeleton--contrast" />
      </div>
    </div>
    <div className="sm-grid sm-grid--cols-3">
      <div className="sm-placeholder-card">
        <ClassGroup
          values={[
            'sm-placeholder-card',
            'sm-mask-gallery',
            'sm-mask',
            'sm-mask--circle',
            'sm-mask--squircle',
            'sm-mask--blob',
            'sm-mask--diagonal',
          ]}
        />
        <p className="sm-heading-sm">Story Ring</p>
        <div className="sm-mask-gallery">
          <span className="sm-mask sm-mask--circle" />
          <span className="sm-mask sm-mask--squircle" />
          <span className="sm-mask sm-mask--blob" />
          <span className="sm-mask sm-mask--diagonal" />
        </div>
      </div>
      <div className="sm-placeholder-card">
        <ClassGroup
          values={[
            'sm-placeholder-card',
            'sm-progress-skeleton',
            'sm-progress-skeleton__bar',
          ]}
        />
        <p className="sm-heading-sm">Progress Upload</p>
        <div className="sm-stack sm-gap-sm">
          <span className="sm-skeleton sm-skeleton--text sm-skeleton--lg" style={{ width: '72%' }} />
          <div className="sm-progress-skeleton">
            <span className="sm-progress-skeleton__bar" style={{ width: '68%' }} />
          </div>
          <div className="sm-progress-skeleton">
            <span className="sm-progress-skeleton__bar" style={{ width: '32%' }} />
          </div>
        </div>
      </div>
      <div className="sm-placeholder-card">
        <ClassGroup
          values={[
            'sm-placeholder-card',
            'sm-placeholder-chip',
            'sm-skeleton sm-skeleton--avatar',
            'sm-skeleton sm-skeleton--text sm-skeleton--lg',
          ]}
        />
        <p className="sm-heading-sm">Notifikasi Timeline</p>
        <div className="sm-stack sm-gap-sm">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="sm-placeholder-chip">
              <span className="sm-skeleton sm-skeleton--avatar" />
              <span className="sm-skeleton sm-skeleton--text sm-skeleton--lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ChartShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Visualisasi data siap pakai: bar engagement, trend line, donut audience, dan sparkline growth.
    </p>
    <div className="sm-grid sm-grid--cols-3 sm-grid--auto">
      <div className="sm-card sm-card--soft">
        <ClassGroup values={['sm-card sm-card--soft', 'sm-chart sm-chart--bar', 'sm-chart__bar']} />
        <h3 className="sm-heading-sm">Bar Chart Engagement</h3>
        <div className="sm-chart sm-chart--bar">
          <div className="sm-chart__bar" style={{ height: '84%' }} data-label="Like" data-value="1.2K" />
          <div className="sm-chart__bar" style={{ height: '65%' }} data-label="Simpan" data-value="986" />
          <div className="sm-chart__bar" style={{ height: '48%' }} data-label="Bagikan" data-value="612" />
          <div className="sm-chart__bar" style={{ height: '32%' }} data-label="Komentar" data-value="302" />
        </div>
      </div>
      <div className="sm-card sm-card--soft">
        <ClassGroup values={['sm-card sm-card--soft', 'sm-chart sm-chart--line', 'sm-chart__line']} />
        <h3 className="sm-heading-sm">Trend Mingguan</h3>
        <div className="sm-chart sm-chart--line">
          <div className="sm-chart__line" />
        </div>
        <div className="sm-pill sm-pill--outline">Interaksi 7 hari terakhir</div>
      </div>
      <div className="sm-card sm-card--soft">
        <ClassGroup
          values={[
            'sm-card sm-card--soft',
            'sm-chart sm-chart--donut',
            'sm-chart-legend',
            'sm-legend',
          ]}
        />
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
      <div className="sm-card sm-card--soft">
        <ClassGroup values={['sm-card sm-card--soft', 'sm-chart sm-chart--spark', 'sm-chart__sparkline']} />
        <h3 className="sm-heading-sm">Sparkline Growth</h3>
        <div className="sm-chart sm-chart--spark">
          <span className="sm-chart__sparkline" />
        </div>
        <div className="sm-chart-metric">
          <strong>+18%</strong>
          <span>Engagement 30 hari</span>
        </div>
      </div>
    </div>
  </div>
);

const LayoutShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Layout feed, split, dan carousel siap dipakai dengan kombinasi mask unik untuk visual hero.
    </p>
    <div className="sm-layout-board">
      {layoutPreviews.map((layout) => {
        const previewClass = 'sm-layout-card__preview sm-layout-preview--' + layout.id;
        const layoutClasses = ['sm-layout-card', previewClass];
        if (layout.id === 'grid') {
          layoutClasses.push('sm-layout-grid', 'sm-layout-slot');
        } else if (layout.id === 'split') {
          layoutClasses.push(
            'sm-layout-split',
            'sm-layout-split__hero',
            'sm-layout-split__stack',
            'sm-layout-slot sm-layout-slot--wide',
          );
        } else if (layout.id === 'story') {
          layoutClasses.push(
            'sm-layout-story',
            'sm-layout-story__rail',
            'sm-layout-story__pill',
            'sm-layout-slot sm-layout-slot--hero',
            'sm-layout-slot sm-layout-slot--badge',
          );
        }
        return (
          <article key={layout.id} className="sm-layout-card">
            <ClassGroup values={Array.from(new Set(layoutClasses))} />
            <div className={previewClass}>
              {layout.id === 'grid' && (
                <div className="sm-layout-grid">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <span key={index} className="sm-layout-slot" />
                  ))}
                </div>
              )}
              {layout.id === 'split' && (
                <div className="sm-layout-split">
                  <div className="sm-layout-split__hero" />
                  <div className="sm-layout-split__stack">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <span key={index} className="sm-layout-slot sm-layout-slot--wide" />
                    ))}
                  </div>
                </div>
              )}
              {layout.id === 'story' && (
                <div className="sm-layout-story">
                  <div className="sm-layout-story__rail">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="sm-layout-story__pill" />
                    ))}
                  </div>
                  <div className="sm-layout-story__content">
                    <span className="sm-layout-slot sm-layout-slot--hero" />
                    <span className="sm-layout-slot sm-layout-slot--badge" />
                  </div>
                </div>
              )}
            </div>
            <div className="sm-layout-card__meta">
              <h3 className="sm-heading-sm">{layout.title}</h3>
              <p className="sm-text-muted">{layout.description}</p>
            </div>
          </article>
        );
      })}
    </div>
    <div>
      <p className="sm-heading-sm">Mask Bentuk Koleksi</p>
      <div className="sm-mask-gallery">
        <span className="sm-mask sm-mask--squircle" />
        <span className="sm-mask sm-mask--circle" />
        <span className="sm-mask sm-mask--blob" />
        <span className="sm-mask sm-mask--diagonal" />
      </div>
      <ClassGroup
        values={[
          'sm-mask-gallery',
          'sm-mask',
          'sm-mask--squircle',
          'sm-mask--circle',
          'sm-mask--blob',
          'sm-mask--diagonal',
        ]}
      />
    </div>
  </div>
);

const FontShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Tipografi lengkap dari display hingga body, termasuk highlight warna, chip, dan garis dekoratif.
    </p>
    <div className="sm-font-stack">
      {fontSamples.map((sample) => (
        <article key={sample.id} className={sample.className}>
          <ClassTag value={sample.className} />
          <div className="sm-font-sample__content">
            <h3>{sample.text}</h3>
            <p>{sample.meta}</p>
          </div>
          <span className="sm-font-sample__note">{sample.title}</span>
          <p className="sm-text-muted">{sample.description}</p>
        </article>
      ))}
    </div>
    <div className="sm-font-highlight">
      <span className="sm-font-highlight__title">Badge &amp; Highlight Warna</span>
      <div className="sm-font-highlight__samples">
        <span className="sm-pill sm-pill--glow">Baru</span>
        <span className="sm-pill sm-pill--outline">Live Mentoring</span>
        <span className="sm-font-underline">Tautan Garis</span>
        <span className="sm-font-highlight__chip">Highlight Tone</span>
      </div>
      <ClassGroup
        values={[
          'sm-pill sm-pill--glow',
          'sm-pill sm-pill--outline',
          'sm-font-underline',
          'sm-font-highlight__chip',
        ]}
      />
    </div>
  </div>
);

const ContainerShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Pilih permukaan konten dari soft dashed, glass blur, accent gradient, hingga animated pulse.
    </p>
    <div className="sm-grid sm-grid--cols-2">
      <article className="sm-container sm-container--padded">
        <ClassTag value="sm-container sm-container--padded" />
        <h3 className="sm-heading-sm">Soft Dashed</h3>
        <p className="sm-text-muted">
          Kontainer ringan untuk informasi tips, catatan, atau empty state di halaman feed.
        </p>
      </article>
      <article className="sm-container sm-container--glass">
        <ClassTag value="sm-container sm-container--glass" />
        <h3 className="sm-heading-sm">Glass Overlay</h3>
        <p className="sm-text-muted">
          Cocok untuk hero card di atas background foto agar tetap kontras dan elegan.
        </p>
      </article>
      <article className="sm-container sm-container--accent">
        <ClassTag value="sm-container sm-container--accent" />
        <h3 className="sm-heading-sm">Accent Gradient</h3>
        <p className="sm-text-muted">
          Gunakan untuk highlight statistik utama atau callout komunitas.
        </p>
      </article>
      <article className="sm-container sm-container--pulse">
        <ClassGroup values={['sm-container sm-container--pulse', 'sm-container__shine']} />
        <span className="sm-container__shine" />
        <h3 className="sm-heading-sm">Animated Pulse</h3>
        <p className="sm-text-muted">
          Memberi efek spotlight pada promosi event atau pengumuman penting.
        </p>
      </article>
    </div>
  </div>
);

const IconShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Set emoji dan icon tile siap pakai untuk badge status, tombol, hingga notifikasi.
    </p>
    <ClassGroup values={['sm-icon-wall', 'sm-icon-tile']} />
    <div className="sm-icon-wall">
      {iconTiles.map((item) => (
        <button type="button" key={item.label} className="sm-icon-tile" data-tone={item.tone}>
          <span aria-hidden>{item.emoji}</span>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  </div>
);

const DropdownShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Dropdown list, command palette, dan floating menu dengan multi pilihan serta status aktif.
    </p>
    <div className="sm-grid sm-grid--cols-3">
      <div className="sm-sample-block">
        <ClassGroup values={['sm-dropdown', 'sm-dropdown__trigger', 'sm-dropdown__menu', 'sm-dropdown__item']} />
        <div className="sm-dropdown">
          <button className="sm-dropdown__trigger" type="button">
            Filter Koleksi <span aria-hidden>?</span>
          </button>
          <div className="sm-dropdown__menu">
            <button className="sm-dropdown__item is-active" type="button">
              Semua
              <span className="sm-pill sm-pill--soft">Default</span>
            </button>
            <button className="sm-dropdown__item" type="button">
              Story
              <span className="sm-pill sm-pill--outline">32</span>
            </button>
            <button className="sm-dropdown__item" type="button">
              Preset
              <span className="sm-pill sm-pill--outline">18</span>
            </button>
          </div>
        </div>
      </div>
      <div className="sm-sample-block">
        <ClassGroup values={['sm-dropdown sm-dropdown--surface', 'sm-dropdown__trigger', 'sm-dropdown__menu', 'sm-dropdown__item']} />
        <div className="sm-dropdown sm-dropdown--surface">
          <button className="sm-dropdown__trigger" type="button">
            Tema Tone <span aria-hidden>?</span>
          </button>
          <div className="sm-dropdown__menu">
            <button className="sm-dropdown__item" type="button">
              Sunset Glow
            </button>
            <button className="sm-dropdown__item is-active" type="button">
              Nordic Mint
            </button>
            <button className="sm-dropdown__item" type="button">
              Neon Night
            </button>
          </div>
        </div>
      </div>
      <div className="sm-sample-block">
        <ClassGroup
          values={[
            'sm-dropdown sm-dropdown--floating',
            'sm-dropdown__trigger',
            'sm-dropdown__menu sm-dropdown__menu--floating',
            'sm-dropdown__item',
          ]}
        />
        <div className="sm-dropdown sm-dropdown--floating">
          <button className="sm-dropdown__trigger" type="button">
            Command Palette <span aria-hidden>⌘K</span>
          </button>
          <div className="sm-dropdown__menu sm-dropdown__menu--floating">
            <button className="sm-dropdown__item" type="button">
              🔍 Cari kreator
              <span className="sm-meta">? F</span>
            </button>
            <button className="sm-dropdown__item" type="button">
              🗓️ Buat event
              <span className="sm-meta">? E</span>
            </button>
            <button className="sm-dropdown__item" type="button">
              🧾 Export laporan
              <span className="sm-meta">? ? X</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FabShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Kombinasi FAB utama, outline, hingga speed dial untuk akses cepat aksi populer.
    </p>
    <div className="sm-fab-board">
      <article className="sm-fab-card">
        <ClassTag value="sm-fab sm-fab--primary" />
        <button className="sm-fab sm-fab--primary" type="button">
          +
        </button>
        <h3 className="sm-fab-card__title">Primary FAB</h3>
        <p className="sm-fab-card__hint">
          Tombol aksen dengan shadow untuk aksi utama seperti unggah foto.
        </p>
      </article>
      <article className="sm-fab-card">
        <ClassTag value="sm-fab sm-fab--outline" />
        <button className="sm-fab sm-fab--outline" type="button">
          🔍
        </button>
        <h3 className="sm-fab-card__title">Outline FAB</h3>
        <p className="sm-fab-card__hint">
          Tampilan ringan cocok untuk halaman dengan latar terang atau kartu glass.
        </p>
      </article>
      <article className="sm-fab-card sm-fab-card--dial">
        <ClassGroup values={['sm-speed-dial', 'sm-fab sm-fab--accent', 'sm-chip-action']} />
        <SpeedDial items={fabDialItems} variant="accent" />
        <h3 className="sm-fab-card__title">Speed Dial</h3>
        <p className="sm-fab-card__hint">
          Menu aksi melayang yang menutup otomatis setelah memilih salah satu tindakan.
        </p>
      </article>
    </div>
  </div>
);

const FormShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Contoh form registrasi dua kolom, inline filter, dan penggunaan badge validasi.
    </p>
    <div className="sm-grid sm-grid--cols-2">
      <div className="sm-card sm-card--soft">
        <ClassGroup
          values={[
            'sm-card sm-card--soft',
            'sm-form-grid',
            'sm-field',
            'sm-input',
            'sm-form-actions',
          ]}
        />
        <h3 className="sm-heading-sm">Form Registrasi Kreator</h3>
        <form className="sm-form-grid">
          <label className="sm-field">
            <span className="sm-label">Nama Lengkap</span>
            <input className="sm-input" type="text" placeholder="Naira Laksmi" />
          </label>
          <label className="sm-field">
            <span className="sm-label">Email</span>
            <input className="sm-input" type="email" placeholder="creators@frameflow.com" />
          </label>
          <label className="sm-field">
            <span className="sm-label">Jenis Fotografi</span>
            <select className="sm-input">
              <option>Street &amp; Lifestyle</option>
              <option>Portrait</option>
              <option>Landscape</option>
              <option>Product</option>
            </select>
          </label>
          <label className="sm-field">
            <span className="sm-label">Link Portofolio</span>
            <input className="sm-input" type="url" placeholder="https://" />
          </label>
          <label className="sm-field sm-form-grid__wide">
            <span className="sm-label">Bio Singkat</span>
            <textarea className="sm-input" rows={3} placeholder="Ceritakan gaya fotomu..." />
          </label>
          <div className="sm-form-actions">
            <button className="sm-button sm-button--ghost sm-button--sm" type="button">
              Batalkan
            </button>
            <button className="sm-button sm-button--primary sm-button--sm" type="submit">
              Simpan Profil
            </button>
          </div>
        </form>
      </div>
      <div className="sm-card sm-card--soft">
        <ClassGroup
          values={[
            'sm-card sm-card--soft',
            'sm-form-inline',
            'sm-button sm-button--sm',
            'sm-checkbox',
          ]}
        />
        <h3 className="sm-heading-sm">Filter Horizontal</h3>
        <div className="sm-form-inline">
          <div className="sm-form-inline__group">
            {formFilterOptions.map((option, index) => (
              <button
                key={option}
                type="button"
                className={index === 0 ? 'sm-button sm-button--sm sm-button--primary' : 'sm-button sm-button--sm sm-button--ghost'}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="sm-form-inline__group">
            <label className="sm-checkbox">
              <input type="checkbox" defaultChecked /> <span>Hanya favorit</span>
            </label>
            <label className="sm-checkbox">
              <input type="checkbox" /> <span>Dengan komentar</span>
            </label>
          </div>
          <div className="sm-form-inline__group">
            <button className="sm-button sm-button--outline sm-button--sm" type="button">
              Reset
            </button>
            <button className="sm-button sm-button--accent sm-button--sm" type="button">
              Terapkan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TableShowcase = () => (
  <div className="sm-stack sm-gap-xl">
    <p className="sm-showcase-intro">
      Tabel zebra compact dan ringkasan kartu memberikan alternatif tampilan data yang menarik.
    </p>
    <div className="sm-grid sm-grid--cols-2">
      <div className="sm-card sm-card--soft">
        <ClassGroup
          values={[
            'sm-card sm-card--soft',
            'sm-table sm-table--striped sm-table--compact',
            'sm-pill sm-pill--outline',
          ]}
        />
        <h3 className="sm-heading-sm">Tabel Zebra</h3>
        <div className="sm-table-wrapper">
          <table className="sm-table sm-table--striped sm-table--compact">
            <thead>
              <tr>
                <th>Proyek</th>
                <th>Kreator</th>
                <th>Status</th>
                <th>Views</th>
              </tr>
            </thead>
            <tbody>
              {tableProjects.map((row) => (
                <tr key={row.name}>
                  <td>{row.name}</td>
                  <td>{row.owner}</td>
                  <td>
                    <span className="sm-pill sm-pill--outline">{row.status}</span>
                  </td>
                  <td>{row.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="sm-card sm-card--soft">
        <ClassGroup values={['sm-card sm-card--soft', 'sm-table-card', 'sm-table-card__row']} />
        <h3 className="sm-heading-sm">Ringkasan Kartu</h3>
        <div className="sm-table-card">
          {tableSummaries.map((item) => (
            <div key={item.label} className="sm-table-card__row">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

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
  fabs: FabShowcase,
  forms: FormShowcase,
  tables: TableShowcase,
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
                Pilih kategori untuk melihat semua class, warna, dan layout yang siap dipakai di
                halaman demo sosial media foto.
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
                <span className="sm-card__emoji" aria-hidden>
                  {section.emoji}
                </span>
                <h3 className="sm-heading-sm">{section.label}</h3>
                <p className="sm-text-muted">{section.description}</p>
                <span className="sm-link-arrow">Lihat variasi â€º</span>
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
                <span aria-hidden>â€º</span>
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
              <button className="sm-button sm-button--accent sm-button--sm" type="button">
                Salin Class
              </button>
            </div>
          </header>
          <div className="sm-showcase">{renderShowcase(activeSection.id)}</div>
        </>
      )}
    </div>
  );
};

export default TemplatePage;

