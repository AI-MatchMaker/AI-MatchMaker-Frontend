<template>
  <div class="flex min-h-screen flex-col justify-between">
    <header
      class="fixed w-full px-4 sm:px-10 lg:px-20 h-20 bg-theme-blue cursor-pointer flex justify-between items-center z-50">
      <router-link to="/" class="text-white font-lora text-xl sm:text-2xl lg:text-3xl">
        AI MatchMaker
      </router-link>
      <div class="hidden sm:flex">
        <router-link to="/" class="mr-4 text-lg text-gray-400 hover:text-white"
          active-class="text-white">Home</router-link>
        <router-link to="/contact" class="text-lg text-gray-400 hover:text-white"
          active-class="text-white">Contact</router-link>
      </div>
      <!-- Mobile Menu Icon -->
      <div @click="toggleMenu" class="sm:hidden">
        <NIcon color="#fff" size="28">
          <Menu></Menu>
        </NIcon>
      </div>
      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div v-if="isMenuOpen" class="flex-col flex items-center absolute top-20 left-0 w-full bg-theme-blue z-50 sm:hidden">
          <router-link v-for="item in navs" :to="item.location"
            class="text-white text-lg py-2 w-full hover:bg-theme-blue-2 text-center cursor-pointer"
            @click="isMenuOpen = false"
            >
            {{ item.label }}
          </router-link>
        </div>
      </transition>
    </header>
    <router-view class="flex-1 pt-20" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <footer class="w-full px-20 py-10 bg-theme-blue">
      <div>
        <p class="text-white font-lora text-xl text-center">© 2024 AI MatchMaker. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Menu } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'

import { ref } from 'vue';
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

const navs = [{
  label: 'Home',
  location: '/',
},
{
  label: 'Contact',
  location: '/contact'
}
]
</script>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-10%);
  opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>