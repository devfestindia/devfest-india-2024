<template>
  <v-container fluid>
    <v-row>
      <v-col md="12">
        <h1 class="google-font">DevFests in India</h1>
        <p class="my-0 mb-8 h1-subheading google-font">
          Communities from each chapter, all over the India have gathered
          together to make India DevFest a success. Locate your nearest google
          developer group and join the event right here!
        </p>
      </v-col>
    </v-row>

    <!-- Upcoming DevFest -->
    <v-row align="start" justify="start">
      <v-col
        md="3"
        sm="4"
        v-for="(item, index) in upcomingDevFests"
        :key="index"
      >
        <devFestInfoDialogeVue :item="item" />
      </v-col>
    </v-row>
    <!-- Upcoming DevFest -->

    <!-- Past DevFests -->
    <p v-if="passedDevFests?.length > 0" class="mt-10 mb-1">Past DevFests</p>
    <v-row align="start" justify="start">
      <v-col md="3" sm="4" v-for="(item, index) in passedDevFests" :key="index">
        <devFestInfoDialogeVue :item="item" />
      </v-col>
    </v-row>
    <!-- Past DevFests -->
  </v-container>
</template>

<script setup>
import devFestInfoDialogeVue from "@/components/common/devFestInfoDialoge.vue";

let upcomingDevFests = ref([]);
let passedDevFests = ref([]);

const currentDate = new Date();

definePageMeta({
  layout: "default",
});

const { data, error } = await useAsyncData("getApiData", async () => {
  const response = await $fetch(
    "https://raw.githubusercontent.com/devfestindia/devfest-india-data-2024/refs/heads/main/data/events.json"
  );
  return response;
});

// Filter upcoming and passed events once the data is available
if (data.value) {
  upcomingDevFests.value = JSON.parse(data.value).filter((event) => {
    const eventStartDate = new Date(event.StartingDate);
    return eventStartDate >= currentDate;
  });

  passedDevFests.value = JSON.parse(data.value).filter((event) => {
    const eventStartDate = new Date(event.StartingDate);
    return eventStartDate < currentDate;
  });
}

useSeoMeta({
  contentType: "text/html; charset=utf-8",
  title: "Events | Google Developers Group India",
  description:
    "Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",
  ogLocale: "en_US",
  keywords: "GDG, DevFest, Google, DevFest",
  author: "OSS Labs",
  creator: "OSS Labs",
  viewport: "width=device-width, initial-scale=1.0",
  ogTitle: "Events | Google Developers Group India",
  ogDescription:
    "Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",
  ogImage: `https://devfest.gdgindia.dev/thumbnail.jpg`,
  ogUrl: "https://devfest.gdgindia.dev/",
  ogType: "website",
  twitterTitle: "Events | Google Developers Group India",
  twitterDescription:
    "Dive deep into the latest trends and innovations through talks, workshops, and more. It's a day filled with learning, networking, and inspiring ideas",
  twitterImage: `https://devfest.gdgindia.dev/thumbnail.jpg.png?auto=format&fit=crop&frame=1&h=512&w=1024`,
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
/* Add your styles here */
</style>