import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		progress: 'Design'
	}
});

export default app;