'use client';

import Link from "next/link";
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css'
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";
// 'Image' optimizes the image, Add 'priority' to be prio.

export default function MainHeader () {
  return (<>
    <MainHeaderBackground />
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        <Image src={logoImg} alt='Food' priority />
        Next Level Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href='/meals'>Meals</NavLink>
          </li>
          <li>
            <NavLink href='/community'>Community</NavLink>
          </li>
        </ul>

      </nav>
    </header>
  </>)
}