<template>
    <v-table>
        <thead>
            <tr>
                <th class="text-left">
                    Extincteurs
                </th>
                <th class="text-left">
                    Nombre
                </th>
                <th class="text-left">
                    Emplacement
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
                    id:"Extincteur à eau 45 litres",
                    name: 3,
                    calories: "Restaurant",
                },
                {
                    id:"Extincteur à eau 45 litres",
                    name: 4,
                    calories: "Salle de réunion",
                },
                {
                    id:"Extincteur à CO2 grande capacité",
                    name: 5,
                    calories: "Salle des serveurs",
                }
                
            ],
        }
    },
}
</script>