
<template>
  <v-container fluid>
    <v-row>
      <v-col md="12">
        <v-container
          fluid
          style="
            background-color: #FFE7A5;
            border-radius: 20px;
            border: 1.5px solid black;
          "
        >
          <v-row justify-center align="center" class="pa-5">
            <v-col class="keep-in-touch" md="5" sm="6" cols="12">
              <h1 style="line-height: normal;">
                Keep in touch with {{ mainData.communityName }} for the latest
                announcements
              </h1>
              <p class="mb-3" id="stake-out">
                Stake out #{{ mainData.communityName }} for the latest updates
                and news.
              </p>

              <CommonSpeakerSocialButton
                :socialLinks="mainData.communityLinks"
              />
            </v-col>
            <v-col md="4" sm="1"></v-col>
            <v-col md="3" sm="5" cols="12">
              <v-row> <v-img class="gdg-logo" alt="logo" src="/assets/img/gdg.png"></v-img></v-row>
              
              <h1 class="Devfest">DevFest</h1>
              <h2 class="year">India'24</h2>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { mainData } = useJSONData();
</script>

<style>
.keep-in-touch h1 {
  color: rgba(25, 21, 74, 1);

}
#stake-out {
  color: rgba(25, 21, 74, 1);

}
.Devfest{


font-size: 64px;
font-weight: 900;
line-height: 76.8px;
text-align: left;

font-size: 64px;
font-weight: 900;
line-height: 76.8px;
text-align: left;
color: #19154A;



}
.year{
  font-family: 'PT Sans',sans-serif;
  
  
font-size: 62px;
font-weight: 900;
line-height: 74.4px;
letter-spacing: 0.03em;
text-align: left;

font-size: 62px;
font-weight: 900;
line-height: 36.4px;
letter-spacing: 0.03em;
text-align: left;
color: rgba(253, 214, 99, 1);


-webkit-text-stroke: 2px #19154A;
}
    

.gdg-logo{
  width: 125.23px;
height: 68.06px;
gap: 0px;
border-radius: 12px 0px 0px 0px;

margin-left: 74px;
margin-bottom: 35px;

}

</style>
