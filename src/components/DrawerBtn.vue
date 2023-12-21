<script setup>
defineProps([
    'title'
])
</script>
<template>
    <div class="flex justify-center gap-4 text-center content-center items-center">
        <slot />
        <div class="align-middle font-bold">{{ title }}</div>
    </div>
</template>