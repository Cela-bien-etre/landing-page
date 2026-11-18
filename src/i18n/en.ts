// 🇬🇧 All website copy in English (first draft, to be proofread).
// Must keep exactly the same structure as fr.ts (TypeScript checks it).
import type { Dictionary } from './fr';

const en: Dictionary = {
  meta: {
    title: 'In-home massage in Soustons (Landes) | Céla Bien-être',
    description:
      'In-home massages in Soustons and nearby (Seignosse, Hossegor, Vieux-Boucau…) with Céline: deep tissue, sports, reflexology, Kobido, Reiki.',
    ogImageAlt: 'Céline, Céla Bien-être',
  },

  common: {
    newTab: ' (opens in a new tab)',
    bookPlanity: 'Book on Planity',
    backHome: '← Back to home',
  },

  langSwitch: {
    label: 'Language',
  },

  hero: {
    title: 'In-home massages',
    location: 'in {city} & surrounding area',
    soins: 'Personalised - Deep tissue - Sports - Foot reflexology - Kobido - Reiki',
    quote: '“The best way to reconnect with your Self is to touch the body with the intention of listening to it with your heart.”',
    contact: "Let's connect",
  },

  about: {
    title: 'I help you become aware of your needs through Conscious Touch.',
    paragraphs: [
      'Ever since I was a child, I have loved taking care of the people dear to me: listening to them, looking after their well-being, delighting them with small, thoughtful gestures…',
      'It is this Love for others that led me to massage.',
      'Massaging someone is not just touching a body. It means connecting with it, giving yourself to it, immersing yourself in the intention of doing good. It is a subtle exchange, from soul to soul. It is powerful.',
      'Over eighteen years of practice, I have found myself and flourished in this authentic, individual and privileged relationship with others.',
    ],
    photoAlt: 'Portrait of Céline among flowers',
  },

  toucher: {
    title: 'What is Conscious Touch?',
    bienfaits: [
      'Becoming aware of sensitive areas',
      'Releasing physical tension',
      'Letting the mind unwind',
      'Letting the body rest in trust',
      'Reconnecting with Touch',
      'Opening the heart',
      'Aligning with who you are as a whole',
      'Reconnecting with your Self',
      'Enhancing the benefits of a fasting or yoga retreat by helping the body’s fluids and energy flow (detox)',
    ],
  },

  formules: {
    title: 'You can book me:',
    domicile: 'In your own home, your cocoon of comfort',
    jeune: 'During a Fasting & Hiking retreat',
    yoga: 'During a Yoga & Meditation retreat',
  },

  soins: {
    title: 'In-home treatments:',
    subtitle: 'every massage is tailored to what you need in the moment',
    photoAlt: 'In-home massage',
    tarifsLabel: '{soin} prices',
    items: {
      personnalise: {
        nom: 'Personalised massage',
        description:
          'A full-body massage adapted to the rhythm and pressure you prefer. I adapt to you and your needs, not the other way around, so feel free to tell me what you need.',
      },
      deepTissue: {
        nom: 'Deep tissue',
        description:
          'This massage releases the different layers of muscle tissue as well as the fascia. It is a deep massage during which the muscle is warmed up and stretched in both directions of the fibre.',
      },
      sportif: {
        nom: 'Sports massage',
        description:
          'An invigorating massage in which the muscles are warmed up to help them release. Pressure points and deep stretches support better muscle recovery. Recommended after training, and for anyone who wants to feel energised after their session.',
      },
      reflexologie: {
        nom: 'Foot reflexology',
        description:
          'Stimulation of points on the feet to re-energise the whole body. It also brings an immediate feeling of full-body relaxation.',
      },
      kobido: {
        nom: 'Kobido',
        description:
          'A Japanese facial massage technique that brings radiance to the complexion through draining movements. It helps eliminate toxins and boosts cell oxygenation. A combination of lifting movements gives an immediate firming effect, smooths fine lines around the eyes and mouth, and reduces forehead wrinkles.',
      },
      reiki: {
        nom: 'Reiki',
        description:
          'Reiki is a Japanese technique that channels energy through the laying of hands over the whole body. It is practised fully clothed. You absorb the energy you need during the session.',
      },
    },
  },

  jeune: {
    title: 'Fasting retreats:',
    subtitle: 'Tailor-made support',
    collageAlts: ['Fasting retreat: juices and light snacks', 'Massage during a fasting retreat', 'Massage in the heart of nature'],
    zonesTitle: 'The most receptive areas',
    zonePhotoAlt: 'Massage: {zone}',
    zones: {
      dos: {
        zone: 'The back',
        etat: 'Tense',
        texte: [
          'Through gentle or deep movements, a back massage releases tension. It is no coincidence that we talk about carrying the weight of the world on our shoulders.',
          'Whether we work on the knots or generously envelop the body, what matters is that the Touch resonates in the right way.',
        ],
      },
      ventre: {
        zone: 'The belly',
        etat: 'Knotted',
        texte: [
          'The belly is the centre of our emotions. It speaks to us!',
          'Our most deeply buried emotions hide in the belly; massaging it releases them, and a feeling of openness in the solar plexus arises instantly.',
          'Breathing then becomes more fluid, natural and full.',
        ],
      },
      tete: {
        zone: 'The head',
        etat: 'Foggy',
        texte: [
          'Stress comes with an intense, heavy mental load. A sense of brain fog makes it hard to think clearly.',
          'Massaging the face and scalp clears this fog straight away. The mind drifts off, only to come back to the present moment and the physical world. Thoughts become clear and easy, and a sense of peace appears.',
        ],
      },
      pieds: {
        zone: 'The feet',
        etat: 'Swollen',
        texte: [
          'This area is constantly under strain because we spend so much time standing. The feet store toxins. They carry everything!',
          'Massage stimulates blood circulation, and therefore the elimination of these toxins. It helps drain and reduce swelling, and brings a feeling of lightness.',
        ],
      },
    },
    regenerantTitle: 'A treatment specially created for fasters',
    regenerantPhotoAlt: 'Céline performing the Regenerating treatment',
    regenerantNom: 'The Regenerating treatment',
    regenerantTexte: [
      'It combines Kobido techniques, foot reflexology and belly work to focus on detoxifying the body. It drains, stimulates, releases tension and re-energises the whole body.',
      'A feeling of lightness and complete well-being.',
    ],
  },

  retraites: {
    title: 'Yoga & Meditation retreats',
    paragraphs: [
      'When you organise a yoga retreat and want to take your yogis to the very end of the experience you offer, Conscious Touch is a must!',
      'Massage completes the journey made through the different practices and brings people back to their bodies. Every movement is mindful and felt with true intention.',
      'I have designed a dedicated approach for this format…',
    ],
    note: 'Massage length is adjusted to the number of participants.',
    contact: 'Contact me for more information',
    photoAlt: 'Meditation facing the sea at sunset',
  },

  avis: {
    prestationsTexte: ['Find all the treatments I offer on Planity.', 'You can also book directly there.'],
    prestationsTitle: 'My treatments',
    title: 'They trusted me',
    client: 'Client',
    traduit: 'translated from French',
    note: 'Rating: {note} out of 5',
    google: 'See all Google reviews',
    items: {
      julien:
        'I had the opportunity, I would even say the good fortune, to receive 2 massages from Céline during a retreat in Aveyron. Céline truly listens to what we say and to what we feel. 2 great massages adapted to my needs that supported me throughout the fast. Tension released, a feeling of lightness and renewed energy. There is great precision in her movements, and you can feel her experience in her technique, with so much fluidity. Highly recommended!',
      andrew:
        'Honestly, what amazing massages! Truly incredible… so much gentleness and firmness, so much attention… What an ability to be attentive to every micro-reaction to reach that level! Absolutely incredible ❤️. Thank you so much for listening so attentively and for the incredible relaxation that comes with it! It goes without saying that I recommend her without any reservation whatsoever!!! A truly exceptional massage therapist.',
    },
  },

  contact: {
    title: 'Any questions?',
    intro: 'Looking for a gift idea or planning a retreat? Fill in this form and I will get back to you to talk it through and find what suits you best!',
    honeypot: 'Do not fill in:',
    requiredNote: ['Fields marked with', 'are required.'],
    profil: 'You are',
    particulier: 'An individual',
    professionnel: 'A professional',
    professionnelHint: '(retreat, event…)',
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    optional: '(optional)',
    message: 'Message',
    consent: 'I agree that my details may be used to contact me.',
    submit: 'Send',
    successTitle: 'Thank you for your message!',
    successText: 'I will get back to you very soon.',
    errors: {
      profil: 'Please tell me whether you are an individual or a professional.',
      name: 'Please enter your name.',
      email: 'Please enter a valid email address.',
      phone: 'This phone number does not look valid.',
      message: 'Please write your message.',
      consent: 'Please agree to be contacted so that I can reply to your request.',
      invalid: 'Some fields need to be corrected.',
    },
    status: {
      sending: 'Sending…',
      error: 'Oops, your message could not be sent. Please try again or contact me directly.',
    },
  },

  footer: {
    rights: 'All rights reserved.',
    legal: 'Legal notice',
  },

  legal: {
    title: 'Legal notice',
    metaTitle: 'Legal notice | Céla Bien-être',
    metaDescription: 'Legal notice and privacy policy of the Céla Bien-être website.',
  },

  merci: {
    metaTitle: 'Thank you | Céla Bien-être',
    title: 'Thank you for your message!',
    text: 'I will get back to you very soon.',
    back: 'Back to home',
  },
};

export default en;
