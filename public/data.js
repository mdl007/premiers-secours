// Contenu inspiré des recommandations PSC1 (France) et de l'ERC (European Resuscitation Council).
// Vérifiez et adaptez ce contenu avec un formateur certifié avant toute publication.
window.GESTES = [
  {
    id: "alerter", emoji: "📞", titre: "Protéger, Alerter, Secourir",
    resume: "Les 3 réflexes avant tout geste",
    intro: "Avant d'agir, assurez-vous que vous et la victime êtes en sécurité, puis alertez les secours.",
    alerte: "",
    etapes: [
      "PROTÉGER : supprimez ou balisez le danger (circulation, feu, électricité…). Ne vous mettez jamais en danger.",
      "EXAMINER : la victime répond-elle ? Respire-t-elle ? Saigne-t-elle abondamment ?",
      "ALERTER : appelez le 15 (SAMU), le 18 (pompiers) ou le 112. Sourds/malentendants : 114 par SMS.",
      "Donnez : votre numéro, l'adresse exacte, la nature du problème, le nombre de victimes, leur état et les gestes déjà faits.",
      "Ne raccrochez jamais en premier : attendez que l'opérateur vous le dise.",
      "SECOURIR : faites les gestes adaptés en attendant les secours."
    ],
    interdits: []
  },
  {
    id: "rcp", emoji: "❤️", titre: "Arrêt cardiaque (massage cardiaque)",
    resume: "Ne répond pas et ne respire pas (ou respire anormalement)",
    intro: "Chaque minute sans massage réduit les chances de survie d'environ 10 %. Agissez immédiatement.",
    alerte: "Appelez le 15 / 112 et demandez un défibrillateur (DAE) dès que possible.",
    etapes: [
      "Vérifiez la conscience : parlez fort, secouez doucement les épaules.",
      "Basculez la tête en arrière, levez le menton et regardez/écoutez la respiration pendant 10 secondes maximum.",
      "Si pas de respiration normale : faites alerter (ou alertez vous-même en haut-parleur) et faites chercher un DAE.",
      "Placez la victime sur le dos, sur un sol dur. Mettez le talon d'une main au centre de la poitrine, l'autre main par-dessus.",
      "Bras tendus, comprimez de 5 à 6 cm, à un rythme de 100 à 120 par minute. Laissez la poitrine remonter entre chaque compression.",
      "Si vous êtes formé : 30 compressions puis 2 insufflations. Sinon : compressions en continu.",
      "Dès que le DAE arrive : allumez-le et suivez ses instructions vocales. Continuez jusqu'à l'arrivée des secours."
    ],
    interdits: ["Ne pas interrompre le massage plus de 10 secondes", "Ne pas avoir peur d'utiliser le DAE : il ne choque que si nécessaire"],
    metronome: true
  },
  {
    id: "pls", emoji: "🛌", titre: "Position Latérale de Sécurité (PLS)",
    resume: "Inconsciente mais respire normalement",
    intro: "La PLS évite que la victime s'étouffe avec sa langue ou ses vomissements.",
    alerte: "Alertez les secours puis surveillez la respiration en permanence.",
    etapes: [
      "Retirez les lunettes de la victime. Placez le bras le plus proche de vous à angle droit, paume vers le haut.",
      "Saisissez l'autre bras et placez le dos de sa main contre son oreille, côté vous. Maintenez-la.",
      "Avec l'autre main, relevez le genou le plus éloigné, pied au sol.",
      "Tirez sur le genou pour faire rouler la victime vers vous, d'un seul bloc.",
      "Ajustez la jambe du dessus pour que hanche et genou soient à angle droit.",
      "Ouvrez la bouche sans bouger la tête pour permettre l'écoulement des liquides.",
      "Couvrez la victime et vérifiez sa respiration régulièrement. Si elle cesse : passez au massage cardiaque."
    ],
    interdits: ["Ne rien donner à boire", "Ne pas laisser la victime seule"]
  },
  {
    id: "etouffement", emoji: "😮‍💨", titre: "Étouffement (adulte / enfant)",
    resume: "Ne peut plus parler, tousser ni respirer",
    intro: "Si la personne tousse efficacement, encouragez-la à tousser et ne faites rien d'autre.",
    alerte: "Si l'obstruction est totale (ne peut ni parler ni tousser), agissez immédiatement.",
    etapes: [
      "Penchez la personne en avant, soutenez sa poitrine avec une main.",
      "Donnez jusqu'à 5 claques vigoureuses dans le dos, entre les omoplates, avec le talon de la main.",
      "Si inefficace : placez-vous derrière elle, poing fermé au creux de l'estomac (au-dessus du nombril), l'autre main par-dessus.",
      "Tirez fortement vers vous et vers le haut : jusqu'à 5 compressions abdominales (méthode de Heimlich).",
      "Alternez 5 claques / 5 compressions jusqu'à désobstruction.",
      "Si la personne perd connaissance : allongez-la, alertez et commencez le massage cardiaque.",
      "Après des compressions abdominales, un avis médical est nécessaire."
    ],
    interdits: ["Ne pas mettre les doigts à l'aveugle dans la bouche", "Femme enceinte / personne obèse : compressions sur le thorax et non l'abdomen"]
  },
  {
    id: "etouffement-bebe", emoji: "👶", titre: "Étouffement du nourrisson (< 1 an)",
    resume: "Bébé qui ne peut plus respirer ni pleurer",
    intro: "Chez le nourrisson, on ne fait JAMAIS de compressions abdominales.",
    alerte: "Faites alerter le 15 / 112 immédiatement.",
    etapes: [
      "Couchez le bébé à plat ventre sur votre avant-bras, tête plus basse que le corps, en tenant sa mâchoire.",
      "Donnez jusqu'à 5 claques dans le dos, entre les omoplates, avec le talon de la main.",
      "Si inefficace : retournez-le sur le dos sur l'autre avant-bras, tête toujours plus basse.",
      "Avec 2 doigts au centre de la poitrine, faites jusqu'à 5 compressions thoraciques lentes et profondes.",
      "Alternez 5 claques / 5 compressions jusqu'à expulsion du corps étranger.",
      "S'il perd connaissance : réanimation cardio-pulmonaire adaptée au nourrisson."
    ],
    interdits: ["Ne pas secouer le bébé", "Ne pas le suspendre par les pieds"]
  },
  {
    id: "hemorragie", emoji: "🩸", titre: "Hémorragie (saignement abondant)",
    resume: "Le sang coule abondamment ou gicle",
    intro: "Un saignement abondant peut entraîner la mort en quelques minutes.",
    alerte: "Appuyez d'abord, alertez ensuite (ou faites alerter).",
    etapes: [
      "Protégez vos mains (gants, sac plastique) si possible.",
      "Appuyez fortement et directement sur la plaie avec vos doigts ou la paume de la main.",
      "Allongez la victime.",
      "Remplacez la compression manuelle par un pansement compressif (tissu propre + bande serrée) si possible.",
      "Si le saignement ne s'arrête pas sur un membre, ou si la compression est impossible : posez un garrot au-dessus de la plaie et notez l'heure.",
      "Couvrez la victime, surveillez-la et rassurez-la jusqu'à l'arrivée des secours."
    ],
    interdits: ["Ne jamais retirer un garrot posé", "Ne pas retirer un objet planté dans la plaie"]
  },
  {
    id: "brulure", emoji: "🔥", titre: "Brûlure",
    resume: "Brûlure thermique, chimique ou électrique",
    intro: "Refroidir rapidement limite l'aggravation de la brûlure.",
    alerte: "Appelez les secours si la brûlure est plus grande que la moitié de la paume de la victime, touche le visage, les mains, les articulations, les parties génitales, ou si c'est un enfant.",
    etapes: [
      "Arrosez immédiatement la brûlure avec de l'eau tempérée (15 à 25 °C) pendant au moins 15 à 20 minutes.",
      "Retirez les vêtements et bijoux non collés à la peau pendant l'arrosage.",
      "Brûlure chimique : arrosez abondamment et retirez les vêtements imbibés.",
      "Brûlure électrique : coupez le courant avant de toucher la victime, puis alertez systématiquement.",
      "Protégez la brûlure avec un linge propre ou un film alimentaire."
    ],
    interdits: ["Pas de glace, beurre, dentifrice ou corps gras", "Ne pas percer les cloques", "Ne pas retirer ce qui colle à la peau"]
  },
  {
    id: "avc", emoji: "🧠", titre: "AVC (accident vasculaire cérébral)",
    resume: "Visage déformé, bras faible, parole troublée",
    intro: "Retenez VITE : Visage paralysé, Inertie d'un membre, Trouble de la parole, En urgence → 15.",
    alerte: "Chaque minute compte : appelez le 15 / 112 immédiatement et notez l'heure des premiers signes.",
    etapes: [
      "Demandez à la personne de sourire : un côté du visage tombe-t-il ?",
      "Demandez-lui de lever les deux bras : un bras retombe-t-il ?",
      "Demandez-lui de répéter une phrase simple : parle-t-elle difficilement ?",
      "Au moindre signe : appelez le 15 / 112 et notez l'heure de début.",
      "Installez-la au calme, en position confortable. Si elle perd connaissance et respire : PLS."
    ],
    interdits: ["Ne rien donner à boire ni à manger", "Ne pas attendre que les signes disparaissent"]
  },
  {
    id: "malaise", emoji: "😵", titre: "Malaise",
    resume: "Sensation anormale, douleur dans la poitrine, sueurs…",
    intro: "Un malaise peut annoncer un problème grave (crise cardiaque, hypoglycémie…).",
    alerte: "Douleur dans la poitrine, difficulté à respirer, sueurs : appelez le 15 sans attendre.",
    etapes: [
      "Mettez la personne au repos : allongée, ou assise si elle respire mal.",
      "Desserrez les vêtements. Rassurez-la.",
      "Posez-lui des questions : depuis quand ? Est-ce la première fois ? Prend-elle un traitement ? Est-elle diabétique ?",
      "Appelez le 15 et transmettez ces informations au médecin.",
      "Personne diabétique consciente : donnez du sucre (morceaux de sucre, jus de fruit) si le médecin l'indique ou si elle le demande.",
      "Surveillez-la jusqu'à l'arrivée des secours."
    ],
    interdits: ["Ne pas laisser la personne repartir seule", "Ne pas donner de médicament de votre propre initiative"]
  },
  {
    id: "convulsions", emoji: "⚡", titre: "Crise convulsive (épilepsie)",
    resume: "Contractions involontaires, perte de connaissance",
    intro: "La crise s'arrête généralement d'elle-même en quelques minutes.",
    alerte: "Appelez le 15 / 112 si la crise dure plus de 5 minutes, se répète, ou si la personne est blessée, enceinte ou si c'est sa première crise.",
    etapes: [
      "Écartez les objets dangereux autour de la personne.",
      "Protégez sa tête (vêtement plié, coussin).",
      "Notez l'heure de début de la crise.",
      "Après la crise, si elle est inconsciente et respire : mettez-la en PLS.",
      "Restez auprès d'elle et rassurez-la à son réveil."
    ],
    interdits: ["Ne rien mettre dans sa bouche", "Ne pas la maintenir de force"]
  },
  {
    id: "traumatisme", emoji: "🦴", titre: "Chute, fracture, traumatisme",
    resume: "Douleur après un choc, déformation, impossibilité de bouger",
    intro: "Le principal risque est d'aggraver une lésion, notamment de la colonne vertébrale.",
    alerte: "Chute de grande hauteur, choc à la tête, nuque ou dos : ne bougez pas la victime et appelez le 15 / 18 / 112.",
    etapes: [
      "Demandez à la victime de ne pas bouger.",
      "Si elle est consciente et se plaint du cou ou du dos : maintenez sa tête dans l'axe avec vos mains.",
      "Membre blessé : ne le bougez pas, calez-le dans la position où il se trouve (vêtements, coussins).",
      "Plaie avec la fracture : couvrez-la avec un linge propre.",
      "Couvrez la victime et surveillez-la jusqu'à l'arrivée des secours."
    ],
    interdits: ["Ne pas tenter de remettre un os en place", "Ne pas retirer le casque d'un motard (sauf si arrêt respiratoire et formé)"]
  }
];
