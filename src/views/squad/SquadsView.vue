<template>
    <v-container>
        <suspense>
        <template #default>
            <SquadMembers/>
        </template >
        <template #fallback>
            <div>Loading...</div>
        </template>
        </suspense>
    </v-container>
</template>

<script setup>
import SquadMembers from '@/components/SquadMembers.vue'
</script>
