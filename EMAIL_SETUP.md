# 📧 Configuration du Formulaire de Contact

## Guide de Configuration EmailJS

Le formulaire de contact utilise **EmailJS** pour envoyer les messages directement à votre email. Voici comment le configurer :

### Étape 1 : Créer un compte EmailJS

1. Allez sur [emailjs.com](https://www.emailjs.com/)
2. Cliquez sur **"Sign Up"** et créez un compte gratuit
3. Vérifiez votre email

### Étape 2 : Créer un Service

1. Dans le dashboard EmailJS, allez à **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Sélectionnez votre fournisseur email (Gmail, Outlook, etc.)
4. Configurez les paramètres (l'ID du service sera généré)
   - **Service ID** : `service_portfolio`
5. Connectez votre email

### Étape 3 : Créer un Template

1. Allez à **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez avec le **Template ID** : `template_contact`
4. Utilisez ce template HTML :

```html
<h2>Nouveau message de {{from_name}}</h2>

<p><strong>Email de réponse :</strong> {{from_email}}</p>

<hr />

<h3>Message :</h3>
<p>{{message}}</p>

<hr />

<p>
  Répondre à : <a href="mailto:{{from_email}}">{{from_email}}</a>
</p>
```

### Étape 4 : Obtenir Votre Clé Publique

1. Allez à **"Account"** → **"API Keys"**
2. Copiez votre **Public Key**
3. Ouvrez le fichier `src/composants/ContactForm.tsx`
4. Remplacez `YOUR_PUBLIC_KEY` par votre clé :

```tsx
const PUBLIC_KEY = 'votre_clé_publique_ici';
```

### Étape 5 : Configurer la Destination

Dans `ContactForm.tsx`, vérifiez que l'email de destination est le vôtre :

```tsx
to_email: 'hionontsoa1707@gmail.com', // Remplacer par votre email
```

### Étape 6 : Tester

1. Redémarrez le serveur : `npm run dev`
2. Allez à http://localhost:5175/
3. Remplissez le formulaire de contact
4. Cliquez sur "Envoyer le message"
5. Vous devriez recevoir l'email !

---

## ⚙️ Configuration Alternative (Formspree)

Si vous préférez une solution plus simple sans EmailJS :

1. Allez sur [formspree.io](https://formspree.io/)
2. Créez un formulaire avec votre email
3. Vous recevrez une URL de formulaire comme : `https://formspree.io/f/XXXXX`
4. Remplacez l'URL dans `ContactForm.tsx` ligne 38

---

## 🔒 Sécurité

- ⚠️ **Ne pas commit** votre clé publique si c'est confidentiel
- La clé publique d'EmailJS est généralement sans danger car elle est pour les formulaires publics
- EmailJS gère la sécurité automatiquement

---

## 📝 Dépannage

### Le message ne s'envoie pas ?
1. Vérifiez que vous avez remplacé `YOUR_PUBLIC_KEY`
2. Vérifiez les IDs de service et template
3. Ouvrez la console navigateur (F12) pour les erreurs
4. Vérifiez que le service EmailJS est activé

### Revenez à mailto (fallback)
Si vous voulez revenir au style mailto simple, éditez `ContactForm.tsx` et utilisez :

```tsx
window.location.href = `mailto:hionontsoa1707@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
```

---

## ✨ Fonctionnalités du Formulaire

- ✅ Validation des champs
- ✅ Animations fluides
- ✅ Messages d'erreur/succès
- ✅ Support du mode sombre
- ✅ Responsive design
- ✅ Envoi automatique sans reload

---

Besoin d'aide ? Consultez la [documentation EmailJS](https://www.emailjs.com/docs/) official.
