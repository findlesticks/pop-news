import React, { PropTypes } from 'react';
import Link from 'next/link';

export default function Header() {
 return (
   <nav>
    <Link href='/'><a>Home</a></Link>
    <a href='/feed'>Your feed</a>
   </nav>
 );
}
