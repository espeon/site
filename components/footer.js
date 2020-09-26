import React from 'react';
import Music from './music';

export default function Copyright({ url, region }) {
  console.log(region)
  return (
    <div className="pl-8 pr-8 pb-5 items-baseline align-bottom md:flex fade-in-longer relative">
      <nav className="absolute bottom-0 pb-5">
        {'© ' + new Date().getFullYear()}{' '}
        emma l. {' '}
        {url == undefined ? "" : " | rendered at ▲ " + region}
      </nav>
      <nav className="w-full -mb-px flex pt-2 md:pt-0 md:justify-end">
        <Music />
      </nav>
    </div>
  );
}