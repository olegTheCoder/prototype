import styles from './Header.module.scss';

function Header() {
  return (
    <header>
      <a href="/" className={styles.header__logo}>a</a>
      <nav>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <a href="/" className={styles.header__link}>
              Личный кабинет
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="/" className={styles.header__link}>
              О нас
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="/" className={styles.header__link}>
              Новости и акции
            </a>
          </li>
          <li className={styles.header__item}>
            <a href="/" className={styles.header__link}>
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
