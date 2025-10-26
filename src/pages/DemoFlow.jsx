import { useEffect, useMemo, useRef, useState } from 'react';
import { SpeedDial } from '../components/FabSpeedDial';

const registerInitial = { name: '', email: '', password: '' };
const loginInitial = { email: '', password: '' };

const createPhotoUrl = (seed) => `https://picsum.photos/seed/${seed}/500/300`;

const seedPosts = [
  {
    id: 'sunrise-street',
    author: 'Naira Laksmi',
    handle: '@nairashoots',
    tone: 'sunset',
    title: 'Sunrise Alley',
    caption: 'Golden hour pertama setelah hujan semalaman.',
    tags: ['Urban', 'Sunrise'],
    likes: 245,
    comments: [
      { author: 'Rivaldo', text: 'Tone warnanya lembut banget!' },
      { author: 'Mika', text: 'Minta presetnya dong 🙌' },
    ],
    minutesAgo: 5,
    createdAt: '2025-01-06T08:15:00Z',
  },
  {
    id: 'minimal-coffee',
    author: 'Mika Adi',
    handle: '@mika.frame',
    tone: 'mint',
    title: 'Morning Brew',
    caption: 'Eksperimen flatlay dengan dua sumber cahaya.',
    tags: ['Flatlay', 'Product'],
    likes: 182,
    comments: [
      { author: 'Kayra', text: 'Stylingnya rapi sekali 🔥' },
      { author: 'Naira', text: 'Tekstur kayu bikin cozy.' },
    ],
    minutesAgo: 22,
    createdAt: '2025-01-08T05:42:00Z',
  },
  {
    id: 'night-reflection',
    author: 'Rivaldo Hart',
    handle: '@rivaldohart',
    tone: 'aqua',
    title: 'City Reflection',
    caption: 'Eksperimen puddlegram di tengah pusat kota.',
    tags: ['Night', 'Reflection'],
    likes: 309,
    comments: [
      { author: 'Mika', text: 'Refleksinya tajam banget.' },
      { author: 'Laila', text: 'Bisa dipakai cover playlist nih!' },
    ],
    minutesAgo: 38,
    createdAt: '2025-01-09T13:20:00Z',
  },
].map((item) => ({
  ...item,
  photo: createPhotoUrl(item.id),
  liked: false,
}));

const dayIndexToLabel = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
const orderedDays = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];

const initialNewPost = {
  title: '',
  caption: '',
  image: createPhotoUrl('frameflow-init'),
  tags: '',
};

const toneOptions = ['sunset', 'mint', 'aqua', 'violet', 'sand'];

