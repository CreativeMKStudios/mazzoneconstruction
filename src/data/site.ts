import type { ImageMetadata } from 'astro';
import stoneHouse from '../assets/photos/stone-house.jpg';
import rearElevation from '../assets/photos/rear-elevation.jpg';
import gardenWall from '../assets/photos/garden-wall.jpg';
import showerAfter from '../assets/photos/shower-after.jpg';
import showerBefore from '../assets/photos/shower-before.jpg';
import newBuildSite from '../assets/photos/new-build-site.jpg';
import stoneFront from '../assets/photos/stone-front.jpg';
import stoneRepair from '../assets/photos/stone-repair.jpg';
import fireplace from '../assets/photos/fireplace.jpg';
import brickGable from '../assets/photos/brick-gable.jpg';
import showerDoorway from '../assets/photos/shower-doorway.jpg';
import brando from '../assets/photos/brando.jpg';
import roberto from '../assets/photos/roberto.jpg';

export const business = {
  name: 'Mazzone Construction',
  legalName: 'Mazzone Construction',
  url: 'https://mazzonelimited.com',
  email: 'mazzonelimited@gmail.com',
  maps: 'https://maps.app.goo.gl/D98Q7wv1BVp49cY17',
  instagram: 'https://www.instagram.com/mazzone_ltd/',
  rating: 5,
  reviewCount: 20,
  plusCode: '97WC+3W Kettering',
  geo: { lat: 52.3951607, lng: -0.7276449 },
  address: {
    street: '1a Headlands',
    locality: 'Kettering',
    region: 'Northamptonshire',
    postalCode: 'NN15 7ER',
    country: 'United Kingdom',
  },
  phones: [
    { name: 'Brando', display: '07860 207117', tel: '+447860207117' },
    { name: 'Roberto', display: '07925 418257', tel: '+447925418257' },
  ],
} as const;

export const brandoPhoto = brando;
export const robertoPhoto = roberto;

export interface Photo {
  src: ImageMetadata;
  alt: string;
  caption: string;
  source: 'Google profile' | 'Mazzone gallery';
}

