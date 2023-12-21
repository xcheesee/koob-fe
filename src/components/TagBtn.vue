<script setup>
defineProps([
    'title'
])
</script>
<template>
    <div class="flex bg-slate-200 rounded-xl px-3 py-[2px] gap-2 text-center place-content-center place-items-center">
        <p class="text-center align-text-top h-full w-full flex place-content-center place-items-center">{{ title }}</p>
        <slot />
    </div>

</template>