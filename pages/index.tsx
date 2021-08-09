/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import React, { useState } from 'react';
import Head from 'next/head';
import { MainLayout } from "../layouts/MainLayout";
import { MainContainer } from "../containers/MainContainer";

export default function Home() {
  const [code, setCode] = useState<string | null>(null);
  const [borderColor, setBorderColor] = useState('#000');
  const [borderTextColor, setBorderTextColor] = useState('#72e9eb');

  return (
    <div>
      <Head>
        <title>{typeof code !== 'string' ? '||pizza' : code}</title>
        <meta name="description" content="||pizza - &pizza but cheaper" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon180.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon16.png" />
      </Head>

      <main>
        <MainLayout borderColor={borderColor} borderTextColor={borderTextColor}>
          <MainContainer
            code={code}
            setCode={setCode}
            setBorderColor={setBorderColor}
            setBorderTextColor={setBorderTextColor}
          />
        </MainLayout>
      </main>
    </div>
  );
};
