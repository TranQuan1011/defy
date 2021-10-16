const getIconUrl = (symbol: string): string => {
  switch (symbol) {
    case 'XRP':
      return 'https://staging.app.defiforyou.uk/_nuxt/img/XRP.7ff389b.png';
    case 'ETH':
      return 'https://staging.app.defiforyou.uk/_nuxt/img/ETH.d810d23.png';
    case 'LTC':
      return '	https://staging.app.defiforyou.uk/_nuxt/img/LTC.4b4595e.png';
    case 'BTC':
      return 'https://staging.app.defiforyou.uk/_nuxt/img/BTC.fba89d5.png';
    case 'DFY':
      return 'https://staging.app.defiforyou.uk/_nuxt/img/DFY.a0b985b.png';
    case 'BNB':
      return 'https://staging.app.defiforyou.uk/_nuxt/img/BNB.978ee2b.png';
    case 'DOT':
      return '	https://staging.app.defiforyou.uk/_nuxt/img/DOT.69cb9b6.png';
    case 'ADA':
      return '	https://staging.app.defiforyou.uk/_nuxt/img/ADA.4647c52.png';
    case 'WBNB':
      return 'https://staging.app.defiforyou.uk/_nuxt/img/WBNB.978ee2b.png';
    case 'USDT':
      return 'https://staging.app.defiforyou.uk/_nuxt/img/USDT.b7a5381.png';
    case 'BUSD':
      return '	https://staging.app.defiforyou.uk/_nuxt/img/BUSD.3aa6751.png';
    case 'USDC':
      return 'https://staging.app.defiforyou.uk/_nuxt/img/USDC.10ea0ad.png';
    case 'DAI':
      return '	https://staging.app.defiforyou.uk/_nuxt/img/DAI.71410d0.png';
    default:
      return '';
  }
};

export default getIconUrl;
