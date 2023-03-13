const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello this is Vue!',
        image: "https://static.vecteezy.com/packs/media/photos/term-bg-3-f6a12264.jpg"
      }
    }
  }).mount('#app')