<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">
                    Item
                </th>
                <th class="text-left">
                    Désignation du matériel
                </th>
                <th class="text-left">
                    Fréquence ou condition de remplacement
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
export default {
    data() {
        return {
            desserts: [
                {
                    id:1,
                    name: 'Goupille jaune',
                    calories: "En cas d'anomalie",
                },
                {
                    id:2,
                    name: 'Joint robinetterie extincteurs à eau pulverisée',
                    calories: "Systématique",
                },
                {
                    id: 3,
                    name: "Ensemble tête de l'extincteur",
                    calories: "En cas d'anomalie",
                },
                {
                    id:4,
                    name: 'Cartouche gaz CO2',
                    calories: "Tous les 10 ans marquage II ou en cas d'anomalie",
                },
                {
                    id:5,
                    name: 'Poudre ABC ou BC',
                    calories: "Tous les 5 ans ou en cas d'anomalie",
                },
                {
                    id:6,
                    name: 'Percuteur',
                    calories: "En cas d'anomalie",
                },
                {
                    id:7,
                    name: 'Joint torique sur raccord vissé du flexible',
                    calories: "Systématique",
                },
                {
                    id:8,
                    name: 'Opercule alu pour extincteur à poudre',
                    calories: "Systématique",
                },
                {
                    id:9,
                    name: 'Flexible et lance',
                    calories: "En cas d'anomalie",
                },
                {
                    id:10,
                    name: 'Ecrous',
                    calories: "En cas d'anomalie",
                },
                {
                    id:11,
                    name: 'Extincteurs',
                    calories: "Tous les 20 ans ou en cas d'anomalie",
                },
                {
                    id:12,
                    name: 'Adhésif',
                    calories: "En cas d'anomalie",
                },
                {
                    id:13,
                    name: 'Socle',
                    calories: "En cas d'anomalie",
                },
            ],
        }
    },
}
</script>