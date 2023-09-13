<script>
	import '../app.postcss';
	import '@fontsource-variable/caveat';


	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { AppShell, storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>
<AppShell slotPageFooter="flex justify-center">
	<slot />
	<svelte:fragment slot="pageFooter">
		<style>
			a {
				font-family: 'Caveat Variable', sans-serif;
			}
		</style>
		<a href="https://github.com/biase-d" class="opacity-70">a biase-d project</a>
	</svelte:fragment>
</AppShell>

