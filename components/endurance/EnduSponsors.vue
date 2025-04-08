<script lang="ts" setup>
import LinkPreview from "~/components/inspira/LinkPreview.vue"

interface Sponsor {
   image: string,
   url: string,
   white?: boolean,
}

interface Props {
   sponsors: Sponsor[]
}

defineProps<Props>()
</script>

<template>
   <div>
      <div class="flex flex-wrap gap-8 justify-center items-center">
         <LinkPreview
            v-for="(firm, index) in sponsors"
            :key="index"
            :height="200"
            :url="firm.url"
            :width="400"
         >
            <img
               :class="{ 'bg-white': !!firm?.white }"
               :src="firm.image"
               alt="firm image"
               class="p-1"
               height="100"
               width="100"
            />
         </LinkPreview>
      </div>
   </div>
</template>

<style scoped></style>
