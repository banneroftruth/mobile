<template>
  <div class="shadow-md min-h-screen pb-20">
    <header class="text-center p-4 pt-6 shadow border-b">
        <img
            id="logo"
            src="./assets/images/BOT_logo_text.png"
             alt="The Banner of Truth" />
    </header>

    <router-view class="p-4 pb-20" />

    <nav class="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around p-2">
      <router-link to="/" class="text-sm font-medium">Home</router-link>
      <router-link to="/library" class="text-sm font-medium">Library</router-link>
      <router-link to="/audio" class="text-sm font-medium">Audio</router-link>
    </nav>
  </div>
</template>
