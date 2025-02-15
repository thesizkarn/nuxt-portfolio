<template>
   <form class="contact-form" @submit.prevent="submitForm">
      <div>
         <label for="name">Nom :</label>
         <input id="name" v-model="form.name" type="text" required />
      </div>

      <div>
         <label for="email">Email :</label>
         <input id="email" v-model="form.email" type="email" required />
      </div>

      <div>
         <label for="message">Message :</label>
         <textarea id="message" v-model="form.message" required></textarea>
      </div>

      <button type="submit" :disabled="loading">
         {{ loading ? "Envoi en cours..." : "Envoyer" }}
      </button>

      <p v-if="success">Message envoyé avec succès !</p>
      <p v-if="error">{{ error }}</p>
   </form>
</template>

<script setup>
const mail = useMail();

const form = ref({
   name: "",
   email: "",
   message: "",
});

const loading = ref(false);
const success = ref(false);
const error = ref(null);

const submitForm = async () => {
   loading.value = true;
   success.value = false;
   error.value = null;

   try {
      await mail.send({
         from: "contact@allainweb.fr", // Utiliser votre adresse Hostinger
         replyTo: form.value.email, // Permet au destinataire de répondre à l'expéditeur réel
         subject: `Nouveau message de ${form.value.name}`,
         text: `Nom: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`,
      });

      success.value = true;
      form.value = { name: "", email: "", message: "" }; // Réinitialiser le formulaire
   } catch (err) {
      error.value = "Erreur lors de l'envoi du message.";
      console.error(err);
   } finally {
      loading.value = false;
   }
};
</script>
