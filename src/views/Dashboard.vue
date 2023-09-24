<template>
    <v-container>
        <div>
            <v-breadcrumbs> <v-icon size="small" color="blue-darken-2">mdi-home</v-icon> Tableau de bord</v-breadcrumbs>
        </div>
        <div>
            <v-row class="mb-6" no-gutters>
                <v-col>
                    <v-sheet class="pa-2 ma-2" :elevation="2" rounded>
                        <h2>Ressources</h2>
                        <v-divider class="mb-4"></v-divider>
                        <p>Affections : 3054</p>
                        <p>Parcs : 300</p>
                    </v-sheet>
                </v-col>

                <v-col>
                    <v-sheet class="pa-2 ma-2" :elevation="2" rounded>
                        <h2>Interventions</h2>
                        <v-divider class="mb-4"></v-divider>
                        <p>Clôturées : 1200</p>
                        <p>En cours : 650</p>
                    </v-sheet>
                </v-col>

                <v-col>
                    <v-sheet class="pa-2 ma-2" :elevation="2" rounded>
                        <h2>Alerte</h2>
                        <v-divider class="mb-4"></v-divider>
                        <p>En retard : 0</p>
                        <p>En attente : 200</p>
                    </v-sheet>
                </v-col>

                <v-col>
                    <v-sheet class="pa-2 ma-2" :elevation="2" rounded>
                        <h2>Mon compte</h2>
                        <v-divider class="mb-4"></v-divider>
                        <p>Mes informations</p>
                        <p>Changer mon mot de passe</p>
                    </v-sheet>
                </v-col>
            </v-row>
        </div>
        <div>
            <v-breadcrumbs> <v-icon size="small" color="blue-darken-2">mdi-home</v-icon> Interventions</v-breadcrumbs>
        </div>
        <div>

        </div>
        <v-card>
            <v-data-table :headers="headers" :items="desserts" :sort-by="[{ key: 'calories', order: 'asc' }]"
                class="elevation-1">
                <template v-slot:top>
                    <v-toolbar flat>
                        <v-toolbar-title>Liste des interventions</v-toolbar-title>
                        <v-divider class="mx-4" inset vertical></v-divider>
                        <v-spacer></v-spacer>
                        <v-dialog v-model="dialog" max-width="500px">
                            <template v-slot:activator="{ props }">
                                <v-btn color="primary" dark class="mb-2" v-bind="props">
                                    Planifier
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <span class="text-h5">{{ formTitle }}</span>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col><v-text-field v-model="editedItem.name"
                                                    label="Parc"></v-text-field></v-col>
                                            <v-col><v-text-field v-model="editedItem.location"
                                                    label="Location"></v-text-field></v-col>

                                        </v-row>

                                        <v-row>
                                            <v-col><v-text-field v-model="editedItem.extenteurs"
                                                    label="Extincteur"></v-text-field></v-col>
                                            <v-col><v-text-field v-model="editedItem.interventions"
                                                    label="Intervention"></v-text-field></v-col>

                                        </v-row>

                                        <v-row>
                                            <v-col><v-text-field type="date" v-model="editedItem.date_creation"
                                                    label="Début"></v-text-field></v-col>
                                            <v-col><v-text-field type="date" v-model="editedItem.date_fin"
                                                    label="Fin"></v-text-field></v-col>

                                        </v-row>

                                        <v-row>
                                            <v-col><v-text-field label="Responsable"></v-text-field></v-col>
                                            <v-col><v-text-field v-model="editedItem.statut"
                                                    label="Statut"></v-text-field></v-col>

                                        </v-row>
                                    </v-container>
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="text" @click="close">
                                        Cancel
                                    </v-btn>
                                    <v-btn color="blue-darken-1" variant="text" @click="save">
                                        Save
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                        <v-dialog v-model="dialogDelete" max-width="500px">
                            <v-card>
                                <v-card-title class="text-h5">Rapport d'intervention</v-card-title>
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col><v-text-field v-model="editedItem.name"
                                                    label="Parc"></v-text-field></v-col>
                                            <v-col><v-text-field v-model="editedItem.extenteurs"
                                                    label="Extincteur"></v-text-field></v-col>

                                        </v-row>
                                        <v-row>
                                            <v-col><v-text-field type="date" v-model="editedItem.date_creation"
                                                    label="Début"></v-text-field></v-col>
                                            <v-col><v-text-field type="date" v-model="editedItem.date_fin"
                                                    label="Fin"></v-text-field></v-col>

                                        </v-row>
                                        <v-row>
                                            <v-file-input clearable label="Joindre un document"></v-file-input>
                                        </v-row>
                                        <v-row>

                                            <v-textarea label="Note"></v-textarea>

                                        </v-row>

                                    </v-container>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Annuler</v-btn>
                                    <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">Clôturer</v-btn>
                                    <v-spacer></v-spacer>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                        mdi-pencil
                    </v-icon>
                    <v-icon size="small" @click="deleteItem(item.raw)">
                        mdi-file-clock
                    </v-icon>
                </template>
                <template v-slot:no-data>
                    <v-btn color="primary" @click="initialize">
                        Reset
                    </v-btn>
                </template>
            </v-data-table>

        </v-card>
    </v-container>
