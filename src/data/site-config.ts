import avatar from '../assets/images/avatar.jpg';
import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://sekar.io',
    avatar: {
        src: avatar,
        alt: 'Sabaritha Sekar'
    },
    title: 'Sabaritha Sekar',
    subtitle: 'I navigate non-determinism for a living — and for fun',
    description: 'Perception/robotics engineer, ceramicist, writer. Navigating non-determinism for a living — and for fun.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Sabaritha Sekar — sekar.io'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Writing',
            href: '/blog'
        },
        {
            text: 'Ceramics',
            href: '/projects'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/sabsekar24'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com/in/sabaritha'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/spells.and.bristles'
        }
    ],
    hero: {
        title: 'Engineer, ceramicist, writer',
        text: "I'm **Sabaritha Sekar** — perception/robotics engineer, ceramicist, and writer. I work at the intersection of sensors, uncertainty, and making things that hold together (clay or code).\n\nI make ceramics under [Spells and Bristles](https://instagram.com/spells.and.bristles). Explore my [writing](/blog), see my [ceramics](/projects), or learn more [about me](/about).",
        image: {
            src: hero,
            alt: 'Sabaritha Sekar'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Subscribe',
        text: '',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
