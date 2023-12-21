<script setup>
defineProps([
  'user',
  'date',
  'post'
])
import IconLike from '~icons/lucide/thumbs-up'
import IconDislike from '~icons/lucide/thumbs-down'
import IconComment from '~icons/lucide/message-square'
import IconMore from '~icons/lucide/more-horizontal'
</script>
<template>
  <div class="grid grid-rows-[min-content_min-content_1fr_min-content] my-2 bg-white">
    <div class="grid grid-cols-[min-content_1fr] p-4">
      <div class="w-16 h-16 rounded-full overflow-hidden"><img src="../../neimapfp.jpg" alt="" class="w-full h-full object-cover"></div>
      <div class="px-4">
        <div class="text-lg font-bold">{{ user }}</div>
        <div class="text-sm text-slate-600">{{ date }}</div>
      </div>
    </div>
    <div class="">
      <p class="col-span-full px-4 py-2">{{ post }}</p>
      <div><img src="../../neima.jpg" alt=""></div>
      <div class="flex gap-4 justify-end p-2 border-t mt-2">
        <IconLike />
        <IconDislike />
        <IconComment />
        <IconMore />
      </div>
    </div>
  </div>
</template>