export const photos = {
  stoneHouse: {
    src: stoneHouse,
    alt: 'A new two-storey house in honey-coloured stone, with a chimney and a blue brick base.',
    caption: 'New stone house. Photo from the Mazzone Google profile.',
    source: 'Google profile',
  },
  rearElevation: {
    src: rearElevation,
    alt: 'The back of a two-storey stone house with white windows, patio doors, and a paved garden.',
    caption: 'Rear of a stone house, with the garden still being finished. Photo from the Mazzone Google profile.',
    source: 'Google profile',
  },
  gardenWall: {
    src: gardenWall,
    alt: 'A long red brick garden wall with two piers and a new soil bed in front.',
    caption: 'Brick garden wall with room for planting. Photo from the Mazzone Google profile.',
    source: 'Google profile',
  },
  showerAfter: {
    src: showerAfter,
    alt: 'A small shower room with marble-effect tiles, a glass screen, a basin, and a toilet.',
    caption: 'The same downstairs room after it was turned into a shower room.',
    source: 'Google profile',
  },
  showerBefore: {
    src: showerBefore,
    alt: 'A narrow downstairs toilet before work started, with worn walls and an old black cistern.',
    caption: 'Downstairs toilet before the shower room conversion.',
    source: 'Google profile',
  },
  newBuildSite: {
    src: newBuildSite,
    alt: 'A new stone house behind site fencing, with a Mazzone sign on the fence.',
    caption: 'New-build site with the Mazzone sign on the fence. Photo from the Mazzone Google profile.',
    source: 'Google profile',
  },
  stoneFront: {
    src: stoneFront,
    alt: 'Front of a stone-faced house with a white door, bay window, and tiled porch.',
    caption: 'Stone-faced house front. Photo from the Mazzone Google profile.',
    source: 'Google profile',
  },
  stoneRepair: {
    src: stoneRepair,
    alt: 'Close view of new stone blocks set into an older red brick wall, with scaffolding beside it.',
    caption: 'New stone let into old brickwork. Photo from the Mazzone Google profile.',
    source: 'Google profile',
  },
  fireplace: {
    src: fireplace,
    alt: 'A person in a Mazzone hoodie working on a stone fireplace surround with a wood burner.',
    caption: 'Stone fireplace surround. Photo from the Mazzone gallery.',
    source: 'Mazzone gallery',
  },
  brickGable: {
    src: brickGable,
    alt: 'A rebuilt red brick gable wall above a tiled roof, seen from a scaffold.',
    caption: 'Brick gable rebuilt in mixed reds. Photo from the Mazzone gallery.',
    source: 'Mazzone gallery',
  },
  showerDoorway: {
    src: showerDoorway,
    alt: 'A finished shower room seen through a doorway, with large marble-effect tiles and a glass screen.',
    caption: 'Shower room from the doorway. Photo from the Mazzone gallery.',
    source: 'Mazzone gallery',
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

export const projects: { key: PhotoKey; title: string; text: string }[] = [
  {
    key: 'stoneHouse',
    title: 'New stone house',
    text: 'A two-storey house in the honey-coloured stone you see across north Northamptonshire.',
  },
  {
    key: 'newBuildSite',
    title: 'New build on site',
    text: 'The Mazzone sign is on the fence. Both phone numbers on that sign match the numbers on this site.',
  },
  {
    key: 'rearElevation',
    title: 'Stone rear elevation',
    text: 'Back of a stone house, with patio doors out to the garden.',
  },
  {
    key: 'stoneFront',
    title: 'Stone house front',
    text: 'A stone front with a porch, bay window, and matching lintels.',
  },
  {
    key: 'gardenWall',
    title: 'Garden wall',
    text: 'A brick boundary wall with piers and a bed ready for planting.',
  },
  {
    key: 'brickGable',
    title: 'Brick gable',
    text: 'A gable rebuilt in old-looking red brick so it sits with the rest of the house.',
  },
  {
    key: 'stoneRepair',
    title: 'Stone set into brick',
    text: 'New stone blocks cut in beside older brick, under a worn stone cap.',
  },
  {
    key: 'fireplace',
    title: 'Fireplace stonework',
    text: 'A stone inglenook around a burner. The hoodie in the photo is a Mazzone one.',
  },
  {
    key: 'showerBefore',
    title: 'Shower room, before',
    text: 'A tight downstairs toilet before the walls, floor, and suite came out.',
  },
  {
    key: 'showerAfter',
    title: 'Shower room, after',
    text: 'The same room with a shower, basin, and toilet tiled in.',
  },
  {
    key: 'showerDoorway',
    title: 'Shower room doorway',
    text: 'Another view of that finished shower room, from the hall.',
  },
];

export interface Review {
  author: string;
  date: string | null;
  text: string;
}

/** Reviews copied from the Google listing, or from pages that quote that listing. Spelling is unchanged. */
export const reviews: Review[] = [
  {
    author: 'A Google reviewer',
    date: '2025-12-12',
    text: 'We had our kitchen totally renovated Brando co ordinated the works and was completed with a quick turnaround! Fantastic job would recommend 😊',
  },
  {
    author: 'Gary K.',
    date: '2025-04-07',
    text: 'Stonework repairs on a 3 storey victorian terrace. Good work done by Roberto and Brando in repairing and repainting front elevation and rear bay window. Many thanks for a great job 👍',
  },
  {
    author: 'Gina Wilson',
    date: '2025-03-31',
    text: 'Highly recommend this company, extremely happy with the service and work that they provided, will definitely be using again, thank you!',
  },
  {
    author: "Lorraine D'Albert",
    date: '2025-03-29',
    text: 'Fantastic job converting downstairs toilet into a shower room. The whole team were superb everything completed within the given timescale. Highly recommend Mazzone Construction',
  },
  {
    author: 'Karen Davies',
    date: '2025-03-29',
    text: 'I would definitely recommend Brando and Roberto. They have done several jobs at our property, very good work and very tidy.',
  },
  {
    author: 'Carol Innes',
    date: '2025-03-27',
    text: 'Thanks to these guys for my lovely wall restoration; complete with room for planting. Very helpful, personable, and inspired stone masons!',
  },
  {
    author: 'Lucy Oram',
    date: '2025-03-26',
    text: '100% recommend. Great work guys!',
  },
  {
    author: 'David L.',
    date: '2025-03-25',
    text: 'Brando did a great job of the repointing at our property. A really hard worker who definitely went more than the extra mile for us!',
  },
  {
    author: 'Siobhan',
    date: '2025-03-20',
    text: 'Perfection to detail. fantastic standard all round. Couldn’t recommend them enough ⭐️⭐️⭐️⭐️⭐️',
  },
  {
    author: 'Liv Tarleton',
    date: '2025-03-20',
    text: 'Removed and chimney for me and did a great job, really neat and tidy workers, great price and very professional!',
  },
  {
    author: 'Emily Britten',
    date: '2025-03-20',
    text: 'Would highly recommend this company. Professional service from start to finish. Very happy customer, thank you !',
  },
  {
    author: 'Maria',
    date: '2025-03-20',
    text: 'The guys at Mazzone did an amazing job on our Extention they help us though every stage. Couldn’t have ask for a bettter team. Highly recommend',
  },
  {
    author: 'Henry A.',
    date: '2025-03-20',
    text: 'Really happy with the stonework on our extension. The finish is spot on, and they were great to deal with from start to finish. Honest, hardworking, and know their stuff.',
  },
  {
    author: 'Gina P.',
    date: '2025-03-20',
    text: 'The work he done for me was exceptional, could not fault workmanship, manners , cleaned up after themselves, no rubbish left, will have them back if I need more work doing definitely, reasonably priced , thank you once again',
  },
  {
    author: 'Honour Y.',
    date: null,
    text: 'Really happy with the end result and loved having Brando and Berto doing the work for me. Highly recommend.',
  },
];

export const services = [
  {
    slug: 'stonemasonry',
    title: 'Stonemasonry',
    summary: 'Pointing, new stone, and fireplaces in the local stone.',
    lede: 'Brando trained as a stonemason, including time at DJ Tailby Ltd, before running Mazzone. Stone is the work clients ask for most.',
    paragraphs: [
      'Houses around Kettering are often built in ironstone or a pale limestone. When the mortar fails, or a pier, sill, or chimney needs cutting in, the new work has to match the old.',
      'We repoint, cut out bad stone, and build new stone walls, corners, and fireplace surrounds. Roberto and Brando are both named in reviews for stone repairs on a three-storey Victorian terrace and for the stonework on an extension.',
    ],
    jobs: [
      'Repointing stone walls',
      'Cutting out and replacing failed stone',
      'Chimney and bay repairs',
      'Stone on extensions',
      'Fireplace and inglenook stonework',
      'New stone houses and garden walls',
    ],
    photos: ['fireplace', 'stoneRepair', 'stoneHouse', 'rearElevation'] as PhotoKey[],
  },
  {
    slug: 'heritage-brickwork',
    title: 'Heritage brickwork',
    summary: 'Repairs that keep the old brick, not a new wall that looks stuck on.',
    lede: 'A lot of Kettering and the villages around it are brick as well as stone. Old walls need brick and mortar that suit the house.',
    paragraphs: [
      'We rebuild gables, garden walls, and worn elevations, and we repoint brickwork. One Google review is for a wall restoration with room left for planting. Another is for taking a chimney down and making the roof good.',
      'Where a house mixes brick and stone, we cut the new stone so it sits in the old brick, rather than covering the join with a straight line of render.',
    ],
    jobs: [
      'Repointing brickwork',
      'Rebuilding gables and boundary walls',
      'Chimney removal and roof making-good',
      'Matching old red brick',
      'Brick and stone repairs on the same wall',
    ],
    photos: ['brickGable', 'gardenWall', 'stoneRepair', 'stoneFront'] as PhotoKey[],
  },
  {
    slug: 'extensions',
    title: 'Extensions',
    summary: 'Extra rooms in stone or brick that suit the house you already have.',
    lede: 'Two Google reviews talk about extension work. One is about help through each stage. One is about the stone finish on the extension.',
    paragraphs: [
      'An extension has to line up with the house. On a stone house that means the right stone, the right joint, and a roof that does not fight the old one. On a brick house it means the same care with the brick and the mortar.',
      'We can help you line up drawings and a planning application when the job needs them. The council still makes the decision. We will tell you early if a job is likely to need permission, and we will not start structural work on a guess.',
    ],
    jobs: [
      'Single-storey rear and side extensions',
      'Stone or brick to match the house',
      'Openings in existing walls',
      'Help with drawings and planning forms',
      'Making good inside once the shell is up',
    ],
    photos: ['rearElevation', 'stoneHouse', 'newBuildSite', 'stoneFront'] as PhotoKey[],
  },
  {
    slug: 'new-builds',
    title: 'New builds',
    summary: 'New houses in stone, from the groundworks to the finished walls.',
    lede: 'The Google profile shows a finished stone house and a live site with the Mazzone fence sign. New build is part of the work, not a sideline.',
    paragraphs: [
      'A new house in this area is judged on the stone. Thin cladding that reads as fake is obvious from the road. We build in real stone, with proper quoins, sills, and a plinth that suits the street.',
      'New houses need plans, building regulations, and usually planning permission. We work with you through that, then build it. Ask us early, before you buy a plot on the hope that anything will be allowed.',
    ],
    jobs: [
      'New stone houses',
      'Plots and one-off homes',
      'Groundworks and masonry',
      'Working with your designer or architect',
      'Help getting the application in order',
    ],
    photos: ['stoneHouse', 'newBuildSite', 'stoneFront', 'rearElevation'] as PhotoKey[],
  },
  {
    slug: 'renovations',
    title: 'Home renovations',
    summary: 'Kitchens, shower rooms, and the messy jobs inside the house.',
    lede: 'Google reviews cover a full kitchen renovation run by Brando, and a downstairs toilet turned into a shower room, finished on time.',
    paragraphs: [
      'Inside work is where a job is won or lost on the finish and the clean-up. Reviews mention a tidy site, no rubbish left, and a quick turnaround on a kitchen.',
      'The photos here show a real before and after: a narrow downstairs toilet, then a shower, basin, and toilet in the same footprint. We also take on other internal work when it sits with a larger job, or when it is worth a visit on its own.',
    ],
    jobs: [
      'Kitchen renovations',
      'Bathrooms and shower rooms',
      'Downstairs toilets turned into wet rooms or shower rooms',
      'Making good after structural work',
      'Smaller jobs at a house we already know',
    ],
    photos: ['showerAfter', 'showerBefore', 'showerDoorway', 'fireplace'] as PhotoKey[],
  },
  {
    slug: 'project-management',
    title: 'Running the job',
    summary: 'One pair of builders from the first visit to the last sweep-up.',
    lede: 'On a bigger job someone has to book the trades, keep the order of work straight, and tell you what is happening. That is part of what we do.',
    paragraphs: [
      'Brando and Roberto are on the tools. They are not a call centre that sends a different crew each week. Reviews name them personally, and more than one client has had them back for a second job.',
      'If your job needs drawings or a planning form, we help get those moving. We still expect you to know the price before we start, and we expect to leave the site clean.',
    ],
    jobs: [
      'Pricing the job before work starts',
      'Ordering materials and booking trades',
      'Keeping you posted as the job moves',
      'Help with drawings and applications',
      'A tidy handover at the end',
    ],
    photos: ['newBuildSite', 'fireplace', 'gardenWall', 'stoneRepair'] as PhotoKey[],
  },
] as const;

export type Service = (typeof services)[number];

export const areas = [
  {
    slug: 'kettering',
    name: 'Kettering',
    summary: 'Our base. Stone, brick, and the streets we work on every week.',
    paragraphs: [
      'Mazzone is based at 1a Headlands, Kettering, NN15 7ER. This is home ground: ironstone and brick houses, Victorian terraces, 1930s bays, and newer estates on the edge of town.',
      'Typical jobs here are repointing, chimney and bay repairs, garden walls, extensions in matching stone, and kitchens or shower rooms. Barton Seagrave sits on the east side of town and we treat it as Kettering, not a separate trip.',
      'If you can walk to the town centre or London Road, you are close to us. Call before you come to the address. It is our base, not a showroom with set opening hours.',
    ],
  },
  {
    slug: 'burton-latimer',
    name: 'Burton Latimer',
    summary: 'The next town south, with an ironstone High Street.',
    paragraphs: [
      'Burton Latimer is a few minutes from Kettering. The High Street and the older lanes are ironstone, and a lot of the houses need pointing, new sills, or a careful extension rather than a standard brick box.',
      'We also work on the newer streets in the town, where the job is more often a kitchen, a shower room, or a rear extension. Say which part of Burton Latimer you are in when you call, so we know the house before we visit.',
    ],
  },
  {
    slug: 'rothwell',
    name: 'Rothwell',
    summary: 'A stone market town just north of Kettering.',
    paragraphs: [
      'Rothwell is a small market town of stone houses, a wide main street, and cottages that have been altered many times. Repairs here show. A hard cement strap across soft stone causes more trouble than it fixes.',
      'We take on stone repairs, repointing, small extensions, and inside work in Rothwell. If the house is in a row, we will look at party walls and access before we price it. Terraces need a plan for skips, mixing, and where the stone will sit.',
    ],
  },
  {
    slug: 'desborough',
    name: 'Desborough',
    summary: 'Stone and brick houses between Kettering and Market Harborough.',
    paragraphs: [
      'Desborough grew up as a boot and clothing town. You get stone cottages, brick terraces, and later houses on the same short drive from Kettering.',
      'Extensions and kitchen work are as common here as pure stone repairs. We will say which one your house actually needs. Not every dark wall needs new stone. Sometimes it needs the right mortar and a sound gutter first.',
    ],
  },
  {
    slug: 'corby',
    name: 'Corby',
    summary: 'Renovations and extensions in a town of mixed housing.',
    paragraphs: [
      'Corby is north of Kettering, about a quarter of an hour in normal traffic. Much of the town is 20th-century housing, so the usual ask is an extension, a kitchen, or a bathroom, not a limestone manor repair.',
      'There is older brick and stone here too, and we will take that on. Tell us the street and the age of the house if you know it. We would rather price the real job than a guess from a postcode.',
    ],
  },
  {
    slug: 'wellingborough',
    name: 'Wellingborough',
    summary: 'Brick terraces and family houses south of Kettering.',
    paragraphs: [
      'Wellingborough is south of us, past Finedon. The town has brick terraces, bay-fronted houses, and newer estates. Repointing, chimney work, and rear extensions are the jobs that fit.',
      'The drive is short enough to run a proper site, not a one-day visit with no follow-up. If the job is a single small repair a long way from our tools, we will say so before you book us.',
    ],
  },
  {
    slug: 'northampton',
    name: 'Northampton',
    summary: 'Larger jobs in the county town, when the travel makes sense.',
    paragraphs: [
      'Northampton is the furthest of the towns we regularly cover, roughly half an hour from Kettering depending on the traffic on the A43. We take kitchens, extensions, and stone or brick repairs when the job is big enough to justify the trip.',
      'We will not pretend to be a Northampton firm with a yard in the town. We are Kettering builders who will come to Northampton for the right job. The price will include getting there and getting materials there. We would rather put that in the quote than hide it.',
    ],
  },
] as const;

export const villages = [
  'Geddington',
  'Weekley',
  'Barton Seagrave',
  'Isham',
  'Finedon',
  'Broughton',
  'Pytchley',
  'Rushton',
  'Great Oakley',
  'Stanion',
  'Thrapston',
  'Market Harborough',
];

export const faqs = [
  {
    question: 'What work do you do?',
    answer:
      'Stone and brick repairs, repointing, chimneys, garden walls, extensions, new stone houses, kitchens, and shower rooms. If a job is outside that, ask anyway. We would rather say no than take work we do not do well.',
  },
  {
    question: 'Where do you work?',
    answer:
      'We are based in Kettering. We cover Burton Latimer, Rothwell, Desborough, Corby, Wellingborough, Northampton, and the villages in between. For a small job a long way out, we will tell you if the travel does not make sense.',
  },
  {
    question: 'Who will be on site?',
    answer:
      'Brando and Roberto. Clients name both of them in Google reviews. Brando is on 07860 207117. Roberto is on 07925 418257.',
  },
  {
    question: 'Do you take small jobs?',
    answer:
      'Yes. Reviews include repointing, a chimney removal, and a downstairs toilet turned into a shower room, as well as extensions and a full kitchen. Several clients have asked them back for another job at the same house.',
  },
  {
    question: 'How do I get a price?',
    answer:
      'Call or email with the address, what you want done, and a few photos if you have them. We will come and look, then give you a price before any work starts.',
  },
  {
    question: 'Will I need planning permission?',
    answer:
      'Sometimes. New houses, and many extensions, need planning permission or building regulations approval. We can help line up drawings and the forms. The council makes the decision, and we will not promise an outcome we do not control.',
  },
];

export const steps = [
  {
    title: 'Tell us the job',
    text: 'Call Brando or Roberto, or send the form. Photos of the wall, room, or garden help us see the scale.',
  },
  {
    title: 'We come and look',
    text: 'We visit, check access, and talk through what the house actually needs. Some dark stone only needs pointing. Some needs new stone.',
  },
  {
    title: 'You get a price',
    text: 'You get a clear price before we start. If drawings or a planning form are needed, we say so at this point.',
  },
  {
    title: 'We build, then tidy up',
    text: 'The same people stay on the job. Reviews keep mentioning a clean site and no rubbish left behind.',
  },
];

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${iso}T00:00:00`));
}

export function canonical(pathname: string) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return new URL(path, business.url).href;
}

export function businessNode(origin: string) {
  return {
    '@type': ['GeneralContractor', 'HomeAndConstructionBusiness'],
    '@id': `${origin}/#business`,
    name: business.name,
    url: origin,
    image: `${origin}/og.jpg`,
    telephone: business.phones[0].tel,
    email: business.email,
    currenciesAccepted: 'GBP',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    hasMap: business.maps,
    areaServed: [
      ...areas.map((area) => ({
        '@type': 'City',
        name: area.name,
        containedInPlace: { '@type': 'AdministrativeArea', name: 'Northamptonshire' },
      })),
      ...villages.map((name) => ({ '@type': 'Place', name })),
    ],
    sameAs: [business.maps, business.instagram],
    contactPoint: business.phones.map((phone) => ({
      '@type': 'ContactPoint',
      telephone: phone.tel,
      contactType: 'customer service',
      name: phone.name,
      areaServed: 'GB',
      availableLanguage: ['English'],
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating,
      bestRating: 5,
      worstRating: 1,
      reviewCount: business.reviewCount,
      ratingCount: business.reviewCount,
    },
    knowsAbout: services.map((service) => service.title),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Building services',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.summary,
          url: `${origin}/services/${service.slug}`,
          areaServed: 'Kettering',
          provider: { '@id': `${origin}/#business` },
        },
      })),
    },
  };
}

export function reviewNodes() {
  return reviews.map((review) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: review.author },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: 5,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.text,
    ...(review.date ? { datePublished: review.date } : {}),
    itemReviewed: { '@id': `${business.url}/#business` },
    publisher: { '@type': 'Organization', name: 'Google' },
  }));
}

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
