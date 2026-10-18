import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
  kind: process.env.NODE_ENV === 'development' ? 'local' : 'github',
  repo: 'dtpmas1/laser-quest-tarbes'
},
  ui: {
    brand: {
      name: 'Laser Quest Tarbes',
    },
  },
  singletons: {
    homepage: singleton({
      label: 'Fond d\'écran (Accueil)',
      path: 'src/data/homepage',
      format: { data: 'json' },
      schema: {
        backgroundType: fields.select({
          label: 'Type de fond',
          description: 'Choisissez ce qui s\'affiche en arrière-plan sur la page d\'accueil',
          options: [
            { label: 'Classique (Noir & Néon Rouge)', value: 'default' },
            { label: 'Image (ex: Affiche événement)', value: 'image' },
            { label: 'Vidéo (ex: Trailer animé)', value: 'video' },
          ],
          defaultValue: 'default',
        }),
        backgroundImage: fields.image({
          label: 'Image de fond',
          directory: 'public/uploads',
          publicPath: '/uploads/',
        }),
        backgroundVideo: fields.text({
          label: 'URL de la vidéo',
          description: 'Exemple : /uploads/halloween.mp4 (placez votre vidéo dans le dossier public/uploads/)',
        }),
      },
    }),
  },
  collections: {
    offres: collection({
      label: 'Formules & Offres',
      slugField: 'title',
      path: 'src/content/offres/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Titre de la formule' } }),
        seoTitle: fields.text({ label: 'Titre SEO (pour Google)' }),
        description: fields.text({ label: 'Description courte', multiline: true }),
        price: fields.number({ label: 'Prix' }),
        unit: fields.text({ label: 'Unité (ex: par joueur, par enfant)' }),
        minPlayers: fields.number({ label: 'Joueurs minimum' }),
        duration: fields.text({ label: 'Durée (ex: 20 min, 2h00)' }),
        guidapActivityId: fields.text({ label: 'ID Activité Guidap (très important pour la résa)' }),
        badge: fields.text({ label: 'Texte du Badge (ex: Dès 8 ans)' }),
        order: fields.number({ label: "Ordre d'affichage (1 = premier)" }),
        content: fields.markdoc({
          label: 'Contenu détaillé de la page',
          extension: 'md',
        }),
      },
    }),
  },
});
