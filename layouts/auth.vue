<template>
  <v-app id="inspire">
    <v-main>
      <v-row class="h-full">
        <v-col cols="6">
          <div class="flex flex-col justify-center items-center h-full bg-[#fefefa]">
              <img
                src="./../assets/images/logo2.png"
                width="400"
                alt="logo"
                class="mb-2"
              />

              <div class="subtitle text-gray-400 text-lg text-center px-16 leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eveniet facilis, ipsum repellendus dignissimos ratione?</div>
          </div>
        </v-col>

        <v-col cols="6" class="h-full">
          <div class="flex flex-col justify-center items-center h-full bg-white px-24">
            <div class="text-5xl font-semibold text-primary">Login</div>

            <div class="mt-8 w-full">
              <div>
                <div class="text-base font-semibold">Email</div>

                <v-text-field placeholder="admin@gmail.com"></v-text-field>
              </div>

              <div class="mt-2">
                <div class="text-base font-semibold">Password</div>

                <v-text-field placeholder="********"></v-text-field>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <div
        class="flex items-center justify-center w-full h-full bg-[#fcfcfc]"
      ></div>
    </v-main>
  </v-app>
</template>

<script setup></script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Marck+Script&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playwrite+NO:wght@100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Marck+Script&family=Playwrite+NO:wght@100..400&display=swap');
.subtitle {
    /* font-family: "Marck Script", cursive */
    font-family: "Laboster", cursive;
}
</style>
