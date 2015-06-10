if(projects.find().count() === 0) {
	projects.insert({
		title: 'HvA',
		description: 'Tijdens mijn studie CMD focus ik mij voornamelijk op front-end development. Met het doen van de User Experience minor wil ik mij verbreden en verbeteren op voornamelijk interactie ontwerp gebied. Een voorbeeld van project wat we via de HvA deden was voor Q42 in het najaar van 2014. De vraag was om de medewerkers tussen de filialen meer bij elkaar te brengen. Wij deden onderzoek, bedachten een platform en bouwden het met Meteor.js.',
		img: '//static.tobiasstikvoort.nl/qourant.png',
		link: 'http://goldendot.meteor.com/',
		git: 'https://github.com/tstikvoort/Qourant'
	});
	projects.insert({
		title: 'Freelance',
		description: 'Buiten de HvA ben ik graag bezig met development. Ik doe geregeld freelance opdrachten voor het maken van websites. Vaak zijn deze websites gemaakt met Wordpress. Een voorbeeld van een freelance opdracht die ik deed was voor VidyMe. VidyMe is een webapplicatie waarmee je in de browser een filmpje opneemt waarin je jezelf presenteert. De webapplicatie was er al, de website van de dienst zelf bouwden een vriend en ik.',
		img: '//static.tobiasstikvoort.nl/vidyme.png',
		link: 'http://www.vidyme.com',
		git: ''

	});
	projects.insert({
		title: 'Werk',
		description: 'In het voorjaar van 2014 liep ik stage als front-end developer bij Wezz e-Commerce, een bedrijf wat zich specialiseert in het ontwikkelen van webshops op maat op basis van Magento. Na mijn stage ben ik blijven werken als developer, begon ik meer back-end dingen op te pakken en houd ik mij ook meer bezig met maatwerk.',
		img: '//static.tobiasstikvoort.nl/wezz.png',
		link: 'https://www.wezz.nl',
		git: ''
	});
}
