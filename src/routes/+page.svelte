<svelte:head>
    <title> Thoughts | a biase-d project </title>
</svelte:head>
<script>
    $: loading = false
</script>
<div class="flex flex-col items-center p-5">
    <nav class="mb-10">
        <a href="/" class="text-5xl flex items-center">
            💭 
        </a>
    </nav>
    <span class="chip variant-soft-error"> Development Build </span>
<section class="w-full max-w-md p-5 ">
    <p class="text-3xl mb-5"> Hi there </p>
    <p>Welcome to our serene platform, a tranquil space for capturing your thoughts. Embrace the calmness as you express yourself authentically. Let your thoughts flow freely in this sanctuary of reflection. Enjoy the stillness and find solace in the simplicity of jotting down your thoughts.</p>
</section>
<section class="p-5">
    <p class="text-3xl mb-5"> Get Started </p>
    <form
      method="POST"
      action="?/signin"
      class="grid justify-center gap-1">
        <div>
            <input type="text" name="username" class="input rounded-none p-2 rounded-tl-md rounded-tr-md outline-none">
            <input type="password" name="username" class="input rounded-none p-2 rounded-bl-md rounded-br-md outline-none border-t-0">
        </div>
        {#if !loading}
            <div class="grid my-2">
                <button type="submit" class="btn variant-soft-primary rounded-md"> Sign in </button>
                <button type="submit" class="btn variant-soft-secondary rounded-md my-1"> Create an account </button>
            </div>
        {:else}
            <button type="submit" class="btn variant-soft-primary rounded-md my-2 cursor-not-allowed animate-pulse" disabled> Sign in </button>
        {/if}
    </form>
</section>
</div>