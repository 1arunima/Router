<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = route.params.userId; // Fetch the dynamic userId parameter

// Simulated chat messages
const messagesData = {
  1: ["Hi there!", "How are you?", "Let's catch up!", "See you soon!"],
  2: ["Hello!", "What's up?", "Long time no see!", "Take care!"],
  3: ["Hey!", "How's work?", "Let's meet up!", "Goodbye!"],
  4: ["Yo!", "Are you free today?", "Let me know!", "Cheers!"],
};

const messages = ref([]);

onMounted(() => {
  messages.value = messagesData[userId] || ["No messages found"];
});
</script>

<template>
  <div id="chatbox">
    <h2>Chat with User {{ userId }}</h2>
    <div class="messages-container">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#chatbox {
  max-width: 400px;
  margin: 0 auto;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #f9f9f9;
}

.messages-container {
  margin-top: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
}

.message {
  margin-bottom: 8px;
  padding: 8px;
  background: #e6e6e6;
  border-radius: 6px;
  color: #333;
}
</style>
