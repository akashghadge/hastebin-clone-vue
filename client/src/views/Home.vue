<template>
  <div class="home">
    <CreatePlayer />
  </div>
</template>

<script>
// @ is an alias to /src
import CreatePlayer from "@/views/CreatePlayer";
export default {
  name: "Home",
  components: {
    CreatePlayer,
  },
};
</script>
