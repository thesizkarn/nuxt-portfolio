<template>
   <section id="contact" class="relative py-12 md:py-24">
      <UContainer>
         <div class="flex flex-col gap-12">
            <div class="flex flex-col justify-center gap-4 md:items-center">
               <span class="text-(--ui-primary) uppercase">
                  Contacter développeur web Freelance
               </span>
               <h2 class="text-xl font-semibold md:text-3xl lg:text-5xl">
                  Prenez contact, devis gratuit !
               </h2>
            </div>
            <div
               class="flex w-full flex-col items-start gap-8 md:flex-row md:gap-12"
            >
               <div class="w-full flex-1">
                  <h3 class="mb-8 text-(--ui-primary) uppercase">
                     Dites-moi tout
                  </h3>
                  <UForm
                     ref="form"
                     class="space-y-8"
                     :schema="schema"
                     :state="formState"
                     @submit="onSubmit"
                  >
                     <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <UFormField label="Prénom" name="firstName" required>
                           <UInput
                              v-model="formState.firstName"
                              placeholder="Votre prénom"
                              :ui="{ root: 'w-full' }"
                           />
                        </UFormField>

                        <UFormField label="Nom" name="lastName" required>
                           <UInput
                              v-model="formState.lastName"
                              placeholder="Votre nom"
                              :ui="{ root: 'w-full' }"
                           />
                        </UFormField>
                     </div>

                     <UFormField label="Entreprise (optionnel)" name="company">
                        <UInput
                           v-model="formState.company"
                           placeholder="Votre entreprise"
                           :ui="{ root: 'w-full' }"
                        />
                     </UFormField>

                     <UFormField label="Email" name="email" required>
                        <UInput
                           v-model="formState.email"
                           type="email"
                           placeholder="Votre email"
                           :ui="{ root: 'w-full' }"
                        />
                     </UFormField>

                     <UFormField label="Téléphone" name="tel" required>
                        <UInput
                           v-model="formState.tel"
                           type="tel"
                           placeholder="Votre numéro de téléphone"
                           :ui="{ root: 'w-full' }"
                        />
                     </UFormField>

                     <UFormField label="Message" name="message" required>
                        <UTextarea
                           v-model="formState.message"
                           placeholder="Votre message"
                           :ui="{ root: 'w-full' }"
                        />
                     </UFormField>

                     <UButton type="submit" :loading="loading">Envoyer</UButton>
                  </UForm>
               </div>
               <div class="flex min-w-0 flex-1 flex-col items-start gap-6">
                  <span class="text-(--ui-primary) uppercase"
                     >Informations</span
                  >
                  <h3 class="text-md font-semibold lg:text-lg">
                     Vous pouvez me contacter avec le formulaire ci-présent ou
                     avec les informations suivantes :
                  </h3>
                  <address>7 Résidence de Bellevue<br />41110 Seigy</address>
                  <p>
                     <a
                        href="mailto:contact@allainweb.fr"
                        class="hover:text-(--ui-primary) hover:underline"
                     >
                        contact@allainweb.fr
                     </a>
                  </p>
                  <p>
                     <a
                        href="tel:+33650425221"
                        class="hover:text-(--ui-primary) hover:underline"
                     >
                        +33 6 50 42 52 21
                     </a>
                  </p>
               </div>
            </div>
         </div>
      </UContainer>
   </section>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const mail = useMail();
const toast = useToast();

const formState = reactive({
   firstName: "",
   lastName: "",
   company: "",
   email: "",
   tel: "",
   message: "",
});

const schema = z.object({
   firstName: z
      .string()
      .min(2, "Le prénom doit contenir au moins 2 caractères"),
   lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
   company: z.string().optional(),
   email: z.string().email("Email invalide").nonempty("L'email est requis"),
   tel: z.string().regex(/^\+?[0-9\s-]+$/, "Numéro de téléphone invalide"),
   message: z
      .string()
      .min(10, "Le message doit contenir au moins 10 caractères"),
});

type Schema = z.infer<typeof schema>;

const form = ref();

const loading = ref(false);

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
   loading.value = true;

   try {
      await mail.send({
         from: "contact@allainweb.fr",
         replyTo: event.data.email,
         subject: `Nouveau message de ${event.data.firstName} ${event.data.lastName}`,
         text: `Nom: ${event.data.firstName} ${event.data.lastName}
Email: ${event.data.email}
Entreprise: ${event.data.company || "Non précisé"}
Téléphone: ${event.data.tel || "Non précisé"}

Message:
${event.data.message}`,
      });

      toast.add({
         title: "Succès",
         description: "Votre message a été envoyé avec succès.",
         color: "primary",
         duration: 5000,
      });

      Object.assign(formState, {
         firstName: "",
         lastName: "",
         company: "",
         email: "",
         tel: "",
         message: "",
      });
   } catch (err) {
      console.error(err);

      toast.add({
         title: "Erreur",
         description: "Une erreur est survenue lors de l'envoi du message.",
         color: "error",
         duration: 5000,
      });
   } finally {
      loading.value = false;
   }
};
</script>
