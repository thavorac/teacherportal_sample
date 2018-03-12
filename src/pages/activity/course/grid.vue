<template>
    <q-page padding class="row justify-center docs-tree">
        <div style="width: 700px; max-width: 90vw;">
            <q-input
                    v-model="filter"
                    stack-label="Find your courses"
                    clearable
                    class="q-mb-sm"
            />
            <q-tree
                    :nodes="simple"
                    :filter="filter"
                    default-expand-all
                    node-key="label"
            />

        </div>
    </q-page>
</template>

<script>
    export default {
        data: () => ({
            simple: [
                {
                    label: 'Satisfied customers',
                    children: [
                        {
                            label: 'Good food',
                            children: [
                                { label: 'Quality ingredients' },
                                { label: 'Good recipe' }
                            ]
                        },
                        {
                            label: 'Good service (disabled node)',
                            disabled: true,
                            children: [
                                { label: 'Prompt attention' },
                                { label: 'Professional waiter' }
                            ]
                        },
                        {
                            label: 'Pleasant surroundings',
                            children: [
                                { label: 'Happy atmosphere' },
                                { label: 'Good table presentation' },
                                { label: 'Pleasing decor' }
                            ]
                        }
                    ]
                }
            ],
            props: [
            ],
            propsExpanded: ['Satisfied customers', 'Pleasant surroundings'],

            customize: [
                {
                    label: 'Satisfied customers',
                    header: 'root',
                    children: [
                        {
                            label: 'Good food',
                            icon: 'restaurant_menu',
                            header: 'generic',
                            children: [
                                {
                                    label: 'Quality ingredients',
                                    header: 'generic',
                                    body: 'story',
                                    story: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt exercitationem quam est ea optio, rem placeat veritatis commodi dignissimos aspernatur labore, asperiores facilis dicta. Veniam enim molestiae odit obcaecati eum.'
                                },
                                {
                                    label: 'Good recipe',
                                    body: 'story',
                                    story: 'A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.'
                                }
                            ]
                        },
                        {
                            label: 'Good service',
                            header: 'generic',
                            body: 'toggle',
                            caption: 'Why are we as consumers so captivated by stories of great customer service? Perhaps it is because...',
                            enabled: false,
                            children: [
                                { label: 'Prompt attention' },
                                { label: 'Professional waiter' }
                            ]
                        },
                        {
                            label: 'Pleasant surroundings',
                            children: [
                                { label: 'Happy atmosphere' },
                                { label: 'Good table presentation', header: 'generic' },
                                { label: 'Pleasing decor' }
                            ]
                        }
                    ]
                }
            ],

            filter: '',
            accordionExpanded: ['Satisfied customers', 'Good service'],
            selected: 'Happy atmosphere',

            tickable: [
                {
                    label: 'Satisfied customers',
                    avatar: '~assets/quasar-logo-full.svg',
                    children: [
                        {
                            label: 'Good food',
                            icon: 'restaurant_menu',
                            children: [
                                { label: 'Quality ingredients' },
                                { label: 'Good recipe' }
                            ]
                        },
                        {
                            label: 'Good service',
                            icon: 'room_service',
                            children: [
                                { label: 'Prompt attention' },
                                { label: 'Professional waiter' }
                            ]
                        },
                        {
                            label: 'Pleasant surroundings',
                            icon: 'photo',
                            children: [
                                {
                                    label: 'Happy atmosphere (not tickable)',
                                    tickable: false,
                                    img: '~assets/quasar-logo-full.svg'
                                },
                                {
                                    label: 'Good table presentation (disabled node)',
                                    disabled: true,
                                    img: '~assets/quasar-logo-full.svg'
                                },
                                {
                                    label: 'Pleasing decor',
                                    img: '~assets/quasar-logo-full.svg'
                                }
                            ]
                        },
                        {
                            label: 'Extra information (has no tick)',
                            noTick: true,
                            icon: 'photo'
                        },
                        {
                            label: 'Forced tick strategy (to "strict" in this case)',
                            tickStrategy: 'strict',
                            icon: 'school',
                            children: [
                                {
                                    label: 'Happy atmosphere',
                                    img: '~assets/quasar-logo-full.svg'
                                },
                                {
                                    label: 'Good table presentation',
                                    img: '~assets/quasar-logo-full.svg'
                                },
                                {
                                    label: 'Very pleasing decor',
                                    img: '~assets/quasar-logo-full.svg'
                                }
                            ]
                        }
                    ]
                }
            ],
            ticked: [],
            tickStrategy: 'leaf',
            tickFilter: null,

            lazy: [
                {
                    label: 'Node 1',
                    children: [
                        { label: 'Node 1.1', lazy: true },
                        { label: 'Node 1.2', lazy: true }
                    ]
                },
                {
                    label: 'Node 2',
                    lazy: true
                },
                {
                    label: 'Lazy load empty',
                    lazy: true
                },
                {
                    label: 'Node is not expandable',
                    expandable: false,
                    children: [
                        { label: 'Some node' }
                    ]
                }
            ]
        }),
        methods: {
            togglePropsGoodServiceExpand () {
                const index = this.propsExpanded.indexOf('Good service')
                if (index > -1) {
                    this.propsExpanded.splice(index, 1)
                }
                else {
                    this.propsExpanded.push('Good service')
                }
            },
            selectGoodService () {
                if (this.selected !== 'Good service') {
                    this.selected = 'Good service'
                }
            },
            unselectNode () {
                this.selected = null
            },
            onLazyLoad ({ node, key, done, fail }) {
                // call fail() if any error occurs

                setTimeout(() => {
                    // simulate loading and setting an empty node
                    if (key.indexOf('Lazy load empty') > -1) {
                        done([])
                        return
                    }

                    const label = node.label
                    done([
                        { label: `${label}.1` },
                        { label: `${label}.2`, lazy: true },
                        {
                            label: `${label}.3`,
                            children: [
                                { label: `${label}.3.1`, lazy: true },
                                { label: `${label}.3.2`, lazy: true }
                            ]
                        }
                    ])
                }, 1000)
            }
        }
    }
</script>

<style>
</style>