import { DAY, Partner } from './types'

const openSeason: Partner = {
  slug: 'open-season',
  name: 'Duck Season',
  url: 'https://opensea.io/',
  description:
    'It’s the season of giving, and we’re giving you the chance to win a one-of-a-kind NFT from the OpenSea team. We’ve created 10 unique NFTs, and we’re giving them away to 10 lucky winners. All you have to do is enter your email address below for a chance to win.',
  brandColor: '#31FEA6',
  icon: '/partners/open-sea/icon.svg',
  iconInverse: '/partners/open-sea/icon-inverse.svg',
  aarweaveDigest: 'GjssNdA6XK7VYynkvwDem3KYwPACSU9nDWpR5rei3hw',
  drops: [
    {
      image: '/partners/open-sea/drop/duck.jpeg',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      name: 'Duck Season NFT Drop',
      crossMintClientId: '3ad9bb08-090f-41b9-b451-85fd1357e0e9',
      address: '0xF9a2CC9C41944B4116f1f62850e06fd6a790266C',
      type: 'erc-721',
      startDate: new Date('2023-07-13').getTime(),
      endDate: new Date('2023-07-15').getTime(),
      price: '0.0001',
    },
    {
      image: '/partners/open-sea/external-drops/1.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Bass Face',
      startDate: new Date('2023-07-13').getTime(),
      endDate: new Date('2023-07-15').getTime(),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/2.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Collateral Damage',
      startDate: new Date('2023-07-13').getTime(),
      endDate: new Date('2023-07-15').getTime(),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/3.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Qunitessence',
      startDate: new Date('2023-07-13').getTime(),
      endDate: new Date('2023-07-15').getTime(),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
    {
      image: '/partners/open-sea/external-drops/4.png',
      creator: '0xd365Ae104DA3E86EA36f268050D6e5212a42e360',
      externalLink: 'https://opensea.io/collection/lootproject',
      name: 'Bad Trip',
      startDate: new Date('2023-07-13').getTime(),
      endDate: new Date('2023-07-15').getTime(),
      crossMintClientId: '',
      address: '0x',
      type: 'external',
      price: '0.5',
    },
  ],
}

export default openSeason