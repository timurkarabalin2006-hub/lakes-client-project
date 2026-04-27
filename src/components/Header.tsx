'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { authStorage } from '@/lib/auth';
import { User } from '@/types';
import { UserAvatar } from './UserAvatar';

const navLinks = [
  { href: '/', label: 'Обзор' },
  { href: '/water-bodies', label: 'Водоёмы' },
  { href: '/profile', label: 'Аккаунт' },
];

export function Header({ user }: { user: User | null }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header modern-header">
      <div className="site-header__inner">

        {/* LOGO */}
        <Link href="/" className="brand-block" onClick={closeMenu}>
          <span className="brand-badge">AT</span>

          <div className="brand-copy">
            <div className="brand-title">AquaTrack</div>
            <div className="brand-subtitle">
              Аналитика и мониторинг водных ресурсов
            </div>
          </div>
        </Link>

        {/* BURGER */}
        <button
          type="button"
          className={`burger ${isOpen ? 'is-open' : ''}`}
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* NAV */}
        <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'is-active nav-modern-active' : 'nav-modern'}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* USER */}
        <div className={`header-user ${isOpen ? 'open' : ''}`}>

          <Link href="/profile" className="profile-chip modern-profile" onClick={closeMenu}>
            <UserAvatar
              name={user?.login || user?.email}
              avatarUrl={user?.avatarUrl}
              size={42}
            />
            <div>
              <div className="profile-chip__name">
                {user?.login || 'Гость'}
              </div>
              <div className="profile-chip__meta">
                {user?.email || 'Открыть профиль'}
              </div>
            </div>
          </Link>

          <button
            className="btn logout-modern"
            onClick={() => {
              authStorage.clear();
              router.replace('/login');
            }}
          >
            Выйти
          </button>
        </div>

      </div>
    </header>
  );
}