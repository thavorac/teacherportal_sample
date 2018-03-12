<template>
    <q-page padding class="row docs-table">
        <q-table
                class="full-width"
                :data="tableData"
                :columns="columns"
                :filter="filter"
                :visible-columns="visibleColumns"
                :separator="separator"
                row-key="name"
                color="secondary"
        >
            <template slot="top-left" slot-scope="props">
                <q-search
                        hide-underline
                        color="secondary"
                        v-model="filter"
                        class="col-6"
                />
            </template>
            <template slot="top-right" slot-scope="props">
                <q-table-columns
                        color="secondary"
                        class="q-mr-sm"
                        v-model="visibleColumns"
                        :columns="columns"
                />
                <q-select
                        color="secondary"
                        v-model="separator"
                        :options="[
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Vertical', value: 'vertical' },
            { label: 'Cell', value: 'cell' },
            { label: 'None', value: 'none' }
          ]"
                        hide-underline
                />
                <q-btn
                        flat round dense
                        :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
                        @click="props.toggleFullscreen"
                />
            </template>
        </q-table>
    </q-page>
</template>
<script>
    export default {
        data () {
            return {
                tableData: [
                    {
                        name: 'Frozen Yogurt',
                        calories: 159,
                        fat: 6.0,
                        carbs: 24,
                        protein: 4.0,
                        sodium: 87,
                        calcium: '14%',
                        iron: '1%'
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                        fat: 9.0,
                        carbs: 37,
                        protein: 4.3,
                        sodium: 129,
                        calcium: '8%',
                        iron: '1%'
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                        fat: 16.0,
                        carbs: 23,
                        protein: 6.0,
                        sodium: 337,
                        calcium: '6%',
                        iron: '7%'
                    },
                    {
                        name: 'Cupcake',
                        calories: 305,
                        fat: 3.7,
                        carbs: 67,
                        protein: 4.3,
                        sodium: 413,
                        calcium: '3%',
                        iron: '8%'
                    },
                    {
                        name: 'Gingerbread',
                        calories: 356,
                        fat: 16.0,
                        carbs: 49,
                        protein: 3.9,
                        sodium: 327,
                        calcium: '7%',
                        iron: '16%'
                    },
                    {
                        name: 'Jelly bean',
                        calories: 375,
                        fat: 0.0,
                        carbs: 94,
                        protein: 0.0,
                        sodium: 50,
                        calcium: '0%',
                        iron: '0%'
                    },
                    {
                        name: 'Lollipop',
                        calories: 392,
                        fat: 0.2,
                        carbs: 98,
                        protein: 0,
                        sodium: 38,
                        calcium: '0%',
                        iron: '2%'
                    },
                    {
                        name: 'Honeycomb',
                        calories: 408,
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        sodium: 562,
                        calcium: '0%',
                        iron: '45%'
                    },
                    {
                        name: 'Donut',
                        calories: 452,
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        sodium: 326,
                        calcium: '2%',
                        iron: '22%'
                    },
                    {
                        name: 'KitKat',
                        calories: 518,
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        sodium: 54,
                        calcium: '12%',
                        iron: '6%'
                    }
                ],
                columns: [
                    {
                        name: 'desc',
                        required: true,
                        label: 'Name',
                        align: 'left',
                        field: 'name',
                        sortable: true
                    },
                    { name: 'calories', label: 'ID Card', field: 'calories', sortable: true },
                    { name: 'fat', label: 'Gender', field: 'fat', sortable: true },
                    { name: 'carbs', label: 'Class', field: 'carbs' },
                    { name: 'protein', label: 'Address', field: 'protein' },
                    { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
                    { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
                    { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
                ],
                filter: '',
                visibleColumns: ['desc', 'fat', 'carbs', 'protein', 'sodium', 'calcium', 'iron'],
                separator: 'horizontal',
                selection: 'multiple',
                selected: [
                    // initial selection
                    { name: 'Ice cream sandwich' }
                ],
                pagination: {
                    page: 2
                },
                paginationControl: { rowsPerPage: 3, page: 1 },
                loading: false,
                dark: true,
                selectedSecond: [
                    { name: 'Eclair' }
                ]
            }
        },
        watch: {
            'paginationControl.page' (page) {
                this.$q.notify({
                    color: 'secondary',
                    message: `Navigated to page ${page}`,
                    actions: page < 4
                        ? [{
                            label: 'Go to last page',
                            handler: () => {
                                this.paginationControl.page = 4
                            }
                        }]
                        : null
                })
            }
        },
        computed: {
            tableClass () {
                if (this.dark) {
                    return 'bg-black'
                }
            }
        },
        methods: {
            deleteRow () {
                this.$q.notify({
                    color: 'secondary',
                    icon: 'delete',
                    message: `Will delete the selected row${this.selectedSecond.length > 1 ? 's' : ''} later, ok?`
                })
            }
        }
    }
</script>
<style>

</style>