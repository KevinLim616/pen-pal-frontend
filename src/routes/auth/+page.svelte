<script>
	import '../../app.css';
	import SocialAuthBtn from '$lib/socialAuthBtn.svelte';
</script>

<svelte:head>
	<title>Login</title>
	<!--study about meta tag ltr-->
	<!-- <meta> -->
</svelte:head>

<main class="flex justify-center ">
	<div class="">
		<h1 class="text-5xl font-bold text-myBlack ">Welcome Back</h1>
		<p class="pl-2 text-myBlack">
			don't have an account? <a href="#" class="text-primary">sign up here</a>
		</p>
        <div class="pt-4 gap-3 flex-col flex">
            <SocialAuthBtn
                icon="logos:facebook"
                fontStyle="text-white font-medium text-2xl"
                text="Continue with Facebook"
                width="21"
                btnStyle="bg-[#1877F2] flex gap-2 items-center  rounded-xl py-1 px-3 cursor-pointer active:opacity-70 select-none"
            />
            <SocialAuthBtn
                fontStyle="text-[#757575] font-medium text-2xl"
                text="Continue with Google"
                width="21"
                icon="logos:google-icon"
                btnStyle="flex gap-2 items-center border-2 rounded-xl py-1 px-3 cursor-pointer active:opacity-70 select-none"
            />
        </div>
        <div class="divider ">or</div>
        <form action="">
            
        </form>
	</div>
</main>
