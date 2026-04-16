export const site = {
  name: "Elgin Public House",
  address: {
    street: "219 E Chicago St",
    city: "Elgin",
    region: "IL",
    postalCode: "60120",
    full: "219 E Chicago St, Elgin, IL 60120",
    mapsSearch:
      "https://www.google.com/maps/search/219+E+Chicago+St+Elgin+IL+60120",
    mapsDirections:
      "https://www.google.com/maps/dir/?api=1&destination=219+E+Chicago+St+Elgin+IL+60120",
  },
  contact: {
    phone: "(847) 468-8810",
    phoneHref: "tel:8474688810",
    email: "info@elginpublichouse.com",
    emailHref: "mailto:info@elginpublichouse.com",
  },
  hours: {
    sundayThursday: "11 AM – 1 AM",
    fridaySaturday: "11 AM – 2 AM",
    kitchen: "Kitchen open 'til midnight every night",
  },
  links: {
    facebook: "https://www.facebook.com/eph219",
    yelp: "https://www.yelp.com/biz/elgin-public-house-elgin",
    uberEats:
      "https://www.ubereats.com/store/elgin-public-house/HYzSa6QXXyaaOYM--xPAng",
    doorDash: "https://www.doordash.com/store/elgin-public-house-elgin-30957950/",
    toast:
      "https://order.toasttab.com/online/elgin-public-house-toast-now-219-e-chicago-st",
  },
  proof: {
    yelp: "600+ Yelp reviews",
    tripAdvisor: "292 TripAdvisor reviews",
    facebook: "10K+ Facebook followers",
  },
  privateEvents: {
    roomName: "Pub 217 Upstairs",
    pdfs: [
      {
        title: "Main Restaurant Room Rates",
        href: "https://img1.wsimg.com/blobby/go/6f341580-09b3-43e5-a62d-23c9c012eba5/EPH%20Main%20Restaurant%20Party%20Pricing.pdf",
      },
      {
        title: "Mingle Party Menu Pricing",
        href: "https://img1.wsimg.com/blobby/go/6f341580-09b3-43e5-a62d-23c9c012eba5/EPH%20Mingle%20Pricing.pdf",
      },
      {
        title: "Pasta & Salad Party Pricing",
        href: "https://img1.wsimg.com/blobby/go/6f341580-09b3-43e5-a62d-23c9c012eba5/EPH%20Pasta%20Pricing.pdf",
      },
    ],
  },
} as const;