</template>
<script>
export default {
    data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
            {
                title: 'Parc',
                align: 'start',
                sortable: false,
                key: 'name',
            },
            { title: 'Locations', key: 'location' },
            { title: 'Extincteur', key: 'extenteurs' },
            { title: 'Intervention', key: 'interventions' },
            { title: 'Date début', key: 'date_creation' },
            { title: 'Date fin', key: 'date_fin' },
            { title: 'Statut', key: 'statut' },
            { title: 'Actions', key: 'actions', sortable: false },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            name: '',
            location: '',
            extenteurs: '',
            interventions: '',
            date_creation: '',
            date_fin: '',
            statut: '',
        },
        defaultItem: {
            name: '',
            location: '',
            extenteurs: '',
            interventions: '',
            date_creation: '',
            date_fin: '',
            statut: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
        dialogDelete(val) {
            val || this.closeDelete()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.desserts = [
                {
                    name: 'IMC',
                    location: 'Restaurant',
                    extenteurs: 'EXTIMC002',
                    interventions: 'Installation',
                    date_creation: '22-09-2023',
                    date_fin: '02-10-2023',
                    statut: 'En attente',
                },
                {
                    name: 'Total Energie',
                    location: 'Salle des serveurs',
                    extenteurs: 'EXTTE001',
                    interventions: 'Nettoyage',
                    date_creation: '22-09-2023',
                    date_fin: '02-10-2023',
                    statut: 'En cours (20 %)',
                },
                {
                    name: 'SCG',
                    location: 'Restaurant',
                    extenteurs: 'EXTSCG044',
                    interventions: 'Installation',
                    date_creation: '22-09-2023',
                    date_fin: '02-10-2023',
                    statut: 'En attente',
                },
                {
                    name: 'SCG',
                    location: 'Restaurant',
                    extenteurs: 'EXTSCG044',
                    interventions: 'Installation',
                    date_creation: '22-09-2023',
                    date_fin: '02-10-2023',
                    statut: 'En attente',
                },
                {
                    name: 'Total Energie',
                    location: 'Salle des serveurs',
                    extenteurs: 'EXTTE001',
                    interventions: 'Nettoyage',
                    date_creation: '22-09-2023',
                    date_fin: '02-10-2023',
                    statut: 'En cours (20 %)',
                },
                {
                    name: 'Total Energie',
                    location: 'Salle des serveurs',
                    extenteurs: 'EXTTE001',
                    interventions: 'Nettoyage',
                    date_creation: '22-09-2023',
                    date_fin: '02-10-2023',
                    statut: 'En cours (20 %)',
                },
                {
                    name: 'IMC',
                    location: 'Restaurant',
                    extenteurs: 'EXTIMC002',
                    interventions: 'Installation',
                    date_creation: '22-09-2023',
                    date_fin: '02-10-2023',
                    statut: 'En attente',
                },
                {
                    name: 'IMC',
                    location: 'Restaurant',
                    extenteurs: 'EXTIMC002',
                    interventions: 'Installation',
                    date_creation: '22-09-2023',
                    date_fin: '02-10-2023',
                    statut: 'En attente',
                },
                {
                    name: 'IMC',
                    location: 'Restaurant',
                    extenteurs: 'EXTIMC002',
                    interventions: 'Installation',
                    date_creation: '22-09-2023',
                    date_fin: '02-10-2023',
                    statut: 'En attente',
                },
                {
                    name: 'IMC',
                    location: 'Restaurant',
                    extenteurs: 'EXTIMC002',
                    interventions: 'Installation',
                    date_creation: '22-09-2023',
                    date_fin: '02-10-2023',
                    statut: 'En attente',
                },
            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialogDelete = true
        },

        deleteItemConfirm() {
            this.desserts.splice(this.editedIndex, 1)
            this.closeDelete()
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        closeDelete() {
            this.dialogDelete = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>