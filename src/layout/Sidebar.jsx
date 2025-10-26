import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { templateSections } from '../data/templateSections';

const baseLinkClass = 'sm-nav-link';

const navLinkClass = ({ isActive }) =>
  isActive ? `${baseLinkClass} is-active` : baseLinkClass;

export const Sidebar = () => {
  const location = useLocation();
  const [isTemplateOpen, setIsTemplateOpen] = useState(true);

  useEffect(() => {
    setIsTemplateOpen((prev) => location.pathname.startsWith('/template') || prev);
  }, [location.pathname]);

  return (
    <aside className="sm-sidebar">
      <div className="sm-brand">
        <span className="sm-brand__mark">{'\uD83D\uDCF8'}</span>
        <div>
          <p className="sm-brand__title">FrameFlow</p>
          <p className="sm-text-muted sm-brand__subtitle">Kit UI Sosial Media Foto</p>
        </div>
      </div>
      <nav className="sm-sidebar__nav">
        <NavLink to="/dashboard" className={navLinkClass}>
          <span className="sm-nav-link__icon">{'\uD83D\uDCCA'}</span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/demo" className={navLinkClass}>
          <span className="sm-nav-link__icon">{'\uD83D\uDE80'}</span>
          <span>Demo Alur</span>
        </NavLink>
        <div
          className={`sm-nav-group ${isTemplateOpen ? 'is-open' : ''}`}
          data-testid="template-nav-group"
        >
          <button
            type="button"
            className="sm-nav-link sm-nav-link--group"
            onClick={() => setIsTemplateOpen((prev) => !prev)}
            aria-expanded={isTemplateOpen}
            aria-controls="template-submenu"
          >
            <span className="sm-nav-link__icon">{'\uD83E\uDDE9'}</span>
            <span>Template</span>
            <span className="sm-nav-link__caret" aria-hidden>
              {'\u25BE'}
            </span>
          </button>
          <ul id="template-submenu" className="sm-nav-submenu">
            {templateSections.map((section) => (
              <li key={section.id}>
                <NavLink
                  to={`/template/${section.id}`}
                  className={({ isActive }) =>
                    isActive ? 'sm-nav-submenu__link is-active' : 'sm-nav-submenu__link'
                  }
                >
                  <span className="sm-nav-submenu__icon">{section.emoji}</span>
                  <span>{section.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="sm-sidebar__footer">
        <p className="sm-text-xs sm-text-muted">
          Semua class siap digunakan di halaman demo Dashboard.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