export const DemoFlowPage = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [, setAuthMode] = useState('login');
  const [registerForm, setRegisterForm] = useState(registerInitial);
  const [loginForm, setLoginForm] = useState(loginInitial);
  const [posts, setPosts] = useState(seedPosts);
  const [commentDrafts, setCommentDrafts] = useState({});
  const [newPost, setNewPost] = useState(initialNewPost);
  const [toast, setToast] = useState('');

  const feedRef = useRef(null);
  const authRef = useRef(null);
  const composerRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(''), 2800);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const showToast = (message) => setToast(message);

  const scrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (!registerForm.name.trim() || !registerForm.email.trim() || !registerForm.password.trim()) {
      showToast('Lengkapi semua field registrasi.');
      return;
    }

    setCurrentUser({
      name: registerForm.name.trim(),
      email: registerForm.email.trim(),
    });
    setRegisterForm(registerInitial);
    setAuthMode('login');
    showToast('Registrasi sukses, Anda sudah login.');
    scrollTo(feedRef);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (!loginForm.email.trim() || !loginForm.password.trim()) {
      showToast('Isi email dan password untuk login.');
      return;
    }

    setCurrentUser({
      name: 'Creator Demo',
      email: loginForm.email.trim(),
    });
    setLoginForm(loginInitial);
    showToast('Selamat datang kembali!');
    scrollTo(feedRef);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    showToast('Anda sudah logout.');
  };

  const toggleLike = (postId) => {
    if (!currentUser) {
      showToast('Harus login untuk menyukai kiriman.');
      scrollTo(authRef);
      return;
    }

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.likes + (post.liked ? -1 : 1),
            }
          : post,
      ),
    );
  };

  const updateCommentDraft = (postId, value) => {
    setCommentDrafts((prev) => ({
      ...prev,
      [postId]: value,
    }));
  };

  const handleAddComment = (event, postId) => {
    event.preventDefault();
    if (!currentUser) {
      showToast('Login dulu sebelum memberi komentar.');
      scrollTo(authRef);
      return;
    }
    const text = (commentDrafts[postId] || '').trim();
    if (!text) {
      showToast('Isi komentar terlebih dahulu.');
      return;
    }

    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                { author: currentUser.name || 'Creator', text },
              ],
            }
          : post,
      ),
    );
    setCommentDrafts((prev) => ({ ...prev, [postId]: '' }));
  };

  const handlePost = (event) => {
    event.preventDefault();
    if (!currentUser) {
      showToast('Login untuk membuat postingan.');
      scrollTo(authRef);
      return;
    }
    if (!newPost.title.trim() || !newPost.caption.trim()) {
      showToast('Judul dan deskripsi wajib diisi.');
      return;
    }

    const id = `post-${Date.now()}`;
    const tags = newPost.tags
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean);

    const nextPost = {
      id,
      author: currentUser.name || 'Creator',
      handle: '@' + (currentUser.name || 'creator').toLowerCase().replace(/\s+/g, ''),
      tone: toneOptions[Math.floor(Math.random() * toneOptions.length)],
      title: newPost.title.trim(),
      caption: newPost.caption.trim(),
      tags: tags.length ? tags : ['Live'],
      likes: 0,
      liked: false,
      comments: [],
      minutesAgo: 1,
      createdAt: new Date().toISOString(),
      photo: (newPost.image || '').trim() || createPhotoUrl(id),
    };

    setPosts((prev) => [nextPost, ...prev]);
    setNewPost({ ...initialNewPost, image: createPhotoUrl(Date.now()) });
    showToast('Postingan berhasil diterbitkan.');
    scrollTo(feedRef);
  };

  const chartData = useMemo(() => {
    const counts = new Map(orderedDays.map((day) => [day, 0]));
    posts.forEach((post) => {
      const label = dayIndexToLabel[new Date(post.createdAt || Date.now()).getDay()];
      counts.set(label, (counts.get(label) || 0) + 1);
    });
    return orderedDays.map((label) => ({
      label,
      value: counts.get(label) || 0,
    }));
  }, [posts]);

  const quickActions = useMemo(
    () => [
      {
        icon: '📸',
        label: 'Post Baru',
        action: () => scrollTo(composerRef),
      },
      currentUser
        ? {
            icon: '🔓',
            label: 'Logout',
            action: handleLogout,
          }
        : {
            icon: '🔐',
            label: 'Login',
            action: () => {
              setAuthMode('login');
              scrollTo(authRef);
            },
          },
      {
        icon: '📊',
        label: 'Statistik',
        action: () => scrollTo(statsRef),
      },
    ],
    [currentUser],
  );

  return (
    <div className="sm-page sm-page--demo">
      <header className="sm-page__header">
        <div>
          <p className="sm-meta">FrameFlow Journey</p>
          <h1 className="sm-page__title">Demo Platform Sosial Media Foto</h1>
          <p className="sm-page__descriptor">
            Mulai dari login, unggah foto, interaksi komunitas, hingga memantau statistik—semua
            menggunakan komponen template FrameFlow.
          </p>
        </div>
        <div className="sm-button-row">
          {currentUser ? (
            <>
              <span className="sm-pill sm-pill--soft">
                Masuk sebagai <strong>{currentUser.name}</strong>
              </span>
              <button
                type="button"
                className="sm-button sm-button--primary sm-button--lg"
                onClick={() => scrollTo(composerRef)}
              >
                Buat Postingan
              </button>
              <button
                type="button"
                className="sm-button sm-button--ghost sm-button--lg"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="sm-button sm-button--primary sm-button--lg"
                onClick={() => {
                  setAuthMode('register');
                  scrollTo(authRef);
                }}
              >
                Buat Akun
              </button>
              <button
                type="button"
                className="sm-button sm-button--ghost sm-button--lg"
                onClick={() => {
                  setAuthMode('login');
                  scrollTo(authRef);
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
      </header>

      <section ref={feedRef} className="sm-section">
        <div className="sm-section__header">
          <h2 className="sm-section__title">Beranda Postingan</h2>
          <span className="sm-pill sm-pill--outline">Like &amp; komentar membutuhkan login</span>
        </div>
        {!currentUser && (
          <div className="sm-demo-auth-callout">
            <div>
              <p className="sm-heading-sm">Gabung untuk berinteraksi</p>
              <p className="sm-text-muted">
                Login atau registrasi agar bisa menyukai, mengomentari, dan membuat postingan baru.
              </p>
            </div>
            <div className="sm-demo-auth-callout__actions">
              <button
                type="button"
                className="sm-button sm-button--primary sm-button--sm"
                onClick={() => {
                  setAuthMode('register');
                  scrollTo(authRef);
                }}
              >
                Register
              </button>
              <button
                type="button"
                className="sm-button sm-button--ghost sm-button--sm"
                onClick={() => {
                  setAuthMode('login');
                  scrollTo(authRef);
                }}
              >
                Login
              </button>
            </div>
          </div>
        )}
        <div className="sm-demo-feed">
          {posts.map((post) => (
            <article key={post.id} className="sm-card sm-card--soft sm-demo-post">
              <header className="sm-card__header">
                <div className="sm-flex sm-gap-sm sm-align-center">
                  <span className={`sm-avatar sm-avatar--${post.tone}`}>{post.author[0]}</span>
                  <div>
                    <p className="sm-heading-sm">{post.author}</p>
                    <p className="sm-text-muted">
                      {post.handle} • {post.minutesAgo} menit lalu
                    </p>
                  </div>
                </div>
                <button type="button" className="sm-button sm-button--ghost sm-button--sm">
                  ⋮
                </button>
              </header>
              <div
                className="sm-demo-post__media"
                style={{ backgroundImage: `url(${post.photo})` }}
              />
              <div className="sm-demo-post__body">
                <p className="sm-heading-sm">{post.title}</p>
                <p className="sm-text-muted">{post.caption}</p>
                <div className="sm-demo-post__tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="sm-pill sm-pill--soft">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <footer className="sm-demo-post__footer">
                <div className="sm-demo-post__actions">
                  <button
                    type="button"
                    onClick={() => toggleLike(post.id)}
                    className={`sm-button sm-button--icon ${
                      post.liked ? 'sm-button--accent' : 'sm-button--ghost'
                    }`}
                  >
                    ❤️ <span>{post.likes}</span>
                  </button>
                  <button
                    type="button"
                    className="sm-button sm-button--icon sm-button--ghost"
                    onClick={() => {
                      if (!currentUser) {
                        showToast('Login dulu untuk melihat komentar lengkap.');
                        scrollTo(authRef);
                      }
                    }}
                  >
                    💬 <span>{post.comments.length}</span>
                  </button>
                  <button type="button" className="sm-button sm-button--icon sm-button--ghost">
                    🔖 <span>Simpan</span>
                  </button>
                </div>
                <div className="sm-demo-comments">
                  {post.comments.slice(0, currentUser ? post.comments.length : 1).map((comment) => (
                    <div key={`${post.id}-${comment.author}-${comment.text}`} className="sm-demo-comment">
                      <span className="sm-demo-comment__author">{comment.author}</span>
                      <span>{comment.text}</span>
                    </div>
                  ))}
                  <form
                    className="sm-demo-comment-form"
                    onSubmit={(event) => handleAddComment(event, post.id)}
                  >
                    <input
                      type="text"
                      className="sm-demo-comment-input"
                      placeholder={
                        currentUser ? 'Tulis komentar...' : 'Login untuk komentar'
                      }
                      value={commentDrafts[post.id] || ''}
                      onChange={(event) => updateCommentDraft(post.id, event.target.value)}
                    />
                    <button type="submit" className="sm-button sm-button--primary sm-button--sm">
                      Kirim
                    </button>
                  </form>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section ref={authRef} className="sm-section">
        <div className="sm-section__header">
          <h2 className="sm-section__title">Login &amp; Registrasi</h2>
          <div className="sm-badge-stack">
            <span className="sm-pill sm-pill--glow">Template Form</span>
            <span className="sm-pill sm-pill--outline">Input + Checkbox</span>
          </div>
        </div>
        <div className="sm-grid sm-grid--cols-2 sm-demo-forms">
          <form className="sm-card sm-card--soft sm-stack sm-gap-md" onSubmit={handleRegister}>
            <div className="sm-flex-between sm-align-center">
              <h3 className="sm-heading-sm">Buat Akun Creator</h3>
              <span className="sm-pill sm-pill--soft">Baru di FrameFlow?</span>
            </div>
            <label className="sm-field">
              <span className="sm-label">Nama Lengkap</span>
              <input
                className="sm-input"
                type="text"
                placeholder="Contoh: Laila Pratama"
                value={registerForm.name}
                onChange={(event) =>
                  setRegisterForm((prev) => ({ ...prev, name: event.target.value }))
                }
              />
            </label>
            <label className="sm-field">
              <span className="sm-label">Email</span>
              <input
                className="sm-input"
                type="email"
                placeholder="laila@frameflow.com"
                value={registerForm.email}
                onChange={(event) =>
                  setRegisterForm((prev) => ({ ...prev, email: event.target.value }))
                }
              />
            </label>
            <label className="sm-field">
              <span className="sm-label">Password</span>
              <input
                className="sm-input"
                type="password"
                placeholder="Minimal 8 karakter"
                value={registerForm.password}
                onChange={(event) =>
                  setRegisterForm((prev) => ({ ...prev, password: event.target.value }))
                }
              />
            </label>
            <button type="submit" className="sm-button sm-button--primary sm-button--lg">
              Daftar &amp; Login
            </button>
          </form>

          <form className="sm-card sm-card--glass sm-stack sm-gap-md sm-demo-login" onSubmit={handleLogin}>
            <div className="sm-flex-between sm-align-center">
              <h3 className="sm-heading-sm">Masuk Ke Studio</h3>
              <span className="sm-pill sm-pill--outline">Sudah punya akun?</span>
            </div>
            <label className="sm-field">
              <span className="sm-label">Email</span>
              <input
                className="sm-input"
                type="email"
                placeholder="creator@frameflow.com"
                value={loginForm.email}
                onChange={(event) =>
                  setLoginForm((prev) => ({ ...prev, email: event.target.value }))
                }
              />
            </label>
            <label className="sm-field">
              <span className="sm-label">Password</span>
              <input
                className="sm-input"
                type="password"
                placeholder="••••••••"
                value={loginForm.password}
                onChange={(event) =>
                  setLoginForm((prev) => ({ ...prev, password: event.target.value }))
                }
              />
            </label>
            <div className="sm-flex-between sm-align-center">
              <label className="sm-checkbox">
                <input type="checkbox" /> <span>Ingat saya</span>
              </label>
              <button type="button" className="sm-button sm-button--text sm-button--sm">
                Lupa password?
              </button>
            </div>
            <button type="submit" className="sm-button sm-button--accent sm-button--lg">
              Login
            </button>
          </form>
        </div>
      </section>

      <section ref={composerRef} className="sm-section">
        <div className="sm-section__header">
          <h2 className="sm-section__title">Posting Foto Baru</h2>
          <span className="sm-pill sm-pill--soft">Form composer + tombol aksi</span>
        </div>
        <form className="sm-card sm-card--soft sm-demo-composer" onSubmit={handlePost}>
          <div className="sm-flex-between sm-align-center">
            <div className="sm-flex sm-gap-sm sm-align-center">
              <span className="sm-avatar sm-avatar--violet">
                {(currentUser?.name || 'G').slice(0, 1)}
              </span>
              <div>
                <p className="sm-heading-sm">{currentUser?.name || 'Tamu FrameFlow'}</p>
                <p className="sm-text-muted">
                  {currentUser ? currentUser.email : 'Login untuk memposting'}
                </p>
              </div>
            </div>
            <span className="sm-pill sm-pill--outline">
              {currentUser ? 'Siap dipublikasikan' : 'Mode baca saja'}
            </span>
          </div>
          <label className="sm-field">
            <span className="sm-label">Judul Foto</span>
            <input
              className="sm-input"
              type="text"
              placeholder="Judul singkat foto"
              value={newPost.title}
              onChange={(event) => setNewPost((prev) => ({ ...prev, title: event.target.value }))}
            />
          </label>
          <label className="sm-field">
            <span className="sm-label">Deskripsi</span>
            <textarea
              className="sm-input sm-input--textarea"
              rows={3}
              placeholder="Ceritakan cerita singkat atau tips editing."
              value={newPost.caption}
              onChange={(event) => setNewPost((prev) => ({ ...prev, caption: event.target.value }))}
            />
          </label>
          <label className="sm-field">
            <span className="sm-label">URL Foto</span>
            <input
              className="sm-input"
              type="url"
              placeholder="https://picsum.photos/500/300"
              value={newPost.image}
              onChange={(event) => setNewPost((prev) => ({ ...prev, image: event.target.value }))}
            />
          </label>
          <label className="sm-field">
            <span className="sm-label">Tag (pisahkan dengan koma)</span>
            <input
              className="sm-input"
              type="text"
              placeholder="Urban, Sunrise, Vintage"
              value={newPost.tags}
              onChange={(event) => setNewPost((prev) => ({ ...prev, tags: event.target.value }))}
            />
          </label>
          <div className="sm-demo-dropzone">
            <span className="sm-demo-dropzone__icon">📷</span>
            <div>
              <p className="sm-heading-sm">Tarik &amp; jatuhkan foto</p>
              <p className="sm-text-muted">
                Atau gunakan URL random seperti <code>https://picsum.photos/500/300</code>.
              </p>
            </div>
            <button type="button" className="sm-button sm-button--ghost sm-button--sm">
              Pilih File
            </button>
          </div>
          <div className="sm-demo-composer__footer">
            <div className="sm-flex sm-gap-sm">
              <button type="button" className="sm-button sm-button--icon sm-button--ghost">
                🎞️ <span>Buat Story</span>
              </button>
              <button type="button" className="sm-button sm-button--icon sm-button--ghost">
                🏷️ <span>Tag Creator</span>
              </button>
            </div>
            <button type="submit" className="sm-button sm-button--primary sm-button--lg">
              Publikasikan
            </button>
          </div>
        </form>
      </section>

      <section ref={statsRef} className="sm-section">
        <div className="sm-section__header">
          <h2 className="sm-section__title">Statistik Posting</h2>
          <span className="sm-pill sm-pill--outline">Menggunakan chart bar template</span>
        </div>
        <div className="sm-card sm-card--soft">
          <header className="sm-card__header">
            <div>
              <p className="sm-meta">Posting per Hari</p>
              <h3 className="sm-heading-sm">Volume Upload Mingguan</h3>
            </div>
            <button type="button" className="sm-button sm-button--ghost sm-button--sm">
              Ekspor Data
            </button>
          </header>
          <div className="sm-chart sm-chart--bar sm-demo-chart">
            {chartData.map((item) => (
              <div
                key={item.label}
                className="sm-chart__bar"
                style={{ height: `${item.value * 12 + 20}%` }}
                data-label={item.label}
                data-value={`${item.value} posting`}
              />
            ))}
          </div>
          <div className="sm-chart-legend">
            <span className="sm-legend">Upload Creator</span>
            <span className="sm-legend sm-legend--accent">Target Mingguan</span>
          </div>
        </div>
      </section>

      <section className="sm-section">
        <div className="sm-section__header">
          <h2 className="sm-section__title">Selesai &amp; Logout</h2>
          <span className="sm-pill sm-pill--soft">Container + button template</span>
        </div>
        <div className="sm-grid sm-grid--cols-2 sm-demo-summary">
          <div className="sm-container sm-container--glass sm-demo-summary__card">
            <h3 className="sm-heading-sm">Ringkasan Sesi</h3>
            <ul className="sm-demo-checklist">
              <li>✅ Registrasi atau login akun</li>
              <li>✅ Membuat postingan foto menggunakan URL</li>
              <li>✅ Berinteraksi lewat like &amp; komentar</li>
              <li>✅ Memantau grafik jumlah posting</li>
            </ul>
            <button type="button" className="sm-button sm-button--ghost sm-button--sm">
              Unduh ringkasan
            </button>
          </div>
          <div className="sm-card sm-card--soft sm-demo-logout">
            <h3 className="sm-heading-sm">
              Sampai jumpa, {currentUser?.name || 'Tamu FrameFlow'}!
            </h3>
            <p className="sm-text-muted">
              Gunakan tombol di bawah untuk keluar dari sesi demo atau kembali membuat postingan.
            </p>
            <div className="sm-demo-logout__actions">
              <button
                type="button"
                className="sm-button sm-button--ghost sm-button--lg"
                onClick={() => scrollTo(composerRef)}
              >
                Buat Postingan Lagi
              </button>
              <button
                type="button"
                className="sm-button sm-button--primary sm-button--lg"
                onClick={currentUser ? handleLogout : () => scrollTo(authRef)}
              >
                {currentUser ? 'Logout' : 'Masuk Sekarang'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <SpeedDial
        className="sm-speed-dial-floating"
        items={quickActions}
        variant="accent"
        onSelect={(item) => item.action?.()}
      />

      {toast && <div className="sm-toast">{toast}</div>}
    </div>
  );
};

export default DemoFlowPage;
