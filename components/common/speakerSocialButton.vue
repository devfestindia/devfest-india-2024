<template>
  <div class="mt-4">
    <!-- {{ socialLinks }} -->
    
   
    <v-btn
      class="mr-1 mb-1"
      v-if="socialLinks.github != null && socialLinks.github.length"
      icon="mdi-github"
      :color="dark ? 'white' : ''"
      :href="socialLinks.github"
      target="_blank"
      size="small"
      variant="text"
    ></v-btn>
    <v-btn
      class="mr-1 mb-1"
       icon=""
      :color="dark ? 'white' : ''"
      :href="socialLinks.twitter"
      target="_blank"
      size="small"
      v-if="socialLinks.twitter != null && socialLinks.twitter.length"
      variant="text"
      
    >
    <img src="/assets/img/prime_twitter.png" alt="">  
  </v-btn>
  <v-btn
      class="mr-1 mb-1"
      v-if="socialLinks.linkedin != null && socialLinks.linkedin.length"
      icon="mdi-linkedin"
      :href="socialLinks.linkedin"
      target="_blank"
      size="small"
      :color="dark ? 'white' : ''"
      variant="text"
    ></v-btn>
    <v-btn
      class="mr-1 mb-1"
      icon="mdi-instagram"
      :color="dark ? 'white' : ''"
      v-if="socialLinks.instagram != null && socialLinks.instagram.length"
      size="small"
      :href="socialLinks.instagram"
      target="_blank"
      variant="text"
    ></v-btn>
    <v-btn
      class="mr-1 mb-1"
      icon="mdi-web"
      :color="dark ? 'white' : ''"
      v-if="socialLinks.web != null && socialLinks.web.length"
      size="small"
      :href="socialLinks.web"
      target="_blank"
      variant="text"
    ></v-btn>
    <v-btn
      class="mr-1 mb-1"
      icon="mdi-youtube"
      :color="dark ? 'white' : ''"
      v-if="socialLinks.youtube != null && socialLinks.youtube.length"
      :href="socialLinks.youtube"
      target="_blank"
      size="small"
      variant="text"
    ></v-btn>
  </div>
</template>

<script setup>
const props = defineProps({
  socialLinks: {
    type: Object,
    default: {},
  },
  dark: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.v-btn{
  width: 50px;
    height: 50px;
    gap: 0px;
    border: 2px 0px 0px 0px;
    opacity: 0px;
    border: 2px solid rgba(25, 21, 74, 1);
    box-shadow: 2px 2px 0px 0px rgba(25, 21, 74, 1);
    margin:16px;
    background: rgba(253, 214, 99, 1);
}
.v-btn img {
      width: 80%;
      height: 100%;
      object-fit: cover; 
     
    }
    .v-btn .v-icon{
      font-size: calc(var(--v-icon-size-multiplier) * 1.9em);
    }
</style>