
export default [
    {
        label: 'Podcasts',
        items: [
            {
                label: 'Episodes',
                to: '/episodes',
                command: () => {
                    gaEvent('Click Tracking', 'Navigation', 'Podcasts: Episodes')
                }
            },
            {
                label: 'Radio Shows',
                to: '/radio-shows',
                command: () => {
                    gaEvent('Click Tracking', 'Navigation', 'Podcasts: Radio Shows')
                }
            },
            {
                label: 'Series',
                to: '/series',
                command: () => {
                    gaEvent('Click Tracking', 'Navigation', 'Podcasts: Series')
                }
            },
            {
                label: 'Radiolab for Kids',
                to: '/radiolab-kids',
                command: () => {
                    gaEvent('Click Tracking', 'Navigation', 'Podcasts: Radiolab for Kids')
                }
            }
        ]
    },
    {
        label: 'About',
        items: [
            {
                label: 'About the Show',
                to: '/about',
                command: () => {
                    gaEvent('Click Tracking', 'Navigation', 'About: About the Show')
                }
            },
            {
                label: 'Team',
                to: '/team',
                command: () => {
                    gaEvent('Click Tracking', 'Navigation', 'About: Team')
                }
            },
            {
                label: 'Announcements',
                to: '/new-cohosts-latif-nasser-lulu-miller',
                command: () => {
                    gaEvent('Click Tracking', 'Navigation', 'About: Announcements')
                }
            },
            {
                label: 'Pitch Us',
                to: '/pitch-us',
                command: () => {
                    gaEvent('Click Tracking', 'Navigation', 'About: Pitch Us')
                }
            }
        ]
    },
    {
        label: 'For Listeners',
        items: [
            {
                label: 'The Lab',
                to: '/the-lab',
                command: () => {
                    gaEvent('Click Tracking', 'Navigation', 'For Listeners: The Lab')
                }
            },
            {
                label: 'Read the credits',
                to: '/radiolab-read-credit',
                command: () => {
                    gaEvent('Click Tracking', 'Navigation', 'For Listeners: Read the credits')
                }
            },
            {
                label: 'Newsletter',
                to: '/newsletter',
                command: () => {
                    gaEvent('Click Tracking', 'Navigation', 'For Listeners: Newsletter')
                }
            },
            {
                label: 'Swag Lab',
                url: 'https://shop.radiolab.org',
                target: '_blank',
                command: () => {
                    gaEvent('Click Tracking', 'Navigation', 'For Listeners: Swag Lab')
                }
            }
        ]
    },
    {
        label: 'How to listen',
        to: '/how-to-listen',
        class: 'gap alone',
        command: () => {
            gaEvent('Click Tracking', 'Navigation', 'How to listen')
        }
    },
    {
        label: 'Become a member',
        to: '/the-lab',
        class: 'button alone',
        command: () => {
            gaEvent('Click Tracking', 'Navigation', 'Become a member')
        }
    },
    {
        label: 'FAQs',
        visible: false,
        to: 'https://nypublicradio.force.com/wnyc/s/programming-help-and-feedback',
        command: () => {
            gaEvent('Click Tracking', 'Navigation', 'FAQs')
        }
    },
    {
        label: 'Sponsorship',
        visible: false,
        to: 'https://sponsorship.wnyc.org/',
        command: () => {
            gaEvent('Click Tracking', 'Navigation', 'Sponsorship')
        }
    },
    {
        label: 'Diversity (DEI)',
        visible: false,
        to: 'https://www.nypublicradio.org/diversity-dei-overview/',
        command: () => {
            gaEvent('Click Tracking', 'Navigation', 'Diversity (DEI)')
        }
    },
    {
        label: 'Listener Panel',
        visible: false,
        to: 'https://www.wnycstudios.org/listener-panel',
        command: () => {
            gaEvent('Click Tracking', 'Navigation', 'Listener Panel')
        }
    },
    {
        label: 'Terms of Use',
        visible: false,
        to: 'https://www.wnyc.org/terms/',
        command: () => {
            gaEvent('Click Tracking', 'Navigation', 'Terms of Use')
        }
    },
    {
        label: 'Privacy Policy',
        visible: false,
        to: 'https://www.wnyc.org/privacy/',
        command: () => {
            gaEvent('Click Tracking', 'Navigation', 'Privacy Policy')
        }
    },
    {
        label: 'Accessibility',
        visible: false,
        to: 'https://media.wnyc.org/media/resources/2021/Jul/07/accessibility_policy_10.30.20.pdf',
        command: () => {
            gaEvent('Click Tracking', 'Navigation', 'Accessibility')
        }
    },
]